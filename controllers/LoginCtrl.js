app.controller('LoginCtrl',['$scope','$http','$cookies','$window','base_url','token', function($scope,$http,$cookies,$window,base_url,token){
    
    $scope.testLogin = function(){
        $http.post(base_url+"ConnectionAdmin/Connexion",{nom : $scope.login, password : $scope.password}).then(function(response){
            if(response.data.Status == "200"){
                console.log(response.data);
                var d=new Date();
                $cookies.putObject('token',response.data.body,{expires:new Date(response.data.body.datefin)});

                $window.location.href = "Accueil.html";
            }
            else {
                $scope.msg = "Login/Mot de passe incorrectes";
            }
        });
    }
}]);
