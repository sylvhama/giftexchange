import {toArrayPeople} from '../common.js';
import Button from './shared/Button.js';

const template = `
  ${Button({caption:'Draw names'}, {id: 'draw-names'})}
  <br>
  ${Button({caption:'Reset participant list', color:'#F44336'}, {id: 'reset-list'})}
`;

const init = (myFirebase, year) => {
  const drawNames = document.querySelector('#draw-names'),
        resetList = document.querySelector('#reset-list');
  drawNames.addEventListener('click', function(event) {
    myFirebase.getList(year)
      .then((snapshot) => {
        const values = snapshot.val();
        //If database is empty
        if(values===null) return false;
        //Create an array of people containing everyone
        const everyone = toArrayPeople(values);
        //We make a second list where we ignore people who already drawn someone
        const notDrawn = everyone.filter((person) => person.drawn === '');
        //We draw a name for each person who never have drawn
        notDrawn.forEach((person) => {
          //We ignore the person him/herself, his/her spouse and people drawn by someone
          const filteredList = everyone
                              .filter((someone) => someone.name !== person.name)
                              .filter((someone) => someone.name !== person.spouse)
                              .filter((someone) => someone.hasBeenDrawn !== true);
          if(filteredList.length) {
            //We pick a random person
            const index = Math.floor(Math.random() * filteredList.length),
                  randomPerson = filteredList[index];
            //We save the name drawn by person
            person.drawn = randomPerson.name;
            //We tell that this name can not be drawn anymore
            randomPerson.hasBeenDrawn = true;
            //We don't keep the key
            const updatedPerson = {
              name: person.name,
              spouse: person.spouse,
              drawn: person.drawn,
              hasBeenDrawn: person.hasBeenDrawn
            }
            const updatedRandomPerson = {
              name: randomPerson.name,
              spouse: randomPerson.spouse,
              drawn: randomPerson.drawn,
              hasBeenDrawn: randomPerson.hasBeenDrawn
            }
            //We save both
            Promise.all([
              myFirebase.updateParticipant(year, person.key, updatedPerson),
              myFirebase.updateParticipant(year, randomPerson.key, updatedRandomPerson)
            ]);
          }
        });
      }) 
      .catch((error) => {
        console.error(error);
        alert('An error occured.');
      });
  });
  resetList.addEventListener('click', function(event) {
    if(confirm(`All data from ${year} will be removed, are you sure?`)) {
      myFirebase.resetList(year)
      .then(() => alert('The list has been reseted.'))
      .catch((error) => {
        console.error(error);
        alert('An error occured.');
      });
    }
  });
};

const Admin = {
  template: template,
  init: (myFirebase, year) => init(myFirebase, year)
}

export default Admin;
