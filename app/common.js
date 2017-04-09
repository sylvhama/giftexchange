//Insert components in a HTML element
export function addComponentsTemplate(container, ...templates) {
  container.innerHTML = '';
  templates.map((template) => container.insertAdjacentHTML('beforeEnd', template));
};

export function getYear() {
  const today = new Date(),
        year = today.getFullYear();
  return year;  
}

//Used to sort an array of people by name
export function orderByName(a, b) {
  const nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
}
