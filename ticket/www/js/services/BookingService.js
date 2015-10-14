angular.module('ticket.services').factory('BookingService', function() {
	return {
		echo : function(){
			console.log('Here is BookingService...');
		}
	};
});