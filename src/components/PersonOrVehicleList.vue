<template>
  <v-container grid-list-md fluid class="pt-0">
    <v-layout row wrap>
      <v-flex v-for="(category, key) in peopleAndVehicles" :key="key" xs12 sm6 md3>
        <v-card color="purple lighten-3 ">
          <v-card-title class="pa-2 text-xs-center body-2"><b>{{capitalizeFirstLetter(key)}}</b></v-card-title>
          <v-card-text class="grey lighten-2 pa-1">
            <person-or-vehicle 
              v-for="(personOrVehicle, i) in category"
              :key="i"
              class="ma-1"  
            >{{personOrVehicle.name}}</person-or-vehicle>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PersonOrVehicle from "./PersonOrVehicle";

export default {
  components: { PersonOrVehicle },
  props: ["peopleAndVehicles"],
  methods: {
    capitalizeFirstLetter(word) {
      return (
        word.split("")[0].toUpperCase() +
        word
          .split("")
          .slice(1)
          .join("")
      );
    }
  }
};
</script>

<style scoped>
</style>
