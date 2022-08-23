<template>
  <div>
    <ul>
      <li v-for="i in arr" :key="i">{{ i }}</li>
    </ul>
    <button @click="fun">走</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      arr:['帅哥','美女','程序员']
    }
  },
  methods: {
    fun(){
      this.arr.push(this.arr[0])
      this.arr.splice(0,1)
    }
}
}

</script>

<style scoped></style>
