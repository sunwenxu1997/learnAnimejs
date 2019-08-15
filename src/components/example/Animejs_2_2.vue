<template>
  <div>
    <span
      v-for="(i,index) in textList"
      :key="index"
      :style="i == null?'margin:5px;padding:0':''"
      class="text"
    >{{i}}</span>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      text: "I AM I",
      textList: []
    };
  },
  created() {
    this.textCut(this.text);
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    textCut(str) {
      let strArr = str.split("");
      for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].match(/^[\s]*$/)) {
          strArr[i] = null;
        }
      }
      this.textList = strArr
    },
    runAnime() {
      anime({
        targets: ".text",
        translateY: 270,
        direction: "alternate",
        loop: true,
        background:'#f85353',
        delay: function(el, i, l) {
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
.text {
  display: inline-block;
  padding: 5px;
  color: white;
  font-weight: bold;
}
</style>