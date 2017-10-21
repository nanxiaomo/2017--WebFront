<template>
    <div id="find" class="layout-content" >
        <tab :animate="false" active-color="#fff" default-color="rgba(255,255,255,.8)">
            <tab-item v-link="{ path: '/find/recommend' }" :selected="tabVal === 'recommend'">推荐</tab-item>
            <tab-item v-link="{ path: '/find/round' }" :selected="tabVal === 'round'">圆桌</tab-item>
            <tab-item v-link="{ path: '/find/hot' }" :selected="tabVal === 'hot'">热门</tab-item>
            <tab-item v-link="{ path: '/find/collect' }" :selected="tabVal === 'collect'">收藏</tab-item>
        </tab>
        <router-view keep-alive></router-view>
    </div>
</template>
<script>
import XHeader from 'vux/src/components/x-header'
import Tab from 'vux/src/components/tab/tab'
import TabItem from 'vux/src/components/tab/tab-item'

export default {
    components: {
        XHeader,
        Tab,
        TabItem
    },
    data () {
        return {}
    }
}
</script>
<style type="text/css">
    #find .vux-tab {
        height: 56px;
        width: 100%;
        background-color: #1d8ae7;
        color: #fff;
        border-color: #fff;
     }
    #find .vux-tab .vux-tab-item{
       color: rgba(255,255,255,.8);
       border-color: #fff;
       line-height: 56px;
    }
</style>