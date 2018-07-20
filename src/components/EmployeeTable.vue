<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="employees"
      hide-actions
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{props.item.uid}}</td>
        <td>{{props.item.name}}</td>
        <td>{{props.item.email}}</td>
        <td>{{props.item.defaultSchedule}}</td>
        <td>{{props.item.availability}}</td>
        <td>{{props.item.drivesForPmp ? "yes" : "no"}}</td>
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
          <span class="headline">{{formTitle}} {{editedItem.uid ? `(ID: ${editedItem.uid})` : ""}}</span>
        </v-card-title>
        <v-card-text>
          <v-text-field v-model="editedItem.name" label="Name"/>	
          <v-text-field v-model="editedItem.email" label="Email"/>	
          <v-text-field v-model="editedItem.defaultSchedule" label="Default Schedule"/>	
          <v-text-field v-model="editedItem.availability" label="Availability"/>
          <v-checkbox v-model="editedItem.drivesForPmp" label="Drives for PMP"/>	
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
import dummyData from "../dummy-data/dummy";
export default {
  data() {
    return {
      dialog: false,
      formSubject: "Employee",
      editedIndex: -1,
      editedItem: {
        name: "",
        email: "",
        defaultSchedule: "",
        availability: "",
        drivesForPmp: false
      },
      employees: [],
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "uid"
        },
        {
          text: "Name",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Email Address",
          sortable: false,
          value: "email"
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
        },
        {
          text: "Drives for PMP",
          sortable: false,
          value: "drivesForPmp"
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
      this.employees = dummyData.realisticEmployees;
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
        this.editedItem.uid = "999";
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
