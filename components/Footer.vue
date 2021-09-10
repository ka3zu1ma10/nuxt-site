<template>
  <footer class="footer">
    <div class="footer_wrap page_wrap">
      <!-- <div class="footer_area" /> -->
      <ul class="snsLink">
        <li>
          <a href="https://twitter.com/ka3zu1ma10">
            <img
              class="snsLink_img"
              src="~/assets/img/Twitter_Social_Icon_Circle_Color.png"
              alt="アイコン:Twitterアカウントへのリンク"
            />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/ka3zu1ma10">
            <img
              class="snsLink_img"
              src="~/assets/img/f_logo_RGB-Blue_72.png"
              alt="アイコン:Facebookアカウントへのリンク"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/ka3zu1ma10">
            <img
              class="snsLink_img"
              src="~/assets/img/GitHub-Mark-64px.png"
              alt="アイコン:Facebookアカウントへのリンク"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/s.kazuma.08/">
            <img
              class="snsLink_img instagram"
              src="~/assets/img/IG_Glyph_Fill.png"
              alt="アイコン:Instagramアカウントへのリンク"
            />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  background-color: $colour_main_green;
  &_wrap {
    box-sizing: border-box;
    padding: 0.8rem 1rem;
    display: flex;
  }
  &_area {
    flex: 1;
  }
}

.snsLink {
  list-style: none;
  display: flex;

  &_img {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
    background-color: #fff;
    margin: 0 0.5rem;
    &:focus,
    &:hover {
      box-shadow: 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, 0.8);
      transform: scale(1.05) translate(-5%, -5%);
    }
  }
}
.instagram {
  background-color: white;
}
</style>
