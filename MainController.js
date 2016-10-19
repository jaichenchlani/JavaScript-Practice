(function() {
        
    var app = angular.module("productViewer");
    
    function MainController($scope, $location) {
        
        $scope.search = function(productId) {
          $location.path("/product/" + productId);
        }
        
        console.log("from MainController..");
        $scope.productId = "13860428";
    }
    
    console.log("MainController.js..");
    app.controller("MainController", MainController);

})();