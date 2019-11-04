<template>
  <div class="overall">
    <div class="box" @click="clickBtn()">
      <span v-if="!loading">确认</span>
      <span v-show="loading" class="dot" v-for="i in 50" :key="i"></span>
      <i v-show="loading" id="box-icon" class="el-icon-present"></i>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    clickBtn() {
      let _this = this;
      _this.loading = true;
      let tl = anime.timeline({
        targets: ".dot",
        loop: 1,
        direction: "reverse"
      });
      tl.add({
        targets: "#box-icon",
        translateX: [100, 0],
        opacity: [0, 1],
        endDelay: 500,
        duration: 500,
        changeComplete: function() {
          _this.loading = false;
        }
      })
        .add({
          targets: "#box-icon",
          scale: [1, 0.5],
          opacity: [1, 0],
          duration: 500
        })
        .add({
          rotate: 360,
          easing: "linear",
          scale: function(el, i, l) {
            return anime.random(2, 3);
          },
          translateY: function(el, i, l) {
            return anime.random(-100, 100);
          },
          translateX: function(el, i, l) {
            return anime.random(-130, 130);
          },
          delay: function(el, i, l) {
            return i * 30;
          },
          opacity: [0, 1],
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 3rem;
  background: rgb(250, 134, 99);
  line-height: 3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dot {
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: calc(50% - 2px);
  opacity: 0;
}
#box-icon {
  font-size: 2rem;
}
</style>