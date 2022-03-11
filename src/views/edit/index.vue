<template>
  <div>
    <div id="test-editormd-view">
      <textarea style="display:none;" name="test-editormd-markdown-doc" />
    </div>
    <el-button @click="update">点击</el-button>
  </div>

</template>

<script>
import { config } from './editor.config'
import $ from '../../../public/editor.md-master/jquery.min'

export default {
  data() {
    return {
      blogEditor: {}
    }
  },
  created() {

  },
  mounted() {
    this.createdEditor()
    $(document).dblclick(function(e) {
      const target = $(e.target)
      if (target) {
        const src = target.attr('src')
        if (src && src.indexOf('drawio') !== -1) {
          // const iframe = document.createElement('iframe')
          // document.body.appendChild(iframe)
          // iframe.style.position = 'fixed'
          // iframe.style.left = '50%'
          // iframe.style.top = '50%'
          // iframe.style.transform = 'translate(-50%, -50%)'
          // iframe.style.height = '100%'
          // iframe.style.width = '100%'
          // iframe.style.zIndex = '999'
          window.location.href = 'http://localhost:8080/drawio_war_exploded/#Uhttps%3A%2F%2Fdrawio-1309555906.cos.ap-beijing.myqcloud.com%2Fdrawtest.drawio'
        }
      }
      console.log()
    })
  },
  methods: {
    createdEditor() {
      this.blogEditor = window.editormd('test-editormd-view', config)
    },
    update() {
      // console.log(this.blogEditor.height(800))
      this.blogEditor.resize('100%', 900)
    }
  }
}
</script>

<style scoped>

</style>
