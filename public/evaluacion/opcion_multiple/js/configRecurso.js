/* configuracion
*/
var maxIntentos = 99;                // Intentos ilimitados indicados en el guión.
var siguienteIntentoBlanco = true;

var esAutoevaluacion = bancoSeleccionado === "autoevaluacion";
var elementosPorSegmento = esAutoevaluacion ? 10 : 5;
var elementosPorSegmentoMovil = 1;
var reactivosMostrar = esAutoevaluacion ? 10 : 5;
if (reactivos.length < reactivosMostrar) {
	reactivosMostrar = reactivos.length;
}
var total = reactivosMostrar;

var mezclarPreguntas = true;         // true: mezcla preguntas; false NO mezcla preguntas, RAAR a partir de jun 12,18 mezcla todos los reactivos
var mezclarRespuestas = true;        // true: mezcla respuestas; false NO mezcla respuestas
var mezclarPorIntentos = true;

var mostrarRetroIndividual = true;   // Muestra la retroalimentación de la opción seleccionada.
var mostrarRetroOpcionRespuesta = true;
var mostrarRetroFinal = esAutoevaluacion; // Sólo el guión de autoevaluación define retroalimentación general.

var ponerNumeral = true;     // Para poner o agregar numeros secuenciales al inicio de las las preguntas...
var ponerNumeroPreguntas = false; // cuantos preguntas son?, no necesariamente cuantas son visibles...
var numeralAlfabetico = false; //si queremos letras en vez de números, true.

var ponerNumeralRespuesta = true;     // Para poner o agregar numeros secuenciales al inicio de las las preguntas...
var numeralRespuestaAlfabetico = true; //si queremos letras en vez de números, true.

var calificarEnTiempoReal = false; //si se quiere el despliegue de correcto/incorrecto al seleccionar...
var carruselContinuo = false; // si se quiere que los botonos previo y proximo no tengan pared TRUE, false para pared

var flechaArriba = false;          // true: muestra la flecha-arriba para moverse rápidamente al principio del recurso; false: no lo muestra

var retroCal = [
	{LimInf: 0, LimSup: 5, Mensaje: ["¡Intenta de nuevo! Parece que no todo lo visto en la unidad te quedó claro; repásala nuevamente para reforzar conocimientos y realiza un nuevo intento.", ""]},
	{LimInf: 6, LimSup: 8, Mensaje: ["¡Bien! Reconoces la importancia del eje hipotálamo-hipófisis, pero puedes repasar la unidad nuevamente para dominar el tema.", ""]},
	{LimInf: 9, LimSup: 10, Mensaje: ["¡Excelente! Dominas muy bien todo lo visto en la unidad; logras reconocer la gran importancia del adecuado funcionamiento del eje hipotálamo-hipófisis.", ""]}
];

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
