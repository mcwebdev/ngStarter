(function(){

  angular
       .module('production')
       .controller('showController', [
          'showsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          showController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function showController( showsService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected     = null;
    self.production        = [ ];
    self.selectShow   = selectShow;
    self.toggleList   = toggleShowsList;
    //self.showContactOptions  = showContactOptions;

    // Load all registered shows

    showsService
          .loadAllShows()
          .then( function( production ) {
            self.production    = [].concat(production);
            self.selected = production[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */

    function toggleShowsList() {
        $mdSidenav('selectedShow').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectShow ( production ) {
      self.selected = angular.isNumber(production) ? $scope.production[production] : production;
      self.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    

  }

})();
