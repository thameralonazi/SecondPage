// Language Translations
const translations = {
    en: {
        // Navbar
        home: "Home",
        about: "About",
        education: "Education / Experience",
        skill: "Skill",
        instagram: "Instagram",
        blog: "Blog",
        hireMe: "Hire Me",
        
        // Home Section
        homeTitle: "I'm a Professional IT Specialist",
        homeSubtitle: "Experienced in Web Development, Cloud Computing & Cybersecurity",
        
        // About Section
        aboutTitle: "About Me",
        aboutDescription: "I'm a passionate IT professional with expertise in full-stack development, cloud architecture, and information security. I love solving complex problems and staying updated with the latest technologies.",
        
        // Education Section
        educationTitle: "Education & Experience",
        
        // Skills Section
        skillsTitle: "My Skills",
        
        // Blog Section
        blogTitle: "Technical Articles",
        readMore: "Read More",
        readFullNews: "Read Full News",
        published: "Published",
        readingTime: "Reading Time",
        minutes: "minutes",
        
        // Footer
        followMe: "Follow Me",
        copyright: "© 2026 Thamer Alonazi. All Rights Reserved.",
        
        // Article Titles
        webDevTitle: "Getting Started with Web Development",
        cybersecurityTitle: "Best Practices in Cybersecurity",
        projectMgmtTitle: "Project Management Tips",
        aiTitle: "Introduction to Artificial Intelligence",
        cloudTitle: "Cloud Computing Essentials",
        databaseTitle: "Database Design and Optimization",
        mobileTitle: "Mobile App Development Trends",
        networkTitle: "Network Security Fundamentals",
        devopsTitle: "DevOps and Continuous Integration",
        privacyTitle: "Data Privacy and GDPR Compliance",
        bigdataTitle: "Big Data Analytics and Insights",
        rpaTitle: "Automation and RPA Solutions",
        dailyTitle: "OpenAI vs DeepSeek: The Distillation Controversy",
    },
    ar: {
        // Navbar
        home: "الرئيسية",
        about: "عني",
        education: "التعليم / الخبرة",
        skill: "المهارات",
        instagram: "إنستجرام",
        blog: "المدونة",
        hireMe: "استأجرني",
        
        // Home Section
        homeTitle: "أنا متخصص تقنية معلومات محترف",
        homeSubtitle: "خبرة في تطوير الويب والحوسبة السحابية وأمن المعلومات",
        
        // About Section
        aboutTitle: "عني",
        aboutDescription: "أنا متخصص تقنية معلومات متحمس مع خبرة في تطوير التطبيقات الكاملة وعمارة السحابة وأمن المعلومات. أحب حل المشاكل المعقدة والبقاء على اطلاع بأحدث التقنيات.",
        
        // Education Section
        educationTitle: "التعليم والخبرة",
        
        // Skills Section
        skillsTitle: "مهاراتي",
        
        // Blog Section
        blogTitle: "المقالات التقنية",
        readMore: "اقرأ المزيد",
        readFullNews: "اقرأ الخبر كاملاً",
        published: "تاريخ النشر",
        readingTime: "وقت القراءة",
        minutes: "دقائق",
        
        // Footer
        followMe: "تابعني",
        copyright: "© 2026 ثامر العنزي. جميع الحقوق محفوظة.",
        
        // Article Titles
        webDevTitle: "البدء مع تطوير الويب",
        cybersecurityTitle: "أفضل الممارسات في الأمن السيبراني",
        projectMgmtTitle: "نصائح إدارة المشاريع",
        aiTitle: "مقدمة في الذكاء الاصطناعي",
        cloudTitle: "أساسيات الحوسبة السحابية",
        databaseTitle: "تصميم وتحسين قواعد البيانات",
        mobileTitle: "اتجاهات تطوير تطبيقات الجوال",
        networkTitle: "أساسيات أمن الشبكات",
        devopsTitle: "DevOps والتكامل المستمر",
        privacyTitle: "خصوصية البيانات والامتثال لـ GDPR",
        bigdataTitle: "تحليل البيانات الضخمة والرؤى",
        rpaTitle: "حلول الأتمتة و RPA",
        dailyTitle: "OpenAI ضد DeepSeek: جدل التقطير",
    }
};

// Function to get current language
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'en';
}

// Function to set language
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyLanguage(lang);
}

// Function to apply language to the page
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Apply RTL for Arabic
    const htmlElement = document.documentElement;
    if (lang === 'ar') {
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.setAttribute('lang', 'ar');
        document.body.classList.add('rtl-mode');
    } else {
        htmlElement.setAttribute('dir', 'ltr');
        htmlElement.setAttribute('lang', 'en');
        document.body.classList.remove('rtl-mode');
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    applyLanguage(currentLang);
    
    // Update language toggle button
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'en' ? 'العربية' : 'English';
    }
});
