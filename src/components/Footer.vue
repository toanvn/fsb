<template>
  <footer>
    <div class="footer">
      <h3 class="brown">Free Sisters Body</h3>
      <div class="footer-nav">
        <ul class="center-nav">
          <b-nav-item  to="/">Home</b-nav-item>
          <b-nav-item  to="about">About</b-nav-item>
          <b-nav-item to="our-work">Our Work</b-nav-item>
          <b-nav-item to="press">Press</b-nav-item>
          <b-nav-item to="video">Video</b-nav-item>
        </ul>
      </div>
      <div class="footer-social btn-social">
        <b-button variant="outline">
          <i class="fa fa-facebook"></i>
        </b-button>
        <b-button variant="outline">
          <i class="fa fa-twitter"></i>
        </b-button>
        <b-button variant="outline" class="gg">
          <i class="fa fa-google-plus"></i>
        </b-button>
        <b-button variant="outline" class="fb-messenger">
          <svg width="15" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-messenger" class="svg-inline--fa fa-facebook-messenger fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"></path></svg>
        </b-button>
      </div>
      <hr class="b-brown " />
      <p class="brown copyright">Free Sister Body Copyright © 2019</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #333;
  padding: 35px 0 75px 0;
}
.footer  h3 {
    text-transform: uppercase;
    font-weight: 700;
}
.footer-nav {
  margin: 0 auto;
}
.footer-nav ul{
    display: inline-flex;
}
.center-nav{
    list-style: none;
}
.center-nav li a{
    color: #fff;
    font-size: 16px;
}
.center-nav li a.router-link-exact-active {
  /* background-color: #4caf50; */
  color: #c81e0f;
}
.copyright{
    font-size: 12px;
}
</style>