import vue from '@/main'

export function resize() {
  const title = document.getElementById('blog-edit-title')
  const navbar = document.getElementsByClassName('navbar')[0]
  if (title && navbar) {
    const height = title.clientHeight
    const navbarHeight = navbar.clientHeight
    const editor = vue.$editor.editor
    if (editor && height && navbarHeight) {
      editor.resize('100%', window.innerHeight - height - navbarHeight - 20)
    }
  }
}

export const config = {
  width: '100%',
  height: 0,
  path: 'editor.md-master/lib/',
  theme: 'light',
  previewTheme: 'light',
  editorTheme: 'light',
  markdown: '![](https://drawio-1309555906.cos.ap-beijing.myqcloud.com/drawtest.drawio.png)',
  codeFold: true,
  // syncScrolling : false,
  saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
  searchReplace: true,
  // watch : false,                // 关闭实时预览
  htmlDecode: 'style,script,iframe|on*', // 开启 HTML 标签解析，为了安全性，默认不开启
  // toolbar  : false,             //关闭工具栏
  // previewCodeHighlight : false, // 关闭预览 HTML 的代码块高亮，默认开启
  emoji: true,
  taskList: true,
  // Using [TOCM]
  tocm: true,
  tex: true,
  // 开启科学公式TeX语言支持，默认关闭
  flowChart: true,
  // 开启流程图支持，默认关闭
  sequenceDiagram: true,
  // 开启时序/序列图支持，默认关闭,
  // dialogLockScreen : false,
  // 设置弹出层对话框不锁屏，全局通用，默认为true
  // dialogShowMask : false,
  // 设置弹出层对话框显示透明遮罩层，全局通用，默认为true
  // dialogDraggable : false,
  // 设置弹出层对话框不可拖动，全局通用，默认为true
  // dialogMaskOpacity : 0.4,
  // 设置透明遮罩层的透明度，全局通用，默认值为0.1
  // dialogMaskBgColor : "#000",
  // 设置透明遮罩层的背景颜色，全局通用，默认为#fff
  imageUpload: true,
  imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
  // imageUploadURL: './php/upload.php',
  onload: function() {
    resize()
  }
}
