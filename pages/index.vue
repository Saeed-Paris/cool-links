<template>
  <section>
    <img src="assets/picture.webp" alt="A description of the picture of you or your 
    company/project logo">
    <h1>You Name Here</h1>
    <p>A cool description about you, your company or project! 🚀</p>
    <nav>
      <SocialLink
        socialLink = "https://facebook.com/username"
        altText = "Facebook"
        fontAwesome = "fab fa-facebook"
      />
      <SocialLink
        socialLink = "https://instagram.com/username"
        altText = "Instagram"
        fontAwesome = "fab fa-instagram"
      />
      <SocialLink
        socialLink = "https://twitter.com/username"
        altText = "Twitter"
        fontAwesome = "fab fa-twitter"
      />
      <SocialLink
        socialLink = "https://linkedin.com/in/username"
        altText = "LinkedIn"
        fontAwesome = "fab fa-linkedin-in"
      />
      <SocialLink
        socialLink = "https://github.com/username"
        altText = "GitHub"
        fontAwesome = "fab fa-github"
      />
      <SocialLink
        socialLink = "https://gitlab.com/username"
        altText = "GitLab"
        fontAwesome = "fab fa-gitlab"
      />
    </nav>
  </section>
</template>

<script>
import SocialLink from '~/components/SocialLink.vue'

export default {
  components: {
    SocialLink,
  }
}
</script>
