type TranslationKey = string
type LanguageCode = "en" | "ru" | "ar"

const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.team": "Meet our team",
    "nav.contact": "Contact us",
    "nav.pricing": "Pricing",
    "nav.about": "About Us",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",

    // Hero Section
    "hero.title": "Your Partner for Seamless UAE Business Solutions",
    "hero.description":
      "How would you like if you could set up the very first branch at the hottest spot in downtown with our business registration services? Imagine starting your dream business next to the tallest building in the world, and the center of the financial hub.",
    "hero.cta.contact": "Contact us",
    "hero.cta.prices": "Prices",

    // Buttons
    "button.contact": "Contact us",
    "button.prices": "Prices",

    // Services Section
    "services.title": "Our Services",
    "services.description": "We provide comprehensive business setup solutions tailored to your needs",
    "services.business-formation": "Business Formation",
    "services.business-formation.description":
      "Complete company registration services with all necessary documentation and approvals",
    "services.visa-processing": "Visa Processing",
    "services.visa-processing.description":
      "Complete visa processing and immigration services for business owners and employees",
    "services.bank-account": "Bank Account",
    "services.bank-account.description":
      "Assistance with corporate banking setup and financial services for your business",
    "services.marketing": "Marketing",
    "services.marketing.description":
      "Strategic marketing services to help your business grow and reach your target audience",
    "services.health-insurance": "Health Insurance",
    "services.health-insurance.description": "Comprehensive health insurance solutions for you and your employees",
    "services.trademark": "Trademark Registration",
    "services.trademark.description":
      "Protect your brand with our trademark registration and intellectual property services",

    // Add translations for the services dropdown
    "services.dropdown.all": "View All Services",
    "services.dropdown.business-formation": "Business Formation",
    "services.dropdown.trade-licensing": "Trade Licensing",
    "services.dropdown.visa-processing": "Visa Processing",
    "services.dropdown.office-solutions": "Office Solutions",
    "services.dropdown.banking-support": "Banking Support",
    "services.dropdown.business-consulting": "Business Consulting",

    // Pricing Section
    "pricing.title": "Pricing Plans",
    "pricing.description": "Choose the perfect package for your business needs",
    "pricing.starter.title": "Starter Package",
    "pricing.starter.description": "Perfect for small businesses and startups",
    "pricing.professional.title": "Professional Package",
    "pricing.professional.description": "Ideal for growing businesses",
    "pricing.premium.title": "Premium Package",
    "pricing.premium.description": "Complete solution for established businesses",
    "pricing.cta": "Get Started",
    "pricing.most-popular": "Most Popular",

    // Contact Section
    "contact.title": "Contact Us",
    "contact.description": "Ready to start your business journey? Get in touch with our expert team today.",
    "contact.form.name": "Full Name",
    "contact.form.email": "Email",
    "contact.form.service": "Service Interested In",
    "contact.form.message": "Message",
    "contact.form.submit": "Submit",
    "contact.form.required": "Required field",
    "contact.form.email.invalid": "Please enter a valid email address",
    "contact.form.success": "Thank you! Your message has been sent successfully.",

    // Footer
    "footer.rights": "© 2025 Riverflow Solutions FZ-LLC. All rights reserved.",
    "footer.designed": "Designed and developed with ♥",
    "footer.company": "Company",
    "footer.about_us": "About Us",
    "footer.our_team": "Our Team",
    "footer.blog": "Blog",
    "footer.contact": "Contact",
    "footer.services": "Services",
    "footer.business_setup": "Business Setup",
    "footer.visa_processing": "Visa Processing",
    "footer.bank_account": "Bank Account",
    "footer.trademark_registration": "Trademark Registration",
    "footer.resources": "Resources",
    "footer.faq": "FAQ",
    "footer.pricing": "Pricing",
    "footer.guides": "Guides",
    "footer.support": "Support",
    "footer.legal": "Legal",
    "footer.terms_of_service": "Terms of Service",
    "footer.privacy_policy": "Privacy Policy",
    "footer.cookie_policy": "Cookie Policy",
    "footer.disclaimer": "Disclaimer",
    "footer.description": "Your trusted partner for business setup and company formation services in the UAE.",

    // Service Pages
    "service.business-formation.title": "Business Formation",
    "service.business-formation.description":
      "Complete company registration services with all necessary documentation and approvals",
    "service.business-formation.content":
      "Our Business Formation service provides end-to-end support for establishing your company in the UAE. We handle all legal requirements, documentation, and approvals to ensure a smooth and hassle-free setup process.",

    "service.trade-licensing.title": "Trade Licensing",
    "service.trade-licensing.description":
      "Obtain all required trade licenses and permits for your business operations",
    "service.trade-licensing.content":
      "Our Trade Licensing service ensures that your business has all the necessary licenses and permits to operate legally in the UAE. We handle the entire application process, from documentation to approval.",

    "service.visa-processing.title": "Visa Services",
    "service.visa-processing.description":
      "Complete visa processing and immigration services for business owners and employees",
    "service.visa-processing.content":
      "Our Visa Processing service provides comprehensive support for obtaining residence visas for business owners, investors, and employees. We handle all aspects of the visa application process, from documentation to medical tests and biometrics.",

    "service.office-solutions.title": "Office Solutions",
    "service.office-solutions.description":
      "Flexible office spaces, virtual offices, and premium business address services",
    "service.office-solutions.content":
      "Our Office Solutions service provides a range of options to meet your business needs, from virtual offices to premium physical spaces in prime locations. We offer flexible terms and comprehensive support services.",

    "service.banking-support.title": "Banking Support",
    "service.banking-support.description": "Assistance with corporate banking setup and financial services",
    "service.banking-support.content":
      "Our Banking Support service helps you navigate the UAE banking system, from opening corporate accounts to establishing merchant services and online banking. We have strong relationships with major banks to facilitate smooth account setup.",

    "service.business-consulting.title": "Business Consulting",
    "service.business-consulting.description": "Expert guidance and strategic consulting for business growth",
    "service.business-consulting.content":
      "Our Business Consulting service provides expert guidance on market entry, business strategy, and growth opportunities in the UAE. Our consultants have deep knowledge of local markets and regulations.",

    // Pricing Plan Pages
    "pricing.starter.features": "Features included in the Starter Package",
    "pricing.starter.content":
      "The Starter Package is designed for small businesses and startups looking to establish their presence in the UAE with minimal investment. This package includes essential services to get your business up and running quickly.",

    "pricing.professional.features": "Features included in the Professional Package",
    "pricing.professional.content":
      "The Professional Package is ideal for growing businesses that require a more comprehensive setup. This package includes all the essential services plus additional features to support your business growth.",

    "pricing.premium.features": "Features included in the Premium Package",
    "pricing.premium.content":
      "The Premium Package offers a complete solution for established businesses looking for a premium setup in the UAE. This all-inclusive package provides the highest level of service and support.",

    "pricing.premium.visa_processing_tooltip": "Includes processing for up to 3 visas",

    // Guides page
    "guides.title": "Business Setup Guides",
    "guides.description": "Comprehensive guides to help you navigate the business setup process",

    // Support page
    "support.title": "Customer Support",
    "support.description": "We're here to help you with any questions or issues you may have",

    // Legal pages
    "terms.title": "Terms of Service",
    "terms.description": "Last updated: April 12, 2025",
    "privacy.title": "Privacy Policy",
    "privacy.description": "Last updated: April 12, 2025",
    "cookies.title": "Cookie Policy",
    "cookies.description": "Last updated: April 12, 2025",
    "disclaimer.title": "Disclaimer",
    "disclaimer.description": "Last updated: April 12, 2025",
  },

  ru: {
    // Navigation
    "nav.home": "Главная",
    "nav.services": "Услуги",
    "nav.team": "Наша команда",
    "nav.contact": "Связаться с нами",
    "nav.pricing": "Цены",
    "nav.about": "О нас",
    "nav.blog": "Блог",
    "nav.faq": "Вопросы и ответы",

    // Hero Section
    "hero.title": "Ваш партнер для беспроблемных бизнес-решений в ОАЭ",
    "hero.description":
      "Как бы вам понравилось, если бы вы могли открыть первый филиал в самом горячем месте в центре города с помощью наших услуг по регистрации бизнеса? Представьте, что вы начинаете свой бизнес мечты рядом с самым высоким зданием в мире и в центре финансового центра.",
    "hero.cta.contact": "Связаться с нами",
    "hero.cta.prices": "Цены",

    // Buttons
    "button.contact": "Связаться с нами",
    "button.prices": "Цены",

    // Services Section
    "services.title": "Наши услуги",
    "services.description":
      "Мы предоставляем комплексные решения для создания бизнеса, адаптированные к вашим потребностям",
    "services.business-formation": "Создание бизнеса",
    "services.business-formation.description":
      "Полные услуги по регистрации компании со всей необходимой документацией и разрешениями",
    "services.visa-processing": "Обработка виз",
    "services.visa-processing.description":
      "Полная обработка виз и иммиграционные услуги для владельцев бизнеса и сотрудников",
    "services.bank-account": "Банковский счет",
    "services.bank-account.description":
      "Помощь в настройке корпоративного банкинга и финансовых услуг для вашего бизнеса",
    "services.marketing": "Маркетинг",
    "services.marketing.description":
      "Стратегические маркетинговые услуги, которые помогут вашему бизнесу расти и достигать целевой аудитории",
    "services.health-insurance": "Медицинское страхование",
    "services.health-insurance.description":
      "Комплексные решения по медицинскому страхованию для вас и ваших сотрудников",
    "services.trademark": "Регистрация товарного знака",
    "services.trademark.description":
      "Защитите свой бренд с помощью наших услуг по регистрации товарных знаков и интеллектуальной собственности",

    // Add translations for the services dropdown
    "services.dropdown.all": "Просмотреть все услуги",
    "services.dropdown.business-formation": "Создание бизнеса",
    "services.dropdown.trade-licensing": "Торговое лицензирование",
    "services.dropdown.visa-processing": "Обработка виз",
    "services.dropdown.office-solutions": "Офисные решения",
    "services.dropdown.banking-support": "Банковская поддержка",
    "services.dropdown.business-consulting": "Бизнес-консультирование",

    // Pricing Section
    "pricing.title": "Тарифные планы",
    "pricing.description": "Выберите идеальный пакет для ваших бизнес-потребностей",
    "pricing.starter.title": "Стартовый пакет",
    "pricing.starter.description": "Идеально для малого бизнеса и стартапов",
    "pricing.professional.title": "Профессиональный пакет",
    "pricing.professional.description": "Идеально для растущего бизнеса",
    "pricing.premium.title": "Премиум пакет",
    "pricing.premium.description": "Полное решение для устоявшегося бизнеса",
    "pricing.cta": "Начать",
    "pricing.most-popular": "Самый популярный",

    // Contact Section
    "contact.title": "Связаться с нами",
    "contact.description": "Готовы начать свой бизнес-путь? Свяжитесь с нашей командой экспертов сегодня.",
    "contact.form.name": "Полное имя",
    "contact.form.email": "Электронная почта",
    "contact.form.service": "Интересующая услуга",
    "contact.form.message": "Сообщение",
    "contact.form.submit": "Отправить",
    "contact.form.required": "Обязательное поле",
    "contact.form.email.invalid": "Пожалуйста, введите действительный адрес электронной почты",
    "contact.form.success": "Спасибо! Ваше сообщение успешно отправлено.",

    // Footer
    "footer.rights": "© 2025 Riverflow Solutions FZ-LLC. Все права защищены.",
    "footer.designed": "Разработано и создано с ♥",
    "footer.company": "Компания",
    "footer.about_us": "О нас",
    "footer.our_team": "Наша команда",
    "footer.blog": "Блог",
    "footer.contact": "Контакты",
    "footer.services": "Услуги",
    "footer.business_setup": "Создание бизнеса",
    "footer.visa_processing": "Обработка виз",
    "footer.bank_account": "Банковский счет",
    "footer.trademark_registration": "Регистрация товарного знака",
    "footer.resources": "Ресурсы",
    "footer.faq": "Вопросы и ответы",
    "footer.pricing": "Цены",
    "footer.guides": "Руководства",
    "footer.support": "Поддержка",
    "footer.legal": "Юридическая информация",
    "footer.terms_of_service": "Условия использования",
    "footer.privacy_policy": "Политика конфиденциальности",
    "footer.cookie_policy": "Политика использования файлов cookie",
    "footer.disclaimer": "Отказ от ответственности",
    "footer.description": "Ваш надежный партнер по созданию бизнеса и регистрации компаний в ОАЭ.",

    // Service Pages
    "service.business-formation.title": "Создание бизнеса",
    "service.business-formation.description":
      "Полные услуги по регистрации компании со всей необходимой документацией и разрешениями",
    "service.business-formation.content":
      "Наша услуга по созданию бизнеса обеспечивает полную поддержку для создания вашей компании в ОАЭ. Мы обрабатываем все юридические требования, документацию и разрешения, чтобы обеспечить гладкий и беспроблемный процесс настройки.",

    "service.trade-licensing.title": "Торговое лицензирование",
    "service.trade-licensing.description":
      "Получите все необходимые торговые лицензии и разрешения для вашей бизнес-деятельности",
    "service.trade-licensing.content":
      "Наша услуга торгового лицензирования гарантирует, что у вашего бизнеса есть все необходимые лицензии и разрешения для законной работы в ОАЭ. Мы обрабатываем весь процесс подачи заявки, от документации до утверждения.",

    "service.visa-processing.title": "Обработка виз",
    "service.visa-processing.description":
      "Полная обработка виз и иммиграционные услуги для владельцев бизнеса и сотрудников",
    "service.visa-processing.content":
      "Наша услуга обработки виз обеспечивает комплексную поддержку для получения виз на проживание для владельцев бизнеса, инвесторов и сотрудников. Мы обрабатываем все аспекты процесса подачи заявки на визу, от документации до медицинских тестов и биометрии.",

    "service.office-solutions.title": "Офисные решения",
    "service.office-solutions.description":
      "Гибкие офисные пространства, виртуальные офисы и услуги премиум-бизнес-адреса",
    "service.office-solutions.content":
      "Наша услуга офисных решений предоставляет ряд вариантов для удовлетворения ваших бизнес-потребностей, от виртуальных офисов до премиальных физических пространств в лучших местах. Мы предлагаем гибкие условия и комплексные услуги поддержки.",

    "service.banking-support.title": "Банковская поддержка",
    "service.banking-support.description": "Помощь в настройке корпоративного банкинга и финансовых услуг",
    "service.banking-support.content":
      "Наша услуга банковской поддержки помогает вам ориентироваться в банковской системе ОАЭ, от открытия корпоративных счетов до создания торговых услуг и онлайн-банкинга. У нас есть прочные отношения с крупными банками для облегчения настройки счета.",

    "service.business-consulting.title": "Бизнес-консультирование",
    "service.business-consulting.description":
      "Экспертное руководство и стратегическое консультирование для роста бизнеса",
    "service.business-consulting.content":
      "Наша услуга бизнес-консультирования предоставляет экспертное руководство по выходу на рынок, бизнес-стратегии и возможностям роста в ОАЭ. Наши консультанты имеют глубокие знания местных рынков и правил.",

    // Pricing Plan Pages
    "pricing.starter.features": "Функции, включенные в Стартовый пакет",
    "pricing.starter.content":
      "Стартовый пакет предназначен для малого бизнеса и стартапов, которые хотят установить свое присутствие в ОАЭ с минимальными инвестициями. Этот пакет включает основные услуги, чтобы быстро запустить ваш бизнес.",

    "pricing.professional.features": "Функции, включенные в Профессиональный пакет",
    "pricing.professional.content":
      "Профессиональный пакет идеально подходит для растущего бизнеса, которому требуется более комплексная настройка. Этот пакет включает все основные услуги плюс дополнительные функции для поддержки роста вашего бизнеса.",

    "pricing.premium.features": "Функции, включенные в Премиум пакет",
    "pricing.premium.content":
      "Премиум пакет предлагает полное решение для устоявшегося бизнеса, ищущего премиальную настройку в ОАЭ. Этот всеобъемлющий пакет обеспечивает высочайший уровень обслуживания и поддержки.",

    "pricing.premium.visa_processing_tooltip": "Включает обработку до 3 виз",

    // Guides page
    "guides.title": "Руководства по созданию бизнеса",
    "guides.description": "Подробные руководства, которые помогут вам ориентироваться в процессе создания бизнеса",

    // Support page
    "support.title": "Поддержка клиентов",
    "support.description": "Мы здесь, чтобы помочь вам с любыми вопросами или проблемами",

    // Legal pages
    "terms.title": "Условия использования",
    "terms.description": "Последнее обновление: 12 апреля 2025 г.",
    "privacy.title": "Политика конфиденциальности",
    "privacy.description": "Последнее обновление: 12 апреля 2025 г.",
    "cookies.title": "Политика использования файлов cookie",
    "cookies.description": "Последнее обновление: 12 апреля 2025 г.",
    "disclaimer.title": "Отказ от ответственности",
    "disclaimer.description": "Последнее обновление: 12 апреля 2025 г.",
  },

  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.team": "فريقنا",
    "nav.contact": "اتصل بنا",
    "nav.pricing": "الأسعار",
    "nav.about": "من نحن",
    "nav.blog": "المدونة",
    "nav.faq": "الأسئلة الشائعة",

    // Hero Section
    "hero.title": "شريكك لحلول الأعمال السلسة في الإمارات العربية المتحدة",
    "hero.description":
      "كيف تشعر لو استطعت إنشاء أول فرع لك في أفضل موقع في وسط المدينة من خلال خدمات تسجيل الأعمال لدينا؟ تخيل بدء مشروع أحلامك بجوار أطول مبنى في العالم، وفي مركز المركز المالي.",
    "hero.cta.contact": "اتصل بنا",
    "hero.cta.prices": "الأسعار",

    // Buttons
    "button.contact": "اتصل بنا",
    "button.prices": "الأسعار",

    // Services Section
    "services.title": "خدماتنا",
    "services.description": "نقدم حلولاً شاملة لإعداد الأعمال مصممة خصيصًا لتلبية احتياجاتك",
    "services.business-formation": "تأسيس الأعمال",
    "services.business-formation.description": "خدمات تسجيل الشركات الكاملة مع جميع الوثائق والموافقات اللازمة",
    "services.visa-processing": "معالجة التأشيرات",
    "services.visa-processing.description": "خدمات معالجة التأشيرات والهجرة الكاملة لأصحاب الأعمال والموظفين",
    "services.bank-account": "الحساب المصرفي",
    "services.bank-account.description": "المساعدة في إعداد الخدمات المصرفية للشركات والخدمات المالية لعملك",
    "services.marketing": "التسويق",
    "services.marketing.description": "خدمات تسويقية استراتيجية لمساعدة عملك على النمو والوصول إلى جمهورك المستهدف",
    "services.health-insurance": "التأمين الصحي",
    "services.health-insurance.description": "حلول تأمين صحي شاملة لك ولموظفيك",
    "services.trademark": "تسجيل العلامة التجارية",
    "services.trademark.description": "حماية علامتك التجارية من خلال خدمات تسجيل العلامات التجارية والملكية الفكرية",

    // Add translations for the services dropdown
    "services.dropdown.all": "عرض جميع الخدمات",
    "services.dropdown.business-formation": "تأسيس الأعمال",
    "services.dropdown.trade-licensing": "ترخيص تجاري",
    "services.dropdown.visa-processing": "معالجة التأشيرات",
    "services.dropdown.office-solutions": "حلول المكاتب",
    "services.dropdown.banking-support": "الدعم المصرفي",
    "services.dropdown.business-consulting": "استشارات الأعمال",

    // Pricing Section
    "pricing.title": "خطط الأسعار",
    "pricing.description": "اختر الباقة المثالية لاحتياجات عملك",
    "pricing.starter.title": "الباقة المبتدئة",
    "pricing.starter.description": "مثالية للشركات الصغيرة والشركات الناشئة",
    "pricing.professional.title": "الباقة الاحترافية",
    "pricing.professional.description": "مثالية للشركات النامية",
    "pricing.premium.title": "الباقة المتميزة",
    "pricing.premium.description": "حل كامل للشركات الراسخة",
    "pricing.cta": "ابدأ الآن",
    "pricing.most-popular": "الأكثر شعبية",

    // Contact Section
    "contact.title": "اتصل بنا",
    "contact.description": "هل أنت مستعد لبدء رحلة عملك؟ تواصل مع فريق الخبراء لدينا اليوم.",
    "contact.form.name": "الاسم الكامل",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.service": "الخدمة المهتم بها",
    "contact.form.message": "الرسالة",
    "contact.form.submit": "إرسال",
    "contact.form.required": "حقل مطلوب",
    "contact.form.email.invalid": "يرجى إدخال عنوان بريد إلكتروني صالح",
    "contact.form.success": "شكرا لك! تم إرسال رسالتك بنجاح.",

    // Footer
    "footer.rights": "© 2025 ريفرفلو سوليوشنز م.م.ح. جميع الحقوق محفوظة.",
    "footer.designed": "تم التصميم والتطوير بـ ♥",
    "footer.company": "الشركة",
    "footer.about_us": "من نحن",
    "footer.our_team": "فريقنا",
    "footer.blog": "المدونة",
    "footer.contact": "اتصل بنا",
    "footer.services": "الخدمات",
    "footer.business_setup": "تأسيس الأعمال",
    "footer.visa_processing": "معالجة التأشيرات",
    "footer.bank_account": "الحساب المصرفي",
    "footer.trademark_registration": "تسجيل العلامة التجارية",
    "footer.resources": "الموارد",
    "footer.faq": "الأسئلة الشائعة",
    "footer.pricing": "الأسعار",
    "footer.guides": "الأدلة",
    "footer.support": "الدعم",
    "footer.legal": "قانوني",
    "footer.terms_of_service": "شروط الخدمة",
    "footer.privacy_policy": "سياسة الخصوصية",
    "footer.cookie_policy": "سياسة ملفات تعريف الارتباط",
    "footer.disclaimer": "إخلاء المسؤولية",
    "footer.description": "شريكك الموثوق لخدمات إعداد الأعمال وتأسيس الشركات في الإمارات العربية المتحدة.",

    // Service Pages
    "service.business-formation.title": "تأسيس الأعمال",
    "service.business-formation.description": "خدمات تسجيل الشركات الكاملة مع جميع الوثائق والموافقات اللازمة",
    "service.business-formation.content":
      "توفر خدمة تأسيس الأعمال لدينا دعمًا شاملاً لتأسيس شركتك في الإمارات العربية المتحدة. نحن نتعامل مع جميع المتطلبات القانونية والوثائق والموافقات لضمان عملية إعداد سلسة وخالية من المتاعب.",

    "service.trade-licensing.title": "ترخيص تجاري",
    "service.trade-licensing.description": "الحصول على جميع التراخيص والتصاريح التجارية اللازمة لعملياتك التجارية",
    "service.trade-licensing.content":
      "تضمن خدمة الترخيص التجاري لدينا أن عملك لديه جميع التراخيص والتصاريح اللازمة للعمل بشكل قانوني في الإمارات العربية المتحدة. نحن نتعامل مع عملية التقديم بأكملها، من الوثائق إلى الموافقة.",

    "service.visa-processing.title": "معالجة التأشيرات",
    "service.visa-processing.description": "خدمات معالجة التأشيرات والهجرة الكاملة لأصحاب الأعمال والموظفين",
    "service.visa-processing.content":
      "توفر خدمة معالجة التأشيرات لدينا دعمًا شاملاً للحصول على تأشيرات الإقامة لأصحاب الأعمال والمستثمرين والموظفين. نحن نتعامل مع جميع جوانب عملية تقديم التأشيرة، من الوثائق إلى الفحوصات الطبية والقياسات الحيوية.",

    "service.office-solutions.title": "حلول المكاتب",
    "service.office-solutions.description": "مساحات مكتبية مرنة ومكاتب افتراضية وخدمات عنوان أعمال متميزة",
    "service.office-solutions.content":
      "توفر خدمة حلول المكاتب لدينا مجموعة من الخيارات لتلبية احتياجات عملك، من المكاتب الافتراضية إلى المساحات المادية المتميزة في مواقع رئيسية. نحن نقدم شروطًا مرنة وخدمات دعم شاملة.",

    "service.banking-support.title": "الدعم المصرفي",
    "service.banking-support.description": "المساعدة في إعداد الخدمات المصرفية للشركات والخدمات المالية",
    "service.banking-support.content":
      "تساعدك خدمة الدعم المصرفي لدينا على التنقل في النظام المصرفي الإماراتي، من فتح حسابات الشركات إلى إنشاء خدمات التجار والخدمات المصرفية عبر الإنترنت. لدينا علاقات قوية مع البنوك الرئيسية لتسهيل إعداد الحساب بسلاسة.",

    "service.business-consulting.title": "استشارات الأعمال",
    "service.business-consulting.description": "توجيه خبير واستشارات استراتيجية لنمو الأعمال",
    "service.business-consulting.content":
      "توفر خدمة استشارات الأعمال لدينا توجيهًا خبيرًا حول دخول السوق واستراتيجية الأعمال وفرص النمو في الإمارات العربية المتحدة. يتمتع مستشارونا بمعرفة عميقة بالأسواق واللوائح المحلية.",

    // Pricing Plan Pages
    "pricing.starter.features": "الميزات المتضمنة في الباقة المبتدئة",
    "pricing.starter.content":
      "تم تصميم الباقة المبتدئة للشركات الصغيرة والشركات الناشئة التي تتطلع إلى تأسيس وجودها في الإمارات العربية المتحدة بأقل استثمار. تتضمن هذه الباقة الخدمات الأساسية لتشغيل عملك بسرعة.",

    "pricing.professional.features": "الميزات المتضمنة في الباقة الاحترافية",
    "pricing.professional.content":
      "الباقة الاحترافية مثالية للشركات النامية التي تتطلب إعدادًا أكثر شمولاً. تتضمن هذه الباقة جميع الخدمات الأساسية بالإضافة إلى ميزات إضافية لدعم نمو عملك.",

    "pricing.premium.features": "الميزات المتضمنة في الباقة المتميزة",
    "pricing.premium.content":
      "توفر الباقة المتميزة حلاً كاملاً للشركات الراسخة التي تبحث عن إعداد متميز في الإمارات العربية المتحدة. توفر هذه الباقة الشاملة أعلى مستوى من الخدمة والدعم.",

    "pricing.premium.visa_processing_tooltip": "يشمل معالجة ما يصل إلى 3 تأشيرات",

    // Guides page
    "guides.title": "أدلة إعداد الأعمال",
    "guides.description": "أدلة شاملة لمساعدتك في التنقل في عملية إعداد الأعمال",

    // Support page
    "support.title": "دعم العملاء",
    "support.description": "نحن هنا لمساعدتك في أي أسئلة أو مشاكل قد تواجهها",

    // Legal pages
    "terms.title": "شروط الخدمة",
    "terms.description": "آخر تحديث: 12 أبريل 2025",
    "privacy.title": "سياسة الخصوصية",
    "privacy.description": "آخر تحديث: 12 أبريل 2025",
    "cookies.title": "سياسة ملفات تعريف الارتباط",
    "cookies.description": "آخر تحديث: 12 أبريل 2025",
    "disclaimer.title": "إخلاء المسؤولية",
    "disclaimer.description": "آخر تحديث: 12 أبريل 2025",
  },
}

export default translations
