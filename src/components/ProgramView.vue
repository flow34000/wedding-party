<template>
  <div class="section" id="program">
    <h1 class="text-center">Le programme</h1>
    <div class="flex flex-column section-content">
      <div v-for="(event, index) in events" :key="index" class="timeline-event">
        <div class="event-logo">
          <!-- Add event logo image here -->
        </div>
        <div class="event-details">
          <h3>{{ event.time }}</h3>
          <p>{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        { time: '14h', description: 'Accueil des invités' },
        { time: '15h', description: 'Cérémonie laïque' },
        { time: '17h', description: "Vin d'honneur + photos" },
        { time: '20h30', description: 'Dîner' },
        { time: 'Party', description: 'All night' },
        { time: 'Brunch', description: 'Le dimanche à partir de 11h' }
      ]
    }
  }
}
</script>

<style>
/* Add your CSS styles here */
</style>