<template>
  <main class="main">
    <div class="page_wrap">
      <h2 class="title">{{ title }}</h2>
      <slot></slot>
    </div>
  </main>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="scss" scoped>
.main{
  background-color: $colour_main_green;
}
.page_wrap{
  padding: 1rem .5rem;
}
.title {
  color: white;
  text-align: center;
  font-size: 2rem;
  padding-bottom: .2rem;
  &::after {
    background-color: white;
    border-radius: .2rem;
    content: "";
    display: block;
    height: .4rem;  
  }
}
</style>