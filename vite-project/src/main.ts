import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.ts'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'zone.js/dist/zone';
import microApps from "./micro-apps";
import { globalState } from './globalState'

createApp(App).use(router).use(Antd).mount('#qiankun')

microApps.register()
microApps.start()
globalState()
