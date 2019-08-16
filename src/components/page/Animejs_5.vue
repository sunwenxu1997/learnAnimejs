<template>
  <div>
    <div class="basic-timeline-demo">
      <div class="el square"></div>
      <div class="el circle"></div>
      <div class="el square1"></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    //   1.时间轴
    // 使用默认参数创建时间轴,共用时间与运动速率
    // var tl = anime.timeline({
    //   easing: "easeOutExpo",
    //   duration: 750
    // });
    // //增加子项（按照顺序依次执行）
    // tl.add({
    //   targets: ".basic-timeline-demo .el.square",
    //   translateX: 250
    // }).add({
    //   targets: ".basic-timeline-demo .el.circle",
    //   translateX: 250 //-=600 750-600=150 表示150ms后执行
    // },'-=600').add({
    //   targets: ".basic-timeline-demo .el.square1",
    //   translateX: 250 //0 表示无延迟执行，忽略依次执行
    // },'0');

    // 2.参数继承
    var tl = anime.timeline({
      targets: ".basic-timeline-demo .el",
      delay: function(el, i) {
        return i * 200;
      },
      duration: 500,
      easing: "easeOutExpo",
      direction: "alternate",
      loop: true
    });
    tl.add({
      translateX: 250,
      // 覆盖缓动参数
      easing: "spring"
    })
      .add({
        opacity: 0.5,
        scale: 2
      })
      .add({
        // 覆盖目标参数
        targets: ".basic-timeline-demo .el.square1",
        rotate: 45
      })
      .add({
        translateX: 0,
        scale: 1
      });
  }
};
</script>

<style lang="scss" scoped>
.basic-timeline-demo {
  margin-top: 30px;
  .square {
  }
  .circle {
    border-radius: 50%;
  }
}
.basic-timeline-demo .el {
  width: 20px;
  height: 20px;
  margin: 2px;
  background: #2be7de;
}
</style>