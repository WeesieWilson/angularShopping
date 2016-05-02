angular
  .module('shopping',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/shoppingSite/:id', {
        templateUrl: './angularShopping/detailListing.html',
        controller: 'HomeController'
      })
      .when('/cart', {
        templateUrl: './angularShopping/shoppingCart.html',
        controller: "CartController"
      })
      .when('/404',{
        template: '<h1> Nothing </h1>',
      })
      .otherwise({
         redirectTo: '/404'
      })
  })
