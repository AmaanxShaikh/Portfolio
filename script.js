// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// ── Language Toggle ──
const translations = {
    de: {
        'nav.profile': 'Profil',
        'nav.skills': 'Fähigkeiten',
        'nav.projects': 'Projekte',
        'nav.resume': 'Lebenslauf',
        'nav.contact': 'Kontakt',
        'hero.greeting': 'Hallo,',
        'hero.name': 'Ich bin Mohammed Amaan.',
        'hero.desc1': 'Angehender Data Scientist & ML Engineer.',
        'hero.desc2': 'Interessiert an Machine Learning, AI und Business Intelligence.',
        'hero.desc3': 'Masterstudent an der OvGU Magdeburg, Deutschland.',
        'hero.resumeLink': 'Lebenslauf ansehen',
        'indicator.skills': 'FÄHIGKEITEN',
        'indicator.projects': 'PROJEKTE',
        'skills.title': 'Fähigkeiten',
        'skills.subtitle': 'Technologien & Werkzeuge',
        'skills.languages': 'Programmiersprachen',
        'skills.frameworks': 'Frameworks & Libraries',
        'skills.datascience': 'Data Science',
        'skills.tools': 'Tools & Plattformen',
        'projects.title': 'Projekte',
        'projects.subtitle': 'Machine Learning & Data Analytics Arbeiten',
        'projects.viewGithub': 'Auf GitHub ansehen',
        'projects.project1.title': 'Kreditausfall-Risikobewertung',
        'projects.project1.desc': 'Kreditgenehmigungsvorhersage mit XGBoost und 89,34% F1-Score. Mit SHAP-Erklärbarkeit, AUC-ROC von 0,92 und Weight of Evidence Analyse.',
        'projects.project2.title': 'Kreditkarten-Kundensegmentierung',
        'projects.project2.desc': 'Kundensegmentierung mit K-Means und Ellbogen-Methode auf Kaggle-Kreditkartendaten. 5 Cluster identifiziert für gezielte Kundenbindungsstrategien.',
        'projects.project3.title': 'Gesundheitswesen Abrechnungs- & Betrugserkennung Dashboard',
        'projects.project3.desc': 'Power BI Dashboard zur Analyse von Gesundheitsabrechnungen und Identifizierung betrügerischer Aktivitäten mit interaktiven Diagrammen, Filtern und Compliance-Überwachung.',
        'projects.project4.title': 'ANN Bank Churn Vorhersage',
        'projects.project4.desc': 'Deep Learning Modell zur Vorhersage von Kundenabwanderung bei Banken mit TensorFlow 2.0 und Keras. Feature Engineering und Ausreißerbehandlung für optimale Genauigkeit.',
        'projects.project5.title': 'Mumbai Immobilienpreis Vorhersage',
        'projects.project5.desc': 'ML-Regressionsmodell zur Vorhersage von Immobilienpreisen mit XGBRegressor und 83% Genauigkeit. Dimensionsreduktion und Feature-Selektion für optimale Ergebnisse.',
        'projects.project6.title': 'Krankenversicherungskosten Vorhersage',
        'projects.project6.desc': 'Lineare Regression zur Vorhersage von Versicherungskosten mit R²-Wert von 0.74. Umfassende Datenanalyse und Visualisierung mit Seaborn und Matplotlib.',
        'resume.title': 'Lebenslauf',
        'resume.subtitle': 'Eine Zusammenfassung meiner Erfahrung, Fähigkeiten und Ausbildung.',
        'resume.download': 'Lebenslauf herunterladen',
        'contact.title': 'Lass uns zusammenarbeiten',
        'contact.description': 'Melden Sie sich gerne, wenn Sie zusammenarbeiten, Ideen besprechen oder sich vernetzen möchten. Ich interessiere mich für Werkstudentenstellen im Bereich Machine Learning, Data Analytics, KI und forschungsorientierte Projekte.',
        'contact.footer': '© 2026 Mohammed Amaan Shaikh. Alle Rechte vorbehalten.'
    },
    en: {
        'nav.profile': 'Profile',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.resume': 'Resume',
        'nav.contact': 'Contact',
        'hero.greeting': 'Hello,',
        'hero.name': "I'm Mohammed Amaan.",
        'hero.desc1': 'An Aspiring Data Scientist & ML Engineer.',
        'hero.desc2': 'Interested in machine learning, AI, and business intelligence.',
        'hero.desc3': "Master's student at OvGU Magdeburg, Germany.",
        'hero.resumeLink': 'Get My Resume',
        'indicator.skills': 'SKILLS',
        'indicator.projects': 'PROJECTS',
        'skills.title': 'Skills',
        'skills.subtitle': 'Technologies & Tools',
        'skills.languages': 'Programming Languages',
        'skills.frameworks': 'Frameworks & Libraries',
        'skills.datascience': 'Data Science',
        'skills.tools': 'Tools & Platforms',
        'projects.title': 'Projects',
        'projects.subtitle': 'Machine learning & data analytics work',
        'projects.viewGithub': 'View on GitHub',
        'projects.project1.title': 'Credit Default Risk Assessment',
        'projects.project1.desc': 'Loan approval prediction using XGBoost with 89.34% F1-score. Features SHAP explainability, AUC-ROC of 0.92, and Weight of Evidence analysis.',
        'projects.project2.title': 'Credit Card Customer Segmentation',
        'projects.project2.desc': 'Customer segmentation using K-Means and Elbow Method on Kaggle credit card data. Identified 5 clusters to drive targeted retention strategies.',
        'projects.project3.title': 'HealthCare Claims & Fraud Dashboard',
        'projects.project3.desc': 'Power BI dashboard analyzing healthcare claims to identify fraudulent activities with interactive charts, filters, and compliance monitoring insights.',
        'projects.project4.title': 'ANN Bank Churn Prediction',
        'projects.project4.desc': 'Deep Learning model to predict bank customer churn using TensorFlow 2.0 and Keras. Feature engineering and outlier handling for optimal accuracy.',
        'projects.project5.title': 'Mumbai House Price Prediction',
        'projects.project5.desc': 'ML regression model for house price prediction using XGBRegressor with 83% accuracy. Dimensionality reduction and feature selection for optimal results.',
        'projects.project6.title': 'Medical Insurance Cost Prediction',
        'projects.project6.desc': 'Linear Regression for insurance cost prediction with R² value of 0.74. Comprehensive data analysis and visualization with Seaborn and Matplotlib.',
        'resume.title': 'Resume',
        'resume.subtitle': 'A summary of my experience, skills, and education.',
        'resume.download': 'Download Resume',
        'contact.title': "Let's work together",
        'contact.description': "Feel free to reach out if you'd like to collaborate, discuss ideas, or connect. I'm interested in Workstudent opportunities related to machine learning, data analytics, AI, and research-driven projects.",
        'contact.footer': '© 2026 Mohammed Amaan Shaikh. All rights reserved.'
    }
};

// Default language is German
let currentLang = localStorage.getItem('lang') || 'de';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update resume PDF links
    const resumeFile = lang === 'de' ? 'amaanresume-de.pdf' : 'amaanresume-en.pdf';
    const downloadName = lang === 'de' ? 'Amaan_Lebenslauf.pdf' : 'Amaan_Resume.pdf';
    const resumeDownload = document.getElementById('resumeDownload');
    const resumePreview = document.getElementById('resumePreview');

    if (resumeDownload) {
        resumeDownload.href = resumeFile;
        resumeDownload.download = downloadName;
    }
    if (resumePreview) {
        resumePreview.src = `${resumeFile}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`;
    }

    // Update macOS window filename
    const macosFilename = document.getElementById('macosFilename');
    if (macosFilename) {
        macosFilename.textContent = lang === 'de' ? 'resume-de.pdf' : 'resume-en.pdf';
    }

    // Update active state on toggle
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

// Initialize language on page load
setLanguage(currentLang);

// Language toggle click handlers
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        if (lang !== currentLang) {
            setLanguage(lang);
        }
    });
});

// ── Check if mobile ──
function isMobile() {
    return window.innerWidth <= 992;
}

// ── Fullpage Scroll (Desktop only) ──
const wrapper = document.querySelector('.fullpage-wrapper');
const fpSections = wrapper.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
let currentIndex = 0;
let isScrolling = false;
const totalSections = fpSections.length;

function goToSection(index) {
    if (isMobile()) return; // Don't use fullpage on mobile
    if (index < 0 || index >= totalSections || isScrolling) return;
    isScrolling = true;
    currentIndex = index;
    wrapper.style.transform = `translateY(-${currentIndex * 100}vh)`;

    // Update active nav
    const sectionId = fpSections[currentIndex].getAttribute('id');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });

    // Trigger animations for the current section
    animateSectionElements(currentIndex);

    setTimeout(() => {
        isScrolling = false;
    }, 900);
}

// Wheel event (Desktop only)
window.addEventListener('wheel', (e) => {
    if (isMobile()) return; // Allow normal scroll on mobile
    e.preventDefault();
    if (isScrolling) return;

    if (e.deltaY > 0) {
        goToSection(currentIndex + 1);
    } else {
        goToSection(currentIndex - 1);
    }
}, { passive: false });

// Keyboard navigation (Desktop only)
window.addEventListener('keydown', (e) => {
    if (isMobile()) return;
    if (isScrolling) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goToSection(currentIndex + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSection(currentIndex - 1);
    } else if (e.key === 'Home') {
        e.preventDefault();
        goToSection(0);
    } else if (e.key === 'End') {
        e.preventDefault();
        goToSection(totalSections - 1);
    }
});

// Nav link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (isMobile()) {
            // On mobile, use smooth scroll
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // On desktop, use fullpage scroll
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetIndex = Array.from(fpSections).findIndex(s => s.id === targetId);
            if (targetIndex !== -1) {
                goToSection(targetIndex);
            }
        }
    });
});

// Handle all anchor links with #hash
document.querySelectorAll('a[href^="#"]').forEach(link => {
    if (link.classList.contains('nav-link')) return;
    link.addEventListener('click', (e) => {
        if (isMobile()) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetIndex = Array.from(fpSections).findIndex(s => s.id === targetId);
            if (targetIndex !== -1) {
                goToSection(targetIndex);
            }
        }
    });
});

// Section indicator click
const sectionIndicator = document.querySelector('.section-indicator');
if (sectionIndicator) {
    sectionIndicator.style.cursor = 'pointer';
    sectionIndicator.addEventListener('click', () => {
        if (!isMobile()) {
            goToSection(currentIndex + 1);
        }
    });
}

// ── Section animations ──
function animateSectionElements(index) {
    const section = fpSections[index];
    const elements = section.querySelectorAll('.project-card, .section-header, .contact-content, .resume-container, .skills-container, .skill-category');

    elements.forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${i * 0.1}s`;

        requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    });
}

// Animate first section on load
animateSectionElements(0);

// ── Handle resize ──
let wasDesktop = !isMobile();
window.addEventListener('resize', () => {
    const isNowMobile = isMobile();

    if (wasDesktop && isNowMobile) {
        // Switched to mobile - reset transform
        wrapper.style.transform = '';
        currentIndex = 0;
    } else if (!wasDesktop && !isNowMobile) {
        // Switched to desktop - go to first section
        goToSection(0);
    }

    wasDesktop = !isNowMobile;
});

// ── Custom cursor (Desktop only) ──
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 1px solid var(--color-text);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.15s ease, opacity 0.15s ease;
        opacity: 0;
    }
    .custom-cursor.active {
        transform: scale(2);
        background: var(--color-text);
        opacity: 0.1;
    }
    @media (max-width: 992px) {
        .custom-cursor { display: none; }
    }
`;
document.head.appendChild(cursorStyle);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.opacity = '1';
});

document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
});

document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Page visibility handling
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = 'Come back! 😡';
    } else {
        document.title = 'Portfolio | Mohammed Amaan - Data Scientist';
    }
});
