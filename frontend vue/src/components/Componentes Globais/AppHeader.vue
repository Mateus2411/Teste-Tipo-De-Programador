<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import logoIF from '@/assets/if-design-svgrepo-com.svg'

function handleScroll() {
  const percent = window.scrollY / (document.body.scrollHeight - window.innerHeight)

  if (percent > 0.1) {
    // 0.1 = 10%
    document.querySelector('header').classList.add('hidden')
  } else {
    document.querySelector('header').classList.remove('hidden')
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>
<template>
  <header>
    <div>
        <img :src="logoIF" alt="Logo IF" />
    </div>
    <div class="links">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/cadastrar">Cadastrar</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
/* CSS */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

header {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  padding: 1.5vw 4vw;

  background-color: #f8f9fa;
  border-radius: 20px;

  background:
    linear-gradient(#9c9c9c, #707070) padding-box,
    linear-gradient(90deg, #9c9c9c, #707070) border-box;

  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 99999;
}

header.hidden {
  opacity: 0;
  transform: translate(-50%, -40px);
  pointer-events: none;
}

header .links ul {
  display: flex;
  gap: 4vw;
  margin-right: 2vw;
  cursor: pointer;
}

header .links ul li a {
  font-size: large;
  font-weight: bolder;
  color: white;
}

.router-link-exact-active {
  background: rgba(0, 0, 0, 0.823);
  padding: 1vw 1.2vw;
  border-radius: 15px;
  color: white !important;
}
</style>
