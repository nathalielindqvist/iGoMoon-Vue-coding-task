Vue.component('info-text', {
  props: ['title', 'text'],
  template: `
  <div id="info-text">
    <h3 class="info-text-title" v-html="title"></h3>
    <div class="info-text-main" v-html="text"></div>
  </div>`

});

new Vue({
  el: '#info-text-container'
});