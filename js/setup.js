'use strict';

var setupModalElement = document.querySelector('.setup');
var setupSimilarElement = document.querySelector('.setup-similar');

var SIMILAR_WIZARD_QUANTITY = 4;

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

var WIZARD_LASTNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)',
];

var WIZARD_EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
];

var wizards = [];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var getRandomValueFromArray = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
};

var fillWizardsArray = function () {
  for (var i = 0; i < SIMILAR_WIZARD_QUANTITY; i++) {
    var generatedWizard = {
      name: getRandomValueFromArray(WIZARD_NAMES) + ' ' + getRandomValueFromArray(WIZARD_LASTNAMES),
      coatColor: getRandomValueFromArray(WIZARD_COAT_COLORS),
      eyesColor: getRandomValueFromArray(WIZARD_EYES_COLORS),
    };
    wizards.push(generatedWizard);
  }
};

var renderSimilarWizards = function () {
  var similarWizardsFragment = document.createDocumentFragment();

  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

    similarWizardsFragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(similarWizardsFragment);
};

setupModalElement.classList.remove('hidden');
fillWizardsArray();
renderSimilarWizards();
setupSimilarElement.classList.remove('hidden');
