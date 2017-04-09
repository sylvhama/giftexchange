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
  Object.keys(list).map((key) => {
    let spouse = '';
    if(list[key].spouse !== '') spouse = `<small>spouse: ${list[key].spouse}</small>`;
    template += `
      <tr class="table__row">
        <td class="table__col">
          ${list[key].name} ${spouse}
        </td>
        <td class="table__col">
          ${list[key].drawn} 
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
