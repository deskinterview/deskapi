/*** AngularJS application */
var deskapi = angular.module('deskapi', ['ngRoute']);

/**
 * Help AngularJS WITH CSRF. Thanks http://chrisltd.com/blog/2014/04/angularjs-rails4/
 */
deskapi.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
    $httpProvider.defaults.useXDomain = true;
  }
]);

deskapi.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
    when('/templates/labels', {
    templateUrl: '/templates/labels.html',
    controller: 'LabelsCtrl',
    disableCache: true
    }).
  	when('/templates/case', {
      templateUrl: '/templates/case.html',
      controller: 'CaseCtrl',
      disableCache: true
    }).
    when('/templates/filter.html', {
      templateUrl: '/templates/filter.html',
      controller: 'FilterCtrl',
      disableCache: true
    }).
    otherwise({
      templateUrl: '/templates/filters.html',
      controller: 'FiltersCtrl',
      disableCache: true
    })
   } 
]);