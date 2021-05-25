<template>
  <main class="page_wrap">
    <article class="blog">
      <header class="blog_header">
        <h2 class="blog_title">
          {{ items.title }}
        </h2>
        <div class="blog_date">
          <!-- <TagList class="blog_tags back-wite" :tags="formatTags" /> -->
          <time>
            {{ new Date(items.date).getFullYear() }}/{{
              new Date(items.date).getMonth()
            }}/{{ new Date(items.date).getDate() }}
          </time>
        </div>
      </header>
      <section class="blog_body" v-html="items.note" />
    </article>
  </main>
</template>

<script>
import axios from "axios"

export default {
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
        .get(
          `https://max-portfolio.microcms.io/api/v1${this.$vnode.data.key}`,
          {
            headers: { "X-API-KEY": "3b4f407a-57ef-4651-9f22-e77f3f1119cd" },
          }
        )
        .then((res) => {
          this.items = res.data
          console.log(res.data)
        })
    },
  },
    head() {
      const ogp = 'https://images.microcms-assets.io/assets/b4d6cd6e11634510b57f74a9041b1700/a0529c5ce555411da2b7511c1bc66500/default.png?txt='+this.items.title+'&txt-size=62&txt-color=fff&txt-align=middle,center&txt-fit=max'
    return { 
      title: this.items.title ,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:title', property: 'og:title', content: this.items.title },
        { hid: 'og:url', property: 'og:url', content: ogp},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.blog {
  &_header {
    color: #fff;
    margin-bottom: 1rem;
  }
  &_title {
    font-size: 2rem;
  }
  &_date {
    display: flex;
  }
  &_tags {
    flex: 1;
  }

  &_body {
    background-color: #fff;
    border-radius: 0.2rem;
    padding: 0.8rem;

    /deep/ {
      * {
        line-height: 1.5;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0.4rem 0 0.6rem;
        padding: 0 0.2rem;
        color: $colour_main_green;
      }

      h2 {
        border-bottom: solid 2px $colour_main_green;
      }
      h3 {
        border-left: solid 2px $colour_main_green;
      }

      ul,
      ol {
        margin: 0.4rem 0.4rem 0.6rem;
        padding-left: 1.4rem;
      }

      p {
        margin: 1.6rem 0;
      }

      hr {
        border: d 1px $colour_main_green;
        margin-top: 0.8rem;
        margin-bottom: 0.8rem;
        color: $colour_main_green;
      }
      blockquote {
        margin-left: 0.4rem;
        border-left: solid 0.4rem $colour_main_green;
        padding: 0.4rem;
        background-color: rgba($colour_main_green, 0.2);
      }
      table {
        border: solid 1px $colour_main_green;
        border-spacing: 0;
        th {
          padding: 0.4rem;
          background-color: rgba($colour_main_green, 0.2);
          border: solid 1px $colour_main_green;
        }
        td {
          padding: 0.4rem;
          border: solid 1px $colour_main_green;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .blog {
    &_title {
      font-size: 1.6rem;
    }
    &_body {
      /deep/ {
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0.2rem 0 0.4rem;
        }
        p {
          margin: 0.8rem 0;
        }
      }
    }
  }
}
</style>
