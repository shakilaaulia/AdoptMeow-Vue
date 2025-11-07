import { createRouter, createWebHistory } from 'vue-router'

// 1. Impor Layouts Anda
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

// (Kita tidak perlu mengimpor semua View di sini karena kita akan
// menggunakan lazy loading untuk performa yang lebih baik)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // --- GRUP 1: AUTHENTICATION ---
    // Semua rute di sini akan dibungkus oleh AuthLayout.vue
    {
      path: '/', // Path induk untuk grup ini
      component: AuthLayout,
      children: [
        {
          path: '', // URL: /
          name: 'login-user',
          component: () => import('@/views/LoginUserView.vue'),
        },
        {
          path: 'register-user', // URL: /register-user
          name: 'register-user',
          component: () => import('@/views/RegistrasiUserView.vue'),
        },
        // (Anda bisa tambahkan /login-shelter, /pilih-login di sini)
      ],
    },

    // --- GRUP 2: DASHBOARD APLIKASI ---
    // Semua rute di sini akan dibungkus oleh DashboardLayout.vue
    {
      path: '/app', // <-- Path awalan (prefix) untuk semua halaman dashboard
      component: DashboardLayout,
      children: [
        {
          path: 'home', // URL: /app/home
          name: 'app-home',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: 'Beranda', breadcrumb: 'BERANDA' },
        },
        {
          path: 'adopsi', // URL: /app/adopsi
          name: 'app-adopsi',
          component: () => import('@/views/AdopsiView.vue'),
          meta: { title: 'Adopsi', breadcrumb: 'ADOPSI' },
        },
        {
          path: 'adopsi/:id', // URL: /app/adopsi/123
          name: 'app-adopsi-form',
          component: () => import('@/views/FormAdopsiView.vue'),
          meta: { title: 'Form Adopsi', breadcrumb: 'ADOPSI / FORMULIR' },
        },
        {
          path: 'lapor', // URL: /app/lapor
          name: 'app-lapor',
          component: () => import('@/views/LaporView.vue'),
          meta: { title: 'Lapor', breadcrumb: 'LAPOR' },
        },
        {
          path: 'form-lapor', // URL: /app/form-lapor
          name: 'app-lapor-form',
          component: () => import('@/views/FormLaporView.vue'),
          meta: { title: 'Form Laporan', breadcrumb: 'LAPOR / PENGISIAN' },
        },
        {
          path: 'donasi', // URL: /app/donasi
          name: 'app-donasi',
          component: () => import('@/views/DonasiView.vue'),
          meta: { title: 'Donasi', breadcrumb: 'DONASI' },
        },
        {
          path: 'donasi/:id', // URL: /app/donasi/123
          name: 'app-donasi-detail',
          component: () => import('@/views/DonasiDetailView.vue'),
          meta: { title: 'Detail Donasi', breadcrumb: 'DONASI / DETAIL' },
        },
        {
          path: 'pembayaran/:id', // URL: /app/pembayaran/123
          name: 'app-pembayaran',
          component: () => import('@/views/PembayaranDonasiView.vue'),
          meta: { title: 'Pembayaran', breadcrumb: 'DONASI / BAYAR' },
        },
        {
          path: 'peringkat', // URL: /app/peringkat
          name: 'app-peringkat',
          component: () => import('@/views/PeringkatView.vue'),
          meta: { title: 'Peringkat', breadcrumb: 'PERINGKAT' },
        },
        {
          path: 'rawat-kucing', // URL: /app/rawat-kucing
          name: 'app-rawat-kucing',
          component: () => import('@/views/RawatKucingView.vue'),
          meta: { title: 'Rawat Kucing', breadcrumb: 'PERAWATAN' },
        },
      ],
    },
  ],
})

export default router
