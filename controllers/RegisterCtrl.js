app.controller("RegisterCtrl",function($scope,$http,$window,base_url){
    $scope.inscrire = function(){
        $http.post(base_url+"ConnectionAdmin/Inscription",{nom : $scope.login, password : $scope.password}).then(function(response){
            console.log(response.data);
                $scope.msg = response.data.message;
            //$window.location.href = "index.html";
        });
    }
});