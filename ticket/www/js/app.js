angular.module('starter', [ 'ionic'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			StatusBar.styleLightContent();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('tab', {
		url : '/tab',
		abstract : true,
		templateUrl : 'partial/tabs.html'
	}).state('tab.booking', {
		url : '/booking',
		views : {
			'tab-booking' : {
				templateUrl : 'partial/tab-booking.html'
			}
		}
	}).state('tab.orders', {
		url : '/orders',
		views : {
			'tab-orders' : {
				templateUrl : 'partial/tab-orders.html'
			}
		}
	}).state('tab.account', {
		url : '/account',
		views : {
			'tab-account' : {
				templateUrl : 'partial/tab-account.html'
			}
		}
	});

	$urlRouterProvider.otherwise('/tab/dash');

});
