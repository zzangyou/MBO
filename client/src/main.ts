import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

createApp(App).use(router).mount('#app')

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
