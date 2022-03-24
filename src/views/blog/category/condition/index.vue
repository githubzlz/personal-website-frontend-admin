<template>
  <el-form>
    <el-row :gutter="20">
      <el-col :span="10">
        <el-form-item label="分类名称" label-width="80px">
          <el-input v-model="pParams.name" size="small" />
        </el-form-item>
      </el-col>
      <el-col :span="10">
        <el-form-item label="修改时间:" label-width="80px" prop="tags">
          <el-date-picker
            v-model="pParams.date"
            style="width: 100%"
            size="small"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
        </el-form-item>
      </el-col>
      <el-col :span="4">
        <div style="text-align: right">
          <el-button size="small" type="primary" plain round @click="queryCateList">搜索</el-button>
          <el-button size="small" type="warning" plain round @click="removeForm">清空</el-button>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: 'BlogCategoryCondition',
  props: {
    params: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pParams: {
        name: '',
        date: []
      }
    }
  },
  methods: {
    queryCateList() {
      const param = {
        name: this.pParams.name,
        date: this.pParams.date
      }
      this.$emit('update:params', param)
    },
    removeForm() {
      this.pParams = {
        name: '',
        date: []
      }
      this.$emit('update:params', this.pParams)
    }
  }
}
</script>

<style scoped>

</style>
