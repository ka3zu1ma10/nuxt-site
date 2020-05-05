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
}

a:focus,
a:hover {
  text-decoration-line: underline;
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
  color: #fc3a52;
  white-space: nowrap;
}

</style>