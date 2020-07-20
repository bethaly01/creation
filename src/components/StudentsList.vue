<template>
<div class="wrapper">
  <div class="students">
    <div class="student" v-for="student in students" :key="student.id">
      <div class="top">
        <h1>ID: {{student.id}}</h1>
      </div>
      <div class="image">
        <img :src="student.avatar">
      </div>
      <div class="info">
        <h2>{{student.first_name}}</h2>
        <h2>{{student.last_name}}</h2>
        <p>{{student.email}}</p>
        <div class="gpa">
           <star-rating 
            v-model="student.GPA" 
            active-color="#23282d"
            v-bind:max-rating="4" 
            :show-rating="false"
            read-only="true"
            :fixed-points="2"
            :increment="0.01"
            >
           </star-rating>
          <button class="auto" @click="GoTo(student)">Edit Student</button>
        </div>
        
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'StudentsList',
  props: {
    students: Array
  },
  methods:{
    setRating: function(rating){
        this.rating = rating;
    },
    GoTo(student){
      this.$root.$data.GoTo(student);
      this.$router.push("/editStudent")
    }
  }
  
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.students {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  
}

.student {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
  background-color: #e3a72f;
  border-radius: 100px 10px 0px 0px;
}
img{
  border-radius: 100px 10px 0px 0px;
}
.student img {
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.student .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.top {
  color: white;
  position: absolute;
  text-align: end;
  margin-left: 130px;
}

.top h1 {
  font-size: 25px;
}

/*
.gpa {
  display: flex;
}*/

button {
  height: 50px;
  background: #ee5d0d;
  color: white;
  border: none;
  font-size: 24px;
}
button :hover{
   background: #a3400b;
}

.auto {
  margin-left: auto;
  width: 100%;
}
.info h2{
  margin: 3px;
  text-align: center;
  color:#57697b;
}
.info p{
  text-align: center;
  color:#57697b;
  word-wrap: break-word;
}
</style>