const body = document.querySelector('html');

var mode = 'dark';

document.body.style += `
#___DARK_AUTO_API_THEME_SWITCHER_BTN___ {
  position: fixed;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 0.1rem;
  right: 1rem;
  top: 1rem;
  width: max-content;
  cursor: pointer;
}

* {
  transition: filter 0.2s ease;
}

html[data-theme='light'] {
  filter: invert(1) hue-rotate(180deg);
  color: black !important;
}

svg,
img,
canvas {
  filter: invert(1) hue-rotate(180deg);
}
`;

class Theme {
  constructor() {
    document.head.innerHTML +=
      '<link rel="stylesheet" href="./api/dark-mode.css" />';
    if (body.dataset.theme) {
      console.log('THERE IS A DATASET');
      if (body.dataset.theme == 'light' || body.dataset.theme == 'dark') {
        mode = body.dataset.theme;
      }
      const themeSwitcherToggle = document.createElement('button');
      themeSwitcherToggle.id = '___DARK_AUTO_API_THEME_SWITCHER_BTN___';
      themeSwitcherToggle.innerHTML = 'LIGHT';
      themeSwitcherToggle.addEventListener('click', this.toggleTheme);
      body.appendChild(themeSwitcherToggle);
    } else {
      console.log('THERE IS NO DATASET');
      const themeSwitcherToggle = document.createElement('button');
      themeSwitcherToggle.id = '___DARK_AUTO_API_THEME_SWITCHER_BTN___';
      themeSwitcherToggle.innerHTML = 'LIGHT';
      themeSwitcherToggle.addEventListener('click', this.toggleTheme);
      body.appendChild(themeSwitcherToggle);
      this.toggleTheme();
    }

    // this.toggleTheme();
  }

  localStorageUpdate() {
    if (localStorage.getItem('__AUTO_THEME_API_THEME_SETTING') == null) {
      localStorage.setItem('__AUTO_THEME_API_THEME_SETTING', 'dark');
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
    body.dataset.theme == 'dark'
      ? (body.dataset.theme = 'light')
      : (body.dataset.theme = 'dark');

    themeSwitcherBtn.innerHTML == 'LIGHT'
      ? (themeSwitcherBtn.innerHTML = 'DARK')
      : (themeSwitcherBtn.innerHTML = 'LIGHT');

    mode == 'dark'
      ? localStorage.setItem('__AUTO_THEME_API_THEME_SETTING', 'light')
      : localStorage.setItem('__AUTO_THEME_API_THEME_SETTING', 'dark');
  }
}

var theme = new Theme();

theme.localStorageUpdate();
