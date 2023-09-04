<template>
  <div class="flex h-screen">
    <div class="flex justify-content-center align-items-center relative" style="width:60%">
      <div :class="[currentSection, 'flex flex-grow-1 left-image absolute w-full']"></div>
      <div class="pannel-title">
        <p class="title">Floriane & Florent</p>
        <p style="color:white">We can't wait to share our special day with you. Help us capture our wedding with Joy.</p>
      </div>
    </div>
    <div class="right overflow-auto" @scroll="scrollHandler">
      <FirstView></FirstView>
      <LocationView></LocationView>
      <ContactView></ContactView>
      <FormView></FormView>
      <AccomodationView></AccomodationView>
      <ProgramView></ProgramView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import LocationView from './LocationView.vue'
import ContactView from './ContactView.vue'
import FormView from './FormView.vue'
import AccomodationView from './AccomodationView.vue'
import ProgramView from './ProgramView.vue'
import FirstView from './FirstView.vue'
import Navigation from '@/components/Navigation.vue'

const weddingDate = new Date('2024-06-29T00:00:00')
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const currentSection = ref('')

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    //gsap.to(window, { duration: 1, scrollTo: section });
    // Changer l'image en fonction de la section
    currentSection.value = `IMAGE FOR ${sectionId}`;
  }
};

const scrollHandler = () => {
  const sections = ['first', 'location', 'contact', 'rsvp', 'accomodation', 'program'];
  let visibleSection = '';
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
      visibleSection = sectionId;
    }
  }
  if (visibleSection !== '') {
    currentSection.value = visibleSection;
  }
}

onMounted(() => {
  currentSection.value = 'first'
})
</script>

<style>
.title {
  font-family: GreatVibes-Regular;
  font-weight: 400;
  font-size: 4.5rem;
  line-height: 1.16;
  text-transform: none;
  letter-spacing: 0em;
  color: white
}

.right {
  height: 100vh;
  width: 40%;
}

.section {
  display: flex;
  flex-direction: column;
  height: 100%;
}

html {
  scroll-behavior: smooth;
}

.left-image {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  transition: background-position 1s ease-in-out 0s;
}

.first.left-image {
  background-image: url('../assets/20230729_174341.jpg');
  background-position: center center;
}

.location.left-image {
  background-image: url('../assets/20230729_174442.jpg');
  background-position: center 45%;
}

.contact.left-image {
  background-image: url('../assets/20230729_171234.jpg');
  background-position: center 38%;
}

.pannel-title {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 10% 20% 3% 10%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.306) 13%, rgba(0, 0, 0, 0.228) 26%, rgba(0, 0, 0, 0.164) 37%, rgba(0, 0, 0, 0.112) 48%, rgba(0, 0, 0, 0.07) 59%, rgba(0, 0, 0, 0.043) 68%, rgba(0, 0, 0, 0.022) 77%, rgba(0, 0, 0, 0.009) 85%, rgba(0, 0, 0, 0.002) 92%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  height: 75%;
  justify-content: flex-end;
  bottom: 0px;
  align-items: flex-start;
  z-index: 2;
}
</style>