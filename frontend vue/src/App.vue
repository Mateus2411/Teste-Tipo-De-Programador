<script setup>
import AppHeader from './components/Componentes Globais/AppHeader.vue'
import AppFooter from './components/Componentes Globais/AppFooter.vue'

</script>
<template>
  <div id="layout">
    <app-header />
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>

<style scoped>
html,
body,
#app,
#layout {
  height: 100%;
  margin: 0;
}

#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
<style>
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
}
*, *::before, *::after {
  box-sizing: border-box;
}
#app {
  min-height: 100vh;
}
</style>
