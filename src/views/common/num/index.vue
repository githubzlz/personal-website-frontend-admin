<template>
  <div
    class="com-num"
    :style="'background-color:'
      + backColor
      +';color:'
      + fontColor
      +';width:'
      + size*10
      +'px;height:'
      + size*10 + ''
      +'px;line-height:'
      + size*10
      + 'px;'
    "
  >
    {{ num }}
  </div>
</template>

<script>
export default {
  name: 'ComNum',
  props: {
    num: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 2
    },
    backColor: {
      type: String,
      default: ''
    },
    fontColor: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.com-num {
  display: inline-block;
  height: 20px;
  width: 20px;
  background-color: #7EA656;
  text-align: center;
  border-radius: 10px;
  color: whitesmoke;
  margin: 0 5px;
}
</style>
