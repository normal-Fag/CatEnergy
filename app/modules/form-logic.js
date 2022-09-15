const validateTextField = (event) => {
    let field = event.target;
    let value = field.value;

    if (!value)
        field.classList.add('field__input--incorrect');
    else 
        field.classList.remove('field__input--incorrect');
}

const validateNumberField  = (event) => {
    let input = event.target;
    let numbersValue = input.value.replace(/\D/g, '');

    if (!input.value)
        input.classList.add('field__input--incorrect');
    else 
        input.classList.remove('field__input--incorrect');
    
    input.value = numbersValue;
}

export { validateTextField, validateNumberField };