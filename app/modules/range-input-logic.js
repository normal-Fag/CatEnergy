const handleInputChange = (e) => {
    console.log('Input');
    let target = e.target;
    const min = target.min;
    const max = target.max;
    const value = target.value;

    target.style.backgroundSize = (value - min) * 100 / (max - min) + '% 100%';
    document.querySelector('.comparison__cat-wrap--before').style.width = 100 - value + '%';
}

export { handleInputChange };