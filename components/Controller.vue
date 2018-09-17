<template>
  <div>
    <button v-on:click="jump">JUMP</button>
    <button v-on:click="move">
      <span v-if="$store.state.move">STOP</span>
      <span v-else>RUN</span>
    </button>
    <!--<button v-on:click="knockout">KOCKOUT</button>-->
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      moveStatus: {
        get () { return this.$store.getters.move },
        set () { this.$store.commit('move') },
      }
    },
    methods : {
      jump: async function () {
        if (this.$store.state.jump || this.$store.state.knockout) {
          return;
        }
        let moveStatus = false;
        // 走っている場合は一旦止める
        if (this.$store.getters.move) {
          this.$store.commit('moveStatus');
          moveStatus = true;
        }
        // 走る完了を待つ
        await this.$delay(110)

        // ジャンプステータスをONへ
        this.$store.commit('jumpStatus', true);
        // 表示をジャンプに変更
        this.$store.commit('changeTableData', 'jumpData');
        // ジャンプアクション終了を待つ
        await this.$delay(1000)
        // ジャンプステータスをOFFへ
        this.$store.commit('jumpStatus', false);

        // 走っていた場合は再度走りだす
        if (moveStatus && !this.$store.getters.knockout) {
          this.$store.commit('moveStatus');
        } else if (!this.$store.getters.knockout){
          this.$store.commit('changeTableData', 'standData');
        }
      },
      move: async function () {
        if (this.$store.state.jump || this.$store.state.knockout) {
          return;
        }
        this.$store.commit('moveStatus');
      },
      // knockout: async function () {
      //   if (this.$store.state.jump) {
      //     await this.$delay(1000)
      //   } else if (this.$store.state.knockout) {
      //     return;
      //   }
      //   this.$store.commit('allReset');
      //   await this.$delay(500)
      //   this.$store.commit('changeTableData', 'knockOutData');
      //   await this.$delay(1000)
      //   this.$store.commit('knockoutStatus', true);
      //   this.$store.commit('changeTableData', 'knockOutData');
      //   await this.$delay(2000)
      //   this.$store.commit('changeTableData', 'standData');
      //   this.$store.commit('knockoutStatus', false);
      // }
    },
    watch: {
      moveStatus: async function() {
        if (this.moveStatus) {
          while (this.moveStatus) {
            this.$store.commit('changeTableData', 'move1Data');
            await this.$delay(100)
            this.$store.commit('changeTableData', 'move2Data');
            await this.$delay(100)
          }
        } else {
          await this.$delay(100)
          this.$store.commit('changeTableData', 'standData');
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
</style>

