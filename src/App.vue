<template>
  <div id="app">
    <div id="menu">
    <div id="brand">
      <router-link to="/">
       <h2>CS CLASS 260</h2>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/dinamic">
        <div class="menu-item browse">
           <p>Dinamic Table</p>
        </div>
      </router-link>
      <router-link to="/newedit">
        <div class="menu-item">
          <p>Add Student</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}


#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  font-family: 'Lobster';
  font-size: 22px;
  margin:5px;
  
background-color: white;
    border-radius: 50%;
    width: 300px;
    /* text-align: center; */
    margin-left: 15%;
}
#brand a{
  color:black;
  text-decoration: none;
}
 #brand h2{
  margin: 16px;
}
#brand img {
  height: 200px;
}

#side {
  grid-area: side;
  display: flex;
  
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  background-color: #4c7998;
    border-radius: 5px 20px 5px;
    margin: 10px;
    padding: 10px;
    text-align: center;
    font-size: medium;
}
a {
  text-decoration: none;
  
}
.menu-item :hover{
padding: 1px;
}
.menu-item p {
  margin: 0px;
  text-decoration: none;
    color: rgb(245, 238, 225);
    
}

.browse {
  margin: 10px;
}
</style>