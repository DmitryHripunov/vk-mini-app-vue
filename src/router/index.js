import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/pages/MainPage.vue';
import EventsPage from '@/pages/EventsPage.vue';
import ListOfWinnersPage from '@/pages/ListOfWinnersPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  { name: 'main', component: MainPage, path: '/' },
  { name: 'events', component: EventsPage, path: '/events/' },
  { name: 'winers', component: ListOfWinnersPage, path: '/winers/' },
  { name: 'notFound', component: NotFoundPage, path: '/404' },
  { path: '*', redirect: '/404' },
];

const router = new VueRouter({
  routes,
  // linkActiveClass: 'is-active',
});

export default router;
