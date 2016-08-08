var myApp = angular
    .module("myModule", ["ngRoute"])
    .config(function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "templates/home.html",
                controller: "homeCtrl",
                controllerAs: "ctrl"
            })
            .when("/courses", {
                templateUrl: "templates/courses.html",
                controller: "coursesCtrl",
                controllerAs: "ctrl"
            })
            .when("/students", {
                templateUrl: "templates/students.html",
                controller: "studentsCtrl",
                controllerAs: "ctrl"
            })
            .when("/students/:id", {
                templateUrl: "templates/studentDetails.html",
                controller: "studentDetailsCtrl",
                controllerAs: "ctrl"
            })
            .otherwise({
                redirectTo: "/home"
            })
    })
    .controller("homeCtrl", function($scope) {
        $scope.pageTitle = "Home";
    })
    .controller("coursesCtrl", function($scope, $http) {
        // $http.get("CourseService/GetAllCourses")
        //      .then(function(response) {
        //            $scope.courses = response.data;
        //       }, function(reason) {
        //            $scope.error = reason.data;
        //       });
        $scope.courses = [{ id: 1, name: "Ruby" }, { id: 2, name: "JavaScript" }, { id: 3, name: "Python" }];
    })
    .controller("studentsCtrl", function($scope, $http) {
        // $http.get("StudentsService/GetAllStudents")
        //      .then(function(response) {
        //            $scope.students = response.data;
        //       }, function(reason) {
        //            $scope.error = reason.data;
        //       });
        $scope.students = [{ id: 1, name: "Ben", gender: "Male", city: "London" }, { id: 2, name: "Matt", gender: "Male", city: "New York" }, { id: 3, name: "Pam", gender: "Female", city: "Chennai" }];
    }).controller("studentDetailsCtrl", function($scope, $http, $routeParams) {
        // $http({
        //   url: "StudentsService/GetStudent",
        //   params: {id:$routeParams.id},
        //   method: "get"
        // })
        // .then(function(response) {
        //   $scope.student = response.data;
        // }, function(reason) {
        //   $scope.error = reason.data;
        // });
        var students = [{ id: 1, name: "Ben", gender: "Male", city: "London" }, { id: 2, name: "Matt", gender: "Male", city: "New York" }, { id: 3, name: "Pam", gender: "Female", city: "Chennai" }];
        $scope.student = students[$routeParams.id-1];
    });
