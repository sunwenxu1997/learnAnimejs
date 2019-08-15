<template>
  <div class="overall">
    <div class="box">
      <div class="box-b">
        <span ref="gunpowder" v-for="(i,index) in 26" :key="index" class="gunpowder"></span>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {};
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    runAnime() {
      for (let i = 0; i < 26; i++) {
        let randomNum = Math.random() * 100;
        anime({
          targets: this.$refs["gunpowder"][i],
          loop: true,
          translateY: function() {
            return -(i * randomNum + 200);
          },
          rotate: {
            value: 360,
            duration: 1000,
            easing: "easeInOutQuart"
          },
          opacity: {
            value: 0,
            duration: 1000,
            easing: "easeInOutQuart"
          },

          borderRadius: {
            value: "50%",
            duration: 1000,
            easing: "easeInOutQuart"
          },
          backgroundColor: {
            value: "#fc3f3f",
            duration: 500,
            easing: "easeInOutQuart"
          },
          scale: 3,
          delay: function() {
            return i * 10 * randomNum;
          }
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #f5f3f3;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 300px;
  height: 300px;
  background: white;
  box-shadow: 0px 0px 10px #e0e0e0;
  position: relative;
  z-index: 99;
  .box-b {
    width: 30px;
    height: 30px;
    background: #fc3f3f;
    position: absolute;
    bottom: 0;
    left: calc(50% - 15px);
    box-sizing: border-box;
    border-top: 5px solid #ffae00;
    display: flex;
    flex-wrap: wrap;
    .gunpowder {
      display: block;
      padding: 0;
      margin: 0 auto;
      width: 5px;
      height: 5px;
      background: #fc941d;
      position: relative;
      z-index: -1;
      opacity: 1;
    }
  }
}
</style>