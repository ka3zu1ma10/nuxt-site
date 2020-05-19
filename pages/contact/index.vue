<template>
  <PageLayout title="Contact Kazuma">
    <div>
      <p>
        日々勉強中のな私ですが、
        <br />制作のご依頼・ご相談などありましたら、お気軽にお問い合わせいただければと思います。
      </p>
      <p>下記のフォームに可能な範囲でご記入ください。必須の項目は必ずご記入をお願いいたします。</p>
    </div>
    <form
      name="contact"
      action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScb2eVYwUUyjGdLphj9SWDBauJ4VDB9kTt_Rz39Vo0vwKZamg/formResponse"
    >
      <label>
        会社名 or チーム名
        <input type="text" name="entry.971505657" />
      </label>
      <label>
        <span>必須</span>お名前 or ニックネーム
        <input type="text" name="entry.194709951" required />
      </label>
      <label>
        <span>必須</span>メールアドレス
        <input type="email" name="entry.477356349" required />
      </label>
      <label>
        お問い合わせ内容
        <textarea name="entry.596333793" cols="30" rows="10" required />
      </label>
      <button type="button" name="button" v-on:click="submit" value="内容を送信">内容を送信</button>
    </form>
  </PageLayout>
</template>
<script>
export default {
  methods:{
    submit:function(){
      document.contact.submit();
      location.href = location.origin + '/contact/thanks';
    }
  }
}
</script>