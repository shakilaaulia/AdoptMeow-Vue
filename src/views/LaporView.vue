<template>
  <div class="lapor-view">
    <main>
      <!-- HEADER -->
      <div class="main-header">
        <h1>Lapor</h1>
        <a href="/app/form-lapor" class="btn">
          <i class="fa-solid fa-plus"></i>
          Laporkan
        </a>
      </div>

      <!-- GRID LAPORAN -->
      <section class="report-grid">
        <div v-for="lapor in laporanList" :key="lapor.id" class="report-card">
          <img :src="lapor.image" :alt="'Laporan ' + lapor.headline" />
          <div class="report-card-content">
            <div class="report-card-header">
              <h2>{{ lapor.headline }}</h2>
              <span>• {{ lapor.timeAgo }}</span>
            </div>

            <div class="cat-info">
              <span><i class="fa-solid fa-venus"></i> {{ lapor.gender }}</span>
              <span><i class="fa-solid fa-cat"></i> {{ lapor.ras }}</span>
              <span><i class="fa-solid fa-briefcase-medical"></i> {{ lapor.kondisi }}</span>
            </div>

            <p>{{ lapor.deskripsi }}</p>

            <div class="card-actions">
              <button class="btn btn-warning" @click="openModal(lapor)">Lihat Detail</button>
              <div class="btn btn-info">
              <i class="fa-solid fa-check"></i> Sudah Diselamatkan
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- MODAL DETAIL / EDIT -->
    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>{{ isEditing ? 'Edit Laporan' : 'Detail Laporan' }}</h3>
          <button class="modal-close" @click="closeModal">&times;</button>
        </div>

        <div class="modal-body">
          <!-- MODE DETAIL -->
          <div v-if="!isEditing">
            <div class="modal-content-grid">
              <img :src="laporan.image" alt="Foto Kucing" class="modal-image" />
              <div class="modal-info">
                <div class="info-field">
                  <label>Kondisi</label>
                  <span>{{ laporan.kondisi }}</span>
                </div>
                <div class="info-field">
                  <label>Jenis Kelamin</label>
                  <span>{{ laporan.gender }}</span>
                </div>
                <div class="info-field">
                  <label>Ras Kucing</label>
                  <span>{{ laporan.ras }}</span>
                </div>
              </div>
            </div>

            <div class="modal-section">
              <h4>Deskripsi</h4>
              <p>{{ laporan.deskripsi }}</p>
            </div>

            <div class="modal-section">
              <h4>Status</h4>
              <span
                class="status-badge"
                :class="{
                  rescued: laporan.status === 'Diselamatkan',
                  pending: laporan.status === 'Menunggu Tindakan',
                }"
              >
                {{ laporan.status }}
              </span>

              <template v-if="laporan.status === 'Diselamatkan'">
                <p class="rescued-by">Diselamatkan oleh:</p>
                <div class="shelter-info">
                  <div class="icon"><i class="fa-solid fa-shield-cat"></i></div>
                  <span>{{ laporan.shelter }}</span>
                </div>
              </template>
            </div>
          </div>

          <!-- MODE EDIT -->
          <form v-else @submit.prevent="saveEdit">
            <div class="form-group">
              <label>Kondisi</label>
              <input v-model="laporan.kondisi" type="text" required />
            </div>

            <div class="form-group">
              <label>Jenis Kelamin</label>
              <select v-model="laporan.gender">
                <option>Jantan</option>
                <option>Betina</option>
              </select>
            </div>

            <div class="form-group">
              <label>Ras Kucing</label>
              <input v-model="laporan.ras" type="text" required />
            </div>

            <div class="form-group">
              <label>Deskripsi</label>
              <textarea v-model="laporan.deskripsi" rows="3"></textarea>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" @click="toggleEditMode">Batal</button>
              <button type="submit" class="btn btn-warning">Simpan</button>
            </div>
          </form>
        </div>

        <div v-if="!isEditing" class="modal-footer">
          <button class="btn btn-secondary">Hapus</button>
          <button class="btn" @click="toggleEditMode">Ubah</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// --- DATA DUMMY ---
const laporanList = ref([
  {
    id: 1,
    headline: 'Kucing Terlantar di Taman Kota Bandung',
    image: '/image/adopsi/kucing 1.png',
    gender: 'Betina',
    ras: 'British Short Hair',
    kondisi: 'Sakit',
    deskripsi:
      'Kucing tampak lemas dan tidak mau makan. Ditemukan di sekitar Taman Balai Kota Bandung.',
    status: 'Diselamatkan',
    shelter: 'Rumah Kucing BDG',
    timeAgo: '14 menit yang lalu',
  },
  {
    id: 2,
    headline: 'Anak Kucing Tersesat di Gang Sempit',
    image: '/image/adopsi/kucing 2.png',
    gender: 'Jantan',
    ras: 'Domestik',
    kondisi: 'Lemas',
    deskripsi: 'Anak kucing terjebak di selokan kecil. Tampak ketakutan dan butuh pertolongan.',
    status: 'Menunggu Tindakan',
    shelter: '',
    timeAgo: '25 menit yang lalu',
  },
  {
    id: 3,
    headline: 'Kucing Terluka di Dekat Pasar Baru',
    image: '/image/adopsi/kucing 3.png',
    gender: 'Jantan',
    ras: 'Persia Campuran',
    kondisi: 'Terluka di kaki',
    deskripsi:
      'Kucing terlihat pincang dan terluka di kaki kanan belakang, diduga tertabrak kendaraan.',
    status: 'Diselamatkan',
    shelter: 'Meow Care Jakarta',
    timeAgo: '1 jam yang lalu',
  },
  {
    id: 4,
    headline: 'Kucing Terlantar di Depan Minimarket',
    image: '/image/adopsi/kucing 1.png',
    gender: 'Betina',
    ras: 'Anggora',
    kondisi: 'Kotor dan lapar',
    deskripsi:
      'Kucing tampak kelaparan dan kotor, sering tidur di depan minimarket dekat jalan raya.',
    status: 'Menunggu Tindakan',
    shelter: '',
    timeAgo: '2 jam yang lalu',
  },
])

// --- STATE ---
const isModalOpen = ref(false)
const isEditing = ref(false)
const laporan = ref({})

// --- METHODS ---
function openModal(item) {
  laporan.value = { ...item }
  isModalOpen.value = true
  isEditing.value = false
}

function closeModal() {
  isModalOpen.value = false
}

function toggleEditMode() {
  isEditing.value = !isEditing.value
}

function saveEdit() {
  alert('Perubahan laporan berhasil disimpan!')
  isEditing.value = false
}
</script>

<style scoped>
@import '@/assets/lapor.css';
@import '@/assets/detail-modal.css';

.form-group {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  font-size: 14px;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.status-badge {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 13px;
  color: white;
}

.status-badge.rescued {
  background-color: var(--secondary-color);
}

.status-badge.pending {
  background-color: #f59e0b;
}
</style>
