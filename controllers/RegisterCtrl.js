app.controller("RegisterCtrl",function($scope,$http,$window,base_url){
    $scope.inscrire = function(){
        $http.post(base_url+"ConnectionAdmin/Inscription",{nom : $scope.login, password : $scope.password}).then(function(response){
            console.log(response.data);
            if(response.data.Status == "200"){
                $scope.msg = "Inscription reussie";
            }
            else {
                $scope.msg = response.data.body;
            }
            //$window.location.href = "index.html";
        });
    }
});