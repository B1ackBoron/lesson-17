/* eslint-disable default-case */
/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-undef */
console.log('Sample JavaScript #5 HW #17');

let container = null;
let prevIndicator = null;

function createContainer() {
  if (container !== null) {
    return;
  }
  el = document.createElement('div');
  el.setAttribute('id', 'carousel');
  el.setAttribute('class', 'carousel');

  document.querySelector('body').appendChild(el);
  container = document.querySelector('#carousel');
}

function createSlides(n) {
  slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for (i = 0; i < n; i++) {
    let slideItem = document.createElement('li');
    let slideLink = document.createElement('a');

    slideItem.setAttribute('class', i === 0 ? 'slides__item active' : 'slides__item');
    slideLink.setAttribute('href', '#');
    slideItem.appendChild(slideLink);
    slidesContainer.appendChild(slideItem);
  }
  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for (i = 0; i < n; i++) {
    let indicatorsItem = document.createElement('span');

    indicatorsItem.setAttribute('class', i === 0 ? 'indicators__item active' : 'indicators__item');
    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);
  }

  container.appendChild(indicatorsContainer);
}

function createControls() {
  controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');
  const defItemClass = 'controls__item';
  const defIconClass = 'fas';

  for (i = 0; i < 3; i++) {
    let controlItem = document.createElement('div');
    let controlIcon = document.createElement('i');

    switch (i) {
      case 0:
        controlItem.setAttribute('class', `${defItemClass} controls__prev`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-left`);
        break;
      case 1:
        controlItem.setAttribute('class', `${defItemClass} controls__next`);
        controlIcon.setAttribute('class', `${defIconClass} fa-chevron-right`);
        break;
      case 2:
        controlItem.setAttribute('class', `${defItemClass} controls__pause`);
        controlIcon.setAttribute('class', `${defIconClass} fa-play`);
        break;
    }
    controlItem.appendChild(controlIcon);
    controlsContainer.appendChild(controlItem);
  }
  container.appendChild(controlsContainer);
}

function createStyle() {
  styleContainer = document.createElement('style');
  let styleCode = `
  .controls, .slides {position: relative;}
  .indicators {display: flex;}
  .indicators__item {
    display: block;
    width: 20px;
    height: 20px;
    background-color: gray;
    margin: 5px;
    border-radius: 10px;
  }`;

  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer);
}

function indicatorsHandler(event) {
  let target = event.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';
    if (prevIndicator !== null) prevIndicator.removeAttribute('style');
    prevIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
  // ваш код здесь
  // createContainer();
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener();
}

createCarousel(4);
