<script setup>
import logoIF from '@/assets/if-design-svgrepo-com.svg'
</script>
<template>
  <header>
    <div>
      <router-link to="/">
        <img :src="logoIF" alt="Logo IF" />
      </router-link>
    </div>
    <div class="links">
      <ul>
        <li>
          <router-link  class="active" to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/">IA's</router-link>
        </li>
        <li>
          <router-link to="/">Sites</router-link>
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
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f8f9fa;
  padding: 1.5vw 4vw;
  margin-inline: 4vw;
  border-radius: 20px;
  margin-top: 1.3vw;

  border: 3px solid transparent;
  background:
    linear-gradient(#00000012, #00000012) padding-box,
    linear-gradient(90deg, #00000012, #00000012) border-box;
}
header .links ul {
  display: flex;
  gap: 4vw;
  margin-right: 2vw;
  cursor: pointer;
}
header .links ul li a{
  font-size: large;
  font-weight: bolder;
  color: black;
}
.active{
  background: rgba(0, 0, 0, 0.31);
  padding: 0.8vw 1vw;
  border-radius: 20px;
}
.active a{
  color: white;
}
</style>
