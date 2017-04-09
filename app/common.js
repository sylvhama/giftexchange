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
