<template>
  <div class="state-point">
    <div class="state-point-point" :style="'background-color:' + (state === 0 ? '#7EA656' : '#F56C6C')"></div>
  </div>
</template>

<script>
export default {
  name: 'StatePoint',
  props: {
    state: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.state-point {
  display: inline-block;
  &-point{
    height: 12px;
    width: 12px;
    border-radius: 4px;
    text-align: center;
   }
}
</style>
