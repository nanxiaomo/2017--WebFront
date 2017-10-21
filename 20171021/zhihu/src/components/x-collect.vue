<template>
    <div class="xcolcard">
        <div class="xcolcard-title">{{ title }}</div>
        <div class="xcolcard-description" v-show="!desciption"><p>{{ description }}</p></div>  
        <div class="xcolcard-header">
            <img v-bind:src="avatar">
            <p>由 <span>{{ author }}</span> 创建</p>
            <span class="agree">{{ collect }}人关注</span>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        props: {
            avatar: String,
            author: String,
            title: String,
            description: String,
            collect: {
                type: Number,
                default: 0
            }
        }
    }
</script>

<style type="text/css">
    .xcolcard {
        margin-top: 8px;
        background-color: #fff;
        box-sizing: content-box;
        padding: 16px;
        border-top: 1px solid #D8D8D8;
        border-bottom: 1px solid #D8D8D8;
    }
    .xcolcard:last-child {
        margin-bottom: 8px;
    }
    .xcolcard-header{
        box-sizing: content-box;
    }
    .xcolcard-header p{
        margin: 0;
        display: inline-block;
    }
    .xcolcard-header img{
    vertical-align: middle;
    width: 20px;
    height: 20px;
    border-radius: 50%
    }
    .xcolcard-header .agree{
      color: #737373;
      font-size: 14px;
      text-align: center;
      float: right;
      vertical-align: middle;
    }
    .xcolcard-header span{
        font-size: 17px;
        color: #a5aaae;
    }
    .xcolcard-title {
        line-height: 1.4em;
        font-size: 16px;
        font-weight: bold;
        color: #000;
    }
    .xcolcard-description p{
        margin: 5px 0 0 0;
        width: 100%;
        font-size: 14px;
        color: #000;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; /** 显示的行数 **/
         overflow: hidden;  /** 隐藏超出的内容 **/
    }
</style>