'use strict'

angular.module('mainApp', [
   'ngResource',
   'ngRoute',
   'ngAnimate',

   'siteHeader',
   'siteHomepage',
   'siteFooter',
   'gallery',
   'galleryDetail',
   'checkoutCart',
   'login',
   'contact',
   'blog',
   'blogDetail',
   'about',
])

   .factory('storageServices', function () {
      let storage = [];
      let itemsService = {};
      let tabName = "tabAll";
      itemsService.insert = function (item) {
         storage.push(item);
      };
      itemsService.get = function () {
         return storage;
      };

      itemsService.holdTabName = function (name) {
         tabName = name;
      }

      itemsService.getTabName = function () {
         return tabName;
      }

      return itemsService;
   })

   .directive('fadeIn', function ($timeout) {
      return {
         restrict: 'A',
         link: function ($scope, $element, attrs) {
            $scope.$watch('selectedFormat.name', function (newValue, oldValue) {
               if (newValue != oldValue) {
                  $element.removeClass("ng-hide-add");
                  $element.addClass("ng-hide-remove");
                  $timeout(function () {
                     $element.addClass("ng-hide-add");
                  }, 100);
               }
            })
         }
      };
   })