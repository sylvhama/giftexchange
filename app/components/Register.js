const Register = {
  template : `
    <form class="register-form">
      <input class="input" name="name" type="text" placeholder="Write your name" required />
      <label class="label">
        <input class="input" type="checkbox" name="spouse" value="yes" /> I came with my spouse.
      </label>
      <div hidden class="spouse-registration">
        <select class="input spouse-selector">
          <option selected="selected">Select your spouse</option>
        </select>
        <p>Or</p>
        <input class="input" name="spousename" type="text" placeholder="Write his/her name here"/>
      </div>
      <button class="button" type="submit">Register</button>
    </form>
  `,
  controller : () => {
    console.log(document.querySelector('.register-form'));
  }
}

export default Register;
