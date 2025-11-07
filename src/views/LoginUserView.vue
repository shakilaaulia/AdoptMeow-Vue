<template>
  <main class="auth-page"> 
    <!-- Panel kiri -->
    <div class="auth-left">
      <img src="@/assets/images/kucing.svg" alt="Kucing Lucu" class="cat-illustration">
      <h2 class="tagline">Mulailah bergabung bersama pecinta kucing</h2>
    </div>

    <!-- Panel kanan -->
    <div class="auth-right">
      <div class="auth-form-wrapper">
        <h1>Selamat datang kembali,</h1>
        <p class="subtitle"><span class="action-text">Masuk</span> untuk melanjutkan</p>

        <form class="login-form">
          <!-- Email -->
          <div class="input-group">
            <i class="fa-solid fa-at"></i>
            <input type="email" placeholder="Email" required>
          </div>

          <!-- Password -->
          <div class="input-group password-group">
            <i class="fa-solid fa-lock"></i>
            <input type="password" placeholder="Kata Sandi" required>
            <i class="fa-solid fa-eye"></i>
          </div>

          <!-- Checkbox -->
          <div class="checkbox-group">
            <input type="checkbox" id="remember-me">
            <label for="remember-me">Ingat Saya</label>
          </div>

          <!-- Tombol masuk -->
          <router-link to="/app/home" class="login-button">Masuk</router-link>
        </form>

        <!-- Link bawah -->
        <div class="links-section">
          <a href="#" class="forgot-password"><i class="fa-solid fa-key"></i> Lupa Kata Sandi?</a>
          <p class="register-link">
            Belum punya akun? <router-link to="/register-user">Daftar</router-link>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import '@/assets/auth.css'
export default { name: 'LoginUserView' }
</script>
