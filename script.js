/* eslint-disable  */
const inputField = document.getElementById('inputField');

display = (input) => {
  inputField.value += input;
};
clearDisplay = () => {
  inputField.value = '';
};
calculate = () => {
  inputField.value = eval(inputField.value);
};