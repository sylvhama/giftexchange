import {orderByName} from '../common.js';
import css from './list.css';

const template = `
  <table class="table">
    <thead>
      <tr class="table__row">
        <th class="table__col table__col--head">Name</th>
        <th class="table__col table__col--head">Has drawn</th>
      </tr>
    </thead>
    <tbody class="participant-list">
    </tbody>
  </table>
`;

const updateList = (list) => {
  const participantList = document.querySelector('.participant-list');
  let template = '';
  //If database is empty
  if(list === null) {
    participantList.innerHTML = '';
    return false;
  }
  const table = Object.keys(list).map((key) => { return {
    name: list[key].name,
    spouse: list[key].spouse,
    drawn: list[key].drawn
  }});
  table.sort(orderByName);
  table.map((person) => {
    let spouse = '';
    if(person.spouse !== '') spouse = `<small>spouse: ${person.spouse}</small>`;
    template += `
      <tr class="table__row">
        <td class="table__col">
          ${person.name} ${spouse}
        </td>
        <td class="table__col">
          ${person.drawn} 
        </td>
      </tr>
    `
  });
  participantList.innerHTML = template;
};

const List = {
  template: template,
  updateList: (list) => updateList(list)
}

export default List;
