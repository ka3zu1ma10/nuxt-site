<template>
  <ul class="tagList">
    <li class="tagList_item" v-for="tag in Tags">
      {{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TagList',
  props: ['Tags']
};
</script>

<style lang="scss" scoped>
.tagList{
  display: flex;
  list-style: none;
  &_item{
    font-size: .8rem;
    padding: .2rem .4rem;
    background-color: $colour_main_green;
    color: whitesmoke;
    margin-right: .4rem;
    border-radius: .2rem;
  }
}
</style>