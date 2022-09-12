window.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('.header__burger').addEventListener('click', onBurgerClick);

    document.querySelector('.comparison__input').addEventListener('input', handleInputChange);
}

const onBurgerClick = () => {
    document.querySelector('.header').classList.toggle('header--active');
}

const handleInputChange = (e) => {
    console.log('Input');
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const value = target.value;

    target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';
    document.querySelector('.comparison__cat-wrap--before').style.width = 100 - value + '%';
}