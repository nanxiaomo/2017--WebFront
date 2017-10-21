<template>
    <div>
        <flexbox orient="vertical" class="flex-layout">
            <flexbox-item class="layout-wrap">
                <router-view keep-alive :is-index="isIndex"></router-view>
            </flexbox-item>
            <flexbox-item class="layout-footer" v-if="isIndex">
                <tabbar class="x-footer" :index="tabIndex">
                    <tabbar-item link="/list">
                        <i class="iconfont" slot="icon">&#xe600;</i>
                    </tabbar-item>
                    <tabbar-item link="/find">
                        <i class="iconfont" slot="icon">&#xe602;</i>
                    </tabbar-item>
                    <tabbar-item>
                        <i class="iconfont" slot="icon">&#xe603;</i>
                    </tabbar-item>
                    <tabbar-item>
                        <i class="iconfont" slot="icon">&#xe601;</i>
                    </tabbar-item>
                    <tabbar-item link="/more">
                        <i class="iconfont" slot="icon">&#xe604;</i>
                    </tabbar-item>
                </tabbar>
            </flexbox-item>
        </flexbox>
    </div>
</template>

<script type="text/javascript">
    import Flexbox from '../components/flexbox';
    import FlexboxItem from '../components/flexbox-item';
    import {
        Tabbar,
        TabbarItem
    } from 'vux-components/tabbar';

    export default {
        components: {
            Flexbox,
            FlexboxItem,
            Tabbar,
            TabbarItem
        },
        data() {
            return {
                isIndex: true,
                tabIndex: 1
            }
        }
    }
</script>