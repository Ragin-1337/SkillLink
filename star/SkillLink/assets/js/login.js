// ==============================
// SkilLink - login.js
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
      showToast('⚠️ Por favor, preencha todos os campos.');
      return;
    }

    // Simula login
    showToast('🔐 Verificando credenciais...');

    setTimeout(() => {
      // Simulação: se o email contiver 'mentor', vai para o painel do mentor
      if (email.toLowerCase().includes('mentor')) {
        showToast('👋 Bem-vindo, Mentor!');
        setTimeout(() => window.location.href = 'mentor.html', 1200);
      } else {
        showToast('🎓 Bem-vindo, Aluno!');
        setTimeout(() => window.location.href = 'dashboard.html', 1200);
      }
    }, 1000);
  });

  document.getElementById('registerBtn').addEventListener('click', () => {
    showToast('🧾 Função de cadastro em desenvolvimento.');
  });
});

// Reutiliza o sistema de toast
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('visible'), 100);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}
