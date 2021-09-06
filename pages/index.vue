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
        <PrfContentList />
      </div>
    </div>
  </main>
</template>

<script>
import Message from "@/components/Message.vue"
import PrfContentList from "@/components/PrfContentList.vue"

export default {
  components: {
    Message,
    PrfContentList,
  },
}
</script>
<style lang="scss" scoped>
.section {
  padding: 2rem 1rem;
  color: $colour_main_green;
  background-color: $colour_main_green;
  color: #fff;

  &_top {
    padding-bottom: 0;
    color: $colour_main_green;
    background-color: #fff;
  }
}
@media (max-width: 600px) {
  .section {
    padding: 1rem 0.5rem;
  }
}
</style>
