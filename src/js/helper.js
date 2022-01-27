const getInputElementChildren = (input) => {
  const msg = input.parentNode.querySelector('.validation-text');
  const child = msg.querySelector('.text-content');
  const icon = input.parentNode.querySelector('.validation-icon');
  return { msg, child, icon };
};

export { getInputElementChildren };
