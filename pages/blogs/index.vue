<template>
  <main>
    <h1>blogs</h1>
    <ul>
      <li v-for="param in blogDates">
        <nuxt-link :to="param.url">{{ param.title }}</nuxt-link>
         <img :src="'/ogp/blog-' + param.id + '.png'" />
      </li>
    </ul>
  </main>
</template>

<script>
import { fileMap } from "../../contents/blogs/summary.json";

export default {
  components: {},
  computed: {
    blogDates() {
      const keys = Object.keys(fileMap);

      let params = [];
      keys.forEach(key => {
        const base = fileMap[key]["base"];
        const baseDate = base.split("_");
        const endUrl = baseDate[1].split(".");

        const param = {
          title: fileMap[key]["title"],
          tags: fileMap[key]["tags"],
          description: fileMap[key]["description"],
          url: "/blogs/" + baseDate[0] + "/" + endUrl[0],
          id: fileMap[key]["id"]
        };
        params.push(param);
      });

      return params;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
