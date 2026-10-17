/* =========================================================
   Camila Achury — interacciones
   Patrón IIFE, sin módulos. Cada init va protegido con safe().
   ========================================================= */
(function () {
  'use strict';

  /* ---------------------------------------------------------
     CONFIGURACIÓN — edita solo estas líneas
     WHATSAPP: código de país + número, solo dígitos.
       Ej. Estados Unidos: '13055551234'  ·  Colombia: '573001234567'
     INSTAGRAM: enlace completo a tu perfil.
     SHEETS_URL: la URL de la "Aplicación web" de Google Apps Script
       (termina en /exec). Vacío = no se guarda en Google Sheets.
     --------------------------------------------------------- */
  var CONFIG = {
    WHATSAPP: '18035807278',
    INSTAGRAM: 'https://www.instagram.com/camilaachuryusa/',
    SHEETS_URL: 'https://script.google.com/macros/s/AKfycbxqyd7ZkxY6lR-qXPWreBXkZwqoIogF7mqFwW0IN4Tuab3H3iaqKcvtx_aVrcsWu6_6mw/exec'
  };
  window.__CAMILA__ = CONFIG;

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn('[init ' + name + ']', e); }
  }
  function $(s, ctx) { return (ctx || document).querySelector(s); }
  function $$(s, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(s)); }

  function waLink(text) {
    var base = CONFIG.WHATSAPP ? 'https://wa.me/' + CONFIG.WHATSAPP.replace(/\D/g, '') : 'https://wa.me/';
    return base + (text ? '?text=' + encodeURIComponent(text) : '');
  }

  /* ---------- Enlaces de contacto ---------- */
  function initLinks() {
    $$('[data-whatsapp]').forEach(function (a) {
      a.href = waLink('Hola Camila, vengo de tu página web y quiero más información.');
      a.target = '_blank'; a.rel = 'noopener';
    });
    $$('[data-instagram]').forEach(function (a) {
      a.href = CONFIG.INSTAGRAM; a.target = '_blank'; a.rel = 'noopener';
    });
  }

  /* ---------- Nombre letra por letra ---------- */
  function initSplit() {
    $$('[data-split]').forEach(function (el) {
      if (el.querySelector('.char')) return; // idempotente
      var text = el.textContent;
      el.setAttribute('aria-label', text);
      el.textContent = '';
      var i = 0;
      // Cada palabra en su propio bloque: el nombre solo se parte entre palabras
      text.trim().split(/\s+/).forEach(function (word, w) {
        if (w > 0) el.appendChild(document.createTextNode(' '));
        var wrap = document.createElement('span');
        wrap.setAttribute('aria-hidden', 'true');
        wrap.style.display = 'inline-block';
        wrap.style.whiteSpace = 'nowrap';
        word.split('').forEach(function (ch) {
          var s = document.createElement('span');
          s.className = 'char'; s.textContent = ch; s.style.setProperty('--i', i++);
          wrap.appendChild(s);
        });
        el.appendChild(wrap);
      });
    });
  }

  /* ---------- Aparición al hacer scroll (+ red de seguridad 6 s) ---------- */
  function initReveal() {
    var items = $$('.reveal');
    function show(el) { el.classList.add('is-in'); }
    if (!('IntersectionObserver' in window)) { items.forEach(show); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.01, rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { io.observe(el); });
    setTimeout(function () { items.forEach(show); }, 6000);
  }

  /* ---------- Nav al hacer scroll ---------- */
  function initNav() {
    var nav = $('.nav');
    if (!nav) return;
    function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 30); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Inclinación 3D del retrato ---------- */
  function initTilt() {
    var el = $('[data-tilt]');
    if (!el || !window.matchMedia('(hover: hover)').matches) return;
    var hero = $('.hero');
    hero.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      var y = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      // Movimiento 2D suave: el 3D rasteriza la foto y la deja borrosa
      el.style.transform = 'translate(' + (x * 18) + 'px,' + (y * 18) + 'px)';
    });
    hero.addEventListener('mouseleave', function () { el.style.transform = ''; });
  }

  /* ---------- Botones magnéticos ---------- */
  function initMagnetic() {
    if (!window.matchMedia('(hover: hover)').matches) return;
    $$('.magnetic').forEach(function (btn) {
      btn.addEventListener('mousemove', function (e) {
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + x * 0.18 + 'px,' + y * 0.28 + 'px)';
      });
      btn.addEventListener('mouseleave', function () { btn.style.transform = ''; });
    });
  }

  /* ---------- Parallax suave ---------- */
  function initParallax() {
    var img = $('[data-parallax] img');
    var bg = $('[data-parallax-bg]');
    var ticking = false;
    function update() {
      var vh = window.innerHeight;
      if (img) {
        var r = img.parentNode.getBoundingClientRect();
        var p = (r.top + r.height / 2 - vh / 2) / vh;
        img.style.transform = 'translateY(' + (p * -40 - 20) + 'px)';
      }
      if (bg) {
        var rb = bg.parentNode.getBoundingClientRect();
        var pb = (rb.top + rb.height / 2 - vh / 2) / vh;
        bg.style.transform = 'translateY(' + (pb * -90) + 'px)';
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ---------- Resultados: contador ---------- */
  function initResults() {
    var num = $('[data-count]');
    if (!num || !('IntersectionObserver' in window)) return;
    var target = parseFloat(num.dataset.count);
    var fmt = function (v) { return Math.round(v).toLocaleString('en-US'); };
    var io = new IntersectionObserver(function (entries) {
      if (!entries[0].isIntersecting) return;
      io.disconnect();
      var t0 = performance.now(), dur = 1800;
      (function tick(t) {
        var p = Math.min((t - t0) / dur, 1);
        num.textContent = fmt(target * (1 - Math.pow(1 - p, 4)));
        if (p < 1) requestAnimationFrame(tick); else num.textContent = fmt(target);
      })(t0);
    }, { threshold: 0.01 });
    io.observe(num);
  }

  /* ---------- Encuesta ---------- */
  function initQuiz() {
    var form = $('#quizForm');
    if (!form) return;
    var steps = $$('.step', form);
    var numbered = steps.filter(function (s) { return /^\d+$/.test(s.dataset.step); });
    var total = numbered.length;
    var bar = $('#quizBar');
    var now = $('#stepNow');
    var back = $('#quizBack');
    var errorEl = $('#formError');
    var answers = {};
    var history = [];
    var current = '1';

    $('#stepTotal').textContent = total;

    function go(id, push) {
      if (push !== false) history.push(current);
      current = String(id);
      steps.forEach(function (s) { s.classList.toggle('is-active', s.dataset.step === current); });
      var n = /^\d+$/.test(current) ? parseInt(current, 10) : total;
      now.textContent = n;
      bar.style.width = (n / total * 100) + '%';
      back.hidden = current === '1' || current === 'done';
      var active = steps.filter(function (s) { return s.dataset.step === current; })[0];
      var focusable = active && active.querySelector('button, input');
      if (focusable && window.innerWidth > 560) focusable.focus({ preventScroll: true });
      var top = $('.quiz').getBoundingClientRect().top;
      if (top < 0) $('#evaluacion').scrollIntoView({ behavior: 'smooth' });
    }

    // Opciones de los pasos 1-5
    $$('.option', form).forEach(function (opt) {
      opt.addEventListener('click', function () {
        var step = opt.closest('.step');
        $$('.option', step).forEach(function (o) { o.classList.remove('is-picked'); });
        opt.classList.add('is-picked');
        answers[step.dataset.key] = opt.dataset.value;
        var next = opt.hasAttribute('data-stop') ? 'stop-' + opt.dataset.stop : parseInt(step.dataset.step, 10) + 1;
        setTimeout(function () { go(next); }, 260);
      });
    });

    // Chips de día y horario
    $$('.chips', form).forEach(function (group) {
      $$('.chip', group).forEach(function (chip) {
        chip.addEventListener('click', function () {
          $$('.chip', group).forEach(function (c) { c.classList.remove('is-picked'); });
          chip.classList.add('is-picked');
          answers[group.dataset.group] = chip.dataset.value;
          errorEl.textContent = '';
        });
      });
    });

    back.addEventListener('click', function () {
      if (history.length) go(history.pop(), false);
    });

    // Mensaje corto: los detalles quedan en Google Sheets
    function buildMessage(d) {
      return 'Hola Camila, soy ' + d.nombre + '. Vengo de tu página y quiero agendar una cita contigo para sacar mi licencia.';
    }

    // Envía los datos a Google Sheets (no bloquea si falla)
    function saveToSheet(d) {
      if (!CONFIG.SHEETS_URL) return;
      var body = new URLSearchParams({
        nombre: d.nombre, telefono: d.telefono, correo: d.correo, ciudad: d.ciudad,
        dia: answers.dia || '', horario: answers.horario || '',
        requisitos: answers.requisitos || '', situacion: answers.situacion || '',
        tiempo: answers.tiempo || '', presupuesto: answers.presupuesto || '',
        website: d.website
      });
      try {
        if (navigator.sendBeacon && navigator.sendBeacon(CONFIG.SHEETS_URL, body)) return;
      } catch (err) { /* sigue con fetch */ }
      fetch(CONFIG.SHEETS_URL, { method: 'POST', mode: 'no-cors', body: body, keepalive: true })
        .catch(function () {});
    }

    var lastLink = '';
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nombre = form.nombre.value.trim();
      var telefono = form.telefono.value.trim();
      var correo = form.correo.value.trim();
      var telOk = telefono.replace(/\D/g, '').length >= 7;
      form.nombre.classList.toggle('is-invalid', !nombre);
      form.telefono.classList.toggle('is-invalid', !telOk);
      form.correo.classList.toggle('is-invalid', correo && !/^\S+@\S+\.\S+$/.test(correo));
      if (!nombre) { errorEl.textContent = 'Escribe tu nombre para continuar.'; form.nombre.focus(); return; }
      if (!telOk) { errorEl.textContent = 'Escribe tu número de teléfono (WhatsApp).'; form.telefono.focus(); return; }
      if (correo && !/^\S+@\S+\.\S+$/.test(correo)) { errorEl.textContent = 'Revisa tu correo electrónico.'; return; }
      if (!answers.dia || !answers.horario) { errorEl.textContent = 'Elige un día y un horario para tu llamada.'; return; }
      errorEl.textContent = '';
      saveToSheet({
        nombre: nombre, telefono: telefono, correo: correo,
        ciudad: form.ciudad.value.trim(), website: form.website.value
      });
      lastLink = waLink(buildMessage({ nombre: nombre }));
      window.open(lastLink, '_blank', 'noopener');
      go('done');
    });

    $('#waRetry').addEventListener('click', function (e) {
      e.preventDefault();
      if (lastLink) window.open(lastLink, '_blank', 'noopener');
    });

    go('1', false);
  }

  function boot() {
    safe(initLinks, 'links');
    safe(initSplit, 'split');
    safe(initReveal, 'reveal');
    safe(initNav, 'nav');
    safe(initTilt, 'tilt');
    safe(initMagnetic, 'magnetic');
    safe(initParallax, 'parallax');
    safe(initResults, 'results');
    safe(initQuiz, 'quiz');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
