<template>
  <el-form-item
    label="标签"
    prop="tags"
    :rules="[
      { required: true,message: '文章标签不能为空',trigger: ['blur','change'] }
    ]"
  >
    <template v-if="editForm">
      <el-tag
        v-for="tagId in tagIds"
        :key="tagId"
        closable
        :disable-transitions="true"
        size="small"
        effect="light"
        style="margin-right: 10px;"
        type="success"
        @close="handleTagClose(tagId)"
      >
        {{ tagMap.get(tagId) }}
      </el-tag>
    </template>
    <template v-else>
      <el-tag
        v-for="tagId in tagIds"
        :key="tagId"
        :disable-transitions="true"
        size="small"
        effect="light"
        style="margin-right: 10px;"
        type="success"
        @close="handleTagClose(tagId)"
      >
        {{ tagMap.get(tagId) }}
      </el-tag>
    </template>

    <el-popover
      v-model="showAddTagsPop"
      placement="bottom-start"
      width="400"
      trigger="click"
    >
      <el-collapse v-model="tagCateShow" accordion>
        <template v-for="(cate,i) in tagTree">
          <el-collapse-item v-if="cate.show" :key="cate.id" :title="cate.name" :name="i">
            <template v-for="tag in cate.tags">
              <el-tag
                v-if="tag.show"
                :key="tag.id"
                effect="plain"
                size="small"
                style="margin-right: 10px; cursor: pointer; margin-top: 10px"
                @click="addTag(tag.id)"
              >
                {{ tag.name }}
              </el-tag>
            </template>
          </el-collapse-item>
        </template>
      </el-collapse>
      <el-tag
        id="showAddTagsButton"
        slot="reference"
        size="small"
        effect="light"
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
  props: {
    tags: {
      type: Array,
      default: () => { return [] }
    },
    edit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tagTree: [],
      showAddTags: true,
      showAddTagsPop: false,
      tagIds: this.tags,
      tagMap: new Map(),
      tagCateShow: 0,
      editForm: this.edit
    }
  },
  watch: {
    'tags': function(newValue, oldValue) {
      this.tagIds = newValue
    },
    'edit': function(newValue, oldValue) {
      this.editForm = newValue
      this.showAddTagsButton(newValue)
    },
    tagIds: function(nv, ov) {
      if (nv.length >= 5) {
        this.showAddTagsPop = false
        this.showAddTagsButton(false)
      } else {
        this.showAddTagsButton(true)
      }
      this.$emit('update:tags', nv)
    }
  },
  created() {
    this.queryTagTree()
  },
  mounted() {
    this.showAddTagsButton(this.editForm)
  },
  methods: {
    queryTagTree() {
      this.showAddTags = this.tagIds.length <= 5
      queryTagTree().then(resp => {
        this.tagTree = resp.data
        if (this.tagTree) {
          this.tagTree.forEach(cate => {
            if (cate.tags) {
              cate.tags.forEach(tag => {
                cate.show = true
                tag.show = this.tagIds.indexOf(tag.id) === -1
                this.tagMap.set(tag.id, tag.name)
              })
            }
          })
        }
      })
    },
    handleTagClose(tagId) {
      this.tagIds.splice(this.tagIds.indexOf(tagId), 1)
      this.updateTagShowState(tagId, true)
    },
    addTag(tagId) {
      if (this.tagIds.indexOf(tagId) === -1) {
        this.tagIds.push(tagId)
      }
      this.updateTagShowState(tagId, false)
    },
    updateTagShowState(id, op) {
      this.tagTree.forEach(cate => {
        let show = false
        if (cate.tags) {
          for (let i = 0; i < cate.tags.length; i++) {
            if (cate.tags[i].id === id) {
              cate.tags[i].show = op
            }
            if (cate.tags[i].show === true) {
              show = true
            }
          }
        }
        cate.show = show
      })
    },
    showAddTagsButton(visible) {
      let desc = 'inline-block'
      if (!visible) {
        desc = 'none'
      }
      document.getElementById('showAddTagsButton').style.display = desc
    }
  }
}
</script>

<style scoped>

</style>
