<template>
  <div id="app">
    <Sidebar />
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
};
</script>

<style>
.main-content {
  margin-left: 200px; 
  padding: 20px;
}
</style>