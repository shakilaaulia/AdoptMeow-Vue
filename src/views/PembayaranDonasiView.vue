<template>
    <main>
      <div class="main-header">
        <h1>Pembayaran Donasi</h1>
        <span class="breadcrumb">DONASI / PEMBAYARAN</span>
      </div>
  
      <div class="payment-form">
        <div class="payment-section">
          <h4>Lengkapi Data di Bawah</h4>
          <div class="input-group">
            <i class="fa-solid fa-user"></i>
            <input type="text" v-model="donor.name" placeholder="Nama Donatur (Bisa Anonim)">
          </div>
          <div class="input-group">
            <i class="fa-solid fa-phone"></i>
            <input type="text" v-model="donor.contact" placeholder="Nomor Handphone atau Email">
          </div>
        </div>
  
        <div class="payment-section">
          <h4>Masukkan Nominal Donasi</h4>
          <div class="input-group">
            <span class="input-prefix">RP</span>
            <input type="number" v-model="donor.amount" placeholder="Jumlah Nominal">
          </div>
          <button class="btn-payment">Lanjutkan Pembayaran</button>
        </div>
  
        <div class="payment-section">
          <h4>Metode Pembayaran</h4>
          <div class="payment-method-option">
            <img src="https://i.imgur.com/28h2w2I.png" alt="Logo QRIS">
            <span>QRIS</span>
          </div>
          <button class="btn-payment">Bayar Donasi</button>
        </div>
      </div>
    </main>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  // --- DATA REAKTIF ---
  // Kita siapkan data untuk menampung isian form
  const donor = ref({
    name: '',
    contact: '',
    amount: null
  });
  
  // --- AMBIL ID DONASI DARI URL ---
  const route = useRoute();
  const campaignId = route.params.id;
  
  // Tampilkan di console untuk memastikan kita dapat ID yang benar
  console.log('Memproses pembayaran untuk donasi ID:', campaignId);
  
  // Nanti, kita bisa gunakan 'campaignId' untuk mengirim
  // data pembayaran ke backend untuk donasi yang spesifik.
  
  </script>
  
  <style scoped>
    @import '@/assets/donasi.css';
  </style>