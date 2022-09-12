window.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('.header__burger').addEventListener('click', onBurgerClick);

    document.querySelector('.comparison__input').addEventListener('input', handleInputChange);

    ymaps.ready(createMap)
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

const createMap = () => {
    let center = [59.93863506417266,30.323117499999945];
    let map = new ymaps.Map('map', {
        center: center,
        zoom: 17,
    });

    let placemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'public/images/map-pin.png',
        iconImageSize: [53, 53],
        iconImageOffset: [-15, -40],
    });

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
}