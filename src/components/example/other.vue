<template>
  <div class="body" @mousemove="move">
    <div class="cover"></div>
    <div class="cloud_box">
      <div
        class="cloud"
        v-for="(i,index) in cloudNum"
        :key="index"
        :style="`width:${random(200,900)}px;left:${random(-200,200)}%;bottom:${random(-10,20)}%;   animation-delay: ${random(-20,0)}s;`"
      >
        <img
          v-if="index%2 == 0"
          :style="random(0,index)%2 == 0?'transform:scaleX(-1);':''"
          src="@/assets/img/cloud_1.png"
          alt
        />
        <img
          v-if="index%2 != 0"
          :style="random(0,index)%2 != 0?'transform:scaleX(-1);':''"
          src="@/assets/img/cloud_3.png"
          alt
        />
      </div>
    </div>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
export default {
  data() {
    return {
      w: window.innerWidth,
      h: window.innerHeight,
      phone: false,
      cloudNum: 300
    };
  },
  created() {
    const browser = {
      versions: (function() {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return {
          //移动终端浏览器版本信息
          trident: u.indexOf("Trident") > -1, //IE内核
          presto: u.indexOf("Presto") > -1, //opera内核
          webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
          gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
          iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf("iPad") > -1, //是否iPad
          webApp: u.indexOf("Safari") == -1 //是否web应该程序，没有头部与底部
        };
      })(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (browser.versions.mobile) {
      this.cloudNum = 20;
      this.phone = true;
    }
  },
  mounted() {
    if (this.phone) {
      var text = "";
      window.addEventListener("deviceorientation", orientationHandler, false);
      function orientationHandler(event) {
        // text = "";
        // var arrow = document.querySelector(".cover");
        // text += "左右旋转：rotate alpha{" + Math.round(event.alpha) + "deg)<p>";
        // text += "前后旋转：rotate beta{" + Math.round(event.beta) + "deg)<p>";
        // text += "扭转设备：rotate gamma{" + Math.round(event.gamma) + "deg)<p>";
        // arrow.innerHTML = text;

        let box = document.querySelector(".cloud_box");
        TweenLite.to(box, 0.5, {
          ease: Back.easeOut.config(1.7),
          y:Math.round(event.beta) * 3,
          rotationZ: Math.round(event.gamma)
        });
      }
    }
  },
  methods: {
    // 随机生成一个整数
    random(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    //鼠标移入事件
    move(e) {
      if (!this.phone) {
        let box = document.querySelector(".cloud_box");
        let x = -(e.clientX - this.w / 2) * 0.2;
        let y = e.clientY - this.h / 2;
        TweenLite.to(box, 0.5, {
          ease: Back.easeOut.config(1.7),
          //云层左右移动量
          x: x,
          //云层上下移动量
          y: -y * 0.5,
          //云层旋转角度控制
          rotationZ: (x / this.w) * 100
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
}
.body {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(
    -150deg,
    rgb(205, 224, 248) 0%,
    rgb(51, 99, 161) 50%,
    rgb(3, 55, 122) 100%
  );
  .cloud_box {
    transform-style: preserve-3d;
    position: absolute;
    width: 100%;
    height: 100%;
    perspective: 500px;
    animation: fadeIn 1s 0.5s ease both 1;
    .cloud {
      transform-style: preserve-3d;
      transform-origin: 50% 100%;
      width: 200px;
      height: 200px;
      position: absolute;
      bottom: 0;
      opacity: 0;
      animation-name: move;
      animation-duration: 20s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      transform: translateZ(-2000px);
      img {
        width: 100%;
        // filter:invert(1) blur(5px);
      }
    }
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes move {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.7;
    // translateY(-200%)  控制云层高度
    transform: translateZ(500px) translateY(-100%);
  }
}
</style>