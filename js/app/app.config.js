'use strict'

angular.module('mainApp').
   config(function($routeProvider, $locationProvider){
      // $locationProvider.html5Mode(true);
      $routeProvider
         .when("/",
         { 
            template : "<site-homepage></site-homepage>"
         })
         .when("/home",
         { 
            template : "<site-homepage></site-homepage>"
         })
         .when("/gallery",
         { 
            template : "<gallery></gallery>",
            css: ['/css/product.css'],
         })
         .when("/gallery/:id",
         { 
            template : "<gallery-detail></gallery-detail>"
         })
         .when("/checkout",
         { 
            template : "<checkout-cart></checkout-cart>"
         })
         .when("/login",
         { 
            template : "<login></login>"
         })
         .when("/contact",
         { 
            template : "<contact></contact>"
         })
         .when("/blog",
         { 
            template : "<blog></blog>"
         })
         .when("/blog/:id",
         { 
            template : "<blog-detail></blog-detail>"
         })
         .when("/about",
         { 
            template : "<about></about>"
         })
         .otherwise(
            {redirectTo: "/"}
         )
   })