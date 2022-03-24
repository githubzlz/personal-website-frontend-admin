<template>
  <div>
    <div style="height: 50px;">
      <el-button type="text">创建标签</el-button>
    </div>
    <div v-for="(cate, i) in mTagTree" :id="`blog-tag-cate-item-${i}`" :key="i" class="blog-tag-cate-item" @click="active = i">
      {{ cate.name }}
    </div>
    <div style="text-align: center; margin-top: 20px">
      <el-input v-if="createCateVisible" v-model="cateName" />
      <el-button v-if="createCateVisible" type="text" size="small" @click="createCate">确定</el-button>
      <el-button v-if="!createCateVisible" type="text" size="small" @click="createCateVisible = true">新增分类</el-button>
    </div>
  </div>
</template>

<script>
import { createTag, createTagCate } from '@/api/blog/tag'
export default {
  name: 'BlogTagCategory',
  props: {
    tagTree: {
      type: Array,
      default: () => { return [] }
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
      mTagTree: this.tagTree,
      active: this.tagCateIndex,
      cateName: '',
      createCateVisible: false
    }
  },
  watch: {
    'tagCateIndex': function(n) {
      this.active = n
    },
    'tagTree': function(n) {
      this.mTagTree = n
    },
    active: function(n) {
      this.setActiveItem(n)
      this.$emit('update:tagCateIndex', n)
    }
  },
  created() {

  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.setActiveItem(this.active)
      }, 10)
    })
  },
  methods: {
    setActiveItem() {
      for (let i = 0; i < this.tagTree.length; i++) {
        const noActiveItem = document.getElementById(`blog-tag-cate-item-${i}`)
        if (noActiveItem) {
          noActiveItem.style.background = ''
        }
      }
      const activeItem = document.getElementById(`blog-tag-cate-item-${this.active}`)
      if (activeItem) {
        activeItem.style.background = '#c8e7f3'
      }
    },
    createCate() {
      const data = {
        name: this.cateName
      }
      createTagCate(data).then(resp => {
        this.createCateVisible = false
        this.cateName = ''
        this.queryTagTree()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-tag-cate-item{
  &:hover{
    background-color: #f2f8fa;
  }
  color: #626066;
  border-radius: 2px;
  line-height: 30px;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.1s;
}
</style>
