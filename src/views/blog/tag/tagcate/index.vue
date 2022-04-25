<template>
  <div style="border-right: 1px solid rgba(0,0,0,0.1); padding: 10px">
    <div style="color: rgba(0,0,0,0.5); font-weight: bolder; margin-bottom: 10px">分类：</div>
    <div
      v-for="(cate, i) in mTagTree"
      :id="`blog-tag-cate-item-${i}`"
      :key="i"
      class="blog-tag-cate-item"
      @click="active = i"
    >
      {{ cate.name }}
    </div>
    <div style="text-align: center; margin-top: 20px">
      <el-input v-if="createCateVisible" v-model="cateName" />
      <el-button v-if="createCateVisible" type="text" @click="createCate">确定</el-button>
      <el-button
        v-if="!createCateVisible"
        type="text"
        size="small"
        @click="createCateVisible = true;createTagVisible= false"
      >新增分类
      </el-button>
    </div>
  </div>
</template>

<script>
import { createTagCate } from '@/api/blog/tag'

export default {
  name: 'BlogTagCategory',
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
      if (this.active === undefined || this.active === 0) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.setActiveItem(0)
          }, 10)
        })
      }
    },
    active: function(n) {
      this.setActiveItem(n)
      this.$emit('update:tagCateIndex', n)
    }
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
.blog-tag-cate-item {
  &:hover {
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
