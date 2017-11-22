
appTesting
     .factory("auth", function(cookies,$location)
{
    return{
        ingresar : function(usuario, token){
            //creamos la cookie con el nombre que nos han pasado
            cookies.token_seguro = token,
            cookies.user = usuario;
            $location.path("/gestion/usuarios");
        },
        cerrar_sesion : function(){
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            cookies.remove("token_seguro"),
            cookies.remove("user");
            //mandamos al login
            $location.path("/login");
        },
        estado_sesion : function(cod){
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/gestion/usuarios","/gestion/editarUsuario/",'/login'];
            if(this.in_array($location.path(), rutasPrivadas) && typeof(cookies.token_seguro) == "undefined"){
                if (cod !== 1){
                    $location.path("/login");
                }
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if(this.in_array("/login",rutasPrivadas) && typeof(cookies.token_seguro) != "undefined"){
                $location.path("/gestion/usuarios");
            }
            
        },
        in_array : function(needle, haystack){
            var key = '';
            for(key in haystack){
                if(haystack[key] == needle){
                    return true;
                }
            }
            return false;
        }
    }




});