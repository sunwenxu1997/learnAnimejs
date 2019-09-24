<template>
  <div>
    <div id="box" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" style="background:hsl(0, 0%, 95%)">
          <div class="title">1.单元素动画(targets)</div>
          <section class="box-content">
            <div id="dot" class="dot0"></div>
          </section>
        </div>
        <div class="swiper-slide" style="background:hsl(0, 0%, 93%)">
          <div class="title">2.多元素动画(targets+)</div>
          <section class="box-content" style="width:300px">
            <div id="dot" class="dot1" v-for="i in 3" :key="i"></div>
          </section>
        </div>
        <div class="swiper-slide" style="background:hsl(0, 0%, 91%)">
          <div class="title">3.时间轴(.timeline)</div>
          <section class="box-content" :class="'box-content2'" style="width:300px">
            <div id="dot" class="dot2" v-for="i in 3" :key="i"></div>
          </section>
        </div>
        <div class="swiper-slide" style="background:hsl(0, 0%, 89%)">
          <div class="title">4.动画控制(play,pause,restart)</div>
          <section class="box-content" style="width:500px;height:50px">
            <div id="dot" class="dot3" style="width:10px;height:10px" v-for="i in 50" :key="i"></div>
          </section>
          <div class="hint-t">
            <input type="text" ref="progressLogEl" value="progress:0%" />
          </div>
          <div class="hint">
            <span ref="play">开始</span>
            <span ref="pause">暂停</span>
            <span ref="restart">重载</span>
          </div>
        </div>
        <div class="swiper-slide" style="background:hsl(0, 0%, 87%)">
          <div class="title">5.回调函数(complete,begin)</div>
          <section class="box-content" style="width:300px">
            <div
              id="dot"
              class="dot4"
              v-for="i in 100"
              :key="i"
              :style="`position: absolute;top:49px;width:80px;height:2px;left:0;transform: rotate(${i*3.6}deg)`"
            ></div>
          </section>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import anime from "animejs/lib/anime.es.js";
export default {
  watch: {
    active_Index(newVal, oldVal) {
      if (newVal == 1) {
      }
    }
  },
  data() {
    return {
      active_Index: 0
    };
  },
  mounted() {
    let _this = this;
    var mySwiper = new Swiper(".swiper-container", {
      direction: "vertical",
      slidesPerView: 1,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      on: {
        slideChange: function() {
          _this.active_Index = this.activeIndex;
        }
      }
    });
    this.runAnime_0();
    this.runAnime_1();
    this.runAnime_2();
    this.runAnime_3();
    this.runAnime_4();
  },
  methods: {
    runAnime_0() {
      anime({
        targets: ".dot0",
        scale: 1.5,
        opacity: [{ value: 0.5, duration: 0 }, { value: 1, duration: 1000 }],
        borderRadius: { value: "50%", duration: 0 },
        duration: 1000,
        direction: "alternate",
        loop: true
      });
    },
    runAnime_1() {
      anime({
        targets: ".dot1",
        scale: [0.7, 0.9],
        background: function(el, i, l) {
          return `hsl(${i * 50}, 100%, 50%)`;
        },
        borderRadius: { value: "50%", duration: 0 },
        delay: function(el, i, l) {
          return (l - i) * 250;
        },
        opacity: 0.5,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
      });
    },
    runAnime_2() {
      let tl = anime.timeline({
        targets: ".dot2",
        loop: true,
        easing: "easeInOutSine"
      });
      tl.add({
        scale: [1, 0.8],
        borderRadius: { value: "50%", duration: 0 },
        duration: 2000,
        endDelay: 500
      })
        .add({
          translateY: function(el, i, l) {
            if (i == 1) {
              return -80;
            } else {
              return 80;
            }
          },
          translateX: function(el, i, l) {
            if (i == 0) {
              return 40;
            }
            if (i == 2) {
              return -40;
            }
          },
          rotate: anime.random(0, 360),
          endDelay: 500
        })
        .add({
          targets: ".box-content2",
          rotate: 360,
          duration: 1000,
          endDelay: 500
        })
        .add({
          translateY: 0,
          translateX: 0,
          scale: 1
        });
    },
    runAnime_3() {
      let progressLogEl = this.$refs["progressLogEl"];
      let animation = anime({
        targets: ".dot3",
        scaleY: function(el, i, l) {
          return anime.random(0.5, 5);
        },
        delay: anime.stagger(100, { from: "center" }),
        opacity: anime.stagger(0.04, { from: "0" }),
        autoplay: false,
        direction: "alternate",
        loop: true,
        update: function(anim) {
          progressLogEl.value = "progress : " + Math.round(anim.progress) + "%";
        }
      });
      this.$refs["play"].onclick = animation.play; //开始
      this.$refs["pause"].onclick = animation.pause; //暂停
      this.$refs["restart"].onclick = animation.restart; //重新开始
    },
    runAnime_4() {
      let tl = anime.timeline({
        duration: 100,
        //动画完成后，会触发一次complete()回调。
        complete: function() {
          tl.restart(); //重新开始
        }
      });
      function createEl(i) {
        let el = document.getElementsByClassName("dot4")[i];
        tl.add({
          //   当动画开始播放时，begin()回调被触发一次。
          begin: function() {
            anime({
              targets: el,
              translateX: 40,
              scale: 1.2,
              easing: "easeInOutSine",
              direction: "alternate",
              background: "hsl(165, 65%, 32%)"
            });
          }
        });
      }
      for (let i = 0; i < 100; i++) {
        createEl(i);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#box {
  position: absolute;
  width: 100%;
  height: 100%;
//   background: hsl(59, 100%, 50%);
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-content {
  width: 100px;
  height: 100px;
  transform-origin: 50% 50%;
  position: relative;
}
#dot {
  display: inline-block;
  width: 100px;
  height: 100px;
  background: hsl(165, 65%, 45%);
}
.hint-t {
  position: absolute;
  bottom: 100px;
  right: 50px;
  input {
    background: transparent;
    border: none;
    font-weight: bold;
    color: #777676;
  }
}
.title {
  position: absolute;
  top: 50px;
  left: 50px;
  font-weight: bold;
  font-size: 20px;
  color: #777676;
}
.hint {
  position: absolute;
  bottom: 50px;
  right: 50px;
  display: flex;
  span {
    padding: 10px;
    cursor: pointer;
    &:hover {
      background: white;
    }
  }
}
.dot4 {
  transform-origin: 150px 5px;
}
.dot5 {
  position: absolute;
  left: calc(50% - 50px);
  top: calc(50% - 50px);
  border-radius: 50%;
}
</style>