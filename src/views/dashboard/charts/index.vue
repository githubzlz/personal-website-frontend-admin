<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <card-title :title-name="title.title" :color="title.color" />
    </div>
  </el-card>
</template>

<script>
import CardTitle from '@/components/Common/title'
export default {
  name: 'DashCharts',
  components: { CardTitle },
  data() {
    return {
      title: {
        title: '图表统计',
        color: '#c27633'
      }
    }
  }
}
</script>

<style scoped>

</style>
