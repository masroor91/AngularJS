	var app=angular.module('myApp', [])
	
	app.controller('getDetails',['$scope', function ($scope) {
		
		$scope.detailCollection=[{name:"John", country:"USA"},   
		                  {name:"Mike", country:"Norway"},
		                  {name:"Michael", country:"UK"},
		                  
		                  ];
	
	}])