<template>
  <div>
    <div>
      <div class="motion-path-demo">
        <div class="el"></div>
        <svg>
          <path
            d="M8,56 C8,33.90861 25.90861,16 48,16 C70.09139,16 88,33.90861 88,56 C88,78.09139 105.90861,92 128,92 C150.09139,92 160,72 160,56 C160,40 148,24 128,24 C108,24 96,40 96,56 C96,72 105.90861,92 128,92 C154,93 168,78 168,56 C168,33.90861 185.90861,16 208,16 C230.09139,16 248,33.90861 248,56 C248,78.09139 230.09139,96 208,96 L48,96 C25.90861,96 8,78.09139 8,56 Z"
            stroke-width="1"
            stroke="#ccc"
            fill="#fff"
          />
        </svg>
      </div>
      <br />
      <br />
      <div class="morphing-demo">
        <svg>
          <polygon class="polymorph" stroke="#ccc" fill="#fff" />
        </svg>
      </div>
      <br />
      <br />

      <div class="line-drawing-demo">
        <svg>
            <path
              d="m328.94741,180.49203c-6.02268,-10.24438 -13.39099,-18.53828 -20.78194,-24.34018c-8.62407,5.94698 -19.12773,9.56825 -30.57875,9.56825c-11.47351,0 -21.99227,-3.62833 -30.60114,-9.56825c-7.39093,5.8019 -14.76677,14.0958 -20.80423,24.34018c-14.01505,23.78452 -15.55637,48.18136 -3.45129,54.50714c5.42116,2.84956 11.10518,0.72566 16.97741,-4.60193c-1.03007,5.40184 -1.63161,11.25673 -1.63161,17.38079c0,27.20761 11.22557,49.24691 25.05987,49.24691c8.3384,0 12.46615,-8.025 14.451,-20.31189c1.97753,12.28689 6.10525,20.31189 14.41342,20.31189c13.85703,0 25.0827,-22.0393 25.0827,-49.24691c0,-6.12406 -0.60174,-11.97895 -1.6542,-17.38079c5.88713,5.32759 11.56367,7.45149 16.99988,4.60193c12.09763,-6.32578 10.53355,-30.72263 -3.48111,-54.50714l-0.00001,0zm-51.37549,-24.05347c23.27783,0 42.15737,-17.77723 42.15737,-39.70678s-18.87954,-39.70683 -42.15737,-39.70683c-23.28575,0 -42.1802,17.78077 -42.1802,39.70683s18.89445,39.70678 42.1802,39.70678z"
              stroke-width="1.5"
              stroke="#000"
              fill="#fff"
            />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    //1.   动画一个元素，使之相对于SVG路径的x，y和角度值运动。
    var path = anime.path(".motion-path-demo path");
    anime({
      targets: ".motion-path-demo .el",
      translateX: path("x"),
      translateY: path("y"),
      rotate: path("angle"),
      easing: "linear",
      duration: 20000,
      loop: true
    });

    // 2.变形动画
    anime({
      targets: ".morphing-demo .polymorph",
      points: [
        {
          value: [
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369",
            "70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369"
          ]
        },
        {
          value:
            "70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369"
        },
        {
          value:
            "70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369"
        },
        {
          value:
            "70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369"
        }
      ],
      easing: "easeOutQuad",
      duration: 2000,
      loop: true
    });

    //   3.画线动画
    anime({
      targets: ".line-drawing-demo  path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 1500,
      delay: function(el, i) {
        return i * 250;
      },
      direction: "alternate",
      loop: true
    });
  }
};
</script>

<style lang="scss" scoped>
.motion-path-demo .el {
  width: 20px;
  height: 20px;
  background: yellowgreen;
  position: relative;
  top: 10px;
  left: -10px;
}
.motion-path-demo {
  margin: 50px;
}
svg {
  width: 100%;
  height: 100%;
}
.line-drawing-demo{
    height: 300px;
}
</style>