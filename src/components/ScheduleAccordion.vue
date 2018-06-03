<template>
  <v-expansion-panel focusable>
    <v-expansion-panel-content v-for="(date,i) in dates" :key="i">
      <div slot="header">{{date}}</div>
      <v-card>
        <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
        <v-card-text class="grey lighten-3">{{testword}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "ScheduleAccordion",
  props: {
    dates: {
      required: true
    }
  },
  data() {
    return {
      testword: "test"
    };
  }
};
</script>

<style scoped>
</style>
