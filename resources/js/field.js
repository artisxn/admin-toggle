import ToggleButton from 'vue-js-toggle-button'

Nova.booting((Vue, router) => {
    Vue.use(ToggleButton)
    Vue.component('index-admin-toggle', require('./components/IndexField'));
    Vue.component('detail-admin-toggle', require('./components/DetailField'));
    Vue.component('form-admin-toggle', require('./components/FormField'));
})
