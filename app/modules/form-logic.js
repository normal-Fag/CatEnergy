const validateTextField = (event) => {
    let value = event.target.value;

    if (!value)
        event.target.classList.add('field__input--incorrect');
    else 
        event.target.classList.remove('field__input--incorrect');
}

const checkNumber = (number) => {
    return +number > 50 ? number.substring(0, number.length - 1) : number;
}

const validateNumberField  = (event) => {
    let input = event.target;
    let numbersValue = input.value.replace(/\D/g, '');

    numbersValue = checkNumber(numbersValue);

    if (!numbersValue)
        input.classList.add('field__input--incorrect');
    else 
        input.classList.remove('field__input--incorrect');
    
    input.value = numbersValue;
}

const filterKeyDownOnNumberInput = (event) => {
    return event.keyCode !== 69 && event.keyCode !== 189 && event.keyCode !== 187
}

export { validateTextField, validateNumberField, filterKeyDownOnNumberInput };