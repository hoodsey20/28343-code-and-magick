'use strict';

(function () {
  var setupSimilarElement = document.querySelector('.setup-similar');

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

  renderSimilarWizards(window.getWizards());
  setupSimilarElement.classList.remove('hidden');
})();
