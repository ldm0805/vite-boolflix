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
    <div class="mt-5">
        <div class="container-card">
            <AppSingleCard v-for="(item, index) in store.movieArr" :key="index" :details="item" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container-card {
    padding: 1em;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 2em;
}
</style>