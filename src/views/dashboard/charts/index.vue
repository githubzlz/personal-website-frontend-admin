<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <card-title :title-name="title.title" :color="title.color">
        <div class="inline-block box-card-date-picker">
          <el-date-picker
            v-model="dateSpace"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          />
        </div>
      </card-title>
    </div>
    <div>
      <div id="chart1" class="chart" />
      <div id="chart2" class="chart" />
      <div id="chart3" class="chart" />
    </div>
  </el-card>
</template>

<script>
import { blogStatisticalTable } from '@/api/blog'
import { websiteStatisticalTable } from '@/api/website'
import CardTitle from '@/components/Common/title'
export default {
  name: 'DashCharts',
  components: { CardTitle },
  data() {
    return {
      title: {
        title: '图表统计',
        color: '#c27633'
      },
      dateSpace: '',
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      resizeFunc: '',
      charts: []
    }
  },
  mounted() {
    blogStatisticalTable({ state: 0 }).then(resp => {
      this.charts.push(this.initEcharts(resp.data, 2))
    })
    blogStatisticalTable({ state: 1 }).then(resp => {
      this.charts.push(this.initEcharts(resp.data, 3))
    })
    websiteStatisticalTable({ state: 0 }).then(resp => {
      this.charts.push(this.initEcharts(resp.data, 1))
    })
  },
  beforeMount() {
    this.resizeFunc = this.resizeHandler
    window.addEventListener('resize', this.resizeFunc)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFunc)
  },
  methods: {
    resizeHandler() {
      this.charts.forEach(chart => {
        if (chart) {
          chart.resize()
        }
      })
    },
    initEcharts(options, num) {
      const myChart = this.$ets.init(document.getElementById(`chart${num}`))
      myChart.setOption(options)
      myChart.resize()
      return myChart
    }
  }
}
</script>

<style lang="scss" scoped>
.chart{
  width: 50%;
  height: 400px;
  display: inline-block;
}
.box-card{
  &-date-picker{
    float: right;
  }
}
</style>
