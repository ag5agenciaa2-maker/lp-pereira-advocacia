/* ===========================================================
   PEREIRA ADVOCACIA — script.js
   Vanilla ES6 · IntersectionObserver · sem bibliotecas
   =========================================================== */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* -------- observador genérico: alvo é sempre um contêiner NÃO recortado -------- */
  const onEnter = (nodes, cb, wrapper) => {
    nodes.forEach((node, i) => {
      const target = wrapper ? (wrapper(node) || node) : node;
      let done = false;
      const run = () => { if (!done) { done = true; cb(node, i); } };
      if (target.getBoundingClientRect().bottom <= 0) return run();
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { obs.disconnect(); run(); } });
      }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
      obs.observe(target);
    });
  };

  /* -------- HERO: linhas em máscara e retrato (trigger: load) -------- */
  const heroIn = () => {
    $$('.hero__title .mask').forEach((m, i) => {
      setTimeout(() => m.classList.add('is-in'), reduced ? 0 : 120 * i);
    });
    const media = $('#heroMedia');
    setTimeout(() => media && media.classList.add('is-in'), reduced ? 0 : 400);
  };

  /* -------- NAVBAR: sentinela no topo, nunca scroll event -------- */
  const navScroll = () => {
    const nav = $('#nav'), sentinel = $('.nav-sentinel');
    if (!nav || !sentinel) return;
    new IntersectionObserver(([e]) => {
      nav.classList.toggle('is-stuck', !e.isIntersecting);
    }, { threshold: 0 }).observe(sentinel);
  };

  /* -------- NAVBAR: scroll-spy (indicador de seção ativa) -------- */
  const navSpy = () => {
    const links = $$('.nav__menu a[href^="#"]');
    if (!links.length) return;
    const map = links.map((a) => ({ a, sec: document.getElementById(a.getAttribute('href').slice(1)) }))
      .filter((x) => x.sec);
    if (!map.length) return;

    const setActive = (id) => {
      map.forEach(({ a, sec }) => a.classList.toggle('is-active', sec.id === id));
    };

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0, rootMargin: '-45% 0px -50% 0px' });

    map.forEach(({ sec }) => obs.observe(sec));
  };

  /* -------- MENU MOBILE (Drawer Premium) -------- */
  const navMenu = () => {
    const btn = $('#navToggle'), drawer = $('#drawer'), overlay = $('#drawerOverlay'), close = $('#drawerClose');
    if (!btn || !drawer || !overlay) return;

    const open = () => {
      drawer.classList.add('is-open');
      overlay.classList.add('is-open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('drawer-open');
    };
    const shut = () => {
      drawer.classList.remove('is-open');
      overlay.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('drawer-open');
    };

    btn.addEventListener('click', () => {
      drawer.classList.contains('is-open') ? shut() : open();
    });
    close && close.addEventListener('click', shut);
    overlay.addEventListener('click', shut);
    $$('a', drawer).forEach((a) => a.addEventListener('click', shut));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) shut();
    });
  };

  /* -------- TÍTULOS EM MÁSCARA (fora do hero) -------- */
  const masks = () => {
    const wraps = $$('.mask-wrap');
    onEnter(wraps, (wrap) => {
      $$('.mask', wrap).forEach((m, i) => {
        setTimeout(() => m.classList.add('is-in'), reduced ? 0 : 90 * i);
      });
    });
  };

  /* -------- REVEALS simples -------- */
  const reveals = () => {
    onEnter($$('.reveal'), (el, i) => {
      const d = parseInt(el.dataset.delay || (i % 3) * 90, 10);
      setTimeout(() => el.classList.add('is-in'), reduced ? 0 : d);
    });
  };

  /* -------- FOTOS DO ESCRITÓRIO: clip-path -------- */
  const clips = () => {
    const fotos = $$('.foto');
    onEnter(fotos, (el, i) => {
      setTimeout(() => el.classList.add('is-in'), reduced ? 0 : 140 * i);
    }, (el) => el.parentElement);
  };

  /* -------- COUNTERS (easeOutExpo via requestAnimationFrame) -------- */
  const counters = () => {
    const nodes = $$('.counter__n');
    onEnter(nodes, (el, i) => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.dec || '0', 10);
      const prefix = el.dataset.prefix || '';
      const fmt = (v) => prefix + v.toFixed(dec).replace('.', ',');
      if (reduced) { el.textContent = fmt(target); return; }
      const start = performance.now() + 150 * i, dur = 1800;
      const tick = (now) => {
        const t = Math.min(1, Math.max(0, (now - start) / dur));
        const eased = t >= 1 ? 1 : 1 - Math.pow(2, -10 * t);
        el.textContent = fmt(target * eased);
        if (t < 1) requestAnimationFrame(tick); else el.textContent = fmt(target);
      };
      requestAnimationFrame(tick);
    }, (el) => el.closest('.counters'));
  };

  /* -------- FAQ (altura 0 → scrollHeight) -------- */
  const faq = () => {
    const btns = $$('.acc__btn');
    btns.forEach((btn) => {
      const panel = btn.nextElementSibling;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btns.forEach((b) => {
          b.setAttribute('aria-expanded', 'false');
          if (b.closest('.acc__item')) b.closest('.acc__item').classList.remove('is-open');
          if (b.nextElementSibling) b.nextElementSibling.style.maxHeight = '0px';
        });
        if (!open) {
          btn.setAttribute('aria-expanded', 'true');
          btn.closest('.acc__item') && btn.closest('.acc__item').classList.add('is-open');
          panel.style.maxHeight = panel.scrollHeight + 'px';
        }
      });
    });
  };

  /* -------- FORMULÁRIO: máscara BR + validação real -------- */
  const form = () => {
    const f = $('#form');
    if (!f) return;
    const tel = $('#tel');
    tel.addEventListener('input', () => {
      const d = tel.value.replace(/\D/g, '').slice(0, 11);
      const cut = d.length > 10 ? 7 : 6;
      let out = '';
      if (d.length) out = '(' + d.slice(0, 2);
      if (d.length >= 3) out += ') ' + d.slice(2, cut);
      if (d.length > cut) out += '-' + d.slice(cut);
      tel.value = out;
    });
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const checks = [
        ['nome', $('#nome').value.trim().length >= 3],
        ['tel', $('#tel').value.replace(/\D/g, '').length >= 10],
        ['email', /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test($('#email').value.trim())],
        ['msg', $('#msg').value.trim().length > 0]
      ];
      let ok = true;
      checks.forEach(([id, valid]) => {
        const field = $('#' + id).closest('.field');
        field.classList.toggle('is-erro', !valid);
        if (!valid) ok = false;
      });
      $('#formOk').classList.toggle('is-on', ok);
      if (!ok) return;

      // ▼ MENSAGEM OBRIGATÓRIA — padrão AG5 (estrutura fixa) ▼
      const nomeVal = $('#nome').value.trim();
      const telVal = $('#tel').value.trim();
      const emailVal = $('#email').value.trim();
      const areaVal = $('#area').value;
      const msgVal = $('#msg').value.trim();

      let texto = `Olá, me chamo ${nomeVal}, vim através do site e gostaria de uma informação.\n`;
      texto += `\n- E-mail: ${emailVal}`;
      texto += `\n- Telefone: ${telVal}`;
      texto += `\n- Área Jurídica: ${areaVal}`;
      if (msgVal) texto += `\n- Descrição do caso: ${msgVal}`;
      // ▲ ────────────────────────────────────────── ▲

      const urlWhatsApp = `https://wa.me/552132468501?text=${encodeURIComponent(texto)}`;
      window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
    });
  };

  /* -------- LIGHTBOX: galeria "Nosso escritório" -------- */
  const lightbox = () => {
    const galeria = $('#galeriaEscritorio');
    const lb = $('#lightbox');
    if (!galeria || !lb) return;
    const items = $$('.foto', galeria);
    if (!items.length) return;

    const img = $('#lightboxImg');
    const caption = $('#lightboxCaption');
    const overlay = $('#lightboxOverlay');
    const closeBtn = $('#lightboxClose');
    const prevBtn = $('#lightboxPrev');
    const nextBtn = $('#lightboxNext');
    let current = 0;

    const render = (i) => {
      current = (i + items.length) % items.length;
      const item = items[current];
      const src = item.querySelector('img').getAttribute('src');
      const alt = item.querySelector('img').getAttribute('alt');
      const cap = item.querySelector('.foto__caption')?.textContent || '';
      img.setAttribute('src', src);
      img.setAttribute('alt', alt);
      caption.textContent = cap;
    };

    const open = (i) => {
      render(i);
      lb.classList.add('is-open');
      lb.removeAttribute('aria-hidden');
      document.body.classList.add('drawer-open');
      closeBtn.focus();
    };
    const close = () => {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('drawer-open');
    };

    items.forEach((item, i) => item.addEventListener('click', () => open(i)));
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    prevBtn.addEventListener('click', () => render(current - 1));
    nextBtn.addEventListener('click', () => render(current + 1));
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') render(current - 1);
      if (e.key === 'ArrowRight') render(current + 1);
    });
  };

  const init = () => {
    heroIn(); navScroll(); navSpy(); navMenu(); masks(); reveals(); clips(); counters(); faq(); form(); lightbox();
  };
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
