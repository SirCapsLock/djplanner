<template>
  <div class="hello">
    <h1 class="mb-4 text-center">
      <span class="font-pacifico font-bold">Congratulations</span><br>
      <span>Rebecca & Enrique</span>
    </h1>
    <div class="flex justify-center">
      <ProfilePic class="h-24"></ProfilePic>
    </div>
    <div class="flex justify-center">
      <DateBox :date="eventDate"></DateBox>
    </div>
    <div>
      Your To-Do List
    </div>
  </div>
</template>

<script>
import DateBox from '@/components/modules/DateBox';

export default {
  name: 'Dashboard',
  components: { DateBox },
  data() {
    return {
      eventDate: new Date('2017-12-30 00:00'),
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
