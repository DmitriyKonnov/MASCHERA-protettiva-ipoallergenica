let buttonCount = document.querySelector('#buttonCount');
let numCount = document.querySelector('#numCount');
let cell = numCount.innerHTML;

buttonCount.onclick = () => {
    cell++;
    numCount.innerHTML = cell;
}