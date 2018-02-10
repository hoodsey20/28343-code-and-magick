'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  return {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomValueFromArray: function (array) {
      var randomIndex = Math.floor(Math.random() * (array.length));
      return array[randomIndex];
    },
    getUniqueRandomValueFromArray: function (array) {
      var randomIndex = Math.floor(Math.random() * (array.length));
      return array.splice(randomIndex, 1);
    }
  };
})();
