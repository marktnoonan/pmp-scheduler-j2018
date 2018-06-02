<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    :return-value.sync="date"
    persistent
    lazy
    full-width
    width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="date"
      :label="label"
      prepend-icon="event"
      readonly
    />
    <v-date-picker v-model="date" :min="min" scrollable>
      <v-spacer/>
      <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
      <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: {
    label: {
      required: false,
      default: "Date"
    },
    min: {
      required: false,
      default: "2018-01-01"
    }
  },
  data() {
    return {
      date: null,
      modal: false
    };
  },
  watch: {
    date(val) {
      this.$emit("update", val);
    }
  }
};
</script>

<style scoped>
</style>
