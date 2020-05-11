<template>
  <PageLayout title="Blogs">
    <ul class="blog_list">
      <li class="blog_item" v-for="param in blogDates">
        <div class="blog_item-wraper">
          <nuxt-link class="blog_title" :to="param.url">{{ param.title }}</nuxt-link>
          <div class="blog_date">
            <TagList class="blog_tags" :Tags="param.tags" />
            <div>{{ param.create }}</div>
          </div>
        </div>
      </li>
    </ul>
  </PageLayout>
</template>
<script>
import { fileMap } from "../../contents/blogs/summary.json";
import TagList from "../../components/TagList";
import PageLayout from "../../components/PageLayout";

export default {
  components: {
    TagList,
    PageLayout
  },
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
          tags: fileMap[key]["tags"].split(","),
          description: fileMap[key]["description"],
          url: "/blogs/" + baseDate[0] + "/" + endUrl[0],
          id: fileMap[key]["id"],
          create: fileMap[key]["created_at"]
        };
        params.push(param);
      });

      return params;
    }
  }
};
</script>
<style lang="scss" scoped>
.blog{
  &_list{
    list-style: none;
    padding: 1rem;
    border-radius: .2rem;
  }
  &_item{
    background-color: #fff;
    padding: .5rem;
    margin: 0 .5rem;
    border-radius: .2rem;
    box-shadow: .2rem .2rem .2rem rgba($color: #000000, $alpha: .2);
    &-wraper{
      position: relative;
      box-sizing: border-box;
    }
    &:not(:last-child){
      margin-bottom: .8rem;
    }
  }
  &_title{
   font-size: 1.5rem; 
   display: block;
   padding-bottom: 1.5rem;
  }

  &_date{
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
  }

  &_tags{
    flex: 1;
  }
}
</style>
