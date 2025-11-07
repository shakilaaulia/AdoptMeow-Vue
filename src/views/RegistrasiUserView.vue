<template>
  <main class="auth-page">
    <div class="auth-left">
      <img src="@/assets/images/kucing.svg" alt="Kucing Lucu" class="cat-illustration">
      <h2 class="tagline">Mulailah bergabung sebagai pecinta kucing</h2>
    </div>

    <div class="auth-right">
      <div class="auth-form-wrapper">
        <h1>Halo selamat datang!</h1>
        <p class="subtitle">
          <span class="action-text">Daftar</span>, dan bergabung bersama kami
        </p>

        <form class="login-form">
          <div class="input-group">
            <i class="fa-solid fa-at icon"></i>
            <input type="email" placeholder="Email" required />
          </div>

          <div class="input-group">
            <i class="fa-solid fa-phone icon"></i>
            <input type="tel" placeholder="No Telepon" required />
          </div>

          <div class="input-group">
            <i class="fa-solid fa-user icon"></i>
            <input type="text" placeholder="Nama" required />
          </div>

          <div class="input-group password-group">
            <i class="fa-solid fa-lock icon"></i>
            <input type="password" placeholder="Kata Sandi" id="password1" required />
            <i class="fa-solid fa-eye eye-icon" id="togglePassword1"></i>
          </div>

          <div class="input-group password-group">
            <i class="fa-solid fa-lock icon"></i>
            <input type="password" placeholder="Konfirmasi Kata Sandi" id="password2" required />
            <i class="fa-solid fa-eye eye-icon" id="togglePassword2"></i>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Ingat saya</label>
          </div>

          <router-link to="/app/home" class="login-button">Daftar</router-link>
        </form>

        <div class="links-section">
          <p class="register-link">
            Sudah punya akun? <router-link to="/">Masuk</router-link>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '@/assets/auth.css'
</script>
