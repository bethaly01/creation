<template>
    <div class="MainCenter">
        <h2 class="header">Create a new student</h2>
        <div class="center" v-if="add" >
            <form  class="pure-form pure-form-aligned" @submit.prevent="addStudent">
                <fieldset>
                    <div class="pure-control-group">
                        <label style="text-align:center;">Picture</label>
                        <input placeholder="Enter a URL for picture" v-model="avatar"/>
                    </div>
                    <div class="pure-control-group">
                        <label style="text-align:center;">First Name</label>
                        <input v-model="firstName"/>
                        <span class="pure-form-message-inline"></span>
                    </div>
                    <div class="pure-control-group">
                        <label style="text-align:center;">Last Name</label>
                        <input  v-model="lastName"  />
                    </div>
                    <div class="pure-control-group">
                        <label style="text-align:center;">Email </label>
                        <input v-model="email"/>
                    </div>
                    <div class="pure-control-group">
                        <label style="text-align:center;">GPA</label>
                        <input  v-model="GPA" />
                    </div>
                    <div class="pure-controls" style="margin:0px;">
                        <button type="submit" class="pure-button pure-button-primary">Submit</button>
                    </div>
                </fieldset>
            </form>
            <div class="image-div">
                <img class="avatar-img" v-bind:src="avatar">
            </div>
        </div>

        <div v-else class="else">
                <p>The student has been added in the list</p>                
        </div>
    </div>
</template>

<script>
export default {
    data (){
        return{
            avatar:'',
            firstName: '',
            lastName: '',
            email: '',
            GPA: '',

            add: true
        }
    },
    methods:{
        toggleForm() {
      this.add = !this.add;
    },
        addStudent(){
            this.$root.$data.addStudent(this.avatar,this.firstName,this.lastName,this.email,this.GPA);
            this.add=false;
        },  
    }
        
}
</script>

<style>
.header{
    background-color: #e89364;
   border-radius: 10px;
    width: 50%;
    margin-left: 25%;
    padding: 10px;
}
.else{
    background-color: #e1cb57;
    opacity: 0.90;
    width: 50%;
    margin-left: 25%;
    padding: 10px;
    border-radius:  10px;
    }
.else a{
    color:#797776;
}
fieldset{
    opacity: 0.90;
    background-color: #e1cb57;
    padding-left: 24px;
    padding-right: 24px;
    border-radius: 20px;
}
.avatar-img{
    width: 210px;
    margin-top: 15%;
}
.MainCenter{
    text-align: center;
}
.center{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 5px;
    grid-template-areas: "none brand side";
    margin-bottom: 10px;
}
.pure-form{
    grid-area: brand;
    margin-left: 35px;
}
.image-div{
    grid-area: side;
}
.pure-control-group {
    text-align: center;
}
.pure-controls {
    margin: 0px;
}
.pure-button-primary{
    background-color: #4c7998;
}
label{
    font-size: 18px;
    margin-bottom: 4px;
}

</style>