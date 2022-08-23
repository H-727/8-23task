<template>
  <div id="app">
    <ul>
        <li v-for="(itme, index) in arr" :key="itme"> 
            <span>{{ itme }}</span>
            <a href="javascript:;" @click.prevent="del(index)">删除</a></li>
    </ul>
    <button @click="add">添加</button>
  </div>
</template>

<script>
export default {
 data(){
     return {
         arr:[]
     }
 },
 methods:{
     add(){
         this.arr.push(Math.floor(Math.random()*10))
     },
     del(index){
         this.arr.splice(index,1)
     }
 }
 
};
</script>