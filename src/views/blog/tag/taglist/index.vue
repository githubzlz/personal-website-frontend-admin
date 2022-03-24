<template>
  <div>
    <div v-for="(tag,i) in tags" :key="i">
      {{ tag.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogTagList',
  props: {
    tagTree: {
      type: Array,
      default: () => { return [] }
    },
    tagCateIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tags: []
    }
  },
  watch: {
    'tagTree': function(n) {
      if (n) {
        const cate = n[this.tagCateIndex]
        this.tags = []
        if (cate && cate.children) {
          this.tags = cate.children
        }
      }
    },
    'tagCateIndex': function(n) {
      const cate = this.tagTree[n]
      this.tags = []
      if (cate && cate.children) {
        this.tags = cate.children
      }
    }
  },
  created() {
    const cate = this.tagTree[this.tagCateIndex]
    this.tags = []
    if (cate && cate.children) {
      this.tags = cate.children
    }
  }
}
</script>

<style scoped>

</style>
