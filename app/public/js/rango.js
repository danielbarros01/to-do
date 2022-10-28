const rangeLabel = document.querySelector('.custom-range-slider');
const rangeInput = rangeLabel.children[0];
const thumbWidth = 6;

rangeLabel.insertAdjacentHTML(
  'beforeend', 
  `<span class="bubble"></span>`
);

const rangeBubble = rangeLabel.children[1];

positionBubble(rangeBubble, rangeInput)

function positionBubble(bubbleElement, anchorElement) {
  const {min, max, value, offsetWidth} = anchorElement;
  const total = Number(max) - Number(min);
  const perc = (Number(value) - Number(min)) / total;
  const offset = (thumbWidth/2) - (thumbWidth * perc);
  
  bubbleElement.style.left = `calc(${perc * 100}% + ${offset}px)`;
  
  if(value==1){
     bubbleElement.textContent = "BAJA";
  }
  if(value==2){
     bubbleElement.textContent = "MEDIA";
  }
  if(value==3){
     bubbleElement.textContent = "ALTA";
  }
  
 
}

export function rango(){
    rangeInput.addEventListener('input', (e) => positionBubble(rangeBubble, e.target))
}
