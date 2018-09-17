<template>
  <div class="mario">
    <table v-bind:class="{jump : $store.state.jump, knockout : $store.state.knockout}">
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td v-for="(data, i) in item" :key="i" v-bind:class="[data]"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    computed: {
      tableData: {
        get() {
          return this.$store.getters.tableData
        }
      },
      moveStatus: {
        get() {
          return this.$store.getters.move
        },
        set() {
          this.$store.commit('move')
        },
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
    width: 4px;
    height: 4px;
  }

  .mario {
    position: fixed;
    bottom: 92px;
    left: 32px;
    z-index: 99;
  }
  .c1 {
    background-color: #db2900;
  }

  .c2 {
    background-color: #8a7301;
  }

  .c3 {
    background-color: #ffa33c;
  }

  .jump {
    animation: jump 1s infinite cubic-bezier(0,0,1,1);
  }
  @keyframes jump{
    0% {transform:translatey(0);}
    50% {transform:translatey(-100px);}
    100% {transform:translatey(0);}
  }
  .knockout {
    animation: knockout 2s infinite cubic-bezier(0,0,1,1);
  }
  @keyframes knockout{
    0% {transform:translatey(0);}
    30% {transform:translatey(-100px);}
    100% {transform:translatey(500px);}
  }
</style>

