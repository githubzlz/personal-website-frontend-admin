<template>
  <el-form style="padding: 20px">
    <el-form-item label="分类名称" label-width="80px">
      <el-input v-model="name" size="small" />
    </el-form-item>
    <div style="margin-left: 20px">
      <el-button size="small" type="warning" plain round @click="removeForm">清空</el-button>
      <el-button size="small" type="primary" plain round @click="queryTagTree">搜索</el-button>
    </div>
  </el-form>
</template>

<script>
export default {
  name: 'BlogTagCondition',
  props: {
    param: {
      type: String,
      default: ''
    },
    tagCateIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    queryTagTree() {
      const param = {
        name: this.name
      }
      this.$emit('update:param', param)
      this.$emit('update:tagCateIndex', 0)
    },
    removeForm() {
      this.name = ''
      const param = {
        name: ''
      }
      this.$emit('update:param', param)
      this.$emit('update:tagCateIndex', 0)
    }
  }
}
</script>

<style scoped>

</style>
