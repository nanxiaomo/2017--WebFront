<template>
    <div class="layout-content" v-if="isIndex">
        <template v-for="item in items">
            <x-card :title="item.title" :intro="item.intro" :agree="item.agree" :comment="item.comment" v-link="{path: '/list/detail/' + item.id}"></x-card>
        </template>
    </div>
    <router-view keep-alive></router-view>
</template>

<script type="text/javascript">
    import XCard from '../components/x-card';

    export default {
        components: {
            XCard
        },
        props: {
            isIndex: true
        },
        data() {
            return {
                items: []
            }
        },
        ready() {
            this.$http.get('assets/list.json').then((response) => {
                this.items = response.data;
            }, (error) => {
                console.log(error);
            })
        }
    }
</script>