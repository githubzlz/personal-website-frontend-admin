<template>
  <div class="card-title">
    <div class="card-title-left" :style="'background-color:'+color" />
    <span class="card-title-right">{{ titleName }}</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CardTitle',
  props: {
    titleName: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card-title{
  height: 30px;
}
.card-title-left{
  display: inline-block;
  height: 100%;
  width: 5px;
  background-color: #00a8c6;
  vertical-align: middle;
}
.card-title-right{
  font-size: 20px;
  margin-left: 10px;
  vertical-align: middle;
}
</style>
