'use strict';

(function () {
  var similarWizardsQuantity = 4;
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

  var generateWizard = function () {
    return {
      name: window.util.getUniqueRandomValueFromArray(wizardNames) + ' ' + window.util.getUniqueRandomValueFromArray(wizardLastnames),
      coatColor: window.util.getUniqueRandomValueFromArray(wizardCoatColors),
      eyesColor: window.util.getUniqueRandomValueFromArray(wizardEyesColors),
    };
  };

  var getWizards = function (wizardsNumber) {
    var wizards = [];
    for (var i = 0; i < wizardsNumber; i++) {
      wizards.push(generateWizard());
    }
    return wizards;
  };

  window.data = getWizards(similarWizardsQuantity);

})();
