<script>
    // JUEGO DE AHORCADO
    alerta ("+ ~ BIENVENIDO AL JUEGO DE AHORCADO ~ +");
    var palabra = prompt ("~ Ingrese una palabra ~");
    var intentos = 0;
    var errores = 7;
    var letras = palabra.length;
    para (var i = 0; i <palabra.length; i ++) {
      var letra = prompt ("~ Ingrese una letra ~");
      if (palabra [i] == letra) {
        alert ("+ Letra correcta +");
        intentos = intentos + 1;
      } demás {
        alert ("- Letra incorrecta-");
        errores = errores - 1;
      }
    }
    if (intentos == letras) {
      alerta ("~ Felicidades, ganaste ~");
    } demás {
      alert ("- Perdiste, la palabra era-:" + palabra);
    }
    </script>
