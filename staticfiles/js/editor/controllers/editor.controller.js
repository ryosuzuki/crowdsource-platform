/**
* EditorController
* @namespace crowdsource.editor.controllers
 * @author ryosuzuki
*/
(function () {
  'use strict';

  angular
    .module('crowdsource.editor.controllers')
    .config(function($provide){
      $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
        taRegisterTool('colourRed', {
          iconclass: "fa fa-square red",
          action: function(){
            this.$editor().wrapSelection('forecolor', 'red');
          }
        });

        taRegisterTool('hoge', {
          iconclass: "fa fa-smile-o",
          action: function(){
            window.hoge = this;
            this.$editor().wrapSelection('insertHtml', '<form><input type="radio" name="sex" value="male" checked>Male<br><input type="radio" name="sex" value="female">Female</form>');
          }
        });

        // add the button to the default toolbar definition
        taOptions.toolbar[1].push('colourRed');
        taOptions.toolbar[0].push('hoge');
        return taOptions;
      }]);
    })
    // .config('EditorConfig', EditorConfig)
    .controller('EditorController', EditorController);

  // EditorConfig.$inject = ['$provide'];
  EditorController.$inject = ['$window', '$location', '$scope', 'Editor', '$filter'];

  function EditorConfig ($provide) {
    $provide.decorator('taOptions', ['taRegisterTool', '$modal', '$delegate',
      function(taRegisterTool, $modal, taOptions) {
        taOptions.toolbar = [
          ['clear', 'h1', 'h2', 'h3'],
          ['ul', 'ol'],
          ['bold', 'italics'],
          ['insertLink', 'insertVideo']
        ];

        taRegisterTool('customInsertImage', {
          iconclass: "fa fa-picture-o",
          action: function() {
            var textAngular = this;
            var savedSelection = rangy.saveSelection();
            var modalInstance = $modal.open({
              // Put a link to your template here or whatever
              template: '<label>Enter the url to your image:</label><input type="text" ng-model="img.url"><button ng-click="submit()">OK</button>',
              size: 'sm',
              controller: ['$modalInstance', '$scope',
                function($modalInstance, $scope) {
                  $scope.img = {
                    url: ''
                  };
                  $scope.submit = function() {
                    $modalInstance.close($scope.img.url);
                  };
                }
              ]
            });

            modalInstance.result.then(function(imgUrl) {
              rangy.restoreSelection(savedSelection);
              textAngular.$editor().wrapSelection('insertImage', imgUrl);
            });
            return false;
          },
        });

        taOptions.toolbar[3].push('customInsertImage');
        return taOptions;
      }
    ]);
  };


  function EditorController ($window, $location, $scope, Editor, $filter) {
    var vm = $scope;
    $scope.html = "Here's some sample text!";


    vm.addForm = function () {

    $('.ng-touched').append('<form>First name:<br><input type="text" name="firstname"><br>Last name:<br><input type="text" name="lastname"></form>')
    }

  }







})();