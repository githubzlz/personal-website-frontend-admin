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
      <edit-form-category :categories.sync="categories" />
      <edit-form-tag />
    </el-form>
    <div v-if="edit" slot="footer" class="dialog-footer">
      <el-button style="float: left" size="small" type="danger" @click="removeBlogInfo">清 空</el-button>
      <el-button v-if="modify" style="float: left" size="small" type="danger" @click="cancelEdit">取消编辑</el-button>
      <el-button size="small" @click="saveBlogDialogVisibleChild = false">取 消</el-button>
      <el-button size="small" type="primary" @click="editBlog">确 定</el-button>
    </div>
    <div v-else slot="footer" class="dialog-footer">
      <el-button size="small" @click="saveBlogDialogVisibleChild = false">取 消</el-button>
      <el-button size="small" type="primary" :loading="loading" @click="edit = true">编辑</el-button>
    </div>
  </el-dialog>
</template>

<script>
import EditFormCategory from '@/views/edit/form/category/category'
import EditFormTag from '@/views/edit/form/tag/tag'
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
    modify: {
      type: Boolean,
      default: false
    },
    saveBlogDialogVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      editedBlog: this.blog,
      saveBlogDialogVisibleChild: this.saveBlogDialogVisible,
      categories: this.blog.categories
    }
  },
  watch: {
    'blog': function(newValue, oldValue) {
      this.editedBlog = newValue
    },
    editedBlog: function(newValue, oldValue) {
      this.$emit('update:blog', newValue)
    },
    'saveBlogDialogVisible': function(newValue, oldValue) {
      this.saveBlogDialogVisibleChild = newValue
    },
    saveBlogDialogVisibleChild: function(newValue, oldValue) {
      this.$emit('update:saveBlogDialogVisible', newValue)
    },
    categories: function(newValue, oldValue) {
      console.log(newValue)
      this.editedBlog.categories = newValue
      this.$emit('update:blog', this.editedBlog)
    }
  },
  methods: {
    removeBlogInfo() {

    },
    cancelEdit() {

    },
    editBlog() {

    }
  }
}
</script>

<style scoped>

</style>
