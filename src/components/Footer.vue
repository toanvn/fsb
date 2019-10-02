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
        <b-button variant="outline">
          <i class="fa fa-google-plus"></i>
        </b-button>
        <b-button variant="outline">
          <i class="fa fa-facebook_messenger"></i>
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