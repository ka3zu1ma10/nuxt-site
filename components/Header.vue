<template>
  <header class="hd">
    <div class="page_wrap">
      <div class="hd_logo">
        <nuxt-link to="/"> Kazuma Saito </nuxt-link>
        <button class="btn-hamburger" @click="naviOpen">
          <p class="visually-hidden">メニューを開く</p>
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav>
        <ul class="hd_nav">
          <li class="hd_nav__item">
            <nuxt-link to="/" active-class="active-nav" exact> Home </nuxt-link>
          </li>
          <li class="hd_nav__item">
            <nuxt-link to="/note" active-class="active-nav"> Note </nuxt-link>
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
<script>
export default {
  methods: {
    naviOpen: function () {
      document.querySelector(".btn-hamburger").classList.toggle("active")
      document.querySelector("nav").classList.toggle("active")
    },
  },
}
</script>

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

  &_logo {
    display: flex;
    a {
      flex: 1;
      color: #fff;
      text-decoration: none;
      white-space: nowrap;
      margin-right: 1rem;
    }
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
        border-bottom: solid 2px $colour_main_green;
        box-sizing: border-box;
        &:focus,
        &:hover {
          text-decoration: none;
          border-bottom: solid 2px white;
        }
      }
      & .active-nav {
        border-bottom: solid 2px white;
      }
    }
  }
}
.btn-hamburger {
  display: none;
}

@include media-mobile() {
  nav {
    display: none;
    transition: 0.2s;
  }
  nav.active {
    display: block;
  }
  .hd {
    .page_wrap {
      flex-flow: column;
    }
    &_nav {
      flex-flow: column;
    }
    &_nav &_nav__item {
      margin-left: 0;
    }
    &_nav__item a {
      display: block;
    }

    .btn-hamburger {
      display: block;
      background-color: transparent;
      border: none;
      position: relative;
      width: 1.8rem;
      height: 1.2rem;
      cursor: pointer;
      span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #fff;
        border-radius: 4px;
        display: inline-block;
        transition: all 0.5s;
        box-sizing: border-box;
      }
      span:nth-of-type(1) {
        top: 0;
      }
      span:nth-of-type(2) {
        top: 0.5rem;
      }
      span:nth-of-type(3) {
        bottom: 0;
      }
      & span:nth-of-type(1) {
        -webkit-animation: btn07-bar01 0.25s forwards;
        animation: btn07-bar01 0.25s forwards;
      }
      @-webkit-keyframes btn07-bar01 {
        0% {
          -webkit-transform: translateY(0.5rem) rotate(45deg);
        }
        50% {
          -webkit-transform: translateY(0.5rem) rotate(0);
        }
        100% {
          -webkit-transform: translateY(0) rotate(0);
        }
      }
      @keyframes btn07-bar01 {
        0% {
          transform: translateY(0.5rem) rotate(45deg);
        }
        50% {
          transform: translateY(0.5rem) rotate(0);
        }
        100% {
          transform: translateY(0) rotate(0);
        }
      }
      & span:nth-of-type(2) {
        transition: all 0.25s 0.25s;
        opacity: 1;
      }
      & span:nth-of-type(3) {
        -webkit-animation: btn07-bar03 0.25s forwards;
        animation: btn07-bar03 0.25s forwards;
      }
      @-webkit-keyframes btn07-bar03 {
        0% {
          -webkit-transform: translateY(-0.5rem) rotate(-45deg);
        }
        50% {
          -webkit-transform: translateY(-0.5rem) rotate(0);
        }
        100% {
          -webkit-transform: translateY(0) rotate(0);
        }
      }
      @keyframes btn07-bar03 {
        0% {
          transform: translateY(-0.5rem) rotate(-45deg);
        }
        50% {
          transform: translateY(-0.5rem) rotate(0);
        }
        100% {
          transform: translateY(0) rotate(0);
        }
      }
      &.active span:nth-of-type(1) {
        -webkit-animation: active-btn07-bar01 0.25s forwards;
        animation: active-btn07-bar01 0.25s forwards;
      }
      @-webkit-keyframes active-btn07-bar01 {
        0% {
          -webkit-transform: translateY(0) rotate(0);
        }
        50% {
          -webkit-transform: translateY(0.5rem) rotate(0);
        }
        100% {
          -webkit-transform: translateY(0.5rem) rotate(45deg);
        }
      }
      @keyframes active-btn07-bar01 {
        0% {
          transform: translateY(0) rotate(0);
        }
        50% {
          transform: translateY(0.5rem) rotate(0);
        }
        100% {
          transform: translateY(0.5rem) rotate(45deg);
        }
      }
      &.active span:nth-of-type(2) {
        opacity: 0;
      }
      &.active span:nth-of-type(3) {
        -webkit-animation: active-btn07-bar03 0.25s forwards;
        animation: active-btn07-bar03 0.25s forwards;
      }
      @-webkit-keyframes active-btn07-bar03 {
        0% {
          -webkit-transform: translateY(0) rotate(0);
        }
        50% {
          -webkit-transform: translateY(-0.5rem) rotate(0);
        }
        100% {
          -webkit-transform: translateY(-0.5rem) rotate(-45deg);
        }
      }
      @keyframes active-btn07-bar03 {
        0% {
          transform: translateY(0) rotate(0);
        }
        50% {
          transform: translateY(-0.5rem) rotate(0);
        }
        100% {
          transform: translateY(-0.5rem) rotate(-45deg);
        }
      }
    }
  }
}
</style>
