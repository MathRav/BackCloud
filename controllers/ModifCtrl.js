app.controller('ModifCtrl',["$scope","BankService","token","$cookies",function($scope,BankService,token,$cookies){
    token.checkToken();
    var token=token.getToken();
    $scope.bank = $cookies.getObject('bank');
    $scope.modifBank = function(){
        BankService.modifBanque(token.chain,$scope.bank.id,$scope.bank.nom,$scope.bank.configuration,$scope.bank.devise).then(function(response){
            $scope.message = response.data.message;
        });
    }
}]);