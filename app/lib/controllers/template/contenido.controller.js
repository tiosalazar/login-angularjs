angular.module(window.nameSpaceApp)
    .controller('ContenidoController', ['$scope', ContenidoController]);

function ContenidoController( $scope )
{
    var contenido = this;
    contenido.nombre = "Alquimedia";


   contenido.panelHead="Inventario de existencias";
    contenido.panelDescription="En este panel usted podra administrar los registros de su tienda";
    contenido.tableHead="Lista de usuarios registrados";
  

}