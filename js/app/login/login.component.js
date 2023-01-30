'use strict'

angular.module('login')
   .component('login', {
      templateUrl: "./templates/login.html",
      controller: function($scope, $http, $routeParams, $window, storageServices) {
         $window.scrollTo(0,0);
         $scope.isRegisterOpened = false;
         $scope.isDisabledRegister = true;
         $scope.isMatchPassword = false;
         $scope.messageForm="";
         
         $scope.userLogin = {
            emailLogin: "",
            passwordLogin: "",
         };
         $scope.userRegister = {
            emailRegister: "",
            passwordRegister: "",
            confirmPasswordRegister: ""
         };

         $scope.openRegister = function(){
            $scope.isRegisterOpened = !($scope.isRegisterOpened);
         }

         $scope.changed = function() {
            if($scope.userRegister.passwordRegister == $scope.userRegister.confirmPasswordRegister){
               $scope.isDisabledRegister = false;
               $scope.isMatchPassword = false;
            }else{
               $scope.isMatchPassword = true;
               $scope.isDisabledRegister = true;
            }
         }

         $scope.doRegist = function() {
            $scope.messageForm = "Register successfully!"
            $scope.userRegister = {};
         }

         $scope.doLogin= function() {
            $scope.messageForm = "Login successfully!"
            $scope.userLogin = {};
         }
      }
   })
