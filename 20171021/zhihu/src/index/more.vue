 <template>
    <div class="layout-content more-wrap">
        <x-header :left-options="{showBack: false}">更多</x-header>
        <group>
            <cell title="我的关注" is-link>
                <i class="iconfont" slot="icon">&#xe60a;</i>
            </cell>
            <cell title="我的收藏" is-link>
                <i class="iconfont" slot="icon">&#xe608;</i>
            </cell>
            <cell title="我的草稿" is-link>
                <i class="iconfont" slot="icon">&#xe60b;</i>
            </cell>
            <cell title="最近浏览" is-link>
                <i class="iconfont" slot="icon">&#xe607;</i>
            </cell>
            <cell title="我的值乎" is-link>
                <i class="iconfont" slot="icon">&#xe605;</i>
            </cell>
            <cell title="我的 Live" is-link>
                <i class="iconfont" slot="icon">&#xe606;</i>
            </cell>
        </group>
        <group>
            <cell title="反馈帮助中心" is-link>
                <i class="iconfont" slot="icon">&#xe600;</i>
            </cell>
            <switch title="夜间模式" :value.sync="nightMode" @on-change="change"></switch>
            <cell title="设置" is-link>
                <i class="iconfont" slot="icon">&#xe609;</i>
            </cell>
        </group>
        <toast :show.sync="moreShow">{{nightTip}}</toast>
    </div>
</template>

<script type="text/javascript">
    import Group from 'vux-components/group';
    import Cell from 'vux-components/cell';
    import Switch from 'vux-components/switch';
    import Toast from 'vux-components/toast';
    import XHeader from 'vux-components/x-header';

    export default {
        components: {
            Group,
            Cell,
            Switch,
            Toast,
            XHeader
        },
        data() {
            return {
                moreShow: false,
                nightMode: false
            }
        },
        computed: {
            nightTip() {
                if (this.nightMode == false) return '夜间模式已关闭';
                else return '夜间模式已开启';
            }
        },
        methods: {
            change(val) {
                this.moreShow = true;
            }
        }
    }
</script>