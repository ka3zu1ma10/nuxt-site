<template>
  <main>
    <article class="section section_top">
      <Message />
    </article>
    <article class="section section_back-green">
      <Profile />
    </article>
  </main>
</template>

<script>
import Message from '~/components/Message.vue';
import Profile from '~/components/Profile.vue';

export default {
  components: {
    Message,
    Profile
  }
}
</script>
<style lang="scss" scoped>
.section {
  padding: 2rem 1rem;
  color: $colour_main_green;

  &_top {
    padding-bottom: 0;
  }

  &_back-green {
    background-color: $colour_main_green;
    color: #fff;
  }
}
</style>
