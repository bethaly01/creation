<template>
<div>
    <div class="wrapper">
        <select v-model="selected">
  <option class="options" v-for="option in this.$root.$data.headers" v-bind:key="option.value">
    {{ option.value }}
  </option>
</select>
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>

  <StudentsList :students="students" />
</div>
</template>

<script>
import StudentsList from "../components/StudentsList.vue"

export default {
  name: 'Dinamic',
  props :{
      headers : Array
  },
  components: {
    StudentsList
  },
  data() {
    return {
        selected: this.$root.$data.headers[0].value,
        searchText:'',
    }
  },
  computed: {
  students() {   
   
    if (this.selected=="First Name")
    return this.$root.$data.students.filter(student => student.first_name.toLowerCase().search(this.searchText) >= 0);
    else if (this.selected =="Last Name")
    return this.$root.$data.students.filter(student => student.last_name.toLowerCase().search(this.searchText) >= 0);
    else (this.selected == "Email")
    return this.$root.$data.students.filter(student => student.email.toLowerCase().search(this.searchText) >= 0);
   
    }
    
  },
  
}

</script>

<style scoped>

select{
  padding: 10px;
  margin-right: 16px;
  border-radius: 10px;
}
.options{
  padding: 9px;;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
  
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
  background-color: white;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
  border-radius: 0px 4px 4px 0px;
  
}
.pure-form input{
  border-radius: 0px 4px 4px 0px;
}
.pure-form {
    grid-area: none; 
    margin-left: 0px; 
}
</style>