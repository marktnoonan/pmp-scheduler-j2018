<template>
  <PersonOrVehicleList :location="location" :people-and-vehicles="peopleAndVehicles" :time="time">
    <v-card-text>
      {{location}} contains no people or vehicles at {{time}}.
    </v-card-text>
  </PersonOrVehicleList>
</template>

<script>
import PersonOrVehicleList from "./PersonOrVehicleList";
export default {
  components: { PersonOrVehicleList },
  props: ["location", "time"],
  data() {
    return {};
  },
  computed: {
    peopleAndVehicles() {
      if (
        this.$store.state.demoTimempointsForADay[this.time] &&
        this.$store.state.demoTimempointsForADay[this.time].newLocations[
          this.location.toLowerCase()
        ]
      ) {
        return {
          employees:
            this.$store.state.demoTimempointsForADay[this.time].newLocations[
              this.location.toLowerCase()
            ].employees || [],
          individuals:
            this.$store.state.demoTimempointsForADay[this.time].newLocations[
              this.location.toLowerCase()
            ].individuals || [],
          vehicles:
            this.$store.state.demoTimempointsForADay[this.time].newLocations[
              this.location.toLowerCase()
            ].vehicles || [],
          visitors: [{ name: "General Zod's Mother" }]
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
