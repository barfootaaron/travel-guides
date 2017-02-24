"use strict";

app.controller('BookCtrl', function($scope, GuideFactory) {

	GuideFactory.loadGuides()
	.then(function(bookCollection) {
		$scope.books = bookCollection;
	});
});