(function() {
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'zh';

    function switchLanguage(lang) {
        const elements = document.querySelectorAll('[data-zh][data-en]');
        elements.forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        langBtn.textContent = lang === 'zh' ? 'EN' : '中文';
        currentLang = lang;
        localStorage.setItem('preferred-lang', lang);
    }

    const savedLang = localStorage.getItem('preferred-lang');
    if (savedLang) {
        currentLang = savedLang;
        switchLanguage(savedLang);
    }

    langBtn.addEventListener('click', function() {
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        switchLanguage(newLang);
    });
})();
