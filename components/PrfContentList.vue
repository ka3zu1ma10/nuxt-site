<template>
  <div class="prf_contents">
    <section
      v-for="content in contents"
      :key="content.id"
      class="prf_contents-item"
    >
      <PrfContent
        :title="content.title"
        :dom="content.content"
        :img="content.img.url"
        class="prf_contents-item-inner"
      />
    </section>
  </div>
</template>
<script>
import axios from "axios"
import PrfContent from "./PrfContent.vue"

export default {
  components: { PrfContent },
  data() {
    return {
      contents: [],
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    asyncData() {
      axios
        .get("https://max-portfolio.microcms.io/api/v1/pf-prof_contents", {
          headers: { "X-API-KEY": "3b4f407a-57ef-4651-9f22-e77f3f1119cd" },
        })
        .then((res) => {
          this.items = res.data
          this.contents = res.data.contents
          console.log(this.contents)
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.prf_contents {
  &-item {
    .prf_contents-item-inner {
      display: flex;
      @media (max-width: 600px) {
        flex-flow: column-reverse;
      }
    }
    &:nth-of-type(even) {
      .prf_contents-item-inner {
        flex-flow: row-reverse;
        @media (max-width: 600px) {
          flex-flow: column-reverse;
        }
      }
    }
  }
}
</style>
