<script setup></script>
<template>
  <section class="s1">
    <div>
      <h1>Inteligências Artificiais</h1>
      <p>
        A inteligência artificial se tornou uma das tecnologias mais influentes da atualidade,
        auxiliando desde tarefas simples até processos complexos. Esta página apresenta de forma
        clara e objetiva como as IAs funcionam e por que elas são tão úteis no cotidiano. Ela existe
        justamente para servir como referência rápida, facilitando o entendimento e mostrando como
        aplicar essas ferramentas de maneira prática.
      </p>
    </div>
    <div class="img"></div>
  </section>
</template>
<style scoped>
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
  background-image: url('https://queromaistecnologia.com/wp-content/uploads/2022/11/Robo-Xiaomi-1024x768.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  border-radius: 20px;
}

section.s1 > div {
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
@media (max-width: 865px){
  section.s1 {
    margin-top: 10vw;
  }
}

@media (max-width: 620px) {
  section.s1 {
    flex-direction: column;
    text-align: center;
    margin-top: 20vw;
  }

  section.s1 > div {
    margin-bottom: 2rem;
  }

  section.s1 .img {
    width: 100%;
    height: 40vh;
  }
}

section.s1 div {
  background-image: url();
}
</style>
