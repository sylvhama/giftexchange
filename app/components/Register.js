import Button from './shared/Button.js';

import css from './register.css';

const template = `
  <form class="register-form">
    <input class="input main-name" name="name" type="text" placeholder="Write your name" required />
    <label class="label">
      <input class="input input--checkbox spouse-checkbox" type="checkbox" name="spouse" value="yes" /> I came with my spouse.
    </label>
    <div class="spouse-registration spouse-registration--hidden">
      <select class="input spouse-selector">
        <option selected="selected" value="default">Select your spouse</option>
      </select>
      <p class="in-between">Or</p>
      <input class="input spouse-name" name="spousename" type="text" placeholder="Register his/her name too"/>
    </div>
    ${Button({caption:'Register'}, {type: 'submit'})}
  </form>
`;

const init = (myFirebase) => {
  //Get elements
  const registerForm = document.querySelector('.register-form'),
        spouseCheckbox = registerForm.querySelector('.spouse-checkbox'),
        spouseRegistration = registerForm.querySelector('.spouse-registration'),
        mainName = registerForm.querySelector('.main-name'),
        spouseSelector = registerForm.querySelector('.spouse-selector'),
        spouseName = registerForm.querySelector('.spouse-name'),
        submit = registerForm.querySelector('button[type=submit]'),
        today = new Date(),
        year = today.getFullYear();
  spouseCheckbox.addEventListener('change', function(event){
    spouseRegistration.classList.toggle('spouse-registration--hidden');
  });
  registerForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const promises = [];
    let spouse = '';
    submit.setAttribute("disabled", "");
    //If the spouse has been selected
    if(spouseSelector.value !== 'default') {
      const key = spouseSelector.value;
      spouse = spouseSelector.options[spouseSelector.selectedIndex].text;
      promises.push(Promise.resolve(myFirebase.updateParticipant(year, key, {name:spouse, spouse:mainName.value})));
    //Else if the spouse has been added manually    
    }else if(spouseName.value !== '') {
      spouse = spouseName.value;
      promises.push(Promise.resolve(myFirebase.addParticipant(year, {name:spouse, spouse:mainName.value})));
    }
    //We add the new person
    promises.push(Promise.resolve(myFirebase.addParticipant(year, {name:mainName.value, spouse: spouse})));
    //We execute all the promises
    Promise.all(promises)
    .then(() => {
      //Form reset
      mainName.value = '';
      spouseSelector.value = 'default';
      spouseName.value = '';
      spouseCheckbox.checked = false;
      spouseRegistration.classList.add('spouse-registration--hidden');
      submit.removeAttribute("disabled");
    })
    .catch((error) => {
      submit.removeAttribute("disabled");
      console.error(error);
      alert('An error occured, contact Mr. Smith!')
    });
  });
};

const updateList = (list) => {
  const spouseSelector = document.querySelector('.spouse-selector'),
        optionsLength = spouseSelector.options.length;
  //Reset options
  spouseSelector.innerHTML = '<option selected="selected" value="default">Select your spouse</option>';
  //If database is empty
  if(list === null) return false;
  Object.keys(list).map((key) => {
    //We only add people with no spouse to the select
    if(list[key].spouse === ''){
      const name = list[key].name,
            option = document.createElement('option');
      option.text = name;
      option.value = key;
      spouseSelector.add(option);
    }
  })
};

const Register = {
  template : template,
  init : (myFirebase) => init(myFirebase),
  updateList : (list) => updateList(list)
}

export default Register;
