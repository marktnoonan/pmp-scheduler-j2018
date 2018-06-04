<template>
  <v-layout column align-center ma-4>
    <h1>
      Add/Remove/Edit Individuals
    </h1>
    <IndividualTable />
    
  </v-layout>
</template>

<script>
import IndividualTable from "../components/IndividualTable";
export default {
  components: { IndividualTable }
};
</script>

<style scoped>
</style>
