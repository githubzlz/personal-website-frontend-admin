<template>
  <el-table-column type="expand">
    <template slot-scope="props">
      <el-form label-position="left" inline class="table-expand">
        <el-form-item label="ID:">
          <span>{{ props.row.id }}</span>
        </el-form-item>
        <el-form-item label="logo:">
          <span>{{ props.row.imgSrc }}</span>
        </el-form-item>
        <el-form-item label="阅读量:">
          <span>{{ props.row.readings }}</span>
        </el-form-item>
        <el-form-item label="分类:">
          <el-tag v-for="(item ,i) in props.row.categories" :key="i" style="margin: 5px" size="mini" effect="light" type="success">
            {{ item.name }}
          </el-tag>
        </el-form-item>
        <el-form-item label="点赞量:">
          <span>{{ props.row.stars }}</span>
        </el-form-item>
        <el-form-item label="标签:">
          <el-tag v-for="(item ,i) in props.row.tags" :key="i" style="margin: 5px" size="mini" effect="light" type="warning">
            {{ item.name }}
          </el-tag>
        </el-form-item>
        <el-form-item label="最后修改时间:">
          <span>{{ props.row.modifiedTime | formatTimer }}</span>
        </el-form-item>
        <el-form-item label="创建时间:">
          <span>{{ props.row.createdTime | formatTimer }}</span>
        </el-form-item>
      </el-form>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'BlogListTableExpand',
  filters: {
    formatTimer: function(value) {
      const date = new Date(Number(value))
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let m = date.getMinutes()
      m = m < 10 ? '0' + m : m
      let s = date.getSeconds()
      s = s < 10 ? '0' + s : s
      return `${y}-${MM}-${d} ${h}:${m}:${s}`
    }
  }
}
</script>

<style scoped>
.table-expand {
  font-size: 0;
}
.table-expand label {
  width: 90px;
  color: #99a9bf;
}
.table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
