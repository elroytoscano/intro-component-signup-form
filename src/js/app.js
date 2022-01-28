import { email, firstName, lastName, password, submitBtn } from './selectors';
import {
  emailValidation,
  firstNameValidation,
  lastNameValidation,
  passwordValidation,
  showMessage,
} from './validators';
import '../styles/main.scss';

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  try {
    firstNameValidation(firstName);
    lastNameValidation(lastName);
    emailValidation(email);
    passwordValidation(password);
    alert('Congratulations! Your trial period has begun!');
  } catch (error) {
    showMessage(error.input, error.message);
  }
});
