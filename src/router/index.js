import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dinamic from '../views/Dinamic.vue';
import NewEdit from '../views/NewStudent.vue';
import EditStudent from '../views/EditStudent.vue';



Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path:'/dinamic',
    name: "Dinamic",
    component: Dinamic
  },
  {
    path: '/newedit',
    name: "NewEdit",
    component: NewEdit
  },
  {
    path:'/editStudent',
    name: "EditStudent",
    component: EditStudent
  },  

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
