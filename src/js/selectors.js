import { getInputElementChildren } from './helper';

//  element selection
const submitBtn = document.querySelector('#submitBtn');
const form = document.querySelector('#signup-form');

//  element value
let firstName = form.elements['name'];
let lastName = form.elements['last-name'];
let email = form.elements['email'];
let password = form.elements['password'];

const resetView = (input) => {
  const { child, icon, msg } = getInputElementChildren(input);
  input.classList.remove('show');
  msg.classList.remove('show');
  child.innerText = '';
  icon.classList.remove('show');
};

form.addEventListener('input', (e) => {
  resetView(form.elements[e.target.id]);
});

export { submitBtn, firstName, lastName, email, password };
