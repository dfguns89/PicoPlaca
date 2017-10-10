var app= angular.module("app",[]);
app.controller('picoCtrl',function($scope){
	//$scope.nombre="uriel";
	$scope.resultado="";
	$scope.data = {
    model: null,
    availableOptions: [
      {id: '1', name: 'Lunes'},
      {id: '2', name: 'Martes'},
      {id: '3', name: 'Miercoles'},
      {id: '4', name: 'Jueves'},
      {id: '5', name: 'Viernes'}
    
    ]
   };
   /*$scope.data2={
   		model: null,
    availableOptions: [
      {id: '1', name: '1:00'},
      {id: '2', name: '2:00'},
      {id: '3', name: '3:00'},
      {id: '4', name: '4:00'},
      {id: '5', name: '5:00'},
      {id: '6', name: '6:00'},
      {id: '7', name: '7:00'},
      {id: '8', name: '8:00'},
      {id: '9', name: '9:00'},
      {id: '10', name: '10:00'},
      {id: '11', name: '11:00'},
      {id: '12', name: '12:00'},
      {id: '13', name: '13:00'},
      {id: '14', name: '14:00'},
      {id: '15', name: '15:00'},
      {id: '16', name: '16:00'},
      {id: '17', name: '17:00'},
      {id: '18', name: '18:00'},
      {id: '19', name: '19:00'},
      {id: '20', name: '20:00'},
      {id: '21', name: '21:00'},
      {id: '22', name: '22:00'},
      {id: '23', name: '23:00'},
      {id: '24', name: '24:00'}
    ]
   };*/
	$scope.calcular = function () {
		var placa;
		var ultDig;
		placa=$scope.placa;
		ultDig=placa.substr(5,1);
		//console.log($scope.data.model);
    var horaform=(($scope.horaSlct.getHours()*60)+$scope.horaSlct.getMinutes());
    //console.log(horaform);
    //console.log($scope.horaSlct.getHours()*60);

    var horaini1=420;
    var horafin1=570;
    var horaini2=960;
    var horafin2=1170;

    if((horaform>=horaini1 && horaform<=horafin1)||(horaform>=horaini2 && horaform<=horafin2)){


		switch ($scope.data.model) {
    case '1':
        if(ultDig<=2){
          $scope.resultado="No puede Circular";
        }else{
          $scope.resultado="Si puede Circular";
        }
        break;
    case '2':
         if(ultDig<=4 && ultDig>=3){
          $scope.resultado="No puede Circular";
        }else{
          $scope.resultado="Si puede Circular";
        }
        break;
    case '3':
        if(ultDig<=5 && ultDig>=6){
          $scope.resultado="No puede Circular";
        }else{
          $scope.resultado="Si puede Circular";
        }
        break;
    case '4':
        if(ultDig<=7 && ultDig>=8){
          $scope.resultado="No puede Circular";
        }else{
          $scope.resultado="Si puede Circular";
        }
        break;
    case '5':
        if(ultDig==9 || ultDig==0){
          $scope.resultado="No puede Circular";
        }else{
          $scope.resultado="Si puede Circular";
        }
        break;
    default:


}
  }else{
      $scope.resultado="Si puede Circular";
    }
		
		
		
	};
	 
	$scope.presentar=function(){
		//console.log($scope.data2.model);

		return($scope.resultado) ;
	};
} );