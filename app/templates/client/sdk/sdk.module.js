(function() {
  'use strict';

  angular.module('a3.sdk', [
      // angular base
      "'ngCookies'",
      "'ngResource'",
      "'ngSanitize'",
      // custom
      'a3.sdk.charts',
      'a3.sdk.utils',
      'ngRedux'
  ]);

})();
