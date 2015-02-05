angular.module('deskapi')
    .controller('FilterCtrl', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $http.get('/filters/' + $routeParams.id).
            success(function(data, status, headers, config) {
                $scope.filter = data;
            }).
            error(function(data, status, headers, config) {
                window.console && console.log('Error getting filter: ' + data);
                $scope.filter = undefined;
            });
    }]);