<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ol>
      基础学习
      <li v-show="index != 0 && !i.meta.example" v-for="(i,index) in list" :key="index" @click="skip(i.name)">{{i.meta.title}}</li>
    </ol>
    <ul>
      实例应用
      <li v-show="index != 0 && i.meta.example" v-for="(i,index) in list" :key="index" @click="skip(i.name)">{{i.meta.title}}</li>
    </ul>
  </div>
</template>

<script>
import newRouter from '@/router/index.js'
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Vue.js and Anime.js",
      list:newRouter.options.routes,
    };
  },
  methods:{
    skip(name){
      this.$router.push({
        name:name
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol,ul{
  display: inline-block;
  margin: 40px;
}
li {
  color: #1c8a65;
  cursor: pointer;

}
li:hover{
  text-decoration: underline;
    font-weight: bold;
}
</style>
