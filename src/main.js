import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ListStudents from "./ListStudents.js";
import ListHeaders from "./ListHeaders.js"
import StarRating from "vue-star-rating";

Vue.config.productionTip = false;
Vue.component('star-rating', StarRating);

let data = {
  students: ListStudents,
  headers: ListHeaders,
  class: [] ,

  addStudent(avatar,first_Name, last_Name,email,GPA){  
    var ID = this.students.length+1;
    
    this.students.push({
      id : ID,
      avatar : avatar,
      first_name: first_Name.charAt(0).toUpperCase()+first_Name.slice(1),
      last_name : last_Name.charAt(0).toUpperCase()+last_Name.slice(1),
      email :email,
      GPA : GPA,
      comments:false
    });
    
  },
  changeStudent(id,avatar,first_Name, last_Name,email,GPA, comments){
    id = id-1;
    console.log("this is a ID : "+ id);
    this.students[id].avatar = avatar;
    this.students[id].first_name = first_Name;
    this.students[id].last_name = last_Name;
    this.students[id].email = email;
    this.students[id].GPA = GPA;
    this.students[id].comments = comments;
    this.class = [];
  },
  GoTo(student){
    this.class.push(student);
  }
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')