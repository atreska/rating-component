## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

Build out an interactive rating component which users can select and send a number rating. Once the rating is selected and submitted, the user will get a thank you card confirmation.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./Rating%20Card%20State.png)
![](./Hover%20%26%20Focus%20State.png)
![](./Thank%20You%20Card%20State.png)


### Links

- Solution URL: [Solution URL](https://github.com/atreska/rating-component)
- Live Site URL: [Live Site URL](https://atreska.github.io/rating-component/)


### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

How to use radio buttons properly so that only one button can be selected at a time, and to add an event listener to each button using the buttons name value.

Also, I was having an issue when displaying the the thank you state. The background of my span element had more whitespace/padding once I displayed the card using display "block". After some research I found out that using the display "block flex" set the background to its original flex properties. 

```js
function submitRating(e) {
    e.preventDefault();
    let selectionValue = '';

    for (let i = 0; i < radioButtonValue.length; i++) {
        if (radioButtonValue[i].checked) {
            selectionValue = radioButtonValue[i].value;
        }
    }
    span.textContent = selectionValue;
    ratingComponent.style.display = 'none';
    thankYouState.style.display = 'block flex';
}
```


### Useful resources

- [MDN Radio Buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) - This helped me with the radio buttons used for this project.


## Author

- GitHub - [Profile](https://github.com/atreska)
- Frontend Mentor - [@atreska](https://www.frontendmentor.io/profile/atreska)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

Build out an interactive rating component which users can select and send a number rating. Once the rating is selected and submitted, the user will get a thank you card confirmation.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./Rating%20Card%20State.png)
![](./Hover%20%26%20Focus%20State.png)
![](./Thank%20You%20Card%20State.png)


### Links

- Solution URL: [Solution URL](https://github.com/atreska/rating-component)
- Live Site URL: [Live Site URL](https://atreska.github.io/rating-component/)


### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

How to use radio buttons properly so that only one button can be selected at a time, and to add an event listener to each button using the buttons name value.

Also, I was having an issue when displaying the the thank you state. The background of my span element had more whitespace/padding once I displayed the card using display "block". After some research I found out that using the display "block flex" set the background to its original flex properties. 

```js
function submitRating(e) {
    e.preventDefault();
    let selectionValue = '';

    for (let i = 0; i < radioButtonValue.length; i++) {
        if (radioButtonValue[i].checked) {
            selectionValue = radioButtonValue[i].value;
        }
    }
    span.textContent = selectionValue;
    ratingComponent.style.display = 'none';
    thankYouState.style.display = 'block flex';
}
```


### Useful resources

- [MDN Radio Buttons](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio) - This helped me with the radio buttons used for this project.


## Author

- GitHub - [Profile](https://github.com/atreska)
- Frontend Mentor - [@atreska](https://www.frontendmentor.io/profile/atreska)

