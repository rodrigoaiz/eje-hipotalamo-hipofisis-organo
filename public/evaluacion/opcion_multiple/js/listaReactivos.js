var bancoSeleccionado = new URLSearchParams(window.location.search).get("banco") || "autoevaluacion";
var bancoContenidoActivo = typeof bancosContenido !== "undefined" ? bancosContenido[bancoSeleccionado] : null;

function conFormato(texto) {
	return texto.replace(/T([34])\b/g, "T<sub>$1</sub>");
}

function sinPuntoFinalEnOpcion(texto) {
	return texto.replace(/\.([\t ]*)$/, "$1");
}

function reactivo(pregunta, opciones, correcta, retros) {
	return {
		Q: conFormato(pregunta),
		A: opciones.map(function (opcion, indice) {
			return { opcion: conFormato(sinPuntoFinalEnOpcion(opcion)), correcta: indice === correcta, retro: conFormato(retros[indice]) };
		}),
		F: ["Respuesta correcta.", "Revisa la realimentación de la opción seleccionada."]
	};
}

function adaptarBancoContenido(banco, identificador) {
	validarBancoContenido(banco, identificador);
	return banco.reactivos.map(function (reactivoEditorial) {
		var indiceCorrecto = reactivoEditorial.opciones.findIndex(function (opcion) {
			return opcion.correcta;
		});
		return reactivo(
			reactivoEditorial.pregunta,
			reactivoEditorial.opciones.map(function (opcion) { return opcion.texto; }),
			indiceCorrecto,
			reactivoEditorial.opciones.map(function (opcion) { return opcion.retroalimentacion; })
		);
	});
}

if (!bancoContenidoActivo) {
	bancoSeleccionado = "autoevaluacion";
	bancoContenidoActivo = bancosContenido.autoevaluacion;
}

var reactivos = adaptarBancoContenido(bancoContenidoActivo, bancoSeleccionado);
