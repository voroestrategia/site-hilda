document.addEventListener('DOMContentLoaded', function () {

  /* NAV — solid ao rolar */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('solid', window.scrollY > 30);
  }, { passive: true });

  /* HAMBURGER */
  const burger = document.getElementById('burger');
  const menu   = document.getElementById('menu');
  burger.addEventListener('click', () => {
    const aberto = menu.classList.toggle('open');
    burger.classList.toggle('x', aberto);
    burger.setAttribute('aria-expanded', aberto);
  });
  menu.querySelectorAll('.nav__item').forEach(l =>
    l.addEventListener('click', () => {
      menu.classList.remove('open');
      burger.classList.remove('x');
      burger.setAttribute('aria-expanded', 'false');
    })
  );
  document.addEventListener('click', e => {
    if (!nav.contains(e.target)) {
      menu.classList.remove('open');
      burger.classList.remove('x');
      burger.setAttribute('aria-expanded', 'false');
    }
  });

  /* ANO dinâmico */
  const anoEl = document.getElementById('ano');
  if (anoEl) anoEl.textContent = new Date().getFullYear();

  /* MENSAGEM enviada com sucesso */
  if (location.search.includes('ok=1')) {
    const form = document.querySelector('.form');
    if (form) {
      form.innerHTML = `
        <div style="text-align:center;padding:48px 20px;">
          <p style="font-family:'Playfair Display',Georgia,serif;font-size:26px;color:#2C3E50;margin-bottom:12px;">Mensagem recebida!</p>
          <p style="color:#7F8C8D;font-size:15px;font-weight:300;">Responderei em até 24 horas. Obrigada pelo contato.</p>
        </div>`;
    }
    history.replaceState({}, '', location.pathname);
  }

});
