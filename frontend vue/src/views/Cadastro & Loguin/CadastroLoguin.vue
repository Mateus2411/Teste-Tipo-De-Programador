<script setup>
import { ref } from "vue";

// tela ativa (cadastro / login)
// const tela = ref("cadastro");

// usuários cadastrados
const cadastrados = ref([
  { nome: "admin", email: "admin@admin.com", senha: "admin" }
]);

// CADASTRO
const nomeCadastro = ref("");
const emailCadastro = ref("");
const senhaCadastro = ref("");
const erroNome = ref("");
const erroEmail = ref("");
const erroSenha = ref("");

// LOGIN
const emailLogin = ref("");
const senhaLogin = ref("");
const erroLoginEmail = ref("");
const erroLoginSenha = ref("");

// valida email
function ValidarEmail(email) {
  var exclude = /[^@.\w]|^[.-]{2}|[@.]{2}|(@)[^@]*\1/i;
  var check = /@[a-zA-Z0-9-.]+./i;
  var checkend = /[a-zA-Z]{2,3}$/i;
  return !(
    email.search(exclude) !== -1 ||
    email.search(check) === -1 ||
    email.search(checkend) === -1
  );
}

// valida senha
function validarSenha(senha) {
  const erros = [];
  if (senha.length < 6) erros.push("Mínimo 6 caracteres");
  if (!/[A-Z]/i.test(senha)) erros.push("Falta uma letra");
  if (!/[0-9]/.test(senha)) erros.push("Falta um número");
  if (!/[*@#!?.-_]/.test(senha))
    erros.push("Falta caractere especial (* @ # ! ? . - _)");

  return erros;
}

// cadastrar
function cadastrar() {
  erroNome.value = "";
  erroEmail.value = "";
  erroSenha.value = "";

  if (!nomeCadastro.value) {
    erroNome.value = "O nome não pode ser vazio";
    return;
  }

  if (!emailCadastro.value || !ValidarEmail(emailCadastro.value)) {
    erroEmail.value = "Email inválido";
    return;
  }

  const erros = validarSenha(senhaCadastro.value);
  if (erros.length > 0) {
    erroSenha.value = erros.join(" • ");
    return;
  }

  cadastrados.value.push({
    nome: nomeCadastro.value,
    email: emailCadastro.value,
    senha: senhaCadastro.value
  });

  alert("Cadastro realizado com sucesso!");
}

// login
function login() {
  erroLoginEmail.value = "";
  erroLoginSenha.value = "";

  if (!emailLogin.value) {
    erroLoginEmail.value = "O email não pode ser vazio";
    return;
  }
  if (!ValidarEmail(emailLogin.value)) {
    erroLoginEmail.value = "Email inválido";
    return;
  }
  if (!senhaLogin.value) {
    erroLoginSenha.value = "A senha não pode ser vazia";
    return;
  }

  const user = cadastrados.value.find(
    u => u.email === emailLogin.value && u.senha === senhaLogin.value
  );

  if (user) {
    alert("Logado com sucesso!");
  } else {
    alert("Email ou senha incorretos");
  }
}
</script>

<template>
  <main class="container active">
    <!-- CADASTRO -->
    <div class="card" :class="{ ativo: tela === 'cadastro' }">
      <h2>Cadastro</h2>

      <input v-model="nomeCadastro" placeholder="Nome" />
      <span class="erro">{{ erroNome }}</span>

      <input v-model="emailCadastro" placeholder="Email" />
      <span class="erro">{{ erroEmail }}</span>

      <input v-model="senhaCadastro" type="password" placeholder="Senha" />
      <span class="erro">{{ erroSenha }}</span>

      <button @click="cadastrar">Cadastrar</button>

      <p class="switch">
        Já tem conta?
        <a @click="tela = 'login'">Entrar</a>
      </p>
    </div>

    <!-- LOGIN -->
    <div class="card" :class="{ ativo: tela === 'login' }">
      <h2>Login</h2>

      <input v-model="emailLogin" placeholder="Email" />
      <span class="erro">{{ erroLoginEmail }}</span>

      <input v-model="senhaLogin" type="password" placeholder="Senha" />
      <span class="erro">{{ erroLoginSenha }}</span>

      <button @click="login">Entrar</button>

      <p class="switch">
        Ainda não tem conta?
        <a @click="tela = 'cadastro'">Cadastrar</a>
      </p>
    </div>

  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
body {
  background-color: #000000;
}
main.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  gap: 2rem;
  color: white;
}
.active .card {
  display: block;
}
</style>
