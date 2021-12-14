< guión >
    // JUEGO DE BATALLA NAVAL
    alerta  ( "^ + JUEGO NAVAL + ^" ) ;
    alert  ( "Cada jugador tiene un tablero de 10 x 10" )
    alert  ( "Siempre introdusca la cordenada mencionando la posicion de la fila y despues la posicion de la columna" )
var  v = prompt ( "Ingrese el nombre del jugador 1" ) ;
var  x =  "x"
var  dimensiones =
[   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ] ;
consola . log ( v ) ;
consola . log ( dimensiones ) ;
var  f = prompt ( "posicion del primer barco" )
var  g = prompt ( "posicion del segundo barco" )
var  h = prompt ( "posicion del tercer barco" )
var  y = prompt ( "Ingrese el nombre del jugador 2" ) ;
var  dimension2 =
[   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ,
   [ x , x , x , x , x , x , x , x , x , x ] ] ;

consola . log ( y ) ;
consola . log ( dimensiones2 ) ;
var  z = prompt ( "posicion del primer barco" )
var  a = prompt ( "posicion del segundo barco" )
var  b = prompt ( "posicion del tercer barco" )
cambiar  ( f , g , h , z , a , b )  {
    caso  "jugador 1" :
    var  k = prompt  ( "turno del jugador 1" ) ;
                si  ( k  ==  z ) {
                    alerta  ( "Has undido un barco" )
                    consola . log ( k ) ;
                }
                si  ( k  ==  a ) {
                    alerta  ( "Has undido un barco" )
                    consola . log ( k ) ;
                }
                si  ( k  ==  b ) {
                    alerta  ( "Has undido un barco" )
                    consola . log ( k ) ;
                }
                else {
                    alerta  ( "No has dado en el blanco" )
        romper ;
                }

    caso  "jugador 2" :
    var  n = prompt  ( "turno del jugador 2" ) ;
                si  ( n  ==  f ) {
                    alerta  ( "Has undido un barco" )
                    consola . log ( n ) ;
                }
                si  ( n  ==  g ) {
                    alerta  ( "Has undido un barco" )
                    consola . log ( n ) ;
                }
                si  ( n  ==  h ) {
                    alerta  ( "Has undido un barco" )
                    consola . log ( n ) ;
                }
                else {
                    alerta  ( "No has dado en el blanco" )
        romper ;
}
}
</ script > 
    // JUEGO DE AHORCADO
    alerta  ( "+ ~ BIENVENIDO AL JUEGO DE AHORCADO ~ +" ) ;
    var  palabra  =  prompt ( "~ Ingrese una palabra ~" ) ;
    var  intentos  =  0 ;
    var  errores  =  7 ;
    var  letras  =  palabra . longitud ;
    para  ( var  i  =  0 ;  i  <  palabra . longitud ;  i ++ )  {
      var  letra  =  prompt ( "~ Ingrese una letra ~" ) ;
      if  ( palabra [ i ]  ==  letra )  {
        alert ( "+ Letra correcta +" ) ;
        intentos  =  intentos  +  1 ;
      }  más  {
        alert ( "-Letra incorrecta-" ) ;
        errores  =  errores  -  1 ;
      }
    }
    if  ( intentos  ==  letras )  {
      alerta ( "~ Felicidades, ganaste ~" ) ;
    }  más  {
      alert ( "-Perdiste, la palabra era-:"  +  palabra ) ;
    }
    </ script > 
