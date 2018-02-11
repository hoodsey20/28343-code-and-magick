'use strict';

(function () {
  var wizardCoatColorsForCustomize = window.data.wizardCoatColors.slice(0, window.data.wizardCoatColors.length - 1);
  var wizardEyesColorsForCustomize = window.data.wizardEyesColors.slice(0, window.data.wizardEyesColors.length - 1);

  var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');

  var setCoatColor = function () {
    var color = window.util.getRandomValueFromArray(wizardCoatColorsForCustomize);
    window.painting(wizardCoatElement, color);
  };

  var setEyesColor = function () {
    var color = window.util.getRandomValueFromArray(wizardEyesColorsForCustomize);
    window.painting(wizardEyesElement, color);
  };

  var setFireballColor = function () {
    var color = window.util.getRandomValueFromArray(window.data.wizardFireballColors);
    window.painting(wizardFireballElement, color);
  };

  wizardCoatElement.addEventListener('click', setCoatColor);
  wizardEyesElement.addEventListener('click', setEyesColor);
  wizardFireballElement.addEventListener('click', setFireballColor);
})();
