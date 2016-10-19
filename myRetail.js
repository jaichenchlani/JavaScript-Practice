(function() {
  var myRetail = function($http) {
  
    var getProductDetails = function(productId) {
      var myUrl = "https://api.target.com/products/v3/";
      myUrl += productId;
      myUrl += "?fields=descriptions&id_type=TCIN&key=43cJWpLjH8Z8oR18KdrZDBKAgLLQKJjz";
      console.log(myUrl);
      return $http.get(myUrl)
                  .then(function(response) {
                    return response.data;
                  });
    };
      
    return {
      getProductDetails: getProductDetails
    };  
  };
  
  var module = angular.module("productViewer");
  module.factory("myRetail", myRetail);
  
}());