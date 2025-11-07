<template>
  <main>
    <div class="main-header">
      <h1>Donasi</h1>
      <span class="breadcrumb">DONASI / DONASI</span>
    </div>

    <div class="donation-search-bar">
      <i class="fa-solid fa-search"></i>
      <input type="text" placeholder="Cari program donasi...">
    </div>

    <div class="donation-grid">
      <div v-for="program in donationData" :key="program.id" class="donation-card">
        <img :src="program.image" :alt="program.title">
        <div class="donation-card-body">
          <h3>{{ program.title }}</h3>
          <div class="shelter-info">
            <img :src="program.shelter.avatar" alt="Shelter avatar">
            <span><b>{{ program.shelter.name }}</b> - {{ program.shelter.location }}</span>
          </div>
          <p>{{ program.description }}</p>

          <div class="donation-progress">
            <div class="progress-text">
              <span>Terkumpul <strong>{{ program.terkumpulFormatted }}</strong> dari <strong>{{ program.targetFormatted }}</strong></span>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill" :style="{ width: program.progress + '%' }"></div>
            </div>
          </div>

          <RouterLink :to="'/app/donasi/' + program.id" class="btn-donate">Berdonasi</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

// Fungsi bantuan untuk format Rupiah
const formatRupiah = (number) => {
  return 'Rp. ' + new Intl.NumberFormat('id-ID').format(number);
};

// --- DATA HARDCODE (SEKARANG ADA 4 ITEM) ---
const rawDonationData = ref([
  {
    id: 'pakan-kucing',
    title: "Bantu Pakan Kucing Jalanan",
    image: "/image/donasi/Rectangle 23853 (1).png", 
    shelter: { 
      name: "Rumah Kucing BDG", 
      location: "Bandung", 
      avatar: "/image/donasi/image.png" 
    },
    description: "Masih banyak kucing jalanan yang kelaparan... Selengkapnya...",
    terkumpul: 1250000, 
    target: 5000000,
  },
  {
    id: 'rawat-kucing',
    title: "Rawat Kucing Sakit Terlantar",
    image: "/image/donasi/Rectangle 23853.png",
    shelter: { 
      name: "Meow Shelter", 
      location: "Jakarta", 
      avatar: "/image/donasi/image.png" 
    },
    description: "Banyak kucing sakit yang kami temukan... Selengkapnya...",
    terkumpul: 4800000,
    target: 5000000,
  },
  // ===== ITEM BARU 1 =====
  {
    id: 'sterilisasi-liar',
    title: "Program Sterilisasi Kucing Liar",
    image: "/image/donasi/Rectangle 23853 (1).png", // Ganti dengan gambar baru nanti
    shelter: { 
      name: "Cat Haven", 
      location: "Surabaya", 
      avatar: "/image/donasi/image.png" 
    },
    description: "Bantu kami menekan populasi kucing jalanan dengan manusiawi.",
    terkumpul: 7500000,
    target: 10000000,
  },
  // ===== ITEM BARU 2 =====
  {
    id: 'shelter-baru',
    title: "Bangun Shelter Baru yang Layak",
    image: "/image/donasi/Rectangle 23853.png", // Ganti dengan gambar baru nanti
    shelter: { 
      name: "Paw Friends", 
      location: "Yogyakarta", 
      avatar: "/image/donasi/image.png" 
    },
    description: "Shelter kami sudah over-kapasitas. Bantu kami rumah baru.",
    terkumpul: 2100000,
    target: 15000000,
  }
]);

// Computed property untuk menghitung persentase dan format uang
const donationData = computed(() => {
  return rawDonationData.value.map(program => ({
    ...program,
    progress: (program.terkumpul / program.target) * 100,
    terkumpulFormatted: formatRupiah(program.terkumpul),
    targetFormatted: formatRupiah(program.target)
  }));
});
</script>

<style scoped>
@import '@/assets/donasi.css';
</style>