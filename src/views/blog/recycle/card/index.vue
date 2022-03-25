<template>
  <div class="blog-recycle-card" :body-style="{ padding: '0px' }">
    <div class="blog-recycle-card-back">
      <div class="blog-recycle-card-back-button">
        <div><el-button size="small" style="width: 100px">恢复</el-button></div>
        <div><el-button size="small" style="width: 100px;margin-top: 20px">彻底删除</el-button></div>
      </div>
    </div>
    <img alt="" :src="blog.imgSrc" class="blog-recycle-card-image">
    <div class="blog-recycle-card-title">
      {{ blog.title }}
    </div>
    <div class="blog-recycle-card-bottom">
      <span>{{ blog.modifiedTime | formatTimer }}</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'BlogRecycleCard',
  filters: {
    formatTimer: function(value) {
      const date = new Date(Number(value))
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return `${y}-${MM}-${d} ${h}:${m}:${s}`
    }
  },
  props: {
    blog: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-recycle-card{
  background-color: rgba(0,0,0,0.1);
  position: relative;
  text-align: center;
  display: inline-block;
  width: 150px;
  height:150px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  &-back{
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: background-color ease-in-out 0.3s;
    visibility: hidden;
    &-button{
      margin-top: 50%;
      transform: translateY(-50%);
    }
  }
  &-title{
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%,-50%);
    color: rgba(0,0,0,0.5);
    font-size: 15px;
    font-weight: bold;
    background-color: whitesmoke;
    padding: 2px;
  }
  &-image{
    width: 150px;
    height: 130px;
  }
  &-bottom{
    width: 100%;
    text-align: center;
    position: absolute;
    font-size: 10px;
    color: rgba(0,0,0,0.3);
  }
  &:hover &-back{
    background-color: rgba(90, 90, 90, 0.9);
    visibility: visible;
  }
}
</style>
