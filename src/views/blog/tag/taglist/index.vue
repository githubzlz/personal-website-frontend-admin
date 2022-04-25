<template>
  <div style="padding: 30px;">
    <el-tag
      v-for="(tag,i) in tags"
      :key="i"
      type="info"
      effect="plain"
      closable
      :style="{ color: tag.background, marginRight: '20px' }"
      @close="deleteTag(tag)"
    >
      {{ tag.name }}
    </el-tag>
    <el-tag
      v-if="!tagNameAddVisible"
      type="info"
      effect="plain"
      style="width: 100px; cursor: pointer"
      @click="showAddInput"
    >
      +创建新标签
    </el-tag>
    <el-input
      v-if="tagNameAddVisible"
      ref="addTagInput"
      v-model="tagName"
      style="width: 100px"
      size="small"
      @blur="addTag"
      @keyup.enter.native="addTag"
    />
  </div>
</template>

<script>
const colors = require('../../../../assets/enums/colors')
import { createTag, deleteTag } from '@/api/blog/tag'

export default {
  name: 'BlogTagList',
  props: {
    tagTree: {
      type: Array,
      default: () => {
        return []
      }
    },
    tagCateIndex: {
      type: Number,
      default: 0
    },
    queryTagTree: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      tags: [],
      tagName: '',
      tagNameAddVisible: false
    }
  },
  watch: {
    'tagTree': function(n) {
      this.setTags()
    },
    'tagCateIndex': function(n) {
      this.setTags()
    }
  },
  created() {
    this.setTags()
  },
  methods: {
    setTags() {
      const cate = this.tagTree[this.tagCateIndex]
      this.tags = []
      if (cate && cate.tags) {
        this.tags = cate.tags
        this.tags.forEach(tag => {
          tag.background = this.randomColor()
        })
      }
    },
    deleteTag(tag) {
      deleteTag({ id: tag.id }).then(resp => {
        this.queryTagTree()
      })
    },
    randomColor() {
      const r = parseInt(Math.random() * colors.length)
      return colors[r]
    },
    showAddInput() {
      this.tagNameAddVisible = true
      this.$nextTick(() => {
        setTimeout(() => {
          this.$refs.addTagInput.focus()
        }, 10)
      })
    },
    addTag() {
      this.tagNameAddVisible = false
      if (this.tagName && this.tagName !== '') {
        const cate = this.tagTree[this.tagCateIndex]
        createTag({ parentId: cate.id, name: this.tagName }).then(resp => {
          this.tagName = ''
          this.queryTagTree()
        })
      }
    }
  }

}
</script>

<style scoped>

</style>
