<template>
  <v-layout column align-center ma-4>
    <h1>
      Add/Remove/Edit Managers
    </h1>
    <ManagerTable />
    
  </v-layout>
</template>

<script>
import ManagerTable from "../components/ManagerTable";
export default {
  components: { ManagerTable }
};
</script>

<style scoped>
</style>
