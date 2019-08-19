<template>
  <div>
    <div class="demo"></div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  mounted() {
    //   1.时间曲线
      //不匀速
    // 'easeInQuad'	     'easeOutQuad'	'easeInOutQuad'	由快至慢
    // 'easeInCubic'	 'easeOutCubic'	'easeInOutCubic'	由快至慢，效果更强
    // 'easeInQuart'   	 'easeOutQuart'	'easeInOutQuart'	由快至慢，效果更强
    // 'easeInQuint'	 'easeOutQuint'	'easeInOutQuint'	由快至慢，效果更强
    // 'easeInSine'	     'easeOutSine'	'easeInOutSine'	由快至慢，比Quad弱
    // 'easeInExpo'	     'easeOutExpo'	'easeInOutExpo'	突然减速，效果较强
    // 'easeInCirc'	     'easeOutCirc'	'easeInOutCirc'	突然减速，效果较弱
    // 'easeInBack'	     'easeOutBack'	'easeInOutBack'	冲出终点后返回
    anime({
      targets: ".demo",
      translateX: 250,
      direction: "alternate",
      loop: true,
    //   easing: "linear" //匀速 不对动画应用任何缓动时间曲线。对于opacity和colors过渡很有用。
    //   easing: "cubicBezier(.5, .05, .1, .3)" //三次贝塞尔 使用您自己的自定义立方Bézier曲线cubicBezier(x1, y1, x2, y2).
      easing: 'steps(5)' //台阶式 定义动画到达其结束值所需的跳转次数。
    });

    // 2.方法
    // anime.remove(targets) //  删除目标
    // anime.get(target, propertyName, unit); //anime.get(domNode, 'width', 'rem'); 第三个（可选）参数转换所需单位的值。
    // anime.set(targets, {property: value}); //立即将值设置为指定的目标。
    // anime.random(minValue, maxValue); //返回特定范围内的随机整数。
    // animation.tick(time) //使用外部requestAnimationFrame循环播放动画。
    // anime.running //返回当前正在运行的所有活动anime.js实例的Array。
  }
};
</script>

<style lang="scss" scoped>
.demo {
  width: 30px;
  height: 30px;
  background: goldenrod;
}
</style>