<template>
  <div class="flex gap-1 flip-clock">
    <Tracker property="Jours" :time="days"></Tracker>
    <Tracker property="Heures" :time="hours"></Tracker>
    <Tracker property="Minutes" :time="minutes"></Tracker>
    <Tracker property="Secondes" :time="seconds"></Tracker>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import Tracker from './Tracker.vue'
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


<style lang="scss">
.flip-clock {

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
}
</style>