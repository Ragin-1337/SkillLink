// ==============================
// SkilLink - register.js
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registerForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!name || !email || !password || !confirmPassword) {
      showToast('⚠️ Preencha todos os campos.');
      return;
    }

    if (password !== confirmPassword) {
      showToast('❌ As senhas não coincidem.');
      return;
    }

    showToast('✅ Conta criada com sucesso! Redirecionando...');
    setTimeout(() => window.location.href = 'login.html', 1500);
  });
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('visible'), 100);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}
