<template>
  <div id="first" class="section justify-content-between">
    <img src="../assets/leaf.webp" class="top-leaf" />
    <div class="flex align-items-center gap-3 flex-column content text-center">
      <p class="uppercase">samedi 29 juin 2024</p>
      <p class="uppercase">Domaine des Coteaux d'Or, Pouilly-le-Monial</p>
      <p class="uppercase">{{ days }} jours {{ hours }} heures {{ minutes }} minutes</p>
      <button class="flex">RSVP</button>
    </div>
    <img src="../assets/bg.png" style="width:100%" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const weddingDate = new Date('2024-06-29T00:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const updateCountdown = () => {
  const currentTime = new Date()
  const timeDifference = weddingDate - currentTime

  days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000)
}

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
})
</script>

<style>
.top-leaf {
  width: 15%
}

.content {
  padding-right: 15%;
  padding-left: 15%;
}
</style>