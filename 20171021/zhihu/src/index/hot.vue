<template>
    <div class="content-wrapper ">
        <template v-for="item in items" >
            <x-qcard :title="item.title" :author="item.author" :arttype="item.arttype" :images="item.images" :intro="item.intro" :agree="item.agree" :avatar="item.avatar" v-show="!item.arttype"></x-qcard>
        </template>
    </div>    
</template>

<script type="text/javascript">
    import XQcard from '../components/x-qcard';

    export default {
        components: {
            XQcard
        },
        data() {
            return {
                items: []
            }
        },
        ready() {
            this.$http.get('assets/listquiz.json').then((response) => {
                alert(response.data)
                this.items = response.data;
            }, (error) => {
                alert(error)
                console.log(error);
            })
        }
    }
</script>