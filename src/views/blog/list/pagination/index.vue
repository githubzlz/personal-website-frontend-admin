<template>
  <div class="blog-list-pagination">
    <el-pagination
      :current-page="pCurrentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pPageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pTotalSize"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'BlogListPagination',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    totalSize: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      pCurrentPage: this.currentPage,
      pPageSize: this.pageSize,
      pTotalSize: this.totalSize
    }
  },
  watch: {
    'currentPage': function(n, o) {
      this.pCurrentPage = n
    },
    'pageSize': function(n, o) {
      this.pPageSize = n
    },
    'totalSize': function(n, o) {
      this.pTotalSize = n
    }
  },
  methods: {
    handleSizeChange(size) {
      this.pCurrentPage = 1
      this.$emit('update:currentPage', 1)
      this.$emit('update:pageSize', size)
    },
    handleCurrentChange(page) {
      this.$emit('update:currentPage', page)
    }
  }
}
</script>

<style scoped>
.blog-list-pagination{
  margin-top: 15px;
  text-align: right;
}
</style>
