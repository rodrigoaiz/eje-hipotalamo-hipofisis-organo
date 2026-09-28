/* configuracion
*/
var configuracionBancoActivo = bancoContenidoActivo && bancoContenidoActivo.configuracion ? bancoContenidoActivo.configuracion : {};
var instruccionesBanco = bancoContenidoActivo ? bancoContenidoActivo.instrucciones : "";
var maxIntentos = configuracionBancoActivo.intentosMaximos === null ? 99 : (configuracionBancoActivo.intentosMaximos || 99); // 99 representa intentos ilimitados en este motor.
var siguienteIntentoBlanco = true;

var esAutoevaluacion = bancoSeleccionado === "autoevaluacion";
var elementosPorSegmento = configuracionBancoActivo.reactivosAMostrar || (esAutoevaluacion ? 10 : 5);
var elementosPorSegmentoMovil = 1;
var reactivosMostrar = configuracionBancoActivo.reactivosAMostrar || (esAutoevaluacion ? 10 : 5);
if (reactivos.length < reactivosMostrar) {
	reactivosMostrar = reactivos.length;
}
var total = reactivosMostrar;

var mezclarPreguntas = configuracionBancoActivo.mezclarReactivos !== false; // true: mezcla preguntas; false NO mezcla preguntas
var mezclarRespuestas = configuracionBancoActivo.mezclarRespuestas !== false; // true: mezcla respuestas; false NO mezcla respuestas
var mezclarPorIntentos = true;

var mostrarRetroIndividual = true;   // Muestra la retroalimentación de la opción seleccionada.
var mostrarRetroOpcionRespuesta = true;
var mostrarRetroFinal = configuracionBancoActivo.mostrarRetroalimentacionFinal === undefined ? esAutoevaluacion : configuracionBancoActivo.mostrarRetroalimentacionFinal;

var ponerNumeral = true;     // Para poner o agregar numeros secuenciales al inicio de las las preguntas...
var ponerNumeroPreguntas = false; // cuantos preguntas son?, no necesariamente cuantas son visibles...
var numeralAlfabetico = false; //si queremos letras en vez de números, true.

var ponerNumeralRespuesta = true;     // Para poner o agregar numeros secuenciales al inicio de las las preguntas...
var numeralRespuestaAlfabetico = true; //si queremos letras en vez de números, true.

var calificarEnTiempoReal = false; //si se quiere el despliegue de correcto/incorrecto al seleccionar...
var carruselContinuo = false; // si se quiere que los botonos previo y proximo no tengan pared TRUE, false para pared

var flechaArriba = false;          // true: muestra la flecha-arriba para moverse rápidamente al principio del recurso; false: no lo muestra

var retroCal = bancoContenidoActivo && Array.isArray(bancoContenidoActivo.retroalimentacionGeneral)
	? bancoContenidoActivo.retroalimentacionGeneral.map(function (rango) {
		return { LimInf: rango.min, LimSup: rango.max, Mensaje: [rango.texto, ""] };
	})
	: [];

var textoRetroGeneral= '';//'Texto independiente de calificacion'; no importando la calificación se puede poner un texto extra, '' para dejar en blanco

var ambSCORM = false;
var barraSCORM = false;
var idObjetivo = 0;

//Calificacion mas alta -1; Ultima calificacion 0, Calificacion de determinado intento #
var guardarCalificacion = 0; 

var idioma = "ESP"; // ESP-Español, ENG-INGLES
var debug = false;

var verLongitud = false;  //true:ver longitud del texto ; false:omitir

var califXaciertos = true;    // La retroalimentación del guión se define por número de aciertos.
