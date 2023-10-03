<template>
  <span v-show="show" class="flip-clock__piece" ref="cardElement">
    <span class="flip-clock__card flip-card">
      <b class="flip-card__top">{{ zerofill(current) }}</b>
      <b class="flip-card__bottom" :data-value="zerofill(current)"></b>
      <b class="flip-card__back" :data-value="zerofill(previous)"></b>
      <b class="flip-card__back-bottom" :data-value="zerofill(previous)"></b>
    </span>
    <span class="flip-clock__slot">{{ property }}</span>
  </span>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['property', 'time'])
const cardElement = ref(null)
const current = ref(0);
const previous = ref(0);
const show = ref(false);

watch(() => props.time, (val, timePrew) => {

  show.value = true;
  val = val < 0 ? 0 : val;

  if (val !== current.value) {
    previous.value = current.value;
    current.value = val;
    cardElement.value.classList.remove('flipo');
    void cardElement.value.offsetWidth;
    cardElement.value.classList.add('flipo');
  }
})

const zerofill = (value) => {
  return (value < 10 && value > -1 ? '0' : '') + value;
};
</script>

<style lang="scss">
.flip-clock__piece {
  display: inline-block;
  margin: 0 0.2vw;

  @media (min-width: 1000px) {
    margin: 0 5px;
  }
}

.flip-clock__slot {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
}

$halfHeight: 0.75em;
$borderRadius: 0.15em;

.flip-card {
  display: block;
  position: relative;
  padding-bottom: $halfHeight;
  font-size: 1.625rem;
}

@media (min-width: 1000px) {
  .flip-clock__slot {
    font-size: 1.2rem;
  }

}


/*////////////////////////////////////////*/


.flip-card__top,
.flip-card__bottom,
.flip-card__back-bottom,
.flip-card__back::before,
.flip-card__back::after {
  display: block;
  height: $halfHeight;
  color: #ccc;
  background: #136f63;
  padding: 0.1em 0.25em 0.40em;
  border-radius: $borderRadius $borderRadius 0 0;
  transform-style: preserve-3d;
  width: 2.25em;
}

.flip-card__bottom,
.flip-card__back-bottom {
  color: #FFF;
  position: absolute;
  top: 50%;
  left: 0;
  background: #0d8b7b;
  border-radius: 0 0 $borderRadius $borderRadius;
  pointer-events: none;
  overflow: hidden;
  z-index: 2;
}

.flip-card__back-bottom {
  z-index: 1;
}

.flip-card__bottom::after,
.flip-card__back-bottom::after {
  display: block;
  margin-top: -$halfHeight;
}

.flip-card__back::before,
.flip-card__bottom::after,
.flip-card__back-bottom::after {
  content: attr(data-value);
}

.flip-card__back {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0%;
  pointer-events: none;
}

.flip-card__back::before {
  position: relative;
  overflow: hidden;
  z-index: -1;
}

.flipo .flip-card__back::before {
  z-index: 1;
  animation: flipTop 0.3s cubic-bezier(.37, .01, .94, .35);
  animation-fill-mode: both;
  transform-origin: center bottom;
}

.flipo .flip-card__bottom {
  transform-origin: center top;
  animation-fill-mode: both;
  animation: flipBottom 0.6s cubic-bezier(.15, .45, .28, 1); // 0.3s;
}

@keyframes flipTop {
  0% {
    transform: rotateX(0deg);
    z-index: 2;
  }

  0%,
  99% {
    opacity: 1;
  }

  100% {
    transform: rotateX(-90deg);
    opacity: 0;
  }
}

@keyframes flipBottom {

  0%,
  50% {
    z-index: -1;
    transform: rotateX(90deg);
    opacity: 0;
  }

  51% {
    opacity: 1;
  }

  100% {
    opacity: 1;
    transform: rotateX(0deg);
    z-index: 5;
  }
}
</style>