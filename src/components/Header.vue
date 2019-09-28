<template>
  <div>
    <div class="header">
      <div class="left-header">
        <b-nav>
          <b-nav-item active>Home</b-nav-item>
          <b-nav-item>About</b-nav-item>
          <b-nav-item>Our Work</b-nav-item>
          <b-nav-item >Press</b-nav-item>
          <b-nav-item >Video</b-nav-item>
        </b-nav>
      </div>
      <div class="midle-header">
        <img src="../assets/fsd_logo.png" />
        <h3>FREE SISTERS BODY</h3>
      </div>

      <div class="right-header">
        <button class="btn-sp">Support</button>
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
  padding: 14px 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
}

li a:hover:not(.active) {
  /* background-color: #111; */
  color: #c81e0f;
}

.active {
  /* background-color: #4caf50; */
  color: #c81e0f;
}

/* Style buttons */
.btn {
  background-color: transparent; /* Blue background */
  border: none; /* Remove borders */
  color: #b58b6b; /* White text */
  /*padding: 12px 12px;*/ /* Some padding */
  font-size: 12px; /* Set a font size */
  font-weight: bold;
  cursor: pointer; /* Mouse pointer on hover */
  border: thin solid #b58b6b;
  margin-right: 5px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
}

.btn-sp {
  background-color: #b58b6b; /* Blue background */
  border: none; /* Remove borders */
  color: white; /* White text */
  padding: 5px 12px; /* Some padding */
  font-size: 12px; /* Set a font size */
  cursor: pointer; /* Mouse pointer on hover */
  margin-right: 25px;
  height: 25px;
  text-transform: uppercase;
  font-weight: bold;
}

/* Darker background on mouse-over */
.btn:hover,
.btn-sp:hover {
  color: #111;
  border-color: #111;
}
</style>