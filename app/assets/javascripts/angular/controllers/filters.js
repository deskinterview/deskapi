angular.module('deskapi')
    .controller('FiltersCtrl', ["$scope", "$http", function ($scope, $http) {
        $http.get('/filters').
            success(function(data, status, headers, config) {
                $scope.filters = data;
            }).
            error(function(data, status, headers, config) {
                window.console && console.log('Error getting list of filters: ' + data);
                $scope.filters = undefined;
            });
    }]);