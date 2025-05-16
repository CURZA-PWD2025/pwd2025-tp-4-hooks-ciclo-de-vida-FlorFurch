<template>
  <div>
    <h2>Agregar nueva tarea</h2>
    <input v-model="nombre" placeholder="Nombre de la tarea" />
    <input v-model="descripcion" placeholder="Descripción" />
    <button class="agregar" @click="agregar">Agregar</button>

    <ul>
      <li
        v-for="tarea in tareas"
        :key="tarea.id"
        :class="{ antigua: tarea.antigua }"
      >
        {{ tarea.nombre }} - {{ tarea.descripcion }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeUpdate, onUpdated } from 'vue';

type Tarea = {
  id: number;
  nombre: string;
  descripcion: string;
  antigua: boolean;
};

const nombre = ref('');
const descripcion = ref('');

const tareas = ref<Tarea[]>([
  {
    id: 1,
    nombre: 'Tarea 1',
    descripcion: 'Realizar tareas.',
    antigua: false
  },
  {
    id: 2,
    nombre: 'Estudiar PWD',
    descripcion: 'Realizar tps que faltan.',
    antigua: false
  }
]);

onBeforeUpdate(() => {
  console.log('Lista aún no modificada');
});
onUpdated(() => {
  console.log('Lista modificada');
});

function agregar() {
  if (nombre.value.trim() && descripcion.value.trim()) {
    tareas.value.forEach(t => (t.antigua = true));

    
    tareas.value.push({
      id: Date.now(),
      nombre: nombre.value,
      descripcion: descripcion.value,
      antigua: false
    });

    nombre.value = '';
    descripcion.value = '';
  }
}
</script>

<style scoped>
input {
  padding: 10px;
  margin: 5px;
  border: #fff 1px solid;
  border-radius: 4px;
  background-color: transparent;
  color: #fff;
}
input::placeholder {
  color: #fff;
}
button {
  margin-left: 0.5em;
  padding: 6px 12px;
}

li {
  padding: 8px;
  margin-bottom: 4px;
  transition: background-color 0.3s ease;
    color: #fff;

  list-style-type: none;
}
.antigua {
    color: #60c659;
  
}
.agregar{
  background-color: #265023;
  font-weight: 400;
}
</style>