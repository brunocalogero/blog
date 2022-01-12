<template>
  <div class="wrapper">
    <img class="avatar" src="../static/img/pp.jpeg">
    <div class="flex flex-row space-x-10 items-center mb-10">
      <a href="https://github.com/brunocalogero" target="_blank">
        <GithubLogo class="social" />
      </a>
      <a href="https://twitter.com/TheReequiem" target="_blank">
        <TwitterLogo class="social" />
      </a>
      <a href="https://www.linkedin.com/in/brunocalogero/" target="_blank">
        <LinkedinLogo class="social" />
      </a>
      <a href="https://www.instagram.com/bruquiem/" target="_blank">
        <InstagramLogo  class="social" />
      </a>
    </div>
    <!-- add intro with small three dot animation -->
    <div class="flex flex-wrap place-content-center md:w-8/12">
      <IndexCard v-for="item in menuItems" :key="item.name" :title="item.name"/>
    </div>
  </div>
</template>

<script>
import GithubLogo from "~/static/socials/github.svg?inline";
import TwitterLogo from "~/static/socials/twitter.svg?inline";
import LinkedinLogo from "~/static/socials/linkedin.svg?inline";
import InstagramLogo from "~/static/socials/instagram.svg?inline";

export default {
  components: {
    GithubLogo,
    TwitterLogo,
    LinkedinLogo,
    InstagramLogo,
  },
  data: () => ({
    menuItems: [
      {name: 'about'}, 
      {name: 'blog'},
    ],
  })
}
</script>

<style lang="postcss">
.wrapper {
  @apply min-h-screen flex flex-col justify-center items-center mx-auto;
}

.avatar {
  @apply object-cover rounded-full h-48 w-48 mb-10 shadow-lg; 
}

.social {
  @apply cursor-pointer transition duration-200 ease-out transform;
}

.social:hover {
  @apply -translate-y-1 scale-110;
}
</style>
