import css from './register.css';

const Register = {
  template : `
    <form class="register-form">
      <input class="input" name="name" type="text" placeholder="Write your name" required />
      <label class="label">
        <input class="input input--checkbox spouse-checkbox" type="checkbox" name="spouse" value="yes" /> I came with my spouse.
      </label>
      <div class="spouse-registration spouse-registration--hidden">
        <select class="input spouse-selector">
          <option selected="selected">Select your spouse</option>
        </select>
        <p class="in-between">Or</p>
        <input class="input" name="spousename" type="text" placeholder="Write his/her name here"/>
      </div>
      <button class="button" type="submit">Register</button>
    </form>
  `,
  controller : () => {
    const spouseCheckbox = document.querySelector('.spouse-checkbox'),
          spouseRegistration = document.querySelector('.spouse-registration');
    spouseCheckbox.addEventListener('change', function(){
      console.log('fimxme');
    });
  }
}

export default Register;
