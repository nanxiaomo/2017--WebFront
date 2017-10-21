<template>
    <div>
        <swiper :list="list" auto :show-dots="false" style="width：100%; margin-top: 10px;"  height="142px"></swiper>
    <div>
    <div class="content-wrapper ">
        <template v-for="item in items">
            <x-qcard :title="item.title" :author="item.author" :arttype="item.arttype" :images="item.images" :intro="item.intro" :agree="item.agree" :avatar="item.avatar"></x-qcard>
        </template>
    </div>    
</template>

<script type="text/javascript">
    import Flexbox from '../components/flexbox';
    import FlexboxItem from '../components/flexbox-item';
    import XQcard from '../components/x-qcard';
    import Swiper from 'vux/src/components/swiper'

    export default {
        components: {
            XQcard,
            Swiper
        },
        data: function () {
                return {
                    items: [],
                    list: []
                }
                
        },
        ready() {
            this.$http.get('assets/listquiz.json').then((response) => {
                this.items = response.data;
            }, (error) => {
                console.log(error);
            }),
            this.$http.get('assets/imagelist.json').then((response) => {
                this.list = response.data;
            }, (error) => {
                console.log(error);
            })
        }
    }
</script>