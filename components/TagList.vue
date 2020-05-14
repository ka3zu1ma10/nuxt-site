<template>
  <ul class="tagList">
    <li class="tagList_item" v-for="tag in Tags">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: 'TagList',
  props: ['Tags']
};
</script>

<style lang="scss" scoped>
.tagList {
  display: flex;
  list-style: none;
  &_item {
    font-size: 0.8rem;
    padding: 0.2rem 0.4rem;
    background-color: $colour_main_green;
    color: whitesmoke;
    margin-right: 0.4rem;
    border-radius: 0.2rem;
  }
}

.back-wite {
  & .tagList_item {
    background-color: white;
    color: $colour_main_green;
  }
}
</style>