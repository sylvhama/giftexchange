import Button from './shared/Button.js';

import css from './register.css';

const Register = {
  template : `
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
  `,
  controller : (myFirebase) => {
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
      const namesToAdd = [];
      let spouse = '';
      submit.setAttribute("disabled", "");
      namesToAdd.push(Promise.resolve(myFirebase.addParticipant(year, mainName.value)));
      if(spouseSelector.value !== 'default') spouse = spouseSelector.value;
      if(spouseName.value !== '') spouse = spouseName.value;
      if(spouse !== '') namesToAdd.push( Promise.resolve(myFirebase.addParticipant(year, spouse)));
      Promise.all(namesToAdd)
      .then(() => {
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
  }
}

export default Register;
