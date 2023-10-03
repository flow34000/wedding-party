<template>
  <div id="rsvp" class="section">
    <h1 class="text-center">RSVP</h1>
    <div class="flex flex-column section-content gap-3">

      <form @submit="submitRSVP0" class="flex flex-column gap-2" v-if="step === 0">
        <p>Nous serions ravis de savoir si vous pouvez nous rejoindre !</p>
        <InputText id="firstname" v-model="firstname" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" size="small" placeholder="Prénom" />
        <InputText id="name" v-model="name" type="text" :class="{ 'p-invalid': errorMessage }" aria-describedby="text-error" size="small" placeholder="Nom" />
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
        <Button type="submit" label="Suivant" />
      </form>

      <form @submit="submitRSVP1" class="flex flex-column gap-2" v-if="step === 1">
        <p class="font-bold text-center">Réponse pour {{ firstname }} {{ name }}</p>
        <p>Pourrez-vous vous joindre à nous lors de notre mariage ? Veuillez répondre avant la date du 29 Février 2024.</p>
        <Button label="Accepter avec joie" :outlined="confirm == null || confirm === false" @click="confirm = true" />
        <Button label="Décliner à regret" :outlined="confirm == null || confirm === true" @click="confirm = false" />
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
            <Button type="submit" label="Suivant" />
          </div>
        </div>
        <!--  Decline -->
        <div class="flex flex-column gap-2" v-if="confirm === false">
          <p>Souhaitez-vous inclure une note à l'intention du couple ?</p>
          <Textarea v-model="declineNote" autoResize rows="5" cols="30" />
          <Button type="submit" label="Suivant" />
        </div>
        <Button label="Retour" @click="back" />
      </form>

      <form @submit="submitRSVP2" class="flex flex-column gap-2" v-if="step === 2">
        <div class="formgrid grid">
          <template v-if="nbChildren > 0">
            <div class="field col-12">
              <label>Un menu spécial pour les enfants de 3 à 12 ans est prévu. En deça de 3 ans nous demandons aux parents de fournir le repas (la baby-sitter se chargera de superviser). Au delà de 12 ans, un menu adulte sera prévu. Toutefois vous êtes ceux qui connaissent le mieux les appétits de vos enfants, merci donc d'indiquer le nombre de menu enfant et adultes (pour enfants) que nous devons prévoir.</label>
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
            <label>Avez-vous des allergies ?</label>
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
              <RadioButton v-model="brunch" inputId="present" name="isAllergic" :value="false" />
              <label for="isAllergic">Malheureusement non</label>
            </div>
            <div class="field-radiobutton">
              <RadioButton v-model="brunch" inputId="absent" name="isAllergic" :value="true" />
              <label for="isntAllergic">Oui avec plaisir</label>
            </div>
          </div>
          <div class="field col-12" v-if="brunch">
            <InputText id="nbBrunch" v-model="nbBrunch" type="text" :class="[{ 'p-invalid': errorMessage }, 'w-full']" aria-describedby="allergies-help" size="small" placeholder="Nombre de personne" />
          </div>
        </div>
        <Button type="submit" label="Suivant" />
        <Button label="Retour" @click="back" />
      </form>
    </div>
  </div>
</template>

<script setup>
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
const nbBrunch = ref('')

const submitRSVP0 = () => {
  step.value = 1
}
const submitRSVP1 = () => {
  if (confirm.value === false) {
    console.log('out')
    step.value = 0
  }
  else {
    step.value = 2
  }
}
const submitRSVP2 = () => {
  step.value = 3
}

const back = () => {
  step.value -= 1
  confirm.value = null
}
</script>

<style>
/* Add your CSS styles here */
</style>