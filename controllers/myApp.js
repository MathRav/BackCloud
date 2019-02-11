var app = angular.module('myApp',['ngCookies']);
app.constant('base_url','https://­stormy-bastion-67986.­herokuapp.com/');
app.service('token',['$cookies','$window',function($cookies,$window){
    this.checkToken= function(){
        if(!$cookies.getObject('token')){
            $window.location.href = "register.html";
        }
    }
    this.getToken = function(){
        return $cookies.getObject('token');
    }
}]);
app.service('client',['$http','base_url','token',function($http,base_url,token){
    this.getListeBanque= function(){
        var tok = token.getToken();
        $http.post(base_url+"Banque/ListeBanqueClient",{Token : tok.chain}).then(function(response){
            console.log(response.data);
            if(response.data.Status == "200"){
                return response.data.body;
            }
            else {
                return null;
            }
        });
    }
}]);
app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
app.config(function($httpProvider){
    $httpProvider.defaults.useXDomain = true;
});
/*app.config(function($routeProvider){
    $routeProvider
    .when("/acceuil",{
        templateUrl : "index.html"
    });
});*/