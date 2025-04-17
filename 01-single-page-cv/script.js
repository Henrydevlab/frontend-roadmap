const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.body;
        const cvContainer = document.querySelector('.cv-container');
        const localStorageKey = 'theme-preference';

        const setTheme = (theme) => {
            if (theme === 'dark') {
                body.classList.add('dark-theme');
                cvContainer.classList.add('dark-theme');
                body.classList.remove('light-theme');
                cvContainer.classList.remove('light-theme');
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            } else {
                body.classList.add('light-theme');
                cvContainer.classList.add('light-theme');
                body.classList.remove('dark-theme');
                cvContainer.classList.remove('dark-theme');
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            localStorage.setItem(localStorageKey, theme);
        };

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = localStorage.getItem(localStorageKey);
            setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });

        // Check local storage on page load
        const storedTheme = localStorage.getItem(localStorageKey);
        if (storedTheme) {
            setTheme(storedTheme);
        } else {
            // Default to light theme if no preference is stored
            setTheme('light');
        }