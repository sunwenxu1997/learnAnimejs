<template>
  <div class="overall" >
    <div class="box" ref="box">
      <div class="dot" ref="dot"></div>
      <div class="scale-box">
        <span
          class="scale"
          v-for="(i,index) in 101"
          :key="index"
          :style="index%10 == 0?'height:15px':''"
        ></span>
      </div>
    </div>
    <span class="title">{{plan.toFixed(0)-50}}℃</span>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      plan: 0, //进度滑块
      bck: 0 //进度背景
    };
  },
  mounted() {
     this.runAnime();
  },
  methods: {
    runAnime() {
       let tl = anime.timeline({
      duration:100,
      complete: function() {
          tl.restart(); //重新开始
        }
    });
    
    function createEl(i) {
      let el = document.getElementsByClassName("scale")[i];
      tl.add({
        begin: function() {
          anime({
            targets: el,
            translateY: 25,
            opacity:1,
            scale: 1.3,
            easing: "easeInOutSine",
            direction: "alternate",
          });
        }
      });
    }
    for (let i = 0; i < 100; i++) createEl(i);
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(226, 226, 226);
}
.box {
  width: 400px;
  height: 100px;
  box-shadow: 0 0 5px #ccc;
  position: relative;
}
.dot {
  width: 1px;
  height: 30px;
  background: #37b383;
  cursor: pointer;
  position: absolute;
  top: -30px;
  &::before {
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #37b383;
    position: absolute;
    left: -15px;
    top: -30px;
  }
}
.title {
  font-weight: bold;
  width: 100px;
  height: 30px;
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
}
.scale-box {
  width: 100%;
  position: absolute;
  height: 20px;
  display: flex;
  justify-content: space-between;
  // top: 30px;
  .scale {
    display: inline-block;
    width: 1px;
    height: 10px;
    background: #5f5f5f;
  }
  .scaleT {
    display: inline-block;
    width: 1px;
    height: 10px !important;
    background: #5f5f5f;
  }
}
</style>