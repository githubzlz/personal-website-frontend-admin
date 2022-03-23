<template>
  <el-table
    :loading="loading"
    :data="blogList"
    style="width: 100%"
    :expand-row-keys="expandRowKeys"
    row-key="id"
    @expand-change="expandChange"
  >
    <blog-list-table-expand />
    <el-table-column
      label=""
      prop="provenance"
      min-width="25px"
    >
      <template slot-scope="props">
        <el-tag v-if="props.row.provenance === 0" size="mini" effect="dark" type="success">原</el-tag>
        <el-tag v-if="props.row.provenance === 1" size="mini" effect="dark" type="danger">转</el-tag>
        <el-tag v-if="props.row.provenance === 2" size="mini" effect="dark" type="warning">翻</el-tag>
      </template>
    </el-table-column>
    <el-table-column
      label="作者"
      prop="author"
      align="center"
      width="80px"
    />
    <el-table-column
      label="文章名"
      prop="title"
      max-width="100px"
    >
      <template slot-scope="props">
        <el-tooltip :content="props.row.title" placement="top">
          <span class="ellipsis">
            {{ props.row.title }}
          </span>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column
      label="摘要"
      prop="summary"
      align="left"
      min-width="200px"
    >
      <template slot-scope="props">
        <el-tooltip :content="props.row.summary" placement="top">
          <span class="ellipsis">
            {{ props.row.summary }}
          </span>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column
      label="发布状态"
      align="center"
      width="100px"
    >
      <template slot-scope="props">
        <state-point :state="props.row.isPublish" />
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      fixed="right"
      align="center"
      width="150px"
    >
      <template slot-scope="scope">
        <el-button type="text" @click="handlePublish(scope.$index, scope.row)">发布</el-button>
        <el-divider direction="vertical" />
        <el-button type="text" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-divider direction="vertical" />
        <el-popconfirm
          confirm-button-text="删除"
          cancel-button-text="取消"
          icon="el-icon-info"
          icon-color="red"
          title="确定删除此文章吗？"
        >
          <el-button slot="reference" type="text">删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>

import { provenance } from '@/assets/enums/provenance'
import { queryBlogList } from '@/api/blog/blog'
import BlogListTableExpand from '@/views/blog/list/table/expand'
import StatePoint from '@/views/blog/list/table/point'
export default {
  name: 'BlogListTable',
  components: { StatePoint, BlogListTableExpand },
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
    },
    params: {
      type: Object,
      default: null
    }

  },
  data() {
    return {
      blogList: [],
      expandRowKeys: [],
      page: {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      },
      pTotalSize: 0,
      loading: true
    }
  },
  watch: {
    'currentPage': function(n, o) {
      this.page.currentPage = n
      this.queryBlogList()
    },
    'pageSize': function(n, o) {
      this.page.pageSize = n
      this.queryBlogList()
    },
    'params': function(n, o) {
      this.queryBlogList()
    },
    pTotalSize: function(n, o) {
      this.$emit('update:totalSize', n)
    }
  },
  created() {
    this.queryBlogList()
  },
  methods: {
    queryBlogList() {
      const param = {
        page: this.page,
        param: this.params
      }
      queryBlogList(param).then(resp => {
        this.blogList = resp.data.list
        this.pTotalSize = resp.data.totalSize
      })
    },
    getProvenance(v) {
      return provenance.get(v)
    },
    expandChange(row, expandedRows) {
      let ex = false
      expandedRows.forEach(data => {
        if (row.id === data.id) {
          ex = true
          return
        }
      })
      if (ex) {
        this.expandRowKeys = []
        this.expandRowKeys.push(row.id)
      }
    }
  }
}
</script>

<style scoped>

</style>
