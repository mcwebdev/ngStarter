(function(){
  'use strict';

  // Prepare the 'shows' module for subsequent registration of controllers and delegates
  angular
      .module('starterApp', ['md.data.table', 'ngMaterial', 'vAccordion', 'production'])
      .config(function($mdThemingProvider, $mdIconProvider) {

        $mdIconProvider
            .icon("menu", "./assets/svg/menu.svg", 24)
            .icon("share", "./assets/svg/share.svg", 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 512)
            .icon("hangouts", "./assets/svg/hangouts.svg", 512)
            .icon("twitter", "./assets/svg/twitter.svg", 512)
            .icon("phone", "./assets/svg/phone.svg", 512);

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('red');

      }).controller( 'production' , ['$q', '$scope', '$timeout', '$mdSidenav', function($q, $scope, $timeout, $mdSidenav) {

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

        $scope.openLeftMenu = function() {
          $mdSidenav('left').toggle();
        };

        $scope.openSettingsMenu = function() {
          $mdSidenav('settings').toggle();
        };

        $scope.openDesignerMenu = function() {
          $mdSidenav('designer').toggle();
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
      }]);


})();
