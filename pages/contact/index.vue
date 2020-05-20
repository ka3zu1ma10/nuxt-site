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
      <client-only>
        <form name="contact" class="contact_form" data-netlify="true">
          <label class="contact_formLabel">
            <span class="contact_formText">会社名 or チーム名</span>
            <span class="contact_formOptional">任意</span>
            <input class="contact_formControl" type="text" name="team_name" />
          </label>
          <label class="contact_formLabel">
            <span class="contact_formText">お名前 or ニックネーム</span>
            <input class="contact_formControl" type="text" name="name" required />
          </label>
          <label class="contact_formLabel">
            <span class="contact_formText">メールアドレス</span>
            <input class="contact_formControl" type="email" name="email" required />
          </label>
          <label class="contact_formLabel">
            <span class="contact_formText">お問い合わせ内容</span>
            <textarea class="contact_formControl" name="text" cols="30" rows="10" required />
          </label>
          <button class="contact_formSubmit" type="submit" name="button" value="内容を送信">内容を送信</button>
        </form>
      </client-only>
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
  padding: 2rem;
  &_leadMessage {
    margin-bottom: 1.5rem;
  }
  &_formLabel {
    display: block;
    flex-flow: column;
    margin: 0.8rem 0;
  }
  &_formControl {
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
  &_formSubmit {
    display: flex;
    align-items: center;
    background-color: $colour_accent_cherry;
    color: #e3e3e3;
    padding: 0.2rem 0.4rem;
    font-size: 1rem;
    border: none;
    border-radius: 0.2rem;
    transition: 0.8s;
    &::after {
      content: "";
      width: 0;
      height: 0;
      border-left: 0.5rem solid #e3e3e3;
      border-top: 0.5rem solid transparent;
      border-bottom: 0.5rem solid transparent;
      margin: 0 0 0 0.2rem;
    }
    &:focus,
    &:hover {
      background-color: rgba($colour_accent_cherry, 0.6);
    }
  }
}
</style>
