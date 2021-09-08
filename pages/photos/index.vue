<template>
  <PageLayout title="Photos">
    <div class="photo">
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
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
    },
  },
}
</script>

<style lang="scss" scoped>
.photo {
  padding-top: 3rem;
  &_list {
    list-style: none;
    display: grid;
    grid-gap: 2vw;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  &_listItem {
    height: 0;
    padding-bottom: 100%;
    position: relative;
    cursor: pointer;
  }
  &_img {
    background-color: aliceblue;
    box-sizing: border-box;
    padding: 0.5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
