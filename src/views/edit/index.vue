<template>
  <div>
    <div id="blog-edit">
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
        <edit-form :blog.sync="blog" :modify="modify" :edit="edit" :save-blog-dialog-visible.sync="saveBlogDialogVisible" />
      </div>
      <div class="blog-edit-title-t">
        <el-input
          v-model="blog.title"
          placeholder="请输入文章名"
          maxlength="20"
          show-word-limit
          clearable
          :disabled="!edit"
          style="font-weight: bolder;font-size: 18px;"
        />
      </div>
      {{ blog || JSON }}
      {{ saveBlogDialogVisible }}
    </div>
    <editor-md />
  </div>

</template>

<script>

import EditorMd from '@/views/edit/editor'
import EditForm from '@/views/edit/form/form'

export default {
  components: { EditForm, EditorMd },
  data() {
    return {
      blogEditor: {},
      resizeFunc: '',
      loading: false,
      saveBlogDialogVisible: true,
      blogId: '',
      blog: {
        id: '',
        title: '',
        summary: '',
        tags: ['1', '2'],
        categories: ['1', '2'],
        provenance: '',
        isPublish: true
      },
      modify: false,
      edit: true
    }
  },
  created() {
    this.blogId = this.$route.query.id
  },
  methods: {
    showSaveBlogDialog() {
      this.saveBlogDialogVisible = true
    },
    deleteClick() {
      const message = this.edit ? '确认清空所有已编辑数据吗?' : '确认删除此博文吗?'
      const rsSuccessMessage = this.edit ? '数据清除成功' : '博文删除成功，您仍可以从回收站恢复此文章！'
      this.$confirm(message, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: rsSuccessMessage
        })
      })
    },
    loadingState(state) {
      this.loading = state
    }
  }
}
</script>

<style lang="scss" scoped>
#blog-edit{
  height: 100%;
  overflow: hidden;

}
.blog-edit{
  &-title-t{
    overflow:hidden;
    height: 40px;
  }
  &-title-op{
    float: right;
    height: 40px;
    line-height: 40px;
    margin:0 10px;
  }
}
</style>
