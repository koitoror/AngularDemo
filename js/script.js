var app = angular.module('angularDemo', []);

app.controller('MoviesController', function ($scope, $http) {
    $scope.akshaya = 'Akshaya';
    
    $http.get('https://koitoror.github.io/AngularDemo/assets/movies.json', { cache: true })
        .then(function (res) {
            $scope.movies = res.data;
        });
});
