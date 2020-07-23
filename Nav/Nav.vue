<template>
  <div class="fixo" id="navBar">
    <nav>
      <ul id="lista">
        <li>
          <a href="#" v-on:click="mostrarAtivo(this)">HOME</a>
        </li>
        <li>
          <a href="#back2" v-on:click="mostrarAtivo(this)">SOBRE</a>
        </li>
        <li>
          <a href="#back3" v-on:click="mostrarAtivo(this)">DEPOIMENTOS</a>
        </li>
        <li>
          <a href="#back4" v-on:click="mostrarAtivo(this)">RESULTADOS</a>
        </li>
        <li>
          <a href="#back5" v-on:click="mostrarAtivo(this)">CONTATO</a>
        </li>
      </ul>
      <div class="logo">
        <img src="../../assets/chapeu_poli.png" />
        <div class="logoNome">
          <h1 style="font-size: 18px;margin-top: 10px;">Colégio</h1>
          <h1 style="font-size: 40px;">Poli Jr</h1>
        </div>
      </div>
    </nav>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="../../main.js"></script>

<style>
.fixo {
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100px;
}
nav {
  position: fixed;
  width: 100%;
  height: 13vh;
  left: 0px;
  top: 0px;
  background: rgba(69, 65, 255);
}
h1 {
  padding: 0px 1px;
  display: flex;
  align-content: center;
  margin-left: 0px;
  margin: -5px;
  margin-top: 0%;
  font-family: montserrat;
}
nav ul {
  float: right;
  margin-right: 20px;
}
nav ul li {
  display: inline-block;
  line-height: 80px;
  margin: 0 5px;
  font-family: montserrat;
  font-style: unset;
  font-size: 36px;
}
nav ul li a {
  color: white;
  font-size: 17px;
  padding: 7px 7px;
  border-radius: 3px;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
}
.logo {
  width: 316px;
  height: 100%;
  margin-left: 63px;
  display: flex;
  flex-direction: row;
}
.logoNome {
  color: white;
  width: 262px;
  margin-left: 0%;
  margin-top: 0%;
  font-family: montserrat;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#lista {
  font-family: Montserrat;
}
a:hover {
  background: #1b9bff;
  transition: 0.5s;
}
label.logo {
  color: white;
  font-size: 35px;
  line-height: 80px;
  padding: 0 100px;
  font-weight: bold;
}
</style>