import { defineStore } from 'pinia';
import type { Profesion } from '../interfaces/Profesion';
import { profesiones as profesionesIniciales } from '../resource/profesiones';

export const useProfesionStore = defineStore('profesion', {
  state: () => ({
    profesiones: [...profesionesIniciales] as Profesion[]
  }),
  actions: {
    agregarProfesion(profesion: Profesion) {
      this.profesiones.push(profesion);
    }
  }
});