angular.module('deskapi')
    .controller('LabelsCtrl', ["$scope", "$http", function ($scope, $http) {
        $http.get('/labels/').
            success(function(data, status, headers, config) {
                $scope.labels = data;
            }).
            error(function(data, status, headers, config) {
                window.console && console.log('Error getting list of labels: ' + data);
                $scope.labels = undefined;
            });
    }]);