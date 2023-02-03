'use strict'

angular.module('blogDetail')
   .component('blogDetail', {
      templateUrl: "./templates/blog-detail.html",
      controller: function ($scope, $http, $window, $routeParams) {
         $window.scrollTo(0, 0);

         const blogList =
         [
            {
               "id": "1",
               "title": "The benefits of eating cakes",
               "titlesub": "People often think that candies are unhealthy foods. However, according to many nutrition experts around the world, confectionery also brings many positive effects to our lives such as protecting the heart, reducing stress,...\n\nHere are 5 benefits of eating cakes",
               "contentList": [
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt1.jpg",
                     "header": "1. Cakes help reduce stress and dispel sadness",
                     "body": "Belgian scientists surveyed the reactions of a group of people when faced with a negative scene, and came up with the following results: those who ate sweets were less affected by their mood than those who did not. and ate salty meat. They concluded that, the fat found in the cakes helped stimulate the brain to release more endorphins and serotonin (two hormones that feel happy and happy). Helping people easily have an indescribably excited mood, reduce stress and quickly forget sadness"
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt2.jpg",
                     "header": "2. Macrobiotic confectionery helps prolong youth",
                     "body": "Besides, on the market today, there are many kinds of confectionery made with nutritious nuts, cereals, and vegetables such as marzipan, peanut candy, or taro cake, pumpkin, .. These candies are not only delicious, but also rich in nutrients that are extremely important in maintaining and prolonging youth such as vitamins A, D, and E."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt3.jpg",
                     "header": "3. Chocolate flavor helps protect the heart",
                     "body": "According to cardiologist Michael Ozner, author of The Miami Mediterranean Diet, chocolate offers a number of positive cardioprotective benefits. Because chocolate contains a mixture of antioxidants 'flavonoids' that have the ability to prevent stroke by increasing blood flow to the heart, and reducing harmful cholesterol."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt4.jpg",
                     "header": "4. Mint enhances intelligence",
                     "body": "Another study by neuroscientist Alan Hirsch also showed that the taste of mint can stimulate beta waves in the brain. Research has conducted an experiment on people who work hard mentally and mentally. As a result, after smelling the mint scent, or sucking on the cool mint candies, they will immediately be awake, intelligent, and much more refreshed after stressful working moments."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt5.jpg",
                     "header": "5. Herbal candy, diet cake",
                     "body": "Not stopping there, following the trend of healthy eating, there are also extremely healthy options such as sugar-free herbal candies, ginseng candies, rye bread,... Confectionery foods This functional, fiber-rich food will not cause harm even when eaten in large quantities, but also helps to increase resistance and prevent disease."
                  }
               ],
            }
         ]

         angular.forEach(blogList, function(item){
            if(item.id == $routeParams.id){
               $scope.blogItem = item
            }
         });

         $scope.title = $routeParams.id;
      }
   })
