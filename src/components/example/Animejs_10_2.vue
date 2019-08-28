<template>
  <div class="overall" >
    <div class="box" ref="box">
      <div class="dot" ref="dot" :style="0<plan && plan<100?'top:10px':'top:0'"></div>
      <div class="scale-box">
        <span
          :class="plan==index ?'scaleT':'scale'"
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
  watch: {
    plan() {
      this.runAnime();
    }
  },
  mounted() {
    this.getZoom("box", "dot");
  },
  methods: {
    getZoom(d1, d2) {
      var _this = this;
      var oDiv1 = this.$refs[d1];
      var oDiv2 = this.$refs[d2];
      oDiv2.onmousedown = function(ev) {
        ev.preventDefault();
        //鼠标按下位置
        var oEvent = ev || event;
        var disX =  Math.floor(oEvent.clientX - oDiv2.offsetLeft);
        document.onmousemove = function(ev) {
          var oEvent = ev || event;
          var l = Math.floor(oEvent.clientX - disX);

          if (l < 0) {
            l = 0;
          } else if (l > oDiv1.offsetWidth - oDiv2.offsetWidth) {
            l = oDiv1.offsetWidth - oDiv2.offsetWidth;
          }
          _this.plan = Math.floor(Number( (l / ((oDiv1.offsetWidth - oDiv2.offsetWidth) / 100))));
          _this.bck = l;
          oDiv2.style.left = l + "px"; //l范围：[0,580]
          console.log(_this.plan)
        };
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
    runAnime() {
      anime({
        targets: ".scaleT",
        direction:'easeInOutSine',
        // duration: 100,
        translateY:5
      });
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
    transform: translateY(0) !important;
  }
  .scaleT {
    display: inline-block;
    width: 1px;
    height: 10px !important;
    background: #5f5f5f;
  }
}
</style>