angular.module('ticket.controllers').controller("BookingController", function($ionicPlatform, $scope, BookingService) {
	$ionicPlatform.ready(function() {
		$scope.title = 'Booking...';
		BookingService.echo();

		$scope.datepickerObject = {
			inputDate : new Date(), // Optional
			mondayFirst : true, // Optional
			showTodayButton : 'true', // Optional
			modalHeaderColor : 'bar-positive', // Optional
			modalFooterColor : 'bar-positive', // Optional
			from : new Date(2012, 8, 2), // Optional
			to : new Date(2018, 8, 25), // Optional
			callback : function(val) { // Mandatory
				this.inputDate = val;
			}
		};
	});

	//
	//
});