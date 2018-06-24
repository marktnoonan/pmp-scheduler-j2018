<template>
  <v-expansion-panel focusable expand class="elevation-0 main-expansion-panel">
    <v-expansion-panel-content v-for="date in dates" :key="date">
      <h2 slot="header"><v-icon>calendar_today</v-icon><span>{{formatDate(date)}}</span> </h2>
      <v-card>
        <v-card-text class="grey lighten-3 pa-0"
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
.main-expansion-panel {
  max-width: 900px;
}

h2 > span {
  padding-left: 1ex;
}
.icon {
  padding-bottom: 0.2em;
}
</style>
