<template>
  <div class="overall" @click="close_path" @mousedown="m_d_path" @mouseup="m_u_path">
    <div class="box">
      <svg viewBox="0 0 300 400">
        <path
          @mousemove="m_m_path"
          id="svg_1"
          d="m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c0.08772,-132.90296 0.17544,-265.80592 0.26316,-398.70888z"
        />
      </svg>
      <div class="chat_box" @click.prevent="path_open == true">
        <div class="chat_msg" v-for="(m,index) in 20" :key="index">
          <span>Massage_{{index+1}}</span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  watch: {
    path_open(newVal, oldVal) {
      if (!newVal) {
        anime({
          targets: "#svg_1",
          d: [
            {
              value:
                "m158.1579,0.7648l-157.63158,-0.23848l0,398.94736l156.90516,0c-90.81049,-132.37664 -97.93677,-266.85855 0.72642,-398.70888z",
              duration: 100,
              easing: "easeInQuad"
            },
            {
              value:
                "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c0.08772,-132.90296 0.17544,-265.80592 0.26316,-398.70888z",
              duration: 300
            }
          ],
          begin: function() {
            anime({
              targets: ".chat_box",
              translateX: [0, -160],
              opacity: 0,
              duration: 0
            });
          }
        });
      }
    }
  },
  data() {
    return {
      box_el: null, //容器标签
      path_el: null, //获取 path 标签
      down_m_x: 0, //鼠标点击时的坐标
      click_on: false, //是否处于拖拉状态
      path_open: false, //左侧拉伸框是否打开
      stretch: 0, //拉伸长度
      pathList: [
        //默认状态
        {
          value:
            "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c0.08772,-132.90296 0.17544,-265.80592 0.26316,-398.70888z"
        },
        //拉伸时状态
        {
          value:
            "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c132.71929,-76.58717 132.2807,-323.17434 0.26316,-398.70888z"
        },
        //最终状态
        {
          value:
            "m158.1579,0.7648l-157.63158,-0.23848l0,398.94736l156.90516,0c0.24214,-132.90296 0.48428,-265.80592 0.72642,-398.70888z"
        },
        //回收时状态
        {
          value:
            "m158.1579,0.7648l-157.63158,-0.23848l0,398.94736l156.90516,0c-90.81049,-132.37664 -97.93677,-266.85855 0.72642,-398.70888z"
        }
      ]
    };
  },
  mounted() {
    let _this = this;
    _this.path_el = document.querySelector("#svg_1");
    _this.box_el = document.querySelector(".box");
    // anime({
    //   targets: "#svg_1",
    //   d: [
    //     {
    //       value:
    //         "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c0.08772,-132.90296 0.17544,-265.80592 0.26316,-398.70888z"
    //     },
    //     {
    //       value:
    //         "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c132.71929,-76.58717 132.2807,-323.17434 0.26316,-398.70888z"
    //     },
    //     {
    //       value:
    //         "m158.1579,0.7648l-157.63158,-0.23848l0,398.94736l156.90516,0c0.24214,-132.90296 0.48428,-265.80592 0.72642,-398.70888z"
    //     },
    //     {
    //       value:
    //         "m158.1579,0.7648l-157.63158,-0.23848l0,398.94736l156.90516,0c-90.81049,-132.37664 -97.93677,-266.85855 0.72642,-398.70888z"
    //     },
    //     {
    //       value:
    //         "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c0.08772,-132.90296 0.17544,-265.80592 0.26316,-398.70888z"
    //     }
    //   ],
    //   duration: 5000,
    //   loop: true
    // });
  },
  methods: {
    //鼠标点击
    m_d_path(e) {
      console.log("鼠标点击");
      this.click_on = true;
      this.down_m_x = e.clientX;
    },
    //鼠标点击后 + 移动（拖拽时）
    m_m_path(e) {
      //拉伸的距离长度
      // e.clientX 鼠标当前最新的坐标位置
      // this.down_m_x 鼠标最初的点击坐标位置
      //当左侧拉伸框是打开状态下，不再执行以下操作
      let left = this.box_el.offsetLeft;
      // this.down_m_x > left 防止用户直接从左侧拉伸进入容器时，左侧框直接被拉开
      if (!this.path_open && this.down_m_x > left) {
        this.stretch = e.clientX - this.down_m_x; //拉伸长度
        if (this.stretch > 0 && this.click_on) {
          console.log(this.stretch);
          this.path_el.setAttribute(
            "d",
            `m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c${this.stretch},-132.90296 ${this.stretch},-265.80592 0.26316,-398.70888z`
          );
        }
      } else {
        // alert("我已经被拉开了");
      }
    },
    //鼠标松开
    m_u_path(e) {
      console.log("鼠标松开");
      let left = this.box_el.offsetLeft;
      //当左侧拉伸框是打开状态下，不再执行以下操作
      // this.down_m_x > left 防止用户直接从左侧拉伸进入容器时，左侧框直接被拉开
      //this.stretch > 0 防止关闭左侧拉伸框时，用户重复点击问题
      if (!this.path_open && this.down_m_x > left && this.stretch > 0) {
        //如果拖拉距离超过50，则展开
        if (this.stretch > 50) {
          let _this = this;
          anime({
            targets: "#svg_1",
            duration: 300,
            d:
              "m158.1579,0.7648l-157.63158,-0.23848l0,398.94736l156.90516,0c0.24214,-132.90296 0.48428,-265.80592 0.72642,-398.70888z",
            complete: function(anim) {
              //动画完成后，会触发一次complete()回调。
              _this.path_open = true;
              anime({
                targets: ".chat_box",
                translateX: [-160, 0],
                opacity: 1,
                duration: 0
              });
            }
          });
        } else {
          //不超过50 则恢复
          anime({
            targets: "#svg_1",
            duration: 200,
            d:
              "m57.63158,0.7648l-57.10526,-0.23848l0,398.94736l56.8421,0c0.08772,-132.90296 0.17544,-265.80592 0.26316,-398.70888z"
          });
        }
      } else {
        // alert("我已经被拉开了");
      }
      this.click_on = false;
    },
    //关闭左侧拉伸框
    close_path(e) {
      console.log(e.target);
      // 主要运用了事件的冒泡
      //判断点击除 左侧拉伸框 外其他部分，全部为关闭 左侧拉伸框
      if (
        e.target == this.box_el ||
        e.target == document.querySelector(".overall")
      ) {
        //关闭后重置 左侧拉伸框状态 拉伸长度
        this.path_open = false;
        this.stretch = 0;
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="scss"  scoped>
.overall {
  background: #65698f;
}
svg {
  width: 100%;
  height: 100%;
  transform: scale(1.05);
}
path {
  cursor: grab;
  fill: rgba(255, 255, 255, 0.966);
  stroke-width: 0;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.box {
  width: 300px;
  height: 400px;
  background: #6d7ada;
  overflow: hidden;
  position: relative;
  .chat_box {
    width: 160px;
    height: 100%;
    // background: red;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    overflow-y: scroll;
    opacity: 0;
    transform: translateX(-160px);
    &::-webkit-scrollbar {
      opacity: 0;
      background: rgba(204, 204, 204, 0.685) !important;
      width: 2px; //y轴滚轮的宽
      // height: 2px; //x轴滚轮的高
    }
    &::-webkit-scrollbar-thumb {
      /*滚动条里面小方块*/
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: white;
    }
    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      // -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      // border-radius: 10px;
      background: transparent;
      //  -webkit-scrollBar-track-color:black;
    }

    .chat_msg {
      margin: 0 5px;
      height: 60px;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #5a5a5a;
      font-weight: bold;
      position: relative;
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgb(25, 238, 185);
        position: absolute;
        right: 5%;
      }
    }
  }
}
</style>