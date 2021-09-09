<template>
  <PageLayout title="blog">
    <ul class="blog_list">
      <li v-for="content in contents" :key="content.id" class="blog_item">
        <div class="blog_item-wraper">
          <nuxt-link class="blog_title" :to="`/blog/${content.id}`">
            {{ content.title }}
          </nuxt-link>
          <div class="blog_date">
            <!-- <TagList class="blog_tags" :tags="param.tags" /> -->
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

export default {
  components: {
    PageLayout,
  },
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
        .get(
          // your-service-id部分は自分のサービスidに置き換えてください
          "https://max-portfolio.microcms.io/api/v1/blog",
          {
            // your-api-key部分は自分のapi-keyに置き換えてください
            headers: { "X-API-KEY": "3b4f407a-57ef-4651-9f22-e77f3f1119cd" },
          }
        )
        .then((res) => {
          console.log(res.data.contents)
          this.contents = res.data.contents
        })
    },
  },
}
</script>
<style lang="scss" scoped>
.blog {
  &_list {
    list-style: none;
    padding: 1rem;
    border-radius: 0.2rem;
  }
  &_item {
    background-color: #fff;
    padding: 0.5rem;
    margin: 0 0.5rem;
    border-radius: 0.2rem;
    box-shadow: 0.2rem 0.2rem 0.2rem rgba($color: #000000, $alpha: 0.2);
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
  .blog {
    &_list {
      padding: 1rem 0;
    }
  }
}
</style>
