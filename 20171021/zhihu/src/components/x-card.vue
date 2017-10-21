<template>
    <div class="xcard">
        <div class="xcard-title">{{title}}</div>
        <div class="xcard-intro">{{intro}}</div>
        <div class="xcard-footer">
            <span>{{agreeNumber}}</span> · 
            <span>{{commentNumber}}</span>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: {
            title: String,
            intro: String,
            agree: {
                type: Number,
                default: 0
            },
            comment: {
                type: Number,
                default: 0
            }
        },
        computed: {
            agreeNumber() {
                return this.agree + ' 赞同';
            },
            commentNumber() {
                return this.comment + ' 评论';
            }
        }
    }
</script>

<style type="text/css">
    .xcard {
        margin-top: 8px;
        background-color: #fff;
        box-sizing: content-box;
        padding: 10px;
        line-height: 1.6em;
        border-top: 1px solid #D8D8D8;
        border-bottom: 1px solid #D8D8D8;
    }
    .xcard:last-child {
        margin-bottom: 8px;
    }
    .xcard-title {
        font-size: 16px;
        font-weight: bold;
        color: #434343;
    }
    .xcard-intro {
        font-size: 14px;
        color: #666;
    }
    .xcard-footer {
        color: #9F9F9F;
        font-size: 13px;
    }
</style>