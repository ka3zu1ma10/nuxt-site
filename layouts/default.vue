<template>
  <div id="body">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'M PLUS 1p', sans-serif;
  font-size: medium;
}

a {
  text-decoration: none;
  &:focus,&:hover {
    text-decoration-line: underline;
  }
  &:link{
    color: $colour_main_green;
  }
  &:visited {
    color: $colour_accent_cherry;
  }
}


#body {
  .page {
    &_wrap {
      max-width: 56rem;
      margin: 0 auto;
    }
  }
}

.cherry {
  font-size: 1.2em;
  color: $colour_accent_cherry;
  white-space: nowrap;
}

</style>