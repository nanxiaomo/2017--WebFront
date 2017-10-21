<template>
    <div class="ximgcard">
        <img v-bind:src="image">
        <div class="text">
            <h2>{{ title }}</h2>
            <p>{{ browseNumber }} . {{ careNumber }}</p>
        </div>
    </div>
</template>
<script type="text/javascript">
    export default {
        props: {
            title: String,
            image: String,
            browse: {
                type: Number,
                default: 0
            },
            care: {
                type: Number,
                default: 0
            }
        },
        computed: {
            browseNumber() {
                return this.browse + '次浏览';
            },
            careNumber() {
                return this.care + '人关注';
            }
        }
    }
</script>

<style type="text/css">
    .ximgcard{
        width: 100%;
        height: 204px;
        color: #fff;    
        margin-top: 10px;
        position: relative;            
    }
    .ximgcard img{
        width: 100%;
        height: 204px;
        vertical-align: middle;
    }
    .ximgcard .text{
        position: absolute;
        bottom: 16px;
        left: 16px;
    }
    .ximgcard .text h2 {
        font-size: 17px;
    }
    .ximgcard .text p{
        line-height: 30px;
        font-size: 10px;
    }
</style>