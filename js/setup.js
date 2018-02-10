'use strict';

var SIMILAR_WIZARD_QUANTITY = 4;

var wizardNames = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var wizardLastnames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var wizardCoatColorsForCustomize = wizardCoatColors.slice(0, wizardCoatColors.length - 1);

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var wizardEyesColorsForCustomize = wizardEyesColors.slice(0, wizardEyesColors.length - 1);

var setupSimilarElement = document.querySelector('.setup-similar');

var getUniqueRandomValueFromArray = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array.splice(randomIndex, 1);
};

var getRandomValueFromArray = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
};


var generateWizard = function () {
  return {
    name: getUniqueRandomValueFromArray(wizardNames) + ' ' + getUniqueRandomValueFromArray(wizardLastnames),
    coatColor: getUniqueRandomValueFromArray(wizardCoatColors),
    eyesColor: getUniqueRandomValueFromArray(wizardEyesColors),
  };
};

var getWizards = function () {
  var wizards = [];
  for (var i = 0; i < SIMILAR_WIZARD_QUANTITY; i++) {
    wizards.push(generateWizard());
  }
  return wizards;
};

var renderSimilarWizards = function (array) {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
  var similarWizardsFragment = document.createDocumentFragment();

  for (var i = 0; i < array.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = array[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = array[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = array[i].eyesColor;

    similarWizardsFragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(similarWizardsFragment);
};

renderSimilarWizards(getWizards());
setupSimilarElement.classList.remove('hidden');

// код для взаимодействия пользователя с интерактивными элементами

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupInputNameElement = setupElement.querySelector('.setup-user-name');

var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');


var setCoatColor = function () {
  wizardCoatElement.style.fill = getRandomValueFromArray(wizardCoatColorsForCustomize);
};

var setEyesColor = function () {
  wizardEyesElement.style.fill = getRandomValueFromArray(wizardEyesColorsForCustomize);
};

var setFireballColor = function () {
  wizardFireballElement.style.background = getRandomValueFromArray(wizardFireballColors);
};

var setupEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var setupEscOnInputHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.stopPropagation();
  }
};

var openPopup = function () {
  setupElement.classList.remove('hidden');
  document.addEventListener('keydown', setupEscHandler);
  setupInputNameElement.addEventListener('keydown', setupEscOnInputHandler);
};

var closePopup = function () {
  setupElement.classList.add('hidden');
  document.removeEventListener('keydown', setupEscHandler);
  setupInputNameElement.removeEventListener('keydown', setupEscOnInputHandler);
};

setupOpenElement.addEventListener('click', function () {
  openPopup();
});

setupOpenElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupCloseElement.addEventListener('click', function () {
  closePopup();
});

setupCloseElement.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

wizardCoatElement.addEventListener('click', setCoatColor);
wizardEyesElement.addEventListener('click', setEyesColor);
wizardFireballElement.addEventListener('click', setFireballColor);
