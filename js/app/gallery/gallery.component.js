'use strict'

angular.module('gallery')
   .component('gallery', {
      templateUrl: "./templates/gallery.html",
      controller: function($scope, $http,$window, storageServices) {
         $window.scrollTo(0,0);
         $scope.allProductList = [];
         $scope.patriesList = [];
         $scope.cookiesList = [];
         $scope.gourmetList = [];
         $scope.beverageList = [];
         $scope.merchandiseList = [];
         $scope.tabName = storageServices.getTabName();
         storageServices.holdTabName('tabAll');
         
         $http.get('pastriesListNew.json').then(successCb)
         
         // consume a callback
         function successCb(respone) {
            parseProducts(respone.data.productList);
         }

         function parseProducts(productList) {
            angular.forEach(productList, function(item, index) {
               $scope.allProductList.push(item);
               if(item.cakeType == "patries"){
                  $scope.patriesList.push(item);
               }
               else if(item.cakeType == "cookies"){
                  $scope.cookiesList.push(item);
               }
               else if(item.cakeType == "gourmet"){
                  $scope.gourmetList.push(item);
               }
               else if(item.cakeType == "beverage"){
                  $scope.beverageList.push(item);
               }
               else if(item.cakeType == "merchandise"){
                  $scope.merchandiseList.push(item);
               }
            });
         }
      },
   })
