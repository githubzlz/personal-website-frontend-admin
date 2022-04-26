<template>
  <el-dialog title="保存文章" :visible.sync="saveBlogDialogVisibleChild" width="600px">
    <el-form ref="blogEditForm" :model="editedBlog" label-width="80px" size="small" :disabled="!edit">
      <el-form-item
        label="文章名称"
        prop="title"
        :rules="[
          { required: true,message: '标题不能为空',trigger: ['blur','change'] }
        ]"
      >
        <el-input
          v-model="editedBlog.title"
          maxlength="20"
          show-word-limit
          clearable
        />
      </el-form-item>
      <el-form-item
        label="文章来源"
        prop="provenance"
        :rules="[
          { required: true,message: '来源不能为空',trigger: ['blur','change'] }
        ]"
      >
        <el-radio-group v-model="editedBlog.provenance" size="mini">
          <el-radio-button v-for="item in provenance" :key="item.value" :label="item.value">
            {{ item.name }}
          </el-radio-button>
        </el-radio-group>
      </el-form-item>
      <edit-form-category :categories.sync="categories" />
      <edit-form-tag :tags.sync="tags" :edit="edit" />
      <el-form-item
        label="文章摘要"
        prop="summary"
        :rules="[
          { required: true,message: '摘要不能为空',trigger: ['blur','change'] }
        ]"
      >
        <el-input v-model="editedBlog.summary" type="textarea" maxlength="200" show-word-limit />
      </el-form-item>
      <el-form-item label="是否发布">
        <el-switch v-model="isPublishSwitch" />
      </el-form-item>
    </el-form>
    <div v-if="edit" slot="footer" class="dialog-footer">
      <el-button style="float: left" size="small" type="danger" @click="removeBlogInfo">清 空</el-button>

      <el-button size="small" @click="saveBlogDialogVisibleChild = false">关闭</el-button>
      <el-button size="small" type="primary" @click="editBlog">确 定</el-button>
    </div>
    <div v-else slot="footer" class="dialog-footer">
      <el-button size="small" @click="cancelEdit">取 消</el-button>
      <el-button size="small" type="primary" @click="formEdit = true">编辑</el-button>
    </div>
  </el-dialog>
</template>

<script>
import EditFormCategory from '@/views/edit/form/category/category'
import EditFormTag from '@/views/edit/form/tag/tag'
import { editBlog } from '@/api/blog/blog'

export default {
  name: 'EditForm',
  components: { EditFormTag, EditFormCategory },
  props: {
    blog: {
      type: Object,
      default: null
    },
    edit: {
      type: Boolean,
      default: false
    },
    saveBlogDialogVisible: {
      type: Boolean,
      default: true
    },
    loadBlog: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      isPublishSwitch: true,
      blogId: this.$route.query.id,
      editedBlog: this.blog,
      saveBlogDialogVisibleChild: this.saveBlogDialogVisible,
      categories: this.blog.categories,
      tags: this.blog.tags,
      formEdit: this.edit,
      provenance: [
        { name: '原创', value: 0 },
        { name: '转载', value: 1 },
        { name: '翻译', value: 2 }
      ]
    }
  },
  watch: {
    isPublishSwitch: function(newValue, oldValue) {
      this.editedBlog.isPublish = newValue ? 0 : 1
    },
    'blog': function(newValue, oldValue) {
      this.editedBlog = newValue
      this.categories = newValue.categories
      this.tags = newValue.tags
      this.isPublishSwitch = newValue.isPublish === 0
    },
    'edit': function(newValue, oldValue) {
      this.formEdit = newValue
    },
    editedBlog: function(newValue, oldValue) {
      newValue.isPublish = this.isPublishSwitch ? 0 : 1
      this.$emit('update:blog', newValue)
    },
    'saveBlogDialogVisible': function(newValue, oldValue) {
      this.saveBlogDialogVisibleChild = newValue
    },
    saveBlogDialogVisibleChild: function(newValue, oldValue) {
      this.$emit('update:saveBlogDialogVisible', newValue)
    },
    formEdit: function(newValue, oldValue) {
      this.$emit('update:edit', newValue)
    },
    categories: function(newValue, oldValue) {
      this.editedBlog.categories = newValue
      this.$emit('update:blog', this.editedBlog)
    },
    tags: function(newValue, oldValue) {
      this.editedBlog.tags = newValue
      this.$emit('update:blog', this.editedBlog)
    }
  },
  methods: {
    removeBlogInfo() {
      this.editedBlog = {
        id: '',
        title: '',
        summary: '',
        tags: [],
        categories: [],
        provenance: '0',
        isPublish: 0,
        blogContent: {
          content: '',
          editorType: 0
        }
      }
      this.categories = []
      this.tags = []
    },
    cancelEdit() {
      this.$confirm('已编辑的内容都会丢失，确定取消吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.editForm = false
        this.loadBlog()
      })
    },
    editBlog() {
      this.$refs['blogEditForm'].validate((valid) => {
        if (valid) {
          this.editedBlog.id = this.blogId
          this.editedBlog.blogContent.content = this.$editor.editor.getMarkdown()
          editBlog(this.editedBlog).then(resp => {
            if (resp.code === 1) {
              this.blogId = resp.data
              this.saveBlogDialogVisibleChild = false
              this.formEdit = false
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
