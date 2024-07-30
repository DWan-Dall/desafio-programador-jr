<template>
    <div class="container">
      <button @click="$router.push('/form')" class="btn btn-primary mb-3">Adicionar Item</button>
      
      <!-- Tabela Principal -->
      <div class="table-container">
        <table class="table table-bordered table-sm">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Unidade</th>
              <th>Quantidade</th>
              <th>Preço</th>
              <th>Perecível</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.name }}</td>
              <td>{{ item.unit }}</td>
              <td>{{ item.quantity }}</td>
              <td>{{ formatPrice(item.price) }}</td>
              <td>{{ item.perishable ? 'Sim' : 'Não' }}</td>
              <td>
                <button @click="showDetails(index)" class="btn btn-info btn-sm me-2">Detalhes</button>
                <button @click="editItem(index)" class="btn btn-warning btn-sm me-2">Editar</button>
                <button @click="deleteItem(index)" class="btn btn-danger btn-sm">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <!-- Tabela de Detalhes (oculta por padrão) -->
      <div v-if="selectedItem" class="details-table mt-4">
        <h4>Detalhes do Item</h4>
        <table class="table table-bordered table-sm">
          <tbody>
            <tr>
              <th>Data de Validade</th>
              <td>{{ selectedItem.expiryDate ? formatDate(selectedItem.expiryDate) : 'Não Informado' }}</td>
            </tr>
            <tr>
              <th>Data de Fabricação</th>
              <td>{{ formatDate(selectedItem.manufactureDate) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [],
        selectedItem: null
      };
    },
    created() {
      this.loadItems();
    },
    methods: {
      loadItems() {
        this.items = JSON.parse(localStorage.getItem('items')) || [];
      },
      showDetails(index) {
        this.selectedItem = this.items[index];
      },
      editItem(index) {
        this.$router.push({ path: '/form', query: { index } });
      },
      deleteItem(index) {
        if (confirm('Você realmente deseja excluir este item?')) {
          this.items.splice(index, 1);
          localStorage.setItem('items', JSON.stringify(this.items));
          this.loadItems();
          this.selectedItem = null;
        }
      },
      formatDate(dateString) {
        if (!dateString) return 'Não Informado';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
      },
      formatPrice(priceString) {
        return `R$ ${parseFloat(priceString).toFixed(2).replace('.', ',')}`;
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .table-container {
    margin-top: 20px;
  }
  
  .table {
    text-align: center;
    font-size: 1rem;
  }
  
  .table th, .table td {
    vertical-align: middle;
  }
  
  .details-table {
    background: #f8f9fa;
    border-radius: 8px;
    padding: 10px;
  }
  
  .table-sm th, .table-sm td {
    padding: 0.5rem;
  }
  </style>
  