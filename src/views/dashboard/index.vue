<template>
  <div class="dashboard-container">
    <div class="dashboard-top">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <card-title :title-name="topTitle" />
        </div>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-row :gutter="20">
              <el-col :span="6">
                <dash-card />
              </el-col>
              <el-col :span="6">
                <dash-card />
              </el-col>
              <el-col :span="6">
                <dash-card />
              </el-col>
              <el-col :span="6">
                <dash-card />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-card shadow="hover">
              <el-calendar v-model="value" />
            </el-card>
          </el-col>
        </el-row>
      </el-card>
    </div>
    <div class="dashboard-bottom">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <card-title :title-name="cartTitle" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import CardTitle from '@/components/Common/title'
import DashCard from '@/views/dashboard/card'

export default {
  name: 'Dashboard',
  components: { DashCard, CardTitle },
  data() {
    return {
      topTitle: '博文统计',
      cartTitle: '统计图标'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
    min-width: 1200px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.dashboard-bottom{
  margin-top: 20px;
}
</style>
