<template>
  <main>
    <div class="main-header">
      <h1>Pengisian Laporan</h1>
      <span class="breadcrumb">LAPOR / FORM LAPORAN</span>
    </div>

    <div class="form-grid">
      <!-- Upload Foto -->
      <div class="form-section">
        <div class="upload-box">
          <h2>Pilih Foto</h2>
          <div class="upload-zone" @click="selectImage">
            <div class="upload-icon">
              <i class="fa-solid fa-image"></i>
            </div>
            <button class="btn btn-warning">Pilih Gambar atau Taruh di Sini</button>
            <p>Atau</p>
            <button class="btn btn-secondary">Ambil Foto</button>
          </div>

          <p v-if="!selectedImage">Tidak Ada Foto</p>
          <img v-else :src="selectedImage" alt="Foto Kucing" class="preview-image" />

          <!-- Input file tersembunyi -->
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="handleFileUpload"
            hidden
          />
        </div>
      </div>

      <!-- Form Informasi -->
      <div class="form-section">
        <div class="info-box">
          <h2>Informasi</h2>
          <h3>JELASKAN INFORMASI MENGENAI KUCING INI</h3>

          <form @submit.prevent="submitForm">
            <div class="input-group">
              <span class="icon"><i class="fa-solid fa-heart-pulse"></i></span>
              <input v-model="form.kondisi" type="text" placeholder="Kondisi Kucing Saat Ini" required />
            </div>

            <div class="input-group">
              <span class="icon"><i class="fa-solid fa-venus-mars"></i></span>
              <select v-model="form.kelamin" required>
                <option value="" disabled selected>Jenis Kelamin Kucing</option>
                <option value="Jantan">Jantan</option>
                <option value="Betina">Betina</option>
              </select>
            </div>

            <div class="input-group">
              <span class="icon"><i class="fa-solid fa-cat"></i></span>
              <input v-model="form.ras" type="text" placeholder="Ras Kucing" />
            </div>

            <div class="input-group">
              <span class="icon"><i class="fa-solid fa-calendar-day"></i></span>
              <input
                v-model="form.tanggal"
                type="datetime-local"
                placeholder="Tanggal & Waktu Penemuan"
                required
              />
            </div>

            <div class="input-group">
              <span class="icon"><i class="fa-solid fa-map-marker-alt"></i></span>
              <input v-model="form.lokasi" type="text" placeholder="Lokasi Penemuan" required />
            </div>

            <div class="input-group">
              <span class="icon"><i class="fa-solid fa-align-left"></i></span>
              <textarea
                v-model="form.deskripsi"
                rows="3"
                placeholder="Deskripsi Singkat"
                required
              ></textarea>
            </div>

            <button type="submit" class="btn btn-warning">Laporkan</button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  kondisi: '',
  kelamin: '',
  ras: '',
  tanggal: '',
  lokasi: '',
  deskripsi: ''
})

const selectedImage = ref(null)
const fileInput = ref(null)

function selectImage() {
  fileInput.value.click()
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  if (file) {
    selectedImage.value = URL.createObjectURL(file)
  }
}

function submitForm() {
  console.log('Laporan dikirim:', form.value)
  alert('Laporan berhasil dikirim!')
}
</script>

<style scoped>
@import '@/assets/form-lapor.css';

/* Tambahan agar tampil lebih responsif & rapi */
.preview-image {
  width: 100%;
  margin-top: 15px;
  border-radius: 10px;
  object-fit: cover;
}

@media (max-width: 992px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .upload-zone {
    height: 250px;
  }
}

@media (max-width: 600px) {
  .info-box h3 {
    font-size: 13px;
  }

  .input-group {
    flex-direction: column;
    align-items: stretch;
  }

  .input-group .icon {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    width: 100%;
    justify-content: center;
  }
}
</style>
