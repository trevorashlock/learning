
app.controller("mainCtrl", function($scope, $http) {    
    $scope.message = "Github Viewer";
    $scope.username = "angular";
    
    var onUserComplete = function(response) {
        $scope.user = response.data;
    }
   
    };
    var errorOn = function() {
     $scope.error = "Nope, Something went wrong.";

   };
   $scope.search = function(username) {
   $http.get("https://api.github.com/users/"+ username) //this wont let me grab the gravatar image of the user name?
  	   .then(onUserComplete, errorOn);
   






   	  
   
   

   



});

//.then(function(response) {
  	    	
	    //     $scope.user = response.data;
	    // }); 