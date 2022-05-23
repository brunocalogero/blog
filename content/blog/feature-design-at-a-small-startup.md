---
title: Feature design at a small startup
created_at: 2022-01-25T10:00:00Z
created_by: Bruno Calogero
tags:
- product
- management
- product management
- features
- design
- feature design
- proposals
- shape up

---
I still remember when we used to have lovely RFCs to describe what our engineering team would have to implement... Two years later, those days are long gone and our engineering has only but matured..

Today, we have a unique cross disciplinary product team.

In other words, a product engineering team that closely interacts with sales, customer success & marketing.

Our main goals include providing direct value to our clients but also to our internal teams, through developer tooling, site reliability, scaling, deployment and analytics.

In this article, I’ll try to give you a basic gist into how our small startup is currently successfully delivering features at a fast pace (2-3 per week - variable in size & scope).

## A brief introduction to how our roadmap is built

To briefly contextualise how we get to feature proposals, it's good to know where these ideas originate from. This can get involved so we will only touch the basics here.

![](/img/fdasss-1.png)

A prioritised opportunities table is gradually formed on the basis of general strategy to wider feedback "inputs" from our various teams:

* Sales could report that an interested client will more likely join if they are promised certain features.
* Customer success might be informed that a client would like to see improvements on an existing feature during their quarterly business meetings.
* Or simply, we notice that some essential refactoring might be needed to lubricate other key opportunities

The list goes on and on...

We call them "opportunities" and not "problems" at this stage, since we have a chance to provide value and solve the problems.

To make sure we know what to add to our final roadmap, we make sure to score each opportunity (cost impact analysis), resulting in an ordered, prioritised list :)

![](/img/fdasss-2.png)

Finally these opportunities are gradually added to our "roadmap", one card per opportunity.

This roadmap is continually updated and is **open to everyone**, creating frictionless awareness of the product teams current and future work.

![](/img/fdasss-3.png)

Each card leads us to a "proposal" which itself is composed of a few phases as we will see next.

## From roadmap to feature proposal

![](/img/fdasss-4.png)

The discovery phase, also know among us as the "spaghetti phase" is where we gather all the essential information we have around an opportunity.

Depending on the opportunity this could include:

* Understanding the feedback tied to the opportunity and filtering it or asking more questions around it.
* Understanding our existing data and making assumptions which we then address on calls with specific clients (this could also be emails with concise questions).
* Understanding the potential scope of the project and its impact or blast radius.
* Prototyping and concluding if the opportunity is too complex for the moment.

It's important to note that not all opportunities make it through this phase, especially if the effort required might feel too complex or the feedback isn't justified or backed by coherent data (which, btw, is not always available when a startup is in its early infancy).

If the opportunity makes it through discovery, the next steps are the approach & technical design, known as the "proposal".

## The Proposal document (or Spec)

This is the core of the feature work, where the behaviours are defined, the scope of the work clarified and the technical design elucidated.

The proposal document serves as a historical record of how the feature was built and what the decision making behind it was. It's an organic and evolving document where discussion is encouraged.

As we define the behaviours, some of the latter might not be essential in completing the project and are marked as "out of scope". Indeed, we also keep record of things that don't make it through!

The two most important parts to this document are the approach & the technical design. Before these sections a brief "need" is used to gauge the appetite of the reader and briefly contextualise the whole proposal.

### Need

The need tries to answer the following question: **_Why_** _should we do this?_

This is an opportunity to briefly give some context to the reader as to what the problem is, a summary of the previous discovery that was made to support the proposal & simply the motivation for solving the problem.

One could include a concrete example of the user being exposed to the problem addressed and how solving the problem aligns with the company and product strategy / vision.

### Approach

An approach tries to answer the following question: **_What_** _should we do?_

This is an in-depth description of the behaviours that will be introduced by the new proposed feature.

The behaviours are described in terms of their logic and visual changes that might be introduced

![](/img/fdasss-5.png)

An example behaviour and high fidelity Figma design

It can include sketches and Figma designs that visually complement the behaviours being described.

> ℹ️ The goal isn't to list out things here, we still want to try to keep some order and structure.

> ℹ️ This is not the place to add any pseudo code! in fact, nowhere really is :)

The approach isn't set in stone and we can iterate on it at any time, especially if behaviours are being simplified.

The approach is written before the technical design, it serves as a reference for the latter.

It's also important to note that the approach is continually reviewed by other engineers; they can give their input and feedback on the proposed behaviours or can help in choosing between different possible options.

Once there is general consensus around the approach we move on to technical design. The people involved for this next steps are usually engineers, so it could be someone different to the person(s) who wrote the approach.

### Technical Design

The technical design tries to answer the following question: **_How_** _should we do it?_

Once we are happy with our behaviours in the approach, we start technical design.

> ❗ It is common that technical decisions lead to changes in the approach. Perhaps a behaviour is too complex to implement or not essential for an MVP.. remember nothing is set in stone.

This section is generally separated in two: Backend & Frontend sections are created to map out the technicals behind the behaviours.

As an example, a behaviour could require a new side panel where the user can take multiple API related actions. In this case we would describe all the technical requirements involved in creating a new component in the FE section and respectively on the BE section we would map the API endpoint needed, what service the logic lives, any Proto files required, any internal RPC endpoints, the core logic, necessary validation..etc.

Usually the granularity of the technical details should leave enough space for the implementor to have some freedom, however the essentials need to be there, especially interface definitions (API, RPCs, Protos, event methods).

We like to keep naming as vertical as possible in our code: if for instance our FE displays a "Reject Remediation" action to the user, we will keep all methods related to this action as close as possible to this name. Your architecture might be different so this is more personal but overall we have noticed to be good practice.

Once technical implementation is finished it also undergoes continual reviewing, this generally results in a finalised proposal, with no unanswered questions and potentially some out of scope behaviours.

Last but certainly **not least**, we define the milestones for the project.

### Milestones

Our projects are **fixed time, variable scope**. So are our milestones..

The latter play an extremely important role as they gradually introduce new behaviour to the platform.

Each milestone is deliverable to production and can be released. It usually include behaviours that immediately provide value.

A project may have 5 milestones for instance, however only 3 might suffice to provide the core value prop of the proposal. This is our MVP; we still solve the approach and avoid waiting unnecessary time on the project, unless all milestones are deemed essential.

As final work we also like to define how we will raise **awareness** for the the new feature (usually intercom, emailing and internal messaging) and how we define the **success criteria** for the project (this is usually data based or our users changing their behaviours).

### Development

Usually, the engineers who write the technical design, generally end up developing the feature.

Indeed, once we are happy with the technical design and our milestones, we ticket tasks sensibly on our Linear board and smash away..

> ❗ An Engineer should always refer to the proposal document and not only the ticket contents. We need to work with the wider feature in mind, not silo our mind. Simply referring to the ticket can result in an incomplete feature once development is over, things are easily forgotten. Referring to the proposal is an easy way to keep responsibility of completing the full feature.

## Conclusion

![](/img/fdasss-6.png)

At Risk Ledger we have been able to find an efficient way to maximise our feature output through a defined opportunities prioritisation framework and an efficient proposal system. Everything remains fully transparent and accessible by any team member along the way.

Each proposal turns into an achievable technical design separated into multiple deliverable milestones. Fixed time, variable scope.

The beauty of this process is that someone can create a proposal without being the one who implements.

The proposal can be reviewed at any stage by anyone outside of the product team.

In the process, we create a reference-able history of features introduced in the platform and keep track of how they evolve. One can easily come back to the proposal and obtain a global context of why and how things have changed.

We have found this methodology to work well for us and we constantly iterate on it when we spot missing essentials. It will be interesting to see how our proposal mechanism evolves as we scale to multiple product teams!
