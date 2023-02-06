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

   itemsService.holdTabName = function(name) {
      tabName = name;
   }

   itemsService.getTabName = function(){
      return tabName;
   }
   
   return itemsService;
});