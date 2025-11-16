// ==============================
// SkilLink - dashboard.js (com toast)
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  const mentorGrid = document.getElementById('mentorGrid');
  const logoutBtn = document.getElementById('logoutBtn');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mostra toast de boas-vindas
  showToast('🎉 Bem-vindo de volta à SkilLink!');

  const mentores = [
    { nome: "Ana Souza", area: "Marketing Digital", img: "https://via.placeholder.com/300x200" },
    { nome: "Carlos Lima", area: "Desenvolvimento Web", img: "https://via.placeholder.com/300x200" },
    { nome: "Beatriz Rocha", area: "Design UX/UI", img: "https://via.placeholder.com/300x200" },
    { nome: "Rafael Gomes", area: "Finanças Pessoais", img: "https://via.placeholder.com/300x200" },
    { nome: "Juliana Alves", area: "Liderança e Gestão", img: "https://via.placeholder.com/300x200" },
  ];

  if (mentorGrid) {
    mentorGrid.innerHTML = mentores.map(m => `
      <div class="mentor-card">
        <img src="${m.img}" alt="${m.nome}">
        <div class="mentor-info">
          <h4>${m.nome}</h4>
          <p>${m.area}</p>
          <button class="connect-btn">Conectar</button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.connect-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        showToast('✅ Solicitação enviada! O mentor entrará em contato em breve.');
      });
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      window.location.href = 'login.html';
    });
  }
});

// Função de toast
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('visible');
  }, 100);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}
