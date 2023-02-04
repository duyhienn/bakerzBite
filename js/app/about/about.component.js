'use strict'

angular.module('about')
   .component('about', {
      templateUrl: "./templates/about.html",
      controller: function($scope, $http, $window) {
         $window.scrollTo(0,0);
      }
   })
