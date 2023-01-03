
// get dice icon element
const button = document.querySelector('.iconBackground');
const adviceNumber = document.querySelector('.adviceNumber');
const adviceMessage = document.querySelector('.advice');
const adviceField = document.querySelector('.adviceField');

const insertAdvice = (id, advice) => {
    adviceField.classList.add('active');
    adviceNumber.innerHTML = id;
    adviceMessage.innerHTML = advice;
}

const clickHandler = () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(slip => insertAdvice(slip.slip.id, slip.slip.advice))
};

button.addEventListener('click', clickHandler);