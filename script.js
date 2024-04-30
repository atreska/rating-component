let button = document.querySelector('.submit');
let span = document.querySelector('.selection');
let radioButtonValue = document.getElementsByName('radio');


button.addEventListener('click', (e) => {
    e.preventDefault();
    let selectionValue = '';

    for (let i = 0; i < radioButtonValue.length; i++) {
        if (radioButtonValue[i].checked) {
            selectionValue = radioButtonValue[i].value;
        }
    }
    span.textContent = selectionValue;
})