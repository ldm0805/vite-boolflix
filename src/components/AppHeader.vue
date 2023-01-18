<script>
import AppSearch from './AppSearch.vue';
export default {
    components: {
        AppSearch,
    },

}
</script>
<template lang="">
    <div class="d-flex">
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/720px-Netflix_2015_logo.svg.png" alt="">
        </div>
        <AppSearch />
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;
</style>