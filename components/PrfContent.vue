<template>
  <section class="prf">
    <div class="content">
      <h3 class="title">
        {{ title }}
      </h3>
      <section class="text" v-html="dom" />
    </div>
    <div class="img-wrap">
      <img :src="img" alt="" class="img" />
    </div>
  </section>
</template>

<script>
export default {
  name: "PrfContent",
  props: {
    title: { type: String, required: true },
    dom: { type: String, required: true },
    img: { type: String, required: true },
  },
}
</script>

<style lang="scss">
.prf {
  padding: 2rem 0;
  font-size: 1.2rem;
  .content {
    flex: 1;
    margin: auto 1rem;
    ul {
      padding-left: 1rem;
    }
  }
  .img-wrap {
    flex: 1;
    // padding: 1rem;
    padding: 1.5rem;
    .img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      box-shadow: -1rem 1rem rgba(#fff, 0.5);
    }
  }
}
</style>
