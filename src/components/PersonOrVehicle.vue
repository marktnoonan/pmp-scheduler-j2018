<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    v-model="menu"
    class="ma-0"
    offset-overflow
    lazy
  >
    <v-chip slot="activator" small label class="pa-0 ma-0" color="white">
      <slot/>
    </v-chip>
    <v-card>
      <v-card-title class="pa-2 deep-purple lighten-5"><v-spacer/><h3>Make Change at {{time}}</h3><v-spacer/></v-card-title>
      <v-card-text class="mt-0">
        Move <b>{{name}}</b> from <b>{{location}}</b> to:
        <v-select
          :items="locations"
          label="Location"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn flat @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" flat @click="menu = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import dummyData from "../dummy-data/dummy";
export default {
  props: ["name", "location", "time"],
  data() {
    return {
      menu: false,
      message: false,
      hints: true,
      locations: dummyData.locations
    };
  }
};
</script>

<style scoped>
</style>
