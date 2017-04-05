import getHeader from './components/header.js';

import css from './style/app.css';

const app = document.querySelector('#app'),
      header = getHeader('Gift Exchange');

const render = (container, ...components) => {
  container.innerHTML = '';
  components.map((component) => container.insertAdjacentHTML('afterbegin', component));
}

render(app, header);
