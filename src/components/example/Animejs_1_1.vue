<template>
  <div>
    <h2 ref="numberChange">{{battery.charged}}%<br>{{battery.cycles}}</h2>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      battery: {
        charged: 0,
        cycles: 0
      }
    };
  },
  mounted() {
    anime({
      targets: this.battery,
      charged: 1000,
      cycles: 3000,
      round: 1,
      easing: "linear",
      delay:500, //动画延时
    });
  }
};
</script>

<style>
</style>