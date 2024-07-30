<template>
    <div class="sidebar">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/form" class="nav-link">
            Cadastro
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list" class="nav-link">
            Listagem
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 250px;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid #dee2e6;
  }
  
  .nav-link {
    padding: 10px 15px;
    border-radius: 0.375rem;
    color: #495057;
    text-decoration: none;
  }
  
  .nav-link:hover {
    background-color: #e9ecef;
    color: #007bff;
  }
  
  .nav-link.active {
    background-color: #007bff;
    color: #fff;
  }
  
  .nav-item {
    margin-bottom: 10px;
  }
  
  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
      border-right: none;
      border-bottom: 1px solid #dee2e6;
    }
  }
  </style>
  