<template>
<div>
  <StudentsTable :students="students" />
</div>
</template>

<script>
import StudentsTable from "../components/StudentsTable.vue"
export default {
  name: 'Home',
  components: {
    StudentsTable
  },
  data() {
    return {
    }
  },
  computed: {
    students() {
      return this.$root.$data.students;
    }
  },
}
</script>