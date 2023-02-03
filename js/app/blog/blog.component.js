'use strict'

angular.module('blog')
   .component('blog', {
      templateUrl: "./templates/blog.html",
      controller: function($$scope, $http, $window) {
         $window.scrollTo(0,0);
        
      }
   })
