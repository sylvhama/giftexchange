import myFirebase from './firebase.js';
import {addComponentsTemplate, getYear} from './common.js';

import renderCard from './components/shared/Card.js';
import renderHeader from './components/shared/Header.js';
import Admin from './components/Admin.js';

const app = document.querySelector('#app'),
      Header = renderHeader({title:'Admin - Gift Exchange', colored:true}),
      HeaderAdminCard = renderHeader({title:'What would you like to do?', heading:2}),
      AdminCard = renderCard(Admin.template, HeaderAdminCard),
      year = getYear();

myFirebase.signInAnonymously()
.then(() => {
  addComponentsTemplate(app, Header, AdminCard);
  Admin.init(myFirebase, year);
});
