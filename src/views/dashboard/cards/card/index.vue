<template>
  <div class="inline-block dash-card">
    <el-card
      shadow="hover"
      :body-style="'background-image: linear-gradient(to right, '
        +colors[0]
        +', '
        +colors[1]
        +');padding: 5px;color:wheat;'"
    >
      <div class="dash-card-top">
        <div class="inline-block dash-card-top-icon">
          <em :class="icon" style="font-size: 30px;font-weight: bolder; color: #a08e32" />
        </div>
        <div class="inline-block dash-card-top-total">
          <div style="font-size: 36px;font-weight: bolder;">{{ total }}</div>
          <div style="font-size: 12px">{{ title }}</div>
        </div>
        <div class="inline-block dash-card-top-tendency">
          <svg-icon v-if="tendency === 1" icon-class="trendingdown" style="font-size: 25px" />
          <svg-icon v-else icon-class="trendingup" style="font-size: 25px" />
        </div>
      </div>
      <div class="dash-card-bottom">
        <div class="dash-card-bottom-change">
          <span style="font-size: 12px">较昨日</span>
          <div class="inline-block dash-card-bottom-change-num">{{ change }}</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'DashCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'el-icon-data-analysis'
    },
    tendency: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 0
    },
    change: {
      type: Number,
      default: 0
    },
    colors: {
      type: Array,
      default: () => { return ['#e5ad7c', '#c27633'] }
    }
  }
}
</script>

<style scoped>
.dash-card {
  width: 100%;
}

.dash-card-top-icon {
  vertical-align: top;
  height: 90px;
  width: 30%;
  line-height: 100px;
  text-align: center;
}

.dash-card-top-total {
  height: 90px;
  width: 45%;
  padding-top: 20px;
  text-align: left;
}

.dash-card-top-tendency {
  vertical-align: top;
  height: 90px;
  width: 25%;
  text-align: right;
  padding: 10px;
}

.dash-card-bottom-change {
  height: 30px;
  text-align: right;
}

.dash-card-bottom-change-num {
  margin: 0 10px;
  font-size: 20px;
  vertical-align: center;
  font-weight: bolder;
  color: rgba(255, 255, 255, 0.6);
}
</style>
