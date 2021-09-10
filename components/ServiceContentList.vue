<template>
  <section class="service_contents">
    <h2 class="service_contents-heading">My Service</h2>
    <section
      v-for="content in contents"
      :key="content.id"
      class="service_contents-item"
    >
      <ServiceContent
        :title="content.title"
        :dom="content.content"
        :img="content.img.url"
        class="service_contents-item-inner"
      />
    </section>
  </section>
</template>
<script>
import axios from "axios"
import ServiceContent from "./ServiceContent.vue"

export default {
  components: { ServiceContent },
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
        .get("https://max-portfolio.microcms.io/api/v1/pf-service_contents", {
          headers: { "X-API-KEY": "3b4f407a-57ef-4651-9f22-e77f3f1119cd" },
        })
        .then((res) => {
          this.items = res.data
          this.contents = res.data.contents
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.service_contents {
  &-heading {
    @include head_line;
  }
  &-item {
    .service_contents-item-inner {
      display: flex;
      @include media-mobile() {
        flex-flow: column-reverse;
      }
    }
    &:nth-of-type(even) {
      .service_contents-item-inner {
        flex-flow: row-reverse;
        @include media-mobile() {
          flex-flow: column-reverse;
        }
      }
    }
  }
}
</style>
