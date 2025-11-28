<script setup>
// header
import AppHeader from '@/components/Componentes Globais/AppHeader.vue'
// footer
import AppFooter from '@/components/Componentes Globais/AppFooter.vue'
// cards
import AppCardsHome from '@/components/Home Componentes/AppCards-Home.vue'
</script>
<template>
  <app-header/>
  <main>
    <section class="s1">
      <h1>Bem vindos ao <span>Direcionamento De Estudo</span></h1>
      <p>
        Aqui cada um podera se desenvolver individualmente no mundo da programação testando seus
        conehcimentos e desenvolvendo sue raciocinio logico e pratico
      </p>
    </section>
    <section class="s2">
      <h2>Objetivos de aprendizagem:</h2>
      <app-cards-home/>
    </section>
  </main>
  <app-footer/>
</template>
<style scoped>
main{
  margin-bottom: 12%;
}
</style>
