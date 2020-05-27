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
  background-color: $colour_main_green;
}
.page_wrap {
  padding: 1rem 0.5rem;
}
.title {
  color: white;
  text-align: center;
  font-size: 2rem;
  padding-bottom: 0.2rem;
  &::after {
    background-color: white;
    border-radius: 0.2rem;
    content: "";
    display: block;
    height: 0.4rem;
  }
}
</style>
