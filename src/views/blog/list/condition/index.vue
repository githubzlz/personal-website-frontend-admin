<template>
  <div class="blog-list-cond">
    <card-title title-name="文章列表" color="#6F1AE2" style="margin-bottom: 20px" />
    <el-form ref="blogEditForm" :model="pParams" label-width="80px" size="small">
      <el-form-item label="文章名称:" prop="title">
        <el-input v-model="pParams.title" show-word-limit clearable />
      </el-form-item>
      <el-row :gutter="50">
        <el-col :span="12">
          <el-form-item label="文章分类:" prop="categories">
            <el-select v-model="pParams.categories" style="width: 100%" filterable remote reserve-keyword placeholder="请输入分类名" :remote-method="remoteCategoryMethod" :loading="loading.cateLoading">
              <el-option v-for="(item,i) in categoryList" :key="i" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="文章标签:" prop="tags">
            <el-select v-model="pParams.tags" style="width: 100%" filterable remote reserve-keyword placeholder="请输入标签名" :remote-method="remoteTagMethod" :loading="loading.tagLoading">
              <el-option v-for="(item,i) in categoryList" :key="i" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :span="12">
          <el-form-item label="文章来源:" prop="categories">
            <el-checkbox-group v-model="pParams.provenance" size="small">
              <el-checkbox-button v-for="item in provenanceList" :key="item.value" :label="item.value">{{ item.name }}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="创建时间:" prop="tags" />
        </el-col>
      </el-row>
      <el-button size="small" @click="queryBlogList">搜索</el-button>
    </el-form>
  </div>
</template>

<script>
import { arr } from '@/assets/enums/provenance'
import CardTitle from '@/components/Common/title'
import { queryCategoryList } from '@/api/blog/category'
import { queryTagList } from '@/api/blog/tag'
export default {
  name: 'BlogListConditions',
  components: { CardTitle },
  props: {
    params: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      categoryList: [],
      tagList: [],
      provenanceList: arr,
      pParams: {
        title: '',
        provenance: 0,
        categories: [],
        tags: []
      },
      loading: {
        cateLoading: true,
        tagLoading: true
      }
    }
  },
  created() {
    queryCategoryList().then(resp => {
      this.categoryList = resp.data
      this.loading.cateLoading = false
    })
    queryTagList().then(resp => {
      this.tagList = resp.data
      this.loading.tagLoading = false
    })
  },
  methods: {
    remoteCategoryMethod(query) {
      if (query !== '') {
        this.loading.cateLoading = true
        queryCategoryList().then(resp => {
          this.categoryList = resp.data
          this.loading.cateLoading = false
        })
      } else {
        this.categoryList = []
      }
    },
    remoteTagMethod(query) {
      if (query !== '') {
        this.loading.tagLoading = true
        queryTagList().then(resp => {
          this.tagList = resp.data
          this.loading.tagLoading = false
        })
      } else {
        this.tagList = []
      }
    },
    queryBlogList() {
      this.$emit('update:params', this.pParams)
      console.log(this.pParams)
    }
  }
}
</script>

<style scoped>

</style>
