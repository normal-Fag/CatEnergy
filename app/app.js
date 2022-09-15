window.addEventListener('DOMContentLoaded', init);

import { createMap } from './modules/map.js';
import { handleInputChange } from './modules/range-input-logic.js';
import { validateTextField, validateNumberField } from './modules/form-logic.js';

function init() {
    document.querySelector('.header__burger').addEventListener('click', onBurgerClick);

    document.querySelector('.comparison__input')?.addEventListener('input', handleInputChange);

    document.getElementById('name')?.addEventListener('input', validateTextField);
    document.getElementById('weight')?.addEventListener('input', validateNumberField);
    
    ymaps.ready(createMap);
}

const onBurgerClick = () => {
    document.querySelector('.header').classList.toggle('header--active');
}