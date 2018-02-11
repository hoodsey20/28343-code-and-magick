'use strict';

(function () {
  var wizardCoatColorsForCustomize = window.data.wizardCoatColors.slice(0, window.data.wizardCoatColors.length - 1);
  var wizardEyesColorsForCustomize = window.data.wizardEyesColors.slice(0, window.data.wizardEyesColors.length - 1);

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
})();
