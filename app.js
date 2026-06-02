/* ===================================================
   KatibRabatblanca.com — App Logic
   =================================================== */

const WA_NUMBER = "212612605737";
const WA_BASE   = "https://wa.me/" + WA_NUMBER;
const EMAIL     = "salatrir@gmail.com";

let currentLang = localStorage.getItem("katib_lang") || "ar";
let blogPage = 1;
const BLOG_PER_PAGE = 9;
let blogFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);
  initNav();
  initFAQ();
  initContactForm();
  initAnimations();
  initBackTop();
});

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("katib_lang", lang);
  const t = TRANSLATIONS[lang];
  const html = document.documentElement;
  const body = document.body;
  html.lang = t.lang; html.dir = t.dir;
  body.dir = t.dir; body.setAttribute("data-lang", lang);

  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );

  setText("nav-home", t.nav.home);
  setText("nav-services", t.nav.services);
  setText("nav-blog", t.nav.blog);
  setText("nav-testimonials", t.nav.testimonials);
  setText("nav-faq", t.nav.faq);
  setText("nav-contact", t.nav.contact);
  setText("nav-wa-text", t.whatsapp.cta);
  setAttr("site-name-nav", "textContent", t.siteName);
  setAttr("site-tagline-nav", "textContent", t.tagline);

  setText("hero-title", t.hero.title);
  setText("hero-subtitle", t.hero.subtitle);
  setText("hero-cta1", t.hero.cta);
  setText("hero-cta2", t.hero.cta2);
  setWALink("hero-cta1", t.whatsapp.message);

  setText("services-title", t.services.title);
  setText("services-subtitle", t.services.subtitle);
  renderServices(t.services.list);

  blogPage = 1; blogFilter = "all";
  renderBlog();

  setText("testimonials-title", t.testimonials.title);
  setText("testimonials-subtitle", t.testimonials.subtitle);
  renderTestimonials(t.testimonials.list);

  setText("faq-title", t.faq.title);
  setText("faq-subtitle", t.faq.subtitle);
  renderFAQ(t.faq.list);

  setText("contact-title", t.contact.title);
  setText("contact-subtitle", t.contact.subtitle);
  setText("contact-wa-btn", t.contact.whatsapp);
  setText("contact-email-btn", t.contact.email);
  setText("contact-address", t.contact.address);
  setText("contact-hours", t.contact.hours);
  setText("form-name-label", t.contact.form.name);
  setText("form-email-label", t.contact.form.email);
  setText("form-service-label", t.contact.form.service);
  setText("form-msg-label", t.contact.form.message);
  setText("form-submit-btn", t.contact.form.send);
  setAttr("form-name-input", "placeholder", t.contact.form.name);
  setAttr("form-email-input", "placeholder", t.contact.form.email);
  setAttr("form-msg-input", "placeholder", t.contact.form.message);
  setWALink("contact-wa-btn-link", t.whatsapp.message);
  setWALink("float-wa-link", t.whatsapp.message);
  setText("float-wa-text", t.whatsapp.floating);
  setText("footer-rights", `© 2025 ${t.siteName} — ${t.footer.rights}`);
  setText("footer-privacy", t.footer.privacy);

  const blogTitleEl = document.getElementById("blog-section-title");
  const blogSubEl   = document.getElementById("blog-section-subtitle");
  if (blogTitleEl) blogTitleEl.textContent = getBlogTitle(lang);
  if (blogSubEl)   blogSubEl.textContent   = getBlogSubtitle(lang);

  updateSEO(lang, t);
}

function getBlogTitle(lang) {
  return { ar:"مدونتنا", fr:"Notre Blog", en:"Our Blog", es:"Nuestro Blog" }[lang];
}
function getBlogSubtitle(lang) {
  return {
    ar: "مقالات ونصائح إدارية وقانونية لسكان الرباط",
    fr: "Articles et conseils administratifs pour Rabatblanca",
    en: "Administrative and legal articles for Rabatblanca residents",
    es: "Artículos y consejos administrativos para Rabatblanca"
  }[lang];
}

function setText(id, text) { const el = document.getElementById(id); if (el) el.textContent = text; }
function setAttr(id, attr, value) { const el = document.getElementById(id); if (el) el[attr] = value; }
function setWALink(id, message) {
  const el = document.getElementById(id);
  if (el) el.href = `${WA_BASE}?text=${encodeURIComponent(message)}`;
}

function updateSEO(lang, t) {
  const seoMap = {
    ar: {
      title: "كاتب عمومي الرباط | خدمات كتابة احترافية | KatibRabatblanca",
      desc:  "كاتب عمومي محترف في الرباط. خدمات كتابة الشكايات والطلبات والسيرة الذاتية والترجمة والعقود. تواصل عبر واتساب +212612605737",
      kw:    "كاتب عمومي الرباط, كاتب عمومي الرباط, خدمات كتابة عمومية, كتابة شكايات الرباط, CV احترافي الرباط, ترجمة وثائق الرباط"
    },
    fr: {
      title: "Écrivain Public Rabatblanca | Services Rédaction | KatibRabatblanca",
      desc:  "Écrivain public professionnel à Rabatblanca. Rédaction plaintes, CV, traductions, contrats. Contactez via WhatsApp +212612605737",
      kw:    "écrivain public Rabatblanca, rédaction administrative Rabatblanca, CV professionnel Rabat, traduction arabe français Rabatblanca"
    },
    en: {
      title: "Public Writer Rabatblanca | Professional Writing | KatibRabatblanca",
      desc:  "Professional public writer in Rabatblanca. Complaint writing, CV, translations, contracts. Contact via WhatsApp +212612605737",
      kw:    "public writer Rabatblanca, document writing Rabatblanca, professional CV Rabatblanca, translation services Rabat"
    },
    es: {
      title: "Escritor Público Rabatblanca | Servicios Profesionales | KatibRabatblanca",
      desc:  "Escritor público profesional en Rabatblanca. Quejas, CV, traducciones, contratos. Contacte por WhatsApp +212612605737",
      kw:    "escritor público Rabatblanca, redacción documentos Rabatblanca, CV profesional Rabat, traducción árabe español Rabatblanca"
    }
  };
  const s = seoMap[lang];
  document.title = s.title;
  setMeta("description", s.desc);
  setMeta("keywords", s.kw);
  setOG("og:title", s.title);
  setOG("og:description", s.desc);
  setOG("og:locale", { ar:"ar_MA", fr:"fr_MA", en:"en_US", es:"es_ES" }[lang]);
}
function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) { el = document.createElement("meta"); el.name = name; document.head.appendChild(el); }
  el.content = content;
}
function setOG(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute("property", property); document.head.appendChild(el); }
  el.content = content;
}

function renderServices(list) {
  const grid = document.getElementById("services-grid");
  if (!grid) return;
  grid.innerHTML = list.map(s => `
    <div class="service-card fade-up">
      <div class="service-icon">${s.icon}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
      <a class="service-wa" href="${WA_BASE}?text=${encodeURIComponent(s.title)}" target="_blank" rel="noopener">💬 WhatsApp</a>
    </div>`).join("");
  initAnimations();
}

function renderBlog() {
  const grid    = document.getElementById("blog-grid");
  const moreBtn = document.getElementById("blog-more-btn");
  if (!grid) return;
  const articles = BLOG_ARTICLES[currentLang] || [];
  const filtered = blogFilter === "all" ? articles : articles.filter(a => a.category === blogFilter);
  const sliced   = filtered.slice(0, blogPage * BLOG_PER_PAGE);
  grid.innerHTML = sliced.map(a => `
    <div class="blog-card fade-up">
      <div class="blog-card-body">
        <span class="blog-tag">${a.category}</span>
        <div class="blog-title">${a.title}</div>
        <div class="blog-excerpt">${a.excerpt}</div>
        <div class="blog-meta">
          <span>📅 ${a.date} · ⏱ ${a.readTime}</span>
          <a class="blog-read-more" href="${WA_BASE}?text=${encodeURIComponent('استفسار عن: ' + a.title)}" target="_blank" rel="noopener">
            ${currentLang==='ar'?'اقرأ المزيد ←':currentLang==='fr'?'Lire →':currentLang==='es'?'Leer →':'Read →'}
          </a>
        </div>
      </div>
    </div>`).join("") || `<p style="text-align:center;color:var(--text-light);grid-column:1/-1">—</p>`;
  if (moreBtn) {
    moreBtn.style.display = sliced.length < filtered.length ? "block" : "none";
    moreBtn.textContent = { ar:"عرض المزيد", fr:"Voir plus", en:"Load more", es:"Ver más" }[currentLang];
  }
  renderBlogFilters(articles);
  initAnimations();
}

function renderBlogFilters(articles) {
  const wrap = document.getElementById("blog-filters");
  if (!wrap) return;
  const cats = ["all", ...new Set(articles.map(a => a.category))];
  const allLabel = { ar:"الكل", fr:"Tous", en:"All", es:"Todos" }[currentLang];
  wrap.innerHTML = cats.map(c => `
    <button class="filter-btn ${blogFilter===c?'active':''}" onclick="setBlogFilter('${c}')">
      ${c==="all"?allLabel:c}
    </button>`).join("");
}
function setBlogFilter(cat) { blogFilter = cat; blogPage = 1; renderBlog(); }
document.addEventListener("click", e => { if (e.target.id === "blog-more-btn") { blogPage++; renderBlog(); } });

function renderTestimonials(list) {
  const grid = document.getElementById("testimonials-grid");
  if (!grid) return;
  grid.innerHTML = list.map(t => `
    <div class="testimonial-card fade-up">
      <div class="stars">${"★".repeat(t.rating)}</div>
      <div class="testimonial-text">"${t.text}"</div>
      <div class="testimonial-author">
        <div class="author-avatar">${t.name[0]}</div>
        <div><div class="author-name">${t.name}</div><div class="author-city">📍 ${t.city}</div></div>
      </div>
    </div>`).join("");
  initAnimations();
}

function renderFAQ(list) {
  const grid = document.getElementById("faq-grid");
  if (!grid) return;
  grid.innerHTML = list.map((item, i) => `
    <div class="faq-item">
      <button class="faq-question" onclick="toggleFAQ(${i})">
        <span>${item.q}</span><span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" id="faq-ans-${i}">${item.a}</div>
    </div>`).join("");
}
function toggleFAQ(i) {
  const btn = document.querySelectorAll(".faq-question")[i];
  const ans = document.getElementById(`faq-ans-${i}`);
  if (!btn || !ans) return;
  const isOpen = ans.classList.contains("open");
  document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("open"));
  document.querySelectorAll(".faq-question").forEach(b => b.classList.remove("open"));
  if (!isOpen) { ans.classList.add("open"); btn.classList.add("open"); }
}

function initNav() {
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("nav-links");
  window.addEventListener("scroll", () => {
    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
    const bt = document.getElementById("back-top");
    if (bt) bt.classList.toggle("visible", window.scrollY > 400);
  });
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => navLinks.classList.toggle("mobile-open"));
    navLinks.addEventListener("click", e => { if (e.target.tagName==="A") navLinks.classList.remove("mobile-open"); });
  }
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const target = document.querySelector(a.getAttribute("href"));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior:"smooth", block:"start" }); }
    });
  });
  const sections = document.querySelectorAll("section[id]");
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        document.querySelectorAll(".nav-links a").forEach(a =>
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
    });
  }, { threshold: 0.4 }).observe && sections.forEach(s =>
    new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting)
          document.querySelectorAll(".nav-links a").forEach(a =>
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id));
      });
    }, { threshold: 0.4 }).observe(s)
  );
}

function initBackTop() {
  const btn = document.getElementById("back-top");
  if (btn) btn.addEventListener("click", () => window.scrollTo({ top:0, behavior:"smooth" }));
}
function initAnimations() {
  new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
  }, { threshold: 0.1 }).observe && document.querySelectorAll(".fade-up:not(.visible)").forEach(el =>
    new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
    }, { threshold: 0.1 }).observe(el)
  );
}
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name    = document.getElementById("form-name-input")?.value || "";
    const service = document.getElementById("form-service-select")?.value || "";
    const message = document.getElementById("form-msg-input")?.value || "";
    const t = TRANSLATIONS[currentLang];
    const text = `${t.contact.whatsapp}\n\n👤 ${name}\n🔧 ${service}\n\n${message}`;
    window.open(`${WA_BASE}?text=${encodeURIComponent(text)}`, "_blank");
  });
}
function openWA(msg) {
  const t = TRANSLATIONS[currentLang];
  window.open(`${WA_BASE}?text=${encodeURIComponent(msg || t.whatsapp.message)}`, "_blank");
}
