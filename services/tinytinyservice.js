angular
  .module('shopping')
  .service('TinyService',function($http) {
    var url = "https://tiny-tiny.herokuapp.com/collections/shoppingcart";

    function getBag() {
      return $http.get(url)
    }
    function postBag(post) {
      return $http.post(url,post);
    }

    function deleteBag(id) {
      return $http.delete(url + '/' + id);
    }

    return {
      getBag: getBag,
      postBag: postBag,
      deleteBag: deleteBag
    };
  })
