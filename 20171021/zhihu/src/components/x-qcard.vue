<template>
    <div class="xqcard">
        <div class="xqcard-header">
            <img v-bind:src="avatar">
            <span>{{ authorDo }} </span>
            <span class="agree">{{ agree }}</span>
        </div>
        <img v-show="arttype" class="aimg" v-bind:src="images">
        <div class="xqcard-title">{{ title }}</div>
        <div class="xqcard-intro"><p>{{  intro }}</p></div> 
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            avatar: String,
            author: String,
            title: String,
            intro: String,
            images: String,
            arttype: Number,
            agree: {
                type: Number,
                default: 0
            }
        },
        computed: {
            authorDo() {
                if(this.arttype==0){
                    return this.author + ' 回答了问题';
                }
                else{
                    return this.author+ '  发布了文章';
                }
            }
        }
    }
</script>

<style type="text/css">
    .xqcard {
        margin-top: 8px;
        background-color: #fff;
        box-sizing: content-box;
        padding: 14px;
        line-height: 1.6em;
        border-top: 1px solid #D8D8D8;
        border-bottom: 1px solid #D8D8D8;
    }
    .xqcard:last-child {
        margin-bottom: 8px;
    }

    .xqcard-header {
        box-sizing: content-box;
        padding-bottom: 5px;
    }

    .xqcard-header img {
        vertical-align: middle;
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }

    .xqcard-header .agree {
        width: 34px;
        height: 20px;
        background-color: #ebf5fe;
        color: #82bdf0;
        font-size: 10px;
        text-align: center;
        float: right;
        vertical-align: middle;
    }

    .aimg {
        width: 100%;
        height: 185px;
        border-radius: 3px;
    }

    .xqcard-header span {
        font-size: 14px;
        color: #a5aaae;
    }

    .xqcard-title {
        font-size: 16px;
        font-weight: bold;
        color: #434343;
    }

    .xqcard-intro p {
        margin: 0;
        width: 100%;
        font-size: 14px;
        color: #000;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
</style>