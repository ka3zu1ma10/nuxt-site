<template>
  <PageLayout title="Photos">
    <div class="photos">
      <ul class="photo_list">
        <li v-for="(img, index) in images" :key="img" class="photo_listItem">
          <img v-lazy="img" class="photo_img" alt @click="openGallery(index)" />
        </li>
      </ul>
    </div>
    <LightBox ref="lightbox" :media="images" :show-light-box="false" :show-thumbs="false" />
  </PageLayout>
</template>
<script>
import PageLayout from "@/components/PageLayout"
import LightBox from "vue-image-lightbox"

import ImgSummary from "@/contents/photos/photo.json"

require("vue-image-lightbox/dist/vue-image-lightbox.min.css")

export default {
  components: {
    PageLayout,
    LightBox,
  },
  data() {
    let imgDate = []
    ImgSummary.forEach((img) => {
      img['loading'] = '/img/loading.png';
      imgDate.push(img)
    })
    return {
      images: imgDate,
      lightboximgs:ImgSummary
    }
  },
  methods: {
    openGallery(index) {
      this.$refs.lightbox.showImage(index)
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
  }
  &_listItem {
    background-color: white;
    padding: 0.2rem;
    width: 12rem;
    box-sizing: border-box;
    height: 8rem;
    border: solid 0.2rem $colour_main_green;
  }
  &_img {
    display: block;
    margin: 0 auto;
    width: auto;
    height: 100%;
  }
}
</style>
