import { createApp } from 'vue'
import App from './App.vue'
import VeeValidate from "vee-validate";
import { alpha, required } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

defineRule('required', required);
defineRule('alpha', alpha);

createApp(App).use(VeeValidate);
createApp(App).mount('#app')
