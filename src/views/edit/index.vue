<template>
  <div>
    <div>
      [TOC]
    </div>
    <div id="test-editormd-view">
      <textarea style="display:none;" name="test-editormd-markdown-doc"/>
    </div>
    <el-button @click="update">点击</el-button>
  </div>

</template>

<script>
export default {
  data() {
    return {
      blogEditor: {}
    }
  },
  created() {
    this.createdEditor()
  },
  methods: {
    createdEditor() {
      this.$nextTick(() => {
        const blogEditor = window.editormd('test-editormd-view', {
          placeholder: '欢迎使用editor.md 编辑器',
          width: '100%',
          height: '500',
          syncScrolling: 'single',
          codeFold: true,
          emoji: true,
          path: 'editor.md-master/lib/',
          // pluginPath:'/plugins',
          saveHTMLToTextarea: true,
          tocm: true,
          tex: true,
          flowChart: true,
          imageUpload: true,
          imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
          imageUploadURL: '',
          // crossDomainUpload : true
          previewTheme: 'light',

          /** 设置主题颜色*/
          editorTheme: 'light',
          theme: 'light',
          onload: function() {
            console.log(this)
          }
        })
        // 将刚刚定义的对象 存到vue中，用的时候再取出来
        this.blogEditor = blogEditor
      })
    },
    update() {
      // console.log(this.blogEditor.height(800))
      this.blogEditor.resize()
    }
  }
}
</script>

<style scoped>

</style>
