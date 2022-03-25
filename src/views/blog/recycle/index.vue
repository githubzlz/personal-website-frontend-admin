<template>
  <div style="padding: 20px">
    <el-card>
      <div slot="header" class="clearfix">
        <card-title title-name="回收站" color="#6F1AE2" />
      </div>
      <blog-recycle-card v-for="(blog,i) in blogList" :key="i" :blog="blog" />
    </el-card>
  </div>
</template>

<script>
import BlogRecycleCard from '@/views/blog/recycle/card'
import { queryBlogList } from '@/api/blog/blog'
import CardTitle from '@/components/Common/title'
export default {
  name: 'BlogRecycle',
  components: { BlogRecycleCard, CardTitle },
  data() {
    return {
      blogList: []
    }
  },
  created() {
    this.queryBlogList()
  },
  methods: {
    queryBlogList() {
      queryBlogList().then(resp => {
        this.blogList = resp.data.list
      })
    }
  }
}
</script>

<style scoped>

</style>
