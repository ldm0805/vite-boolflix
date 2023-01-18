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
                console.log(results)
            })
        }
    }
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="row">
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Ricerca il film" aria-label="Ricerca il film" v-model="inputText" @keyup.enter="search(inputText)">
                <button class="btn btn-outline-secondary" type="button" @click="search(inputText)">Cerca</button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>