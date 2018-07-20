<template>
  <PersonOrVehicleList :location="location" :people-and-vehicles="peopleAndVehicles"/>
</template>

<script>
import PersonOrVehicleList from "./PersonOrVehicleList";
import dummyData from "../dummy-data/dummy";
export default {
  components: { PersonOrVehicleList },
  props: ["location"],
  data() {
    return {
      peopleAndVehicles: {
        employees: [{ name: "Nerando" }, { name: "Xavier" }],
        individuals: [{ name: "Kris" }, { name: "Faith" }, { name: "Rachel" }],
        vehicles: dummyData.realisticVehicles,
        visitors: [{ name: "General Zod's Mother" }]
      }
    };
  }
};
</script>

<style scoped>
</style>
