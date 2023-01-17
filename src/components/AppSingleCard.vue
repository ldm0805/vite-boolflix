<script>

export default {
  name: 'Card',
  props: {
    movie: Object,
  },
}
</script>

<template lang="">

<div class="card">
  <img class="card-img-top" :src="`https://www.themoviedb.org/t/p/w300/${(movie.poster_path)}`">
  <div class="card-body">
    <h5 class="card-title">Titolo: {{ movie.title }} {{movie.name}}</h5>
    <p class="card-text">Titolo Originale: {{ movie.original_title }} {{movie.name}}</p>
    <p class="card-text">Voto: {{ movie.vote_average }}</p>
    <p class="card-text">Lingua: {{ movie.original_language }}</p>
    <img :src="`https://www.countryflagicons.com/FLAT/64/${(movie.original_language).toUpperCase()}.png`">
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>
