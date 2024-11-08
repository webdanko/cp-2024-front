<script setup lang="ts">
import { Map } from 'maplibre-gl';
import { onMounted, onUnmounted, shallowRef } from 'vue';

const mapContainer = shallowRef(null);
const map = shallowRef(null);

onMounted(() => {
  const initialState = { lng: 55.7251452, lat: 37.4487186, zoom: 14 };

  map.value = new Map({
    container: mapContainer.value,
    center: [initialState.lng, initialState.lat],
    zoom: initialState.zoom
  })
})

onUnmounted(() => {
  map.value?.remove();
})
</script>

<template>
  <div ref="mapContainer"></div>
</template>

<style scoped></style>
