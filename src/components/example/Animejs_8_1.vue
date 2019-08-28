<template>
  <div class="overall">
    <div class="box" ref="box" :style="`background: linear-gradient(to right,#37b383 0,#37b383 ${bck}px, white ${bck}px,white 100%)`">
      <div class="dot" ref="dot" :style="plan == 0 ? 'background:#f1f1f1':''"></div>
    </div>
    <span class="title">{{plan}}%</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
        plan:0, //进度滑块
        bck:0, //进度背景
    };
  },
  mounted(){
    this.getZoom('box','dot')
  },
  methods: {
    getZoom(d1, d2) {
      var _this = this
      var oDiv1 = this.$refs[d1];
      var oDiv2 = this.$refs[d2];
      oDiv2.onmousedown = function(ev) {
           ev.preventDefault();
        //鼠标按下位置
        var oEvent = ev || event;
        var disX = oEvent.clientX - oDiv2.offsetLeft;
        document.onmousemove = function(ev) {
          var oEvent = ev || event;
          var l = oEvent.clientX - disX;
        
          if (l < 0) {
            l = 0;
          } else if (l > oDiv1.offsetWidth - oDiv2.offsetWidth) {
            l = oDiv1.offsetWidth - oDiv2.offsetWidth;
          }
          _this.plan = (l/((oDiv1.offsetWidth - oDiv2.offsetWidth)/100)).toFixed(0)
          _this.bck = l
          oDiv2.style.left = l + "px"; //l范围：[0,580]
        };
        document.onmouseup = function() {
          document.onmousemove = null;
          document.onmouseup = null;
        };
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.overall {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box {
  width: 400px;
  height: 30px;
  box-shadow: 0 0 5px #ccc;
  position: relative;
  
}
.dot {
  width: 30px;
  height: 30px;
   background: #37b383;
  cursor: pointer;
  position: absolute;
}
.title{
    font-weight: bold;
    width: 100px;
    height: 30px;
    position: absolute;
    left: calc(50% - 50px);
    top: calc(50% - 50px);

}
</style>