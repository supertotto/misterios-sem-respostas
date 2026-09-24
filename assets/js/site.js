// Totto Rodrigues — comportamento compartilhado do site do autor.
(() => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('menu-principal');

  // Menu mobile
  if (toggle && nav) {
    const setMenu = open => {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    };
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // Linha sob o cabeçalho depois que a página rola
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Ano atual no rodapé
  document.querySelectorAll('[data-ano-atual]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Botões ainda sem destino (ex.: página de uma obra que não existe ainda)
  document.querySelectorAll('.btn[aria-disabled="true"]').forEach(btn => {
    btn.addEventListener('click', e => e.preventDefault());
  });
})();
