(function(){

  'use strict';

  angular
    .module('baseFramework')
    .directive('bgBlink', bgBlink);

  /* @ngInject */
  function bgBlink($timeout) {
    return function(scope, element, attrs) {
      var hideTimer;
      var showTimer;
      function showElement() {
        element.css("display", "inline");
        //element.css("color", "rgb(220, 58, 19)");
        hideTimer = $timeout(hideElement, 400);
      }

      function hideElement() {
        element.css("display", "none");
        showTimer = $timeout(showElement, 400);
      }

      function clearElement() {
        if(hideTimer) {
          $timeout.cancel(hideTimer);
        }
        if(showTimer) {
          $timeout.cancel(showTimer);
          //element.css("color", "rgb(121, 121, 121)");
          element.css("display", "inline");
        }
      }

      scope.$watch(attrs.sgBlink, function(value){
        if(value) {
          showElement();
        } else {
          clearElement();
        }
      });
    };
  }

})();