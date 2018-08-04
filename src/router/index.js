import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/screens/Dashboard';
import Music from '@/components/screens/Music';
import Timeline from '@/components/screens/Timeline';
import BridalParty from '@/components/screens/BridalParty';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/music',
      name: 'Music',
      component: Music,
    },
    {
      path: '/timeline',
      name: 'Timeline',
      component: Timeline,
    },
    {
      path: '/bridal-party',
      name: 'Bridal Party',
      component: BridalParty,
    },
  ],
});
