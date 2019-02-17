var app = angular.module('myApp',['ngCookies']);
app.constant('base_url','https://stormy-bastion-67986.herokuapp.com/');
//app.constant('base_url','http://localhost:8082/');
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
            if(response.data.error == 0){
                return response.data.data;
            }
            else {
                return null;
            }
        });
    }
    this.findGetParameter = function(parameterName) {
        var result = null,
            tmp = [];
        var items = location.search.substr(1).split("&");
        for (var index = 0; index < items.length; index++) {
            tmp = items[index].split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        }
        return result;
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