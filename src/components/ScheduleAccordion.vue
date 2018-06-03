<template>
  <v-expansion-panel focusable expand >
    <v-expansion-panel-content v-for="date in dates" :key="date">
      <h2 slot="header">{{formatDate(date)}}</h2>
      <v-card>
        <v-card-text class="grey lighten-3 pa-2"
        >
          <timepoint-accordion :date="date" :times="times"/>
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
      testword: "test",
      times: ["00:00", "08:30", "09:00", "16:00", "17:00"]
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
