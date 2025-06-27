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
    "hero.description": "How would you like if you could set up the very first branch at the hottest spot in downtown with our business registration services? Imagine starting your dream business next to the tallest building in the world, and the center of the financial hub.",
    "hero.cta.contact": "Contact us",
    "hero.cta.prices": "Prices",
    // Hero Slides
    "hero.slides.0.title": "Empower Your Vision",
    "hero.slides.0.description": "We build digital experiences that elevate your brand and inspire action.",

    "hero.slides.1.title": "Tailored for Your Needs",
    "hero.slides.1.description": "From concept to launch, we craft solutions with strategy and style.",

    "hero.slides.2.title": "Global Reach, Local Touch",
    "hero.slides.2.description": "Our approach blends innovation with cultural insight.",

    "hero.slides.3.title": "Start Your Journey",
    "hero.slides.3.description": "Let’s build something extraordinary together.",

    // About Section
    "about.title": "About Riverflow Solutions",
    "about.description": "We specialize in streamlining business formation, visa processing, and financial setup in the UAE. With years of experience, a multilingual team, and tailored services, we ensure your business takes off without friction.",
    "about.highlight.1": "✔ 10+ Years of Experience",
    "about.highlight.2": "✔ Multilingual Business Consultants",
    "about.highlight.3": "✔ Trusted by 1000+ Clients",
    "about.cta": "Get in Touch",


    // Story Section
    "about.story.title": "Our Story",
    "about.story.content1": "Founded in 2008, Riverflow Solutions has been at the forefront of business setup and company formation services for over 15 years. What started as a small consultancy has grown into a comprehensive business solutions provider trusted by entrepreneurs and corporations worldwide.",
    "about.story.content2": "Our journey has been defined by a commitment to excellence, integrity, and client success. We've helped establish over 5,000 businesses across various industries, guiding entrepreneurs through every step of their business setup journey.",

    // Mission & Vision
    "about.mission.title": "Our Mission & Vision",
    "about.mission.subtitle": "Our Mission",
    "about.mission.content": "To simplify the business setup process and empower entrepreneurs to turn their visions into reality through expert guidance, personalized solutions, and unwavering support.",
    "about.vision.subtitle": "Our Vision",
    "about.vision.content": "To be the leading business setup service provider, recognized globally for excellence, innovation, and commitment to client success in an ever-evolving business landscape.",

    // Values Section
    "about.values.title": "Our Values",
    "about.values.description": "The principles that guide everything we do",

    "about.values.value1.title": "Integrity",
    "about.values.value1.content": "We uphold the highest ethical standards in all our business dealings, ensuring transparency and honesty in every interaction.",

    "about.values.value2.title": "Excellence",
    "about.values.value2.content": "We strive for excellence in everything we do, continuously improving our services to exceed client expectations.",

    "about.values.value3.title": "Client-Centric",
    "about.values.value3.content": "Our clients are at the heart of everything we do. We prioritize their needs and tailor our services to help them achieve their goals.",

    "about.values.value4.title": "Trust",
    "about.values.value4.content": "We build lasting relationships based on trust, delivering on our promises and safeguarding our clients' interests.",

    "about.values.value5.title": "Knowledge",
    "about.values.value5.content": "We continuously expand our expertise to provide informed guidance and innovative solutions in a dynamic business environment.",

    "about.values.value6.title": "Efficiency",
    "about.values.value6.content": "We value our clients' time and resources, streamlining processes to deliver efficient and effective solutions.",

    // CTA Section
    "about.join.title": "Join Our Journey",
    "about.join.content": "Whether you're starting a new business or expanding your existing operations, we're here to support your journey every step of the way.",
    "about.join.cta.contact": "Contact Us",
    "about.join.cta.learn": "Learn More",

    // Stats
    "about.stats.years": "Years of Experience",
    "about.stats.businesses": "Businesses Launched",
    "about.stats.consultants": "Expert Consultants",
    "about.stats.satisfaction": "Client Satisfaction",

    //blogs:
    "blog.title": "Our Blog",
    "blog.description": "Latest news, insights, and updates from our business experts",
    "blog.loadMore": "Load more",

    // Services Grid Section
    "services.title": "What We Offer",
    "services.subtitle": "Our most popular services designed for your business success",
    "services.grid.business_formation.title": "Business Formation",
    "services.grid.business_formation.description": "Start your UAE business with expert licensing, PRO, and location support.",
    "services.grid.visa_processing.title": "Visa Processing",
    "services.grid.visa_processing.description": "We handle employment, investor, and dependent visa paperwork and approvals.",
    "services.grid.trade_license.title": "Trade Licensing",
    "services.grid.trade_license.description": "Secure mainland or freezone trade licenses quickly and compliantly.",
    "services.grid.office_solutions.title": "Office Solutions",
    "services.grid.office_solutions.description": "Explore virtual offices, co-working spaces, or full office rentals.",
    "services.grid.banking_support.title": "Banking Support",
    "services.grid.banking_support.description": "Get help opening corporate bank accounts tailored to your business.",
    "services.grid.business_consulting.title": "Business Consulting",
    "services.grid.business_consulting.description": "Expert advice on compliance, operations, and market expansion.",

    // Testimonials Section
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Trusted by entrepreneurs and businesses across the UAE",

    "testimonials.1.quote": "Riverflow made it incredibly easy to set up my business in Dubai. They handled everything with professionalism.",
    "testimonials.1.name": "Sarah Al Mansoori",
    "testimonials.1.title": "Founder, Oasis Tech",

    "testimonials.2.quote": "The visa process was smooth and quick. Their team is knowledgeable and always ready to help.",
    "testimonials.2.name": "Khalid Rahman",
    "testimonials.2.title": "Operations Manager, Gulf Trade Co.",

    "testimonials.3.quote": "Their consultancy helped us expand into new markets confidently. Highly recommend them!",
    "testimonials.3.name": "Aisha Mahmoud",
    "testimonials.3.title": "CEO, Blue Horizon Group",

    // CTA Section
    "cta.title": "Ready to Start Your UAE Business Journey?",
    "cta.description": "Get in touch with our experts and let us handle the setup, licensing, and everything in between.",
    "cta.button.primary": "Contact Us",
    "cta.button.secondary": "Get a Quote",

    // Contact Section
    "contact.title": "Get in Touch With Us",
    "contact.description": "We’re here to assist you with business setup, licensing, and all your UAE company formation needs.",
    "contact.name": "Your Name",
    "contact.email": "Email Address",
    "contact.message": "Message",
    "contact.button": "Send Message",
    "contact.success": "Thank you! Your message has been received.",
    "contact.info.phone": "Phone",

    "contact.info.email": "Email",
    "contact.info.office": "Office",
    "contact.info.address.line1": "Business Bay, Downtown",
    "contact.info.address.line2": "Floor 22, Tower A",
    "contact.info.hours": "Working Hours",
    "contact.info.hours.weekdays": "Monday - Friday: 9:00 AM - 6:00 PM",
    "contact.info.hours.saturday": "Saturday: 10:00 AM - 2:00 PM",


    // Newsletter
    "newsletter.title": "Stay Updated with Riverflow",
    "newsletter.description": "Subscribe to our newsletter for the latest updates, tips, and special offers.",
    "newsletter.email_placeholder": "Enter your email address",
    "newsletter.button": "Subscribe",
    "newsletter.success": "Thank you! You're now subscribed to our newsletter.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How long does it take to register a company?",
    "faq.a1": "Usually within 2–5 business days, depending on your chosen jurisdiction.",
    "faq.q2": "Can I open a business without being in the UAE?",
    "faq.a2": "Yes! We offer remote registration services so you can set up from anywhere.",
    "faq.q3": "What types of licenses do you offer?",
    "faq.a3": "We help with trade, professional, industrial, and freelance licenses.",

    // Final CTA
    "final_cta.title": "Ready to Set Up Your Business in the UAE?",
    "final_cta.subtitle": "Our experts are here to help you every step of the way.",
    "final_cta.button": "Book Free Consultation",
    "final_cta.secondary_button": "Explore Services",


    // Buttons
    "button.contact": "Contact us",
    "button.prices": "Prices",

    // Services Section 
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
    "contact.info.title": "Let's Connect",
    "contact.info.description": "Fill out the form and our team will get back to you within 24 hours",
    "contact.info.name.title": "Sewit Haddish",
    "contact.info.name.position": "General Manager",
    "contact.info.phone.title": "Phone",
    "contact.info.phone.number": "+87190919991",
    "contact.info.email.title": "Email",
    "contact.info.email.address": "info@riverflow.ae",
    "contact.info.office.title": "Office",
    "contact.info.office.line1": "Business Bay, Downtown",
    "contact.info.office.line2": "Floor 22, Tower A",
    "contact.info.hours.title": "Working Hours",

    // Contact Form section
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Enter your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "Enter your email",
    "contact.form.email.invalid": "Please enter a valid email address.",
    "contact.form.service": "Service",
    "contact.form.service.placeholder": "Select a service",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Enter your message",
    "contact.form.required": "This field is required.",
    "contact.form.submit": "Send Message",
    "contact.form.submitting": "Submitting...",
    "contact.form.success.title": "Message Sent!",
    "contact.form.success": "Thank you! We'll get back to you as soon as possible.",


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
    "nav.contact": "Контакты",
    "nav.pricing": "Цены",
    "nav.about": "О нас",
    "nav.blog": "Блог",
    "nav.faq": "Вопросы и ответы",

    // Hero Section
    "hero.title": "Ваш партнёр в создании бизнеса в ОАЭ",
    "hero.description": "Хотели бы вы открыть филиал в центре города с помощью наших услуг по регистрации бизнеса? Представьте, что вы начинаете свой бизнес рядом с самым высоким зданием в мире.",
    "hero.cta.contact": "Свяжитесь с нами",
    "hero.cta.prices": "Цены",

    // Hero Slides
    "hero.slides.0.title": "Осуществите своё видение",
    "hero.slides.0.description": "Мы создаём цифровые решения, которые вдохновляют.",
    "hero.slides.1.title": "Индивидуальный подход",
    "hero.slides.1.description": "От идеи до запуска — со стратегией и стилем.",
    "hero.slides.2.title": "Глобальный охват, локальный подход",
    "hero.slides.2.description": "Наш подход сочетает инновации с культурным пониманием.",
    "hero.slides.3.title": "Начните своё путешествие",
    "hero.slides.3.description": "Давайте создадим что-то невероятное вместе.",

    // About Section
    "about.title": "О Riverflow Solutions",
    "about.description": "Мы упрощаем создание бизнеса, оформление виз и финансовую систему в ОАЭ. С многолетним опытом и многиязычной командой мы обеспечиваем беспрепятственный старт вашего бизнеса.",
    "about.highlight.1": "✔ Более 10 лет опыта",
    "about.highlight.2": "✔ Многоязычная команда консультантов",
    "about.highlight.3": "✔ Более 1000 довольных клиентов",
    "about.cta": "Свяжитесь с нами",

    // Story Section
    "about.story.title": "Наша история",
    "about.story.content1": "Основана в 2008 году, Riverflow Solutions предоставляла услуги по регистрации бизнеса более 15 лет. Из небольшой консалтинговой компании мы выросли в комплексного поставщика бизнес-решений.",
    "about.story.content2": "Наш путь определяется стремлением к совершенству, честности и успеху клиентов. Мы помогли открыть более 5000 компаний в разных отраслях.",

    // Mission & Vision
    "about.mission.title": "Наша миссия и видение",
    "about.mission.subtitle": "Наша миссия",
    "about.mission.content": "Упростить процесс создания бизнеса и помочь предпринимателям воплотить свои идеи в жизнь через экспертную поддержку и персонализированные решения.",
    "about.vision.subtitle": "Наше видение",
    "about.vision.content": "Стать ведущим поставщиком услуг по регистрации бизнеса, признанным за инновации, качество и ориентацию на потребности клиента.",

    // Values Section
    "about.values.title": "Наши ценности",
    "about.values.description": "Принципы, которые направляют нашу работу",

    "about.values.value1.title": "Честность",
    "about.values.value1.content": "Мы придерживаемся высоких этических стандартов, обеспечивая прозрачность и честность в каждом взаимодействии.",

    "about.values.value2.title": "Совершенство",
    "about.values.value2.content": "Мы стремимся к совершенству во всём, постоянно улучшая наши услуги, чтобы превзойти ожидания клиентов.",

    "about.values.value3.title": "Клиентоориентированность",
    "about.values.value3.content": "Наши клиенты — в центре внимания. Мы учитываем их потребности и адаптируем услуги под них.",

    "about.values.value4.title": "Доверие",
    "about.values.value4.content": "Мы строим доверительные отношения, выполняем обещания и защищаем интересы клиента.",

    "about.values.value5.title": "Знания",
    "about.values.value5.content": "Мы постоянно развиваем экспертизу, чтобы предоставлять актуальные и инновационные решения.",

    "about.values.value6.title": "Эффективность",
    "about.values.value6.content": "Мы ценим время и ресурсы клиента, оптимизируя процессы для максимальной эффективности.",

    // CTA Section
    "about.join.title": "Присоединяйтесь к нашему пути",
    "about.join.content": "Независимо от того, начинаете ли вы или расширяете бизнес — мы поддержим вас на каждом этапе.",
    "about.join.cta.contact": "Связаться",
    "about.join.cta.learn": "Узнать больше",

    // Stats
    "about.stats.years": "Лет опыта",
    "about.stats.businesses": "Открытых компаний",
    "about.stats.consultants": "Экспертных консультантов",
    "about.stats.satisfaction": "Уровень удовлетворённости",

    // Blog Section
    "blog.title": "Наш блог",
    "blog.description": "Свежие новости, аналитика и обновления от наших специалистов",
    "blog.loadMore": "Загрузить ещё",

    // Services Grid Section
    "services.title": "Наши услуги",
    "services.subtitle": "Популярные решения для вашего бизнеса",
    "services.grid.business_formation.title": "Регистрация бизнеса",
    "services.grid.business_formation.description": "Оформление лицензий, PRO и офиса для вашего бизнеса в ОАЭ.",
    "services.grid.visa_processing.title": "Оформление виз",
    "services.grid.visa_processing.description": "Оформление рабочих, инвесторских и зависимых виз.",
    "services.grid.trade_license.title": "Торговые лицензии",
    "services.grid.trade_license.description": "Быстрое оформление лицензий в материке и свободных зонах.",
    "services.grid.office_solutions.title": "Офисные решения",
    "services.grid.office_solutions.description": "Виртуальные офисы, коворкинги или аренда офиса.",
    "services.grid.banking_support.title": "Банковская поддержка",
    "services.grid.banking_support.description": "Помощь в открытии корпоративных счетов.",
    "services.grid.business_consulting.title": "Консалтинг",
    "services.grid.business_consulting.description": "Консультации по соответствию, бизнес‑стратегии и развитию.",

    // Testimonials Section
    "testimonials.title": "Отзывы наших клиентов",
    "testimonials.subtitle": "Нам доверяют предприниматели и компании ОАЭ",
    "testimonials.1.quote": "Riverflow очень упростили регистрацию моего бизнеса в Дубае. Професси…",
    "testimonials.1.name": "Сара аль Мансури",
    "testimonials.1.title": "Основатель, Oasis Tech",
    "testimonials.2.quote": "Процесс визы был быстрым и гладким. Команда всегда готова помочь.",
    "testimonials.2.name": "Халид Рахман",
    "testimonials.2.title": "Операционный менеджер, Gulf Trade Co.",
    "testimonials.3.quote": "Их консалтинг помог нам выйти на новые рынки с уверенностью. Очень рекомендую!",
    "testimonials.3.name": "Аиша Махмуд",
    "testimonials.3.title": "Генеральный директор, Blue Horizon Group",

    // CTA Section
    "cta.title": "Готовы начать бизнес в ОАЭ?",
    "cta.description": "Свяжитесь с нашими экспертами, и мы возьмём на себя регистрацию, лицензирование и всё остальное.",
    "cta.button.primary": "Связаться",
    "cta.button.secondary": "Получить предложение",

    // Contact Section
    "contact.title": "Свяжитесь с нами",
    "contact.description": "Мы готовы помочь с регистрацией бизнеса, лицензиями и созданием компании в ОАЭ.",
    "contact.name": "Ваше имя",
    "contact.email": "Электронная почта",
    "contact.message": "Сообщение",
    "contact.button": "Отправить",
    "contact.success": "Спасибо! Ваше сообщение было отправлено.",

    // Newsletter
    "newsletter.title": "Будьте в курсе обновлений",
    "newsletter.description": "Подпишитесь на рассылку за последними новостями и предложениями.",
    "newsletter.email_placeholder": "Введите адрес электронной почты",
    "newsletter.button": "Подписаться",
    "newsletter.success": "Спасибо! Вы подписаны на рассылку.",

    // FAQ
    "faq.title": "Часто задаваемые вопросы",
    "faq.q1": "Сколько времени занимает регистрация компании?",
    "faq.a1": "Обычно 2–5 рабочих дней в зависимости от юрисдикции.",
    "faq.q2": "Можно ли зарегистрировать бизнес удалённо?",
    "faq.a2": "Да! Мы предлагаем удалённую регистрацию из любой точки мира.",
    "faq.q3": "Какие виды лицензий вы предлагаете?",
    "faq.a3": "Торговые, профессиональные, промышленные и фриланс‑лицензии.",

    // Final CTA
    "final_cta.title": "Готовы начать бизнес в ОАЭ?",
    "final_cta.subtitle": "Наши эксперты готовы помочь на каждом этапе.",
    "final_cta.button": "Бесплатная консультация",
    "final_cta.secondary_button": "Узнать услуги",

    // Buttons
    "button.contact": "Свяжитесь с нами",
    "button.prices": "Цены",

    // Services section keys (short forms & dropdown)
    "services.description": "Мы предлагаем комплексные решения для открытия бизнеса",
    "services.business-formation": "Регистрация бизнеса",
    "services.business-formation.description": "Полный сервис по регистрации компании",
    "services.visa-processing": "Оформление виз",
    "services.visa-processing.description": "Иммиграционная поддержка и визы",
    "services.bank-account": "Банковский счёт",
    "services.bank-account.description": "Помощь в открытии корпоративного счёта",
    "services.marketing": "Маркетинг",
    "services.marketing.description": "Маркетинговая стратегия и рост бизнеса",
    "services.health-insurance": "Медстрахование",
    "services.health-insurance.description": "Страховые решения для вас и сотрудников",
    "services.trademark": "Регистрация торговой марки",
    "services.trademark.description": "Защитите свой бренд и интеллектуальную собственность",

    "services.dropdown.all": "Посмотреть все услуги",
    "services.dropdown.business-formation": "Регистрация бизнеса",
    "services.dropdown.trade-licensing": "Лицензии",
    "services.dropdown.visa-processing": "Оформление виз",
    "services.dropdown.office-solutions": "Офисные решения",
    "services.dropdown.banking-support": "Банковская поддержка",
    "services.dropdown.business-consulting": "Консалтинг",

    // Pricing
    "pricing.title": "Планы и цены",
    "pricing.description": "Выберите подходящий пакет для вашего бизнеса",
    "pricing.starter.title": "Стартовый",
    "pricing.starter.description": "Для стартапов и небольших компаний",
    "pricing.professional.title": "Профессиональный",
    "pricing.professional.description": "Для растущего бизнеса",
    "pricing.premium.title": "Премиум",
    "pricing.premium.description": "Полный комплекс решений",
    "pricing.cta": "Начать",
    "pricing.most-popular": "Самый популярный",

    // Contact form
    "contact.info.title": "Свяжитесь с нами",
    "contact.info.description": "Заполните форму, и наша команда свяжется с вами в течение 24 часов",
    "contact.info.phone.title": "Телефон",
    "contact.info.phone.number": "800 - LLC (552)",
    "contact.info.email.title": "Электронная почта",
    "contact.info.email.address": "info@riverflow.ae",
    "contact.info.office.title": "Офис",
    "contact.info.office.line1": "Бизнес-Бэй, Центр города",
    "contact.info.office.line2": "22 этаж, Башня A",
    "contact.info.hours.title": "Часы работы",
    "contact.info.hours.weekdays": "Понедельник – Пятница: 9:00 – 18:00",
    "contact.info.hours.saturday": "Суббота: 10:00 – 14:00",

    "contact.form.name": "Имя",
    "contact.form.name.placeholder": "Введите ваше имя",
    "contact.form.email": "Электронная почта",
    "contact.form.email.placeholder": "Введите ваш email",
    "contact.form.email.invalid": "Пожалуйста, введите действительный email.",
    "contact.form.service": "Услуга",
    "contact.form.service.placeholder": "Выберите услугу",
    "contact.form.message": "Сообщение",
    "contact.form.message.placeholder": "Введите ваше сообщение",
    "contact.form.required": "Это поле обязательно.",
    "contact.form.submit": "Отправить сообщение",
    "contact.form.submitting": "Отправка...",
    "contact.form.success.title": "Сообщение отправлено!",
    "contact.form.success": "Спасибо! Мы свяжемся с вами как можно скорее.",

    // Footer
    "footer.rights": "© 2025 Riverflow Solutions FZ-LLC. Все права защищены.",
    "footer.designed": "Разработано с ♥",
    "footer.company": "Компания",
    "footer.about_us": "О нас",
    "footer.our_team": "Наша команда",
    "footer.blog": "Блог",
    "footer.contact": "Контакты",
    "footer.services": "Услуги",
    "footer.business_setup": "Регистрация бизнеса",
    "footer.visa_processing": "Оформление виз",
    "footer.bank_account": "Банковский счёт",
    "footer.trademark_registration": "Регистрация ТМ",
    "footer.resources": "Ресурсы",
    "footer.faq": "FAQ",
    "footer.pricing": "Цены",
    "footer.guides": "Гайды",
    "footer.support": "Поддержка",
    "footer.legal": "Правовая информация",
    "footer.terms_of_service": "Условия обслуживания",
    "footer.privacy_policy": "Политика конфиденциальности",
    "footer.cookie_policy": "Политика Cookie",
    "footer.disclaimer": "Отказ от ответственности",
    "footer.description": "Ваш надёжный партнёр в открытии бизнеса в ОАЭ.",

    // Service pages
    "service.business-formation.title": "Регистрация бизнеса",
    "service.business-formation.description": "Полный сервис по регистрации компании",
    "service.business-formation.content": "Мы обеспечиваем поддержку на всех этапах создания компании в ОАЭ...",

    "service.trade-licensing.title": "Торговые лицензии",
    "service.trade-licensing.description": "Получение всех необходимых лицензий и разрешений",
    "service.trade-licensing.content": "Наш сервис обеспечивает оформление лицензий...",

    "service.visa-processing.title": "Визовые услуги",
    "service.visa-processing.description": "Полный цикл оформления виз",
    "service.visa-processing.content": "Мы помогаем в получении резидентских виз для владельцев бизнеса, инвесторов и сотрудников...",

    "service.office-solutions.title": "Офисные решения",
    "service.office-solutions.description": "Гибкие офисные решения и виртуальный офис",
    "service.office-solutions.content": "Мы предлагаем выбор виртуальных или физических офисов...",

    "service.banking-support.title": "Банковская поддержка",
    "service.banking-support.description": "Поддержка в открытии счета и финансовых услугах",
    "service.banking-support.content": "Мы помогаем с процессом открытия корпоративных счетов...",

    "service.business-consulting.title": "Бизнес-консалтинг",
    "service.business-consulting.description": "Экспертные консультации и стратегия",
    "service.business-consulting.content": "Наши консультанты складывают глубокое понимание рынков и регуляций...",

    // Pricing Plan pages content...
    "pricing.starter.features": "Что входит в стартовый пакет",
    "pricing.starter.content": "Стартовый пакет подходит маленьким компаниям...",

    "pricing.professional.features": "Что входит в профессиональный пакет",
    "pricing.professional.content": "Пакет для растущего бизнеса включает дополнительные услуги...",

    "pricing.premium.features": "Что входит в премиум пакет",
    "pricing.premium.content": "Премиум пакет предлагает всё включено и максимальный уровень сервиса...",

    "pricing.premium.visa_processing_tooltip": "Включает оформление до 3 виз",

    // Guides page
    "guides.title": "Гайды по развитию бизнеса",
    "guides.description": "Подробные руководства по открытию и ведению компании",

    // Support
    "support.title": "Поддержка клиентов",
    "support.description": "Мы готовы помочь вам с любыми вопросами",

    // Legal
    "terms.title": "Условия обслуживания",
    "terms.description": "Обновлено: 12 апреля 2025",
    "privacy.title": "Политика конфиденциальности",
    "privacy.description": "Обновлено: 12 апреля 2025",
    "cookies.title": "Политика Cookie",
    "cookies.description": "Обновлено: 12 апреля 2025",
    "disclaimer.title": "Отказ от ответственности",
    "disclaimer.description": "Обновлено: 12 апреля 2025",
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
    "hero.title": "شريكك لحلول الأعمال في الإمارات",
    "hero.description": "تخيل أن تنشئ الفرع الأول لك في قلب المدينة باستخدام خدماتنا لتسجيل الأعمال؟...",
    "hero.cta.contact": "اتصل بنا",
    "hero.cta.prices": "الأسعار",

    // Hero Slides
    "hero.slides.0.title": "حقق رؤيتك",
    "hero.slides.0.description": "نصمم تجارب رقمية ترفع علامتك وتحفز العملاء.",
    "hero.slides.1.title": "مصمم لاحتياجاتك",
    "hero.slides.1.description": "من الفكرة إلى الإطلاق بإحترافية واستراتيجية.",
    "hero.slides.2.title": "عالمي بلمسة محلية",
    "hero.slides.2.description": "نهجنا يجمع الابتكار مع الفهم الثقافي.",
    "hero.slides.3.title": "ابدأ رحلتك",
    "hero.slides.3.description": "لننشئ شيئًا مميزًا معًا.",

    // About Section
    "about.title": "من نحن - Riverflow Solutions",
    "about.description": "نحن متخصصون في تأسيس الأعمال، التأشيرات، والخدمات المالية في الإمارات...",
    "about.highlight.1": "✔ أكثر من 10 سنوات خبرة",
    "about.highlight.2": "✔ مستشارون يتحدثون عدة لغات",
    "about.highlight.3": "✔ ثقة أكثر من 1000 عميل",
    "about.cta": "تواصل معنا",

    // Story Section
    "about.story.title": "قصتنا",
    "about.story.content1": "تأسست عام 2008، وRiverflow Solutions رائدة في تأسيس الأعمال لأكثر من 15 عامًا...",
    "about.story.content2": "رحلتنا تميزت بالالتزام بالتميز، النزاهة، ونجاح العملاء...",

    // Mission & Vision
    "about.mission.title": "مهمتنا ورؤيتنا",
    "about.mission.subtitle": "مهمتنا",
    "about.mission.content": "تبسيط عملية تأسيس الأعمال وتمكين رواد الأعمال عبر دعم مخصص...",
    "about.vision.subtitle": "رؤيتنا",
    "about.vision.content": "أن نكون الرواد في تقديم خدمات تأسيس الشركات...",

    // Values Section
    "about.values.title": "قيمنا",
    "about.values.description": "المبادئ التي توجه أعمالنا",

    "about.values.value1.title": "النزاهة",
    "about.values.value1.content": "نتمسك بأعلى المعايير الأخلاقية في كل تعاملاتنا.",

    "about.values.value2.title": "التميز",
    "about.values.value2.content": "نطمح للتميز باستمرار لتحسين خدماتنا.",

    "about.values.value3.title": "التركيز على العميل",
    "about.values.value3.content": "عملاؤنا في صميم كل ما نقوم به.",

    "about.values.value4.title": "الثقة",
    "about.values.value4.content": "نبني علاقات مستمرة مبنية على الثقة وتنفيذ وعودنا.",

    "about.values.value5.title": "المعرفة",
    "about.values.value5.content": "نمضي قُدمًا بتوسيع خبرتنا لتقديم حلول مبتكرة.",

    "about.values.value6.title": "الكفاءة",
    "about.values.value6.content": "نُحقق الكفاءة لحماية وقت العميل وموارده.",

    // CTA Section
    "about.join.title": "انضم إلينا في رحلتنا",
    "about.join.content": "سواء كنت تبدأ مشروع جديد أو توسع نشاطك القائم، نحن هنا لدعمك.",
    "about.join.cta.contact": "اتصل بنا",
    "about.join.cta.learn": "اكتشف المزيد",

    // Stats
    "about.stats.years": "سنوات خبرة",
    "about.stats.businesses": "شركات تم إطلاقها",
    "about.stats.consultants": "مستشارين خبراء",
    "about.stats.satisfaction": "رضا العملاء",

    // Blog Section
    "blog.title": "مدونتنا",
    "blog.description": "أحدث الأخبار والرؤى من خبرائنا",
    "blog.loadMore": "تحميل المزيد" ,

    // Services Grid Section
    "services.title": "خدماتنا",
    "services.subtitle": "أهم الخدمات لنجاح أعمالك",
    "services.grid.business_formation.title": "تأسيس الشركات",
    "services.grid.business_formation.description": "تأسيس وترخيص الأعمال في الإمارات.",
    "services.grid.visa_processing.title": "معالجة التأشيرات",
    "services.grid.visa_processing.description": "منح تأشيرات العمل، المستثمر، والأقارب.",
    "services.grid.trade_license.title": "التراخيص التجارية",
    "services.grid.trade_license.description": "ترخيص سريع في المناطق الحرة والقارية.",
    "services.grid.office_solutions.title": "حلول مكتبية",
    "services.grid.office_solutions.description": "مكاتب افتراضية، مساحات عمل مشتركة، أو إيجار مكتبي.",
    "services.grid.banking_support.title": "دعم بنكي",
    "services.grid.banking_support.description": "مساعدة في فتح حسابات بنكية للشركات.",
    "services.grid.business_consulting.title": "الاستشارات",
    "services.grid.business_consulting.description": "استشارات امتثال واستراتيجية وتوسع الأعمال.",

    // Testimonials Section
    "testimonials.title": "آراء عملائنا",
    "testimonials.subtitle": "رواد أعمال وشركات في الإمارات يثقون بنا",
    "testimonials.1.quote": "سهلت Riverflow تأسيس شركتي في دبي بكل احترافية.",
    "testimonials.1.name": "سارة المنصوري",
    "testimonials.1.title": "المؤسس، Oasis Tech",
    "testimonials.2.quote": "كانت إجراءات التأشيرات سلسة وسريعة. فريقهم دائمًا جاهز.",
    "testimonials.2.name": "خالد رحمن",
    "testimonials.2.title": "مدير العمليات، Gulf Trade Co.",
    "testimonials.3.quote": "مساعدتهم أعطتنا ثقة للتوسع في أسواق جديدة. أوصي بهم!",
    "testimonials.3.name": "عائشة محمود",
    "testimonials.3.title": "المدير التنفيذي، Blue Horizon Group",

    // CTA Section
    "cta.title": "هل أنت جاهز لبدء مشروعك في الإمارات؟",
    "cta.description": "تواصل مع خبرائنا ونحن نعتني بالتأسيس، التراخيص، وكل شيء آخر.",
    "cta.button.primary": "اتصل بنا",
    "cta.button.secondary": "احصل على عرض",

    // Contact Section
    "contact.title": "تواصل معنا",
    "contact.description": "نحن هنا لمساعدتك في تأسيس وترخيص الشركات في الإمارات.",
    "contact.name": "اسمك",
    "contact.email": "البريد الإلكتروني",
    "contact.message": "الرسالة",
    "contact.button": "إرسال",
    "contact.success": "شكرًا! تم استلام رسالتك.",

    // Newsletter
    "newsletter.title": "ابقَ على اطلاع",
    "newsletter.description": "اشترك في نشرتنا لأحدث الأخبار والعروض",
    "newsletter.email_placeholder": "أدخل بريدك الإلكتروني",
    "newsletter.button": "اشتراك",
    "newsletter.success": "شكرًا! لقد تم الاشتراك.",

    // FAQ
    "faq.title": "الأسئلة الشائعة",
    "faq.q1": "كم يستغرق تسجيل الشركة؟",
    "faq.a1": "عادةً ما يستغرق من يومين إلى ٥ أيام عمل حسب الاختصاص.",
    "faq.q2": "هل يمكن تسجيل الشركة دون وجود في الإمارات؟",
    "faq.a2": "نعم! نقدم خدمات التسجيل عن بُعد من أي مكان.",
    "faq.q3": "ما أنواع التراخيص المتاحة؟",
    "faq.a3": "نساعد في التراخيص التجارية والمهنية والصناعية والفريلانس.",

    // Final CTA
    "final_cta.title": "هل أنت مستعد لإنشاء مشروعك في الإمارات؟",
    "final_cta.subtitle": "خبراؤنا جاهزون لدعمك في كل خطوة.",
    "final_cta.button": "استشارة مجانية",
    "final_cta.secondary_button": "استكشف خدماتنا",

    // Buttons
    "button.contact": "اتصل بنا",
    "button.prices": "الأسعار",

    // Services section keys
    "services.description": "نقدم حلول تأسيس أعمال شاملة حسب احتياجاتك",
    "services.business-formation": "تأسيس الشركات",
    "services.business-formation.description": "خدمة كاملة لتسجيل الشركة، المستندات والموافقات.",
    "services.visa-processing": "معالجة التأشيرات",
    "services.visa-processing.description": "دعم تأشيرات العمل والهجرة للموظفين وأصحاب الأعمال.",
    "services.bank-account": "حساب بنكي",
    "services.bank-account.description": "مساعدة في فتح حسابات بنكية للشركات.",
    "services.marketing": "التسويق",
    "services.marketing.description": "خدمات تسويقية استراتيجية لنمو أعمالك.",
    "services.health-insurance": "التأمين الصحي",
    "services.health-insurance.description": "حلول تأمين صحي لك وموظفيك.",
    "services.trademark": "تسجيل علامة تجارية",
    "services.trademark.description": "حماية علامتك التجارية وملكية الفكر.",

    "services.dropdown.all": "عرض جميع الخدمات",
    "services.dropdown.business-formation": "تأسيس الشركات",
    "services.dropdown.trade-licensing": "التراخيص التجارية",
    "services.dropdown.visa-processing": "معالجة التأشير",
    "services.dropdown.office-solutions": "حلول المكتب",
    "services.dropdown.banking-support": "الدعم المصرفي",
    "services.dropdown.business-consulting": "الاستشارات",

    // Pricing
    "pricing.title": "خطط الأسعار",
    "pricing.description": "اختر الباقة المثالية لعملك",
    "pricing.starter.title": "الباقة المبتدئة",
    "pricing.starter.description": "مثالية للشركات الناشئة",
    "pricing.professional.title": "باقة محترفة",
    "pricing.professional.description": "مثالية للأعمال المتنامية",
    "pricing.premium.title": "الباقة المميزة",
    "pricing.premium.description": "حل شامل للشركات المتطورة",
    "pricing.cta": "ابدأ الآن",
    "pricing.most-popular": "الأكثر شعبية",

    // Contact form
    "contact.info.title": "تواصل معنا",
    "contact.info.description": "املأ النموذج وسنعود إليك خلال 24 ساعة",
    "contact.info.phone.title": "رقم الهاتف",
    "contact.info.phone.number": "800 - LLC (552)",
    "contact.info.email.title": "البريد الإلكتروني",
    "contact.info.email.address": "info@riverflow.ae",
    "contact.info.office.title": "المكتب",
    "contact.info.office.line1": "الخليج التجاري، وسط المدينة",
    "contact.info.office.line2": "الطابق 22، البرج A",
    "contact.info.hours.title": "ساعات العمل",
    "contact.info.hours.weekdays": "من الاثنين إلى الجمعة: 9:00 ص - 6:00 م",
    "contact.info.hours.saturday": "السبت: 10:00 ص - 2:00 م",

    "contact.form.name": "الاسم",
    "contact.form.name.placeholder": "أدخل اسمك",
    "contact.form.email": "البريد الإلكتروني",
    "contact.form.email.placeholder": "أدخل بريدك الإلكتروني",
    "contact.form.email.invalid": "يرجى إدخال بريد إلكتروني صحيح.",
    "contact.form.service": "الخدمة",
    "contact.form.service.placeholder": "اختر الخدمة",
    "contact.form.message": "الرسالة",
    "contact.form.message.placeholder": "أدخل رسالتك",
    "contact.form.required": "هذا الحقل مطلوب.",
    "contact.form.submit": "إرسال الرسالة",
    "contact.form.submitting": "جاري الإرسال...",
    "contact.form.success.title": "تم إرسال الرسالة!",
    "contact.form.success": "شكرًا لك! سنقوم بالرد عليك في أقرب وقت ممكن.",


    // Footer
    "footer.rights": "© 2025 Riverflow Solutions FZ-LLC. جميع الحقوق محفوظة.",
    "footer.designed": "صُمم وطور بحب ♥",
    "footer.company": "الشركة",
    "footer.about_us": "من نحن",
    "footer.our_team": "فريقنا",
    "footer.blog": "المدونة",
    "footer.contact": "اتصل",
    "footer.services": "الخدمات",
    "footer.business_setup": "تأسيس الأعمال",
    "footer.visa_processing": "إجراءات التأشيرات",
    "footer.bank_account": "حساب بنكي",
    "footer.trademark_registration": "تسجيل علامة تجارية",
    "footer.resources": "الموارد",
    "footer.faq": "الأسئلة الشائعة",
    "footer.pricing": "الأسعار",
    "footer.guides": "أدلة",
    "footer.support": "الدعم",
    "footer.legal": "قانوني",
    "footer.terms_of_service": "الشروط والأحكام",
    "footer.privacy_policy": "سياسة الخصوصية",
    "footer.cookie_policy": "سياسة الكوكيز",
    "footer.disclaimer": "إخلاء المسؤولية",
    "footer.description": "شريكك الموثوق لتأسيس الأعمال في الإمارات.",

    // Service pages & Pricing and Legal descriptions can follow the same pattern…
  }
}

export default translations
