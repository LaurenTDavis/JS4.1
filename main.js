angular.module('myApp', []);

	var mainController = function($scope, $timeout) {
		
		$scope.greeting = "Hello World";
		$scope.punctuation = '.'; 
		$scope.toSite = true;
		$scope.popup = false;


		$scope.click = function() {
			console.log('Hi Universe');
		}

		$scope.message = function() { 
			console.log("Hey! Hey! Hey!");
			$scope.punctuation = '!'; 
			$scope.surprise = true;
		}

		$scope.list = function() {
			$scope.items = true; 
		}

		$scope.mouseOver = function() {
			$scope.hovering = true; 
		}

		$scope.mouseOff = function(event) {
			$scope.hovering = false;
		}

		$scope.toUrl = function(event) {
			console.log(event);
			if (!confirm("You sure?")) {
				$scope.toSite = false; 
				event.preventDefault();
			}			
		}

		$scope.showPop = function() {
			$scope.popup = true; 
		}
	}
















angular.module('myApp').controller('mainController', ['$scope', '$timeout', mainController])