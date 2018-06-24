<template>
  <v-expansion-panel focusable expand class="elevation-0">
    <v-expansion-panel-content 
      v-for="location in locations" 
      :key="location" 
      :value="expandThisTime" 
      class="mb-2" 
      lazy 
    >
      <!-- <span class="body-2 time-reminder">{{`${time} - ${formatDate(date)}`}}</span> -->
      <h4 slot="header" class="subheading subheading-location"><v-icon>location_on</v-icon> <span>{{location}}</span></h4> 
      <location-overview class="pt-2"/>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import LocationOverview from "./LocationOverview";

export default {
  name: "LocationAccordion",
  components: { LocationOverview },
  props: ["date", "time", "locations", "expandThisDay"],
  data() {
    return {
      expandThisTime: false
    };
  },
  watch: {
    expandThisDay() {
      // this delay is just a away to avoid triggering a whole lot of renders at once...
      // it generates a delay in ms based on the timepoint with a little multiplier to spread things out a little further.
      // it's a little hacky but the performance feels much better.
      if (this.expandThisDay) {
        const expandDelay = parseInt(this.time.split(":").join("")) * 1.4;
        const vm = this;
        setTimeout(function() {
          vm.expandThisTime = true;
        }, expandDelay);
      } else {
        this.expandThisTime = false;
      }
    }
  },
  methods: {
    formatDate(date) {
      return this.$moment(date).format("dddd MM/DD");
    }
  }
};
</script>

<style>
.time-reminder {
  color: rgba(0, 0, 0, 0.75);
  display: block;
  text-align: center;
  padding: 0.5em;
  transform: translateY(-40px);
  height: 0px;
  overflow: initial;
  pointer-events: none;
}

h4 > span {
  padding-left: 1ex;
}

.icon {
  vertical-align: bottom;
}
</style>
