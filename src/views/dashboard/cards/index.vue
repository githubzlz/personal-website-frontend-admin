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
import { blogInfo } from '@/api/blog'
export default {
  name: 'DashCards',
  components: { DashBackLog, DashCard, CardTitle },
  data() {
    return {
      title: {
        title: '博文统计',
        color: '#319e3c'
      },
      infos: []
    }
  },
  created() {
    blogInfo().then(resp => {
      this.infos = resp.data
    })
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
