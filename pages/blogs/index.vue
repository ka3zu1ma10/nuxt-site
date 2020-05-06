<template>
  <main>
    <h1>blogs</h1>
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
  color: #1c4220;

  &_top {
    padding-bottom: 0;
  }

  &_back-green {
    background-color: #1c4220;
    color: #fff;
  }
}
</style>
