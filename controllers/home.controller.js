angular
  .module('shopping')
  .controller('HomeController', function($scope,$location,ShoppingService, $routeParams, TinyService) {

    ShoppingService.getAllItems()
      .then(function(data) {
        $scope.listings = data.data.results;

      });

      if($routeParams.id) {
        ShoppingService.showItem($routeParams.id)
          .then(function(data) {
            console.log("INFO", data);
            $scope.item = data.data.results[0];
            window.glob = $scope.item;
          })
      };

      $scope.addToBag = function(post) {
          console.log('post', post);
        TinyService.postBag(post)
        .then(function() {
          //  $location.path('/shoppingSite/cart');

     })
 };

 $scope.itemClick = function (item) {
   item.isClicked = true;
 }











})
