<template>
  <v-container grid-list-md class="pt-0">
    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="i" xs3>
        <v-card color="purple lighten-3 ">
          <v-card-title>Individuals</v-card-title>
          <v-card-text class="grey lighten-2 pa-1">
            <person-or-vehicle 
              v-for="i in 3"
              :key="i"
              class="ma-1"
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import PersonOrVehicle from "./PersonOrVehicle";
export default {
  components: { PersonOrVehicle }
};
</script>

<style scoped>
</style>
