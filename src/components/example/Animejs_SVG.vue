<template>
  <div class="overall">
    <div class="bck">
      <svg viewBox="0 0 700 600" width="700" height="600">
        <path
          id="svg_1"
          d="m236.5,251.45313c0,0 138,-9 138,-9c0,0 -37,-65 -37,-65c0,0 -101,74 -101,74z"
        />
        <path
          id="svg_2"
          d="m337.5,178.45313c0,0 100,73 100,73c0,0 -18,58 -18,58c0,0 -82,-131 -82,-131z"
        />
        <path
          id="svg_3"
          d="m419.5,308.45313c0,0 -144,60 -144,60c0,0 124,0 124,0c0,0 20,-60 20,-60z"
        />
        <path
          id="svg_4"
          d="m375.5,244.45313c0,0 -101,123 -101,123c0,0 143,-58 143,-58c0,0 -42,-65 -42,-65z"
        />
        <path
          id="svg_5"
          d="m373.5,243.45313c0,0 -137,8 -137,8c0,0 36,116 36,116c0,0 101,-124 101,-124z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      paths: [
        {
          id: "#svg_1",
          d:
            "m335.5,160.45313c0,0 -76,165 -76,165c0,0 -45,-44 -45,-44c0,0 121,-121 121,-121z"
        },
        {
          id: "#svg_2",
          d:
            "m261.5,325.45313c0,0 100,-31 100,-31c0,0 -46,-85 -46,-85c0,0 -54,116 -54,116z"
        },
        {
          id: "#svg_3",
          d:
            "m315.5,209.45313c0,0 138,71 138,71c0,0 -116,-121 -116,-121c0,0 -22,50 -22,50z"
        },
        {
          id: "#svg_4",
          d:
            "m452.5,281.45313c0,0 -117,120 -117,120c0,0 -75,-73 -75,-73c0,0 192,-47 192,-47z"
        },
        {
          id: "#svg_5",
          d:
            "m317.5,210.45313c0,0 47,92 47,92c0,0 88,-21 88,-21c0,0 -135,-71 -135,-71z"
        }
      ]
    };
  },
  mounted() {
    let _this = this;
    _this.paths.forEach(function(path, index) {
      anime({
        targets: path.id,
        d: {
          value: path.d,
          duration: 1000,
          easing: "easeInOutQuad"
        },
        delay: 1000,
        endDelay: 1000,
        direction: "alternate",
        loop: true
      });
    });
  }
};
</script>

<style  scoped>
svg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
}
path {
  fill: none;
  stroke: black;
  stroke-width: 4;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.bck {
  width: 700px;
  height: 600px;
}
</style>