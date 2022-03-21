<template>
  <el-form-item
    label="标签"
    prop="tags"
    :rules="[
      { required: true,message: '文章标签不能为空',trigger: ['blur','change'] }
    ]"
  >
    <el-tag
      v-for="tag in tagNames"
      :key="tag"
      closable
      :disable-transitions="true"
      size="small"
      effect="dark"
      style="margin-right: 10px; border: none"
      type="success"
      @close="handleTagClose(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-popover
      placement="bottom-start"
      width="400"
      trigger="click"
    >
      <div>
        <el-input placeholder="输入标签名并回车保存" />
        <el-collapse v-model="tagCateShow" accordion>
          <el-collapse-item v-for="(tag,i) in tagTree" :key="tag" :title="tag.name" :name="i">
            <el-button v-for="item in tag.children" :key="item" size="small" @click="addTag(item)">
              {{ item.name }}
            </el-button>
          </el-collapse-item>
        </el-collapse>
      </div>
      <el-tag
        slot="reference"
        size="small"
        effect="dark"
        style="margin-right: 10px; cursor: pointer"
      >
        +添加标签
      </el-tag>
    </el-popover>
  </el-form-item>
</template>

<script>
import { queryTagTree } from '@/api/blog/tag'
export default {
  name: 'EditFormTag',
  data() {
    return {
      tagTree: [],
      tagMap: new Map(),
      tagIds: [],
      tagNames: [],
      inputVisible: false,
      tagCateShow: 0
    }
  },
  watch: {
    tagNames: function(nv, ov) {
      this.tagIds = []
      nv.foreach(name => {
        this.tagIds.push(this.tagMap.get(name))
      })
    }
  },
  created() {
    this.queryTagTree()
  },
  methods: {
    queryTagTree() {
      queryTagTree().then(resp => {
        this.tagTree = resp.data
        if (this.tagTree) {
          this.tagTree.forEach(cate => {
            if (cate) {
              cate.foreach(tag => {
                this.tagMap.set(tag.id, tag.name)
                this.tagMap.set(tag.name, tag.id)
              })
            }
          })
        }
      })
    },
    handleTagClose(tag) {
      this.tagNames.splice(this.tagNames.indexOf(tag), 1)
    },
    addTag(item) {
      this.tagNames.push(item.name)
      this.tagTree.forEach(cate => {
        const i = cate.indexOf(item.name)
        if (i !== -1) {
          cate.splice(i, 1)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
