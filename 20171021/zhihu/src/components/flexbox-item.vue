<template>
  <div class="vux-flexbox-item" :style="style">
    <slot></slot>
  </div>
</template>

<script>
const prefixList = ['-moz-box-', '-webkit-box-', '']

export default {
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  methods: {
    buildWidth (width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width
        } else {
          return width / 12
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth
      }
    }
  },
  computed: {
    style () {
      let styles = {}
      let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop'
      return styles
    }
  },
  data () {
    return {
      bodyWidth: document.documentElement.offsetWidth
    }
  }
}
</script>
