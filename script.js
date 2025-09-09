//Motheo Nkadimeng
(function() {
    'use strict';

    const themeButton = document.getElementById('theme-button');
    let isDarkMode = false;

    function updateButtonState() {
        themeButton.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        themeButton.setAttribute('aria-pressed', isDarkMode);
    }

    function toggleTheme() {
        isDarkMode = !isDarkMode;
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        updateButtonState();
    }

    themeButton.setAttribute('aria-label', 'Toggle dark mode');
    updateButtonState();

    themeButton.addEventListener('click', toggleTheme);
})();
