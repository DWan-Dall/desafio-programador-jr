<template>
    <div>
      <Sidebar />
      <div class="main-content">
        <ItemList />
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '@/components/Sidebar.vue';
  import ItemList from '@/components/ItemList.vue';
  
  export default {
    components: {
      Sidebar,
      ItemList
      }
};
</script>

<style>
.main-content {
  margin-left: 200px;
  padding: 20px;
}
</style>

   
  