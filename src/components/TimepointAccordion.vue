<template>
  <v-expansion-panel expand focusable>
    <v-expansion-panel-content v-for="time in times" :key="date+time">
      <h3 slot="header">{{time}}</h3>
      <v-card class="">
        <v-card-text class="grey lighten-3 pa-2"
        >
          <location-accordion :date="date" :locations="locations" :time="time"/>
        </v-card-text>  
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationAccordion from "./LocationAccordion";

export default {
  components: { LocationAccordion },
  props: ["date", "times"],
  data() {
    return {
      locations: [
        "Atlanta Zoo",
        "World Of Coke",
        "Stone Mountain",
        "The Varsity",
        "The Fox Theatre"
      ]
    };
  }
};
</script>

<style scoped>
</style>
