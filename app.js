/**
 * Created by Sufiyan Bawany on 8/17/2015.
 */
var app = angular.module("myModule", ["ngMaterial","ui.router","firebase"]);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/salogan');

$stateProvider
    .state('daily',{
       url:'/daily',
       templateUrl:'views/dailyWalk.html'
    })

    .state('salogan',{
        url:'/salogan',
        templateUrl:'views/diabeticSalogans.html'
    })

    .state('check',{
        url:'/check',
        templateUrl:'views/sugarCheck.html'
    })

    .state('dite',{
        url:'/dite',
        templateUrl:'views/dietMenu.html'
    })

    .state('medicines',{
        url:'/medicines',
        templateUrl:'views/medicine.html'
    })

    .state('precautions',{
        url:'/precautions',
        templateUrl:'views/precautions.html'
    })
});
app.controller('imgCtrl', function($scope) {
    $scope.imagePath = 'img/diabetic logo2.jpg';
});


app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
        var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        },200);
        return debounceFn;
    }
})
    .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('left').close()
                .then(function () {
                    $log.debug("close LEFT is done");
                });
        };
    })
    .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function () {
            $mdSidenav('right').close()
                .then(function () {
                    $log.debug("close RIGHT is done");
                });
        };
    });











