/**
* Milestone
* @namespace crowdsource.milestone.services
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.milestone.services')
    .factory('Milestone', Milestone);

  Milestone.$inject = ['$cookies', '$http', '$q', '$location'];

  function Milestone($cookies, $http, $q, $location) {
    var Milestone = {
    };

    return Milestone;


  }
})();