'use strict';

var SIMILAR_WIZARD_QUANTITY = 4;


var wizardCoatColorsForCustomize = window.data.wizardCoatColors.slice(0, window.data.wizardCoatColors.length - 1);

var wizardEyesColorsForCustomize = window.data.wizardEyesColors.slice(0, window.data.wizardEyesColors.length - 1);

var setupSimilarElement = document.querySelector('.setup-similar');

var generateWizard = function () {
  return {
    name: window.util.getUniqueRandomValueFromArray(window.data.wizardNames) + ' ' + window.util.getUniqueRandomValueFromArray(window.data.wizardLastnames),
    coatColor: window.util.getUniqueRandomValueFromArray(window.data.wizardCoatColors),
    eyesColor: window.util.getUniqueRandomValueFromArray(window.data.wizardEyesColors),
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
  wizardFireballElement.style.background = window.util.getRandomValueFromArray(window.data.wizardFireballColors);
};

wizardCoatElement.addEventListener('click', setCoatColor);
wizardEyesElement.addEventListener('click', setEyesColor);
wizardFireballElement.addEventListener('click', setFireballColor);
