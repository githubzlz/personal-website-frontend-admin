<template>
  <div id="blog-edit-title">
    <div class="blog-edit-title-op">
      <el-button
        type="primary"
        size="small"
        icon="el-icon-edit"
        @click="showSaveBlogDialog"
      >保存</el-button>
      <el-button type="primary" size="small" icon="el-icon-share">导出</el-button>
      <el-button type="danger" size="small" icon="el-icon-delete">清空</el-button>
    </div>
    <div class="blog-edit-title-t">
      <el-input
        v-model="blog.title"
        placeholder="请输入文章名"
        style="font-weight: bolder;
        font-size: 18px;"
      />
    </div>
    <el-dialog title="保存文章" :visible.sync="saveBlogDialogVisible">
      <el-form ref="form" :model="blog" label-width="80px">
        <el-form-item label="文章名称">
          <el-input v-model="blog.name" />
        </el-form-item>
        <el-form-item label="文章分类">
          <el-select v-model="blog.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai" />
            <el-option label="区域二" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker v-model="blog.date1" type="date" placeholder="选择日期" style="width: 100%;" />
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker v-model="blog.date2" placeholder="选择时间" style="width: 100%;" />
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送">
          <el-switch v-model="blog.delivery" />
        </el-form-item>
        <el-form-item label="活动性质">
          <el-checkbox-group v-model="blog.type">
            <el-checkbox label="美食/餐厅线上活动" name="type" />
            <el-checkbox label="地推活动" name="type" />
            <el-checkbox label="线下主题活动" name="type" />
            <el-checkbox label="单纯品牌曝光" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源">
          <el-radio-group v-model="blog.resource">
            <el-radio label="线上品牌商赞助" />
            <el-radio label="线下场地免费" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式">
          <el-input v-model="blog.desc" type="textarea" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { queryCategoryList } from '@/api/blog/category'

export default {
  name: 'EditTitle',
  data() {
    return {
      title: '',
      saveBlogDialogVisible: false,
      formLabelWidth: '120px',
      blog: {
        title: '',
        summary: '',
        category: []
      },
      categories: []
    }
  },
  created() {
    this.queryCategoryList()
  },
  methods: {
    showSaveBlogDialog() {
      this.saveBlogDialogVisible = true
    },
    queryCategoryList() {
      queryCategoryList().then(resp => {
        this.categories = resp.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-edit-title-t{
  overflow:hidden;
  height: 40px;
}
.blog-edit-title-op{
  float: right;
  height: 40px;
  line-height: 40px;
  margin:0 10px;
}
</style>
