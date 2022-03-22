<template>
  <div class="blog-list">
    <el-card>
      <blog-list-conditions :params.sync="params" />
    </el-card>
    <div class="blog-list-table">
      <el-card>
        <blog-list-table :current-page.sync="currentPage" :page-size.sync="pageSize" :total-size.sync="totalSize" :params.sync="params" />
        <blog-list-pagination :current-page.sync="currentPage" :page-size.sync="pageSize" :total-size.sync="totalSize" />
      </el-card>
    </div>
  </div>
</template>

<script>
import BlogListConditions from '@/views/blog/list/condition'
import BlogListTable from '@/views/blog/list/table'
import BlogListPagination from '@/views/blog/list/pagination'

export default {
  name: 'BlogList',
  components: { BlogListPagination, BlogListTable, BlogListConditions },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      totalSize: 100,
      params: {}
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-list {
  padding: 20px;

  &-cond {

  }
  &-table{
    margin-top: 10px;
  }
}
</style>
