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

var generateWizard = function () {
  return {
    name: window.util.getUniqueRandomValueFromArray(wizardNames) + ' ' + window.util.getUniqueRandomValueFromArray(wizardLastnames),
    coatColor: window.util.getUniqueRandomValueFromArray(wizardCoatColors),
    eyesColor: window.util.getUniqueRandomValueFromArray(wizardEyesColors),
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

var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848',
];

var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

var setCoatColor = function () {
  wizardCoatElement.style.fill = window.util.getRandomValueFromArray(wizardCoatColorsForCustomize);
};

var setEyesColor = function () {
  wizardEyesElement.style.fill = window.util.getRandomValueFromArray(wizardEyesColorsForCustomize);
};

var setFireballColor = function () {
  wizardFireballElement.style.background = window.util.getRandomValueFromArray(wizardFireballColors);
};

wizardCoatElement.addEventListener('click', setCoatColor);
wizardEyesElement.addEventListener('click', setEyesColor);
wizardFireballElement.addEventListener('click', setFireballColor);
