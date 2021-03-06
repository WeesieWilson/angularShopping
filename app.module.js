angular
  .module('shopping',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/shoppingSite/:id', {
        templateUrl: 'templates/detailListing.html',
        controller: 'HomeController'
      })
      .when('/cart', {
        templateUrl: 'templates/shoppingCart.html',
        controller: "CartController"
      })
      .when('/404',{
        template: '<h1> Nothing </h1>',
        controller: 'ShoppingController'
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
