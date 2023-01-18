<script>
import { store } from '../store';
import axios from 'axios';
export default {
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
                store.loading = false;
            })
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div class="input-group">
                <input type="text" id="search" class="form-control" placeholder="Ricerca il film" aria-label="Ricerca il film" v-model="inputText" @keyup.enter="search(inputText)" @selection="search">
                <button class="btn btn-danger" type="button" @click="search(inputText)"  @selection="search">Cerca</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
</style>