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
        <el-button v-if="!edit" type="success" size="small" icon="el-icon-chat-line-square" @click="routeToNew">新文章
        </el-button>
        <edit-form
          :load-blog="queryBlog"
          :blog.sync="blog"
          :edit.sync="edit"
          :save-blog-dialog-visible.sync="saveBlogDialogVisible"
        />
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
    </div>
    <div id="editormd-view" />
  </div>

</template>

<script>
import $ from '../../../public/editor.md-master/jquery.min'
import { resize, config } from './editor.js'
import EditForm from '@/views/edit/form/index'
import { queryBlog } from '@/api/blog/blog'

export default {
  components: { EditForm },
  data() {
    return {
      loading: true,
      blogEditor: {},
      resizeFunc: '',
      saveBlogDialogVisible: false,
      blog: {
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
      },
      edit: true
    }
  },
  mounted() {
    if (this.$route.query.id) {
      this.queryBlog()
      this.edit = false
    } else {
      this.createdEditor('')
      this.edit = true
    }
    this.drawIoPictureClick()
    window.addEventListener('resize', resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', resize)
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
    queryBlog() {
      queryBlog().then(resp => {
        this.blog = resp.data
        this.loading = false
        this.createdEditor(this.blog.content.content)
      })
    },
    routeToNew() {
      this.$router.push('/edit')
      this.blog = {
        id: '',
        title: '',
        summary: '',
        tags: [],
        categories: [],
        provenance: '0',
        isPublish: true
      }
      this.edit = true
    },
    createdEditor(md) {
      config.markdown = md
      this.blogEditor = window.editormd('editormd-view', config)
      this.$editor.editor = this.blogEditor
    },
    drawIoPictureClick() {
      $(document).dblclick(function(e) {
        const target = $(e.target)
        if (target) {
          const src = target.attr('src')
          if (src && src.indexOf('drawio') !== -1) {
            const iframe = document.createElement('iframe')
            document.getElementById('blog-edit').appendChild(iframe)
            iframe.style.position = 'fixed'
            iframe.style.left = '50%'
            iframe.style.top = '50%'
            iframe.style.transform = 'translate(-50%, -50%)'
            iframe.style.height = '100%'
            iframe.style.width = '100%'
            iframe.style.zIndex = '999'
            iframe.src = 'http://localhost:8080/drawio_war_exploded/#Uhttps%3A%2F%2Fdrawio-1309555906.cos.ap-beijing.myqcloud.com%2Fdrawtest.drawio'
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#blog-edit {
  height: 100%;
  overflow: hidden;
}

.blog-edit {
  &-title-t {
    overflow: hidden;
    height: 40px;
  }

  &-title-op {
    float: right;
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
  }
}
</style>
