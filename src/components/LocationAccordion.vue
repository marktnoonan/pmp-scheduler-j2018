<template>
  <v-expansion-panel focusable expand>
    <v-expansion-panel-content v-for="location in locations" :key="location" lazy>
      <h4 slot="header">{{location}}</h4> 
      
      <location-overview />
      <span class="body-1 time-reminder">{{`${time} - ${formatDate(date)}`}}</span>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationOverview from "./LocationOverview";

export default {
  name: "LocationAccordion",
  components: { LocationOverview },
  props: ["date", "time", "locations"],
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
.time-reminder {
  color: grey;
  display: block;
  text-align: center;
  padding: 1em;
}
</style>
