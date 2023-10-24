<template>
  <form novalidate @submit.prevent="onSubmit" class="flex flex-column gap-2 mt-1">
    <InputText id="firstname" v-bind="firstname" type="text" :class="{ 'p-invalid': errors.firstname && isFieldDirty('firstname') }" aria-describedby="firstname-help" size="small" placeholder="Prénom*" />
    <small id="firstname-help" class="p-error" v-if="errors.firstname && isFieldDirty('firstname')">
      {{ errors.firstname }}
    </small>
    <InputText id="name" v-bind="name" type="text" :class="{ 'p-invalid': errors.name && isFieldDirty('name') }" aria-describedby="text-error" size="small" placeholder="Nom*" />
    <small id="name-help" class="p-error" v-if="errors.name && isFieldDirty('name')">
      {{ errors.name }}
    </small>
    <InputText id="nbPeople" v-bind="nbPeople" type="text" :class="[{ 'p-invalid': errors.nbPeople && isFieldDirty('nbPeople') }, 'w-full']" aria-describedby="text-error" size="small" placeholder="Nombre de personnes*" />
    <small id="nbPeople-help" class="p-error" v-if="errors.nbPeople && isFieldDirty('nbPeople')">
      {{ errors.nbPeople }}
    </small>
    <template v-if="showGite">
      <InputText id="gite" v-bind="gite" type="text" :class="[{ 'p-invalid': errors.gite && isFieldDirty('gite') }, 'w-full']" aria-describedby="text-error" size="small" placeholder="Nom du gîte/chambre*" />
      <small id="gite-help" class="p-error" v-if="errors.gite && isFieldDirty('gite')">
        {{ errors.gite }}
      </small>
    </template>
    <small>Note: Le montant sera à rembourser aux mariés avant le 29 Février 2024. </small>
    <Button type="submit" label="Valider" class="mt-2" :disabled="!meta.valid" />
  </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate';
import { onBeforeMount } from 'vue';
import * as yup from 'yup';

const emit = defineEmits(['submited'])

const props = defineProps<{
  showGite?: boolean
}>()

const schema = yup.object({
  name: yup.string().required('Le nom est requis'),
  firstname: yup.string().required('Le prénom est requis'),
  nbPeople: yup.number().typeError('La valeur doit être un nombre').required('Le nombre est requis'),
  gite: props.showGite ? yup.string().required('Le nom est requis') : yup.string()
})

const { defineComponentBinds, handleSubmit, resetForm, errors, meta, isFieldDirty } = useForm({
  validationSchema: schema
})

const name = defineComponentBinds('name');
const firstname = defineComponentBinds('firstname');
const nbPeople = defineComponentBinds('nbPeople');
const gite = defineComponentBinds('gite');

const onSubmit = handleSubmit((values) => {
  emit('submited', values)
})

onBeforeMount(() => {
  resetForm()
})
</script>