<template>
  <div class="timer">
    <div>TIME</div>
    <div>
      {{ formatTime }}
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ]
      }
    },
    data() {
      return {
        sec: 100,
        timerOn: true,
        timerObj: null,
      }
    },
    created: function() {
      let self = this;
      this.timerObj = setInterval(function() {self.count()}, 1000)
      this.timerOn = true; //timerがOFFであることを状態として保持
    },
    methods: {
      count: function() {
        if (this.sec > 0) {
          this.sec --;
        } else if(this.sec <= 0) {
          this.complete();
        }
      },
      start: function() {
        let self = this;
        this.timerObj = setInterval(function() {self.count()}, 1000)
        this.timerOn = true; //timerがOFFであることを状態として保持
      },
      complete: function() {
        clearInterval(this.timerObj)
      }
    },
    computed: {
      formatTime: function() {
        return this.sec.toString()
      }
    },
    watch: {
      sec: async　function() {
        if (this.sec === 0) {
          if (this.$store.state.jump) {
            await this.$delay(1500)
          } else if (this.$store.state.knockout) {
            return;
          }
          this.$store.commit('allReset');
          await this.$delay(500)
          this.$store.commit('changeTableData', 'knockOutData');
          await this.$delay(1000)
          this.$store.commit('knockoutStatus', true);
          this.$store.commit('changeTableData', 'knockOutData');
          await this.$delay(2000)
          this.$store.commit('changeTableData', 'standData');
          this.$store.commit('knockoutStatus', false);
          this.sec = 100;
          this.start();
        }
      }
    }
  }
</script>
<style lang='scss' scoped>
  @font-face {
    font-family: 'MyFont';
    src: url("/font/emulogic.ttf");
  }
  .timer {
    position: fixed;
    top: 24px;
    right: 80px;
    font-family: MyFont;
    color: #fff;
    font-size: 24px;
    text-align: right;
  }
</style>

