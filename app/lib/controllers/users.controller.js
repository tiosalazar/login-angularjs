angular.module(window.nameSpaceApp)
    .controller('UsersController', ['$scope', '$http','auth','DTOptionsBuilder','DTColumnBuilder','$stateParams',UsersController]);

function UsersController( $scope, $http,auth,DTOptionsBuilder, DTColumnBuilder,$stateParams  )
{



    var usr = this;
   

    /*Si se desea implementar la factoria de seguridad descomentar

    usr.validarSession = function(){
                    auth.estado_sesion();
                };

                
                usr.validarSession();*/


      usr.DataUsers=[];

    /*DSO 
      Datos del panel administrativo.
   */
   

 
/*DSO 
   Cabeceras de la tabla.
   */
    usr.Theads=[ 
                  { 
                    name:'Avatar'
                  },
                  { 
                    name:'Nombres'
                  },
                  {
                    name:'Apellidos'
                  },
                  {
                    name:'E-mail'
                  },
                  {
                   name:'Telefono'
                  },{
                    name:'Acciones'
                  }
     ];
   

   /*DSO 
    Leer los datos del json y imprimirlos en la tabla.

   */

    $http({
        method: "GET",
        url: 'http://test.alquimedia.co/rest/user',
    }).success(function (data, status, headers, config) {   
      
        usr.DataUsers=data;
         console.log(data);
    }).error(function (data, status, headers, config) {
        alert("Error. Int\u00E9ntalo de nuevo." + status);
    });


  /*DSO 
   Función la cual se encarga de crear los usuarios desde el formulario.

   */
    usr.msj_incorecto = true;
    usr.msj_correcto = true;
    usr.crearUsuario=function(){

        $http({
        method: "POST",
        url: 'http://test.alquimedia.co/register-user',
        data:{
        first_name:usr.nombres,
        last_name:usr.apellidos,
        full_name:usr.nombres+" "+usr.apellidos,
        telephone:usr.telefono,
        email:usr.email
          }
    }).success(function (data, status, headers, config) {   

      if (data.error) {
        usr.mensaje=data.error;
        usr.msj_incorecto = false;
      }
             usr.mensaje="Usuario Creado Correctamente";
              usr.msj_correcto = false;
        console.log(data);
    }).error(function (data, status, headers, config) {
       usr.mensaje="Se presentó un error al crear el usuario, por favor intentelo de nuevo más tarde.";
         usr.msj_incorecto = false;
        
    });
    }

    /*DSP
    Metodo Eliminar Usuario

    */
    usr.EliminarUsuario=function(id,position){
     var id=parseInt(id);
       $http({
        method: "POST",
        url: 'http://test.alquimedia.co/delete-user',
        data:{ user_id:id}
    }).success(function (data, status, headers, config) {  

      usr.DataUsers.splice(position,1);
     

       console.log(data);
         console.log(status);
          console.log(status);
    }).error(function (data, status, headers, config) {
         console.log(data + status);
    });
          
    }

    /*DS
      Metodo Eliminar
    */
       usr.ModificarUsuario=function(id){


        $http({
        method: "POST",
        url: 'http://test.alquimedia.co/update-user',
        data:usr.DataUser,
    }).success(function (data, status, headers, config) {   
        usr.msj_correcto=false;
        usr.mensaje="Los datos del usuario fueron actualizados Correctamente";
    }).error(function (data, status, headers, config) {
       usr.msj_incorecto=false;
        usr.mensaje="Se presento un problema al actulizar los datos";
        console.log(data);
    });
    
    }


    usr.estadoIncorrecto=function(){
      return usr.msj_incorecto;
    }
    usr.estadoCorrecto=function(){
      return usr.msj_correcto;
    }


   usr.DatosModificar=function(){
     $http({
        method: "GET",
        url: 'http://test.alquimedia.co/rest/user/'+$stateParams.id,
    }).success(function (data, status, headers, config) {   
      
        usr.DataUser=data;
         console.log(data);
    }).error(function (data, status, headers, config) {
        alert("Error. Int\u00E9ntalo de nuevo." + status);
    });

   }


}