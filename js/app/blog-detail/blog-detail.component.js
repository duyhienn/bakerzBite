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
                     "img": "img/gourmet-cake/gourmetcake-stt14.jpg",
                     "header": "5. Herbal candy, diet cake",
                     "body": "Not stopping there, following the trend of healthy eating, there are also extremely healthy options such as sugar-free herbal candies, ginseng candies, rye bread,... Confectionery foods This functional, fiber-rich food will not cause harm even when eaten in large quantities, but also helps to increase resistance and prevent disease."
                  }
               ],
            },
            {
               "id": "2",
               "title": "pastry history - where is the patriarch of the cake industry",
               "titlesub": "Cakes are often known as cakes made from dough, cooked with many different methods such as steaming, baking, cold ... used in dessert. However, not everyone knows the history of cakes, where is the patriarch of cakes? Let's learn the history of cakes in this article. Pastry is generally a word used to refer to pastries made from the main ingredient of flour and some other flours. There are many types of cakes made from different ingredients and recipes, cakes also have many good health benefits. This is also considered as one of the indispensable foods in the gatherings of friends, relatives and important holidays.\n\nIn fact, cakes are considered to be easy and quite simple cakes that can provide the body with energy, have the effect of reducing stress, or eating a little chocolate cake every day will help improve health problems. Heart. Cakes are also very useful for people with low blood pressure, if the drop in blood pressure occurs suddenly, you should immediately eat a candy and a cake to overcome this situation. Cakes have so many healthy uses, but not everyone knows where the history of pastries comes from. Let's find out in the article.",
               "contentList": [
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt6.jpg",
                     "header": "Pastry history - Where is the patriarch of the cake industry?",
                     "body": "Cakes with many types of cakes are known to have originated in Europe, but the history of pastry says that the ancient Egyptians were the ancestors of the cake industry. There is a lot of evidence and scientific evidence that the Egyptian baking technique dates back to very early. The cake is kneaded with flour and then using natural moistening methods, then it will be compressed and baked on the flat surface of a hot rock. The first pastries were made to look like unleavened bread.\n\nIt wasn't until the middle of the 17th century that the forerunner of today's cakes officially appeared in Europe. Pastries in this period were often not molded or made with processing methods that involved too many stages. The bakers of this period often made cakes with the dough spread on a flat surface and put in the oven, this is also considered the most common and preferred method to use. Later, when the bakery industry made new progress, baking tools and molds were born, they were made with paper, metal or wooden molds. The first cake molds were made extremely simple, but the cake molds of many shapes and materials like today appear."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt35.jpg",
                     "header": "The first cakes that changed the world's perception",
                     "body": "Cakes when first appeared with a shape that looks like bread, but they are not too fluffy. Until the middle of the 19th century, inventions in the world of dough with the appearance of baking powder changed the world's view of cakes. This milestone has taken pastry to the next level with more fluffy cakes that are also easier to make. The multi-layered cakes sweetened with added sugar and beautifully decorated whipped cream are the pinnacle of the birthday cake art we use today."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt8.jpg",
                     "header": "Pastries from Europe",
                     "body": "Although originating from Egypt, the cakes have their name from 'Cake', the origin of European pastries has a long history, from the Viking times the cakes were made from flour of all kinds and If you use sweeteners such as sugar and honey, are mixed with eggs and have the same amount of fat as buttermilk, the cake that is raised during baking is called a cake."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt55.jpg",
                     "header": "Sweets in Asia",
                     "body": "When traditional pastries originating from the West were introduced to Asian countries, the combination of cake flavors was more varied. The introduction of pastry into Asian countries was later than that of other countries and the traditional sweets of each country. These cakes are reduced in fatty ingredients and made them more suitable for Asian palates.\n\nAbove are a few features of the history of cakes, although the cakes are so small, they have gone through historical periods stretching around the world. Every cake we enjoy today is made and modified many times after each historical period, so understanding the origin of cakes is essential for all of us."
                  },
               ],
            },
            {
               "id": "3",
               "title": "When is the best time to eat sweets?",
               "titlesub": "Sugar in sweet foods is an important source of energy for the body, but if it is too much, it will cause addiction and face many health dangers. So what time should sweet lovers eat to be safe without causing fat?",
               "contentList": [
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt52.jpg",
                     "header": "1.When to eat sweets?",
                     "body": "- When the body is tired: eating sugar at this time will help you quickly overcome hunger, but not eating too much will affect the stomach and intestines.\n\n- When you feel your heart pounding, headache, dizziness: at this time, eating sweets or fruits will increase blood sugar, help stabilize mood, improve heart rate and dizziness.\n\n- When taking a bath or before swimming: at this time, it is necessary to add water and energy, especially sugar to prevent hypoglycemia that may occur.\n\n- When sweating: when you are sweating or have digestive problems such as diarrhea, you should drink sugar water or use sweets to improve the condition.\n\n- You should eat in the morning or noon to help the spirit of excitement, recharge. Be careful not to eat too much.\n\n- If you eat a lot of sweets in the morning, you should increase green vegetables in the afternoon and evening to reduce the body's sugar absorption."
                  },
                  {
                     "img": "img/gourmet-cake/gourmetcake-stt11.jpg",
                     "header": "2.Time not to eat sweets",
                     "body": "- Before meals: should not use sweets before meals, because it will inhibit metabolism in the body, reduce appetite, affect metabolism.\n\n- Before going to bed or after dinner: this time should not use sweets because in the evening we consume less energy, the body will increase the absorption of stored energy. Sugar will now turn into white fat under the skin, easily causing obesity and a number of other dangers.\n\nIn addition, using sweets at night will damage tooth enamel, creating a favorable environment for bacteria to grow causing bad breath."
                  },
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
