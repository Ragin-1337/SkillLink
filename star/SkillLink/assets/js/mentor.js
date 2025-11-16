// ==============================
// SkilLink - mentor.js
// ==============================

document.addEventListener('DOMContentLoaded', () => {
  const requestGrid = document.getElementById('requestGrid');
  const logoutBtn = document.getElementById('logoutBtn');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toast de boas-vindas
  showToast('👋 Bem-vindo ao seu painel de mentor!');

  const solicitacoes = [
    { aluno: "Lucas Pereira", area: "Programação Web", msg: "Gostaria de aprender React e Node.js." },
    { aluno: "Mariana Costa", area: "Design Gráfico", msg: "Preciso de orientação para meu portfólio." },
    { aluno: "Thiago Silva", area: "Marketing", msg: "Quero aprender sobre estratégias de tráfego pago." },
    { aluno: "Amanda Oliveira", area: "Liderança", msg: "Desejo melhorar minhas habilidades de comunicação." }
  ];

  if (requestGrid) {
    requestGrid.innerHTML = solicitacoes.map(req => `
      <div class="request-card">
        <h4>${req.aluno}</h4>
        <p><strong>Área:</strong> ${req.area}</p>
        <p>"${req.msg}"</p>
        <div class="actions">
          <button class="accept-btn">Aceitar</button>
          <button class="reject-btn">Recusar</button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.accept-btn').forEach(btn => {
      btn.addEventListener('click', () => showToast('✅ Mentoria aceita com sucesso!'));
    });

    document.querySelectorAll('.reject-btn').forEach(btn => {
      btn.addEventListener('click', () => showToast('❌ Solicitação recusada.'));
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

  setTimeout(() => toast.classList.add('visible'), 100);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 500);
  }, 4000);
}
