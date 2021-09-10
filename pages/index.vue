<template>
  <main>
    <article class="section section_top">
      <Message />
    </article>
    <div class="section section_back-green">
      <div class="page_wrap">
        <!-- <article class="prof">
          <h2>Kazuma's Data</h2>
          <section>
            <h3>所属</h3>
            <p>
              サイボウズ株式会社 開発本部 デザイン&amp;リサーチ
              <br />Poca11y(ポカリ)チーム 兼 サイボウズ
              Office/リモートサービスチーム
            </p>
          </section>
        </article> -->
        <ServiceContentList />
      </div>
    </div>
  </main>
</template>

<script>
import Message from "@/components/Message.vue"
import ServiceContentList from "@/components/ServiceContentList.vue"

export default {
  components: {
    Message,
    ServiceContentList,
  },
}
</script>
<style lang="scss" scoped>
.section {
  padding: 2rem 1rem;
  color: $colour_main_green;
  background-color: $colour_back_green;
  color: $colour_main_green;

  &_top {
    padding-bottom: 0;
    color: $colour_back_green;
    background-color: $colour_main_green;
  }
}
@include media-mobile() {
  .section {
    padding: 1rem 0.5rem;
  }
}
</style>
