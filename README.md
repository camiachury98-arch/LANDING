[index.html](https://github.com/user-attachments/files/33579330/index.html)
# LANDING
LANDING PARA VENTA
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Camila Achury · Agenda tu llamada</title>
  <meta name="description" content="Responde una breve evaluación y agenda una llamada con Camila Achury para comenzar tu licencia y construir tu negocio de productos financieros.">
  <meta property="og:title" content="Camila Achury · Agenda tu llamada">
  <meta property="og:description" content="Disciplina. Enfoque. Resultados. Responde la evaluación y hablemos.">
  <meta property="og:image" content="assets/img/retrato.jpg?v=4">
  <meta name="theme-color" content="#FFF8E4">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script>document.documentElement.className += ' js';</script>
  <link rel="stylesheet" href="styles.css?v=2026101607">
  <script defer src="main.js?v=2026101607"></script>
</head>
<body>

  <!-- Barra de navegación -->
  <header class="nav">
    <a href="#inicio" class="nav__mark" aria-label="Inicio">CA</a>
    <a href="#evaluacion" class="nav__cta magnetic">Agenda tu llamada</a>
  </header>

  <main>
    <!-- ============ HERO ============ -->
    <section class="hero" id="inicio">
      <div class="hero__portrait reveal" data-tilt>
        <svg class="hero__blob" viewBox="0 0 400 400" aria-hidden="true">
          <defs>
            <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stop-color="#EBCF85"/>
              <stop offset="55%" stop-color="#DEBB61"/>
              <stop offset="100%" stop-color="#A4B1A7"/>
            </linearGradient>
          </defs>
          <path class="blob-path" fill="url(#blobGrad)" d="M318,92C352,130,364,190,346,246C328,302,280,354,218,364C156,374,92,344,62,292C32,240,36,170,72,120C108,70,176,40,232,46C288,52,284,54,318,92Z"/>
        </svg>
        <img class="hero__photo" src="assets/img/retrato.jpg?v=4" alt="Camila Achury sonriendo en su escritorio, con su portátil y su libreta" width="1060" height="1060" fetchpriority="high">
      </div>

      <p class="eyebrow reveal" style="--d:.15s">Licencia ocupacional</p>
      <h1 class="hero__name reveal" data-split style="--d:.2s">Camila Achury</h1>
      <p class="hero__role reveal" style="--d:.3s">Agencia de productos financieros</p>
      <p class="hero__lead reveal" style="--d:.35s">
        <strong>Generé más de $36,000 en mis primeros 5 meses</strong> gracias a una licencia
        de productos financieros, y ahora quiero <strong>ayudarte a construir tu propio negocio</strong>.
      </p>

      <div class="hero__card reveal" style="--d:.5s">
        <p>
          Responde las siguientes preguntas con sinceridad. Con esta información
          <strong>evaluaremos</strong> si el proceso para obtener tu licencia y comenzar tu negocio
          <strong>se ajusta a tu situación</strong> y a tus objetivos actuales.
        </p>
        <a href="#evaluacion" class="btn btn--gold magnetic">Comenzar evaluación <span aria-hidden="true">→</span></a>
        <span class="hero__time">Toma menos de 2 minutos</span>
      </div>
    </section>

    <!-- ============ MARQUEE ============ -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <span>Disciplina</span><i>✦</i><span>Enfoque</span><i>✦</i><span>Resultados</span><i>✦</i>
        <span>Liderazgo</span><i>✦</i><span>Estrategia</span><i>✦</i><span>Impacto</span><i>✦</i>
        <span>Disciplina</span><i>✦</i><span>Enfoque</span><i>✦</i><span>Resultados</span><i>✦</i>
        <span>Liderazgo</span><i>✦</i><span>Estrategia</span><i>✦</i><span>Impacto</span><i>✦</i>
      </div>
    </div>

    <!-- ============ EVALUACIÓN ============ -->
    <section class="quiz-section" id="evaluacion">
      <div class="quiz reveal">
        <div class="quiz__head">
          <span class="quiz__label">Evaluación</span>
          <span class="quiz__count"><b id="stepNow">1</b> / <span id="stepTotal">5</span></span>
        </div>
        <div class="quiz__bar"><span id="quizBar"></span></div>

        <form id="quizForm" novalidate>
          <!-- Paso 1 -->
          <fieldset class="step is-active" data-step="1" data-key="requisitos">
            <legend>¿Cuentas actualmente con número de Seguro Social (SSN) y permiso de trabajo vigente en Estados Unidos que te permita solicitar la licencia?</legend>
            <div class="options">
              <button type="button" class="option" data-value="Sí, cuento con todo">Sí, cuento con todo</button>
              <button type="button" class="option" data-value="No estoy en EE.UU." data-stop="requisitos">No estoy en EE.UU.</button>
              <button type="button" class="option" data-value="Estoy en EE.UU. pero sin los requisitos" data-stop="requisitos">Estoy en EE.UU. pero sin los requisitos</button>
            </div>
          </fieldset>

          <!-- Paso 2 -->
          <fieldset class="step" data-step="2" data-key="situacion">
            <legend>¿Cuál describe mejor tu situación actual?</legend>
            <div class="options">
              <button type="button" class="option" data-value="Tengo un empleo y quiero un ingreso adicional">Tengo un empleo y quiero un ingreso adicional</button>
              <button type="button" class="option" data-value="Quiero cambiar de profesión">Quiero cambiar de profesión</button>
              <button type="button" class="option" data-value="Ya emprendo y quiero crecer">Ya emprendo y quiero crecer</button>
            </div>
          </fieldset>

          <!-- Paso 3 -->
          <fieldset class="step" data-step="3" data-key="tiempo">
            <legend>¿Cuánto tiempo a la semana puedes dedicarle a construir tu negocio?</legend>
            <div class="options">
              <button type="button" class="option" data-value="Entre 5 y 10 horas">Entre 5 y 10 horas</button>
              <button type="button" class="option" data-value="Entre 10 y 20 horas">Entre 10 y 20 horas</button>
              <button type="button" class="option" data-value="Tiempo completo">Tiempo completo</button>
              <button type="button" class="option" data-value="Por ahora no tengo tiempo" data-stop="tiempo">Por ahora no tengo tiempo</button>
            </div>
          </fieldset>

          <!-- Paso 4 -->
          <fieldset class="step" data-step="4" data-key="presupuesto">
            <legend>¿Cuál es tu presupuesto para sacar tu licencia ocupacional y comenzar tu negocio de productos financieros?</legend>
            <div class="options">
              <button type="button" class="option" data-value="Entre $300 y $500">Entre $300 y $500</button>
              <button type="button" class="option" data-value="Más de $500">Más de $500</button>
              <button type="button" class="option" data-value="No tengo presupuesto" data-stop="dinero">No tengo presupuesto</button>
            </div>
          </fieldset>

          <!-- Paso 5: datos y agenda -->
          <fieldset class="step" data-step="5" data-key="datos">
            <legend>¡Perfecto! Agenda tu llamada conmigo</legend>
            <p class="step__hint">Déjame tus datos y elige cuándo prefieres que hablemos. Al enviar, se abrirá WhatsApp con tu solicitud lista.</p>
            <div class="fields">
              <label class="field"><span>Nombre completo</span>
                <input type="text" name="nombre" autocomplete="name" required placeholder="Tu nombre">
              </label>
              <label class="field"><span>Ciudad / Estado</span>
                <input type="text" name="ciudad" autocomplete="address-level2" placeholder="Ej. Miami, FL">
              </label>
              <label class="field field--full"><span>Correo electrónico</span>
                <input type="email" name="correo" autocomplete="email" placeholder="tucorreo@ejemplo.com">
              </label>
            </div>
            <p class="field__title">¿Qué día te queda mejor?</p>
            <div class="chips" data-group="dia">
              <button type="button" class="chip" data-value="Lunes">Lun</button>
              <button type="button" class="chip" data-value="Martes">Mar</button>
              <button type="button" class="chip" data-value="Miércoles">Mié</button>
              <button type="button" class="chip" data-value="Jueves">Jue</button>
              <button type="button" class="chip" data-value="Viernes">Vie</button>            </div>
            <p class="field__title">¿En qué horario?</p>
            <div class="chips" data-group="horario">
              <button type="button" class="chip" data-value="Mañana (9am – 12pm)">Mañana</button>
              <button type="button" class="chip" data-value="Tarde (12pm – 5pm)">Tarde</button>
              <button type="button" class="chip" data-value="Noche (5pm – 8pm)">Noche</button>
            </div>
            <p class="form__error" id="formError" role="alert"></p>
            <button type="submit" class="btn btn--whatsapp magnetic">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z"/></svg>
              Agendar mi llamada por WhatsApp
            </button>
          </fieldset>

          <!-- Resultado: no cumple requisitos -->
          <div class="step step--end" data-step="stop-requisitos">
            <h3>Gracias por tu sinceridad</h3>
            <p>Por ahora no puedo acompañarte en este proceso: para obtener la licencia necesitas estar en Estados Unidos con número de Seguro Social y permiso de trabajo vigente. Cuando cumplas esos requisitos, aquí estaré.</p>
            <a class="btn btn--ghost" href="#" data-instagram>Sígueme en Instagram</a>
          </div>

          <!-- Resultado: no tiene tiempo -->
          <div class="step step--end" data-step="stop-tiempo">
            <h3>Gracias por tu sinceridad</h3>
            <p>Por ahora no puedo acompañarte en este proceso. Construir este negocio requiere dedicarle tiempo cada semana, y para que funcione necesitamos ese compromiso desde el inicio. Cuando puedas organizar tu tiempo, vuelve a hacer la evaluación.</p>
            <a class="btn btn--ghost" href="#" data-instagram>Sígueme en Instagram</a>
          </div>

          <!-- Resultado: no tiene el dinero -->
          <div class="step step--end" data-step="stop-dinero">
            <h3>Gracias por tu sinceridad</h3>
            <p>Por ahora no puedo acompañarte en este proceso. Para comenzar es necesario contar con el dinero para la licencia y la formación desde el primer día. Cuando lo tengas disponible, vuelve a hacer la evaluación y con gusto hablamos.</p>
            <a class="btn btn--ghost" href="#" data-instagram>Sígueme en Instagram</a>
          </div>

          <!-- Resultado: enviado -->
          <div class="step step--end" data-step="done">
            <h3>¡Listo! Tu solicitud va en camino</h3>
            <p>Se abrió WhatsApp con tus respuestas. Solo pulsa <strong>enviar</strong> en el chat y te confirmaré el horario de tu llamada.</p>
            <a class="btn btn--whatsapp" href="#" id="waRetry">Abrir WhatsApp de nuevo</a>
          </div>
        </form>

        <button type="button" class="quiz__back" id="quizBack" hidden>← Volver</button>
      </div>
    </section>

    <!-- ============ RESULTADOS ============ -->
    <section class="results">
      <p class="eyebrow reveal">Mis resultados</p>
      <h2 class="section-title reveal">Números reales, no promesas</h2>
      <p class="results__total reveal" aria-label="Más de 36,000 dólares">
        +$<span data-count="36000">36,000</span>
      </p>
      <p class="results__caption reveal">en mis primeros 5 meses con mi licencia</p>
      <p class="results__disclaimer reveal">
        Estos son mis resultados personales y no representan una garantía de ingresos.
        Los resultados de cada persona dependen de su esfuerzo, su dedicación y su situación particular.
      </p>
    </section>

    <!-- ============ CÓMO FUNCIONA ============ -->
    <section class="steps-section">
      <p class="eyebrow reveal">El proceso</p>
      <h2 class="section-title reveal">Tres pasos, un mismo enfoque</h2>
      <ol class="process">
        <li class="process__item reveal" style="--d:.05s">
          <span class="process__num">01</span>
          <h3>Evaluación</h3>
          <p>Respondes unas preguntas y revisamos si este camino encaja con tu momento y tus metas.</p>
        </li>
        <li class="process__item reveal" style="--d:.15s">
          <span class="process__num">02</span>
          <h3>Licencia</h3>
          <p>Te guío en la preparación y los trámites para obtener tu licencia, sin pasos confusos ni tiempo perdido.</p>
        </li>
        <li class="process__item reveal" style="--d:.25s">
          <span class="process__num">03</span>
          <h3>Negocio</h3>
          <p>Construimos la estructura de tu negocio de productos financieros para que genere ingresos de forma constante.</p>
        </li>
      </ol>
    </section>

    <!-- ============ SOBRE MÍ ============ -->
    <section class="about">
      <figure class="about__photo reveal" data-parallax>
        <img src="assets/img/sobre-mi.jpg" alt="Camila Achury de pie en su oficina" width="1024" height="1536" loading="lazy">
      </figure>
      <div class="about__text">
        <p class="eyebrow reveal">Sobre mí</p>
        <h2 class="section-title reveal">Hola, soy Camila</h2>
        <p class="reveal">Creo en el trabajo bien hecho, en los números claros y en las metas escritas. Por eso acompaño a personas que quieren dejar de esperar el momento perfecto y empezar a construir algo propio.</p>
        <p class="reveal">Mi método combina formación, estrategia y seguimiento cercano: sabrás qué hacer cada semana y por qué lo haces.</p>
        <blockquote class="about__quote reveal">“Sueña, planifica, logra.”</blockquote>
      </div>
    </section>

    <!-- ============ BANDA CIUDAD ============ -->
    <section class="band">
      <div class="band__bg" data-parallax-bg style="background-image:url('assets/img/ciudad.jpg')"></div>
      <div class="band__inner">
        <p class="band__quote reveal">Grandes sueños requieren <em>grandes acciones.</em></p>
      </div>
    </section>

    <!-- ============ CTA FINAL ============ -->
    <section class="final">
      <div class="final__text">
        <p class="eyebrow reveal">Tu siguiente paso</p>
        <h2 class="section-title reveal">Hablemos de tu futuro negocio</h2>
        <p class="reveal">Completa la evaluación y agenda una llamada conmigo. Te escribiré directamente a WhatsApp.</p>
        <a href="#evaluacion" class="btn btn--gold magnetic reveal">Comenzar evaluación <span aria-hidden="true">→</span></a>
      </div>
      <figure class="final__photo reveal">
        <img src="assets/img/agenda.jpg?v=2" alt="Camila Achury en su escritorio con blazer azul marino" width="1122" height="1122" loading="lazy">
      </figure>
    </section>
  </main>

  <footer class="footer">
    <span class="footer__mark">Camila Achury</span>
    <nav class="footer__links">
      <a href="#" data-instagram>Instagram</a>
      <a href="#" data-whatsapp>WhatsApp</a>
    </nav>
    <small>© 2026 Camila Achury. Todos los derechos reservados.</small>
  </footer>

  <a href="#" class="wa-float" data-whatsapp aria-label="Escríbeme por WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z"/></svg>
  </a>
</body>
</html>
