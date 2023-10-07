<template>
  <div class="section" id="program">
    <SectionTop></SectionTop>
    <h1 class="text-center">Le programme</h1>
    <div class="flex flex-column section-content gap-3">
      <p>La cérémonie civile se déroulera le vendredi 28 Juin à la mairie d'Irigny uniquement avec les témoins et les parents des mariés.</p>

      <p>Nous attendons tous les autres invités directement au domaine le samedi 29 Juin à partir de 16h.</p>

      <div class="flex relative mt-3 mb-3">
        <img src="../assets/feuilletige.png" class="absolute bottom-0" style="width:15%" />
        <img src="../assets/programme.png" class="w-full" />
      </div>
      <p> Pour plus d'informations pratiques sur le domaine des Côteaux d'Or, les hébergements et les baby-sitters, <a class="underline" href="#location">voir les infos pratiques </a>.</p>
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