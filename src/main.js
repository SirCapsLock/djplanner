/**
 * For Cricket
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// register global components
const requireComponent = require.context(
  './components/base',
  true, // look in subfolders,
);

requireComponent.keys().forEach((fileName) => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase naem of component
  const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')));

  Vue.component(
    componentName,
    componentConfig.default || componentConfig,
  );
});


Vue.use(require('vue-moment'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
