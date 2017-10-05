var app= angular.module("app",[]);
app.controller('picoCtrl',function($scope){
	//$scope.nombre="uriel";
	$scope.resultado=0
	$scope.calcular = function () {

		$scope.resultado=parseInt($scope.hora)+parseInt($scope.num);
		console.log($scope.resultado) ;
	};
	$scope.presentar=function(){
		return($scope.resultado) ;
	};
} );