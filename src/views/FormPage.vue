<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <ItemForm />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import ItemForm from '@/components/ItemForm.vue';

export default {
  components: {
    Sidebar,
    ItemForm
  }
};
</script>

<style>
.main-content {
  margin-left: 200px;
  padding: 20px;
}
</style>
