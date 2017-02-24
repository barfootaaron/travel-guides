'use strict';

app.factory("GuideFactory", function ($q, $http) {

  let loadGuides = (function() {
    return $q (function (resolve, reject) {
      $http.get('./guides.json')
      .then( function (recievedData) {
      	var x = recievedData.data.guides;
      	resolve(x);
      }).catch(function (error) {
        	reject(error);
      });
    });
  });

  return {loadGuides};
});