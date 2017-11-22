angular.module(window.nameSpaceApp)
    .controller('LoginController', ['$scope', '$http','auth','$rootScope','$location', LoginController]);

function LoginController( $scope, $http ,auth,$location)
{
   
 



  page_title="Login";

	 var lg=this;

    lg.validarSession = function(){
                    auth.estado_sesion(1);
                };

                
                lg.validarSession();

   lg.toggle = true;
   lg.msj_incorecto = true;
   lg.msj_correcto = true;
   
   
   lg.ingresar=function(){
            if( lg.username=="david" && lg.password=="1234"){
              auth.ingresar( lg.username,'HasSecuty');
            	lg.mensaje="Datos Correctos, ingresando al sistema ...";
            	lg.msj_correcto = true;
             //   $location.path("/gestion/usuarios");
       }else{
       	 lg.msj_incorecto = false;
       	 lg.mensaje="Usuario y/o contraseña incorrectos";
       }
  }

   /* lg.registrar=function(){

           lg.mensaje="Registro completo,  ingresando al sistema ...";
           lg.msj_correcto = true;
           $location.path("/gestion/usuarios");
      
  }*/

       
}