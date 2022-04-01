let counterDisplayElem = document.querySelector('.counter-display');
let minoreElem = document.querySelector('.minore');
let maggioreElem = document.querySelector('.maggiore');
let resetElem = document.querySelector('.reset');
let count = 0;

updateDisplay();

maggioreElem.addEventListener("click", () => {
    count++;
    updateDisplay();
});


minoreElem.addEventListener("click", () => {
    if (count > 0) count--;
    updateDisplay();
});

resetElem.addEventListener("click", () => {
    count = 0;
    updateDisplay();
})
function updateDisplay() {
    counterDisplayElem.innerHTML = count;
};