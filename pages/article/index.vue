<template>
  <PageLayout title="Article">
    <ul class="article_list">
      <li v-for="content in contents" :key="content.id" class="article_item">
        <div class="article_item-wraper">
          <a
            v-if="content.link"
            class="article_title"
            :href="content.url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ content.title }}
            <svg class="article_title_out" viewBox="0 0 24 24">
              <path :d="iOpenInNew" />
            </svg>
          </a>
          <nuxt-link
            v-else
            class="article_title"
            :to="`/article/${content.id}`"
          >
            {{ content.title }}
          </nuxt-link>
          <div class="article_date">
            <!-- <TagList class="article_tags" :tags="param.tags" /> -->
            <div>
              {{ new Date(content.date).getFullYear() }}/{{
                new Date(content.date).getMonth()
              }}/{{ new Date(content.date).getDate() }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </PageLayout>
</template>

<script>
import axios from "axios"
import PageLayout from "@/components/PageLayout"
import { mdiOpenInNew } from "@mdi/js"

export default {
  components: {
    PageLayout,
  },
  data() {
    return {
      contents: [],
      iOpenInNew: mdiOpenInNew,
    }
  },
  mounted() {
    this.asyncData()
  },
  methods: {
    asyncData() {
      axios
        .get("https://max-portfolio.microcms.io/api/v1/article", {
          headers: { "X-API-KEY": "3b4f407a-57ef-4651-9f22-e77f3f1119cd" },
        })
        .then((res) => {
          this.contents = res.data.contents
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.article {
  &_list {
    list-style: none;
    padding: 1rem 0;
    border-radius: 0.2rem;
  }
  &_item {
    background-color: #fff;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.2rem;
    @include shadow-active;
    &-wraper {
      position: relative;
      box-sizing: border-box;
    }
    &:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  &_title {
    font-size: 1.5rem;
    display: block;
    padding-bottom: 1.5rem;
    &_out {
      width: 0.8em;
    }
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
      pointer-events: auto;
      content: "";
      background-color: transparent;
    }
  }

  &_date {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
  }

  &_tags {
    flex: 1;
  }
}

@media (max-width: 600px) {
  .article {
    &_list {
      padding: 1rem 0;
    }
  }
}
</style>
