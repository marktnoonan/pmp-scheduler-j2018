import Vue from "vue";
import Vuex from "vuex";
import dummyData from "./dummy-data/dummy";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    demoTimempointsForADay: {
      "00:00": {
        newLocations: {
          unscheduled: {
            employees: dummyData.realisticEmployees,
            individuals: dummyData.realisticIndividuals,
            vehicles: dummyData.realisticVehicles
          }
        }
      }
    }
  },
  mutations: {},
  actions: {}
});
