<script>
import { store } from '../store';
export default {
    name: 'Card',
    props: {
        movie: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">

<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Titolo del film: {{ movie.title }}</h5>
    <p class="card-text">Titolo Originale: {{ movie.original_title }}</p>
    <p class="card-text">Voto: {{ movie.vote_average }}</p>
    <p class="card-text">Lingua: {{ movie.original_language }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>

</style>
