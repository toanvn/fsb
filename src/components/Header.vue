<template>
  <div>
    <div class="header">
      <div class="left-header">
        <b-nav>
          <b-nav-item  to="/">Home</b-nav-item>
          <b-nav-item  to="about">About</b-nav-item>
          <b-nav-item to="our-work">Our Work</b-nav-item>
          <b-nav-item to="press">Press</b-nav-item>
          <b-nav-item to="video">Video</b-nav-item>
        </b-nav>
      </div>
      <div class="midle-header">
        <img src="../assets/fsd_logo.png" />
        <h3>FREE SISTERS BODY</h3>
      </div>

      <div class="right-header btn-social">
        <button class="btn-sp">Support</button>
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
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  border-bottom: thin solid #b58b6b;
}
.midle-header {
  flex: 1;
}
.midle-header h3 {
  font-weight: 800;
}

.left-header,
.right-header {
  width: 35%;
}
.right-header {
  text-align: right;
  padding: 15px
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: #111;
  text-align: center;
  padding: 10px 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
}

li a:hover:not(.active) {
  /* background-color: #111; */
  color: #c81e0f;
}

.router-link-exact-active {
  /* background-color: #4caf50; */
  color: #c81e0f;
}

.btn-sp {
  background-color: #b58b6b; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 8px 22px; /* Some padding */
  font-size: 12px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  margin-right: 25px;
  text-transform: uppercase;
  font-weight: bold;
}
.btn-sp:hover {
  color: #111;
  border-color: #111;
}
</style>