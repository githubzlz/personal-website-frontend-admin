<template>
  <el-card>
    <div slot="header" class="clearfix">
      <card-title :title-name="title.title" :color="title.color" />
    </div>
    <calendar
      ref="Calendar"
      :mark-date="arr2"
      @="calendarClick"
      @changeMonth="changeDate"
    />
  </el-card>
</template>
<script>
import CardTitle from '@/components/Common/title'
import Calendar from 'vue-calendar-component'
export default {
  name: 'DashCalendar',
  components: { CardTitle, Calendar },
  data() {
    return {
      title: {
        title: '日历',
        color: '#319e3c'
      },
      arr2: ['2022/3/7', '2022/3/8', '2022/3/9']
    }
  },
  methods: {
    calendarClick($) {
      console.log($)
    },
    changeDate($) {
      console.log($)
    }
  }
}
</script>

<style scoped>
.wh_container >>> .wh_content_all{
  background-color:#ffffff!important;
  border-radius: 6px;
}
.wh_container{
  margin: 0px!important;
  height: 405px;
}

.wh_container >>> .wh_item_date{
  color:#211d48;

}
.wh_container >>> .wh_item_date:hover{
  color:#ffffff;
  background: #136aa7;
  border-radius: 50%;
}
.wh_container >>>  .wh_other_dayhide{
  color:#cccccc;
}

.wh_container >>> .wh_content_item{
  margin-bottom: 5px;
  margin-top: 5px;
}

.wh_container >>> .wh_content{
  color:black;
}

.wh_container >>> .wh_top_tag{
  color:black;
}
.wh_container >>> .wh_content_li{
  color:#162947;
  font-weight: bold;
}
.wh_container >>> .wh_jiantou1{
  border-top: 2px solid #162947;
  border-left: 2px solid #162947;
}
.wh_container >>> .wh_jiantou2{
  border-top: 2px solid #162947;
  border-right: 2px solid #162947;
}

.wh_container >>> .wh_content_item>.wh_isMark{
  background-color: rgba(19,105,167,0.15);
  /*border-radius: 0px;*/
}
.wh_container >>> .wh_content_item .wh_isToday{
  background-color: rgba(19,105,167,1);
  /*border-radius: 0px;*/
  color: #ffffff;
}
.wh_container >>> .wh_content_item .wh_chose_day{
  background-color: rgba(19,105,167,1);
  /*border-radius: 0px;*/
  color: #ffffff;
}
</style>
