'use strict';

var app = angular.module("TravelApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: "/partials/guide-list.html",
		controller: "BookCtrl"
	});
});

