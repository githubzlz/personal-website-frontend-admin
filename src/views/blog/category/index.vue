<template>
  <div style="padding: 20px">
    <el-card>
      <div slot="header" class="clearfix">
        <card-title title-name="文章分类" color="#6FA122" />
      </div>
      <!--      <blog-category-condition :params.sync="params" />-->
      <blog-category-table :params.sync="params" />
    </el-card>
  </div>
</template>

<script>
import CardTitle from '@/components/Common/title'
// import BlogCategoryCondition from '@/views/blog/category/condition'
import BlogCategoryTable from '@/views/blog/category/table'
export default {
  name: 'BlogCategory',
  components: { BlogCategoryTable, CardTitle },
  data() {
    return {
      params: {}
    }
  }
}
</script>

<style scoped>

</style>
