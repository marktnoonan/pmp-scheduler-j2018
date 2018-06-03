<template>
  <PersonOrVehicleList :people-and-vehicles="peopleAndVehicles"/>
</template>

<script>
import PersonOrVehicleList from "./PersonOrVehicleList";
export default {
  components: { PersonOrVehicleList },
  data() {
    return {
      peopleAndVehicles: {
        employees: [{ name: "Nerando" }, { name: "Xavier" }],
        individuals: [{ name: "Kris" }, { name: "Faith" }, { name: "Rachel" }],
        vehicles: [{ name: "Carlos's Car" }, { name: "Quentin's Car" }],
        visitors: [{ name: "General Zod's Mother" }]
      }
    };
  }
};
</script>

<style scoped>
</style>
