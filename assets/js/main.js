// Translations data (loaded from Jekyll)
const translations = {
  en: {
    nav: { about: "About", tennis: "Tennis", ski: "Skiing", gallery: "Gallery", contact: "Contact" },
    hero: { title: "Montreal Ski and Tennis", subtitle: "Professional Sports Instruction in Quebec", cta_primary: "Book a Lesson", cta_secondary: "Learn More" },
    about: {
      title: "About Me",
      subtitle: "Certified Professional Instructor",
      intro: "With a degree in Physical Education from Kyungpook National University and years of professional experience, I bring expertise and passion to every lesson.",
      credentials: [
        { title: "Education", description: "B.Ed. Physical Education, Kyungpook National University (Minor in Education)" },
        { title: "CPR Certified", description: "Current and valid CPR certification for safety" },
        { title: "Experience", description: "Over 15 years of coaching and instruction experience" }
      ]
    },
    philosophy: {
      title: "My Approach",
      subtitle: "What Makes Every Lesson Count",
      points: [
        { title: "Safety First", description: "Proper technique to prevent injuries. CPR certified instructor with age-appropriate progressions for every skill level." },
        { title: "Joy of Learning", description: "Every lesson should be enjoyable. Positive encouragement and celebrating small wins keeps motivation high." },
        { title: "Continuous Improvement", description: "Structured skill progression with video analysis and feedback. Track your growth with measurable milestones." },
        { title: "Personalized Approach", description: "Custom training plans tailored to your goals. Whether casual or competitive, I adapt to your learning style." },
        { title: "Long-term Development", description: "Building foundations for competition or lifelong recreational enjoyment. Mentorship that goes beyond just technique." }
      ]
    },
    tennis: {
      title: "Tennis",
      subtitle: "From Beginner to Champion",
      description: "Whether you're picking up a racquet for the first time or looking to improve your competitive game, I offer personalized coaching to help you reach your goals.",
      highlights: [
        { title: "Tournament Success", description: "Multiple singles & doubles wins at Montreal Asian Cup" },
        { title: "Teaching Experience", description: "High school after-school tennis program instructor (2008-2009)" },
        { title: "All Levels", description: "Coaching available for beginners through advanced players" }
      ],
      cta: "View Tennis Videos"
    },
    ski: {
      title: "Skiing",
      subtitle: "Master the Slopes",
      description: "From your first time on the snow to perfecting advanced techniques, I provide expert instruction at Quebec's beautiful ski resorts.",
      highlights: [
        { title: "Senior Instructor", description: "Currently working as senior ski instructor at a Quebec resort" },
        { title: "University Coach", description: "Technical coach for university ski team (2004-2005)" },
        { title: "Camp Director", description: "University ski camp instructor (2004-2008)" }
      ],
      cta: "View Ski Courses"
    },
    gallery: { title: "Gallery", subtitle: "Action on the Court and Slopes", filter_all: "All", filter_tennis: "Tennis", filter_ski: "Ski", filter_videos: "Videos" },
    contact: {
      title: "Contact Me",
      subtitle: "Ready to Start Your Journey?",
      description: "Get in touch to book lessons or ask any questions. I'm here to help you achieve your athletic goals.",
      form: { name: "Your Name", email: "Your Email", message: "Your Message", submit: "Send Message" },
      kakao_title: "KakaoTalk",
      kakao_description: "Scan to connect on KakaoTalk",
      qr_title: "Ski Course Info",
      qr_description: "Scan for ski course details"
    },
    footer: { copyright: "Montreal Ski and Tennis. All rights reserved.", location: "Quebec, Canada" }
  },
  fr: {
    nav: { about: "À propos", tennis: "Tennis", ski: "Ski", gallery: "Galerie", contact: "Contact" },
    hero: { title: "Montreal Ski et Tennis", subtitle: "Instruction sportive professionnelle au Québec", cta_primary: "Réserver un cours", cta_secondary: "En savoir plus" },
    about: {
      title: "À propos",
      subtitle: "Instructeur professionnel certifié",
      intro: "Diplômé en éducation physique de l'Université nationale de Kyungpook avec des années d'expérience professionnelle, j'apporte expertise et passion à chaque leçon.",
      credentials: [
        { title: "Formation", description: "B.Éd. Éducation physique, Université nationale de Kyungpook (Mineure en éducation)" },
        { title: "Certifié RCR", description: "Certification RCR actuelle et valide pour la sécurité" },
        { title: "Expérience", description: "Plus de 15 ans d'expérience en coaching et instruction" }
      ]
    },
    philosophy: {
      title: "Mon Approche",
      subtitle: "Ce qui fait la différence à chaque leçon",
      points: [
        { title: "Sécurité avant tout", description: "Technique appropriée pour prévenir les blessures. Instructeur certifié RCR avec des progressions adaptées à chaque niveau." },
        { title: "Plaisir d'apprendre", description: "Chaque leçon doit être agréable. Encouragement positif et célébration des progrès pour maintenir la motivation." },
        { title: "Amélioration continue", description: "Progression structurée avec analyse vidéo et feedback. Suivez votre croissance avec des objectifs mesurables." },
        { title: "Approche personnalisée", description: "Plans d'entraînement sur mesure selon vos objectifs. Que ce soit pour le loisir ou la compétition, je m'adapte à votre style." },
        { title: "Développement à long terme", description: "Construire les bases pour la compétition ou le plaisir récréatif à vie. Un mentorat qui va au-delà de la technique." }
      ]
    },
    tennis: {
      title: "Tennis",
      subtitle: "Du débutant au champion",
      description: "Que vous preniez une raquette pour la première fois ou que vous cherchiez à améliorer votre jeu compétitif, j'offre un coaching personnalisé pour vous aider à atteindre vos objectifs.",
      highlights: [
        { title: "Succès en tournoi", description: "Multiples victoires en simple et double à la Coupe asiatique de Montréal" },
        { title: "Expérience d'enseignement", description: "Instructeur de tennis parascolaire au lycée (2008-2009)" },
        { title: "Tous niveaux", description: "Coaching disponible pour débutants et joueurs avancés" }
      ],
      cta: "Voir les vidéos de tennis"
    },
    ski: {
      title: "Ski",
      subtitle: "Maîtrisez les pistes",
      description: "De votre première fois sur la neige à la perfection des techniques avancées, je propose une instruction experte dans les belles stations de ski du Québec.",
      highlights: [
        { title: "Instructeur senior", description: "Actuellement instructeur senior de ski dans une station du Québec" },
        { title: "Entraîneur universitaire", description: "Entraîneur technique de l'équipe de ski universitaire (2004-2005)" },
        { title: "Directeur de camp", description: "Instructeur de camp de ski universitaire (2004-2008)" }
      ],
      cta: "Voir les cours de ski"
    },
    gallery: { title: "Galerie", subtitle: "Action sur le court et les pistes", filter_all: "Tout", filter_tennis: "Tennis", filter_ski: "Ski", filter_videos: "Vidéos" },
    contact: {
      title: "Contactez-moi",
      subtitle: "Prêt à commencer votre parcours?",
      description: "Contactez-moi pour réserver des cours ou poser des questions. Je suis là pour vous aider à atteindre vos objectifs sportifs.",
      form: { name: "Votre nom", email: "Votre courriel", message: "Votre message", submit: "Envoyer" },
      kakao_title: "KakaoTalk",
      kakao_description: "Scannez pour vous connecter sur KakaoTalk",
      qr_title: "Info cours de ski",
      qr_description: "Scannez pour les détails des cours de ski"
    },
    footer: { copyright: "Montreal Ski et Tennis. Tous droits réservés.", location: "Québec, Canada" }
  },
  ko: {
    nav: { about: "소개", tennis: "테니스", ski: "스키", gallery: "갤러리", contact: "연락처" },
    hero: { title: "몬트리올 스키 앤 테니스", subtitle: "퀘벡 전문 스포츠 강습", cta_primary: "레슨 예약", cta_secondary: "더 알아보기" },
    about: {
      title: "소개",
      subtitle: "공인 전문 강사",
      intro: "경북대학교 체육교육과 졸업 후 다년간의 전문 경력을 바탕으로, 모든 레슨에 전문성과 열정을 담아 지도합니다.",
      credentials: [
        { title: "학력", description: "경북대학교 사범대 체육교육과 졸업 (교육학 부전공)" },
        { title: "CPR 자격", description: "유효한 CPR 자격증 보유" },
        { title: "경력", description: "15년 이상의 코칭 및 강습 경력" }
      ]
    },
    philosophy: {
      title: "지도 철학",
      subtitle: "모든 레슨을 특별하게 만드는 것",
      points: [
        { title: "안전 최우선", description: "부상 예방을 위한 올바른 기술. CPR 자격 보유 강사가 수준별 맞춤 진도로 지도합니다." },
        { title: "배움의 즐거움", description: "모든 레슨은 즐거워야 합니다. 긍정적인 격려와 작은 성취의 축하로 동기를 유지합니다." },
        { title: "지속적인 발전", description: "체계적인 기술 향상과 영상 분석 피드백. 측정 가능한 목표로 성장을 확인하세요." },
        { title: "개인 맞춤 접근", description: "목표에 맞춘 맞춤형 훈련 계획. 취미든 경기든 학습 스타일에 맞게 지도합니다." },
        { title: "장기적 성장", description: "경기력 향상이든 평생 취미든 탄탄한 기초를 쌓습니다. 기술을 넘어선 멘토링을 제공합니다." }
      ]
    },
    tennis: {
      title: "테니스",
      subtitle: "초보자부터 챔피언까지",
      description: "처음 라켓을 잡는 분부터 경기력 향상을 원하는 분까지, 목표 달성을 위한 맞춤형 코칭을 제공합니다.",
      highlights: [
        { title: "대회 성적", description: "몬트리올 아시안컵 단식 & 복식 다수 우승" },
        { title: "지도 경력", description: "고등학교 방과후 테니스 교실 운영 (2008-2009)" },
        { title: "전 레벨", description: "초급부터 고급까지 모든 수준 지도 가능" }
      ],
      cta: "테니스 영상 보기"
    },
    ski: {
      title: "스키",
      subtitle: "슬로프를 정복하세요",
      description: "첫 스키부터 고급 기술까지, 퀘벡의 아름다운 스키장에서 전문 강습을 제공합니다.",
      highlights: [
        { title: "시니어 강사", description: "현재 퀘벡 스키장 시니어 강사로 근무 중" },
        { title: "대학 코치", description: "대학 스키팀 테크니컬 코치 (2004-2005)" },
        { title: "캠프 지도", description: "대학교 스키캠프 진행 (2004-2008)" }
      ],
      cta: "스키 코스 보기"
    },
    gallery: { title: "갤러리", subtitle: "코트와 슬로프 위의 액션", filter_all: "전체", filter_tennis: "테니스", filter_ski: "스키", filter_videos: "영상" },
    contact: {
      title: "연락처",
      subtitle: "시작할 준비가 되셨나요?",
      description: "레슨 예약이나 문의사항이 있으시면 연락 주세요. 운동 목표 달성을 도와드리겠습니다.",
      form: { name: "성함", email: "이메일", message: "문의 내용", submit: "보내기" },
      kakao_title: "카카오톡",
      kakao_description: "스캔하여 카카오톡으로 연결",
      qr_title: "스키 코스 정보",
      qr_description: "스캔하여 스키 코스 상세 정보 확인"
    },
    footer: { copyright: "몬트리올 스키 앤 테니스. All rights reserved.", location: "퀘벡, 캐나다" }
  }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'en';

// Current theme (dark is default)
let currentTheme = localStorage.getItem('theme') || 'dark';

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
  initTheme();
  initLanguage();
  initNavigation();
  initSmoothScroll();
  initHeaderScroll();
  initGalleryFilter();
  initLightbox();
  initAOS();
  setCurrentYear();
});

// Initialize Theme
function initTheme() {
  setTheme(currentTheme);

  // Theme toggle button click handler
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
}

// Set Theme
function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('theme', theme);

  // Apply theme to document
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

// Initialize Language
function initLanguage() {
  setLanguage(currentLang);

  // Language button click handlers
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      setLanguage(lang);
    });
  });
}

// Set Language
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const value = getNestedValue(translations[lang], key);

    if (value) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    }
  });
}

// Get nested object value by dot notation
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, part) => {
    if (acc === null || acc === undefined) return null;

    // Handle array index notation like "credentials.0.title"
    const match = part.match(/^(\d+)$/);
    if (match) {
      return acc[parseInt(match[1])];
    }

    return acc[part];
  }, obj);
}

// Mobile Navigation
function initNavigation() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        const headerHeight = document.querySelector('.site-header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.site-header');

  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// Gallery Filter
function initGalleryFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-full-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filter = this.dataset.filter;

      galleryItems.forEach(item => {
        if (filter === 'all') {
          item.classList.remove('hidden');
        } else if (filter === 'video') {
          item.classList.toggle('hidden', !item.classList.contains('video'));
        } else {
          item.classList.toggle('hidden', !item.classList.contains(filter));
        }
      });
    });
  });
}

// Initialize GLightbox
function initLightbox() {
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
}

// Initialize AOS (Animate On Scroll)
function initAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100
    });
  }
}

// Set Current Year in Footer
function setCurrentYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Form Submission (optional enhancement)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    const submitBtn = this.querySelector('.btn-submit');
    submitBtn.textContent = '...';
    submitBtn.disabled = true;
  });
}
