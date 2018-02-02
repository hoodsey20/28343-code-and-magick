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

var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var setupModalElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');

var getRandomValueFromArray = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array.splice(randomIndex, 1);
};

var generateWizard = function () {
  return {
    name: getRandomValueFromArray(wizardNames) + ' ' + getRandomValueFromArray(wizardLastnames),
    coatColor: getRandomValueFromArray(wizardCoatColors),
    eyesColor: getRandomValueFromArray(wizardEyesColors),
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

setupModalElement.classList.remove('hidden');
renderSimilarWizards(getWizards());
setupSimilarElement.classList.remove('hidden');
