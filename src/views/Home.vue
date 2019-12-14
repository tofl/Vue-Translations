<template>
  <div class="home">
    <h1>{{ $t('welcome') }} !</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
