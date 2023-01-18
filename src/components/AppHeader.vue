<script>
import AppSearch from './AppSearch.vue';
export default {
    components: {
        AppSearch,
    },

}
</script>
<template lang="">
    <div class="search_cont">
        <div class="left-search">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/720px-Netflix_2015_logo.svg.png" alt="netflix_logo">
        </div>
        <div class="right-search">
            <AppSearch />
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.search_cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;


    .left-search,
    .right-search {
        padding: 2em 2em;

        img {
            width: 30%;
        }
    }



}
</style>