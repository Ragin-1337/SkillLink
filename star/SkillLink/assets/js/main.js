
document.addEventListener('DOMContentLoaded', () => {
  // Atualiza ano no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Formulário de contato (mock)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formMsg) formMsg.textContent = '';

      const [name, email, message] = [...form.elements].map(el => el.value.trim());

      if (!name || !email || !message) {
        formMsg.textContent = 'Por favor, preencha todos os campos.';
        return;
      }

      const emailValid = /\S+@\S+\.\S+/.test(email);
      if (!emailValid) {
        formMsg.textContent = 'Digite um email válido.';
        return;
      }

      formMsg.textContent = 'Enviando...';
      setTimeout(() => {
        formMsg.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
        form.reset();
      }, 900);
    });
  }
});
