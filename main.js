const body = document.querySelector('html');

    var mode = 'dark';

    var styles = `
#___DARK_AUTO_API_THEME_SWITCHER_BTN___ {
  position: fixed;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 0.1rem;
  width: max-content;
  cursor: pointer;
  background: white;
  color: black;
}
* {
  transition: filter 0.2s ease;
}
html[data-theme='light'] {
  filter: invert(1) hue-rotate(180deg);
}
html[data-theme='light'] svg,
html[data-theme='light'] img,
html[data-theme='light'] canvas {
  filter: invert(1) hue-rotate(180deg);
}
`;

    var styleSheet = document.createElement('style');
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    class Theme {
      constructor() {
        if (body.dataset.theme) {
          console.log('THERE IS A DATASET');
          if (body.dataset.theme == 'light' || body.dataset.theme == 'dark') {
            mode = body.dataset.theme;
          }
        }

        const themeSwitcherToggle = document.createElement('button');
        themeSwitcherToggle.id = '___DARK_AUTO_API_THEME_SWITCHER_BTN___';
        themeSwitcherToggle.innerHTML = mode.toUpperCase();
        themeSwitcherToggle.addEventListener('click', this.toggleTheme);
        body.appendChild(themeSwitcherToggle);

        this.localStorageUpdate();
      }

      localStorageUpdate() {
        if (localStorage.getItem('__AUTO_THEME_API_THEME_SETTING') == null) {
          localStorage.setItem('__AUTO_THEME_API_THEME_SETTING', mode);
        } else {
          console.log(
            'Local Storage is',
            localStorage.getItem('__AUTO_THEME_API_THEME_SETTING')
          );
        }

        if (mode != localStorage.getItem('__AUTO_THEME_API_THEME_SETTING')) {
          this.toggleTheme();
        }
      }

      toggleTheme() {
        const themeSwitcherBtn = document.getElementById(
          '___DARK_AUTO_API_THEME_SWITCHER_BTN___'
        );
        body.dataset.theme = mode == 'dark' ? 'light' : 'dark';

        themeSwitcherBtn.innerHTML = mode == 'dark' ? 'LIGHT' : 'DARK';

        mode = mode == 'dark' ? 'light' : 'dark';
        localStorage.setItem('__AUTO_THEME_API_THEME_SETTING', mode);
      }
    }

    var theme = new Theme();
