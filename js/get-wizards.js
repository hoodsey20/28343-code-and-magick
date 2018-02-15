'use strict';

(function () {
  window.getWizards = function () {
    var wizards = [];
    for (var i = 0; i < window.data.similarWizardsQuantity; i++) {
      wizards.push(window.generateWizard());
    }
    return wizards;
  };
})();
