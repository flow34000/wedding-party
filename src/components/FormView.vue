<template>
  <div id="rsvp" class="section">
    <SectionTop></SectionTop>
    <h1 class="text-center">RSVP</h1>
    <div class="flex flex-column section-content gap-3">
      <Message severity="success" v-if="submitted" :sticky="false" :life="3000">Votre réponse a bien été enregistrée</Message>
      <form novalidate @submit.prevent="onSubmit" class="flex flex-column gap-2">
        <template v-if="step === 0">
          <p>
            Nous serions ravis de savoir si vous pourrez nous rejoindre ! Pensez à completer le formulaire ci-dessous avant le 29 Février
            2024.
          </p>
          <InputText id="firstname" v-bind="firstname" type="text" :class="{ 'p-invalid': errors.firstname && isFieldDirty('firstname') }" aria-describedby="firstname-help" size="small" placeholder="Prénom*" />
          <small id="firstname-help" class="p-error" v-if="errors.firstname && isFieldDirty('firstname')">
            {{ errors.firstname }}
          </small>
          <InputText id="name" v-bind="name" type="text" :class="{ 'p-invalid': errors.name && isFieldDirty('name') }" aria-describedby="text-error" size="small" placeholder="Nom*" />
          <small id="name-help" class="p-error" v-if="errors.name && isFieldDirty('name')">
            {{ errors.name }}
          </small>
          <Button label="Suivant" :disabled="!isFieldValid('firstname') || !isFieldValid('name')" @click="step++" />
        </template>
        <template v-if="step === 1">
          <p class="font-bold">Réponse pour {{ firstname.modelValue }} {{ name.modelValue }}</p>
          <p>Serez-vous présent à notre mariage ? Veuillez répondre avant la date du 29 Février 2024.</p>
          <Button label="Let's party !" :outlined="confirm == null || confirm === false" @click="confirm = true" />
          <Button label="Je peux pas, j'ai poney !" :outlined="confirm == null || confirm === true" @click="confirm = false" />
          <!--  Accept -->
          <div class="formgrid grid" v-if="confirm === true">
            <div class="field col-12">
              <label for="nbAdults">Combien d'adultes et d'enfants seront présents ?</label>
              <InputText id="nbAdults" v-bind="nbAdults" type="text" :class="[{ 'p-invalid': errors.nbAdults && isFieldDirty('nbAdults') }, 'w-full']" aria-describedby="nbAdults-help" size="small" placeholder="Nombre d'adultes*" />
              <small id="nbAdults-help" class="p-error" v-if="errors.nbAdults && isFieldDirty('nbAdults')">
                {{ errors.nbAdults }}
              </small>
            </div>
            <div class="field col-12">
              <InputText id="nbChildren" v-bind="nbChildren" type="text" :class="[{ 'p-invalid': errors.nbChildren && isFieldDirty('nbChildren') }, 'w-full']" aria-describedby="nbChildren-help" size="small" placeholder="Nombre d'enfants*" />
              <small id="nbChildren-help" class="p-error" v-if="errors.nbChildren && isFieldDirty('nbChildren')">
                {{ errors.nbChildren }}
              </small>
            </div>
            <div class="field col-12" v-if="nbChildren.modelValue > 0">
              <InputText id="ageOfChildren" v-bind="ageOfChildren" type="text" :class="[{ 'p-invalid': errors.ageOfChildren && isFieldDirty('ageOfChildren') }, 'w-full']" aria-describedby="ageOfChildren-help" size="small" placeholder="Age des enfants (8,12)*" />
              <small id="ageOfChildren-help" class="p-error block" v-if="errors.ageOfChildren && isFieldDirty('ageOfChildren')">
                {{ errors.ageOfChildren }}
              </small>
              <small id="username-help">
                Note: Les enfants jusqu'à 13 ans peuvent être pris en en charge par une baby-sitter, au-delà ils seront sous votre
                responsabilité.
              </small>
            </div>
            <div class="field col-12">
              <Button label="Suivant" class="w-full" :disabled="!isFieldValid('nbAdults') || !isFieldValid('nbChildren') || !isFieldValid('ageOfChildren')" @click="step++" />
            </div>
          </div>
          <!--  Decline -->
          <div class="formgrid grid" v-if="confirm === false">
            <div class="field col-12">
              <label for="declineNote">Un petit mot pour les futurs mariés ?</label>
              <InputText id="declineNote" v-bind="declineNote" type="text" :class="[{ 'p-invalid': errors.declineNote && isFieldDirty('declineNote') }, 'w-full']" aria-describedby="declineNote-help" size="small" />
            </div>
            <div class="field col-12">
              <Button type="submit" label="Envoyer" class="w-full" @click="decline" />
            </div>
          </div>
          <Button label="Retour" @click="back(false)" />
        </template>
        <template v-if="step === 2">
          <div class="formgrid grid">
            <template v-if="nbChildren.modelValue > 0">
              <div class="field col-12">
                <label>Un menu spécial pour les enfants de 3 à 12 ans est prévu. En deça de 3 ans nous demandons aux parents de fournir le repas
                  (la baby-sitter se chargera de superviser). Toutefois vous êtes ceux qui connaissent le mieux les appétits de vos enfants,
                  merci donc d'indiquer le nombre de menu enfant et adultes (pour enfants de plus de 12 ans) que nous devons prévoir.</label>
              </div>
              <div class="field col-12 md:col-6">
                <InputText id="nbChildMeals" v-bind="nbChildMeals" type="text" :class="[{ 'p-invalid': errors.nbChildMeals && isFieldDirty('nbChildMeals') }, 'w-full']" aria-describedby="nbChildMeals-help" size="small" placeholder="Nombre menu enfant" />
                <small id="nbChildMeals-help" class="p-error" v-if="errors.nbChildMeals && isFieldDirty('nbChildMeals')">
                  {{ errors.nbChildMeals }}
                </small>
              </div>
              <div class="field col-12 md:col-6">
                <InputText id="nbAdultMeals" v-bind="nbAdultMeals" type="text" :class="[{ 'p-invalid': errors.nbAdultMeals && isFieldDirty('nbAdultMeals') }, 'w-full']" aria-describedby="nbAdultMeals-help" size="small" placeholder="Nombre menu adulte" />
                <small id="nbAdultMeals-help" class="p-error" v-if="errors.nbAdultMeals && isFieldDirty('nbAdultMeals')">
                  {{ errors.nbAdultMeals }}
                </small>
              </div>
              <div class="field col-12">
                <small id="allergies-help">Note: Sauf changement, le menu enfant se compose des pièces cocktail du vin d'honneur, escalope de volaille rotie et
                  pommes de terre fondantes / dessert des mariés.</small>
              </div>
            </template>
            <div class="field col-12">
              <label>Y-a-t'il des allergies alimentaires à signaler?</label>
            </div>
            <div class="col-12 formgroup-inline">
              <div class="field-radiobutton">
                <RadioButton v-bind="isAllergic" inputId="isAllergic" name="isAllergic" :value="false" />
                <label for="isAllergic">Non</label>
              </div>
              <div class="field-radiobutton">
                <RadioButton v-bind="isAllergic" inputId="isntAllergic" name="isAllergic" :value="true" />
                <label for="isntAllergic">Oui</label>
              </div>
            </div>
            <div class="field col-12" v-if="isAllergic.modelValue">
              <InputText id="allergies" v-bind="allergies" type="text" :class="[{ 'p-invalid': errors.allergies && isFieldDirty('allergies') }, 'w-full']" aria-describedby="allergies-help" size="small" placeholder="Allergies" />
              <small id="allergies-help" class="p-error block" v-if="errors.allergies && isFieldDirty('allergies')">
                {{ errors.allergies }}
              </small>
              <small id="allergies-help">Celles-ci seront communiquées au traiteur</small>
            </div>

            <div class="field col-12">
              <label>Un brunch le dimanche sera proposé pour prolonger ce moment de bonheur. Serez-vous présents ?</label>
            </div>
            <div class="col-12 formgroup-inline">
              <div class="field-radiobutton">
                <RadioButton v-bind="brunch" inputId="nobrunch" name="nobrunch" :value="true" />
                <label for="nobrunch">Oui avec plaisir</label>
              </div>
              <div class="field-radiobutton">
                <RadioButton v-bind="brunch" inputId="brunch" name="brunch" :value="false" />
                <label for="brunch">Je peux pas, j'ai poney le Dimanche !</label>
              </div>
            </div>
          </div>
          <Button type="submit" label="Envoyer" :disabled="!meta.valid" />
          <Button label="Retour" @click="back(true)" />
        </template>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useForm } from 'vee-validate'
import { onBeforeMount, watch } from 'vue'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('Le nom est requis'),
  firstname: yup.string().required('Le prénom est requis'),
  nbAdults: yup.number().typeError('La valeur doit être un nombre').required('Le nombre est requis'),
  nbChildren: yup
    .number()
    .typeError('La valeur doit être un nombre')
    .nullable()
    .transform((_, val) => (val !== '' ? Number(val) : null)),
  declineNote: yup.string(),
  ageOfChildren: yup.string().when('nbChildren', {
    is: (nbChildren: number) => nbChildren > 0,
    then: () => yup.string().required("L'âge des enfants est requis")
  }),
  isAllergic: yup.boolean().required(),
  allergies: yup.string().when('isAllergic', {
    is: (isAllergic: boolean) => isAllergic === true,
    then: () => yup.string().required('Liste des allergies requise')
  }),
  brunch: yup.boolean().required(),
  nbChildMeals: yup
    .number()
    .typeError('La valeur doit être un nombre')
    .nullable()
    .transform((_, val) => (val !== '' ? Number(val) : null)),
  nbAdultMeals: yup
    .number()
    .typeError('La valeur doit être un nombre')
    .nullable()
    .transform((_, val) => (val !== '' ? Number(val) : null))
})

const { defineComponentBinds, handleSubmit, resetForm, errors, meta, isFieldDirty, isFieldValid, resetField } = useForm({
  validationSchema: schema
})

const name = defineComponentBinds('name')
const firstname = defineComponentBinds('firstname')
const nbAdults = defineComponentBinds('nbAdults')
const nbChildren = defineComponentBinds('nbChildren')
const declineNote = defineComponentBinds('declineNote')
const ageOfChildren = defineComponentBinds('ageOfChildren')
const isAllergic = defineComponentBinds('isAllergic')
const allergies = defineComponentBinds('allergies')
const brunch = defineComponentBinds('brunch')
const nbChildMeals = defineComponentBinds('nbChildMeals')
const nbAdultMeals = defineComponentBinds('nbAdultMeals')

import { ref } from 'vue'

const step = ref(0)
const submitted = ref(false)
const confirm = ref(null)
const onSubmit = handleSubmit((values) => {
  saveResponse(values)
})

const back = (reset?: boolean) => {
  step.value -= 1
  confirm.value = null
  if (reset) {
    resetField('nbAdults')
    resetField('nbChildren')
    resetField('declineNote')
    resetField('ageOfChildren')
    resetField('isAllergic')
    resetField('allergies')
    resetField('brunch')
    resetField('nbChildMeals')
    resetField('nbAdultMeals')
  }
}

const decline = () => {
  saveResponse({ name: name.value.modelValue, firstname: firstname.value.modelValue, declineNote: declineNote.value.modelValue })
}

const saveResponse = (values: any) => {
  const id = values.name.toLowerCase() + values.firstname.toLowerCase()
  const apiUrl = `https://backend-wedding-default-rtdb.europe-west1.firebasedatabase.app/rsvp/users/${id}.json`
  const data = {
    name: values.name,
    firstname: values.firstname,
    nbAdults: values.nbAdults,
    nbChildren: values.nbChildren,
    confirm: values.confirm,
    declineNote: values.declineNote,
    ageOfChildren: values.ageOfChildren,
    isAllergic: values.isAllergic,
    allergies: values.allergies,
    brunch: values.brunch,
    nbChildMeals: values.nbChildMeals,
    nbAdultMeals: values.nbAdultMeals
  }

  axios
    .put(apiUrl, data)
    .then((response) => {
      const element = document.getElementById('rsvp')
      if (element) {
        var top = element.offsetTop
        window.scrollTo(0, top)
      }
      submitted.value = true
      step.value = 0
      confirm.value = null
      resetForm()
      console.log('Données sauvées avec succès :', response.data)
    })
    .catch((error) => {
      console.error('Erreur lors de la sauvegarde des données', error)
    })
}

onBeforeMount(() => {
  resetForm()
})
watch(step, (newStep) => {
  if (newStep > 0) submitted.value = false
})
</script>

<style>
/* Add your CSS styles here */
</style>
