<template>
  <PageLayout title="Photos">
    <div class="photos">
      <ul class="photo_list">
        <li
          v-for="(item, index) in items"
          :key="item.src"
          class="photo_listItem"
        >
          <img
            v-lazy="item"
            class="photo_img"
            alt
            @click="openGallery(index)"
          />
        </li>
      </ul>
    </div>
    <LightBox
      ref="lightbox"
      :media="items"
      :show-light-box="false"
      :show-thumbs="false"
    />
  </PageLayout>
</template>
<script>
import PageLayout from "@/components/PageLayout"
import LightBox from "vue-image-lightbox"
import axios from "axios"

require("vue-image-lightbox/dist/vue-image-lightbox.min.css")

export default {
  components: {
    PageLayout,
    LightBox,
  },
  data() {
    return {
      items: "",
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    asyncData() {
      axios
        .get("https://max-portfolio.microcms.io/api/v1/pf-photo", {
          headers: { "X-API-KEY": "3b4f407a-57ef-4651-9f22-e77f3f1119cd" },
        })
        .then((res) => {
          this.items = res.data.contents.map((val) => {
            return {
              src: val.data.url,
              loading: "/img/loading.png",
            }
          })
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.photo {
  &_list {
    list-style: none;
    display: flex;
    flex-flow: wrap;
    margin: 0 auto;
    justify-content: center;
  }
  &_listItem {
    background-color: white;
    padding: 0.2rem;
    width: 12rem;
    max-width: 50%;
    box-sizing: border-box;
    height: 8rem;
    max-height: auto;
    border: solid 0.2rem $colour_main_green;
  }
  &_img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
