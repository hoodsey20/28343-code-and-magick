'use strict';

(function () {
  window.generateWizard = function () {
    return {
      name: window.util.getUniqueRandomValueFromArray(window.data.wizardNames) + ' ' + window.util.getUniqueRandomValueFromArray(window.data.wizardLastnames),
      coatColor: window.util.getUniqueRandomValueFromArray(window.data.wizardCoatColors),
      eyesColor: window.util.getUniqueRandomValueFromArray(window.data.wizardEyesColors),
    };
  };
})();
