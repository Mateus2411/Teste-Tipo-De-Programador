<script setup>
defineProps({
  titulo: String,
  descricao: String,
})
let Objetivos = [
  {
    id: 1,
    titulo: 'Aprender',
    descricao:
      'Aqui nos iniciaremos com o basico da programação, ficando na aprendizagem e desenvolvimento para que no futuro n precise voltar',
  },
  {
    id: 2,
    titulo: 'Praticar',
    descricao:
      'Muitas das coisas requerem pratica, e programação nao e diferente te forçando a praticar',
  },
  {
    id: 3,
    titulo: 'Desenvolver',
    descricao:
      'Desenvolver projetos, definitivamente você ja deve ter pensado em fazer algo grande mas quando olhou mais de perto percebeu que nao tem como (por agora)',
  },
]
</script>
<template>
  <main>
    <section>
      <div class="cards-conteiner">
        <div v-for="card in Objetivos" :key="card.id">
          <h3>{{ card.titulo }}</h3>
          <p>{{ card.descricao }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.card {
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  transition: 0.25s;
}
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}
.card h3 {
  margin-bottom: 8px;
}
</style>
