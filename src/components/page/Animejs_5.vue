<template>
  <div>
    <div class="basic-timeline-demo">
        <square></square>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    //   1.时间轴
    // 使用默认参数创建时间轴
    var tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750
    });
    //增加子项
    tl.add({
      targets: ".basic-timeline-demo .el.square",
      translateX: 250
    })
      .add({
        targets: ".basic-timeline-demo .el.circle",
        translateX: 250
      })
      .add({
        targets: ".basic-timeline-demo .el.triangle",
        translateX: 250
      });
  }
};
</script>

<style lang="scss" scoped>
</style>