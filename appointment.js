var app = angular.module("appointmentApp", []);

app.controller("AppointmentController", function ($scope, $http) {
    $http.get("appointments.json").then(function (response) {
        $scope.appointments = response.data.appointments;
    });

    $scope.sortBy = "date"; // Default orderBy filter
});


