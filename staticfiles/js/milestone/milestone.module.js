(function () {
  'use strict';

  angular
    .module('crowdsource.milestone', [
      'crowdsource.milestone.controllers',
      'crowdsource.milestone.services'
  ]);

  angular
    .module('crowdsource.milestone.controllers', ['ngDragDrop']);
  angular
    .module('crowdsource.milestone.services', []);
})();