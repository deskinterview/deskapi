
var deskApp = angular.module('deskapi')
    .controller('CaseCtrl', ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams) {
        $http.get('/cases/' + $routeParams.id).
            success(function(data, status, headers, config) {
                $scope.case = data;

                $http.get('/labels/').
                    success(function(data, status, headers, config) {
                        $scope.labels = data._embedded.entries;
                    }).
                    error(function(data, status, headers, config) {
                        window.console && console.log('Error getting list of labels: ' + data);
                        $scope.labels = undefined;
                    });
            }).
            error(function(data, status, headers, config) {
                window.console && console.log('Error getting case: ' + data);
                $scope.case = undefined;
            });

        /**
         * Adds the specified label (by ID) to case id.
         */
        $scope.createCaseLabel = function() {
            var name = document.getElementById('name').value;
            var description = document.getElementById('description').value;
            var types = [];
            if (document.getElementById('case').checked)
                types.push('case');
            if (document.getElementById('macro').checked)
                types.push('macro');
            if (document.getElementById('article').checked)
                types.push('article');
            var color = document.getElementById('color').value;
            $.ajax({
                    headers : {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    url : '/labels/',
                    type : 'PUT',
                    data : JSON.stringify({name: name, description: description, types: types, color: color}),
                    success : function(response, textStatus, jqXhr) {
                        alert("Label created");
                        // TODO Display as toast when switching to the https://material.angularjs.org library
                        location.reload();
                    },
                    error : function(jqXHR, textStatus, errorThrown) {
                        alert("Unable to create label: " + textStatus + "\n" + errorThrown);
                        // TODO Display as toast when switching to the https://material.angularjs.org library
                    }
                });
        }

        /**
         * Adds the specified label (by ID) to case id.
         *
         * @param {number} id       The case ID of the case to add the label to.
         * @param {string} labelId  The name of the label to add to the case.
         */
        $scope.addLabelToCase = function(id, label) {
            $.ajax({
                    headers : {
                        'Accept' : 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    url : '/cases/' + id,
                    type : 'PATCH',
                    data : JSON.stringify({label: label}),
                    success : function(response, textStatus, jqXhr) {
                        alert('Label added');
                        // TODO Display as toast when switching to the https://material.angularjs.org library
                        location.reload();
                    },
                    error : function(jqXHR, textStatus, errorThrown) {
                        alert("Unable to add label to case: " + textStatus + "\n" + errorThrown);
                        // TODO Display as toast when switching to the https://material.angularjs.org library
                    }
                });
        }

    }]);
