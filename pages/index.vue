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
import Message from "@/components/Message.vue"
import Profile from "@/components/Profile.vue"

export default {
  components: {
    Message,
    Profile,
  },
}
</script>
<style lang="scss" scoped>
.section {
  padding: 2rem 1rem;
  color: $colour_main_green;

  &_top {
    padding-bottom: 0;
    background-color: #fff;
  }

  &_back-green {
    background-color: $colour_main_green;
    color: #fff;
  }
}
@media (max-width: 600px) {
  .section {
    padding: 1rem 0.5rem;
  }
}
</style>
