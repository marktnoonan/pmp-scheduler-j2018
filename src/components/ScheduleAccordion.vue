<template>
  <v-expansion-panel focusable>
    <v-expansion-panel-content v-for="date in dates" :key="date">
      <h2 slot="header">{{formatDate(date)}}</h2>
      <v-card>
        <v-card-text class="grey lighten-3"
        >
          <timepoint-accordion :date="date" />
        </v-card-text>  
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationAccordion from "./LocationAccordion";
import TimepointAccordion from "./TimepointAccordion";

export default {
  name: "ScheduleAccordion",
  components: { LocationAccordion, TimepointAccordion },
  props: {
    dates: {
      required: true
    }
  },
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
