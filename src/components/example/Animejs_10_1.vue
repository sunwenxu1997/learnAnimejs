<template>
  <div class="overall" ref="overall">
    <span class="dot" v-for="(i,index) in 100" :key="index"></span>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    this.reunAnime();
  },
  methods: {
    reunAnime() {
      // 获取浏览器的长和高
      var w = Math.floor(window.innerWidth);
      var h = Math.floor(window.innerHeight);
      
      var list = []
      var animation = anime.timeline({
        targets: ".dot",
        // duration: 1000,
        easing: "easeInOutSine",
        // direction: "alternate",
        loop: true,
        autoplay: true //是否允许自动播放
      });
      animation
        .add({
          //生成小圆点
          translateX: function(el, i, l) {
            let y = (i % 10) + 1; //第几列
            if (y > 5) {
              return (-(y - 6) * w) / 10 - w / 20;
            } else {
              return ((5 - y) * w) / 10 + w / 20;
            }
          },
          translateY: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            if (x > 5) {
              return (-(x - 6) * h) / 10 - h / 20;
            } else {
              return ((5 - x) * h) / 10 + h / 20;
            }
          },
          delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
          scale: anime.random(5, 10),
          endDelay: 500
        })
        .add({
          //复原
          translateX: 0,
          translateY: 0,
          scale: 1,
          delay: function(el, i, l) {
            return anime.random(100, 500);
          },
          endDelay: 500
        })
        .add({
          //生成一条线
          translateX: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            let y = (i % 10) + 1; //第几列
            if (x > 5) {
              return ((10 - y) * w) / 10.1 - w / 2 + w / 20 + (x - 6) * 10;
            } else {
              return (-(y - 1) * w) / 10.1 + w / 2 - w / 20 - (5 - x) * 10;
            }
          },
          translateY: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            if (x > 5) {
              return (-(x - 6) * h) / 10 - h / 20 - 0.5;
            } else {
              return ((5 - x) * h) / 10 + h / 20 + 0.5;
            }
          },
          scale: [{ value: 5 }, { value: 10 }, { value: 1 }],
          delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
          endDelay: 500
        })
        .add({
          //复原
          translateX: 0,
          translateY: 0,
          scale: 1,
          delay: function(el, i, l) {
            return anime.random(100, 500);
          },
          endDelay: 500
        })
        .add({
          //爆炸球
          borderRadius: 0,
          translateX: function(el, i, l) {
            let y = (i % 10) + 1; //第几列
            if (y > 5) {
              return (-(y - 6) * w) / 10 - w / 20;
            } else {
              return ((5 - y) * w) / 10 + w / 20;
            }
          },
          translateY: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            if (x > 5) {
              return (-(x - 6) * h) / 10 - h / 20;
            } else {
              return ((5 - x) * h) / 10 + h / 20;
            }
          },
          width: function(el, i, l) {
            if (i % 2 == 1) {
              return w / 10;
            }
          },
          height: function(el, i, l) {
            if (i % 2 != 1) {
              if (w > h) {
                return h / 10;
              } else {
                return w / 10;
              }
            }
          },
          endDelay: 500,
          delay: anime.stagger(500, { grid: [10, 10], from: "center" }),
          rotate: anime.stagger(36, { grid: [10, 10], from: "last" })
        })
        .add({
          scaleX: function(el, i, l) {
            if (i % 2 == 1) {
              return anime.random(2, 5);
            }
          },
          scaleY: function(el, i, l) {
            if (i % 2 != 1) {
                return anime.random(1,4);
            }
          },
           easing: "easeOutElastic",
            endDelay: 500,
            delay:function (el,i,l) {
                 return anime.random(100,200);
            }
        })
        .add({
          //复原
          borderRadius: "50%",
          rotate: 0,
          translateX: 0,
          translateY: 0,
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          width: 2,
          height: 2,
          delay: anime.random(100, 500),
          endDelay: 500,
        })
        .add({
          //生成小圆点
          translateX: function(el, i, l) {
            let y = (i % 10) + 1; //第几列
            if (y > 5) {
              return (-(y - 6) * w) / 10 - w / 20;
            } else {
              return ((5 - y) * w) / 10 + w / 20;
            }
          },
          translateY: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            if (x > 5) {
              return (-(x - 6) * h) / 10 - h / 20;
            } else {
              return ((5 - x) * h) / 10 + h / 20;
            }
          },
          delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
          scale: anime.random(5, 10),
          endDelay: 500,
        })
        .add({
          transformOrigin:['50%,50%',1000],
          rotate:function (el,i,l) {
              return i*3.6
          },
           delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
          endDelay: 500,
        })
        .add({
            rotate:function (el,i,l) {
              return i*3.6 + 360
          },
          scale:0
        }).add({
            transformOrigin:'50%,50%',
             translateX: 0,
            translateY: 0,
           rotate:anime.random(-100,100),
            scale:function (el,i,l) {
              return anime.random(1,10)
          },
             easing: "easeOutElastic",
        })
        .add({
              //复原
          borderRadius: "50%",
          rotate: 0,
          translateX: 0,
          translateY: 0,
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          width: 2,
          height: 2,
          delay: function(el, i, l) {
            return anime.random(100, 500);
          },
          easing: "easeOutElastic",
          endDelay: 500
        })
        .add({
          //生成小圆点
          translateX: function(el, i, l) {
            let y = (i % 10) + 1; //第几列
            if (y > 5) {
              return (-(y - 6) * w) / 10 - w / 20;
            } else {
              return ((5 - y) * w) / 10 + w / 20;
            }
          },
          translateY: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            if (x > 5) {
              return (-(x - 6) * h) / 10 - h / 20;
            } else {
              return ((5 - x) * h) / 10 + h / 20;
            }
          },
          delay: anime.stagger(100, { grid: [10, 10], from: "center" }),
          scale: 1,
          endDelay: 500
        })
        .add({
          transformOrigin:'50%',
          width: 50,
          height: 50,
          scale: function(el, i, l) {
            let x = Math.floor(i / 10) + 1; //第几行
            return x * 0.3;
          },
          borderRadius: { value: "0", duration: 0 },
          borderTopLeftRadius: 200,
          borderBottomRightRadius: 200,
          rotate: { value: anime.stagger(36), duration: anime.stagger(100) },
          opacity: 0.1,
          easing: "easeOutElastic",
          endDelay: 500,
          delay: function(el, i, l) {
            return i * 100;
          }
        })
        .add({
          translateX: function(el, i, l) {
            return anime.random(-w / 2, w / 2);
          },
          translateY: function(el, i, l) {
            return anime.random(-h / 2, h / 2);
          },
          borderTopLeftRadius: { value: 0, duration: 0 },
          borderBottomRightRadius: { value: 0, duration: 0 }
        })
        .add({
          opacity: 0.5,
          rotateX: function(el, i, l) {
            return anime.random(-80, 80);
          },
          rotateY: function(el, i, l) {
            return anime.random(-80, 80);
          },
          rotateZ: function(el, i, l) {
            return anime.random(-80, 80);
          },

          delay: function(el, i, l) {
            return i * 10;
          },
          endDelay: 500
        })
        .add({
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0,
          easing: "easeOutElastic",
          borderRadius: "50%",
          width: 2,
          height: 2,
          scale: 1,
          translateX: 0,
          translateY: 0,
          delay: function(el, i, l) {
            return i * 10;
          },
          endDelay: 500
        })
       
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  background: #f0efef;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  place-items: center;
  overflow: hidden;
  perspective: 3000;
  transform-style: preserve-3d;
}
.dot {
  transform-style: preserve-3d;
  display: block;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background: black;
  opacity: 0.5;
  position: relative;
}
</style>