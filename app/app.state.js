//angular.module(window.nameSpaceApp, ['ui.router', 'oc.lazyLoad'])
appTesting
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ( $stateProvider, $urlRouterProvider ) {

           var cCache = new Date().getTime();
            

            var routeApp = {
                structureApp: {
                    abstract: true,
                    url:'',
                    views: {
                        'app_header':{
                            templateUrl: 'views/template/header.html?t='+cCache,
                            controller: 'HeaderController',
                            controllerAs: 'header'
                        },
                        'app_footer':{
                            templateUrl: 'views/template/footer.html?t='+cCache,
                            controller: 'FooterController',
                            controllerAs: 'footer'
                        },
                        'app_menu':{
                            templateUrl: 'views/template/menu.html?t='+cCache,
                            controller: 'MenuController',
                            controllerAs: 'menu'
                        },
                        '': {
                            templateUrl: 'views/app.html'
                        }
                    },
                    resolve: {
                        deps: ['$ocLazyLoad', '$rootScope', function( $ocLazyLoad,$rootScope ){

                            return $ocLazyLoad.load([
                                'lib/controllers/template/header.controller.js',
                                'lib/controllers/template/footer.controller.js',
                                'lib/controllers/template/menu.controller.js'
                            ])

                        }]
                    }
                },
                notFound: {
                    utl: '/404',
                    templateUrl: 'views/404.html?t='+cCache
                },
                users: {
                    url: '/gestion/usuarios',
                    controller: 'UsersController',
                    templateUrl: 'views/layouts/users.html?t='+cCache,
                    controllerAs: 'usr',
                    data:{
                                pageTitle:'Gestión de Usuarios',
                                pageHead: 'Inventario de existencias',
                                pageDescription:'En este panel usted podra administrar los registros de su tienda',
                                tableHead:'Lista de usuarios registrados'
                            },
                    resolve: {
                        deps: ['$ocLazyLoad', function( $ocLazyLoad ){

                            return $ocLazyLoad.load( 'lib/controllers/users.controller.js' )

                        }]
                    }
                },
                usersNuevo:{
                    url: '/gestion/nuevoUsuario',
                    controller: 'UsersController',
                    templateUrl: 'views/layouts/newUser.html?t='+cCache,
                    controllerAs: 'usr',
                    data:{
                                pageTitle:'Nuevo registro',
                                pageHead: 'Crear un nuevo Usuario',
                                pageDescription:'En este panel usted crear nuevos usuarios',
                                tableHead:'Agregar un nuevo usuario'

                            },
                    resolve: {
                        deps: ['$ocLazyLoad', function( $ocLazyLoad ){

                            return $ocLazyLoad.load( 'lib/controllers/users.controller.js' )

                        }]
                    }
                },
              usersEditar:{
                    url: '/gestion/editarUsuario/:id',
                    controller: 'UsersController',
                    templateUrl: 'views/layouts/editUser.html?t='+cCache,
                    controllerAs: 'usr',
                    data:{
                                pageTitle:'Editar registro',
                                pageHead: 'Editar Usuario',
                                pageDescription:'En este panel usted podra editar los usuarios existentes',
                                tableHead:'Editar'
                            },
                    resolve: {
                        deps: ['$ocLazyLoad', function( $ocLazyLoad ){

                            return $ocLazyLoad.load( 'lib/controllers/users.controller.js' )

                        }]
                    }
                }
               

            };

        var loginApp={

             login: {
                            url: '/login',
                            controller: 'LoginController',
                            templateUrl: 'views/layouts/login.html',
                            controllerAs: 'lg',
                            data:{
                                pageTitle:'Login'
                            },
                            resolve: {
                                deps: ['$ocLazyLoad', function( $ocLazyLoad ){

                                    return $ocLazyLoad.load( 'lib/controllers/login.controller.js' )

                                }]
                            }
                        }


        };

  
            

            $stateProvider
                .state('app', routeApp.structureApp )
                .state('login', loginApp.login )
                .state('app.not_found', routeApp.notFound )
                .state('app.users', routeApp.users )
                .state('app.usersNuevo', routeApp.usersNuevo )
                .state('app.usersEdit', routeApp.usersEditar )

                $urlRouterProvider
                .when('/', '/login')
                .otherwise('/404');
        }
    ]);