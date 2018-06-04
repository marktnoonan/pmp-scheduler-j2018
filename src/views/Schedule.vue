<template>
  <v-layout column align-center ma-4>
    <h1>
      Schedule
    </h1>
    <v-layout row wrap class="mb-3" justify-space-between>
      <v-flex xs12 sm6>
        <DatePicker label="Schedule Start Date" @update="updateStartDate"/>  
      </v-flex>
      <!-- <v-flex xs0 sm2/> -->
      <v-flex xs12 sm6>
        <DatePicker :min="startDate" :max="twoWeeksFromStart" label="Schedule End Date" @update="updateEndDate"/>
      </v-flex>
    </v-layout>
    <ScheduleAccordion :dates="daysInSchedule"/>
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
      endDate: "",
      today: new this.$moment().format("YYYY-MM-DD")
    };
  },
  computed: {
    startMoment() {
      if (this.startDate) {
        return new this.$moment(this.startDate);
      }
    },
    endMoment() {
      if (this.endDate) {
        return new this.$moment(this.endDate);
      }
    },
    daysInSchedule() {
      if (this.startMoment && this.endMoment) {
        return this.fillInDays(this.startMoment, this.endMoment);
      } else {
        return [];
      }
    },
    twoWeeksFromStart() {
      if (this.startMoment) {
        return this.startMoment
          .clone()
          .add(2, "weeks")
          .format("YYYY-MM-DD");
      }
    }
  },
  methods: {
    updateStartDate(payload) {
      this.startDate = payload;
    },
    updateEndDate(payload) {
      this.endDate = payload;
    },
    fillInDays(start, end) {
      let firstMoment = start.clone();
      let days = [firstMoment.format("YYYY-MM-DD")];
      let lastMoment = end;
      do {
        days.push(firstMoment.add(1, "days").format("YYYY-MM-DD"));
      } while (firstMoment.isBefore(lastMoment));
      return days;
    }
  }
};
</script>

<style scoped>
</style>
