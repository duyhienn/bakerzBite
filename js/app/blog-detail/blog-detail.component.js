'use strict'

angular.module('blogDetail')
   .component('blogDetail', {
      templateUrl: "./templates/blog-detail.html",
      controller: function ($scope, $http, $window, $routeParams) {
         $window.scrollTo(0, 0);

         $scope.blogList =
         [
            {
               "id": "1",
               "imgUrl": [
                  "/img/pastriesNew/cookies-9.jpeg",
                  "/img/hover/hover-32/item-a.jpeg",
                  "/img/hover/hover-32/item-b.jpeg"
               ],
               "cakeType": "cookies",
               "title": "Chocolate Chip Cookie",
               "description": "Usually accompanied by a glass of milk or a cup of hot tea or coffee, chocolate chip cookies are well balanced between salty and sweet in flavor, tenderly chewy in texture, and filled with small melting chocolate pyramids, bringing a generation of Americans back to their childhood. The origin story of these sweet treats is incredibly interesting, almost as the cookies themselves. The Toll House Inn was a popular bed-and-breakfast in Whitman, Massachusetts, bought by Ruth Graves Wakefield and her husband in 1930. Ruth's cooking was so good that the inn gained an excellent reputation in a short span of time. ",
               "price": "0.7"
            }
         ]

         $scope.title = $routeParams.id;
      }
   })
