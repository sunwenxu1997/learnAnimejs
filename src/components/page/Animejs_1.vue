<template>
  <div>
    <article>
      <div class="blue"></div>
      <div class="green"></div><br>

      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div><br>
        
      <div class="battery-log"></div>
    </article>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      charged:100,
      cycles:130,
    };
  },
  mounted() {
    this.runAnime();
  },
  methods: {
    runAnime() {
      // 1.targets选择需要控制的动画对象
      // var elements = document.querySelectorAll(".item"); //定义一个变量，为动画目标的集合
      // var myAnimation = anime({
      //   targets: elements, //css选择器，选择动画目标 [".blue", ".green"]/elements
      //   translateX: "13rem",//网右执行距离
      //   rotate: 180,//旋转角度
      //   borderRadius: 8,//边角变化值，值越大越圆
      //   duration: 2000,//执行时间
      //   loop: true //是否重复执行动画，false为执行一次，且停留在最终状态
      // });

      // 2.以JavaScript对象作为动画目标，这个对象必须含有至少一个数字属性
      // var logEl = document.querySelector(".battery-log");
      // var battery = {
      //   charged: "0%",
      //   cycles: 120
      // };
      // anime({
      //   targets: battery,
      //   charged: "100%",
      //   cycles: 130,
      //   round: 1,
      //   easing: "linear", //执行速率
      //   loop:true,
      //   update: function() {
      //     logEl.innerHTML = JSON.stringify(battery);
      //   }
      // });

      // 3.以数组的方式指定对动画对象的控制
      var el = document.querySelectorAll(".item");
      anime({
        targets:[el,".blue"], //以数组方式控制动画目标
        translateX:250
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.blue {
  width: 20px;
  height: 20px;
  background: blue;
}
.green {
  width: 30px;
  height: 30px;
  background: green;
}
.item {
  width: 10px;
  height: 10px;
  background: #cccc;
}
.battery-log{
  width: 100px;
  height: 50px;
}
</style>