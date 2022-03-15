<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <card-title :title-name="title.title" :color="title.color" />
    </div>
    <el-row :gutter="20">
      <el-col v-for="(item, i) in infos" :key="i" :span="6">
        <dash-card
          :title="item.title"
          :colors="item.colors"
          :icon="item.icon"
          :tendency="item.tendency"
          :total="item.total"
          :change="item.change"
        />
      </el-col>
    </el-row>
    <dash-back-log />
  </el-card>
</template>

<script>
import CardTitle from '@/components/Common/title'
import DashCard from '@/views/dashboard/cards/card'
import DashBackLog from '@/views/dashboard/cards/backlog'
export default {
  name: 'DashCards',
  components: { DashBackLog, DashCard, CardTitle },
  data() {
    return {
      title: {
        title: '博文统计',
        color: '#319e3c'
      },
      infos: [
        {
          title: '文章数量',
          icon: 'el-icon-data-analysis',
          colors: ['#727db6', '#b87fd0'],
          tendency: 0,
          total: 2516,
          change: 253
        },
        {
          title: '阅读量',
          icon: 'el-icon-data-analysis',
          colors: ['#e5ad7c', '#c27633'],
          tendency: 1,
          total: 251326,
          change: 25332
        },
        {
          title: '获赞量',
          icon: 'el-icon-data-analysis',
          colors: ['rgba(41,51,160,0.78)', '#31a0ea'],
          tendency: 0,
          total: 4851,
          change: 230
        },
        {
          title: '获赞量',
          icon: 'el-icon-data-analysis',
          colors: ['rgb(38,159,163)', '#43c7b3'],
          tendency: 0,
          total: 4851,
          change: 230
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
