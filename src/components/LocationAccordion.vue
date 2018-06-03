<template>
  <v-expansion-panel focusable expand>
    <v-expansion-panel-content v-for="i in 10" :key="i" lazy>
      <h2 slot="header">Location Name <span class="body-1">{{formatDate(date)}}</span></h2> 
      <location-overview />
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationOverview from "./LocationOverview";

export default {
  name: "LocationAccordion",
  components: { LocationOverview },
  props: ["date"],
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
