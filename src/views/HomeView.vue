<template>
  <div class="beranda-view">
  <main>
    <div class="main-header">
      <h1>Beranda</h1>
    </div>

    <div class="welcome-banner">
      <div>
        <p>Haloo, selamat datang kembali...</p>
        <h2>Nama User</h2>
      </div>
      <img src="../assets/images/kucing.svg" alt="Cute Cat Illustration" />
    </div>

    <section class="points-summary">
      <div class="point-card">
        <div class="text">
          <h4>Poin Adopsi</h4>
          <p>345</p>
        </div>
        <div class="icon green"><i class="fa-solid fa-paw"></i></div>
      </div>
      <div class="point-card">
        <div class="text">
          <h4>Poin Lapor</h4>
          <p>545</p>
        </div>
        <div class="icon blue"><i class="fa-solid fa-flag"></i></div>
      </div>
      <div class="point-card">
        <div class="text">
          <h4>Poin Donasi</h4>
          <p>545</p>
        </div>
        <div class="icon red"><i class="fa-solid fa-hand-holding-heart"></i></div>
      </div>
    </section>

    <div class="content-grid">
      <section class="adoption-feed">
        <h2>Mari Adopsi!</h2>
        <div class="filter-bar">
          <div class="search-bar">
            <i class="fa-solid fa-search"></i>
            <input type="text" placeholder="Cari kucing..." />
          </div>
          <button class="btn-filter">
            <i class="fa-solid fa-filter"></i>
            Filter
          </button>
        </div>

        <div class="cat-grid">
          <div class="adopsi-card">
            <img src="../assets/images/kucing.png" alt="Kucing abu-abu" />
            <div class="adopsi-card-body">
              <h3>Nama Kucing</h3>
              <div class="cat-info">
                <span><i class="fa-solid fa-venus"></i> Betina</span>
                <span><i class="fa-solid fa-cat"></i> British</span>
                <span><i class="fa-solid fa-heart-pulse"></i> Sehat</span>
                <span><i class="fa-solid fa-calendar-days"></i> 4 bln</span>
              </div>
              <div class="shelter-info">
                <img
                  src="../assets/images/image_profile.png"
                  alt="Logo Shelter"
                  class="shelter-logo"
                />
                <span>Nama Shelter</span>
                <span class="location"><i class="fa-solid fa-map-marker-alt"></i> Lokasi</span>
              </div>
              <p>Kucing cantik, sehat, dan bersih...</p>
              <a href="form-adopsi.html" class="btn btn-warning">Adopsi</a>
            </div>
          </div>
          
          <div class="adopsi-card">
            <img src="../assets/images/kucing.png" alt="Kucing abu-abu" />
            <div class="adopsi-card-body">
              <h3>Nama Kucing</h3>
              <div class="cat-info">
                <span><i class="fa-solid fa-venus"></i> Betina</span>
                <span><i class="fa-solid fa-cat"></i> British</span>
                <span><i class="fa-solid fa-heart-pulse"></i> Sehat</span>
                <span><i class="fa-solid fa-calendar-days"></i> 4 bln</span>
              </div>
              <div class="shelter-info">
                <img
                  src="../assets/images/image_profile.png"
                  alt="Logo Shelter"
                  class="shelter-logo"
                />
                <span>Nama Shelter</span>
                <span class="location"><i class="fa-solid fa-map-marker-alt"></i> Lokasi</span>
              </div>
              <p>Kucing cantik, sehat, dan bersih...</p>
              <a href="form-adopsi.html" class="btn btn-warning">Adopsi</a>
            </div>
          </div>
        </div>
      </section>

      <aside class="right-sidebar">
        <div class="card">
          <div class="card-header">
            <h3>Aktivitas Kucingmu</h3>
            <button class="btn-icon">+</button>
          </div>
          <p style="color: var(--text-light); font-size: 14px; margin-bottom: 10px">
            Senin, 24 Nov 2025
          </p>
          <div class="activity-item">
            <div class="activity-date">
              <span>24</span>
              November
            </div>
            <div class="activity-details">
              <h4>Vaksinasi Kucing</h4>
              <p>Vaksinasi kucing ke klinik, Pukul 08:00</p>
            </div>
          </div>
        </div>

        <div class="card">
          <h3>Status Adopsi</h3>
          <div class="status-details">
            <p class="cat-name">Nama Kucing</p>
            <div class="cat-info">
              <span><i class="fa-solid fa-venus"></i> Betina</span>
              <span><i class="fa-solid fa-cat"></i> British</span>
              <span><i class="fa-solid fa-calendar-days"></i> 4 bln</span>
            </div>
            <div class="status-badge verification">Tahap Verifikasi</div>
          </div>
        </div>

        <div class="card">
          <h3>Status Laporan</h3>
          <div class="status-details">
            <p class="cat-name">Nama Kucing</p>
            <div class="cat-info">
              <span><i class="fa-solid fa-venus"></i> Betina</span>
              <span><i class="fa-solid fa-cat"></i> British</span>
              <span><i class="fa-solid fa-calendar-days"></i> 4 bln</span>
            </div>
            <div class="status-badge rescued">
              <i class="fa-solid fa-check"></i> Sudah Diselamatkan
            </div>
          </div>
        </div>
      </aside>
    </div>
  </main>
  </div>
</template>

<script setup>
// Jika halaman ini butuh script khusus, letakkan di sini
</script>

<style>
@import '@/assets/beranda-adopter.css';
@import '@/assets/adopsi.css';
</style>
