app.controller('LoginCtrl',['$scope','$http','$cookies','$window','base_url','token', function($scope,$http,$cookies,$window,base_url,token){
    
    $scope.testLogin = function(){
        $http.post(base_url+"ConnectionAdmin/Connexion",{nom : $scope.login, password : $scope.password}).then(function(response){
            console.log(response.data);
            if(response.data.error == 0){
                var d=new Date();
                $cookies.putObject('token',response.data.data,{expires:new Date(response.data.data.datefin)});

                $window.location.href = "Accueil.html";
            }
            else {
                $scope.msg = response.data.message;
            }
        });
    }
}]);
