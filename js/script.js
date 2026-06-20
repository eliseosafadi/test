/* =====================================================================
   SCRIPT.JS
   ---------------------------------------------------------------------
   Liest die Inhalte aus config.js und baut Menü, Öffnungszeiten,
   Über-uns-Badges, Kontaktdaten, Footer und den Chat-Bot zusammen.
   In der Regel musst du hier NICHTS ändern – Inhalte kommen aus config.js.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.SITE_CONFIG;

  /* --- Hilfsfunktion: Platzhalter wie {phone} / {address} ersetzen --- */
  const fill = (text) => (text || '')
    .replaceAll('{phone}', cfg.phone)
    .replaceAll('{address}', cfg.address)
    .replaceAll('{email}', cfg.email);

  /* ---------- 1. Allgemeine Texte einsetzen ---------- */
  document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = cfg.name);
  document.querySelectorAll('[data-slogan]').forEach(el => el.textContent = cfg.slogan);
  document.querySelectorAll('[data-hero-text]').forEach(el => el.textContent = cfg.heroText);
  document.querySelectorAll('[data-about-text]').forEach(el => el.textContent = cfg.about.text);
  document.querySelectorAll('[data-address]').forEach(el => el.textContent = cfg.address);
  document.title = `${cfg.name} – ${cfg.slogan}`;

  document.querySelectorAll('[data-phone-link]').forEach(el => {
    el.setAttribute('href', `tel:${cfg.phone.replace(/\s/g, '')}`);
    if (!el.classList.contains('btn')) el.textContent = cfg.phone;
  });
  document.querySelectorAll('[data-email-link]').forEach(el => {
    el.setAttribute('href', `mailto:${cfg.email}`);
    el.textContent = cfg.email;
  });

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- 2. Speisekarte rendern ---------- */
  const menuContainer = document.getElementById('menuContainer');
  cfg.menu.forEach(cat => {
    const section = document.createElement('div');
    section.className = 'menu-category reveal';
    section.innerHTML = `
      <h3>${cat.category}</h3>
      <div class="menu-grid">
        ${cat.items.map(item => `
          <div class="menu-card">
            <div class="menu-card-img">🖼 ${item.name}</div>
            <div class="menu-card-body">
              <div class="menu-card-head">
                <h4>${item.name}</h4>
                <span class="menu-card-price">${item.price}</span>
              </div>
              <p class="menu-card-desc">${item.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>`;
    menuContainer.appendChild(section);
  });

  /* ---------- 3. Über-uns-Badges ---------- */
  const featuresContainer = document.getElementById('featuresContainer');
  cfg.about.features.forEach(f => {
    const badge = document.createElement('span');
    badge.className = 'feature-badge';
    badge.textContent = f;
    featuresContainer.appendChild(badge);
  });

  /* ---------- 4. Öffnungszeiten ---------- */
  const hoursContainer = document.getElementById('hoursContainer');
  const weekdays = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
  const todayName = weekdays[new Date().getDay()];
  cfg.hours.forEach(h => {
    const row = document.createElement('div');
    row.className = 'hours-row' + (h.day === todayName ? ' today' : '');
    row.innerHTML = `<span class="day">${h.day}</span><span>${h.time}</span>`;
    hoursContainer.appendChild(row);
  });

  /* ---------- 5. Footer Social-Links ---------- */
  const footerSocial = document.getElementById('footerSocial');
  const socialIcons = { instagram: 'IG', facebook: 'FB', tiktok: 'TT' };
  Object.entries(cfg.social).forEach(([key, url]) => {
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', key);
      a.textContent = socialIcons[key] || key.slice(0, 2).toUpperCase();
      footerSocial.appendChild(a);
    }
  });

  /* ---------- 6. Navigation: Sticky-Schatten + Burger-Menü ---------- */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });

  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', false);
    });
  });

  /* ---------- 7. Kontaktformular (Frontend-Bestätigung) ---------- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Hier später echten Versand anbinden (z.B. fetch an ein Backend / Formspree).
    form.querySelectorAll('input, textarea').forEach(el => el.value = '');
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  });

  /* ---------- 8. Scroll-Einblend-Animation ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ---------- 9. Chat-Widget (FAQ-Bot) ---------- */
  const chatToggle = document.getElementById('chatToggle');
  const chatPanel  = document.getElementById('chatPanel');
  const chatClose  = document.getElementById('chatClose');
  const chatMessages = document.getElementById('chatMessages');
  const chatQuick  = document.getElementById('chatQuick');
  const chatForm   = document.getElementById('chatForm');
  const chatText   = document.getElementById('chatText');

  let chatStarted = false;

  const addMsg = (text, sender) => {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${sender}`;
    msg.textContent = fill(text);
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const startChat = () => {
    if (chatStarted) return;
    chatStarted = true;
    addMsg(cfg.chat.greeting, 'bot');
    // Schnellauswahl-Buttons aus den FAQ-Fragen
    cfg.chat.faqs.forEach(faq => {
      const btn = document.createElement('button');
      btn.textContent = faq.q;
      btn.addEventListener('click', () => {
        addMsg(faq.q, 'user');
        setTimeout(() => addMsg(faq.a, 'bot'), 350);
      });
      chatQuick.appendChild(btn);
    });
  };

  const openChat = () => { chatPanel.classList.add('open'); chatPanel.setAttribute('aria-hidden', false); startChat(); };
  const closeChat = () => { chatPanel.classList.remove('open'); chatPanel.setAttribute('aria-hidden', true); };

  chatToggle.addEventListener('click', () => {
    chatPanel.classList.contains('open') ? closeChat() : openChat();
  });
  chatClose.addEventListener('click', closeChat);

  // Freitext: Stichwort-Erkennung gegen die FAQ-Keywords
  const findAnswer = (input) => {
    const text = input.toLowerCase();
    const match = cfg.chat.faqs.find(faq =>
      faq.keywords.some(kw => text.includes(kw))
    );
    return match ? match.a : cfg.chat.fallback;
  };

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = chatText.value.trim();
    if (!value) return;
    addMsg(value, 'user');
    chatText.value = '';
    setTimeout(() => addMsg(findAnswer(value), 'bot'), 350);
  });
});
