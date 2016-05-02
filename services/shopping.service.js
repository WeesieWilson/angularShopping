angular
  .module('shopping')
  .service('ShoppingService',function($http,$q) {
    var key = '6kwxpz8gt7v6ehmro8cgig09';
    var limit = '&limit=50';
    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var img = '&includes=MainImage';
    var urlShow ='https://openapi.etsy.com/v2/listings/';
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + img);


    function getAllItems() {
      return $http.get(cors + url)
    };

    function showItem(id) {
      return $http.get(cors + encodeURIComponent(urlShow + id + "?api_key=" + key + img));
    };








    return {
      getAllItems: getAllItems,
      showItem: showItem
    };

  });
