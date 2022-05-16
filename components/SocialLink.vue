<template>
    <a :href="socialLink" class="social-link" target="_blank" alt="altText">
        <i :class="fontAwesome"></i>
    </a>
</template>

<script>
export default {
    name: 'SocialLink',
    props: {
        socialLink: String,
        altText: String,
        fontAwesome: String,
    },
}
</script>