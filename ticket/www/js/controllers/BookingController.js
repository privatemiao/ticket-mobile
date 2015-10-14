angular.module('ticket.controllers').controller("BookingController", function($ionicPlatform, $scope, BookingService) {
	$ionicPlatform.ready(function() {
		$scope.title = 'Booking...';
		BookingService.echo();
	});
});