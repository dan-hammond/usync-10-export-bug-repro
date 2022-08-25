angular.module('umbraco').controller('TestPropertyEditorController', function ( $scope ) {
  if ( !$scope.model.value || typeof $scope.model.value !== 'object' ) {
    $scope.model.value = {
      boolProp: false,
      otherBoolProp: true,
      numProp: 1,
      otherNumProp: 0.5,
      stringProp: "test",
      otherStringProp: "",
      objectProp: {
        nestedBoolProp: false,
        nestedOtherBoolProp: true,
        nestedNumProp: 1,
        nestedOtherNumProp: 0.5,
        nestedStringProp: "test",
        nestedOtherStringProp: ""
      }
    }
  }
});
