<template>
  <header class="hd">
    <div class="page_wrap">
      <div class="hd_logo">
        <nuxt-link to="/">
          Kazuma Saito
        </nuxt-link>
      </div>
      <nav>
        <ul class="hd_nav">
          <li class="hd_nav__item">
            <nuxt-link to="/" active-class="active-nav" exact>
              Home
            </nuxt-link>
          </li>
          <li class="hd_nav__item">
            <nuxt-link to="/blogs" active-class="active-nav">
              Blogs
            </nuxt-link>
          </li>
          <li class="hd_nav__item">
            <nuxt-link to="/photos" active-class="active-nav">
              Photos
            </nuxt-link>
          </li>
          <li class="hd_nav__item">
            <nuxt-link to="/contact" active-class="active-nav">
              Contact
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
        padding: 0.2rem 0.4rem;
        border: solid 2px $colour_main_green;
        box-sizing: border-box;
      }
      & .active-nav {
        border: solid 2px;
        border-top-color: rgba(white, 0.6);
        border-left-color: rgba(white, 0.6);
        border-bottom-color: white;
        border-right-color: white;
      }
    }
  }
}
</style>
