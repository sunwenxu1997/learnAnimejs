<template>
  <div>
    <div class="css-prop-demo"></div>
    <div>
      <input type="text" ref="input" class="dom-attribute-demo input" :value="inputNumber" />
    </div>
    <br />
    <div class="svg">
      <svg width="200">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".05"
            numOctaves="5"
            stitchTiles="stitch"
          />
          <!-- baseFrequency属性表示<feTurbulence>过滤器基元的噪声函数的基频参数 -->
          <!-- numOctaves 由其频率和幅度定义的噪声函数 -->
          <feDisplacementMap in="SourceGraphic" scale="20" />
        </filter>
        <polygon
          ref="polygon"
          points="64 68.64 8.574 100 63.446 67.68 64 4 64.554 67.68 119.426 100"
        />
      </svg>
    </div>
    <div class="demo"></div>
    <div class="specific-prop-params-demo"></div><br><br><br>
    <div class="function-based-params-demo"></div>
    <div class="function-based-params-demo"></div>
    <div class="function-based-params-demo"></div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      inputNumber: 0,
      number: 999
    };
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    runAnime() {
      // 1.
      anime({
        //  大多数CSS属性都会导致布局更改或重新绘制，并会导致动画不稳定。 因此尽可能优先考虑opacity和CSS transforms。
        targets: ".css-prop-demo",
        left: "240px",
        opacity: 1,
        backgroundColor: "#ff7300", //不支持red blue yellow这些色值
        borderRadius: ["0%", "50%"],
        easing: "easeInOutQuad",
        scale: 2, //放大2倍
        rotate: "1turn" //1turn = 360deg
      });

      // 2.
      anime({
        targets: this.$refs["input"],
        value: [0, this.number],
        round: 1, //将值向上舍入为x小数。
        easing: "easeInOutExpo"
      });

      //   3. svg
      anime({
        targets: [this.$refs["polygon"], "feTurbulence", "feDisplacementMap"],
        points: "64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96", //路径值
        baseFrequency: 0, //基础频率
        scale: 1,
        loop: true,
        direction: "alternate", //是否返回执行动画
        easing: "easeInOutExpo"
      });

      //   4.动画基础参数
      anime({
        targets: ".demo",
        translateX: 250,
        duration: 3000, //持续时间
        delay: 1000, //定义动画的延迟（以毫秒为单位）
        endDelay: 1000, //在动画结束时以毫秒为单位添加一些额外时间。
        direction: "alternate",
        easing: "easeInOutExpo" //定义动画的时间曲线。 linear/easeInOutSine/easeInOutQuart
      });

      //   5.特殊属性
      anime({
        targets: ".specific-prop-params-demo",
        translateX: {
          //往右移动250px,执行时间为0.8s
          value: 250,
          duration: 800
        },
        rotate: {
          //旋转360deg，执行时间为1.8s
          value: 360,
          duration: 1800,
          easing: "easeInOutSine"
        },
        scale: {
          //变大2倍，执行时间1.6s，延时0.8s后执行
          value: 2,
          duration: 1600,
          delay: 800,
          easing: "easeInOutQuart"
        },
        delay: 1000,
        loop: true
      });

      //6.FUNCTION 参数
      anime({
        targets: ".function-based-params-demo",
        translateX: 270,
        direction: "alternate",
        loop: true,
        delay: function(el, i, l) {
            // el 当前动画目标元素 (target)
            // i 动画目标的索引 (index)
            // l 总动画目标数 (targetsLength)
          return i * 100;
        },
        endDelay: function(el, i, l) {
          return (l - i) * 100;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.css-prop-demo {
  width: 30px;
  height: 30px;
  opacity: 0.1;
  background-color: #f0ba45;
  position: relative;
  left: 0;
}
.dom-attribute-demo.input {
  text-align: center;
}
.svg {
  display: inline-block;
  filter: url(#filter);
  svg {
    fill: #f0ba45;
  }
}
.demo {
  width: 30px;
  height: 30px;
  background: royalblue;
}
.specific-prop-params-demo {
  width: 20px;
  height: 20px;
  background: seagreen;
}
.function-based-params-demo{
    width: 40px;
    height: 40px;
    background: salmon;
    margin: 2px;
}
</style>