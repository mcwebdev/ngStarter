(function(){

  angular
       .module('shows')
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
    self.shows        = [ ];
    self.selectShow   = selectShow;
    self.toggleList   = toggleShowsList;
    //self.showContactOptions  = showContactOptions;

    // Load all registered shows

    showsService
          .loadAllShows()
          .then( function( shows ) {
            self.shows    = [].concat(shows);
            self.selected = shows[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Show the 'left' sideNav area
     */
    function toggleShowsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectShow ( show ) {
      self.selected = angular.isNumber(show) ? $scope.shows[show] : show;
      self.toggleList();
    }

    /**
     * Show the bottom sheet
     */
    

  }

})();
