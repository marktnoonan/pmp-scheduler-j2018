<template>
  <v-expansion-panel expand focusable class="elevation-0 pa-0">
    <v-btn flat @click.stop="makeChangeDialog = true">Make changes to this day</v-btn>
    <v-btn flat @click.stop="expandThisDay = !expandThisDay">Expand/Collapse all times for this day</v-btn>

    <v-expansion-panel-content v-for="time in times" :key="date+time" :value="expandThisDay" 
                               class="deep-purple lighten-4 pa-1 mb-1">
      <h3 slot="header"><v-icon>access_time</v-icon><span>{{time}}</span></h3>
      <v-card>
        <v-card-text class="pa-1 pt-0 purple lighten-5"
        >
          <location-accordion :date="date" :locations="locations" :time="time" :expand-this-day="expandThisDay"/>
        </v-card-text>  
      </v-card>
    </v-expansion-panel-content>


    <v-dialog 
      v-model="makeChangeDialog" 
      max-width="500px"
      persistent
      no-click-animation
    >
      <v-card>
        <v-card-title>
          <h2>Make Changes on {{formatDate(date)}}</h2>
        </v-card-title>
        <v-card-text>

          <b>At:</b> <v-combobox
            :items="times"
            label="Time"
            autofocus
          />
          <b>Move the following people and vehicles:</b>
          <v-combobox
            :items="individuals"
            label="Individuals"
            multiple
            small-chips
          />
          <v-combobox
            :items="employees"
            label="Employees"
            small-chips
            multiple
          />
          <v-combobox
            :items="vehicles"
            label="Vehicles"
            small-chips
            multiple
          /><br>
          <b>To this location:</b>
          <v-select
            :items="locations"
            label="Location"
          
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="secondary" flat @click.stop="makeChangeDialog=false">Cancel</v-btn>
          <v-btn color="primary" flat @click.stop="makeChangeDialog=false">Confirm Changes</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-expansion-panel>
</template>

<script>
import LocationAccordion from "./LocationAccordion";
import dummyData from "../dummy-data/dummy";

export default {
  components: { LocationAccordion },
  props: ["date", "times"],
  data() {
    return {
      locations: dummyData.locations,
      individuals: dummyData.individuals,
      employees: dummyData.employees,
      vehicles: Object.keys(dummyData.vehicles),
      expandThisDay: false,
      makeChangeDialog: false
    };
  },
  methods: {
    formatDate(date) {
      return this.$moment(date).format("dddd MM/DD");
    }
  }
};
</script>

<style scoped>
.switch {
  display: block;
}

h3 > span {
  padding-left: 1ex;
  display: inline-block;
}

.icon {
  vertical-align: bottom;
}
</style>
