(function() {
  'use strict';

  angular
    .module('<%= scriptAppName %>')
    <% if(filters.ngroute) { %>.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'portal/main/main.html',
        controller: 'MainCtrl'
      });
  });<% } %><% if(filters.uirouter) { %>.config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'portal/main/main.html',
        controller: 'MainCtrl'
      });
  });<% } %>

})();
