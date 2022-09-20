import { validateTextField, validateNumberField, filterKeyDownOnNumberInput } from './modules/form-logic.js';

window.addEventListener('DOMContentLoaded', init);

function init() {

    let textInputs = document.querySelectorAll('.field__input--text');
    for (let input of textInputs) {
        input.addEventListener('input', validateTextField);
    }

    let numberInputs = document.querySelectorAll('.field__input--numbers');
    for (let input of numberInputs) {
        input.addEventListener('input', validateNumberField);
    }
}