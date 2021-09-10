<template>
  <section class="service">
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
  name: "ServiceContent",
  props: {
    title: { type: String, required: true },
    dom: { type: String, required: true },
    img: { type: String, required: true },
  },
}
</script>

<style lang="scss">
.service {
  padding: 2rem 0;
  font-size: 1.2rem;
  .content {
    flex: 3;
    margin: auto 1rem;
    ul {
      padding-left: 1rem;
    }
    strong {
      font-size: 1.2em;
      color: #ff4b61;
    }
  }
  .img-wrap {
    flex: 2;
    // padding: 1rem;
    padding: 1.5rem;
    .img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
      @include shadow;
    }
  }
}
</style>
