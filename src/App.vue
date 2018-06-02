<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      persistent
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          value="true"
        >
          <router-link v-if="item.route" :to="item.route">
            <v-list-tile-action>
              <v-icon v-html="item.icon"/>
            </v-list-tile-action>
            <v-list-tile-content>  
              <v-list-tile-title v-text="item.title"/>
            </v-list-tile-content>
          </router-link>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app 
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "home",
          title: "Home",
          route: "/"
        },
        {
          icon: "date_range",
          title: "Schedule",
          route: "/schedule"
        },
        {
          icon: "person",
          title: "Employees",
          route: "/about"
        },
        {
          icon: "person",
          title: "Individuals",
          route: "/about"
        },
        {
          icon: "person",
          title: "Managers",
          route: "/about"
        },
        {
          icon: "help",
          title: "Vehicles",
          route: "/about"
        },
        {
          icon: "directions_car",
          title: "Locations",
          route: "/about"
        },
        {
          icon: "help",
          title: "Help",
          route: "/about"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style>
a {
  text-decoration: none;
  display: inline-flex;
}
</style>
