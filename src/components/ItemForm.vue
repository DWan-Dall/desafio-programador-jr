<template>
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="card">
            <div class="card-header">
              <h4>{{ isEditing ? 'Editar Item' : 'Cadastro de Item' }}</h4>
            </div>
            <div class="card-body">
              <form @submit.prevent="saveItem">
                <div class="mb-3">
                  <label for="name" class="form-label">Nome do item:</label>
                  <input
                    type="text"
                    id="name"
                    class="form-control"
                    v-model="item.name"
                    required
                    maxlength="50"
                    @input="validateName"
                  />
                  <div v-if="errors.name" class="text-danger">{{ errors.name }}</div>
                </div>
  
                <div class="mb-3">
                  <label for="unit" class="form-label">Unidade de medida:</label>
                  <select
                    id="unit"
                    class="form-select"
                    v-model="item.unit"
                    required
                  >
                    <option value="" disabled>Selecione...</option>
                    <option value="litro">Litro</option>
                    <option value="quilograma">Quilograma</option>
                    <option value="unidade">Unidade</option>
                  </select>
                </div>
  
                <div class="mb-3">
                  <label for="quantity" class="form-label">Quantidade:</label>
                  <input
                    type="number"
                    id="quantity"
                    class="form-control"
                    v-model="item.quantity"
                    :step="unitStep"
                    :pattern="unitPattern"
                  />
                  <div v-if="errors.quantity" class="text-danger">{{ errors.quantity }}</div>
                </div>
  
                <div class="mb-3">
                  <label for="price" class="form-label">Preço:</label>
                  <input
                    type="text"
                    id="price"
                    class="form-control"
                    v-model="item.price"
                    @input="validatePrice"
                  />
                  <div v-if="errors.price" class="text-danger">{{ errors.price }}</div>
                </div>
  
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    id="perishable"
                    class="form-check-input"
                    v-model="item.perishable"
                  />
                  <label for="perishable" class="form-check-label">Produto Perecível</label>
                </div>
  
                <div class="mb-3" v-if="item.perishable">
                  <label for="expiryDate" class="form-label">Data de Validade:</label>
                  <input
                    type="date"
                    id="expiryDate"
                    class="form-control"
                    v-model="item.expiryDate"
                    :required="item.perishable"
                  />
                  <div v-if="errors.expiryDate" class="text-danger">{{ errors.expiryDate }}</div>
                </div>
  
                <div class="mb-3">
                  <label for="manufactureDate" class="form-label">Data de Fabricação:</label>
                  <input
                    type="date"
                    id="manufactureDate"
                    class="form-control"
                    v-model="item.manufactureDate"
                    required
                  />
                  <div v-if="errors.manufactureDate" class="text-danger">{{ errors.manufactureDate }}</div>
                </div>
  
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary me-2">Salvar</button>
                  <button type="button" class="btn btn-secondary" @click="cancel">Cancelar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        item: {
          name: '',
          unit: '',
          quantity: null,
          price: '',
          perishable: false,
          expiryDate: '',
          manufactureDate: ''
        },
        errors: {},
        isEditing: false
      };
    },
    computed: {
      unitStep() {
        if (this.item.unit === 'litro' || this.item.unit === 'quilograma') {
          return 0.001;
        }
        return 1;
      },
      unitPattern() {
        if (this.item.unit === 'litro' || this.item.unit === 'quilograma') {
          return '\\d+\\.?\\d{0,3}';
        }
        return '\\d+';
      }
    },
    methods: {
      validateName() {
        if (!/^[a-zA-Z\s]*$/.test(this.item.name)) {
          this.errors.name = 'Somente letras são permitidas.';
        } else {
          this.errors.name = '';
        }
      },
      validatePrice() {
        if (!/^\d+(\.\d{1,2})?$/.test(this.item.price)) {
          this.errors.price = 'Formato de preço inválido.';
        } else {
          this.errors.price = '';
        }
      },
      saveItem() {
        if (this.validateForm()) {
          const items = JSON.parse(localStorage.getItem('items')) || [];
          if (this.$route.query.index) {
            items[this.$route.query.index] = this.item;
          } else {
            items.push(this.item);
          }
          localStorage.setItem('items', JSON.stringify(items));
          this.$router.push('/list');
        }
      },
      validateForm() {
        this.validateName();
        this.validatePrice();
        this.errors.expiryDate = this.item.perishable && new Date(this.item.expiryDate) < new Date() ? 'O produto está vencido.' : '';
        this.errors.manufactureDate = this.item.perishable && new Date(this.item.manufactureDate) > new Date(this.item.expiryDate) ? 'Data de fabricação não pode ser superior à data de validade.' : '';
  
        return Object.values(this.errors).every(error => !error);
      },
      cancel() {
        this.$router.push('/list');
      },
      loadItem(index) {
      const items = JSON.parse(localStorage.getItem('items')) || [];
      this.item = items[index];
      this.isEditing = true;
      this.editIndex = index;
    }
  },
  created() {
    const index = this.$route.query.index;
    if (index !== undefined) {
      this.loadItem(Number(index));
    }
    }
  };
  </script>
  
  <style scoped>
  /* Adiciona margens e padding adequados */
  .card {
    border-radius: 0.375rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }
  
  /* Adiciona padding ao header do card */
  .card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }
  
  /* Ajusta o botão salvar e cancelar para ficarem alinhados à direita */
  .d-flex {
    display: flex;
  }
  
  .justify-content-end {
    justify-content: flex-end;
  }
  
  .me-2 {
    margin-right: 0.5rem;
  }
  </style>
  