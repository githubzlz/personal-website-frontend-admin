<template>
  <div style="padding: 20px">
    <el-card>
      <el-tabs v-model="activeName">
        <el-tab-pane label="置顶推荐" name="top">
          <settings-blog-top />
        </el-tab-pane>
        <el-tab-pane label="首页推荐" name="home">
          <settings-blog-home />
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import SettingsBlogTop from '@/views/settings/blog/top'
import SettingsBlogHome from '@/views/settings/blog/home'
export default {
  name: 'SettingsBlog',
  components: { SettingsBlogHome, SettingsBlogTop },
  data() {
    return {
      activeName: 'top'
    }
  }
}
</script>

<style scoped>

</style>
