angular.module(window.nameSpaceApp)
    .controller('HeaderController', ['$scope', HeaderController]);

function HeaderController( $scope )
{
    var header = this;

    header.nombrePricipal="Administrador de registros";

}