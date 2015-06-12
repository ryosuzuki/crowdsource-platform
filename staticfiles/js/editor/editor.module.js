(function () {
  'use strict';

  angular
    .module('crowdsource.editor', [
      'crowdsource.editor.controllers',
      'crowdsource.editor.services'
  ]);

  angular
    .module('crowdsource.editor.controllers', ['textAngular']);
  angular
    .module('crowdsource.editor.services', []);
})();