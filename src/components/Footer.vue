<template>
  <footer>
    <div class="footer">
      <h3 class="brown">Free Sisters Body</h3>
      <div class="footer-nav">
        <ul class="center-nav">
          <b-nav-item active>Home</b-nav-item>
          <b-nav-item>About</b-nav-item>
          <b-nav-item>Our Work</b-nav-item>
          <b-nav-item>Press</b-nav-item>
          <b-nav-item>Video</b-nav-item>
        </ul>
      </div>
      <div class="footer-social">
        <b-button pill variant="outline-danger">
          <i class="fa fa-facebook"></i>
        </b-button>
        <b-button pill variant="outline-danger">
          <i class="fa fa-twitter"></i>
        </b-button>
        <b-button pill variant="outline-danger">
          <i class="fa fa-google-plus"></i>
        </b-button>
        <b-button pill variant="outline-danger">
          <i class="fa fa-facebook_messenger"></i>
        </b-button>
      </div>
      <hr class="brown" />
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
.copyright{
    font-size: 12px;
}
</style>