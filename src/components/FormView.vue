<template>
  <div id="rsvp" class="section">
    <h1 class="text-center">RSVP</h1>
    <div class="flex flex-column section-content">
      <p>Nous serions ravis de savoir si vous pouvez nous rejoindre !</p>
      <form @submit.prevent="submitRSVP">
        <label for="name">Nom et prénom :</label>
        <input type="text" id="name" v-model="name" required />

        <label for="children">Nombre d'enfants présents :</label>
        <input type="number" id="children" v-model="childrenCount" min="0" />

        <label for="comments">Commentaires :</label>
        <textarea id="comments" v-model="comments"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const childrenCount = ref(0)
const comments = ref('')

const submitRSVP = () => {
  // Handle form submission, e.g., send data to a backend server
}
</script>

<style>
/* Add your CSS styles here */
</style>