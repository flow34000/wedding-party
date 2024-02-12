<template>
  <div class="flex flex-column p-4 md:pl-8 md:pr-8 gap-4">
    <div class="flex justify-content-end">
      <Button type="button" label="Actualiser" icon="pi pi-sync" @click="loadData" />
    </div>
    <div class="grid">
      <div class="col-12 md:col-3">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Nombre de réponses</span>
                <div class="text-900 font-medium text-xl">{{ users.length }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-blue-100" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-check text-xl"></i>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 md:col-3">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Présents</span>
                <div class="text-900 font-medium text-xl">{{ positiveResponses.length }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-green-200" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-heart-fill text-xl"></i>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 md:col-3">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Absents</span>
                <div class="text-900 font-medium text-xl">{{ declineResponses.length }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-red-100" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-times text-xl"></i>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 md:col-3">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Présents au Brunch</span>
                <div class="text-900 font-medium text-xl">{{ nbBrunch }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-yellow-100" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-heart text-xl"></i>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 md:col-4">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Nombre d'adultes</span>
                <div class="text-900 font-medium text-xl">{{ nbAdults }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-blue-100" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-users text-xl"></i>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 md:col-4">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Nombre d'enfants</span>
                <div class="text-900 font-medium text-xl">{{ nbChildren }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-blue-100" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-users text-xl"></i>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <div class="col-12 md:col-4">
        <Card>
          <template #content>
            <div class="flex justify-content-between">
              <div>
                <span class="block text-500 font-medium mb-3">Repas enfants</span>
                <div class="text-900 font-medium text-xl">{{ nbChildMeals + nbAdultMeals }}</div>
              </div>
              <div class="flex align-items-center justify-content-center border-round bg-blue-100" style="width:2.5rem;height:2.5rem;">
                <i class="pi pi-list text-xl"></i>
              </div>
            </div>
            <span class="text-500 font-medium">{{ nbChildMeals }} menus enfants et {{ nbAdultMeals }} menus adultes</span>
          </template>
        </Card>
      </div>
    </div>
    <DataTable :value="positiveResponses" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Réponses</span>
        </div>
      </template>
      <Column field="name" header="Nom" sortable style="width: 25%"></Column>
      <Column field="firstname" header="Prénom" sortable style="width: 25%"></Column>
      <Column field="nbAdults" header="Adultes" sortable style="width: 25%"></Column>
      <Column field="nbChildren" header="Enfants" sortable style="width: 25%"></Column>
      <Column field="brunch" header="Brunch" sortable style="width: 25%">
        <template #body="slotProps">
          <i class="pi pi-check text-xl" style="color: green" v-if="slotProps.data.brunch"></i>
          <i class="pi pi-times text-xl" style="color: red" v-else></i>
        </template>
      </Column>
      <Column field="nbChildMeals" header="Repas Enfants" sortable style="width: 25%"></Column>
      <Column field="nbAdultMeals" header="Repas adultes" sortable style="width: 25%"></Column>
    </DataTable>
    <DataTable :value="allergies" tableStyle="min-width: 50rem">
      <template #header>
        <div class="flex flex-wrap align-items-center justify-content-between gap-2">
          <span class="text-xl text-900 font-bold">Allergies</span>
        </div>
      </template>
      <Column field="name" header="Nom" sortable style="width: 25%"></Column>
      <Column field="allergy" header="Allergies" sortable style="width: 25%"></Column>
    </DataTable>

    <Panel header="Petits mots">
      <div class="flex flex-column gap-2">
        <Panel :header="note.name" v-for="(note, i) of declineNotes" :key="i">
          <p class="m-0">
            {{ note.note }}
          </p>
        </Panel>
      </div>
    </Panel>
  </div>
</template>

<script setup lang="ts">
import axios, { type AxiosResponse } from 'axios'
import { computed, onMounted, ref, type Ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Card from 'primevue/card'
import Panel from 'primevue/panel'

interface ApiResponse {
  name: string
  firstname: string
  nbAdults: number
  nbChildren: number
  confirm: boolean
  declineNote: string
  ageOfChildren: string
  isAllergic: boolean
  allergies: string
  brunch: boolean
  nbChildMeals: number
  nbAdultMeals: number
}

const users = ref([]) as Ref<ApiResponse[]>

const loadData = () => {
  users.value = []
  const apiUrl = `https://backend-wedding-default-rtdb.europe-west1.firebasedatabase.app/rsvp/users.json`
  axios
    .get(apiUrl)
    .then((response: AxiosResponse<{ [key: string]: ApiResponse }>) => {
      console.log('Données récupérées avec succès :', response.data)
      for (const key in response.data) {
        users.value.push(response.data[key])
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la récupération des données', error)
    })
}

const positiveResponses = computed(() => users.value.filter((u) => !u.declineNote))
const declineResponses = computed(() => users.value.filter((u) => u.declineNote))
const nbAdults = computed(() => positiveResponses.value.reduce((sum, response) => sum + +response.nbAdults, 0))
const nbChildren = computed(() =>
  positiveResponses.value.reduce((sum, response) => (response.nbChildren ? sum + +response.nbChildren : sum + 0), 0)
)
const nbBrunch = computed(() => positiveResponses.value.filter((u) => u.brunch).length)

const nbChildMeals = computed(() =>
  positiveResponses.value.reduce((sum, response) => (response.nbChildMeals ? sum + +response.nbChildMeals : sum + 0), 0)
)
const nbAdultMeals = computed(() =>
  positiveResponses.value.reduce((sum, response) => (response.nbAdultMeals ? sum + +response.nbAdultMeals : sum + 0), 0)
)
const declineNotes = computed(() => {
  const responses: any[] = []
  declineResponses.value.forEach((u) => responses.push({ name: `${u.firstname} ${u.name}`, note: u.declineNote }))
  return responses
})
const allergicResponses = computed(() => positiveResponses.value.filter((u) => u.isAllergic))
const allergies = computed(() => {
  const response: any[] = []
  allergicResponses.value.forEach((a) => response.push({ name: `${a.firstname} ${a.name}`, allergy: a.allergies }))
  return response
})
onMounted(() => {
  loadData()
})
</script>
