<template>
  <div>
  <b-carousel
    id="carousel-fade"
    class="class-name"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1207"
    img-height="421"
  >
    <b-carousel-slide
      caption="First slide"
      img-src="https://raw.githubusercontent.com/iamlimo/mcbeth/master/src/assets/school-village.png"
    ></b-carousel-slide>
  </b-carousel>
  </div>
</template>

<script>
  export default {
      name: "slider",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
   
  }
</script>

<style>
.class-name{
  height: 421px !important;
}
</style>