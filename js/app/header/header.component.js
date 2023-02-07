'use strict'

angular.module('siteHeader')
   .component('siteHeader', {
      templateUrl: "./templates/header.html",
      controller: function($scope, $location , $http, storageServices) {
         $scope.productItems = storageServices.get();
         $scope.count = 0;
         $scope.totalPrice = 0;

         $scope.getServiceData = function() {
            // $scope.productItems = storageServices.get();
            // console.log($scope.productItems)
            // $scope.count = storageServices.get().length;
            return storageServices.get();
         }

         $scope.delete = function(item){
            if(item) {
               $scope.productItems.splice($scope.productItems.indexOf(item),1);
               $scope.updateTotal();
            }
         }

         $scope.updateTotal = function(){
            let total = 0;
            for (let i = 0; i < $scope.productItems.length; i++) {
               if($scope.productItems[i].sale){
                  total = total + Number($scope.productItems[i].sale) * Number($scope.productItems[i].quantity);
               }
               else{
                  total = total + Number($scope.productItems[i].price) * Number($scope.productItems[i].quantity);
               }
            }
            total = Math.round(total*100)/100;
            $scope.totalPrice = total;
         }

         $scope.isToggle = false;
         $scope.toggleNavMoblie = function() {
            if($scope.isToggle == false) {
               $scope.isToggle = true;
            } else {
               $scope.isToggle = false;
            }
         }

         $scope.autoClose = function() {
            $scope.isToggle = false;
         }


         // $scope.$watchCollection("getServiceData()", function(newValue, oldValue) {
         //    if (oldValue != newValue) {
         //       $scope.count = $scope.productItems.length;
         //       $scope.updateTotal();
         //    }
         // });

         $scope.$watch(function($scope) {
            return $scope.productItems.map(function(obj) {
               return obj;
            });
         },function (newVal) {
            $scope.count = $scope.productItems.length;
            $scope.updateTotal();
         }, true);
         
      }
   })
