<template>
  <v-expansion-panel expand focusable class="elevation-0">
    <v-flex class="ma-2 text-xs-right">
      <v-switch
        v-model="expandThisDay"
        color="purple"
        label="Expand All"
        class="text-xs-right"
      />
    </v-flex>
    <v-expansion-panel-content v-for="time in times" :key="date+time" :value="expandThisDay">
      <h3 slot="header">{{time}}</h3>
      <v-card>
        <v-card-text class="grey lighten-3 pa-2"
        >
          <location-accordion :date="date" :locations="locations" :time="time" :expand-this-day="expandThisDay"/>
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
      ],
      expandThisDay: false
    };
  }
};
</script>

<style scoped>
.switch {
  display: block;
}
</style>
