import Vue from 'vue';
import ElementUI from 'element-ui';
import DeviseRegistrationsNewView from 'views/devise/registrations/new.vue';

Vue.use(ElementUI);

const integrationIndex = new Vue({
  el: 'DeviseRegistrationsNewView',
  render: h => h(DeviseRegistrationsNewView)
});
