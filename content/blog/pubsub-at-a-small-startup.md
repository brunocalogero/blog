---
tags: []
created_at: 2022-09-23T23:00:00Z
created_by: Bruno Calogero

---
## Table of Contents

* [Publishing and Subscribing to a **Simple Queue Service (SQS)** Queue]()
* [Publishing to a **Simple Notification Service (SNS)** topic & Subscribing to an "Events" Queue]()
* [Overview Graph]()

Our Golang pubsub package was created by none other than our CTO @Daniel Saul.

* why did we build our own pubsub package?
  * @Daniel Saul wasn't happy about the available packages/libraries out there and decided to write his own package for pubsub. We wanted to support subscribing and publishing to individual queues as well as SNS topics & Queues tied to the latter.
  * Essentially our pubsub package is an abstraction on top of the AWS SDK for GoLang so that we have better flexibility and easier usage in publishing and subscribing messages within our different microservices.

## Publishing and Subscribing to a **Simple Queue Service (SQS)** Queue

* A microservice can publish to a single or multiple SQS Queues. It's simply a matter of specifying the SQS Queue URL to the publisher. One also needs to make sure that the SQS queue exists. Hence, it is important to make sure that the relevant queue is being created in our terraform config. This config can generally be found in the terraform file relevant to the microservice which the queue is related to. A microservice can contain a publisher that publishes to a queue that is "defined" or subscribed to in another microservice. Essentially, one is not limited to publishing and subscribing to a queue in the same microservice. The example below clarifies this: we define a publisher in our "monolith" microservice as we would like to publish messages to the "activity queue"; and we define the subscriber in our activity microservice as we want to deal with the messages sent to the "activity queue" in the latter.
* Defining a new publisher, that publishes directly to a SQS Queue is simply a matter of providing a "driver sender" (in the case below we are using the `sqs` driver from our own pubsub package, no "_fan-out_" is needed as we will see later), a "logger" and the necessary middleware.

      // defining a SQS queue publisher in a microservice (from monolith main.go)
      activityQueue = pubsub.NewPub(
      	sqs.New(awsSession, cfg.ActivityQueue.SQSQueueURL), 
      	logger, 
      	pubmw,
      )

  Notice: the activityQueue here is of type `*pubsub.Pub`
* Defining a new subscriber, that subscribes directly to a SQS Queue is simply a matter of providing a "driver receiver" (in the case below we are using the `sqs` driver from our own pubsub package) a "logger" and the necessary middleware.

      // defining a SQS queue subscriber in another microservice (from activity main.go)
      s.activityQueue = pubsub.NewSub(
      	sqs.New(awsSession, cfg.ActivityQueue.SQSQueueURL),
      	logger,
      	middleware.HandleDefaults(logger),
      )

  Notice that the activityQueue here is of type `*pubsub.Sub` and is part of the activity microservice struct definition. It is part of the latter because this "subscriber" is a task that is to "consume" and "stop" depending on the state of the microservice:

      tasks.Add(s.activityQueue.Consume, s.activityQueue.Stop)

## Publishing to a **Simple Notification Service (SNS)** topic & Subscribing to an "Events" Queue

* In general, publishing to an SNS topic is synonymous with the concept of _"fan-out"_. The idea is that as one publishes a message to a SNS topic, this message is then accessible to "whomever" subscribes to the SNS topic. For example, a message published to a topic can then be distributed to multiple different queues that subscribe to the topic (thus "fanning-out" from SNS to SQS queues).

  Defining a publisher to a SNS topic is simply a matter of providing a "driver sender" (in the case below we are using the `snssqs` driver from our own pubsub package, used for "_fan-out_", notice here that we provide the SNS topic ARN, not the Queue URL) a "logger" and the necessary middleware.

      // defining a SNS topic publisher in a microservice (from monolith main.go)
      eventsPub := pubsub.NewPub(
      	snssqs.NewSender(awsSession, cfg.Events.SNSTopicARN), 
      	logger, 
      	pubmw,
      )

  Notice: the eventsPub here is of type `*pubsub.Pub`
* Having a SNS topic tied with SQS queues allows for _"persistant messaging"_. Essentially, no concurrency is needed between a message published to a SNS topic and whatever would be handling the message (in our case a SQS queue)
* As we have seen before, each microservice can then have their own SQS queue(s). As it currently stands, if a microservice requires to listen to an event that was emitted to one of our SNS topics (atm we only have two lol - and one is for alarms) we need a queue to be defined by the microservice that is specifically tied to the latter. We have a tendancy of calling these queues "Events" Queues (this is a subscriber queue). They are just like any other queues, however they subscribe to an SNS topic and more specifically "events" or "messages" published to the SNS topic (as per a terraform definition of the queue).

  Defining a new subscriber, that subscribes directly to a SQS Queue is simply a matter of providing a "driver receiver" (in the case below we are using the `snssqs` driver from our own pubsub package) a "logger" and the necessary middleware.

      // defining a SQS subscriber to queue tied to SNS topic in a microservice (from monolith main.go)
      s.events = pubsub.NewSub(
      	snssqs.NewReceiver(awsSession, cfg.Events.SQSQueueURL),
      	logger,
      	pubsubmw.HandleDefaults(logger),
      )

  Notice: this is very similar to what was described above for standard sqs queue subscription.

## Overview Graph

Here is a simple graph that condenses all the points mentioned above for the visual learners:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e83e4b6-c666-46f7-9e68-41ebcc4ddc70/pubsub](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6e83e4b6-c666-46f7-9e68-41ebcc4ddc70/pubsub_RL.001.png)

Notice: the emailer and cronjob queues are FIFO queues (different to that used in our pubsub package). They have been added to the diagram for the sake of completion.