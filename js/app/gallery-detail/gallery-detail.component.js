'use strict'

angular.module('galleryDetail')
   .component('galleryDetail', {
      templateUrl: "./templates/gallery-detail.html",
      controller: function($scope, $http, $routeParams, $window, storageServices) {
         $window.scrollTo(0,0);
         $http.get('pastriesListNew.json').then(successCb)
         function successCb(respone) {
            $scope.notFound = true;
            let productitems = respone.data.productList;
            angular.forEach(productitems, function(item){
               if(item.id == $routeParams.id){
                  $scope.notFound = false;
                  $scope.item = item
               }
            });
         }

         $scope.insertItem = function(item) {
            let productStorage = storageServices.get();
            if(productStorage.length == 0){
               item.quantity = 1;
               storageServices.insert(item);
               return;
            }
            for (let i = 0; i < productStorage.length; i++) {
               if(item.id == productStorage[i].id){
                  productStorage[i].quantity++;
                  return;
               }
            }
            item.quantity = 1;
            storageServices.insert(item);
            console.log(productStorage);
         }
      },
   })
