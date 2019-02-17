app.controller('ModifCtrl',["$scope","BankService","token","$cookies","client",function($scope,BankService,token,$cookies,client){
    token.checkToken();
    var token=token.getToken();
    //$scope.bank = $cookies.getObject('bank');
    var idB= client.findGetParameter('idB');
    BankService.getBanque(token,idB).then(function(response){
        console.log(response.data);
        $scope.bank = response.data.data;
    });
    $scope.modifBank = function(){
        BankService.modifBanque(token.chain,$scope.bank.id,$scope.bank.nom,$scope.bank.configuration,$scope.bank.devise).then(function(response){
            $scope.message = response.data.message;
        });
    }
}]);