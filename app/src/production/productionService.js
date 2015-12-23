(function(){
  'use strict';

  angular.module('production')
         .service('showsService', ['$q', showsService]);

  /**
   * shows DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function showsService($q){
    var production = [
      {
        name: 'Simpsons, the',
        networkName:'CBS',
        code:'11199',
        status:'active',
        runtime:'30',
        description: 'Perspiiste natus error sit voluptatem',
        category:'DRAMA',
        genre:'COMEDY',
        productionCompany:'20th Television',
        Supplier:'20th Television',
        avatar: 'assets/svg/simpsons.jpg',
        content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
          name: 'Friends',
          networkName: 'Fox',
          code: '8119',
          status: 'active',
          runtime: '30',
          description: 'iste natus error sit voluptatem',
          category: 'DRAMA',
          genre: 'DRAMA',
          productionCompany: '20th Television',
          Supplier: '20th Television',
          avatar: 'assets/svg/friends.jpg',
          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
          name: 'American Idol',
          networkName: 'NBC',
          code: '25119',
          status: 'inactive',
          runtime: '60',
          description: 'Sed ut oluptatem',
          category: 'DRAMA',
          genre: 'COMEDY',
          productionCompany: '20th Television',
          Supplier: '20th Television',
          avatar: 'assets/svg/idol.jpg',
          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
          name: 'X-Files, the',
          networkName: 'Fox',
          code: '45699',
          status: 'active',
          runtime: '60',
          description: 'Sed ut perspiciatis unde omnis ',
          category: 'DRAMA',
          genre: 'REALITY',
          productionCompany: '20th Television',
          Supplier: '20th Television',
          avatar: 'assets/svg/x.png',
          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
          name: 'A-Team',
          networkName: 'ABC',
          code: '45699',
          status: 'inactive',
          runtime: '60',
          description: 'Rt voluptatem',
          category: 'DRAMA',
          genre: 'ACTION',
          productionCompany: '20th Television',
          Supplier: '20th Television',
          avatar: 'assets/svg/ateam.jpg',
          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
          name: 'TMNT',
          networkName: 'Fox',
          code: '45699',
          status: 'active',
          runtime: '60',
          description: 'Sed unde omnis iste natus error sit voluptatem',
          category: 'DRAMA',
          genre: 'REALITY',
          productionCompany: '20th Television',
          Supplier: '20th Television',
          avatar: 'assets/svg/tmnt.jpg',
          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      },
      {
          name: 'SEINFELD',
          networkName: 'Fox',
          code: '45699',
          status: 'inactive',
          runtime: '60',
          description: 'Por unde omnis iste natus error sit voluptatem',
          category: 'DRAMA',
          genre: 'REALITY',
          productionCompany: '20th Television',
          Supplier: '20th Television',
          avatar: 'assets/svg/seinfeld.jpg',
          content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
      }
    ];

    // Promise-based API
    return {
      loadAllShows : function() {
        // Simulate async nature of real remote calls
        return $q.when(production);
      }
    };
  }

})();
