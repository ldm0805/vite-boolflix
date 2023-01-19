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
    <div class="container-all">
        <div v-if="store.loading">
            <div class="d-flex justify-content-center">
                <div class="txt" contenteditable="true">Boolflix</div>
            </div>
        </div>
        <div v-else>
            <div class="container-card mt-5">
                <AppSingleCard v-for="(item, index) in store.movieArr" :key="index" :details="item" v-model="change" @change="$emit('selection', change)"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.container-card {
    padding: 1em;
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
}

.container-all {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.loading {

    width: 500px;
    display: flex;
    justify-content: center;
    animation: heartBeat infinite;
    animation-duration: 3s;

    img {
        width: 100%;
    }
}

@function makelongshadow($length, $angle) {
    $val: 0px 0px transparent;

    @for $i from 1 through $length {
        $val: #{$val},
        #{$i}px #{$i * $angle}px rgb(99, 99, 99);
    }

    @return $val;
}



.txt {
    text-align: center;
    font-family: "Roboto";
    font-size: 12vmin;
    font-weight: 700;
    animation: netflix_style 3.5s infinite;
    outline: none;
    white-space: nowrap;
}

@keyframes netflix_style {
    0% {
        text-shadow: makelongshadow(100, 1);
        color: #868484;
        transform: scale(1.5, 1.5);
    }

    10% {
        text-shadow: makelongshadow(100, 1.5);
        color: #f3f3f3;
        transform: scale(1.5, 1.5);
    }

    15% {
        color: #f3f3f3;
    }

    20% {
        color: #e90418;
        text-shadow: none;
        transform: scale(1.1, 1.1);
    }

    75% {
        opacity: 1;
    }

    80% {
        opacity: 0;
        color: #e90418;
        transform: scale(0.85, 0.9);
    }

    100% {
        opacity: 0;
    }
}
</style>