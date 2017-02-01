var app= angular.module('myApp',[]);

app.controller('myController', function($scope){
	$scope.fname='';
	$scope.lname='';
	$scope.pass1='';
	$scope.pass2='';
	
	$scope.users=[{id:1, fname:'Hege', lname:"Pege" },
	              {id:2, fname:'Kim',  lname:"Pim" },
	              {id:3, fname:'Sal',  lname:"Smith" },
	              {id:4, fname:'Jack', lname:"Jones" },
	              {id:5, fname:'John', lname:"Doe" },
	              {id:6, fname:'Peter',lname:"Pan" }   
	              ];
	
	$scope.edit=true;
	$scope.error=false;
	$scope.incomplete=false;
	$scope.hideform=true;
	
	$scope.editUser= function(id) {
		
		$scope.hideform=false;
		
		if (id=='new'){
			$scope.edit=true;
			$scope.incomplete=true;
			$scope.fname='';
			$scope.lname='';
			
		}
		else{
			$scope.edit=false;
			$scope.fname=$scope.users[id-1].fname;
			$scope.lname=$scope.users[id-1].lname;
		}
	}
	
	
	$scope.$watch('pass1', function() {$scope.test();}); //watches model variables
	$scope.$watch('pass2', function() {$scope.test();});
	$scope.$watch('fname', function() {$scope.test();});
	$scope.$watch('lname', function() {$scope.test();});
	
	
	
	$scope.test= function() {
		if ($scope.pass1 != $scope.pass2) {
			$scope.error=true;
		}
		else{
			$scope.error=false;
		}
		
		$scope.incomplete=false;
		
		if ($scope.edit && (!$scope.fname.length||!$scope.lname.length
				||!$scope.pass1.length||!$scope.pass2.length)) {
			$scope.incomplete=true;
		}
		
	};
	
	
});
