'use strict'

angular.module('siteHomepage')
   .component('siteHomepage', {
      templateUrl: "./templates/home.html",
      controller: function($scope, $http, $window, $document, $interval) {
         $window.scrollTo(0,0);
         $scope.arr1 = [];
         $scope.arr2 = [];
         $scope.arr3 = [];
         $scope.dataComment = [
            {
               ratingNumber : 4,
               userComment: "I've been ordering cakes from this store and they are the best in the business.",
               userName: "Miley Klay",
               timerComment: "March 15 2022"
            },
            {
               ratingNumber : 5,
               userComment: "I have bought numerous cakes from this shop for the last six months. Such a dedicated and creative cake shop in the town. I'm happy with every experience. ",
               userName: "Kelly Christ",
               timerComment: "April 4 2022"

            }
         ];
         // initiate obj for saving each user's feedback
         $scope.userCommentObj = {
            ratingNumber : 0,
            comment: "",
            name: "",
            timer: "",
         }
         $scope.selStars = 0;
         $scope.maxStars = 5;
         
         $http.get('pastriesListNew.json').then(successCb)
         // consume a callback
         function successCb(respone) {
            parseProducts(respone.data.productList);
         }
         function parseProducts(productList) {
            angular.forEach(productList, function(item, index) {
               if(item.cakeType == "patries"){
                  $scope.arr1.push(item);
               }
               else if(item.cakeType == "gourmet"){
                  $scope.arr2.push(item);
               }
               else if(item.cakeType == "cookies"){
                  $scope.arr3.push(item);
               }
               else if(item.cakeType == "bever"){
                  $scope.arr4.push(item);
               }
            });
         }

         $scope.getStarArray = function() {
            let result = [];
            for (let i = 1; i <= $scope.maxStars; i++) {
               result.push(i);
            }
            return result;
         }

         $scope.getClassRender = function(value, ratingNumber) {
            return 'fa' + (ratingNumber >= value ? '-solid' : '-regular') + ' ' + 'fa-star';
         }

         $scope.getClass = function(value) {
            return 'fa' + ($scope.selStars >= value ? '-solid' : '-regular') + ' ' + 'fa-star';
         };

         $scope.setClass = function(sender, value) {
            $scope.selStars = value;
            sender.currentTarget.setAttribute('class', $scope.getClass(value));
         };

         function formatDate() {
            let date = new Date();
            let formatStrDate = date.toDateString().split(" ").slice(1).join(" ");
            return formatStrDate;
         }
   
         $scope.addComment = function() {
            const ratingNumber = $scope.selStars;
            const userName = $scope.userCommentObj.name;
            const userComment = $scope.userCommentObj.comment;
            const timerComment = formatDate();
            $scope.dataComment.push({ratingNumber, userComment, userName, timerComment});
            
            // reset everything for the next input
            $scope.userCommentObj = {};
            $scope.selStars = 0;
            console.log($scope.dataComment)
            $scope.isOpenedForm = !$scope.isOpenedForm;
            $scope.isOpenedBtn = !$scope.isOpenedBtn;
         }

         $scope.ToggleLeaveCmt = function() {
            $scope.isOpenedForm = !$scope.isOpenedForm;
            $scope.isOpenedBtn = !$scope.isOpenedBtn;
         }

         function doDate(){
            let str = "";
            let now = new Date();
            str = now.toDateString() + ' ' + now.toLocaleTimeString();
            $scope.currentTime = str;
         }
         $interval(doDate, 1000);

         
         function findCountryName() {
            function errorGetPosition() {}
            function successGetPosition(position) {
               const { latitude, longitude } = position.coords;
               const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
               
               fetch(geoApiUrl)
                  .then(res => res.json())
                  .then(data => {
                     $scope.currentCountry = data.principalSubdivision + '-' + data.countryName;
                  })
            }

            function errorGetPosition() {
               $scope.currentCountry = "Could not retrieve your location";
            }
            
            navigator.geolocation.getCurrentPosition(successGetPosition, errorGetPosition)
         }

         findCountryName();
         function updateVisitCount() {
            fetch(`https://api.countapi.xyz/update/dhbakery/dlbakery?amount=1`)
               .then(res => res.json())
               .then(data => {
                  $scope.visitCount = data.value;
               })
         }

         // updateVisitCount();
         // console.log(angular.element(document).find('.homepage-feedback'));
         // console.log($document.find('.homepage-feedback'))
         // console.log(angular.element(document.querySelector(".homepage-feedback"))[0]);
      }
   })
