window.addEventListener('DOMContentLoaded', init);

import {createMap} from './modules/map.js';
import {handleInputChange} from './modules/range-input-logic.js';

function init() {
    document.querySelector('.header__burger').addEventListener('click', onBurgerClick);

    document.querySelector('.comparison__input').addEventListener('input', handleInputChange);

    ymaps.ready(createMap)
}

const onBurgerClick = () => {
    document.querySelector('.header').classList.toggle('header--active');
}