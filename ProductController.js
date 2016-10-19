(function() {
        
    var app = angular.module("productViewer");

    function ProductController($scope, myRetail, $routeParams) {
        
        var onProductComplete = function(data){
          $scope.product = data;
        };
        
        var onError = function(reason) {
          $scope.error = "Could not fetch the Data.";
        };
        
        console.log("from ProductController..");
        $scope.productId = $routeParams.productId;
        myRetail.getProductDetails($scope.productId).then(onProductComplete, onError);
    }
    
    console.log("ProductController.js..");
    app.controller("ProductController", ProductController);

})();