<template>
  <div id="first" class="section align-items-center">
    <div class="bg-filter">
      <div></div>
    </div>
    <div class="bg-bottom">
      <div></div>
    </div>
    <img src="../assets/flowerstop.png" class="top-leaf absolute top-0" />
    <div class="flex align-items-center gap-5 flex-column content text-center">
      <p class="date">Samedi<br /> 29 juin 2024</p>
      <p class="location">Domaine des Coteaux d'Or<br /> Pouilly-le-Monial</p>
      <Countdown></Countdown>
      <a href="#rsvp"><Button label="RSVP" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import Countdown from './Countdown.vue'
</script>

<style>
.top-leaf {
  width: 70%
}

.content {
  padding-right: 15%;
  padding-left: 15%;
  margin-top: 8rem;
}

.bg-filter {
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
}

.bg-filter:first-child {
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
  font-family: bartleen;
  font-weight: 400;
  white-space: pre-wrap;
  text-transform: none;
  letter-spacing: 0em;
  line-height: 1.25;
  font-size: 2rem;
}

.location {
  font-family: bartleen;
  font-weight: 400;
  font-size: 1.625rem;
  line-height: 1.25;
  text-transform: none;
  letter-spacing: 0em;
}
</style>