<template>
  <header class="hd">
    <div class="page_wrap">
      <div class="hd_logo">
        <nuxt-link to="/">
          Kazuma Saitoh
        </nuxt-link>
      </div>
      <nav>
        <ul class="hd_nav">
          <li class="hd_nav__item">
            <nuxt-link to="/">
              Home
            </nuxt-link>
          </li>
          <li class="hd_nav__item">
            <nuxt-link to="/blogs">
              Blogs
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>

.hd {
  background-color: $colour_main_green;
  border-bottom: solid 0.2rem #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;

  .page_wrap {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 1rem;
    margin: 0;
    flex-wrap: wrap;
  }

  &_logo a {
    color: #fff;
    text-decoration: none;
    white-space: nowrap;
    margin-right: 1rem;
  }

  &_nav {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;

    &__item {
      &:not(:first-child) {
        margin-left: 1rem;
      }

      & a {
        color: #fff;
      }
    }
  }
}

</style>
