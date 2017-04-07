import renderHeader from './components/shared/header.js';
import Register from './components/register.js';

import css from './style/app.css';

const app = document.querySelector('#app'),
      Header = renderHeader('Gift Exchange');

const addComponentsTemplate = (container, ...templates) => {
  container.innerHTML = '';
  templates.map((template) => container.insertAdjacentHTML('beforeEnd', template));
};

const addComponentsControllers = (...controllers) => {
  controllers.map((controller) => controller())
};

addComponentsTemplate(app, Header, Register.template);
addComponentsControllers(Register.controller);
