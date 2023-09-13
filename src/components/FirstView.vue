<template>
  <div id="first" class="section align-items-center">
    <div class="bg-1">
      <div></div>
    </div>
    <div class="bg-bottom">
      <div></div>
    </div>
    <img src="../assets/leaf.webp" class="top-leaf absolute top-0" />
    <div class="flex align-items-center gap-5 flex-column content text-center">
      <p class="uppercase date">samedi<br /> 29 juin 2024</p>
      <p class="uppercase location">Domaine des Coteaux d'Or, Pouilly-le-Monial</p>
      <p class="uppercase ">{{ days }} jours {{ hours }} heures {{ minutes }} minutes</p>
      <button class="flex mt-4">RSVP</button>
    </div>
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
  margin-top: 8rem;
}

.bg-1 {
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
}

.bg-1:first-child {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-image: url('../assets/bg-back.webp');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
}

.bg-bottom>div {
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: contain;
  background-image: url('../assets/bg.png');
  background-repeat: no-repeat;
  background-position: center bottom;
}

.bg-bottom {
  left: 50%;
  width: 100%;
  bottom: 0;
  height: auto;
  position: absolute;
  transform: translateX(-50%);
  pointer-events: none;
}

.bg-bottom:after {
  width: 0;
  content: ' ';
  display: block;
  padding-top: 54.72826086956522%;
}

.date {
  font-family: CinzelDecorative-Regular;
  font-weight: 400;
  white-space: pre-wrap;
  text-transform: none;
  letter-spacing: 0em;
  line-height: 1.25;
  font-size: 2rem;
}

.location {
  font-family: CinzelDecorative-Regular;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 1.25;
  text-transform: none;
  letter-spacing: 0em;
}
</style>