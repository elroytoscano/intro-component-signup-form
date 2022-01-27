import {
  EMAIL_INCORRECT,
  EMAIL_REQUIRED,
  LAST_NAME_REQUIRED,
  NAME_REQUIRED,
  PASSWORD_REQUIRED,
} from './constants';
import CustomError from './CustomError';
import { getInputElementChildren } from './helper';

export const showMessage = (input, message) => {
  const { child, icon, msg } = getInputElementChildren(input);
  console.log(message);
  child.innerText = message;
  console.log(child);
  input.classList.add('show');
  msg.classList.add('show');
  icon.classList.add('show');
};

export const checkValue = (input, message) => {
  if (input.value.trim() === '' || input.value === '') {
    throw new CustomError(message, input);
  }
};

export const firstNameValidation = (input) => {
  checkValue(input, NAME_REQUIRED);
};

export const lastNameValidation = (input) => {
  checkValue(input, LAST_NAME_REQUIRED);
};

export const emailValidation = (input) => {
  checkValue(input, EMAIL_REQUIRED);

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegex.test(input.value)) {
    console.log('incorrect');
    throw new CustomError(EMAIL_INCORRECT, input);
  }
};

export const passwordValidation = (input) => {
  checkValue(input, PASSWORD_REQUIRED);
};
