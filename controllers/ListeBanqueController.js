app.controller('ListeBanqueController',["$scope","BankService","token","$cookies","$window",function($scope,BankService,token,$cookies,$window){
    token.checkToken();
    var token=token.getToken();
    $scope.liste=null;
    BankService.ListerBanques(token).then(function(reponse){
        console.log(reponse);
        $scope.liste=reponse.data.body;
    });
    $scope.modifier = function(index){
        //$cookies.putObject('bank',$scope.liste[index]);
        $window.location.href = "modificationBanque.html?idB="+$scope.liste[index].id;
    }
}]);