<template>
  <div class="overall">
    <span class="first-plan" v-if="move">
      <i class="iconfont icon-planebfeiji"></i>
      <span
        ref="dot"
        class="dot"
        v-for="i in 70"
        :key="i"
        :style="`box-shadow: 0 0 20px 10px ${colors[Math.floor(Math.random()*4)]};`"
      ></span>
    </span>
    <div class="plan" v-if="move">
      <span class="z-plan" style="left: 0;">
        <section style="transform: rotate(-90deg);">
          <i class="iconfont icon-zhandouji"></i>
        </section>
        <span
          ref="dot-zl"
          class="dot"
          v-for="i in 50"
          :key="i"
          :style="`box-shadow: 0 0 20px 10px ${colors[Math.floor(Math.random()*4)]};`"
        ></span>
      </span>
      <span class="z-plan" style="right:0">
        <section style="transform: rotate(-90deg);">
          <i class="iconfont icon-zhandouji"></i>
        </section>
        <span
          ref="dot-zr"
          class="dot"
          v-for="i in 50"
          :key="i"
          :style="`box-shadow: 0 0 20px 10px ${colors[Math.floor(Math.random()*4)]};`"
        ></span>
      </span>
    </div>
    <div class="decorate">
      <div
        class="decorate-dot"
        v-for="i in 10"
        :key="i"
        :style="`background: hsl(${(10-i)*3}, 100%, 50%)`"
      ></div>
    </div>
    <div class="decorate-b">
      <div
        class="decorate-dot-b"
        v-for="i in 7"
        :key="i"
        :style="`background: hsl(${(10-i)*5 + 145}, 100%, 50%);`"
      ></div>
    </div>
    <div class="box">
      <div class="china">
        <span
          v-for="(i,index) in textList"
          :key="index"
          :style="i == null?'margin:5px;padding:0':''"
          class="china-text"
        >{{i}}</span>
      </div>
      <div class="seven">
        <section>
          <span class="number">7</span>
          <span class="ling">
            <!-- <i class="iconfont icon-chilun"></i> -->
          </span>
        </section>
      </div>
      <div class="top"></div>
      <div class="bottom">
        <div class="flat">
          <section>
            <i id="big" class="iconfont icon-jurassic_start" style="font-size:1rem"></i>
            <span class="stars">
              <i
                class="iconfont icon-jurassic_start"
                v-for="i in 4"
                :key="i"
                :style="`transform: rotate(${i*30}deg);`"
              ></i>
            </span>
          </section>
        </div>
        <span class="text">
          <span class="name">国 庆 节</span>
          <br />
          <span class="English">National Day</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  watch: {
    move() {
      console.log(111111);
    }
  },
  data() {
    return {
      windowH: window.innerHeight,
      colors: ["#FFEE80", "#FFE32A", "#FF522A", "#FFA843"],
      text: "CHINA",
      textList: [],
      move: true
    };
  },
  created() {
    this.textCut(this.text);
  },
  mounted() {
    let _this = this;
    let tl = anime.timeline({
      easing: "linear",
      delay: 500
    });
    tl.add({
      targets: ".first-plan",
      translateY: -_this.windowH,
      duration: 7000
    }).add({
      targets: ".first-plan",
      opacity: 0
    });
    let ztl = anime.timeline({
      easing: "linear"
    });
    ztl
      .add({
        targets: ".plan",
        translateY: -_this.windowH - 100,
        delay: 1500,
        duration: 7000
      })
      .add({
        targets: ".plan",
        opacity: 0,
        complete: function() {
          _this.move = false;
        }
      });
    let china = anime.timeline({
      loop: 1
    });
    china
      .add({
        targets: ".box",
        opacity: 1,
        translateY: [100, 0],
        duration: 500,
        delay: 7500
      })
      .add({
        targets: ".flat",
        opacity: [0, 1],
        scale: [1.5, 1]
      })
      .add({
        targets: ".china-text",
        translateY: [-500, 0],
        color: ["#ffffff", "#FF522A", "#ffffff"],
        delay: function(el, i, l) {
          return i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        }
      })
      .add({
        targets: ".china",
        opacity: [{ value: 1, endDelay: 500 }, { value: 0.4, duration: 500 }]
      })
      .add({
        targets: ".decorate-dot",
        opacity: [0, 0.6],
        delay: function(el, i, l) {
          return i * 50;
        },
        rotate: function(el, i, l) {
          return -i * 10 - 5;
        },
        begin: function() {
          anime({
            targets: ".decorate-dot-b",
            opacity: [0, 0.6],
            delay: function(el, i, l) {
              return i * 50;
            },
            rotate: function(el, i, l) {
              return -i*15+10;
            }
          });
        }
      });
    anime({
      targets: ".number",
      translateX: [-500, 0],
      opacity: [0, 1],
      delay: 12500
    });
    let ling = anime.timeline({
      targets: ".ling"
    });
    ling.add({
      translateX: [500, 0],
      opacity: [0, 1],
      delay: 12500,
      complete: function() {
        anime({
          targets: ".ling",
          easing: "linear",
          rotate: [0, 360],
          duration: 7000,
          loop: true
        });
      }
    });
    for (let i = 0; i < 70; i++) {
      anime({
        targets: _this.$refs["dot"][i],
        translateY: _this.windowH / 2,
        opacity: [0.8, 0],
        scale: [0, 2],
        delay: 10 * i,
        endDelay: 100,
        easing: "easeOutSine",
        loop: true
      });
    }
    for (let i = 0; i < 50; i++) {
      anime({
        targets: _this.$refs["dot-zl"][i],
        translateY: _this.windowH / 2,
        opacity: [0.8, 0],
        scale: [0, 2],
        delay: 10 * i,
        easing: "easeOutSine",
        loop: true
      });
    }
    for (let i = 0; i < 50; i++) {
      anime({
        targets: _this.$refs["dot-zr"][i],
        translateY: _this.windowH / 2,
        opacity: [0.8, 0],
        scale: [0, 2],
        delay: 10 * i,
        easing: "easeOutSine",
        loop: true
      });
    }
  },
  methods: {
    textCut(str) {
      let strArr = str.split("");
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/^[\s]*$/)) {
          strArr[i] = null;
        }
      }
      this.textList = strArr;
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}
.first-plan {
  position: absolute;
  bottom: 0%;

  i {
    font-size: 3rem;
    position: relative;
    left: -0.5rem;
  }
}
.plan {
  position: absolute;
  width: 70%;
  bottom: -3rem;
  // background: linear-gradient(-200deg,rgb(253, 77, 77) 0%,red 100%);
  .z-plan {
    position: absolute;
    top: -3rem;

    i {
      font-size: 3rem;
      position: relative;
      left: -0.5rem;
    }
  }
  .dot {
    left: 23px;
  }
}
.dot {
  display: block;
  position: absolute;
  left: 13px;
  width: 1px;
  height: 1px;
  border-radius: 50%;
  background: transparent;
}
.box {
  min-width: 300px;
  width: 80%;
  height: 10rem;
  opacity: 0;
  //   background: rgb(255, 136, 0);
  position: relative;
  top: -2rem;
  display: flex;
  justify-content: space-between;
  .top,
  .bottom {
    width: 100%;
    position: absolute;
  }
  .bottom {
    height: 2.5rem;
    bottom: 0;
    display: flex;
    text-transform: uppercase;
    justify-content: space-between;
    .text {
      //   background: rgb(255, 123, 0);
      width: 100%;
      display: inline-block;
      text-align: center;
      color: white;
      font-weight: bold;
      position: relative;
      &::after {
        content: "";
        height: 1px;
        width: 90%;
        background: rgb(245, 244, 244);
        position: absolute;
        left: 5%;
      }
      .name {
        letter-spacing: 2.2rem;
        position: relative;
        left: 1rem;
        background: linear-gradient(
          to right,
          #ffe32a 0%,
          #ff522a 80%,
          #ffa843 100%
        );
        /* 背景填充到文本中 */
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-size: 200% 100%;
        animation: bcksize 3s linear infinite alternate;
      }
      .English {
        letter-spacing: 0.5rem;
        background: linear-gradient(
          to right,
          #ffe32a 0%,
          #ff522a 80%,
          #ffa843 100%
        );
        /* 背景填充到文本中 */
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-size: 200% 100%;
        animation: bcksize 3s linear infinite alternate;
      }
      @keyframes bcksize {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: -100% 0;
        }
      }
    }
  }
  .flat {
    min-width: 4rem;
    width: 4rem;
    height: 2.5rem;
    background: red;
    display: inline-block;
    section {
      transform: scale(0.6);
      position: relative;
      left: -0.7rem;
      top: 0.2rem;
    }
    .stars {
      display: block;
      width: 1rem;
      height: 1rem;
      position: absolute;
      top: 0rem;
      left: 0rem;
      transform: rotate(-30deg);
      i {
        transform-origin: -1rem 1rem;
        position: absolute;
        right: -1rem;
        color: yellow;
        font-size: 0.5rem;
      }
    }
    #big {
      color: yellow;
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
    }
  }
}
.china {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  position: absolute;
  top: -0.5rem;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 5rem;
  .china-text {
    text-shadow: 2px 2px 5px #6e6e6e;
  }
}
.seven {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  position: absolute;
  top: -0.5rem;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  font-size: 7rem;
  .number {
    // background-image: ;
    display: inline-block;
    // background: red;
    color: red;
    position: relative;
    left: 1.2rem;
  }
  .ling {
    display: inline-block;
    position: relative;
    left: -1.2rem;
    width: 4rem;
    height: 4rem;
    background-image: url("../../assets/img/1.png");
    background-size: 120% 120%;
    background-position: -160px;
    border-radius: 50%;
    -webkit-mask: radial-gradient(transparent 12px, white 12px);
    i {
      font-size: 5rem;
      color: #474747;
    }
  }
}
.decorate {
  width: 100%;
  height: 7rem;
  position: absolute;
  top: -3.5rem;
  left: 0;
  z-index: -1;
  .decorate-dot {
      opacity: 0;
    width: 120%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    clip-path: polygon(30% 0%, 100% 0%, 100% 100%, 30% 100%, 0% 50%);
    transform-origin: 100% 50%;
  }
}
.decorate-b {
  width: 50%;
  height: 4rem;
  position: absolute;
  bottom: -3rem;
  left: 0;
  z-index: -1;
  .decorate-dot-b {
      opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%);
    transform-origin: 0% 50%;
  }
}
</style>