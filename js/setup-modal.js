'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupInputNameElement = setupElement.querySelector('.setup-user-name');

  var setupEscHandler = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  var setupEscOnInputHandler = function (evt) {
    window.util.isEscEvent(evt, function () {
      evt.stopPropagation();
    });
  };

  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', setupEscHandler);
    setupInputNameElement.addEventListener('keydown', setupEscOnInputHandler);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', setupEscHandler);
    setupInputNameElement.removeEventListener('keydown', setupEscOnInputHandler);
  };

  setupOpenElement.addEventListener('click', function () {
    openPopup();
  });

  setupOpenElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  setupCloseElement.addEventListener('click', function () {
    closePopup();
  });

  setupCloseElement.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });
})();
