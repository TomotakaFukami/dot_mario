<template>
  <div class="wrap">
      <controller/>
      <timer/>
      <mario/>
      <ground/>
  </div>
</template>

<script>
  import Controller from '~/components/Controller.vue'
  import Timer from '~/components/Timer.vue'
  import Mario from '~/components/Mario.vue'
  import Ground from '~/components/Ground.vue'

  export default {
    components: {
      Controller,
      Timer,
      Mario,
      Ground
    }
  }
</script>

<style>
  body {
    background: #4E80FF;
  }
</style>

