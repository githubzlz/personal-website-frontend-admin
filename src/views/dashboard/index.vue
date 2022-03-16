<template>
  <div class="dashboard-container">
    <div class="dashboard-top">
      <div class="inline-block dashboard-top-left">
        <dash-cards />
      </div>
      <div class="inline-block dashboard-top-right">
        <dash-calendar />
      </div>
    </div>
    <el-row style="margin-top: 20px">
      <dash-charts />
    </el-row>
  </div>
</template>

<script>
import DashCards from '@/views/dashboard/cards'
import DashCharts from '@/views/dashboard/charts'
import DashCalendar from '@/views/dashboard/calendar'
export default {
  name: 'Dashboard',
  components: { DashCalendar, DashCards, DashCharts },
  data() {
    return {
      topTitle: '博文统计',
      cartTitle: '统计图标'
    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    position:relative;
  }
}

.dashboard-top {
  position:relative;
  &-left{
    width: calc(100% - 380px - 20px);
    vertical-align: top;
    margin-right: 20px;
  }
  &-right{
    width: 380px;
  }
}
</style>
