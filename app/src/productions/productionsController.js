(function(){

  angular
       .module('productions')
       .controller('productionController', [
          'productionsService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',
          productionController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function productionController( productionsService, $mdSidenav, $mdBottomSheet, $log, $q) {
    var self = this;

    self.selected     = null;
    self.productions        = [ ];
    self.selectProduction   = selectProduction;
    self.toggleList   = toggleproductionsList;
    //self.productionContactOptions  = productionContactOptions;

    // Load all registered productions

    productionsService
          .loadAllproductions()
          .then( function( productions ) {
            self.productions    = [].concat(productions);
            self.selected = productions[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * First hide the bottomsheet IF visible, then
     * hide or Production the 'left' sideNav area
     */
    function toggleproductionsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectProduction ( production ) {
      self.selected = angular.isNumber(production) ? $scope.productions[production] : production;
      self.toggleList();
    }

    /**
     * Production the bottom sheet
     */
    

  }

})();
