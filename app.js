(function() {
  
  var app = angular.module("productViewer", ["ngRoute"]);
  console.log("From App.js....");
  console.log(app);
  
  app.config(function($routeProvider) {
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainController"
      })
      .when("/product/:productId", {
        templateUrl: "product.html",
        controller: "ProductController"
      })
      .otherwise({redirectTo:"/main"});
  });
  
}());