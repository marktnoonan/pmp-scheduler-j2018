<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
    full-width
    width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="formattedDate"
      :label="label"
      prepend-icon="event"
      readonly
    />
    <v-date-picker v-model="date" :min="min" :max="max" no-title scrollable first-day-of-week="1"/>
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
    },
    max: {
      required: false,
      default: null
    }
  },
  data() {
    return {
      date: null,
      modal: false,
      formattedDate: null
    };
  },
  watch: {
    date(val) {
      this.modal = false;
      this.willClose = true;
      this.$emit("update", val);
      this.formattedDate = this.formatDate(val);
    }
  },
  methods: {
    formatDate(date) {
      return this.$moment(date).format("MM/DD/YYYY");
    }
  }
};
</script>

<style scoped>
</style>
