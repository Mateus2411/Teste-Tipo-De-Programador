<script setup>
// header
import AppHeader from '@/components/Componentes Globais/AppHeader.vue'
// footer
import AppFooter from '@/components/Componentes Globais/AppFooter.vue'
// cards
import AppCardsHome from '@/components/Home/AppCards-Home.vue'

</script>
<template>
  <app-header />
  <main>
    <section class="s1">
      <div>
        <h1>Bem vindos ao <span>Direcionamento De Estudo</span></h1>
        <p>
          Aqui cada um podera se desenvolver individualmente no mundo da programação testando seus
          conhecimentos e desenvolvendo seu raciocinio logico e pratico
        </p>
        <router-link to="/">Começar</router-link>
      </div>
      <div class="img"></div>
    </section>
    <section class="s2">
      <h2>Objetivos de aprendizagem:</h2>
      <app-cards-home />
    </section>
  </main>
  <app-footer />
</template>
<style scoped>
main {
  margin-bottom: 12%;
}

section.s1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80vh;
  /* hero grande */
  padding: 0 0;
  gap: 3vw;
  margin-top: 5vw;

}

section.s1 .img {
  flex: 1;
  height: 60vh;
  background-image: url("https://media.istockphoto.com/id/1939609977/pt/foto/wooded-park.jpg?s=612x612&w=0&k=20&c=MgwZmKLzLovhZh-ekaP1iFIzJGiDfHUhrL7KZFpIlPs=");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 20px;
}

section.s1>div {
  flex: 1;
  text-align: left;
  /* textos à direita */
}

section.s1 h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

section.s1 p {
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  line-height: 1.4;
}

section.s1 a {
  background: black;
  color: white;
  padding: 0.8rem 1.6rem;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  display: inline-block;
  text-decoration: none;
}
</style>
