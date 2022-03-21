<template>
  <div id="test-editormd-view" />
</template>

<script>
import $ from '../../../../public/editor.md-master/jquery.min'
import { resize, config } from './editor.js'
export default {
  name: 'EditorMd',
  mounted() {
    this.createdEditor()
    this.drawIoPictureClick()
    window.addEventListener('resize', resize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', resize)
  },
  methods: {
    createdEditor() {
      this.blogEditor = window.editormd('test-editormd-view', config)
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

<style scoped>

</style>
