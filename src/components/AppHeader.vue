<script>
import AppSearch from './AppSearch.vue';
// import newAccount from '../components/newAccount.vue';
import catCard from '../components/catCard.vue';
import { store } from '../store.js'
import axios from 'axios';

export default {
    components: {
        AppSearch,
        // newAccount,
        catCard,
        store

    },
    data() {
        return {
            activeItem: 0,
            menu: [
                // {
                //     label: 'Home',
                //     url: '#',
                //     active: false
                // },
                {
                    label: 'Film',
                    url: '#',
                    active: true
                },
                {
                    label: 'Serie Tv',
                    url: '#',
                    active: false
                },
                {
                    label: 'Documentari',
                    url: '#',
                    active: false
                },
                {
                    label: 'Nuovi e popolari',
                    url: '#',
                    active: false
                },
                // {
                //     label: 'La mia lista',
                //     url: '#',
                //     active: false
                // },
            ],
            listOfCats: [
                {
                    title: "Leonardo",
                    sub: 'Di Maggio',
                    visible: true,
                    url: 'https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png',
                },
                // {
                //     title: "Fabrizio",
                //     visible: true,
                //     url: 'https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png'
                // },
                // {
                //     title: "Alessio",
                //     visible: true,
                //     url: 'https://i.pinimg.com/originals/61/54/76/61547625e01d8daf941aae3ffb37f653.png'
                // },
            ]
        }
    },
    methods: {
        selectedItem(index) {
            this.activeItem = index
        },
        searchAll() {
            let apiCall = store.apiMovie + store.inputText;
            axios.get(apiCall).then((response) => {
                store.movieArr = response.data.results
                store.loading = false;
            })
        }
    }
}
</script>
<template lang="">
    <div class="search_cont">
        <div class="left-search d-flex">
            <h1>Boolflix</h1>
            <ul>
                <!-- For per la navbar + click sugli elementi per assegnare la classe active -->
                <li v-for="(item, index) in menu" :key="index" @click="selectedItem(index)"
                :class="(activeItem === index) ? 'active' : ''">
                <a :href="item.url">
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </div>
    <div class="right-search d-flex">
        <AppSearch @search="searchAll"/>
        
    </div>
    <div class="card_prof" v-for="cat in listOfCats" :key="cat.title">
          <img :src="cat.url" v-if="cat.visible">
          <div class="description">
              <h6>{{ cat.title }}</h6>
              <h6>{{ cat.sub }}</h6>
            </div>
        </div>
</div>
<!-- <newAccount v-on:create-new-cat="addCat($event)"/> -->
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.card_prof {
    display: flex;
    gap: 1em;
    color: white;
    align-items: center;
    justify-content: end;

    img {
        width: 50px;
    }
}

.search_cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    padding: 0em 2em;

    h1 {
        color: red;
    }

    .left-search,
    .right-search {
        padding: 2em 1em;
        align-items: center;

        img {
            width: 30%;
        }
    }



    ul {
        display: flex;
        list-style-type: none;
        align-items: center;

        .active {
            border-bottom: 2px solid red;
            padding-bottom: 1em;
        }

        li a {
            padding: 0em 1em;
            font-size: 16px;
            text-decoration: none;
            transition: border 0.3s;
            color: white;
            font-size: 15px;
            font-weight: 500;

        }
    }
}
</style>