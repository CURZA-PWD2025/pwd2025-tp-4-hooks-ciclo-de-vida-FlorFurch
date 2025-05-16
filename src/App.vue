<template>
  <div>
    <h1>Componentes dinámicos</h1>

    <nav>
      <button @click="cambiarComponente('Lista')">Ver Lista</button>
      <button @click="cambiarComponente('Tareas')">Ver Tareas</button>
      <button @click="cambiarComponente('DimensionComponente')">Ver Dimensiones</button>
    </nav>

    <hr />


    <component :is="componentes[componenteActual]" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Lista from './components/Lista.vue';
import Tareas from './components/Tareas.vue';
import DimensionComponente from './components/DimensionComponente.vue';

const componentes = {
  Lista,
  Tareas,
  DimensionComponente
};

const componenteActual = ref<keyof typeof componentes>('Lista');

function cambiarComponente(nombre: keyof typeof componentes) {
  componenteActual.value = nombre;
}
</script>

<style>
nav {
  margin-bottom: 1rem;
}
button {
  margin-right: 0.5rem;
  padding: 0.5rem 1rem;
}

:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #60c659;
  text-decoration: inherit;
}
a:hover {
  color: #60c659;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
    color: #60c659;
}
h2{
  color: #60c659;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #60c659;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #60c659;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>