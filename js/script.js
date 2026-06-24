document.addEventListener('DOMContentLoaded', () => {
  const cfg = window.SITE_CONFIG;

  const fill = (text) => (text || '')
    .replaceAll('{phone}', cfg.phone)
    .replaceAll('{address}', cfg.address)
    .replaceAll('{email}', cfg.email);

  /* ---------- 1. Allgemeine Texte ---------- */
  document.querySelectorAll('[data-site-name]').forEach(el => el.textContent = cfg.name);
  document.querySelectorAll('[data-slogan]').forEach(el => el.textContent = cfg.slogan);
  document.querySelectorAll('[data-hero-text]').forEach(el => el.textContent = cfg.heroText);
  document.querySelectorAll('[data-about-text]').forEach(el => el.textContent = cfg.about.text);
  document.querySelectorAll('[data-address]').forEach(el => el.textContent = cfg.address);
  document.title = `${cfg.name} – ${cfg.slogan}`;

  document.querySelectorAll('[data-phone-link]').forEach(el => {
    el.setAttribute('href', `tel:${cfg.phone.replace(/\s/g, '')}`);
    if (!el.classList.contains('btn') && !el.classList.contains('btn-outline'))
      el.textContent = cfg.phone;
  });
  document.querySelectorAll('[data-email-link]').forEach(el => {
    el.setAttribute('href', `mailto:${cfg.email}`);
    el.textContent = cfg.email;
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- 2. Speisekarte + Tabs ---------- */
  const menuTabs = document.getElementById('menuTabs');
  const menuGrid = document.getElementById('menuGrid');
  let activeCategory = cfg.menu[0].category;

  const renderMenu = (category, animate = true) => {
    const cat = cfg.menu.find(c => c.category === category);
    if (!cat) return;

    if (animate) {
      const oldCards = menuGrid.querySelectorAll('.menu-card');
      oldCards.forEach(c => c.classList.add('hiding'));
      setTimeout(() => {
        menuGrid.innerHTML = '';
        buildCards(cat);
      }, 280);
    } else {
      menuGrid.innerHTML = '';
      buildCards(cat);
    }
  };

  const buildCards = (cat) => {
    cat.items.forEach((item, i) => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      card.style.animationDelay = `${i * 0.07}s`;
      const badgeClass = item.badge
        ? `badge-${item.badge.toLowerCase()}` : '';
      card.innerHTML = `
        <div class="menu-card-img">
          <div class="menu-card-img-icon">${cat.icon}</div>
          <div>🖼 ${item.name}</div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <div class="menu-card-name">${item.name}</div>
            <div class="menu-card-price">${item.price}</div>
          </div>
          <p class="menu-card-desc">${item.desc}</p>
          ${item.badge ? `<span class="menu-badge ${badgeClass}">${item.badge}</span>` : ''}
        </div>`;
      menuGrid.appendChild(card);
    });
  };

  cfg.menu.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'menu-tab' + (cat.category === activeCategory ? ' active' : '');
    btn.innerHTML = `<span class="menu-tab-icon">${cat.icon}</span> ${cat.category}`;
    btn.addEventListener('click', () => {
      if (cat.category === activeCategory) return;
      activeCategory = cat.category;
      menuTabs.querySelectorAll('.menu-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(cat.category);
    });
    menuTabs.appendChild(btn);
  });
  renderMenu(activeCategory, false);

  /* ---------- 4. Galerie ---------- */
  const galleryEmojis = ['🥩','🥗','🫙','🏪','🍞','👨‍🍳'];
  const galleryGrid = document.getElementById('galleryGrid');
  cfg.gallery.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'gallery-item reveal';
    el.innerHTML = `
      <div class="gallery-item-inner">
        <div class="gallery-item-emoji">${galleryEmojis[i] || '🖼'}</div>
        <div class="gallery-item-label">🖼 ${item.label}</div>
      </div>
      <div class="gallery-overlay">
        <div class="gallery-overlay-icon">${galleryEmojis[i] || '🖼'}</div>
        <div class="gallery-overlay-title">${item.label}</div>
        <div class="gallery-overlay-desc">${item.desc}</div>
      </div>`;
    galleryGrid.appendChild(el);
  });

  /* ---------- 5. Über-uns-Badges ---------- */
  const featuresContainer = document.getElementById('featuresContainer');
  cfg.about.features.forEach(f => {
    const badge = document.createElement('span');
    badge.className = 'feature-badge';
    badge.textContent = f;
    featuresContainer.appendChild(badge);
  });

  /* ---------- 6. Testimonials Slider ---------- */
  const track = document.getElementById('testimonialsTrack');
  const dots  = document.getElementById('sliderDots');
  let current = 0;
  let autoTimer;

  cfg.testimonials.forEach((t, i) => {
    const stars = '★'.repeat(t.stars) + '☆'.repeat(5 - t.stars);
    const card = document.createElement('div');
    card.className = 'testimonial-card';
    card.innerHTML = `
      <div class="testimonial-stars">${stars}</div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name[0]}</div>
        <div>
          <div class="testimonial-name">${t.name}</div>
          <div class="testimonial-date">${t.date}</div>
        </div>
      </div>`;
    track.appendChild(card);

    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Bewertung ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dots.appendChild(dot);
  });

  const goTo = (index) => {
    current = (index + cfg.testimonials.length) % cfg.testimonials.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.querySelectorAll('.slider-dot').forEach((d, i) =>
      d.classList.toggle('active', i === current));
    resetAuto();
  };

  const resetAuto = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  };

  document.getElementById('sliderPrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('sliderNext').addEventListener('click', () => goTo(current + 1));
  resetAuto();

  /* ---------- 7. Öffnungszeiten ---------- */
  const hoursContainer = document.getElementById('hoursContainer');
  const weekdays = ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'];
  const todayName = weekdays[new Date().getDay()];
  cfg.hours.forEach(h => {
    const row = document.createElement('div');
    const isToday = h.day === todayName;
    row.className = 'hours-row' + (isToday ? ' today' : '');
    row.innerHTML = `
      <span class="day">
        ${h.day}
        ${isToday ? '<span class="today-tag">Heute</span>' : ''}
      </span>
      <span class="time">${h.time}</span>`;
    hoursContainer.appendChild(row);
  });

  /* ---------- 8. Footer Social ---------- */
  const footerSocial = document.getElementById('footerSocial');
  const socialLabels = { instagram: 'IG', facebook: 'FB', tiktok: 'TT' };
  Object.entries(cfg.social).forEach(([key, url]) => {
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.setAttribute('aria-label', key);
      a.textContent = socialLabels[key] || key.slice(0,2).toUpperCase();
      footerSocial.appendChild(a);
    }
  });

  /* ---------- 9. Navigation ---------- */
  const header = document.getElementById('header');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  /* Sanfter Scroll mit Ease-In-Out-Cubic */
  const smoothScrollTo = (targetY, duration) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const startTime = performance.now();
    const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      window.scrollTo(0, startY + distance * ease(progress));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  /* Scroll-Pfeil klickbar */
  const scrollHint = document.getElementById('scrollHint');
  if (scrollHint) {
    scrollHint.addEventListener('click', () => {
      const target = document.getElementById('menu');
      if (target) smoothScrollTo(target.getBoundingClientRect().top + window.scrollY - 72, 950);
    });
  }

  /* Scroll-Spy: aktiven Nav-Reiter hervorheben */
  const spySections = [
    { id: 'menu',        href: '#menu' },
    { id: 'gallery',     href: '#gallery' },
    { id: 'about',       href: '#gallery' },
    { id: 'testimonials',href: '#gallery' },
    { id: 'hours',       href: '#hours' },
    { id: 'anfahrt',     href: '#anfahrt' },
    { id: 'contact',     href: '#contact' },
  ];
  const heroEl = document.getElementById('hero');

  const updateScrollSpy = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 0;
    const spyLinks = navLinks.querySelectorAll('a:not(.btn-call)');
    if (window.scrollY < heroBottom - 140) {
      spyLinks.forEach(a => a.classList.remove('nav-active'));
      return;
    }
    let activeHref = null;
    spySections.forEach(s => {
      const el = document.getElementById(s.id);
      if (!el) return;
      if (el.getBoundingClientRect().top <= window.innerHeight * 0.5) activeHref = s.href;
    });
    spyLinks.forEach(a => a.classList.toggle('nav-active', a.getAttribute('href') === activeHref));
  };

  window.addEventListener('scroll', updateScrollSpy, { passive: true });

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

  /* ---------- 10. Kontaktformular ---------- */
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelectorAll('input, textarea').forEach(el => el.value = '');
    success.classList.add('show');
    setTimeout(() => success.classList.remove('show'), 5000);
  });

  /* ---------- 11. Scroll-Animationen ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ---------- 12. Chat-Widget ---------- */
  const chatToggle  = document.getElementById('chatToggle');
  const chatPanel   = document.getElementById('chatPanel');
  const chatClose   = document.getElementById('chatClose');
  const chatMessages = document.getElementById('chatMessages');
  const chatQuick   = document.getElementById('chatQuick');
  const chatForm    = document.getElementById('chatForm');
  const chatText    = document.getElementById('chatText');
  let chatStarted   = false;

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

  const openChat  = () => { chatPanel.classList.add('open'); chatPanel.setAttribute('aria-hidden', false); startChat(); };
  const closeChat = () => { chatPanel.classList.remove('open'); chatPanel.setAttribute('aria-hidden', true); };

  chatToggle.addEventListener('click', () =>
    chatPanel.classList.contains('open') ? closeChat() : openChat());
  chatClose.addEventListener('click', closeChat);

  const findAnswer = (input) => {
    const text = input.toLowerCase();
    const match = cfg.chat.faqs.find(faq =>
      faq.keywords.some(kw => text.includes(kw)));
    return match ? match.a : cfg.chat.fallback;
  };

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = chatText.value.trim();
    if (!value) return;
    addMsg(value, 'user');
    chatText.value = '';
    setTimeout(() => addMsg(findAnswer(value), 'bot'), 380);
  });
});
