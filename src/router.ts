import Vue from 'vue';
import Router from 'vue-router';

import Photos from '@/views/Photos.vue';
import Stared from '@/views/Stared.vue';
import Upload from '@/views/Upload.vue';
import Setting from '@/views/Setting.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      name: 'photos',
      path: '/photos',
      component: Photos,
    },
    {
      name: 'stared',
      path: '/stared',
      component: Stared,
    },
    {
      name: 'upload',
      path: '/upload',
      component: Upload,
    },
    {
      name: 'setting',
      path: '/setting',
      component: Setting,
    },
    { path: '*', redirect: '/photos' },
  ],
  mode: 'history',
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
});
