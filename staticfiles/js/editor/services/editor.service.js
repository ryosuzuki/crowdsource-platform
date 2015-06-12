/**
* Editor
* @namespace crowdsource.editor.services
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.editor.services')
    .factory('Editor', Editor);

  Editor.$inject = ['$cookies', '$http', '$q', '$location'];

  function Editor($cookies, $http, $q, $location) {
    var Editor = {

    };
    return Editor;

  }
})();