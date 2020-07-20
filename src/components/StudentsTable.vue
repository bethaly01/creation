<template>
  <div class="Students">
    <table id="secondTable">
  <thead>
    <tr>
    <th @click="SortTable('id')" style="border-radius: 16px 0px 0px 0px;">ID <i>&#8595;</i></th>
    <th></th>
    <th @click="SortTable('first_name')">First Name  <i>&#8595;</i></th>
    <th @click="SortTable('last_name')">Last Name  <i>&#8595;</i></th>
    <th @click="SortTable('email')">Email  <i>&#8595;</i></th>
    <th @click="SortTable('GPA')" style="border-radius: 0px 16px 0px 0px;">GPA  <i>&#8595;</i></th>
    
    </tr>
  </thead>
  <tbody>
    <tr v-for="(value,index) in students" :key=index>
        <td  @click="GoTo(value)" v-for="(col,index) in students[0]" :key=index>
        <div v-if="index != 'avatar'"> 
          <p>{{value[index]}}</p>      
        </div>
         
        </td>
    </tr>
  </tbody>
</table>
  </div>
  
</template>

<script>
export default {
  name: 'StudentsTable',
  props: {
    students: Array,
   
  },
  methods:{
    SortTable(name){
      this.students.sort(function(a, b) {
        if (a[name] > b[name]) {
          return 1;
        } else if (a[name] < b[name]) {
          return  -1;
        }
        return 0;
      })
    },
    GoTo(student){
      
      this.$root.$data.GoTo(student);
      this.$router.push("/editStudent")
      //this.$root.class.push(this.$root.$data.changeStudent(this.$root.class[0].id,this.avatar,this.firstName,this.lastName,this.email,this.GPA,this.comments);
    }
  }
}

</script>
<style scoped>
.Students{

  opacity: 0.75;
}
#secondTable{
  text-align: center;
  margin: auto;
  width: 60%;
}
th {
  background-color: #ee5d0d;
  color: white;
}
tr:nth-child(even) {background-color: #dad5a3;}
tr:nth-child(odd) {background-color: #e9e6c3;}
tr:hover {background-color: #e1cb57;}
th, td {
  padding: 12px;
}
tbody{
      border-left: 1px solid #f2921d;
    border-right: 1px solid #f2921d;
}


</style>
