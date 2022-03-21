<template>
  <div id="blog-edit-title">
    <div class="blog-edit-title-op">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-edit"
        @click="showSaveBlogDialog"
      >
        <span v-if="edit">保存</span>
        <span v-else>编辑</span>
      </el-button>
      <el-button type="primary" size="small" icon="el-icon-share">导出</el-button>
      <el-button type="danger" size="small" icon="el-icon-delete" @click="deleteClick">
        <span v-if="edit">清空</span>
        <span v-else>删除</span>
      </el-button>
    </div>
    <el-dialog title="保存文章" :visible.sync="saveBlogDialogVisible" width="600px">
      <el-form ref="blogEditForm" :model="blog" label-width="80px" size="small" :disabled="!edit">

        <el-form-item
          label="文章来源"
          prop="provenance"
          :rules="[
            { required: true,message: '来源不能为空',trigger: ['blur','change'] }
          ]"
        >
          <el-radio-group v-model="blog.provenance" size="mini">
            <el-radio-button v-for="item in provenance" :key="item.value" :label="item.value">
              {{ item.name }}
            </el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="是否发布">
          <el-switch v-model="blog.isPublish" />
        </el-form-item>
        <el-form-item
          label="文章摘要"
          prop="summary"
          :rules="[
            { required: true,message: '摘要不能为空',trigger: ['blur','change'] }
          ]"
        >
          <el-input v-model="blog.summary" type="textarea" maxlength="200" show-word-limit />
        </el-form-item>
      </el-form>
      <div v-if="edit" slot="footer" class="dialog-footer">
        <el-button style="float: left" size="small" type="danger" @click="removeBlogInfo">清 空</el-button>
        <el-button v-if="modify" style="float: left" size="small" type="danger" @click="cancelEdit">取消编辑</el-button>
        <el-button size="small" @click="saveBlogDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" :loading="loading" @click="editBlog">确 定</el-button>
      </div>
      <div v-else slot="footer" class="dialog-footer">
        <el-button size="small" @click="saveBlogDialogVisible = false">取 消</el-button>
        <el-button size="small" type="primary" :loading="loading" @click="edit = true">编辑</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>

import { editBlog, queryBlog } from '@/api/blog/blog'
export default {
  name: 'EditTitle',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      edit: true,
      modify: false,
      title: '',
      saveBlogDialogVisible: false,
      formLabelWidth: '120px',
      loading: false,
      tags: [],
      currentTag: {
        inputVisible: false,
        inputValue: ''
      },
      provenance: [
        { name: '原创', value: 0 },
        { name: '转载', value: 1 },
        { name: '翻译', value: 2 }
      ],
      blog: {
        id: '',
        title: '213',
        summary: '',
        tags: [],
        category: [],
        provenance: '',
        isPublish: true
      },
      categories: []
    }
  },
  created() {
    this.queryCategoryList()
    if (this.id && this.id.length > 0) {
      this.edit = false
      this.modify = true
      this.blog.id = this.id
    }
  },
  methods: {

    queryTagTree() {
      queryTagTree().then(resp => {
        this.tags = resp.data
      })
    },
    editBlog() {
      this.$refs['blogEditForm'].validate((valid) => {
        if (valid) {
          this.loading = true
          editBlog(this.blog).then(resp => {
            if (resp.code === 200) {
              this.saveBlogDialogVisible = false
              this.edit = false
              this.modify = true
            }
            this.loading = false
          })
        }
      })
    },
    removeBlogInfo() {
      this.$refs['blogEditForm'].resetFields()
    },

    cancelEdit() {
      this.$confirm('已编辑的内容都会丢失，确定取消吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.saveBlogDialogVisible = false
        this.reloadBlog()
      })
    },
    reloadBlog(id) {
      this.$parent.loadingState(true)
      queryBlog(id).then(resp => {
        const blog = resp.data
        if (blog) {
          this.edit = false
          this.modify = true
          this.blog = {
            id: blog.id,
            title: blog.title,
            summary: blog.summary,
            category: blog.categories.map(cate => { return cate.id }),
            provenance: blog.provenance,
            isPublish: blog.isPublish === 0
          }
        }
      })
    },

    handleTagInputConfirm() {
      const inputValue = this.currentTag.inputValue
      if (inputValue) {
        this.blog.tags.push(inputValue)
      }
      this.currentTag.inputVisible = false
      this.currentTag.inputValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-edit-title-t{
  overflow:hidden;
  height: 40px;
}
.blog-edit-title-op{
  float: right;
  height: 40px;
  line-height: 40px;
  margin:0 10px;
}
</style>
