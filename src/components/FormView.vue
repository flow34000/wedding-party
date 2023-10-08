<template>
  <div id="rsvp" class="section">
    <SectionTop></SectionTop>
    <h1 class="text-center">RSVP</h1>
    <div class="flex flex-column section-content gap-3">
      <Message severity="success" v-if="submitted" :sticky="false" :life="3000">Votre réponse a bien été enregistrée</Message>
      <form novalidate @submit.prevent="submitRSVP0" class="flex flex-column gap-2" v-if="step === 0">
        <p>Nous serions ravis de savoir si vous pourrez nous rejoindre ! Pensez à completer le formulaire ci-dessous avant le 29 Février 2024.</p>
        <InputText id="firstname" v-model="firstname" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" size="small" placeholder="Prénom" />
        <InputText id="name" v-model="name" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" size="small" placeholder="Nom" />
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Suivant" />
      </form>

      <form novalidate @submit.prevent="submitRSVP1" class="flex flex-column gap-2" v-if="step === 1">
        <p class="font-bold">Réponse pour {{ firstname }} {{ name }}</p>
        <p>Serez-vous présent à notre mariage ? Veuillez répondre avant la date du 29 Février 2024.</p>
        <Button label="Let's party !" :outlined="confirm == null || confirm === false" @click="confirm = true" />
        <Button label="Je peux pas, j'ai poney !" :outlined="confirm == null || confirm === true" @click="confirm = false" />
        <!--  Accept -->
        <div class="formgrid grid" v-if="confirm === true">
          <div class="field col-12">
            <label for="nbAdults">Combien d'adultes et d'enfants seront présents ?</label>
            <InputText id="nbAdults" v-model="nbAdults" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="text-error" size="small" placeholder="Adultes" />
          </div>
          <div class="field col-12">
            <InputText id="nbChildren" v-model="nbChildren" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="text-error" size="small" placeholder="Enfants" />
          </div>
          <div class="field col-12" v-if="nbChildren > 0">
            <InputText id="ageOfChildren" v-model="ageOfChildren" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="text-error" size="small" placeholder="Age des enfants (8,12)" />
            <small id="username-help">
              Note: Les enfants jusqu'à 13 ans peuvent être pris en en charge par une baby-sitter, au-delà ils seront sous votre responsabilité.
            </small>
          </div>
          <div class="field col-12">
            <Button type="submit" label="Suivant" class="w-full" />
          </div>
        </div>
        <!--  Decline -->
        <div class="formgrid grid" v-if="confirm === false">
          <div class="field col-12">
            <label for="declineNote">Un petit mot pour les futurs mariés ?</label>
            <InputText id="declineNote" v-model="declineNote" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']"/>
          </div>
          <div class="field col-12">
            <Button type="submit" label="Envoyer" class="w-full" />
          </div>
        </div>
        <Button label="Retour" @click="back" />
      </form>

      <form novalidate @submit.prevent="submitRSVP2" class="flex flex-column gap-2" v-if="step === 2">
        <div class="formgrid grid">
          <template v-if="nbChildren > 0">
            <div class="field col-12">
              <label>Un menu spécial pour les enfants de 3 à 12 ans est prévu. En deça de 3 ans nous demandons aux parents de fournir le repas (la baby-sitter se chargera de superviser). Toutefois vous êtes ceux qui connaissent le mieux les appétits de vos enfants, merci donc d'indiquer le nombre de menu enfant et adultes (pour enfants de plus de 12 ans) que nous devons prévoir.</label>
            </div>
            <div class="field col-12 md:col-6">
              <InputText id="allergies" v-model="nbChildMeals" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="allergies-help" size="small" placeholder="Nombre menu enfant" />
            </div>
            <div class="field col-12 md:col-6">
              <InputText id="allergies" v-model="nbAdultMeals" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="allergies-help" size="small" placeholder="Nombre menu adulte" />
            </div>
            <div class="field col-12">
              <small id="allergies-help">Note: Sauf changement, le menu enfant se compose des pièces cocktail du vin d'honneur, escalope de volaille rotie et pommes de terre fondantes / dessert des mariés.</small>
            </div>
          </template>
          <div class="field col-12">
            <label>Y-a-t'il des allergies alimentaires à signaler?</label>
          </div>
          <div class="col-12 formgroup-inline">
            <div class="field-radiobutton">
              <RadioButton v-model="isAllergic" inputId="isAllergic" name="isAllergic" :value="false" />
              <label for="isAllergic">Non</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton v-model="isAllergic" inputId="isntAllergic" name="isAllergic" :value="true" />
              <label for="isntAllergic">Oui</label>
            </div>
          </div>
          <div class="field col-12" v-if="isAllergic">
            <InputText id="allergies" v-model="allergies" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="allergies-help" size="small" placeholder="Allergies" />
            <small id="allergies-help">Celles-ci seront communiquées au traiteur</small>
          </div>

          <div class="field col-12">
            <label>Un brunch le dimanche sera proposé pour prolonger ce moment de bonheur. Serez-vous présents ?</label>
          </div>
          <div class="col-12 formgroup-inline">
            <div class="field-radiobutton">
              <RadioButton v-model="brunch" inputId="nobrunch" name="nobrunch" :value="true" />
              <label for="nobrunch">Oui avec plaisir</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton v-model="brunch" inputId="brunch" name="brunch" :value="false" />
              <label for="brunch">Je peux pas, j'ai poney le Dimanche !</label>
            </div>
          </div>
        </div>
        <Button type="submit" label="Envoyer" />
        <Button label="Retour" @click="back" />
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Form, Field } from 'vee-validate';
import axios from 'axios'

import { ref } from 'vue'

const step = ref(0)
const name = ref('')
const firstname = ref('')
const nbAdults = ref('')
const nbChildren = ref('')
const confirm = ref(null)
const declineNote = ref('')
const ageOfChildren = ref('')
const isAllergic = ref(false)
const allergies = ref('')
const brunch = ref('')
const submitted = ref(false)
const nbChildMeals = ref('')
const nbAdultMeals = ref('')

const submitRSVP0 = () => {
  step.value = 1
  submitted.value = false
}
const submitRSVP1 = () => {
  if (confirm.value === false) {
    exportToSheet()
    step.value = 0
    var element = document.getElementById("rsvp");
    var top = element.offsetTop;
    window.scrollTo(0, top);
    submitted.value = true
    resetFields()
  }
  else {
    step.value = 2
  }
}
const submitRSVP2 = () => {
  exportToSheet()
  var element = document.getElementById("rsvp");
  var top = element.offsetTop;
  window.scrollTo(0, top);
  submitted.value = true
  step.value = 0
  resetFields()
}

const back = () => {
  step.value -= 1
  confirm.value = null
}
const resetFields = () => {
  name.value = ''
  firstname.value = ''
  nbAdults.value = ''
  nbChildren.value = ''
  confirm.value = null
  declineNote.value = ''
  ageOfChildren.value = ''
  isAllergic.value = false
  allergies.value = ''
  brunch.value = ''
  nbChildMeals.value = ''
  nbAdultMeals.value = ''
}

const exportToSheet = () => {
  const id = name.value.toLowerCase() + firstname.value.toLowerCase()
  const apiUrl = `https://backend-wedding-default-rtdb.europe-west1.firebasedatabase.app/rsvp/users/${id}.json`;
  const data = {
    "name" : name.value,
    "firstname" : firstname.value,
    "nbAdults" : nbAdults.value,
    "nbChildren" : nbChildren.value,
    "confirm" : confirm.value,
    "declineNote" : declineNote.value,
    "ageOfChildren" : ageOfChildren.value,
    "isAllergic" : isAllergic.value,
    "allergies" : allergies.value,
    "brunch" : brunch.value,
    "nbChildMeals" : nbChildMeals.value,
    "nbAdultMeals" : nbAdultMeals.value
  }

  axios.put(apiUrl, data)
    .then(response => {
      console.log('Données ajoutées avec succès à la feuille Google Sheets :', response.data);
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout de données à la feuille Google Sheets', error);
    });
}
</script>

<style>
/* Add your CSS styles here */
</style>