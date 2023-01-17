<script>
import { store } from '../store';
import AppSingleCard from './AppSingleCard.vue';
import axios from 'axios';
export default {
    components: {
        AppSingleCard,
    },
    name: 'AppMain',
    data() {
        return {
            store,
            inputText: '',
        }
    },
    methods: {
        search(input) {
            let apiCall = store.apiMovie + input;
            axios.get(apiCall).then((response) => {
                store.movieArr = response.data.results
            })
        }
    }
}
</script>
<template lang="">
    <div class="container my-4">
        <div class="row">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Ricerca il film" aria-label="Ricerca il film" v-model="inputText" @keyup.enter="search(inputText)">
                <button class="btn btn-outline-secondary" type="button" @click="search(inputText)">Cerca</button>
            </div>
        </div>
        <div class="mb-5">
            Ho trovato {{ store.movieArr.length }} film
        </div>
        <div class="row row-cols-5 gap-5 justify-content-between">
            <AppSingleCard v-for="(item, index) in store.movieArr" :key="index" :movie="item" />
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>