# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

Пользователь должен добавить в свой проект:

vite.config.js проекта:

```js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

export default defineConfig({
plugins: [
vue(),
createSvgIconsPlugin({
iconDirs: [
path.resolve(__dirname, 'src/shared/assets/icons'),
// Дополнительные директории
],
symbolId: 'project-icon-[name]', // Префикс для проектных иконок
inject: 'body-last'
})
]
}); 
```
main.js проекта:

```js
import { createApp } from 'vue';
import App from './App.vue';
import { injectSprite } from 'my-icon-lib';

// Инжектируем спрайт библиотеки
injectSprite();

createApp(App).mount('#app');
```
5. Использование компонентов
``` vue
<!-- Иконка из библиотеки -->
<my-icon name="user" class="text-blue-500" />

<!-- Пользовательская иконка -->
<my-icon
name="custom-icon"
:lib="false"
class="text-red-400 hover:text-green-500"
/>
```