<template>
  <v-menu
    :close-on-content-click="false"
    :nudge-width="200"
    v-model="menu"
    class="ma-0"
    offset-overflow
    lazy
  >
    <v-chip slot="activator" small class="pa-0 ma-0 elevation-1" color="white">
      Person's Name
    </v-chip>
    <v-card>
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="message" color="purple"/>
          </v-list-tile-action>
          <v-list-tile-title>Enable messages</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-switch v-model="hints" color="purple"/>
          </v-list-tile-action>
          <v-list-tile-title>Enable hints</v-list-tile-title>
        </v-list-tile>
      </v-list>
      <v-card-actions>
        <v-spacer/>
        <v-btn flat @click="menu = false">Cancel</v-btn>
        <v-btn color="primary" flat @click="menu = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      message: false,
      hints: true
    };
  }
};
</script>

<style scoped>
</style>
