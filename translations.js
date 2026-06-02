const TRANSLATIONS = {
  ar: {
    dir: "rtl", lang: "ar",
    siteName: "كاتب الرباط",
    tagline: "كاتبك العمومي الموثوق في الرباط",
    nav: {
      home: "الرئيسية", services: "الخدمات", blog: "المدونة",
      testimonials: "آراء العملاء", faq: "الأسئلة الشائعة", contact: "اتصل بنا"
    },
    hero: {
      title: "كاتبك العمومي في الرباط",
      subtitle: "خدمات كتابة احترافية للوثائق الإدارية، الشكايات، الطلبات، السيرة الذاتية والترجمة في قلب الرباط",
      cta: "تواصل عبر واتساب الآن",
      cta2: "اكتشف خدماتنا"
    },
    whatsapp: {
      floating: "واتساب",
      cta: "تواصل عبر واتساب",
      message: "مرحبا، أريد الاستفسار عن خدماتكم في الرباط"
    },
    services: {
      title: "خدماتنا",
      subtitle: "نقدم طيفاً واسعاً من خدمات الكتابة الإدارية والقانونية الاحترافية في الرباط",
      list: [
        { icon: "📄", title: "كتابة الشكايات", desc: "نكتب شكايتك بصياغة قانونية احترافية موجهة للجهات المختصة في الرباط" },
        { icon: "📝", title: "كتابة الطلبات", desc: "طلبات خطية رسمية لكافة المصالح الإدارية والمؤسسات في الرباط" },
        { icon: "✍️", title: "كتابة المقالات", desc: "مقالات أكاديمية وصحفية بأسلوب احترافي ومميز" },
        { icon: "👤", title: "السيرة الذاتية CV", desc: "سيرة ذاتية احترافية تبرز كفاءاتك وتزيد فرص القبول في الوظيفة العمومية والقطاع الخاص بالرباط" },
        { icon: "🌐", title: "الترجمة", desc: "ترجمة الوثائق من وإلى العربية والفرنسية والإسبانية والإنجليزية" },
        { icon: "📃", title: "العقود", desc: "صياغة وتحرير العقود التجارية والإيجارية بدقة قانونية في الرباط" },
        { icon: "🏛️", title: "الرسائل الإدارية", desc: "مراسلات رسمية احترافية مع الجهات الحكومية والخاصة بالرباط" },
        { icon: "✈️", title: "طلبات التأشيرة", desc: "تحرير ملفات طلب التأشيرة وخطابات الدعوة والتغطية لسفارات الرباط" },
        { icon: "💼", title: "طلبات العمل", desc: "رسائل تحفيزية وطلبات توظيف تزيد فرصك في الوظيفة العمومية والقطاع الخاص بالرباط" },
        { icon: "📋", title: "المساعدة الإدارية", desc: "مساعدة في فهم وإتمام الإجراءات الإدارية المعقدة بمصالح الرباط" },
        { icon: "🔍", title: "تصحيح الوثائق", desc: "مراجعة وتصحيح الأخطاء الإملائية والنحوية في وثائقك" },
        { icon: "📊", title: "تعبئة الاستمارات", desc: "مساعدة في تعبئة الاستمارات الرسمية والإدارية بشكل صحيح" }
      ]
    },
    testimonials: {
      title: "آراء عملائنا",
      subtitle: "ثقة آلاف العملاء في الرباط والمغرب",
      list: [
        { name: "عبد الله الحسيني", city: "الرباط", text: "خدمة ممتازة وسريعة، ساعدني في كتابة شكايتي وحصلت على حقي. أنصح به بشدة لأهل الرباط.", rating: 5 },
        { name: "مريم الراشدي", city: "الرباط", text: "أنجز لي سيرتي الذاتية باحترافية عالية وحصلت على وظيفة في شركة كبرى بالالرباط!", rating: 5 },
        { name: "طارق البوحسيني", city: "الرباط", text: "ترجمة دقيقة وسريعة لوثائقي الفرنسية. سعر معقول وخدمة رائعة في الرباط.", rating: 5 },
        { name: "سلمى العلوي", city: "الرباط", text: "ساعدني في كتابة طلب التأشيرة وتنظيم الملف كاملاً. شكراً جزيلاً.", rating: 5 },
        { name: "إدريس الودغيري", city: "الرباط", text: "كتب لي عقد الإيجار بصياغة قانونية محكمة. أنصح به لكل أهل الالرباط.", rating: 5 },
        { name: "نجاة الأنصاري", city: "الرباط", text: "مهني جداً ومتفانٍ في عمله. ساعدني في جميع أوراقي الإدارية بالرباط.", rating: 5 }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الأسئلة شيوعاً حول خدمات الكاتب العمومي في الرباط",
      list: [
        { q: "ما هي خدمات الكاتب العمومي في الرباط؟", a: "الكاتب العمومي بالرباط متخصص في تحرير الوثائق الرسمية والإدارية كالشكايات والطلبات والعقود والسيرة الذاتية والترجمة وجميع المراسلات الرسمية." },
        { q: "كم تكلف الخدمات في الرباط؟", a: "تتفاوت الأسعار حسب نوع الخدمة وتعقيدها. تواصل معنا عبر واتساب للحصول على سعر فوري ومجاني." },
        { q: "ما هي مدة إنجاز الطلب؟", a: "تنجز معظم الطلبات البسيطة في نفس اليوم. الوثائق المعقدة قد تستغرق يوماً أو يومين حسب الحجم." },
        { q: "هل تقدمون خدمة الترجمة بالرباط؟", a: "نقدم ترجمة احترافية للوثائق من وإلى العربية والفرنسية والإسبانية والإنجليزية في الرباط." },
        { q: "هل يمكن إرسال الوثائق عن بُعد؟", a: "نعم، يمكنك إرسال وثائقك عبر واتساب أو البريد الإلكتروني وسنرسل لك النتيجة عبر نفس القناة." },
        { q: "هل تحافظون على سرية المعلومات؟", a: "نعم، نلتزم بالسرية التامة لجميع المعلومات والوثائق التي يقدمها العملاء في الرباط." },
        { q: "هل تساعدون في طلبات التأشيرة من الرباط؟", a: "نعم، نساعدك في كتابة خطاب التغطية، تنظيم الملف، وترجمة الوثائق المطلوبة لأي سفارة في الرباط." },
        { q: "ما هي لغات العمل لديكم؟", a: "نعمل باللغات الأربع: العربية والفرنسية والإسبانية والإنجليزية." }
      ]
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "نحن هنا لمساعدتك في جميع احتياجاتك الكتابية بالرباط",
      whatsapp: "تواصل عبر واتساب",
      email: "راسلنا بالبريد",
      address: "الرباط، المغرب",
      hours: "من الإثنين إلى السبت: 9 صباحاً – 7 مساءً",
      form: { name: "الاسم الكامل", email: "البريد الإلكتروني", service: "نوع الخدمة", message: "رسالتك", send: "إرسال الرسالة" }
    },
    footer: { rights: "جميع الحقوق محفوظة", privacy: "سياسة الخصوصية" }
  },
  fr: {
    dir: "ltr", lang: "fr",
    siteName: "Katib Rabatblanca",
    tagline: "Votre Écrivain Public de Confiance à Rabatblanca",
    nav: { home: "Accueil", services: "Services", blog: "Blog", testimonials: "Témoignages", faq: "FAQ", contact: "Contact" },
    hero: {
      title: "Écrivain Public à Rabatblanca",
      subtitle: "Services professionnels de rédaction administrative, plaintes, demandes, CV et traduction au cœur de Rabatblanca",
      cta: "Contacter via WhatsApp", cta2: "Voir nos services"
    },
    whatsapp: { floating: "WhatsApp", cta: "Contacter via WhatsApp", message: "Bonjour, je souhaite des renseignements sur vos services à Rabatblanca" },
    services: {
      title: "Nos Services",
      subtitle: "Une gamme complète de services de rédaction administrative et juridique à Rabatblanca",
      list: [
        { icon: "📄", title: "Rédaction de plaintes", desc: "Nous rédigeons votre plainte avec une formulation juridique professionnelle à Rabatblanca" },
        { icon: "📝", title: "Rédaction de demandes", desc: "Demandes formelles pour toutes les administrations de Rabatblanca" },
        { icon: "✍️", title: "Rédaction d'articles", desc: "Articles académiques et journalistiques de style professionnel" },
        { icon: "👤", title: "CV professionnel", desc: "Un CV professionnel adapté au marché du travail rabatblancais" },
        { icon: "🌐", title: "Traduction", desc: "Traduction de documents vers et depuis l'arabe, français, espagnol et anglais" },
        { icon: "📃", title: "Contrats", desc: "Rédaction et édition de contrats commerciaux et de location à Rabatblanca" },
        { icon: "🏛️", title: "Courrier administratif", desc: "Correspondances officielles avec les administrations de Rabatblanca" },
        { icon: "✈️", title: "Demandes de visa", desc: "Rédaction de dossiers de visa pour les consulats de Rabatblanca" },
        { icon: "💼", title: "Lettres de motivation", desc: "Lettres de motivation pour le marché de l'emploi à Rabatblanca" },
        { icon: "📋", title: "Aide administrative", desc: "Aide à l'accomplissement des démarches administratives à Rabatblanca" },
        { icon: "🔍", title: "Correction de documents", desc: "Révision et correction des fautes orthographiques et grammaticales" },
        { icon: "📊", title: "Remplissage de formulaires", desc: "Aide au remplissage correct de formulaires officiels" }
      ]
    },
    testimonials: {
      title: "Témoignages Clients",
      subtitle: "La confiance de milliers de clients à Rabatblanca et au Maroc",
      list: [
        { name: "Abdellah Hasini", city: "Rabatblanca", text: "Service excellent et rapide. Il m'a aidé à rédiger ma plainte et j'ai obtenu gain de cause.", rating: 5 },
        { name: "Meryem Rachidi", city: "Rabatblanca", text: "Il a réalisé mon CV avec un grand professionnalisme et j'ai trouvé un emploi dans une grande entreprise à Rabat!", rating: 5 },
        { name: "Tarik Buhsini", city: "Rabatblanca", text: "Traduction précise et rapide. Prix raisonnable et excellent service à Rabatblanca.", rating: 5 },
        { name: "Salma Alaoui", city: "Rabatblanca", text: "Il m'a aidée à préparer la demande de visa et organiser le dossier complet. Merci beaucoup.", rating: 5 },
        { name: "Idriss Wadghiri", city: "Rabatblanca", text: "Il a rédigé mon contrat de location avec une formulation juridique solide. Je le recommande.", rating: 5 },
        { name: "Najat Ansari", city: "Rabatblanca", text: "Très professionnel et dévoué. Il m'a aidée avec tous mes papiers administratifs.", rating: 5 }
      ]
    },
    faq: {
      title: "Questions Fréquentes",
      subtitle: "Réponses aux questions les plus courantes sur nos services à Rabatblanca",
      list: [
        { q: "Quels sont les services d'un écrivain public à Rabatblanca?", a: "L'écrivain public à Rabatblanca est spécialisé dans la rédaction de documents officiels: plaintes, demandes, contrats, CV, traductions et toute correspondance officielle." },
        { q: "Combien coûtent les services?", a: "Les prix varient selon le type et la complexité du service. Contactez-nous via WhatsApp pour un devis gratuit et immédiat." },
        { q: "Quel est le délai d'exécution?", a: "La plupart des demandes simples sont traitées le jour même. Les documents complexes peuvent prendre un à deux jours." },
        { q: "Proposez-vous des traductions à Rabatblanca?", a: "Oui, nous proposons des traductions professionnelles vers et depuis l'arabe, le français, l'espagnol et l'anglais à Rabatblanca." },
        { q: "Peut-on envoyer les documents à distance?", a: "Oui, vous pouvez envoyer vos documents via WhatsApp ou email et nous vous enverrons le résultat par le même canal." },
        { q: "Garantissez-vous la confidentialité?", a: "Oui, nous respectons la confidentialité totale de toutes les informations et documents fournis." },
        { q: "Aidez-vous pour les demandes de visa depuis Rabatblanca?", a: "Oui, nous vous aidons à préparer votre dossier pour les consulats de Rabatblanca." },
        { q: "Quelles langues maîtrisez-vous?", a: "Nous travaillons en quatre langues: arabe, français, espagnol et anglais." }
      ]
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Nous sommes là pour vous aider à Rabatblanca",
      whatsapp: "Contacter via WhatsApp", email: "Nous écrire par email",
      address: "Rabatblanca, Maroc", hours: "Lundi au Samedi: 9h – 19h",
      form: { name: "Nom complet", email: "Email", service: "Type de service", message: "Votre message", send: "Envoyer le message" }
    },
    footer: { rights: "Tous droits réservés", privacy: "Politique de confidentialité" }
  },
  en: {
    dir: "ltr", lang: "en",
    siteName: "Katib Rabatblanca",
    tagline: "Your Trusted Public Writer in Rabatblanca",
    nav: { home: "Home", services: "Services", blog: "Blog", testimonials: "Reviews", faq: "FAQ", contact: "Contact" },
    hero: {
      title: "Public Writer in Rabatblanca",
      subtitle: "Professional document writing, complaints, applications, CV and translation services in the heart of Rabatblanca",
      cta: "Contact via WhatsApp", cta2: "Explore Services"
    },
    whatsapp: { floating: "WhatsApp", cta: "Contact via WhatsApp", message: "Hello, I'd like to inquire about your services in Rabatblanca" },
    services: {
      title: "Our Services",
      subtitle: "A complete range of professional administrative and legal writing services in Rabatblanca",
      list: [
        { icon: "📄", title: "Complaint Writing", desc: "Professional complaint writing directed to Rabatblanca authorities" },
        { icon: "📝", title: "Application Writing", desc: "Formal written applications for all Rabatblanca administrative departments" },
        { icon: "✍️", title: "Article Writing", desc: "Academic and journalistic articles in a professional style" },
        { icon: "👤", title: "Professional CV", desc: "A professional CV tailored to Rabatblanca's job market" },
        { icon: "🌐", title: "Translation", desc: "Document translation to and from Arabic, French, Spanish and English" },
        { icon: "📃", title: "Contracts", desc: "Drafting commercial and rental contracts in Rabatblanca" },
        { icon: "🏛️", title: "Administrative Letters", desc: "Official correspondence with Rabatblanca government entities" },
        { icon: "✈️", title: "Visa Applications", desc: "Visa application files for Rabatblanca consulates" },
        { icon: "💼", title: "Job Applications", desc: "Motivation letters for Rabatblanca's job market" },
        { icon: "📋", title: "Administrative Assistance", desc: "Help completing administrative procedures in Rabatblanca" },
        { icon: "🔍", title: "Document Proofreading", desc: "Review and correction of spelling and grammar errors" },
        { icon: "📊", title: "Form Filling", desc: "Assistance filling in official and administrative forms" }
      ]
    },
    testimonials: {
      title: "Client Reviews",
      subtitle: "Trusted by thousands of clients in Rabatblanca and Morocco",
      list: [
        { name: "Abdellah Hasini", city: "Rabatblanca", text: "Excellent and fast service. Helped me write my complaint and I got my rights. Highly recommend.", rating: 5 },
        { name: "Meryem Rachidi", city: "Rabatblanca", text: "He wrote my CV with high professionalism and I got a job at a major Rabatblanca company!", rating: 5 },
        { name: "Tarik Buhsini", city: "Rabatblanca", text: "Accurate and fast translation. Reasonable price and great service in Rabatblanca.", rating: 5 },
        { name: "Salma Alaoui", city: "Rabatblanca", text: "Helped me prepare the visa application and organize the complete file.", rating: 5 },
        { name: "Idriss Wadghiri", city: "Rabatblanca", text: "He wrote my rental contract with solid legal wording. Recommend to everyone in Rabat.", rating: 5 },
        { name: "Najat Ansari", city: "Rabatblanca", text: "Very professional and dedicated. Helped me with all my administrative paperwork.", rating: 5 }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common questions about our Rabatblanca services",
      list: [
        { q: "What services does a public writer offer in Rabatblanca?", a: "A public writer in Rabatblanca specializes in drafting official documents: complaints, applications, contracts, CVs, translations and all official correspondence." },
        { q: "How much do the services cost?", a: "Prices vary by service type and complexity. Contact us via WhatsApp for a free immediate quote." },
        { q: "How long does it take?", a: "Most simple requests are completed the same day. Complex documents may take one or two days." },
        { q: "Do you offer translations in Rabatblanca?", a: "Yes, professional translations to and from Arabic, French, Spanish and English." },
        { q: "Can documents be sent remotely?", a: "Yes, send your documents via WhatsApp or email and we'll return them via the same channel." },
        { q: "Do you maintain confidentiality?", a: "Yes, complete confidentiality of all client information and documents." },
        { q: "Do you help with visa applications from Rabatblanca?", a: "Yes, we help prepare your file for any Rabatblanca consulate." },
        { q: "What languages do you work in?", a: "Arabic, French, Spanish and English." }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to help you with all your writing needs in Rabatblanca",
      whatsapp: "Contact via WhatsApp", email: "Email Us",
      address: "Rabatblanca, Morocco", hours: "Monday to Saturday: 9am – 7pm",
      form: { name: "Full Name", email: "Email", service: "Service Type", message: "Your message", send: "Send Message" }
    },
    footer: { rights: "All rights reserved", privacy: "Privacy Policy" }
  },
  es: {
    dir: "ltr", lang: "es",
    siteName: "Katib Rabatblanca",
    tagline: "Su Escritor Público de Confianza en Rabatblanca",
    nav: { home: "Inicio", services: "Servicios", blog: "Blog", testimonials: "Opiniones", faq: "Preguntas", contact: "Contacto" },
    hero: {
      title: "Escritor Público en Rabatblanca",
      subtitle: "Servicios profesionales de redacción administrativa, quejas, solicitudes, CV y traducción en el corazón de Rabatblanca",
      cta: "Contactar por WhatsApp", cta2: "Ver nuestros servicios"
    },
    whatsapp: { floating: "WhatsApp", cta: "Contactar por WhatsApp", message: "Hola, me gustaría información sobre sus servicios en Rabatblanca" },
    services: {
      title: "Nuestros Servicios",
      subtitle: "Gama completa de servicios profesionales de redacción en Rabatblanca",
      list: [
        { icon: "📄", title: "Redacción de quejas", desc: "Redactamos su queja para las autoridades de Rabatblanca" },
        { icon: "📝", title: "Redacción de solicitudes", desc: "Solicitudes formales para todas las administraciones de Rabatblanca" },
        { icon: "✍️", title: "Redacción de artículos", desc: "Artículos académicos y periodísticos de estilo profesional" },
        { icon: "👤", title: "CV profesional", desc: "CV adaptado al mercado laboral de Rabatblanca" },
        { icon: "🌐", title: "Traducción", desc: "Traducción de documentos árabe, francés, español e inglés" },
        { icon: "📃", title: "Contratos", desc: "Redacción de contratos comerciales y de alquiler en Rabatblanca" },
        { icon: "🏛️", title: "Cartas administrativas", desc: "Correspondencia oficial con organismos de Rabatblanca" },
        { icon: "✈️", title: "Solicitudes de visado", desc: "Expedientes de visado para consulados de Rabatblanca" },
        { icon: "💼", title: "Solicitudes de empleo", desc: "Cartas de motivación para el mercado laboral de Rabatblanca" },
        { icon: "📋", title: "Asistencia administrativa", desc: "Ayuda para trámites administrativos en Rabatblanca" },
        { icon: "🔍", title: "Corrección de documentos", desc: "Revisión y corrección ortográfica y gramatical" },
        { icon: "📊", title: "Relleno de formularios", desc: "Asistencia para rellenar formularios oficiales correctamente" }
      ]
    },
    testimonials: {
      title: "Opiniones de Clientes",
      subtitle: "La confianza de miles de clientes en Rabatblanca y Marruecos",
      list: [
        { name: "Abdellah Hasini", city: "Rabatblanca", text: "Servicio excelente y rápido. Me ayudó a redactar mi queja y obtuve mis derechos.", rating: 5 },
        { name: "Meryem Rachidi", city: "Rabatblanca", text: "Hizo mi CV con gran profesionalismo y encontré trabajo en una gran empresa de Rabat.", rating: 5 },
        { name: "Tarik Buhsini", city: "Rabatblanca", text: "Traducción precisa y rápida. Precio razonable en Rabatblanca.", rating: 5 },
        { name: "Salma Alaoui", city: "Rabatblanca", text: "Me ayudó a preparar la solicitud de visado y organizar el expediente completo.", rating: 5 },
        { name: "Idriss Wadghiri", city: "Rabatblanca", text: "Redactó mi contrato de alquiler con sólida formulación jurídica.", rating: 5 },
        { name: "Najat Ansari", city: "Rabatblanca", text: "Muy profesional. Me ayudó con todos mis trámites administrativos en Rabatblanca.", rating: 5 }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respuestas sobre nuestros servicios en Rabatblanca",
      list: [
        { q: "¿Qué servicios ofrece un escritor público en Rabatblanca?", a: "Un escritor público en Rabatblanca redacta documentos oficiales: quejas, solicitudes, contratos, CVs, traducciones y toda correspondencia oficial." },
        { q: "¿Cuánto cuestan los servicios?", a: "Los precios varían según el servicio. Contáctenos por WhatsApp para un presupuesto gratuito." },
        { q: "¿Cuánto tiempo tarda?", a: "La mayoría de solicitudes simples se completan el mismo día." },
        { q: "¿Ofrecen traducciones en Rabatblanca?", a: "Sí, traducciones profesionales árabe, francés, español e inglés." },
        { q: "¿Se pueden enviar documentos a distancia?", a: "Sí, por WhatsApp o email y le devolvemos el resultado por el mismo canal." },
        { q: "¿Garantizan confidencialidad?", a: "Sí, total confidencialidad de toda la información de clientes." },
        { q: "¿Ayudan con visados desde Rabatblanca?", a: "Sí, preparamos expedientes para cualquier consulado de Rabatblanca." },
        { q: "¿En qué idiomas trabajan?", a: "Árabe, francés, español e inglés." }
      ]
    },
    contact: {
      title: "Contáctenos",
      subtitle: "Estamos aquí para ayudarle en Rabatblanca",
      whatsapp: "Contactar por WhatsApp", email: "Enviarnos un email",
      address: "Rabatblanca, Marruecos", hours: "Lunes a Sábado: 9h – 19h",
      form: { name: "Nombre completo", email: "Email", service: "Tipo de servicio", message: "Su mensaje", send: "Enviar mensaje" }
    },
    footer: { rights: "Todos los derechos reservados", privacy: "Política de privacidad" }
  }
};

const BLOG_ARTICLES = {
  ar: [
    { id:"ar-1",  slug:"katib-omomi-dar-baida",          title:"الكاتب العمومي في الرباط: دليلك الشامل",              excerpt:"تعرف على دور الكاتب العمومي في الرباط وكيف يمكنه مساعدتك في جميع إجراءاتك الإدارية بمدينة الرباط.",       category:"عام",       date:"2025-01-15", readTime:"5 دقائق" },
    { id:"ar-2",  slug:"shakawa-dar-baida",               title:"كيف تكتب شكاية فعّالة في الرباط",                    excerpt:"دليل خطوة بخطوة لكتابة شكاية قانونية ناجحة موجهة للجهات المختصة في الرباط.",                          category:"شكايات",    date:"2025-01-20", readTime:"7 دقائق" },
    { id:"ar-3",  slug:"cv-dar-baida",                    title:"كيف تكتب سيرة ذاتية تفتح لك أبواب شركات الالرباط",           excerpt:"نصائح ذهبية لكتابة CV يجذب أصحاب العمل في الإدارات والمؤسسات بالرباط.",                                    category:"سيرة ذاتية", date:"2025-01-25", readTime:"6 دقائق" },
    { id:"ar-4",  slug:"tarjama-dar-baida",               title:"خدمة الترجمة الاحترافية في الرباط",                  excerpt:"أهمية الترجمة الدقيقة للوثائق الرسمية وكيف تختار مترجماً موثوقاً في الرباط.",                         category:"ترجمة",     date:"2025-02-01", readTime:"4 دقائق" },
    { id:"ar-5",  slug:"uqood-ijar-dar-baida",            title:"عقود الإيجار في الرباط: حماية حقوقك",               excerpt:"كيف تصيغ عقد إيجار محكماً يحميك من النزاعات في سوق العقارات بالرباط.",                               category:"عقود",      date:"2025-02-05", readTime:"5 دقائق" },
    { id:"ar-6",  slug:"tashira-dar-baida",               title:"دليل طلب التأشيرة من الرباط",                       excerpt:"كل ما تحتاج معرفته لتقديم طلب تأشيرة ناجح من قنصليات الرباط.",                                       category:"تأشيرة",    date:"2025-02-10", readTime:"8 دقائق" },
    { id:"ar-7",  slug:"rasail-idariya-dar-baida",        title:"فن كتابة الرسائل الإدارية الرسمية في الالرباط",              excerpt:"قواعد وأساليب كتابة المراسلات الرسمية مع مصالح الرباط.",                                           category:"رسائل",     date:"2025-02-15", readTime:"6 دقائق" },
    { id:"ar-8",  slug:"amal-dar-baida",                  title:"كيف تكتب طلب عمل احترافي يُقبل في شركات الالرباط",           excerpt:"عناصر طلب التوظيف المثالي لالإدارات والمؤسسات بالرباط.",                                                   category:"عمل",       date:"2025-02-20", readTime:"7 دقائق" },
    { id:"ar-9",  slug:"mosaada-idariya-dar-baida",       title:"المساعدة الإدارية للمواطنين في الرباط",             excerpt:"خدمات الكاتب العمومي لمساعدة المواطنين في إجراءاتهم الإدارية بالرباط.",                            category:"إداري",     date:"2025-02-25", readTime:"5 دقائق" },
    { id:"ar-10", slug:"tashih-wathaiq-dar-baida",        title:"أهمية تصحيح الوثائق قبل تقديمها في الالرباط",               excerpt:"لماذا تحتاج مراجعة وثائقك قبل تقديمها لمصالح الرباط.",                                             category:"تصحيح",     date:"2025-03-01", readTime:"4 دقائق" },
    { id:"ar-11", slug:"katib-khedmat-rabat",              title:"خدمات الكاتب العمومي في أحياء الرباط",             excerpt:"خدمات مخفية يقدمها الكاتب العمومي يجهلها كثير من سكان الرباط.",                                    category:"عام",       date:"2025-03-05", readTime:"5 دقائق" },
    { id:"ar-12", slug:"istimarat-rabat",                  title:"كيف تملأ الاستمارات الرسمية بشكل صحيح في الالرباط",         excerpt:"أخطاء شائعة في تعبئة الاستمارات الإدارية بالرباط وكيف تتجنبها.",                                   category:"استمارات",  date:"2025-03-10", readTime:"6 دقائق" },
    { id:"ar-13", slug:"hoquq-moustahlik-rabat",           title:"حقوق المستهلك في الرباط وكيف تطالب بها",           excerpt:"دليل شامل لحقوق المستهلك في الرباط وطرق تقديم الشكاوى.",                                          category:"شكايات",    date:"2025-03-15", readTime:"7 دقائق" },
    { id:"ar-14", slug:"tarjama-rasmi-rabat",              title:"ترجمة الوثائق الرسمية في الرباط: متى وكيف؟",       excerpt:"متى تحتاج ترجمة وثائقك الرسمية في الرباط وما هي الجهات التي تطلبها.",                               category:"ترجمة",     date:"2025-03-20", readTime:"5 دقائق" },
    { id:"ar-15", slug:"uqood-tijariya-rabat",             title:"العقود التجارية في الرباط: حماية أعمالك",           excerpt:"أهمية العقود التجارية المحكمة لحماية أعمالك في سوق الرباط.",                                       category:"عقود",      date:"2025-03-25", readTime:"6 دقائق" },
    { id:"ar-16", slug:"katib-qarbi-rabat",                title:"ابحث عن كاتب عمومي قريب منك في الرباط",            excerpt:"كيف تجد كاتباً عمومياً موثوقاً في حيك بالرباط وما الذي تبحث عنه.",                                 category:"عام",       date:"2025-04-01", readTime:"4 دقائق" },
    { id:"ar-17", slug:"kataba-idariya-rabat",             title:"خدمات الكتابة الإدارية في الرباط",                  excerpt:"مقارنة بين خيارات الحصول على خدمات الكتابة الإدارية في الرباط.",                                    category:"عام",       date:"2025-04-05", readTime:"5 دقائق" },
    { id:"ar-18", slug:"wasaiq-idariya-rabat",             title:"الوثائق اللازمة للإجراءات الإدارية في الرباط",     excerpt:"قائمة شاملة بالوثائق المطلوبة للإجراءات الإدارية الشائعة في الرباط.",                              category:"إداري",     date:"2025-04-10", readTime:"6 دقائق" },
    { id:"ar-19", slug:"shakawa-amal-rabat",               title:"شكاوى العمل في الرباط: كيف تطالب بحقوقك",          excerpt:"دليل عملي لتقديم شكاوى العمل والمطالبة بالحقوق العمالية في الرباط.",                               category:"شكايات",    date:"2025-04-15", readTime:"7 دقائق" },
    { id:"ar-20", slug:"cv-digital-rabat",                 title:"السيرة الذاتية الرقمية لسوق الشغل في الالرباط",             excerpt:"كيف تحول سيرتك الذاتية إلى نسخة رقمية جذابة لشركات الرباط.",                                      category:"سيرة ذاتية", date:"2025-04-20", readTime:"6 دقائق" },
    { id:"ar-21", slug:"roukhsa-tijariya-rabat",           title:"إجراءات الحصول على الرخصة التجارية في الرباط",    excerpt:"خطوات استخراج الرخصة التجارية في الرباط والوثائق المطلوبة.",                                       category:"إداري",     date:"2025-04-25", readTime:"6 دقائق" },
    { id:"ar-22", slug:"istimarat-bank-rabat",             title:"مساعدة في تعبئة الاستمارات البنكية بالالرباط",              excerpt:"كيف يساعدك الكاتب العمومي في تعبئة الاستمارات البنكية ببنوك الرباط.",                              category:"استمارات",  date:"2025-05-01", readTime:"4 دقائق" },
    { id:"ar-23", slug:"tarjama-fr-ar-rabat",              title:"ترجمة من الفرنسية إلى العربية في الرباط",           excerpt:"خدمة ترجمة احترافية من الفرنسية إلى العربية للوثائق الإدارية بالرباط.",                             category:"ترجمة",     date:"2025-05-05", readTime:"5 دقائق" },
    { id:"ar-24", slug:"uqood-bay-rabat",                  title:"عقود البيع والشراء في الرباط",                      excerpt:"ما يجب أن تعرفه عن عقود البيع والشراء في سوق الرباط.",                                             category:"عقود",      date:"2025-05-10", readTime:"6 دقائق" },
    { id:"ar-25", slug:"taqarir-mihniya-rabat",            title:"كتابة التقارير المهنية لشركات الرباط",              excerpt:"أسلوب كتابة التقارير المهنية بشكل منظم يعكس احترافية شركتك.",                                             category:"كتابة",     date:"2025-05-15", readTime:"5 دقائق" },
    { id:"ar-26", slug:"shakawa-idari-rabat",              title:"كيف تتعامل مع الشكاوى الإدارية في الرباط",         excerpt:"خطوات تقديم شكوى ضد جهة إدارية في الرباط وكيفية متابعتها.",                                        category:"شكايات",    date:"2025-05-20", readTime:"7 دقائق" },
    { id:"ar-27", slug:"katib-omomi-tarikh-rabat",         title:"تاريخ الكتابة العمومية في المدن المغربية الكبرى",          excerpt:"نشأة وتطور مهنة الكاتب العمومي في المدن المغربية الكبرى كالرباط.",                                  category:"ثقافة",     date:"2025-05-25", readTime:"4 دقائق" },
    { id:"ar-28", slug:"wasiat-rabat",                     title:"كيف تكتب وصية قانونية معتمدة في الرباط",           excerpt:"إجراءات وشروط كتابة الوصية القانونية المعتمدة بالرباط.",                                          category:"قانوني",    date:"2025-06-01", readTime:"6 دقائق" },
    { id:"ar-29", slug:"masharia-rabat",                   title:"كيف تكتب خطة عمل لمشروعك في الرباط",              excerpt:"مكونات خطة العمل الناجحة لمشاريع الرباط وكيف تجذب المستثمرين.",                                    category:"كتابة",     date:"2025-06-05", readTime:"7 دقائق" },
    { id:"ar-30", slug:"risala-tadiya-rabat",              title:"فن كتابة رسالة اعتذار رسمية في الالرباط",                   excerpt:"كيف تكتب رسالة اعتذار رسمية للجهات الحكومية أو أصحاب العمل بالرباط.",                            category:"رسائل",     date:"2025-06-10", readTime:"5 دقائق" },
    { id:"ar-31", slug:"talaba-jamia-rabat",               title:"نصائح للطلاب في طلبات الجامعات بالرباط",           excerpt:"كيف تكتب طلب قبول جامعي أو منحة دراسية يتميز في جامعات الرباط.",                                  category:"تعليم",     date:"2025-06-15", readTime:"6 دقائق" },
    { id:"ar-32", slug:"iqama-rabat",                      title:"أوراق الإقامة في الرباط: كيف تحضر ملفك",          excerpt:"الوثائق المطلوبة لتجديد بطاقة الإقامة في الرباط.",                                                category:"إداري",     date:"2025-06-20", readTime:"5 دقائق" },
    { id:"ar-33", slug:"tarjama-es-ar-rabat",              title:"ترجمة من الإسبانية إلى العربية في الرباط",          excerpt:"خدمة ترجمة احترافية من الإسبانية إلى العربية وبالعكس للوثائق الرسمية.",                                   category:"ترجمة",     date:"2025-07-01", readTime:"4 دقائق" },
    { id:"ar-34", slug:"uqood-wakala-rabat",               title:"عقود الوكالة والامتياز في الرباط",                 excerpt:"كل ما تحتاج معرفته عن عقود الوكالة التجارية في الرباط.",                                          category:"عقود",      date:"2025-07-05", readTime:"6 دقائق" },
    { id:"ar-35", slug:"ihtijaj-rabat",                    title:"كيف تكتب خطاباً احتجاجياً فعّالاً في الالرباط",            excerpt:"فن كتابة خطابات الاحتجاج والمطالبة التي تصل للجهات المعنية بالرباط.",                             category:"شكايات",    date:"2025-07-10", readTime:"5 دقائق" },
    { id:"ar-36", slug:"sira-raqmiya-rabat",               title:"السيرة الذاتية الرقمية في سوق شغل الرباط",         excerpt:"كيف تحول سيرتك الذاتية لنسخة رقمية مميزة في منصات التوظيف بالالرباط.",                                     category:"سيرة ذاتية", date:"2025-07-15", readTime:"6 دقائق" },
    { id:"ar-37", slug:"munja-rabat",                      title:"كيف تكتب طلب منحة دراسية ناجح في الرباط",         excerpt:"عناصر طلب المنحة الدراسية الناجح لمؤسسات الرباط والبعثات الخارجية.",                               category:"تعليم",     date:"2025-07-20", readTime:"7 دقائق" },
    { id:"ar-38", slug:"tarjama-en-ar-rabat",              title:"ترجمة من الإنجليزية إلى العربية في الرباط",        excerpt:"كيف تؤثر الترجمة الدقيقة على قبول وثائقك الإنجليزية لدى جهات الرباط.",                           category:"ترجمة",     date:"2025-07-25", readTime:"5 دقائق" },
    { id:"ar-39", slug:"akhtaa-istimarat-rabat",           title:"أخطاء شائعة في تعبئة الاستمارات بالرباط",         excerpt:"أبرز الأخطاء عند تعبئة الاستمارات الإدارية في مصالح الرباط.",                                    category:"استمارات",  date:"2025-08-01", readTime:"5 دقائق" },
    { id:"ar-40", slug:"shakwa-bank-rabat",                title:"كيف تكتب شكوى للبنك في الرباط",                   excerpt:"خطوات كتابة شكوى لبنوك الرباط وكيف تضمن الرد السريع.",                                           category:"شكايات",    date:"2025-08-05", readTime:"6 دقائق" },
    { id:"ar-41", slug:"katib-hay-mohammadi",             title:"خدمات الكاتب العمومي في الحي المحمدي",                   excerpt:"استفد من خدمات الكاتب العمومي في أحياء الرباط وخاصة حي الرياض وأكدال والسويسي.",               category:"محلي",      date:"2025-08-10", readTime:"4 دقائق" },
    { id:"ar-42", slug:"uqood-chirakat-rabat",             title:"عقد الشراكة التجارية في الرباط",                  excerpt:"عناصر عقد الشراكة الناجح لمشاريع الرباط وما يجب أن يتضمنه.",                                     category:"عقود",      date:"2025-08-15", readTime:"6 دقائق" },
    { id:"ar-43", slug:"tasrih-rabat",                     title:"كيف تحصل على التصاريح الرسمية في الرباط",         excerpt:"الإجراءات الرسمية للحصول على مختلف التصاريح من مصالح الرباط.",                                   category:"إداري",     date:"2025-08-20", readTime:"5 دقائق" },
    { id:"ar-44", slug:"tawsiya-rabat",                    title:"كيف تطلب رسالة توصية في بيئة عمل الالرباط",               excerpt:"متى تحتاج رسالة توصية وكيف تطلبها من مشغلك في الرباط.",                                         category:"رسائل",     date:"2025-08-25", readTime:"5 دقائق" },
    { id:"ar-45", slug:"wasf-wazifa-rabat",                title:"ترجمة الوصف الوظيفي للعمل في شركات الالرباط الدولية",      excerpt:"كيف تترجم وصفك الوظيفي وشهاداتك للعمل في الشركات الدولية بالرباط.",                            category:"ترجمة",     date:"2025-09-01", readTime:"5 دقائق" },
    { id:"ar-46", slug:"maqalat-tijariya-rabat",           title:"كتابة المقالات التجارية والتسويقية في الالرباط",            excerpt:"فن كتابة المقالات التجارية والتسويقية لشركات الرباط.",                                           category:"كتابة",     date:"2025-09-05", readTime:"5 دقائق" },
    { id:"ar-47", slug:"dhaman-rabat",                     title:"تعبئة استمارات الضمان الاجتماعي في الرباط",       excerpt:"دليل تعبئة استمارات الضمان الاجتماعي والتأمين الصحي بالرباط.",                                  category:"استمارات",  date:"2025-09-10", readTime:"6 دقائق" },
    { id:"ar-48", slug:"amlak-rabat",                      title:"وثائق الملكية العقارية في الرباط",                 excerpt:"الوثائق الضرورية في معاملات الملكية العقارية بالرباط.",                                          category:"عقاري",     date:"2025-09-15", readTime:"6 دقائق" },
    { id:"ar-49", slug:"katib-muqarin-rabat",              title:"الكاتب العمومي أم المحامي في الرباط: ما الفرق؟",  excerpt:"متى تحتاج لكاتب عمومي ومتى تلجأ لمحامٍ في الرباط.",                                           category:"ثقافة",     date:"2025-09-20", readTime:"5 دقائق" },
    { id:"ar-50", slug:"raqmana-idariya-rabat",            title:"مستقبل الكتابة الإدارية الرقمية في الرباط",        excerpt:"كيف تتطور خدمات الكاتب العمومي في ظل الرقمنة الإدارية بالرباط.",                                category:"ثقافة",     date:"2025-09-25", readTime:"5 دقائق" }
  ],
  fr: [
    { id:"fr-1",  slug:"ecrivain-public-rabatblanca",         title:"Écrivain public à Rabatblanca: Tout ce qu'il faut savoir",              excerpt:"Guide complet sur les services d'un écrivain public à Rabatblanca.",                                         category:"Général",      date:"2025-01-15", readTime:"5 min" },
    { id:"fr-2",  slug:"redaction-plainte-rabatblanca",       title:"Comment rédiger une plainte efficace à Rabatblanca",                   excerpt:"Guide étape par étape pour rédiger une plainte juridique réussie à Rabatblanca.",                            category:"Plaintes",     date:"2025-01-22", readTime:"7 min" },
    { id:"fr-3",  slug:"cv-professionnel-rabatblanca",        title:"CV professionnel pour le marché de l'emploi à Rabatblanca",            excerpt:"Conseils pour créer un CV attractif adapté aux employeurs de Rabatblanca.",                                  category:"CV",           date:"2025-01-30", readTime:"6 min" },
    { id:"fr-4",  slug:"traduction-rabatblanca",              title:"Services de traduction professionnelle à Rabatblanca",                 excerpt:"L'importance de la traduction précise des documents officiels à Rabatblanca.",                               category:"Traduction",   date:"2025-02-07", readTime:"5 min" },
    { id:"fr-5",  slug:"lettre-motivation-rabatblanca",       title:"La lettre de motivation parfaite pour les entreprises de Rabat",       excerpt:"Comment rédiger une lettre de motivation pour les employeurs rabatblancais.",                                category:"Emploi",       date:"2025-02-14", readTime:"6 min" },
    { id:"fr-6",  slug:"visa-rabatblanca",                    title:"Préparer votre dossier de visa depuis Rabatblanca",                    excerpt:"Tout pour constituer un dossier de visa solide depuis Rabatblanca.",                                        category:"Visa",         date:"2025-02-21", readTime:"8 min" },
    { id:"fr-7",  slug:"contrats-location-rabatblanca",       title:"Contrats de location à Rabatblanca: Protégez vos droits",             excerpt:"Comment rédiger un contrat de location solide pour le marché immobilier de Rabat.",                        category:"Contrats",     date:"2025-03-01", readTime:"6 min" },
    { id:"fr-8",  slug:"courrier-administratif-rabatblanca",  title:"Rédiger un courrier administratif à Rabatblanca",                     excerpt:"Les règles pour rédiger des courriers administratifs pour les services de Rabat.",                          category:"Administratif",date:"2025-03-08", readTime:"5 min" },
    { id:"fr-9",  slug:"services-ecrivain-rabatblanca",       title:"Les services méconnus de l'écrivain public à Rabatblanca",            excerpt:"Découvrez tous les services d'un écrivain public à Rabatblanca.",                                          category:"Général",      date:"2025-03-15", readTime:"5 min" },
    { id:"fr-10", slug:"traduction-arabe-francais-rabat",     title:"Traduction arabe-français à Rabatblanca: Qualité garantie",           excerpt:"Service de traduction professionnelle arabe-français pour vos documents à Rabatblanca.",                   category:"Traduction",   date:"2025-03-22", readTime:"4 min" },
    { id:"fr-11", slug:"formulaires-rabat",                   title:"Aide au remplissage de formulaires administratifs à Rabatblanca",     excerpt:"Les erreurs courantes dans les formulaires des services de Rabatblanca.",                                 category:"Formulaires",  date:"2025-04-01", readTime:"5 min" },
    { id:"fr-12", slug:"dossier-emploi-rabatblanca",          title:"Constituer un dossier de candidature solide à Rabatblanca",           excerpt:"Comment assembler un dossier de candidature pour les entreprises de Rabatblanca.",                        category:"Emploi",       date:"2025-04-10", readTime:"6 min" },
    { id:"fr-13", slug:"attestations-rabat",                  title:"Les attestations administratives à Rabatblanca: Comment les obtenir", excerpt:"Guide pour obtenir les attestations administratives courantes à Rabatblanca.",                             category:"Administratif",date:"2025-04-18", readTime:"5 min" },
    { id:"fr-14", slug:"correction-documents-rabat",          title:"Correction professionnelle de documents à Rabatblanca",              excerpt:"Pourquoi corriger vos documents avant soumission aux services de Rabatblanca.",                            category:"Correction",   date:"2025-04-25", readTime:"4 min" },
    { id:"fr-15", slug:"recours-administratifs-rabat",        title:"Les recours administratifs à Rabatblanca: Vos droits",               excerpt:"Comment exercer vos droits de recours face aux décisions administratives à Rabatblanca.",                 category:"Plaintes",     date:"2025-05-05", readTime:"7 min" },
    { id:"fr-16", slug:"ecrivain-quartier-rabat",             title:"Trouver un écrivain public dans votre quartier à Rabatblanca",        excerpt:"Comment trouver un écrivain public fiable dans votre quartier à Rabatblanca.",                           category:"Général",      date:"2025-05-12", readTime:"4 min" },
    { id:"fr-17", slug:"immobilier-rabatblanca",              title:"Documents immobiliers à Rabatblanca: Ce qu'il faut préparer",         excerpt:"Les documents nécessaires pour les transactions immobilières à Rabatblanca.",                            category:"Immobilier",   date:"2025-05-20", readTime:"6 min" },
    { id:"fr-18", slug:"traduction-espagnol-arabe-rabat",     title:"Traduction espagnol-arabe à Rabatblanca",                            excerpt:"Service de traduction professionnelle entre l'espagnol et l'arabe à Rabatblanca.",                      category:"Traduction",   date:"2025-05-28", readTime:"5 min" },
    { id:"fr-19", slug:"contrats-commerciaux-rabatblanca",    title:"Rédaction de contrats commerciaux à Rabatblanca",                    excerpt:"Les éléments essentiels d'un contrat commercial solide à Rabatblanca.",                                 category:"Contrats",     date:"2025-06-05", readTime:"6 min" },
    { id:"fr-20", slug:"numerique-ecrivain-rabatblanca",      title:"L'écrivain public à l'ère du numérique à Rabatblanca",               excerpt:"Comment les services d'écriture publique évoluent à Rabatblanca.",                                      category:"Général",      date:"2025-06-12", readTime:"5 min" }
  ],
  en: [
    { id:"en-1",  slug:"public-writer-rabatblanca-guide",     title:"Public Writer in Rabatblanca: Complete Guide",                        excerpt:"Everything you need to know about public writing services in Rabatblanca.",                                 category:"General",    date:"2025-01-15", readTime:"5 min" },
    { id:"en-2",  slug:"complaint-writing-rabatblanca",       title:"How to Write an Effective Complaint in Rabatblanca",                  excerpt:"Step-by-step guide to writing a successful complaint in Rabatblanca.",                                    category:"Complaints", date:"2025-01-22", readTime:"7 min" },
    { id:"en-3",  slug:"professional-cv-rabatblanca",         title:"Write a Professional CV for Rabatblanca's Job Market",               excerpt:"Tips for creating an attractive CV for Rabatblanca employers.",                                          category:"CV",         date:"2025-01-30", readTime:"6 min" },
    { id:"en-4",  slug:"document-translation-rabatblanca",    title:"Professional Document Translation Services in Rabatblanca",          excerpt:"The importance of accurate official document translation in Rabatblanca.",                              category:"Translation",date:"2025-02-07", readTime:"5 min" },
    { id:"en-5",  slug:"visa-application-rabatblanca",        title:"Visa Application Guide from Rabatblanca",                            excerpt:"Everything you need to successfully apply for a visa from Rabatblanca.",                               category:"Visa",       date:"2025-02-14", readTime:"8 min" },
    { id:"en-6",  slug:"cover-letter-rabatblanca",            title:"Write a Cover Letter for Rabatblanca Companies",                     excerpt:"How to write a compelling cover letter tailored to Rabatblanca employers.",                             category:"Jobs",       date:"2025-02-21", readTime:"6 min" },
    { id:"en-7",  slug:"rental-contracts-rabatblanca",        title:"Rental Contracts in Rabatblanca: Protect Your Rights",               excerpt:"How to draft a solid rental contract for Rabatblanca's property market.",                              category:"Contracts",  date:"2025-03-01", readTime:"6 min" },
    { id:"en-8",  slug:"administrative-letters-rabatblanca",  title:"Writing Administrative Letters in Rabatblanca",                      excerpt:"Essential rules for writing effective administrative correspondence in Rabatblanca.",                   category:"Admin",      date:"2025-03-08", readTime:"5 min" },
    { id:"en-9",  slug:"public-writer-services-rabatblanca",  title:"Hidden Services of a Public Writer in Rabatblanca",                  excerpt:"Discover all the services a public writer can offer in Rabatblanca.",                                 category:"General",    date:"2025-03-15", readTime:"5 min" },
    { id:"en-10", slug:"arabic-french-translation-rabat",     title:"Arabic-French Translation in Rabatblanca",                          excerpt:"Professional Arabic-French translation service for your Rabatblanca documents.",                      category:"Translation",date:"2025-03-22", readTime:"4 min" },
    { id:"en-11", slug:"form-filling-rabatblanca",            title:"Help Filling Official Forms in Rabatblanca",                         excerpt:"Common mistakes when filling administrative forms in Rabatblanca and how to avoid them.",             category:"Forms",      date:"2025-04-01", readTime:"5 min" },
    { id:"en-12", slug:"job-application-rabatblanca",         title:"Build a Strong Job Application for Rabatblanca Companies",           excerpt:"How to assemble a complete job application for Rabatblanca's market.",                                category:"Jobs",       date:"2025-04-10", readTime:"6 min" },
    { id:"en-13", slug:"certificates-rabatblanca",            title:"Administrative Certificates in Rabatblanca: How to Get Them",        excerpt:"Practical guide to obtaining common administrative certificates in Rabatblanca.",                     category:"Admin",      date:"2025-04-18", readTime:"5 min" },
    { id:"en-14", slug:"proofreading-rabatblanca",            title:"Professional Document Proofreading in Rabatblanca",                  excerpt:"Why proofreading your documents before submission to Rabatblanca offices matters.",                  category:"Proofreading",date:"2025-04-25", readTime:"4 min" },
    { id:"en-15", slug:"administrative-appeals-rabatblanca",  title:"Administrative Appeals in Rabatblanca: Your Rights",                excerpt:"How to exercise your right of appeal against administrative decisions in Rabatblanca.",              category:"Complaints", date:"2025-05-05", readTime:"7 min" },
    { id:"en-16", slug:"find-public-writer-rabatblanca",      title:"How to Find a Trusted Public Writer in Rabatblanca",                 excerpt:"Tips for finding a reliable public writer in your Rabatblanca neighborhood.",                        category:"General",    date:"2025-05-12", readTime:"4 min" },
    { id:"en-17", slug:"real-estate-documents-rabatblanca",   title:"Real Estate Documents in Rabatblanca: What to Prepare",             excerpt:"The documents needed for real estate transactions in Rabatblanca.",                                  category:"Real Estate",date:"2025-05-20", readTime:"6 min" },
    { id:"en-18", slug:"spanish-arabic-translation-rabat",    title:"Spanish-Arabic Translation in Rabatblanca",                         excerpt:"Professional translation service between Spanish and Arabic in Rabatblanca.",                       category:"Translation",date:"2025-05-28", readTime:"5 min" },
    { id:"en-19", slug:"commercial-contracts-rabatblanca",    title:"Drafting Professional Commercial Contracts in Rabatblanca",          excerpt:"Essential elements of a solid commercial contract for Rabatblanca businesses.",                      category:"Contracts",  date:"2025-06-05", readTime:"6 min" },
    { id:"en-20", slug:"public-writer-digital-rabatblanca",   title:"The Future of Public Writing in Rabatblanca's Digital Era",          excerpt:"How public writing services are evolving in Rabatblanca's digital transformation.",                 category:"General",    date:"2025-06-12", readTime:"5 min" }
  ],
  es: [
    { id:"es-1",  slug:"escritor-publico-rabatblanca-guia",   title:"Escritor Público en Rabatblanca: Guía Completa",                     excerpt:"Todo lo que necesitas saber sobre los servicios de escritura pública en Rabatblanca.",              category:"General",    date:"2025-01-15", readTime:"5 min" },
    { id:"es-2",  slug:"redaccion-queja-rabatblanca",         title:"Cómo Redactar una Queja Efectiva en Rabatblanca",                    excerpt:"Guía paso a paso para redactar una queja jurídica exitosa en Rabatblanca.",                        category:"Quejas",     date:"2025-01-22", readTime:"7 min" },
    { id:"es-3",  slug:"cv-profesional-rabatblanca",          title:"CV Profesional para el Mercado Laboral de Rabatblanca",              excerpt:"Consejos para crear un CV atractivo adaptado a los empleadores de Rabatblanca.",                  category:"CV",         date:"2025-01-30", readTime:"6 min" },
    { id:"es-4",  slug:"traduccion-rabatblanca",              title:"Servicios de Traducción Profesional en Rabatblanca",                 excerpt:"La importancia de la traducción precisa de documentos en Rabatblanca.",                           category:"Traducción", date:"2025-02-07", readTime:"5 min" },
    { id:"es-5",  slug:"visado-rabatblanca",                  title:"Solicitud de Visado desde Rabatblanca: Guía Completa",              excerpt:"Todo lo necesario para solicitar un visado con éxito desde Rabatblanca.",                        category:"Visado",     date:"2025-02-14", readTime:"8 min" },
    { id:"es-6",  slug:"carta-motivacion-rabatblanca",        title:"Carta de Motivación para Empresas de Rabatblanca",                  excerpt:"Cómo redactar una carta de motivación para empleadores de Rabatblanca.",                         category:"Empleo",     date:"2025-02-21", readTime:"6 min" },
    { id:"es-7",  slug:"contratos-alquiler-rabatblanca",      title:"Contratos de Alquiler en Rabatblanca: Protege tus Derechos",        excerpt:"Cómo redactar un contrato de alquiler sólido para el mercado inmobiliario de Rabatblanca.",     category:"Contratos",  date:"2025-03-01", readTime:"6 min" },
    { id:"es-8",  slug:"cartas-administrativas-rabatblanca",  title:"Redacción de Cartas Administrativas en Rabatblanca",               excerpt:"Reglas esenciales para escribir correspondencia administrativa en Rabatblanca.",                  category:"Admin",      date:"2025-03-08", readTime:"5 min" },
    { id:"es-9",  slug:"servicios-escritor-rabatblanca",      title:"Servicios del Escritor Público en Rabatblanca",                    excerpt:"Descubre todos los servicios que puede ofrecerte un escritor público en Rabatblanca.",          category:"General",    date:"2025-03-15", readTime:"5 min" },
    { id:"es-10", slug:"traduccion-arabe-espanol-rabat",      title:"Traducción Árabe-Español en Rabatblanca",                          excerpt:"Servicio de traducción árabe-español para tus documentos en Rabatblanca.",                      category:"Traducción", date:"2025-03-22", readTime:"4 min" },
    { id:"es-11", slug:"formularios-rabatblanca",             title:"Ayuda para Rellenar Formularios en Rabatblanca",                   excerpt:"Errores comunes al rellenar formularios administrativos en Rabatblanca.",                      category:"Formularios",date:"2025-04-01", readTime:"5 min" },
    { id:"es-12", slug:"solicitud-empleo-rabatblanca",        title:"Solicitud de Empleo Sólida para Empresas de Rabatblanca",          excerpt:"Cómo montar un expediente de candidatura para empresas de Rabatblanca.",                      category:"Empleo",     date:"2025-04-10", readTime:"6 min" },
    { id:"es-13", slug:"certificados-rabatblanca",            title:"Certificados Administrativos en Rabatblanca: Cómo Obtenerlos",    excerpt:"Guía práctica para obtener los certificados administrativos en Rabatblanca.",                  category:"Admin",      date:"2025-04-18", readTime:"5 min" },
    { id:"es-14", slug:"correccion-documentos-rabatblanca",   title:"Corrección de Documentos en Rabatblanca",                         excerpt:"Por qué corregir tus documentos antes de presentarlos en Rabatblanca.",                       category:"Corrección", date:"2025-04-25", readTime:"4 min" },
    { id:"es-15", slug:"recursos-administrativos-rabatblanca",title:"Recursos Administrativos en Rabatblanca: Tus Derechos",           excerpt:"Cómo ejercer tu derecho de recurso ante decisiones administrativas en Rabatblanca.",         category:"Quejas",     date:"2025-05-05", readTime:"7 min" },
    { id:"es-16", slug:"escritor-publico-barrio-rabatblanca", title:"Encontrar un Escritor Público en tu Barrio de Rabatblanca",       excerpt:"Consejos para encontrar un escritor público fiable en tu barrio de Rabatblanca.",           category:"General",    date:"2025-05-12", readTime:"4 min" },
    { id:"es-17", slug:"inmobiliario-rabatblanca",            title:"Documentos Inmobiliarios en Rabatblanca",                         excerpt:"Los documentos necesarios para transacciones inmobiliarias en Rabatblanca.",                category:"Inmobiliario",date:"2025-05-20", readTime:"6 min" },
    { id:"es-18", slug:"traduccion-espanol-arabe-rabatblanca",title:"Traducción Español-Árabe en Rabatblanca",                        excerpt:"Servicio de traducción entre español y árabe en Rabatblanca.",                              category:"Traducción", date:"2025-05-28", readTime:"5 min" },
    { id:"es-19", slug:"contratos-comerciales-rabatblanca",   title:"Redacción de Contratos Comerciales en Rabatblanca",              excerpt:"Elementos esenciales de un contrato comercial sólido para empresas de Rabatblanca.",      category:"Contratos",  date:"2025-06-05", readTime:"6 min" },
    { id:"es-20", slug:"escritor-digital-rabatblanca",        title:"El Escritor Público en la Era Digital de Rabatblanca",           excerpt:"Cómo evolucionan los servicios de escritura pública en Rabatblanca.",                    category:"General",    date:"2025-06-12", readTime:"5 min" }
  ]
};
