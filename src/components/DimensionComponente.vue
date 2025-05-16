<template>
  <div class="dimensiones">
    <h2>Dimensiones de la ventana</h2>
    <p>Ancho: {{ width }} px</p>
    <p>Alto: {{ height }} px</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const width = ref(window.innerWidth);
const height = ref(window.innerHeight);

function actualizarDimensiones() {
  width.value = window.innerWidth;
  height.value = window.innerHeight;
}

onMounted(() => {
  window.addEventListener('resize', actualizarDimensiones);
});

onUnmounted(() => {
  window.removeEventListener('resize', actualizarDimensiones);
});
</script>

<style scoped>
div {
  padding: 1rem;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f0f8ff;
}
h2 {
  margin-bottom: 0.5rem;
}

.dimensiones p {
  margin: 0.5rem 0;
  color: #fff;
}
.dimensiones{
  background-color: #265023;
}
</style>