'use strict';

var setupModalElement = document.querySelector('.setup');
setupModalElement.classList.remove('hidden');

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

var getRandomValueFromArray = function (array) {
  var randomIndex = Math.floor(Math.random() * (array.length));
  return array[randomIndex];
};

var createWizard = function () {
  return {
    name: getRandomValueFromArray(WIZARD_NAMES) + ' ' + getRandomValueFromArray(WIZARD_LASTNAMES),
    coatColor: getRandomValueFromArray(WIZARD_COAT_COLORS),
    eyesColor: getRandomValueFromArray(WIZARD_EYES_COLORS),
  };
};

for (var i = 0; i < SIMILAR_WIZARD_QUANTITY; i++) {
  wizards.push(createWizard());
}
