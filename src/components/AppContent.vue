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
    <div v-if="store.loading">
        <div class="d-flex justify-content-center">
            <div class="loading animate__infinite animate__heartBeat_ ">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="">
            </div>
        </div>
    </div>
    <div v-else>
        <div class="container-card mt-5">
            <AppSingleCard v-for="(item, index) in store.movieArr" :key="index" :details="item" v-model="change" @change="$emit('selection', change)"/>
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

img {
    width: 80%;
}

.loading {
    width: 500px;
    display: flex;
    justify-content: center;
    margin-top: 10em;
    animation: heartBeat infinite;
    animation-duration: 2s;
}
</style>