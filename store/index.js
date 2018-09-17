import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const strict = false

export const state = () => ({
  tableData: [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c2", "c3", "c3", "c2", "c3", "", "", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", ""],
    ["", "", "", "", "c2", "c2", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "", "", "", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c1", "c2", "c2", "c2", "", "", "", "", "", "", ""],
    ["", "", "", "", "c2", "c2", "c2", "c1", "c2", "c2", "c1", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c2", "c1", "c1", "c1", "c1", "c2", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "c3", "c3", "c2", "c1", "c3", "c1", "c1", "c3", "c1", "c2", "c3", "c3", "", "", ""],
    ["", "", "", "c3", "c3", "c3", "c1", "c1", "c1", "c1", "c1", "c1", "c3", "c3", "c3", "", "", ""],
    ["", "", "", "c3", "c3", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c3", "c3", "", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "", "", "c1", "c1", "c1", "", "", "", "", ""],
    ["", "", "", "", "c2", "c2", "c2", "", "", "", "", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c2", "", "", "", "", "c2", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ],
  standData: [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c2", "c3", "c3", "c2", "c3", "", "", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", ""],
    ["", "", "", "", "c2", "c2", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "", "", "", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c1", "c2", "c2", "c2", "", "", "", "", "", "", ""],
    ["", "", "", "", "c2", "c2", "c2", "c1", "c2", "c2", "c1", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c2", "c1", "c1", "c1", "c1", "c2", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "c3", "c3", "c2", "c1", "c3", "c1", "c1", "c3", "c1", "c2", "c3", "c3", "", "", ""],
    ["", "", "", "c3", "c3", "c3", "c1", "c1", "c1", "c1", "c1", "c1", "c3", "c3", "c3", "", "", ""],
    ["", "", "", "c3", "c3", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c3", "c3", "", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "", "", "c1", "c1", "c1", "", "", "", "", ""],
    ["", "", "", "", "c2", "c2", "c2", "", "", "", "", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c2", "", "", "", "", "c2", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ],
  jumpData : [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "c3", "c3", "c3", "", ""],
    ["", "", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "", "", "c3", "c3", "c3", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c3", "c3", "", ""],
    ["", "", "", "", "", "c2", "c2", "c2", "c3", "c3", "c2", "c3", "", "c2", "c2", "c2", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c2", "c2", "c2", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "c2", "", ""],
    ["", "", "", "", "c2", "c2", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "", "", "", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "c2", "", "", "", ""],
    ["", "", "c2", "c2", "c2", "c2", "c2", "c1", "c2", "c2", "c2", "c1", "c2", "", "", "", "", ""],
    ["", "c2", "c2", "c2", "c2", "c2", "c2", "c2", "c1", "c2", "c2", "c2", "c1", "", "", "c2", "", ""],
    ["c3", "c3", "c2", "c2", "c2", "c2", "c2", "c2", "c1", "c1", "c1", "c1", "c1", "", "", "c2", "", ""],
    ["c3", "c3", "c3", "", "c1", "c1", "c2", "c1", "c1", "c3", "c1", "c1", "c3", "c1", "c2", "c2", "", ""],
    ["", "c3", "", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c2", "c2", "", ""],
    ["", "", "c2", "c2", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c2", "c2", "", ""],
    ["", "c2", "c2", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "c2", "", "", "c1", "c1", "c1", "c1", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ],
  move1Data : [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c2", "c3", "c3", "c2", "c3", "", "", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", ""],
    ["", "", "", "", "c2", "c2", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "", "", "", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c2", "c2", "c1", "c2", "", "c3", "", "", "", "", ""],
    ["", "", "", "", "c3", "c2", "c2", "c2", "c2", "c2", "c2", "c3", "c3", "c3", "", "", "", ""],
    ["", "", "", "c3", "c3", "c1", "c2", "c2", "c2", "c2", "c2", "c3", "c3", "", "", "", "", ""],
    ["", "", "", "c2", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", ""],
    ["", "", "", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", ""],
    ["", "", "c2", "c2", "c1", "c1", "c1", "", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "", "c2", "", "", "", "", "c2", "c2", "c2", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "c2", "c2", "c2", "c2", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ],
  move2Data : [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "", ""],
    ["", "", "", "", "", "c2", "c2", "c2", "c3", "c3", "c2", "c3", "", "", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", "", ""],
    ["", "", "", "", "c2", "c3", "c2", "c2", "c3", "c3", "c3", "c2", "c3", "c3", "c3", "", "", ""],
    ["", "", "", "", "c2", "c2", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "", "", "", "c3", "c3", "c3", "c3", "c3", "c3", "c3", "", "", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c2", "c1", "c1", "c2", "c2", "", "", "", "", "", "", ""],
    ["", "c3", "c3", "c2", "c2", "c2", "c2", "c1", "c1", "c1", "c2", "c2", "c2", "c3", "c3", "c3", "", ""],
    ["", "c3", "c3", "c3", "", "c2", "c2", "c1", "c3", "c1", "c1", "c1", "c2", "c2", "c3", "c3", "", ""],
    ["", "c3", "c3", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "", "", "c2", "", "", ""],
    ["", "", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c2", "c2", "", "", ""],
    ["", "", "", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c1", "c2", "c2", "", "", ""],
    ["", "", "c2", "c2", "c1", "c1", "c1", "", "", "", "c1", "c1", "c1", "c2", "c2", "", "", ""],
    ["", "", "c2", "c2", "c2", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ],
  knockOutData : [
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "c1", "c1", "c1", "c1", "", "", "", "", "", "", ""],
    ["", "", "", "", "c3", "", "c1", "c1", "c1", "c1", "c1", "c1", "", "c3", "", "", "", ""],
    ["", "", "c3", "c3", "c2", "c2", "c3", "c2", "c3", "c3", "c2", "c3", "c2", "c2", "c3", "c3", "", ""],
    ["", "", "c3", "c3", "c2", "c2", "c3", "c2", "c3", "c3", "c2", "c3", "c2", "c2", "c3", "c3", "", ""],
    ["", "", "c3", "c3", "c2", "c2", "c2", "c3", "c3", "c3", "c3", "c2", "c2", "c2", "c3", "c3", "", ""],
    ["", "", "", "", "c2", "c2", "c2", "c2", "c3", "c3", "c2", "c2", "c2", "c2", "", "", "", ""],
    ["", "", "", "", "", "c2", "c3", "c2", "c2", "c2", "c2", "c3", "c2", "", "", "", "", ""],
    ["", "", "", "", "", "c2", "c3", "c3", "c3", "c3", "c3", "c3", "c2", "", "", "", "", ""],
    ["", "", "", "", "c1", "c1", "c1", "c3", "c3", "c3", "c3", "c1", "c1", "c1", "", "", "", ""],
    ["", "", "", "c2", "c2", "c1", "c1", "c2", "c2", "c2", "c2", "c1", "c1", "c2", "c2", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c1", "c1", "c2", "c2", "c1", "c1", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c1", "c3", "c1", "c1", "c3", "c1", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "c2", "c2", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c2", "c2", "c2", "", "", ""],
    ["", "", "", "", "c2", "c2", "c1", "c1", "c1", "c1", "c1", "c1", "c2", "c2", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
  ],
  jump: false,
  move: false,
  knockout: false
})

export const getters = {
  move: state => state.move,
  tableData: state => state.tableData,
  knockout: state => state.knockout,
}


export const mutations = {
  jumpStatus: function (state, val) {
    state.jump = val;
  },
  moveStatus: function (state) {
    state.move = (state.move) ? false : true;
  },
  knockoutStatus: function (state, val) {
    state.knockout = val;
  },
  allReset: function (state) {
    state.jump = false;
    state.move = false;
  },
  changeTableData: function (state, val) {
    state.tableData = state[val]
  },
  knockoutEvent: async function() {
    state.jump = false;
    state.move = false;
    await this.$delay(110)
    state.tableData = state.knockOutData
    await this.$delay(1000)
    state.knockoutStatus = true;
    await this.$delay(2000)
    state.tableData = state.standData
    state.knockoutStatus = false;
  }
}
