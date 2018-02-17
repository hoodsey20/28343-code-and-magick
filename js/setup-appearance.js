'use strict';

(function () {
  var wizardFireballColors = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848',
  ];
  var wizardCoatColorsForCustomize = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)',
  ];
  var wizardEyesColorsForCustomize = [
    'black',
    'red',
    'blue',
    'yellow',
    'green',
  ];

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
    var color = window.util.getRandomValueFromArray(wizardFireballColors);
    window.painting(wizardFireballElement, color);
  };

  wizardCoatElement.addEventListener('click', setCoatColor);
  wizardEyesElement.addEventListener('click', setEyesColor);
  wizardFireballElement.addEventListener('click', setFireballColor);
})();
