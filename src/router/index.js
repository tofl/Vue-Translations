import Vue from 'vue';
import VueRouter from 'vue-router';
import i18n from '../translations';

import Home from '../views/Home.vue';
import User from '../views/User.vue';
import Posts from '../views/Posts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'lang',
  },
  {
    path: '/:lang',
    name: 'lang',
    component: Home,
    children: [
      { path: 'user', name: 'user', component: User },
      { path: 'posts', name: 'posts', component: Posts },
    ],
    beforeEnter: (to, from, next) => {
      const locale = to.params.lang; // Retrieve the current locale set in the URL

      // Check if the locale the user is trying to access is authorised.
      // In a larger application that supports lots of languages, you may want to store
      // all the locales in a separate array
      if (!['en', 'fr'].includes(locale)) {
        return next(i18n.locale);
      }

      // Changing the language from the URl (either manually or with a link) is possible this way
      i18n.locale = locale;
      return next();
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
