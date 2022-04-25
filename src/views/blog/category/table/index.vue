<template>
  <div>
    <el-table
      :loading="loading"
      :data="categoryList"
      row-key="id"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="data.levelCode" label="编码" />
      <el-table-column prop="data.level" label="层级" />
      <el-table-column prop="data.name" label="分类名" />
      <el-table-column label="创建日期">
        <template slot-scope="props">
          {{ props.row.data.createdTime }}
        </template>
      </el-table-column>
      <el-table-column>
        <template slot="header">
          <span>操作</span>
          <el-button size="small" type="success" plain style="float: right" @click="createCate">新建分类</el-button>
        </template>
        <template slot-scope="props">
          <el-button size="small" type="text" @click="updateCate(props.row)">修改</el-button>
          <el-divider direction="vertical" />
          <el-button size="small" type="text" @click="createChildCate(props.row.id)">创建子类</el-button>
          <el-divider direction="vertical" />
          <el-popover
            v-model="props.row.deletePopVisible"
            placement="top"
          >
            <p>确定删除此分类吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="props.row.deletePopVisible = false">取消</el-button>
              <el-button type="text" size="mini" style="color: #db3f3f" @click="deleteCate(props.row)">删除</el-button>
            </div>
            <el-button slot="reference" type="text" size="small">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="createCateFormVisible">
      <template slot="title">
        {{ title }}
      </template>
      <el-form ref="cateUpdateForm" :model="cateCreateForm">
        <el-form-item
          label="分类名"
          prop="name"
          :rules="[
            { required: true,message: '分类名称不能为空',trigger: ['blur','change'] }
          ]"
        >
          <el-input v-model="cateCreateForm.name" maxlength="10" show-word-limit autocomplete="off" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="cancelEdit">取 消</el-button>
        <el-button type="primary" size="small" @click="doUpdateCate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { queryCategoryTree, updateCategory, deleteCategory } from '@/api/blog/category'
export default {
  name: 'BlogCategoryTable',
  filters: {
    formatTimer: function(value) {
      const date = new Date(Number(value))
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return `${y}-${MM}-${d} ${h}:${m}:${s}`
    }
  },
  props: {
    params: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      createCateFormVisible: false,
      cateCreateForm: {
        id: '',
        name: '',
        parentId: ''
      },
      deletePopVisible: false,
      categoryList: [],
      loading: true,
      title: '创建分类'
    }
  },
  watch: {
    'params': function(n) {
      this.queryCategoryList()
    }
  },
  created() {
    this.queryCategoryList()
  },
  methods: {
    queryCategoryList() {
      this.loading = true
      queryCategoryTree(this.params).then(resp => {
        this.loading = false
        this.categoryList = resp.data
      })
    },
    createCate() {
      this.cateCreateForm = {
        id: '',
        name: '',
        parentId: ''
      }
      this.title = '创建分类'
      this.createCateFormVisible = true
    },
    createChildCate(pid) {
      this.cateCreateForm = {
        id: '',
        name: '',
        parentId: ''
      }
      this.title = '创建子类'
      this.createCateFormVisible = true
      this.cateCreateForm.parentId = pid
    },
    updateCate(cate) {
      this.cateCreateForm.id = cate.id
      this.cateCreateForm.name = cate.name
      this.title = '修改分类信息'
      this.createCateFormVisible = true
    },
    deleteCate(row) {
      row.deletePopVisible = false
      deleteCategory(row.id).then(resp => {
        this.queryCategoryList()
      })
    },
    doUpdateCate() {
      this.$refs['cateUpdateForm'].validate((valid) => {
        if (valid) {
          updateCategory(this.cateCreateForm).then(resp => {
            this.createCateFormVisible = false
            this.queryCategoryList()
          })
        }
      })
    },
    cancelEdit() {
      this.createCateFormVisible = false
      this.cateCreateForm = {
        mode: 0,
        id: '',
        name: '',
        parentId: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
