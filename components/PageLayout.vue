<template>
  <main class="main">
    <div class="page_wrap">
      <h2 v-if="title !== ''" class="title">
        {{ title }}
      </h2>
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.main {
  background-color: $colour_back_green;
}
.page_wrap {
  padding: 1rem 0.5rem;
}
.title {
  @include head_line;
}
</style>
