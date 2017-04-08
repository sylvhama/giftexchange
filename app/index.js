import myFirebase from './firebase.js';

import renderCard from './components/shared/Card.js';
import renderHeader from './components/shared/Header.js';
import Register from './components/Register.js';

const app = document.querySelector('#app'),
      Header = renderHeader({title:'Gift Exchange', colored:true}),
      HeaderRegisterCard = renderHeader({title:'Registration', heading:2}),
      RegisterCard = renderCard(Register.template, HeaderRegisterCard);

//Insert components in the DOM
const addComponentsTemplate = (container, ...templates) => {
  container.innerHTML = '';
  templates.map((template) => container.insertAdjacentHTML('beforeEnd', template));
};

myFirebase.signInAnonymously()
.then(() => {
  addComponentsTemplate(app, Header, RegisterCard);
  Register.init(myFirebase);
  const callback = (snapshot) => { 
    const list = snapshot.val();
    Register.updateList(list);
  };
  myFirebase.listenToChanges(callback);
});

