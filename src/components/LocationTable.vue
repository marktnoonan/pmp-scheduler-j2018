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
        <td>{{props.item.manager}}</td>
        <td>{{props.item.type}}</td>
        <td>{{props.item.residents}}</td>
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
                <v-text-field v-model="editedItem.manager" label="Manager"/>	
              </v-flex>	
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.type" label="Type"/>	
              </v-flex>	
              <v-flex xs12 sm6 md4>
                <v-text-field v-model="editedItem.residents" label="Residents"/>	
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
      formSubject: "Location",
      editedIndex: -1,
      editedItem: {
        name: "",
        manager: "",
        type: "",
        residents: ""
      },
      employees: [],
      headers: [
        {
          text: "Location",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Manager",
          sortable: false,
          value: "manager"
        },
        {
          text: "Type",
          sortable: false,
          value: "type"
        },
        {
          text: "Residents",
          sortable: false,
          value: "residents"
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
          name: "North Cress",
          manager: "Denise",
          type: "CLS",
          residents: "Some people"
        },
        {
          name: "Galen Goal",
          manager: "Mo",
          type: "CAG",
          residents: "Some other people"
        },
        {
          name: "Roma Lye",
          manager: "Denise",
          seats: "CLS",
          residents: "Some other other people"
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
