<template>
    <div>
      <div class="main-content">
        <Sidebar />
        <router-view></router-view>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  
  export default {
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
  