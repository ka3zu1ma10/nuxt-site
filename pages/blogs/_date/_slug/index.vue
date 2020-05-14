<template>
  <main class="page_wrap">
    <article class="blog">
      <header class="blog_header">
        <h2 class="blog_title">{{ title }}</h2>
        <div class="blog_date">
          <TagList class="blog_tags back-wite" :Tags="formatTags" />
          <time>{{ params.date }}</time>
        </div>
      </header>
      <div class="blog_body" v-html="bodyHtml"></div>
    </article>
  </main>
</template>

<script>
import { sourceFileArray } from '../../../../contents/blogs/summary.json'
import TagList from "../../../../components/TagList";

export default {
  components: {
    TagList
  },
  validate({ params }) {
    return sourceFileArray.includes(`contents/blogs/md/${params.date}_${params.slug}.md`)
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/blogs/json/${params.date}_${params.slug}.json`), { params })
  },
  head() {
    const title = this.title + " | kazuma-saito"
    const url = `${this.url}blogs/${this.params.date}/${this.params.slug}/`
    const desc = this.description || ''
    const blogId = this.id
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:image', property: 'og:image', content: 'https://ka-zu-ma.com/ogp/blog-' + blogId + '.png'
        },
      ],
      link: [{ rel: 'canonical', href: url }]
    }
  },
  computed: {
    formatTags() {
      return this.tags.split(',')
    },
    shareTitle() {
      return this.title + " | kazuma-saito"
    }
  }
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
        color: $colour_main_green;
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
</style>