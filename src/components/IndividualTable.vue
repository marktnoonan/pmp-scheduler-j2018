<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="employees"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{props.item.name}}</td>
        <td>{{props.item.home}}</td>
        <td>{{props.item.defaultSchedule}}</td>
        <td>{{props.item.availability}}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0" @click="editItem(props.item)">
            <v-icon>edit</v-icon>
          </v-btn>
          <v-btn icon class="mx-0" @click="deleteItem(props.item)">
            <v-icon>delete</v-icon>
          </v-btn>
        </td>
      </template>
      <template slot="no-data">
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="500px">
      <v-btn slot="activator" color="primary" dark class="mb-2">
        Add {{formSubject}}
      </v-btn>
      <v-card>
        <v-card-title>
          <span class="headline">{{formTitle}}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.name" label="Name"/>	
              </v-flex>	
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.home" label="Email"/>	
              </v-flex>	
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.defaultSchedule" label="Default Schedule"/>	
              </v-flex>	
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.availability" label="Availability"/>	
              </v-flex>	
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>					
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      formSubject: "Individual",
      editedIndex: -1,
      editedItem: {
        name: "",
        home: "",
        defaultSchedule: "",
        availability: ""
      },
      employees: [],
      headers: [
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Home",
          sortable: false,
          value: "home"
        },
        {
          text: "Default Schedule",
          sortable: false,
          value: "defaultSchedule"
        },
        {
          text: "Availability",
          sortable: false,
          value: "availability"
        }
      ]
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? `Add ${this.formSubject}`
        : `Edit ${this.formSubject}`;
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.employees = [
        {
          name: "Linda",
          defaultSchedule: "none",
          availability: "none",
          home: "North Cress"
        },
        {
          name: "Jessie",
          home: "Galen Goal",
          defaultSchedule: "none",
          availability: "none"
        },
        {
          name: "Mike",
          home: "Galen Goal",
          defaultSchedule: "none",
          availability: "none"
        }
      ];
    },
    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.employees[this.editedIndex], this.editedItem);
      } else {
        this.employees.push(this.editedItem);
      }
      this.close();
    },
    editItem(item) {
      this.editedIndex = this.employees.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      const index = this.employees.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.employees.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>
