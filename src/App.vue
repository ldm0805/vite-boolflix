
<script>
import { store } from './store';
import AppContent from './components/AppContent.vue';
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppContent,
    AppHeader,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template lang="">
<div>
  <AppHeader />
  <AppContent />
</div>
</template>

<style lang="scss">
@use './styles/general.scss';

/* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: red;
  border-radius: 5px;
}
</style>