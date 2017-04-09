import myFirebase from './firebase.js';
import {addComponentsTemplate, getYear} from './common.js';

import renderCard from './components/shared/Card.js';
import renderHeader from './components/shared/Header.js';
import Register from './components/Register.js';
import List from './components/List.js';

const app = document.querySelector('#app'),
      Header = renderHeader({title:'Gift Exchange', colored:true}),
      HeaderRegisterCard = renderHeader({title:'Registration', heading:2}),
      HeaderListCard = renderHeader({title:'Participants', heading:2}),
      RegisterCard = renderCard(Register.template, HeaderRegisterCard),
      ListCard = renderCard(List.template, HeaderListCard),
      year = getYear();

myFirebase.signInAnonymously()
.then(() => {
  addComponentsTemplate(app, Header, RegisterCard, ListCard);
  Register.init(myFirebase, year);
  const callback = (snapshot) => { 
    const list = snapshot.val();
    Register.updateList(list);
    List.updateList(list);
  };
  myFirebase.listenToChanges(year, callback);
});

