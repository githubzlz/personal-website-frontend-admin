<template>
  <div class="blog-list-cond">
    <el-form ref="blogEditForm" :model="pParams" label-width="80px" size="small">
      <el-form-item label="文章名称:" prop="title">
        <el-input v-model="pParams.title" show-word-limit clearable />
      </el-form-item>
      <el-row :gutter="50">
        <el-col :span="14">
          <el-form-item label="文章标签:" prop="tags">
            <el-select
              v-model="pParams.tags"
              clearable
              multiple
              :multiple-limit="5"
              style="width: 100%"
              filterable
              remote
              reserve-keyword
              placeholder="请输入标签名"
              :remote-method="remoteTagMethod"
              :loading="loading.tagLoading"
            >
              <el-option v-for="(item,i) in tagList" :key="i" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="文章分类:" prop="categories">
            <el-select
              v-model="pParams.categories"
              multiple
              :multiple-limit="1"
              clearable
              style="width: 100%"
              filterable
              remote
              reserve-keyword
              placeholder="请输入分类名"
              :remote-method="remoteCategoryMethod"
              :loading="loading.cateLoading"
            >
              <el-option v-for="(item,i) in categoryList" :key="i" :label="item.name" :value="item.id" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :span="14">
          <el-form-item label="创建时间:" prop="tags">
            <el-date-picker
              v-model="pParams.date"
              style="width: 100%;"
              :picker-options="pickerOptions"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="文章来源:" prop="categories">
            <el-checkbox-group v-model="provenance" size="small" :max="1">
              <el-checkbox-button v-for="item in provenanceList" :key="item.value" :label="item.value">{{ item.name }}</el-checkbox-button>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :span="14">
          <el-form-item label="全局检索:" prop="title">
            <el-input v-model="pParams.all" show-word-limit clearable />
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <div style="text-align: right">
            <el-button size="small" type="primary" plain round @click="queryBlogList">搜索</el-button>
            <el-button size="small" type="warning" plain round @click="queryBlogList">清空</el-button>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { arr } from '@/assets/enums/provenance'

import { queryCategoryList } from '@/api/blog/category'
import { queryTagList } from '@/api/blog/tag'
export default {
  name: 'BlogListConditions',
  components: { },
  props: {
    params: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      provenance: [],
      categoryList: [],
      tagList: [],
      provenanceList: arr,
      pParams: {
        title: '',
        provenance: 0,
        categories: [],
        tags: [],
        date: [],
        all: ''
      },
      loading: {
        cateLoading: true,
        tagLoading: true
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      }
    }
  },
  watch: {
    provenance: function(n, o) {
      this.params.provenance = n[0]
    }
  },
  created() {

  },
  methods: {
    remoteCategoryMethod(query) {
      if (query !== '') {
        this.loading.cateLoading = true
        queryCategoryList({ name: query }).then(resp => {
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
        queryTagList({ name: query }).then(resp => {
          this.tagList = resp.data
          this.loading.tagLoading = false
        })
      } else {
        this.tagList = []
      }
    },
    queryBlogList() {
      const param = {
        title: this.pParams.title,
        provenance: this.pParams.provenance,
        categories: this.pParams.categories,
        tags: this.pParams.tags,
        date: this.pParams.date,
        all: this.pParams.all
      }
      this.$emit('update:params', param)
    }
  }
}
</script>

<style scoped>

</style>
