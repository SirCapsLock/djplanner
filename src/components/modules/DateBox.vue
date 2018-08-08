<template>
  <div class="p-8">
    <div class="flex flex-col items-center">
      <div class="font-semibold mb-2">
        {{ date | moment("dddd, MMMM Do YYYY") }}
      </div>
      <div class="text-sm italic">
        {{ daysTill }} days to go!
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: {
    date: {
      type: Date,
    },
  },
  computed: {
    daysTill() {
      const today = moment.now();
      const eventDate = moment(this.date);
      return eventDate.diff(today, 'days');
    },
  },
};
</script>

<style scoped>

</style>
