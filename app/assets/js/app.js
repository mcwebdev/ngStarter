(function(angular) {
  'use strict';
  var starterApp = angular.module('starterApp', ['ngRoute', 'ngMaterial', 'vAccordion',  'shows'])

  .controller('shows', ['$q', '$scope', '$timeout', '$mdSidenav', function($q, $scope, $timeout, $mdSidenav) {

    $scope.selected = [];

    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };



    $scope.getTypes = function() {
      return ['Candy', 'Ice cream', 'Other', 'Pastry'];
    };

    $scope.toggleShowsList = function() {
      $mdSidenav('selectedShow').toggle();
    };

    $scope.openAddShow = function() {
      $mdSidenav('addShow').toggle();
    };

    $scope.openAddVersion = function() {
      $mdSidenav('addVersion').toggle();
    };

    $scope.openSettingsMenu = function() {
      $mdSidenav('settings').toggle();
    };

    $scope.openDesignerMenu = function() {
      $mdSidenav('designer').toggle();
    };

    $scope.editEpisode = function() {
      $mdSidenav('edit-episode').toggle();
    };

    $scope.onpagechange = function(page, limit) {
      var deferred = $q.defer();

      $timeout(function() {
        deferred.resolve();
      }, 2000);

      return deferred.promise;
    };

    $scope.onorderchange = function(order) {
      var deferred = $q.defer();

      $timeout(function() {
        deferred.resolve();
      }, 2000);

      return deferred.promise;
    };
  }])

  .controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
    $scope.selectedIndex = 0;
    
            $scope.$watch('selectedIndex', function(current, old) {
              switch(current) {
                case 0: $location.url("/view1"); break;
                case 1: $location.url("/view2"); break;
                case 2: $location.url("/view3"); break;
                
              }
            })
  })

  .controller('ShowController', function($scope, $routeParams) {
    $scope.name = "ShowController";
    $scope.params = $routeParams;
  })

  .controller('SeasonController', function($scope, $routeParams) {
    $scope.name = "SeasonController";
    $scope.params = $routeParams;
  })

  .controller('EpisodeController', function($scope, $routeParams) {
    $scope.name = "EpisodeController";
    $scope.params = $routeParams;
    
  })

  .config(function($routeProvider, $locationProvider, $mdThemingProvider, $mdIconProvider) {
    $routeProvider
      
      .when('/Show/:showId', {
        templateUrl: 'show.html',
        controller: 'ShowController',
        resolve: {
          // I will cause a 1 second delay
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 1000);
            return delay.promise;
          }
        }
      })

      .when('/Show/:showId/:seasonId', {
          templateUrl: "src/includes/view1.html",
          controller: 'EpisodeController',
          resolve: {
          // I will cause a 1 second delay
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 0);
            $(".season-columns").show();
            $(".episode-columns").hide();
            return delay.promise;
          }}
        })

      .when('/Show/:showId/:seasonId/Episodes/:episodeId/', {
        templateUrl: 'episodes.html',
        controller: 'EpisodeController',
        resolve: {
          // I will cause a 1 second delay
          delay: function($q, $timeout) {
            var delay = $q.defer();
            $timeout(delay.resolve, 0);
            $(".season-columns").hide();
            $(".episode-columns").show();
            return delay.promise;
          }}
      })
      .when("/Show/X-Files/Seasons", {templateUrl: "src/includes/view1.html"})
      .when("/view2", {templateUrl: "src/includes/view2.html"})
      .when("/view3", {templateUrl: "src/includes/view3.html"})
      .otherwise({redirectTo: "/"})

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });
})(window.angular);