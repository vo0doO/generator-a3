(function() {

  'use strict';

  /**
   * Removes server error when user updates input
   */
  angular
    .module('a3.base')
    .directive('mongooseError', mongooseError);

  /* @ngInject */
  function mongooseError() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        element.on('keydown', function() {
          return ngModel.$setValidity('mongoose', true);
        });
      }
    };
  }

})();