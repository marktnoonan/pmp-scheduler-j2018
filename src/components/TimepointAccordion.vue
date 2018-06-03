<template>
  <v-expansion-panel focusable>
    <v-expansion-panel-content v-for="i in 10" :key="i">
      <h2 slot="header">00:00</h2>
      <v-card>
        <v-card-text class="grey lighten-3"
        >
          <location-accordion :date="date"/>
        </v-card-text>  
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationAccordion from "./LocationAccordion";

export default {
  components: { LocationAccordion },
  props: ["date"]
};
</script>

<style scoped>
</style>
