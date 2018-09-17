<template>
  <div class="ground">
    <div class="ground-top">
      <table v-for="(n, index) in 50" :key="index">
        <tbody>
        <tr v-for="(item, i) in groundData" :key="i">
          <td v-for="(data, j) in item" :key="j" v-bind:class="[data]"></td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="ground-bottom">
      <table v-for="(n, index) in 50" :key="index">
        <tbody>
        <tr v-for="(item, i) in groundData" :key="i">
          <td v-for="(data, j) in item" :key="j" v-bind:class="[data]"></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        groundData: [
          ["c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c3", "c1", "c1", "c1", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c3", "c3", "c3", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c1", "c1", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c2", "c3"],
          ["c3", "c3", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c2", "c2", "c3"],
          ["c1", "c1", "c3", "c3", "c2", "c2", "c2", "c2", "c3", "c1", "c2", "c2", "c2", "c2", "c2", "c3"],
          ["c1", "c2", "c1", "c1", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c1", "c1", "c1", "c3", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3"],
          ["c1", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c3"],
          ["c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c3"]
        ]
      }
    }
  }
</script>
<style lang='scss' scoped>
  table {
    border-collapse: collapse;
  }

  td {
    /*border: 1px solid #f0f0f0;*/
    width: 1px;
    height: 1px;
  }
  .ground {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    &-top,
    &-bottom{
      width: 120%;
      height: 48px;
      overflow: hidden;
    }
    table {
      float: left;
    }
  }

  .c1 {
    background-color: #AF7D4E;
  }
  .c2 {
    background-color: #794632;
  }
  .c3 {
    background-color: #080505;
  }

  .jump {
    animation: jump 1s infinite cubic-bezier(0,0,1,1);
  }
  @keyframes jump{
    0% {transform:translatey(0);}
    50% {transform:translatey(-100px);}
    100% {transform:translatey(0);}
  }
</style>

