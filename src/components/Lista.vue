<template>
  <div>
    <div v-if="cargando">Cargando profesiones...</div>
    <ul v-else>
      <li v-for="profesion in profesiones" :key="profesion.id">
        <h3>{{ profesion.nombre }}</h3>
        <p>{{ profesion.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { profesiones as profesionesOriginales } from '../resource/profesiones';

const profesiones = ref<{ id: number; nombre: string; descripcion: string }[]>([]);
const cargando = ref(true);

onMounted(() => {
  setTimeout(() => {
    profesiones.value = profesionesOriginales;
    cargando.value = false;
  }, 3000); 
});
</script>


<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 12px;
  border-bottom: 1px solid #ddd;
}

h3 {
  margin: 0 0 4px;
  color: #60c659;
}

p {
  margin: 0;
  color: #fff;
}
</style>