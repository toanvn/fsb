<template>
  <div class="h_root">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
    <div class="h_main_content">
      <div class="h_video">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/BlwnyrVSc9c"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h3 class="brown h_header">About Kefei Wang</h3>
      <div class="black h_content">
        <p>It has been eighteen years since Kefei Wang passed away, and her body is still lying inside a mortuary. Although her family has appealed to various levels of authorities for the release of the body, they have never been successful. Since then, they have been relentless in claiming the remains.</p>

        <p>
          Even simple requests to visit her body have been denied. In lieu of an actual visit, authorities have tried to convince the family to instead sign an agreement to have her body cremated, which would supposedly serve to destroy any evidence of torture. All families whose family members have been persecuted to death face similar issues...
          <span
            class="red"
          >Read more</span>
        </p>
      </div>
      <div class="h_gallery">
        <img
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
        <img
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
        <img
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(/*slide*/) {
      this.sliding = true;
    },
    onSlideEnd(/*slide*/) {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
.h-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.h_main_content {
  width: 50%;
  margin: 0 auto;
  text-align: justify;
  margin-top: 46px;
}

.h_header {
  margin-top: 95px;
}

.h_gallery {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 85px;
  margin-bottom: 315px;
}
.h_gallery img {
  width: 32%;
}
</style>