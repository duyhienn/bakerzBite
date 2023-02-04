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
   itemsService.insert = function (item) {
      storage.push(item);
   };
   itemsService.get = function () {
      return storage;
   };

   return itemsService;
});