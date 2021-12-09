<template>
  <div class="custom-logo-site-title">
    <div class="brand">
      <span class="logo-line-before"><i /></span>
      <div class="site-title">
        <div id="animate-stroke" class="animate">
          {% for letter in config.title %}{# #}<span>
            <svg>
              <use xlink:href="#stroke{{ letter }}" />
            </svg> </span
          >{# #}{% endfor %}
        </div>
        <div id="animate" class="animate">
          {% for letter in config.title %}{# #}<span>
            <svg>
              <text id="stroke{{ letter }}">{{ letter }}</text>
            </svg> </span
          >{# #}{% endfor %}
        </div>
        <div id="guide" class="guide">
          {% for letter in config.title %}{# #}<span>{{ letter }}</span
          >{# #}{% endfor %}
        </div>
      </div>
      <span class="logo-line-after"><i /></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Typeit',
  components: {},
  data() {
    return {
      list: ['']
    }
  },
  computed: {},
  created() {},
  mounted() {
    const cursorSpecialEffects = new CursorSpecialEffects()
    cursorSpecialEffects.init()
    evanyouFun(this.$refs.evanyou)
  }
}
</script>
