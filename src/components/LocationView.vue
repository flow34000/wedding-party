<template>
  <div id="location" class="section location-section">
    <SectionTop></SectionTop>
    <h1 class="text-center">Infos pratiques</h1>
    <div class="flex flex-column section-content gap-3 text-justify">
      <p>
        Rejoignez-nous au cœur du Beaujolais des pierres dorées, directement au magnifique domaine viticole des
        <a href="http://coteauxdor.com/">Côteaux d'Or</a>...
      </p>
      <p>
        Adresse :
        <a href="https://www.google.fr/maps/place/Chem.+de+Graves/@45.9584427,4.6335932,17z/data=!4m7!3m6!1s0x47f488a63cdfd1bb:0xbe635ff11809117f!4b1!8m2!3d45.958439!4d4.6361681!16s%2Fg%2F1tj2h6_q?entry=ttu">409 chemin des Graves 69400 Porte des Pierres Dorées</a>
      </p>

      <p class="font-bold uppercase text-center">Pour vous y rendre :</p>
      <div class="flex justify-content-center">
        <img src="../assets/003-voiture.png" style="width: 50px" />
      </div>
      <div class="border-solid border-green-700">
        <iframe width="100%" height="450" style="border: 0" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC8hGOmuUWhoFCW2oZfjXH08Y17iNhHc6E&q=409 Chem. de Graves, 69400 Porte des Pierres Dorées">
        </iframe>
      </div>

      <p>
        ATTENTION: Pour les invités prenant la route le samedi directement prévoyez un temps supplémentaire pour traverser le tunnel de
        Fourvière à Lyon.
      </p>
      <div class="flex justify-content-center">
        <img src="../assets/001-train.png" style="width: 70px" />
      </div>
      <p>
        La gare la plus proche est celle de Villefranche-sur-Saône (le domaine se situe ensuite à 14min).<br />
        Sinon prévoir 50min de voiture/taxi depuis la gare de Lyon Part-Dieu.
      </p>

      <div class="flex justify-content-center">
        <img src="../assets/002-flight-mode.png" style="width: 60px" />
      </div>
      <p>
        Depuis l'aéroport Lyon Saint-Exupéry, ne prenez pas le Rhône-Express pour aller à la gare Part-Dieu, ce trajet vous rallongera d'une
        heure! Louer une voiture directement depuis l'aéroport ou faite du stop si vous êtes courageux et que vous avez du temps devant
        vous. L'aéroport se trouve à 50min du domaine.
      </p>

      <div class="flex justify-content-center">
        <img src="../assets/car-sharing.png" style="width: 70px" />
      </div>
      <p>Pensez aussi au covoiturage, nous pouvons mettre en lien les invités non véhiculés avec ceux véhiculés!</p>

      <h2 class="text-center">Les hébergements</h2>
      <p>
        Il ne sera pas possible de dormir dans la salle du domaine, un gardien sera sur place et fermera à clé à 5h du matin. Nous vous
        recommandons de loger dans des gîtes dans les environs du domaine. Malheureusement peu d'entre eux sont accessibles à pied. Nous
        avons identifié quelques gîtes et effectué des pré-réservations dans les gîtes ci-dessous.
      </p>
      <p>Premier arrivé, premier servi!</p>

      <div class="grid">
        <div class="col-12 md:col-5 flex align-items-center">
          <img class="border-round w-full" src="https://a0.muscache.com/im/pictures/hosting/Hosting-1010061113473015361/original/e12ed261-6a8d-4e12-8ded-305223c9b3d2.jpeg?im_w=1440" style="height: fit-content" />
        </div>
        <div class="col-12 md:col-7 flex-column flex gap-2">
          <p class="font-bold"><i class="pi pi-star-fill"></i> Nouveau</p>
          <p class="font-bold">Le clos du botaniste <small>(2 min à pied)</small></p>
          <a href="https://www.airbnb.fr/rooms/1010061113473015361">https://www.airbnb.fr</a>
          <p class="line-through">Gîte de 6 personnes - 30€/pers</p>
          <p class="line-through">2 chambres : 2 et 4 personnes</p>
          <p class="text-red-500 uppercase">complet</p>
        </div>
      </div>

      <div class="grid">
        <div class="col-12 md:col-5 flex align-items-center">
          <img class="border-round w-full" src="https://www.laubedumoulin.fr/wp-content/uploads/2018/04/galerie-exterieur-facade-principale-460x295.jpg" style="height: fit-content" />
        </div>
        <div class="col-12 md:col-7 flex-column flex gap-2">
          <p class="font-bold">L'Aube du moulin <small>(8 min en voiture)</small></p>
          <a href="https://www.laubedumoulin.fr/">https://www.laubedumoulin.fr</a>
          <p class="line-through">Gîte le moulinois (7 pers, 3ch) - 30€/pers/nuit</p>
          <p class="text-red-500 uppercase">complet</p>
          <p class="line-through">Gîte le minotier (12 pers, 4ch dont 2 de 4 couchages) - 30€/pers/nuit</p>
          <p class="text-red-500 uppercase">complet</p>
          <p class="line-through">Chambre d'hôtes l’aubière (2 pers, 1 ch) - 30€/pers/nuit</p>
          <p class="text-red-500 uppercase">complet</p>
        </div>
      </div>

      <div class="grid">
        <div class="col-12 md:col-5 flex align-items-center">
          <img class="border-round w-full" src="https://gitedesessarts.files.wordpress.com/2022/04/cropped-8cf9b58f-f30f-4e8f-a6e7-a0c2cabfcaf7.jpg" style="height: fit-content" />
        </div>
        <div class="col-12 md:col-7 flex-column flex gap-2">
          <p class="font-bold">Gîte des Essarts <small>(20 min à pied)</small></p>
          <a href="https://gitedesessarts.com/">https://gitedesessarts.com</a>
          <p class="line-through">Gîte de 15 personnes - 30€/pers</p>
          <p class="line-through">2 chambres : 8 et 7 personnes</p>
          <p class="text-red-500 uppercase">complet</p>
        </div>
      </div>
      <p>
        D'autres hébergements existent dans les environs même si beaucoup d'entre eux semblent déjà réservés. N'hésitez pas à regarder sur
        Gîtes de France, Airbnb, les hôtels environnants (ex:
        <a class="underline" href="https://www.booking.com/hotel/fr/the-liberty-s.fr.html">The Liberty's</a>) ou les campings environnants
        (ex:
        <a class="underline" href="https://www.capfun.com/camping-france-rhone_alpes-port_du_beaujolais-FR.html">Camping Les Portes du Beaujolais</a>).
      </p>
      <p class="font-bold">Nous mettrons à jour cette liste prochainement.</p>
      <p>Pour les plus téméraires, il sera aussi possible de planter une toile de tente en contrebas du domaine.</p>
      <div class="">
        <img class="border-round w-full" src="../assets/domaine_tentes_emplacement.jpg" />
      </div>
      <h2 class="text-center">Les baby-sitters</h2>
      <p>
        Nous avons l'obligation de prévoir des baby-sitters sur le domaine dès lors qu'il y a des enfants entre 3 et 13 ans. Celles-ci
        seront présentes à partir de 18h30 jusqu'à environ 3h du matin. Les enfants auront une salle dédiée, attenante à la salle
        principale, pour prendre leur repas et faire des activités avec les baby-sitters.
      </p>
      <p>
        Les repas pour les enfants de moins de 3 ans ne seront pas prévus (sauf indication contraire de votre part pour les enfants entre 2
        et 3 ans). Les ados (>10 ans) auront une table rien que pour eux dans la salle principale.
      </p>
      <p>
        ATTENTION: Dès lors qu'un enfant quitte la salle des enfants pour rejoindre ses parents, il n'est plus sous la responsabilité des
        baby-sitters.
      </p>
      <p>
        Un gîte mitoyen à la salle sera utilisé pour le couchage des enfants jusqu'au départ des parents. Une baby-sitter y sera présente en
        permanence dès le premier enfant couché. Merci de prévoir et installer les lits parapluie de vos petits. Si votre enfant a des
        habitudes spécifiques (veilleuse, couches...) merci de le noter quelque part dans les affaires de votre enfant et de le notifier
        oralement à la baby-sitter durant la soirée.
      </p>
      <p>
        Afin d'assurer la sécurité de vos bambins, il est indispensable que nous sachions au plus tard le 29 Février 2024 s'ils se joindront
        au mariage. Merci de le préciser lorsque vous confirmerez votre présence.
      </p>
      <a class="text-center" href="#rsvp"><Button label="RSVP" icon="pi pi-send" raised rounded size="small" /></a>
    </div>
  </div>

  <Dialog v-model:visible="visible" modal :header="`Réserver ${selectedForm}`" :style="{ width: '30vw' }" :breakpoints="{ '960px': '50vw', '641px': '70vw' }">
    <template #default>
      <Message severity="success" v-if="submitted" :sticky="false" :life="3000">Votre réponse a bien été enregistrée</Message>
      <LocationForm @submited="submit" :show-gite="true"></LocationForm>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import LocationForm from './LocationForm.vue'

const visible = ref(false)
const submitted = ref(false)
const selectedForm = ref('')

const showDialog = (name: string) => {
  submitted.value = false
  visible.value = true
  selectedForm.value = name
}

function submit(values: any) {
  const id = values.name.toLowerCase() + values.firstname.toLowerCase()
  const apiUrl = `https://backend-wedding-default-rtdb.europe-west1.firebasedatabase.app/rsvp/hostel/${id}.json`
  const data = {
    firstname: values.firstname,
    name: values.name,
    nbPeople: values.nbPeople,
    gite: `${selectedForm.value}:  ${values.gite}`,
    date: new Date()
  }

  axios
    .put(apiUrl, data)
    .then((response) => {
      console.log('Données sauvées avec succès :', response.data)
    })
    .catch((error) => {
      console.error('Erreur lors de la sauvegarde des données', error)
    })
  submitted.value = true
}
</script>

<style>
/* Add your CSS styles here */
</style>
