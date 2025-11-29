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
  /* EMPURRA o footer pro fundo */
}
</style>
