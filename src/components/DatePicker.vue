<template>
  <v-dialog
    ref="dialog"
    v-model="modal"
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
      required: false
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
      this.modal = false;
    }
  }
};
</script>

<style scoped>
</style>
