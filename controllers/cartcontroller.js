angular
  .module('shopping')
  .controller('CartController', function($scope, $location, TinyService, $routeParams){

    TinyService.getBag()
    .then(function(data){
      $scope.listings = data.data;
      window.glob5 = $scope.listings;
      console.log($scope.listings);
      $scope.lengths = $scope.listings.length;


      var total = 0;
      $scope.listings.forEach(function(el){
        total += parseFloat(el.price);
      })
      $scope.subTotal = total;

    });



    $scope.deleteFromBag = function(obj) {
      TinyService.deleteBag(obj._id)
        .then(function(data) {
          var objId = data.data._id
          var objPlace = $scope.listings.findIndex(function(el,idx,arr) {
            return el._id === objId
          });
          $scope.listings.splice(objPlace,1);
        });
    }


  })
