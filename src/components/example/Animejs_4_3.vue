<template>
  <div class="overall">
    <div class="vessel">
      <div class="box">
        <section
          class="box-dot"
          v-for="(i,index) in dotList"
          :key="i.num"
          @click="active(i,index)"
          :style="i.bck?'background:#26a063':''"
        ></section>
      </div><br>
      <button @click="exportList()">确定</button>
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
  data() {
    return {
      dotList: [], //存放小方格的列表
      letterList:[], //字母列表
    };
  },
  created() {
    this.createDotList();
  },
  methods: {
    //创建小方格列表 10*10
    createDotList() {
      for (let i = 0; i < 100; i++) {
        let obj = {
          num: i,
          bck: false
        };
        this.dotList[i] = obj;
      }
    //   console.log(this.dotList);
    },
    active(i, index) {
      let newObj = {
        num: i.num,
        bck: !i.bck
      };
      this.dotList.splice(index, 1, newObj);
    },
    exportList(){
        for (let i = 0; i < this.dotList.length; i++) {
            if (this.dotList[i].bck) {
                this.letterList.push(this.dotList[i].num)
            }
        }
        console.log(this.letterList)
    }
  }
};
</script>

<style scoped>
.overall {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f1f0f0;
}
.vessel {
  width: 100px;
}
.box {
  width: 100px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  background: #d4d4d4;
}
.box-dot {
  width: 10px;
  height: 10px;
  border: 1px solid #d4d4d4;
  box-sizing: border-box;
  background: white;
}
</style>