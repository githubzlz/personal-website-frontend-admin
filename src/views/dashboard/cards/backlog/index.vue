<template>
  <div class="back-log">
    <el-row>
      <el-col :span="11">
        <div class="back-log-title">未读消息：</div>
        <div v-for="(item,i) in backLogs.message.data" :key="i" class="back-log-e ellipsis">
          <com-num :num="item.index" :size="1.6" />
          {{ item.title }}
        </div>
        <div v-if="backLogs.message.more" class="back-log-more back-log-more-1">更多...</div>
      </el-col>
      <el-col :span="2">
        <div style="height: 225px;width:1px;border-left: 5px dashed #e8dddd; margin: 0 auto" />
      </el-col>
      <el-col :span="11">
        <div class="back-log-title">待办事项：</div>
        <div v-for="(item,i) in backLogs.backLogs.data" :key="i" class="back-log-e ellipsis">
          <com-num :num="item.index" :size="1.6" :back-color="'#312311'" />
          {{ item.title }}
        </div>
        <div v-if="backLogs.backLogs.more" class="back-log-more back-log-more-2">更多...</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ComNum from '@/views/common/num'

export default {
  name: 'DashBackLog',
  components: { ComNum },
  data() {
    return {
      title: {
        title: '待办事项',
        color: '#33a5c2'
      },
      backLogs: {
        message: {
          more: true,
          data: [
            {
              index: 1,
              title: '这是一条未读的消息。。。这是一条未读的消息。。。这是一条未读的消息。。。这是一条未读的消息。。。'
            }, {
              index: 2,
              title: '这是一条未读的消息。。。'
            }, {
              index: 3,
              title: '这是一条未读的消息。。。'
            }, {
              index: 4,
              title: '这是一条未读的消息。。。'
            }
          ]
        },
        backLogs: {
          more: false,
          data: [
            {
              index: 1,
              title: '你有开发任务未完成，截止时间2020/02/05晚'
            }, {
              index: 2,
              title: '你有开发任务未完成，截止时间2020/02/05晚'
            }, {
              index: 3,
              title: '你有开发任务未完成，截止时间2020/02/05晚'
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.back-log {
  height: 250px;
  margin-top: 20px;
  border: 3px dashed rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 10px;
  overflow: hidden;
  position: relative;

  &-title {
    color: rgba(0, 0, 0, 0.6);
    font-weight: bolder;
    font-size: 14px
  }

  &-e {
    font-size: 13px;
    margin: 10px;
    padding: 3px 0;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.5);
    font-weight: bolder;
    border-radius: 10px;
    transition: 0.3s;
    overflow: hidden;
    border: 2px solid rgba(240, 241, 243, 0);
  }

  &-e:hover {
    border: 2px solid rgb(240, 241, 243);
  }

  &-more {
    font-size: 10px;
    color: rgba(0,0,0,0.4);
    position: absolute;
    bottom: 5px;
    cursor: pointer;
    &-1 {
      left: 25%;
    }
    &-2 {
      right: 25%;
    }
  }
}
</style>
