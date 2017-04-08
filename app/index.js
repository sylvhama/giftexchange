import renderCard from './components/shared/Card.js';
import renderHeader from './components/shared/Header.js';
import Register from './components/Register.js';

const app = document.querySelector('#app'),
      Header = renderHeader({title:'Gift Exchange', colored:true}),
      HeaderRegisterCard = renderHeader({title:'Registration', heading:2}),
      RegisterCard = renderCard(Register.template, HeaderRegisterCard);

const addComponentsTemplate = (container, ...templates) => {
  container.innerHTML = '';
  templates.map((template) => container.insertAdjacentHTML('beforeEnd', template));
};

const startComponentsControllers = (...controllers) => {
  controllers.map((controller) => controller())
};

addComponentsTemplate(app, Header, RegisterCard);
startComponentsControllers(Register.controller);
