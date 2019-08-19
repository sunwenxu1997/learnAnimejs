<template>
  <div>
    <input type="text" ref="updateLogEl" />
    <input type="text" ref="changeLogEl" />
    <div class="demo"></div>
    <input type="text" ref="beginLogEl" value="-" />
    <input type="text" ref="completeLogEl" value="-" />
    <br />
    <div class="promise-demo"></div>
    <input type="text" ref="progressLogEl" />
    <span></span>
    <input type="text" ref="finishedLogEl" value />
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      updates: 0
    };
  },
  mounted() {
    //    回调函数/事件函数
    let update = 0;
    let updateLogEl = this.$refs["updateLogEl"];
    let changeLogEl = this.$refs["changeLogEl"];
    let beginLogEl = this.$refs["beginLogEl"];
    let completeLogEl = this.$refs["completeLogEl"];

    var loopBegan = 0;
    var loopCompleted = 0;
    var changes = 0;
    var changeBegan = 0;
    var changeCompleted = 0;
    setTimeout(() => {
      anime({
        targets: ".demo",
        loop: 3,
        translateX: 270,
        // direction: "alternate",
        update: function(anime) {
          //动画开始播放后，每帧都会触发此回调。
          update++;
          updateLogEl.value = update;
        },
        change: function() {
          //在动画的delay和endDelay之间的每个帧上触发此回调。(和update有些许类似)
          changes++;
          changeLogEl.value = "changes : " + changes;
        },

        // 1.
        // begin: function(anim) {
        //   //当动画开始播放时，begin()回调被触发一次。
        //   beginLogEl.value = "动画开始 : " + anim.began;
        // },
        // complete: function(anim) {
        //   //动画完成后，会触发一次complete()回调。
        //   completeLogEl.value = "动画结束 : " + anim.completed;
        // },

        // 2.
        // loopBegin: function(anim) {
        //   //每次循环开始时都会触发一次loopBegin() 回调
        //   loopBegan++;
        //   beginLogEl.value = "loop began : " + loopBegan;
        // },
        // loopComplete: function(anim) {
        //   //每次循环结束时，就会触发一次loopComplete()回调函数。
        //   loopCompleted++;
        //   completeLogEl.value = "loop completed : " + loopCompleted;
        // },

        // 3.
        changeBegin: function(anim) {
          //每次动画改变开始时都会触发changeBegin()回调
          changeBegan++;
          beginLogEl.value = "change began : " + changeBegan;
        },
        changeComplete: function(anim) {
          //每次动画改变结束时都会触发changeComplete()回调
          changeCompleted++;
          completeLogEl.value = "change completed : " + changeCompleted;
        }
      });
    }, 1000);

    //    动画完成后，每个动画实例都会返回一个完成的promise。
    var finishedLogEl = this.$refs["finishedLogEl"];
    var progressLogEl = this.$refs["progressLogEl"];
    //动画完成后需要做的
    function logFinished() {
      anime.set(finishedLogEl, { value: "Promise resolved" });
      anime.set(".promise-demo", { backgroundColor: "#18FF92" });
    }
    var animation = anime
      .timeline({
        targets: ".promise-demo",
        delay: 400,
        duration: 500,
        endDelay: 400,
        easing: "easeInOutSine",
        update: function(anim) {
          progressLogEl.value = "progress : " + Math.round(anim.progress) + "%";
        }
      })
      .add({
        translateX: 250
      })
      .add({
        scale: 2
      })
      .add({
        translateX: 0
      });
    animation.finished.then(logFinished);
  }
};
</script>

<style lang="scss" scoped>
.demo {
  width: 30px;
  height: 30px;
  background: goldenrod;
}
.promise-demo {
  width: 30px;
  height: 30px;
  background: teal;
}
</style>