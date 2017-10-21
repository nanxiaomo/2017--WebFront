<template>
    <div class="content-wrapper ">
        <template v-for="item in items">
            <x-collect :title="item.title" :author="item.author"  :description="item.description" :collect="item.collect" :avatar="item.avatar"></x-collect>
        </template>
    </div>    
</template>
<script type="text/javascript">
    import XCollect from '../components/x-collect';

    export default {
        components: {
            XCollect
        },
        data() {
            return {
                items: []
            }
        },
        ready() {
            this.$http.get('assets/list-collect.json').then((response) => {
                this.items = response.data;
            }, (error) => {
                console.log(error);
            })
        }
    }
</script>