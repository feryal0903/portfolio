const themeSwitch = document.getElementById('theme-switch');
        const currentTheme = localStorage.getItem('theme');
      
        if (currentTheme) {
          document.body.classList.add(currentTheme);
      
          if (currentTheme === 'dark') {
            themeSwitch.checked = true;
          }
        }
      
        themeSwitch.addEventListener('change', function() {
          if (this.checked) {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
          } else {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
          }
        });
  