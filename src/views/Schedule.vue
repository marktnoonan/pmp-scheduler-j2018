<template>
  <v-layout column align-center ma-4>
    <h1>
      Schedule
    </h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4>
        <DatePicker label="Schedule Start Date" @update="updateStartDate"/>  
      </v-flex>
      <v-flex>
        <DatePicker :min="startDate" label="Schedule End Date" @update="updateEndDate"/>
      </v-flex>
    </v-layout>
    <ScheduleAccordion />
  </v-layout>
</template>

<script>
import ScheduleAccordion from "../components/ScheduleAccordion";
import DatePicker from "../components/DatePicker";

export default {
  components: { ScheduleAccordion, DatePicker },
  data() {
    return {
      startDate: "",
      endDate: ""
    };
  },
  methods: {
    updateStartDate(payload) {
      this.startDate = payload;
    },
    updateEndDate(payload) {
      this.endDate = payload;
    }
  }
};
</script>

<style scoped>
</style>
