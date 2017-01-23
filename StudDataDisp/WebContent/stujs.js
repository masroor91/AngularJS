var app= angular.module('myApp',[]);
app.controller('stuController',['$scope',function($scope){
	$scope.student=[{fname:"Mahesh", lname:"Kumar", fees:500,
					 subjects:[{name:"Physics", marks:70},
					          {name:"Chemistry", marks:80},
					          {name:"Mathematics", marks:85},
					          {name:"English", marks:90},
					          {name:"Information Practices", marks:95},
					          {name:"Physical Education", marks:95}
					          ]	
		
					},
					{fname:"Masroor", lname:"Alam",fees:600,
						subjects:[{name:"Physics", marks:85},
						          {name:"Chemistry", marks:96},
						          {name:"Mathematics", marks:88},
						          {name:"English", marks:85},
						          {name:"Information Practices", marks:93},
						          {name:"Physical Education", marks:93}
						          ]	
			
						}
	                
	                ];
	
		$scope.fullname=function(){
			var stuObj;
			stuObj=$scope.student;
			return stuObj.fname+" "+stuObj.lname;
		};
		
		$scope.calcPercent=function(subs){
			var sum=0;
			
			for (var i = 0; i <subs.length ; i++) {
				sum+=subs[i].marks;
			}
			var percent= sum*100/600;
			return percent.toFixed(2);
		}
		
		$scope.myOrderBy=function(x){
			$scope.orderByMe=x;
		}


}])