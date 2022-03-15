<template>
  <div class="blog-list">
    <div class="blog-list-cond">
      <el-card body-style="">
        <el-row :gutter="20">
          <el-col :span="16" />
          <el-col :span="8" />
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" />
          <el-col :span="8" />
          <el-col :span="4" />
          <el-col :span="4" />
        </el-row>
      </el-card>
    </div>
    <div class="blog-list-table">
      <el-table
        :data="tableData"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="商品名称">
                <span>{{ props.row.name }}</span>
              </el-form-item>
              <el-form-item label="所属店铺">
                <span>{{ props.row.shop }}</span>
              </el-form-item>
              <el-form-item label="商品 ID">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="店铺 ID">
                <span>{{ props.row.shopId }}</span>
              </el-form-item>
              <el-form-item label="商品分类">
                <span>{{ props.row.category }}</span>
              </el-form-item>
              <el-form-item label="店铺地址">
                <span>{{ props.row.address }}</span>
              </el-form-item>
              <el-form-item label="商品描述">
                <span>{{ props.row.desc }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column
          label="ID"
          width="120px"
          min-width="120px"
          prop="id"
        />
        <el-table-column
          label="文章名"
          prop="name"
          min-width="180px">
          <template slot-scope="props">
            <el-tooltip :content="props.row.desc" placement="top">
              <span>
              {{ props.row.desc}}
            </span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label="浏览量"
          prop="shopId"
          align="center"
          width="100px"
        />
        <el-table-column
          label="分类"
          prop="desc"
          min-width="150px"
        />
        <el-table-column
          label="发布状态"
          align="center"
          width="100px"
        >
          <template slot-scope="props">
            <state-point :state="props.row.isPublish"/>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
          align="left"
          min-width="150px"
        >
          <template slot-scope="scope">
            <el-button-group>
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
              >编辑
              </el-button>
              <el-popconfirm
                confirm-button-text="删除"
                cancel-button-text="取消"
                icon="el-icon-info"
                icon-color="red"
                title="确定删除此文章吗？"
              >
                <el-button slot="reference" size="mini" type="danger">删除</el-button>
              </el-popconfirm>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import StatePoint from '@/views/blog/list/point'
export default {
  name: 'BlogList',
  components: { StatePoint },
  data() {
    return {
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        isPublish: 0
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        isPublish: 1
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        isPublish: 1
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333',
        isPublish: 0
      }]
    }
  },
  methods: {
    handleEdit() {
      console.log('111')
    },
    handleDelete() {
      console.log('222')
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.blog-list {
  padding: 20px;

  &-cond {

  }
}
</style>
