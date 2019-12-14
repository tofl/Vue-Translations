// src/translation/index.js
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  en: {
    welcome: 'Welcome !',
    user: 'User profile',
    posts: 'Last posts',
  },
  fr: {
    welcome: 'Bienvenue !',
    user: 'Profil d\'utilisateur',
    posts: 'Derniers messages',
  },
};

export default new VueI18n({
  locale: navigator.language,
  fallbackLocale: 'en',
  messages,
});
