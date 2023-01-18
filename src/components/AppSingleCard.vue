<script>
export default {
  name: 'Card',
  props: {
    details: Object,
  },
  methods: {
    // Funzione per impostare il titolo della serie tv oppure del film
    title(value) {
      if (value.media_type == 'tv') {
        return `Serie Tv: ${value.name}.`
      }
      else if (value.media_type == 'movie') {
        return `Film: ${value.title}.`
      }
      else {
        return `Il titolo non è disponibile`
      }
    },
    // Funzione per impostare il titolo originale della serie tv oppure del film
    originalTitle(value) {
      if (value.media_type == 'tv') {
        return value.original_name
      }
      else if (value.media_type == 'movie') {
        return value.original_title
      }
      else {
        return `Il titolo non è disponibile`
      }
    },
    //Funzione inserire il path dell'immagine di copertina
    posterImage(value) {
      if (value.poster_path) {
        return `https://image.tmdb.org/t/p/w300${value.poster_path}`
      }
      else {
        return `https://www.emugifs.net/wp-content/uploads/2021/07/Eh-Volevi-GIF-Zeb89-MEME-Reazione-Divertente-dello-YouTuber-Italiano-da-Usare-nei-Commenti-ai-Post-di-Facebook-o-nei-Gruppi-WhatsApp-Scarica-Gratis-e-Condividi.gif`
      }
    },
    //Funzione per le bandiere
    getFlag(value) {
      let lang = '';

      if (value.original_language) {
        switch (value.original_language) {
          default:
            lang = (value.original_language)
            break;

          case 'en':
            lang = 'gb'
            break;

          case 'ja':
            lang = 'jp'
            break;
        }
        let urlFlag = lang.toUpperCase()
        return urlFlag
      }
    },

  },
  //Implementazione stelle piene
  computed: {
    filledStars() {
      let starsFilledArr = [];
      for (let i = 0; i < 5; i++) {
        if (i < Math.round(this.details.vote_average / 2)) {
          starsFilledArr.push(i);
        }
      }
      return starsFilledArr;
    },
    //Implementazione stelle vuote
    emptyStars() {
      let emptyStarsArr = [];
      for (let i = 0; i < 5 - Math.round(this.details.vote_average / 2); i++) {
        emptyStarsArr.push(i);
      }
      return emptyStarsArr;
    }
  }
}

</script>

<template lang="">

<div class="card">
  <img class="card-img-top" :src="posterImage(details)" :alt="title(details)">
  <div class="card-body">
    <h5 class="card-title">{{ title(details) }}</h5>
    <p class="card-text">Titolo Originale: {{  originalTitle(details) }}</p>
    <p class="card-text">Voto: 
      <i v-for="n in filledStars" class="fa-solid fa-star"></i>
      <i v-for="n in emptyStars" class="fa-regular fa-star"></i>
    </p>
    <p class="card-text">Lingua: {{ details.original_language }}</p>
    <img :src="`https://www.countryflagicons.com/FLAT/64/${getFlag(details)}.png`">
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

i {
  color: yellow;
}
</style>
