<template>
  <div class="flex h-screen grid grid-nogutter">
    <div class="flex h-screen justify-content-center align-items-center md:fixed  col-12 md:col-7">
      <div :class="[currentSection, 'h-screen flex left-image absolute w-full']"></div>
      <div class="pannel-title gap-4">
        <p class="title text-center font-bold">Floriane & Florent</p>
        <p class="font-bold text-xl text-white">Nous sommes impatients de partager notre journée avec vous. Aidez-nous à immortaliser notre mariage avec joie.</p>
      </div>
    </div>
    <div class="flex col-12 md:col-5 flex-column ml-auto overflow-auto" @scroll="scrollHandler">
      <FirstView></FirstView>
      <StoryView></StoryView>
      <ProgramView></ProgramView>
      <LocationView></LocationView>
      <FormView></FormView>
      <PhotoView></PhotoView>
      <ContactView></ContactView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import FirstView from '../components/FirstView.vue'
import StoryView from '../components/StoryView.vue'
import ProgramView from '../components/ProgramView.vue'
import LocationView from '../components/LocationView.vue'
import FormView from '../components/FormView.vue'
import PhotoView from '../components/PhotoView.vue'
import ContactView from '../components/ContactView.vue'

const currentSection = ref('')

const scrollHandler = () => {
  const sections = ['first', 'story', 'program', 'location', 'rsvp', 'photos', 'contact'];
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
  window.addEventListener('scroll', scrollHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<style>
.title {
  font-family: bartleen;
  font-weight: 400;
  font-size: 7rem;
  line-height: 1.16;
  text-transform: none;
  letter-spacing: 0em;
  color: white
}

.left-image {
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  transition: background-position 1s ease-in-out 0s;
}

.first.left-image {
  background-image: url('src/assets/WA0016.jpg');
  background-position: center center;
}

.location.left-image {
  background-image: url('../assets/images/20230729_174442.jpg');
  background-position: 60% 75%;
}

.contact.left-image {
  background-image: url('../assets/images/20230729_171234.jpg');
  background-position: center center;
}

.pannel-title {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  padding: 10% 20% 11% 10%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.306) 13%, rgba(0, 0, 0, 0.228) 26%, rgba(0, 0, 0, 0.164) 37%, rgba(0, 0, 0, 0.112) 48%, rgba(0, 0, 0, 0.07) 59%, rgba(0, 0, 0, 0.043) 68%, rgba(0, 0, 0, 0.022) 77%, rgba(0, 0, 0, 0.009) 85%, rgba(0, 0, 0, 0.002) 92%, rgba(0, 0, 0, 0) 100%);
  width: 100%;
  height: 75%;
  justify-content: flex-end;
  bottom: 0px;
  align-items: flex-start;
  z-index: 2;
}

@media only screen and (max-height: 600px) {
  .title {
    font-size: 6rem;
  }
}

@media only screen and (max-width: 600px) {
  .title {
    font-size: 6rem;
  }
}
</style>