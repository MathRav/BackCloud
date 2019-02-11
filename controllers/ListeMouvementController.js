app.controller('ListeMouvementController',["$scope","MouvementService","token","$window",function($scope,MouvementService,token,$window){
    token.checkToken();
    var token=token.getToken();
    $scope.liste=null;
    MouvementService.ListerMouvementNC(token).then(function(response){
        console.log(response.data.body);
        $scope.liste=response.data.body;
    });
    $scope.confirm = function(index){
        var idM = $scope.liste[index].id;
        MouvementService.confirmerMouvement(token,idM).then(function(response){
            console.log(response);
            $window.location.reload();
        });
    }
}]);