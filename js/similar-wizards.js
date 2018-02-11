'use strict';

(function () {
  var SIMILAR_WIZARD_QUANTITY = 4;

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
      window.painting(wizardElement.querySelector('.wizard-coat'), array[i].coatColor);
      window.painting(wizardElement.querySelector('.wizard-eyes'), array[i].eyesColor);

      similarWizardsFragment.appendChild(wizardElement);
    }
    similarListElement.appendChild(similarWizardsFragment);
  };

  renderSimilarWizards(getWizards());
  setupSimilarElement.classList.remove('hidden');
})();
