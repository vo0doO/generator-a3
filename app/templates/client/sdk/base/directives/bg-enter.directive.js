(function() {  
  
  'use strict';

  angular
    .module('a3.base')
    .directive('bgEnter', bgEnter);

  /* @ngInject */
  function bgEnter() {
    return function (scope, element, attrs) {
      element.bind("keydown keypress", function (event) {
        if(event.which === 13) {
          scope.$apply(function (){
              scope.$eval(attrs.ngEnter);
          });

          event.preventDefault();
        }
      });
    };
  }

})();