import { createApp } from 'vue'
import Antd from 'ant-design-vue/es';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import './registerServiceWorker'
import router from './router'
import * as Icons from '@ant-design/icons-vue'
import vueHashCalendar from 'vue3-hash-calendar'
import 'vue3-hash-calendar/es/index.css'
import { nextTick } from "@vue/runtime-core"


// 创建对象
const app = createApp(App)
// 使用并挂载
app.use(router).use(Antd).use(vueHashCalendar).mount('#app')

// 必须使用 nextTick，不然会有加载顺序问题，导致绑定失败
nextTick(() => {
  // 配置全局对象
  app.config.globalProperties.$icons = Icons
  // Antd 注入全部图标（这样注入之后，就可以全局直接使用 icon 组件，不需要每个页面去引入了）
  for (const key in Icons) { app.component(key, Icons[key]) }
})



let deferredPrompt: any = null;

window.addEventListener('beforeinstallprompt', (event) => {
  // 阻止默认的应用安装提示
  event.preventDefault();
  // 保存事件以在需要时触发
  deferredPrompt = event;
  
  // 可以在这里展示一个按钮或其他元素，用于触发保存提示
});

// 在你需要触发保存提示的地方调用以下代码
// 例如，当用户点击一个“保存”按钮时
function showSavePrompt() {
  if (deferredPrompt) {
    // 触发保存提示
    deferredPrompt.prompt();
    
    // 处理用户响应
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      // 重置保存提示
      deferredPrompt = null;
    });
  }
}
