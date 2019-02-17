
app.controller('AccueilController',["$scope","BankService","token",function($scope,BankService,token){
    var token=token.getToken();
    $scope.TauxFixe=null;$scope.TauxCLCL=null;
    $scope.TauxCLHS=null;
    $scope.name=null;
    $scope.devise=null;
    $scope.message=null;
    $scope.saveBank=function(){
        configs={
            TauxFixe:$scope.TauxFixe,
            TauxCLCL:$scope.TauxCLCL,
            TauxCLHS:$scope.TauxCLHS
        }
        console.log(configs);
        BankService.InsertBanque(token.chain,$scope.name,configs,$scope.devise).then(function(response){
            console.log(response);
            $scope.message=response.data.message;
        });
    }
}])