'use strict'

angular.module('contact')
   .component('contact', {
      templateUrl: "./templates/contact.html",
      controller: function($scope, $window, storageServices) {
         $window.scrollTo(0,0);

         $scope.message = {}
         $scope.sendMess = function() {
            $scope.message = {}
         }
      }
   })
