<template>
  <div id="body">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from "~/components/Header"
import Footer from "~/components/Footer"

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#body {
  font-family: "M PLUS 1p", sans-serif;
  font-size: medium;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  background-color: $colour_main_green;
  .page {
    &_wrap {
      width: 100%;
      max-width: 56rem;
      margin: 0 auto;
      box-sizing: border-box;
      padding: 0.8rem 1rem;
    }
  }
}
main {
  flex: 1;
}

a {
  text-decoration: none;
  &:focus,
  &:hover {
    text-decoration-line: underline;
  }
  &:link {
    color: $colour_main_green;
  }
  &:visited {
    color: $colour_accent_cherry;
  }
}

.visually-hidden {
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
}

.cherry {
  font-size: 1.2em;
  color: $colour_accent_cherry;
  white-space: nowrap;
}
body {
  overflow-y: scroll;
}
</style>
