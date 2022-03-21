<template>
  <el-form-item
    label="文章分类"
    prop="categories"
    :rules="[
      { required: true,message: '文章分类至少选择一个',trigger: ['blur','change'] }
    ]"
  >
    <el-select
      v-model="categoryChild"
      style="width: 100%"
      multiple
      :multiple-limit="2"
      filterable
      placeholder="请选择文章分类"
    >
      <el-option v-for="(item,i) in categoryList" :key="i" :label="item.name" :value="item.id" />
    </el-select>
  </el-form-item>
</template>

<script>
import { queryCategoryList } from '@/api/blog/category'
export default {
  name: 'EditFormCategory',
  props: {
    categories: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {
      categoryList: [],
      categoryChild: this.categories
    }
  },
  watch: {
    'categories': function(newValue, oldValue) {
      this.categoryChild = newValue
    },
    categoryChild: function(newValue, oldValue) {
      this.$emit('update:categories', newValue)
    }
  },
  created() {
    this.queryCategoryList()
  },
  methods: {
    queryCategoryList() {
      queryCategoryList().then(resp => {
        this.categoryList = resp.data
      })
    }
  }
}
</script>

<style scoped>

</style>
