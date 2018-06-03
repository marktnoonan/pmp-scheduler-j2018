<template>
  <v-expansion-panel focusable expand class="elevation-0">
    <v-expansion-panel-content v-for="location in locations" :key="location" :value="expandThisDay" class="location-panel mb-2 elevation-1" lazy >
      <span class="body-2 time-reminder">{{`${time} - ${formatDate(date)}`}}</span>
      <h4 slot="header" class="subheading subheading-location">{{location}}</h4> 
      <location-overview/>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationOverview from "./LocationOverview";

export default {
  name: "LocationAccordion",
  components: { LocationOverview },
  props: ["date", "time", "locations", "expandThisDay"],
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

<style>
.time-reminder {
  color: rgba(0, 0, 0, 0.75);
  display: block;
  text-align: center;
  padding: 0.5em;
  transform: translateY(-40px);
  height: 0px;
  overflow: initial;
  pointer-events: none;
}
.location-panel .expansion-panel__header {
  background-color: #fdffb7;
}
</style>
