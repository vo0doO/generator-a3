(function() {

  'use strict';

  angular
    .module('a3.sdk')
    .directive('a3Focus', bgFocus);

  /* @ngInject */
  function bgFocus() {
    return function(scope, element, attrs){
      scope.$watch(attrs.sgFocus, function(value){
        if(value) {
           element[0].focus();
        }
      });
    };
  }

})();
