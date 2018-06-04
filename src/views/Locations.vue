<template>
  <v-layout column align-center ma-4>
    <h1>
      Add/Remove/Edit Locations
    </h1>
    <LocationTable />
    
  </v-layout>
</template>

<script>
import LocationTable from "../components/LocationTable";
export default {
  components: { LocationTable }
};
</script>

<style scoped>
</style>
