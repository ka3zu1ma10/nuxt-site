<template>
  <article class="content">
      <h2>{{ title }}</h2>
      <div>
        <div v-for="tag in formatTags">
          {{ tag }}
        </div>
        <time>{{ params.date }}</time>
      </div>
      <div v-html="bodyHtml"></div>
  </article>
</template>

<script>
import { sourceFileArray } from '../../../../contents/blogs/summary.json'
export default {
  components: {
    
  },
  validate({ params }) {
    return sourceFileArray.includes(`contents/blogs/md/${params.date}_${params.slug}.md`)
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/blogs/json/${params.date}_${params.slug}.json`), { params })
  },
  head() {
    const title = this.title + " | kazuma-saitoh"
    const url = `${this.url}blogs/${this.params.date}/${this.params.slug}/`
    const desc = this.description || ''
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:image', property: 'og:image', content: 'https://ka-zu-ma.com/ogp/ogp-' + this.params.id + '.png'
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