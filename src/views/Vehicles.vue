<template>
  <v-layout column align-center ma-4>
    <h1>
      Add/Remove/Edit Vehicles
    </h1>
    <VehicleTable />
    
  </v-layout>
</template>

<script>
import VehicleTable from "../components/VehicleTable";
export default {
  components: { VehicleTable }
};
</script>

<style scoped>
</style>
