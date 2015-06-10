/**
* MilestoneController
* @namespace crowdsource.milestone.controllers
 * @author ryosuzuki
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.milestone.controllers')
    .controller('MilestoneController', MilestoneController);

  MilestoneController.$inject = ['$window', '$location', '$scope', 'Milestone', '$filter'];

  /**
  * @namespace MilestoneController
  */
  function MilestoneController($window, $location, $scope, Milestone, $filter) {
    var vm = $scope;

    $scope.models = {
      selected: null,
      lists: {"A": [], "B": []}
    };


  $scope.list1 = {title: 'AngularJS - Drag Me'};
  $scope.list2 = {};

    for (var i = 1; i <= 3; ++i) {
      $scope.models.lists.A.push({label: "Item A" + i});
      $scope.models.lists.B.push({label: "Item B" + i});
    }

    $scope.$watch('models', function(model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);

  }
})();