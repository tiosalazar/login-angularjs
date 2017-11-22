angular.module(window.nameSpaceApp)
    .controller('MenuController', ['$scope', MenuController]);

function MenuController( $scope )
{
    var menu = this;
    menu.nombre = "Alquimedia";


    menu.items=[
           {
            name: 'Usuarios',
            icono:'fa fa-user',
            accion:'#dropdown-element',
            TieneHijos:'1',
              Hijos:[{
                    name:'listado Usuarios',
                    accion:'app.users',
                    },
                    {
                      name:'Nuevo Usuario',
                    accion:'app.usersNuevo',
                    }],
            target:'_self'     

           },
           {
            name: 'Cerrar Sesión',
            icono:'fa fa-times-circle',
            accion:'#/login',
            TieneHijos:0,
            target:'_self'  

           }

        ];
  

}