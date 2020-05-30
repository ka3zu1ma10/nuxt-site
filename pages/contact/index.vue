<template>
  <PageLayout title="Contact Kazuma">
    <div class="contact">
      <div class="contact_leadMessage">
        <p>
          日々勉強中の私ですが、
          <br />制作のご依頼・ご相談などありましたら、お気軽にお問い合わせいただければと思います。
        </p>
        <p>
          下記のフォームに可能な範囲でご記入ください。「会社名 or
          チーム名」の項目は以外は必ずご記入をお願いいたします。
        </p>
      </div>
      <form
        ref="abc"
        name="contact"
        method="post"
        class="contact_form"
        action="/contact/thanks"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label class="contact_formLabel">
          <span class="contact_formText">会社名 or チーム名</span>
          <span class="contact_formOptional">任意</span>
          <input class="contact_formControl" type="text" name="team" />
        </label>
        <label class="contact_formLabel">
          <span class="contact_formText">お名前 or ニックネーム</span>
          <input
            ref="a"
            class="contact_formControl"
            type="text"
            name="name"
            required
          />
        </label>
        <label class="contact_formLabel">
          <span class="contact_formText">メールアドレス</span>

          <input
            class="contact_formControl"
            type="email"
            name="mail"
            required
          />
        </label>
        <label class="contact_formLabel">
          <span class="contact_formText">お問い合わせ内容</span>

          <textarea
            class="contact_formControl"
            name="message"
            cols="30"
            rows="10"
            required
          />
        </label>
        <button
          class="contact_formButton contact_formButton_true"
          type="submit"
          name="button"
          value="内容を送信"
        >
          <span>内容を送信する</span>
        </button>
        <button
          class="contact_formButton contact_formButton_fails"
          type="button"
          name="button"
          value="内容を送信"
          disabled
        >
          入力項目を確認してください
        </button>
      </form>
    </div>
  </PageLayout>
</template>
<script>
import PageLayout from "@/components/PageLayout"

export default {
  components: {
    PageLayout,
  },
}
</script>

<style lang="scss" scoped>
.contact {
  color: white;
  padding: 1.5rem 0;
  &_leadMessage {
    margin-bottom: 1.5rem;
  }
  &_formLabel {
    display: block;
    flex-flow: column;
    margin: 0.8rem 0;
  }
  &_formControl {
    box-sizing: border-box;
    display: block;
    width: 100%;
    max-width: 600px;
    padding: 0.4rem;
    margin: 0.4rem;
    border-radius: 0.2rem;
    border: none;
    font-size: 1rem;
    background-color: rgba(white, 0.9);
    border: solid 2px $colour_main_green;
    &:invalid {
      border: solid 2px $colour_accent_cherry;
    }
  }
  &_formOptional {
    color: $colour_main_green;
    display: inline-flex;
    font-size: 80%;
    padding: 0.1rem 0.4rem;
    border-radius: 0.2rem;
    background-color: #e3e3e3;
  }
  &_formButton {
    align-items: center;
    background-color: $colour_accent_cherry;
    color: #e3e3e3;
    padding: 0.2rem 0.4rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.2rem;
    transition: 0.8s;
    &_fails {
      display: none;
      color: $colour_main_green;
      background-color: #e3e3e3;
    }
    &_true {
      display: flex;
      &:focus,
      &:hover {
        background-color: rgba($colour_accent_cherry, 0.6);
      }
      &::after {
        content: "";
        width: 0;
        height: 0;
        border-left: 0.5rem solid #e3e3e3;
        border-top: 0.5rem solid transparent;
        border-bottom: 0.5rem solid transparent;
        margin: 0 0 0 0.2rem;
      }
    }
  }
  &_formError {
    display: block;
    font-size: 80%;
  }
}
.contact_form:invalid {
  .contact_formButton {
    &_fails {
      display: inline;
    }
    &_true {
      display: none;
      &::after {
        display: none;
      }
    }
  }
}
</style>
