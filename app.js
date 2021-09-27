(function(){
  //to make sur we dont do any mistakes
  'use strict'
  angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope) {
  $scope.name="";
  $scope.FctLunch= function () {
    if($scope.name!=""){
        $scope.value=$scope.name.split(',');
        $scope.lo= $scope.value.length;
        if($scope.lo<=3){
        $scope.msg="Enjoy"
        }
        else if($scope.lo>3){
          $scope.msg="Too much"
        }
  }else{
      $scope.msg="rien"
    }
    return $scope.msg;
  }




}
);



})();
