<template>
  <div class="page_wrap">
    <img
      class="max_img"
      src="~/assets/img/kazuma.png"
      alt="写真：kazuma saitoの全力の笑顔"
    />
    <article class="max_message">
      <h2 class="max_name">
        <img
          class="max_icon"
          src="@/assets/img/kazuma-icon.png"
          alt="写真：kazuma saitoの全力の笑顔"
        />
        <div class="max_name-text">
          <div class="max_name-eg">
            <span class="cherry">K</span>azuma <span class="cherry">S</span>aito
          </div>
          <div class="max_name-jp" aria-label="日本語表記">
            西藤 和馬
          </div>
        </div>
      </h2>
      <section class="max_mes">
        <h3 class="max_mes-h">
          <span class="max_mes-h--blank">
            1人でも多くの人を
            <span class="cherry">笑顔</span>にできる
          </span>
          <span class="max_mes-h--blank">
            <span class="cherry">UXデザイナー</span>を目指しています。
          </span>
        </h3>
        <p>
          まだまだ、修行中ですが、
          <br />一緒に働く人、自分が携わったものに関わる人、もちろん自分が携わったものを使う人が、少しでも笑顔でいられるようなデザインを考えていきたいと思っています。
        </p>
      </section>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.page_wrap {
  display: flex;
  align-items: center;
  padding-bottom: 0 !important;
}

.max {
  &_img {
    max-height: 32rem;
    height: 90vw;
  }

  &_icon {
    display: none;
  }

  &_message {
    height: fit-content;
  }

  &_name {
    font-size: 2.4em;
    display: flex;
    align-items: center;

    &-text {
      margin-bottom: 2rem;
      line-height: 1.2;
      display: flex;
      align-items: baseline;
      flex-wrap: wrap;
    }

    &:not(:first-child) {
      margin-left: 0.8rem;
    }

    &-eg {
      white-space: nowrap;
      margin-right: 0.8rem;
    }

    &-jp {
      font-weight: normal;
      font-size: 0.6em;
      white-space: nowrap;
    }
  }

  &_mes {
    &-h {
      font-size: 1.2em;

      &--blank {
        white-space: nowrap;
      }
    }
  }
}

@media (max-width: 600px) {
  .max_message {
    font-size: 0.8rem;
    bottom: 0;
  }

  .max_name-text {
    margin-bottom: 0.8rem;
  }

  .max_img {
    display: none;
  }

  .max_icon {
    border-radius: 50%;
    border: solid 0.2rem $colour_main_green;
    background-color: $colour_main_green;
    display: block;

    width: 4rem;
    margin-right: 0.4rem;
  }

  .max_name {
    display: block;
  }

  .max_mes {
    margin-bottom: 2rem;
  }
}
</style>
