<template>
    <div class="content-wrapper" >
        <template v-for="imgitem in imgitems">
            <x-imgcard :title="imgitem.title" :image="imgitem.image" :browse="imgitem.browse" :care="imgitem.care"></x-imgcard>
        </template>
    </div>
</template>
<script type="text/javascript">
    import XImgcard from '../components/x-imgcard';

    export default {
        components: {
            XImgcard
        },
        data() {
            return {
                imgitems: []
            }
        },
                
        ready() {
            this.$http.get('assets/listround.json').then((response) => {
                this.imgitems = response.data;
            }, (error) => {
                console.log(error);
            })
        }

    }
</script>