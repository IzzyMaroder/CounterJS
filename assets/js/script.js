

let containerDiv = document.createElement('div');
let containerId = document.createAttribute('id');
containerId.value = 'container';
containerDiv.setAttributeNode(containerId);
document.body.appendChild(containerDiv);

let plusBtn = document.createElement('button');
let plusId = document.createAttribute('id');
plusId.value = 'plus';
plusBtn.setAttributeNode(plusId);
containerDiv.appendChild(plusBtn);
plusBtn.innerHTML = '+';



let counterValueDiv = document.createElement('div');
let counterValueId = document.createAttribute('id');
counterValueId.value = 'counter-value';
counterValueDiv.setAttributeNode(counterValueId);
containerDiv.appendChild(counterValueDiv);
counterValueDiv.innerHTML = 0;

let minusBtn = document.createElement('button');
let minusId = document.createAttribute('id');
minusId.value = 'minus';
minusBtn.setAttributeNode(minusId);
containerDiv.appendChild(minusBtn);
minusBtn.innerHTML = '-';


let resetBtn = document.createElement('button');
let resetId = document.createAttribute('id');
resetId.value = 'reset';
resetBtn.setAttributeNode(resetId);
document.body.appendChild(resetBtn);
resetBtn.innerHTML = 'Reset';


let increase = function() {
    counterValueDiv.innerHTML++;
}
plusBtn.addEventListener('click', increase);

let reduce = function() {
   if(counterValueDiv.innerHTML > 0){
    counterValueDiv.innerHTML--;
   }
}
minusBtn.addEventListener('click', reduce);

let restart = function() {
    counterValueDiv.innerHTML = 0;
}
resetBtn.addEventListener('click', restart);