<template>
  <v-layout column align-center ma-4>
    <h1>
      Add/Remove/Edit Employees
    </h1>
    <EmployeeTable />
    
  </v-layout>
</template>

<script>
import EmployeeTable from "../components/EmployeeTable";
export default {
  components: { EmployeeTable }
};
</script>

<style scoped>
</style>
