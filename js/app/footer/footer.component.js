'use strict'

angular.module('siteFooter')
   .component('siteFooter', {
      templateUrl: "./templates/footer.html",
      controller: function($scope) {
         function updateVisitCount() {
            fetch(`https://api.countapi.xyz/update/dhbakery/dlbakery?amount=1`)
               .then(res => res.json())
               .then(data => {
                  $scope.visitCount = data.value;
               })
         }

         updateVisitCount();
      }
   })
