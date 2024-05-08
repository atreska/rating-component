let submitButton = document.querySelector('.submit');
let span = document.querySelector('.selection');
let radioButton = document.querySelectorAll('input');
let radioButtonValue = document.getElementsByName('radio');
let thankYouState = document.querySelector('.thank-you-state');
let ratingComponent = document.querySelector('.rating-component');

for (btn of radioButton) {
    btn.addEventListener('click', (e) => {
        submitButton.disabled = false;
    })
}

function submitRating(e) {
    //prevent the page from loading to keep the selected value passed to
    //the span tag
    e.preventDefault();
    let selectionValue = '';

    for (let i = 0; i < radioButtonValue.length; i++) {
        if (radioButtonValue[i].checked) {
            selectionValue = radioButtonValue[i].value;
        }
    }
    span.textContent = selectionValue;
    ratingComponent.style.display = 'none';
    //used below instead of display block while making the thank-you-state visible
    //to avoid adding extra margin/whitespace
    thankYouState.style.display = 'block flex';
}

submitButton.addEventListener('click', submitRating);
