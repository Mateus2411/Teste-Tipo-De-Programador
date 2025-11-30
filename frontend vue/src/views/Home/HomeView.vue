<script setup>

// cards
import AppCardsHome from '@/components/Home/AppCards-Home.vue'
</script>
<template>
  <main>
    <section class="s1">
      <div>
        <h1>Bem-vindos ao <span>Direcionamento de Estudo</span></h1>
        <p>
          Aqui cada um poderá se desenvolver individualmente no mundo da programação, testando seus
          conhecimentos e aprimorando raciocínio lógico e prático.
        </p>
        <router-link to="/cadastrar">Começar</router-link>
      </div>
      <div class="img"></div>
    </section>
    <section class="s2">
      <h2>Objetivos de aprendizagem:</h2>
      <app-cards-home />
    </section>

    <section class="s3">
      <h2>Como Funciona</h2>
      <p>
        O processo é dividido em três etapas claras: <strong>Cadastre-se</strong> para ter seu
        acesso, <strong>Explore os Módulos</strong> com conteúdo de programação e, o mais
        importante, <strong>Faça Nossos Desafios</strong>
        práticos.
      </p>
      <p>
        Você terá acesso a exemplos de código, ambientes de teste e inteligência artificial para
        praticar. A cada exercício, você vê seu resultado na hora, permitindo que você aprenda e
        evolua a cada linha de código que escrever.
      </p>
    </section>

    <section class="s4">
      <h2>O Que Você Vai Construir e Aprender</h2>
      <ul>
        <li>
          <strong>Criar programas simples:</strong> Aprender a escrever pequenos programas que
          resolvem problemas reais.
        </li>
        <li>
          <strong>Visualizar informações:</strong> Transformar dados em gráficos ou relatórios
          claros para entender resultados rapidamente.
        </li>
        <li>
          <strong>Resolver desafios práticos:</strong> Executar exercícios que mostram imediatamente
          se o código está correto e como melhorá-lo.
        </li>
        <li>
          <strong>Automatizar tarefas básicas:</strong> Criar scripts que ajudam a poupar tempo em
          tarefas repetitivas.
        </li>
        <li>
          <strong>Trabalhar em equipe:</strong> Colaborar com colegas, trocar ideias e revisar
          códigos de forma construtiva.
        </li>
        <li>
          <strong>Desenvolver raciocínio lógico:</strong> Aprender a pensar de forma estruturada
          para resolver problemas de maneira eficiente.
        </li>
      </ul>
    </section>

    <section class="s5">
      <h2>Arquitetura, Boas Práticas e Mindset</h2>
      <p>
        Esta plataforma é construída sobre uma stack moderna (Vue.js, JavaScript, CSS/SASS),
        adotando padrões de código de alta manutenibilidade, escalabilidade e segurança de dados. O
        código é limpo, documentado e aderente ao SOLID. Implementamos criptografia robusta para os
        dados transacionais. Nossa missão é desenvolver <strong>engenheiros de software</strong> com
        rigor técnico.
      </p>
      <blockquote class="developer-mantra">
        Lembre-se, o usuário nós respeitamos mas somos inimigos.
      </blockquote>
    </section>
  </main>
</template>
<style scoped>
* {
  font-family: 'Inter', sans-serif;
}

main {
  background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
  color: #2d2d2d;
  min-height: 100vh;
  width: 100%;
  padding-top: 8rem;
  flex: 1;
}

/* ---------- SEÇÃO HERO (S1) ---------- */
section.s1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 85vh;
  padding: 4rem 2rem;
  gap: 4rem;
  animation: fadeIn 0.6s ease;
}

section.s1 > div {
  flex: 1;
  text-align: left;
  z-index: 1;
}

section.s1 h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #1a1a1a;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a73ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

section.s1 h1 span {
  color: #4a73ff;
  -webkit-text-fill-color: #4a73ff;
}

section.s1 p {
  margin-bottom: 2rem;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #555;
  max-width: 600px;
}

section.s1 a {
  background: linear-gradient(135deg, #4a73ff 0%, #3b5fe0 100%);
  color: #fff;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-block;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(74, 115, 255, 0.3);
  border: 1px solid rgba(74, 115, 255, 0.2);
}

section.s1 a:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(74, 115, 255, 0.5);
  background: linear-gradient(135deg, #3b5fe0 0%, #2a4fd0 100%);
}

section.s1 .img {
  flex: 1;
  height: 60vh;
  min-height: 400px;
  background-image: url('https://media.istockphoto.com/id/1939609977/pt/foto/wooded-park.jpg?s=612x612&w=0&k=20&c=MgwZmKLzLovhZh-ekaP1iFIzJGiDfHUhrL7KZFpIlPs=');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

section.s1 .img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(74, 115, 255, 0.05) 0%, rgba(255, 255, 255, 0.1) 100%);
  border-radius: 20px;
}

/* ---------- SEÇÃO OBJETIVOS (S2) ---------- */
section.s2 {
  max-width: 1400px;
  margin: 6rem auto;
  padding: 0 2rem;
}

section.s2 h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  color: #1a1a1a;
  background: linear-gradient(135deg, #1a1a1a 0%, #4a73ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ---------- SEÇÃO FLUXO (S3) ---------- */
section.s3 {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.6s ease;
}

section.s3 h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  text-align: center;
}

section.s3 p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

section.s3 p strong {
  font-weight: 700;
  color: #4a73ff;
}

/* ---------- SEÇÃO PoCs (S4) ---------- */
section.s4 {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
}

section.s4 h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #1a1a1a;
  text-align: center;
}

section.s4 ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

section.s4 ul li {
  background: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #e0e0e0;
  color: #555;
  line-height: 1.8;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

section.s4 ul li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(180deg, #4a73ff 0%, #3b5fe0 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

section.s4 ul li:hover {
  transform: translateY(-5px);
  border-color: #4a73ff;
  box-shadow: 0 8px 25px rgba(74, 115, 255, 0.15);
  color: #1a1a1a;
}

section.s4 ul li:hover::before {
  opacity: 1;
}

section.s4 ul li strong {
  font-weight: 700;
  color: #4a73ff;
}

/* ---------- SEÇÃO ARQUITETURA (S5) ---------- */
section.s5 {
  max-width: 1200px;
  margin: 6rem auto;
  padding: 3rem 2rem;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  box-shadow: 0 8px 35px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.6s ease;
}

section.s5 h2 {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  text-align: center;
}

section.s5 p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2rem;
}

section.s5 p strong {
  font-weight: 700;
  color: #4a73ff;
}

section.s5 .developer-mantra {
  background: linear-gradient(135deg, rgba(74, 115, 255, 0.08) 0%, rgba(248, 249, 250, 0.5) 100%);
  border-left: 4px solid #4a73ff;
  padding: 2rem;
  margin: 2rem auto 0;
  border-radius: 12px;
  font-size: 1.2rem;
  font-style: italic;
  color: #1a1a1a;
  max-width: 700px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(74, 115, 255, 0.1);
}

/* ---------- ANIMAÇÕES ---------- */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ---------- RESPONSIVIDADE ---------- */
@media (max-width: 968px) {
  section.s1 {
    flex-direction: column;
    text-align: center;
    gap: 3rem;
    padding: 2rem 1.5rem;
  }

  section.s1 > div {
    text-align: center;
  }

  section.s1 h1 {
    font-size: 2.5rem;
  }

  section.s1 .img {
    width: 100%;
    height: 40vh;
    min-height: 300px;
  }

  section.s4 ul {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  main {
    padding-top: 6rem;
  }

  section.s1 h1 {
    font-size: 2rem;
  }

  section.s1 p {
    font-size: 1.1rem;
  }

  section.s2 h2,
  section.s3 h2,
  section.s4 h2,
  section.s5 h2 {
    font-size: 1.8rem;
  }

  section.s3,
  section.s5 {
    padding: 2rem 1.5rem;
  }

  section.s4 ul li {
    padding: 1.5rem;
  }
}
</style>
