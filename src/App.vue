
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
</style>