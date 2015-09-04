(function() {
'use strict';

angular.module('<%= scriptAppName %>', [<%= angularModules %>])
  <% if(filters.ngroute) { %>.config(config)<% } %><% if(filters.uirouter) { %>.config(config)<% } %><% if(filters.auth) { %>
  .factory('authInterceptor', authInterceptor)
  .run(run)<% } %>;

  /* @ngInject */
  <% if(filters.ngroute) { %>function config($routeProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) {
    $routeProvider.otherwise({ redirectTo: '/' });<% if(filters.auth) { %>
    $httpProvider.interceptors.push('authInterceptor');<% } %>
  }<% } %><% if(filters.uirouter) { %>function config($stateProvider, $urlRouterProvider, $locationProvider<% if(filters.auth) { %>, $httpProvider<% } %>) {
    $urlRouterProvider.otherwise('/');<% if(filters.auth) { %>
    $httpProvider.interceptors.push('authInterceptor');<% } %>
  }<% } %><% if(filters.auth) { %>

  /* @ngInject */
  function authInterceptor($rootScope, $q, $cookieStore, $location) {
    return {
      // Add authorization token to headers
      request: function (config) {
        config.headers = config.headers || {};
        if ($cookieStore.get('token')) {
          config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
        }
        return config;
      },

      // Intercept 401s and redirect you to login
      responseError: function(response) {
        if(response.status === 401) {
          $location.path('/login');
          // remove any stale tokens
          $cookieStore.remove('token');
          return $q.reject(response);
        }
        else {
          return $q.reject(response);
        }
      }
    };
  }

  /* @ngInject */
  function run($rootScope, $location, Auth) {
    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on(<% if(filters.ngroute) { %>'$routeChangeStart'<% } %><% if(filters.uirouter) { %>'$stateChangeStart'<% } %>, function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  }<% } %>

})();
