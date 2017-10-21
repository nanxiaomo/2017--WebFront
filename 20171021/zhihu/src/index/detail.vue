<template>
    <div class="layout-content">
        <x-header>{{$route.params.id}}加载成功</x-header>
    </div>
</template>

<script type="text/javascript">
    import XHeader from 'vux-components/x-header';

    export default {
        components: {
            XHeader
        }
    }
</script>