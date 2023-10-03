<template>
  <div class="section" id="program">
    <h1 class="text-center">Le programme</h1>
    <div class="flex flex-column section-content">
      <p>La cérémonie civile se déroulera le vendredi 28 Juin à la mairie d'Irigny uniquement avec les témoins et les parents des mariés.</p>
      
      <p>Nous attendons tous les autres invités directement au domaine le samedi 29 Juin à partir de 16h.</p>
      
      <img src="../assets/programme.png" />
      
      <p> Pour plus d'informations pratiques sur le domaine des Coteaux d'Or, les hébergements et les baby-sitters, cliquez ici: </p>
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