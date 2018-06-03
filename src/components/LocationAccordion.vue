<template>
  <v-expansion-panel focusable expand>
    <v-expansion-panel-content v-for="i in 10" :key="i" lazy value="true">
      <h2 slot="header">Location Name</h2>
      <v-card>
        <v-card-text class="grey lighten-1"
        ><person-or-vehicle 
          v-for="i in 6"
          :key="i"
        />
        </v-card-text>

      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import PersonOrVehicle from "./PersonOrVehicle";
export default {
  name: "LocationAccordion",
  components: { PersonOrVehicle },
  data() {
    return {
      testword: "test"
    };
  },
  methods: {
    formatDate(date) {
      return this.$moment(date).format("dddd MM/DD");
    }
  }
};
</script>

<style scoped>
</style>
