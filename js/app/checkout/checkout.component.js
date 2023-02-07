'use strict'

angular.module('checkoutCart')
   .component('checkoutCart', {
      templateUrl: "./templates/checkout.html",
      controller: function($scope, $http, $routeParams, $window ,storageServices) {
         $window.scrollTo(0,0);
         $scope.productItems = storageServices.get();
         $scope.totalPrice = 0;
         $scope.checkEmptyCart = false;
         
         $scope.delete = function(item){
            if(item) {
               $scope.productItems.splice($scope.productItems.indexOf(item),1);
               $scope.updateTotal();
            }
            console.log(storageServices.get())
         }

         $scope.quantityChanged = function(item) {
            if(!isFinite(item.quantity) || item.quantity <= 0 || typeof item.quantity == 'string'){
               item.quantity = "";
            }
            console.log($scope.productItems)
            $scope.updateTotal();
         }

         $scope.updateTotal = function(){
            let total = 0;
            for (let i = 0; i < $scope.productItems.length; i++) {
               if($scope.productItems[i].percent){
                  total = total + Number($scope.productItems[i].sale) * Number($scope.productItems[i].quantity);
               }
               else{
                  total = total + Number($scope.productItems[i].price) * Number($scope.productItems[i].quantity);
               }
            }
            total = Math.round(total*100)/100;
            $scope.totalPrice = total;
         }

         $scope.checkoutDone = function(){
            if($scope.productItems.length > 0){
               for (let i = 0; i < $scope.productItems.length; i++) {
                  $scope.productItems.splice(0,$scope.productItems.length);
               }
               $scope.updateTotal();
               $scope.checkEmptyCart = true;
            }
            else{
               $scope.checkEmptyCart = false;
            }
         }

         $scope.$watch(function($scope) {
            return $scope.productItems.map(function(obj) {
               return obj;
            });
         },function (newVal) {
            $scope.updateTotal();
         }, true);

      }
   })
