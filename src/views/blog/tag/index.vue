<template>
  <div class="blog-tag" style="">
    <el-card>
      <div slot="header" class="clearfix">
        <card-title title-name="文章标签" color="#6FA1F1" />
      </div>
      <el-row>
        <el-col :span="6">
          <blog-tag-category :query-tag-tree="queryTagTree" :tag-tree="tagTree" :tag-cate-index.sync="tagCateIndex" />
        </el-col>
        <el-col :span="18">
          <!--          <blog-tag-condition :param.sync="param" :tag-cate-index.sync="tagCateIndex" />-->
          <blog-tag-list :query-tag-tree="queryTagTree" :tag-tree="tagTree" :tag-cate-index.sync="tagCateIndex" />
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import CardTitle from '@/components/Common/title'
import BlogTagCategory from '@/views/blog/tag/tagcate'
import BlogTagList from '@/views/blog/tag/taglist'
import { queryTagTree } from '@/api/blog/tag'
export default {
  name: 'BlogTag',
  components: { BlogTagList, BlogTagCategory, CardTitle },
  data() {
    return {
      tagTree: [],
      tagCateIndex: 0,
      param: ''
    }
  },
  watch: {
    param: function(n) {
      this.queryTagTree()
    }
  },
  created() {
    this.queryTagTree()
  },
  methods: {
    queryTagTree() {
      queryTagTree().then(resp => {
        this.tagTree = resp.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-tag{
  padding: 20px;

}
</style>
