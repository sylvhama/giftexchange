import myFirebase from './firebase.js';

import renderCard from './components/shared/Card.js';
import renderHeader from './components/shared/Header.js';
import Register from './components/Register.js';

myFirebase.signInAnonymously();

const app = document.querySelector('#app'),
      Header = renderHeader({title:'Gift Exchange', colored:true}),
      HeaderRegisterCard = renderHeader({title:'Registration', heading:2}),
      RegisterCard = renderCard(Register.template, HeaderRegisterCard);

const addComponentsTemplate = (container, ...templates) => {
  container.innerHTML = '';
  templates.map((template) => container.insertAdjacentHTML('beforeEnd', template));
};

addComponentsTemplate(app, Header, RegisterCard);
Register.controller(myFirebase);
