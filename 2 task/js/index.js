let countries = ['Австрия', 'Бельгия', 'Болгария', 'Великобритания', 'Венгрия', 'Германия', 'Греция', 'Дания', 'Ирландия', 'Испания', 'Италия', 'Кипр', 'Латвия', 'Литва', 'Люксембург', 'Мальта', 'Нидерланды', 'Польша', 'Португалия', 'Румыния', 'Словакия', 'Словения', 'Финляндия', 'Франция', 'Хорватия', 'Чехия', 'Швеция', 'Эстония'];

function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function checkValidation () {
    let input = document.getElementById('country');
    let message = document.getElementById('message');

    switch (true) {
        case input.value === '':
            message.innerText = 'Пожалуйста, заполните поле. В поле должно быть минимум 4 символа';
            message.style.cssText = 'color: #8B0000; font-size:24px';
            break;
        case (Number(input.value)):
            message.innerText = 'Вы ввели цифры';
            message.style.cssText = 'color: orange; font-size:18px';
            break;
        case (input.value.length <= 4):
            message.innerText = 'Вы ввели меньше 4 букв';
            message.style.cssText = 'color: red; font-size:28px';
            break;
        default:
            let finalMessage = 'Такой страны нет в Евросоюзе';
            let styleMessageText = 'color: #B22222; font-size:28px';
            let ucFirstValue = ucFirst(input.value);
            countries.forEach( (name) => {
                if ( ucFirstValue === name ) {
                    finalMessage = ucFirstValue + ' есть в Евросоюзе';
                    styleMessageText = 'color: green; font-size:32px'
                }
            })
            message.innerText = finalMessage;
            message.style.cssText = styleMessageText;
    }
}
