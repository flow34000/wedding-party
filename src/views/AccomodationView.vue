<template>
  <div id="accomodation" class="section accommodation-section">
    <h2>Hébergement à proximité</h2>
    <div class="accommodation-list">
      <div v-for="(place, index) in accommodations" :key="index" class="accommodation-item">
        <div class="accommodation-image">
          <!-- Add accommodation image here -->
        </div>
        <div class="accommodation-details">
          <h3>{{ place.name }}</h3>
          <p>{{ place.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accommodations: [
        { name: 'Hôtel Luxe', address: "Adresse de l'hôtel..." },
        { name: 'Auberge Charme', address: "Adresse de l'auberge..." }
        // Add more accommodation places as needed
      ]
    }
  }
}
</script>

<style>
/* Add your CSS styles here */
</style>