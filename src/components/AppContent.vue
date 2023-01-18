<script>
import { store } from '../store';
import AppSingleCard from './AppSingleCard.vue';

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
}
</script>
<template lang="">
    <div class="container mt-5">
        <div class="mb-5">
            Ho trovato {{ store.movieArr.length }} film
        </div>
        <div class="row row-cols-5 gap-3 justify-content-between">
            <AppSingleCard v-for="(item, index) in store.movieArr" :key="index" :details="item" />
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>