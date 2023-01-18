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
        return `https://image.tmdb.org/t/p/w342${value.poster_path}`
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
    //Funzione stelle 
    filledStars() {
      let starFull = Math.round(this.details.vote_average / 2);
      let starsFilledArr = [];
      for (let i = 0; i < starFull; i++) {
        starsFilledArr.push('fa-solid fa-star');
      }
      //Implementazione stelle vuote
      let starEmpty = 5 - starFull;
      for (let i = 0; i < starEmpty; i++) {
        starsFilledArr.push('fa-regular fa-star');
      }
      return starsFilledArr
    },
    overviewEmpty(details) {
      if (details.overview == '') {
        return 'La descrizione non è disponibile.'
      }
      else {
        return `${this.details.overview}`
      }

    },
  }
}

//Implementazione stelle piene

</script>

<template lang="">
  <div class="container d-flex">
          <div class="wrapper">
            <div class="card">
              <img class="card-img-top front-image" :src="posterImage(details)" :alt="title(details)">
              <div class="info">
                <div class="card-body">
                  <h5 class="card-title">{{ title(details) }}</h5>
                  <p class="card-text">Titolo Originale: {{  originalTitle(details) }}</p>
                  <div class="overview">
                    <div class="card-text">Descrizione: {{overviewEmpty(details)}}</div>
                  </div>
                  <div class="card-text">Voto:
                    <i v-for="(value, index) in filledStars()" :key="index" :class="value"></i>
                  </div>
                  <p class="card-text">Lingua: {{ details.original_language }}</p>
                  <img :src="`https://www.countryflagicons.com/FLAT/64/${getFlag(details)}.png`" alt="Bandiera">
                </div>
              </div>
            </div>
          </div>
        <!-- </div> -->
      </div>

          
        </template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

i {
  color: yellow;
}


.wrapper {
  display: flex;
}

.overview {
  height: 92px;
  overflow: hidden;
}

.card {
  min-width: 280px;
  border-radius: 15px;
  padding: 1em;
  margin: 1em;
  background: white;
  position: relative;
  display: flex;
  align-items: flex-end;
  align-items: stretch;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  border-color: black;
}

.card:hover {
  transform: translateY(-20px);
}

.card:hover:before {
  opacity: 1;
}

.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}

.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}

.card .front-image {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
}

.card .info {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
}

.card .info h1 {
  margin: 0px;
}

.card .info p {
  letter-spacing: 1px;
  font-size: 15px;
  margin-top: 8px;
}


.card .info button:hover {
  background: dodgerblue;
  color: white;
}
</style>
