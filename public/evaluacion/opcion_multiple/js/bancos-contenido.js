/*
 * Contenido editorial de las actividades.
 *
 * Cada texto se conserva aquí como una unidad verificable frente al guion de
 * diseño instruccional. El motor de opción múltiple sólo lo adapta a su formato
 * de presentación; no debe resumir ni completar retroalimentaciones.
 */
var bancosContenido = {
	actividad1: {
		fuente: "UA Eje hipotálamo-hipófisis 31ago26 — Actividad 1",
		titulo: "Actividad 1. Identificando las funciones de los ejes HHA y HHT, así como de las hormonas que producen",
		presentacion: "Como pudiste ver en los temas anteriores, el funcionamiento del hipotálamo y la hipófisis repercute en distintos órganos, creando una gran cantidad de hormonas. Conocer el funcionamiento de dichas hormonas y cómo se producen es de vital importancia para el estudio de medicina; por ello, es momento de poner a prueba tus conocimientos adquiridos.",
		instrucciones: "Lee cada pregunta y selecciona la respuesta correcta.",
		configuracion: {
			intentosMaximos: null,
			reactivosAMostrar: 5,
			mezclarReactivos: true,
			mezclarRespuestas: true,
			mostrarRetroalimentacionFinal: false
		},
		reactivos: [
			{
				pregunta: "¿Cuál es el principal mecanismo a través del cual el hipotálamo controla la liberación de hormonas de la hipófisis anterior?",
				opciones: [
					{ texto: "Por vía directa de nervios, desde el hipotálamo a la hipófisis anterior", correcta: false, retroalimentacion: "Incorrecta: La comunicación nerviosa es la vía principal para la neurohipófisis, pero no para la hipófisis anterior." },
					{ texto: "El sistema porta hipotalámico-hipofisario", correcta: true, retroalimentacion: "Correcta: Este sistema de vasos sanguíneos especializados transporta las hormonas liberadoras e inhibidoras del hipotálamo directamente a la hipófisis anterior, lo que asegura una comunicación rápida y eficiente." },
					{ texto: "Difusión simple de hormonas a través del líquido cefalorraquídeo", correcta: false, retroalimentacion: "Incorrecta: Las hormonas viajan por vasos sanguíneos específicos, no por el líquido cefalorraquídeo." },
					{ texto: "Secreción de hormonas directamente al torrente sanguíneo sistémico", correcta: false, retroalimentacion: "Incorrecta: Las hormonas hipotalámicas no se vierten directamente en la circulación general para actuar sobre la hipófisis." }
				]
			},
			{
				pregunta: "En el eje HHA, ¿qué hormona es liberada por el hipotálamo en respuesta al estrés?",
				opciones: [
					{ texto: "Hormona adrenocorticotrópica (ACTH)", correcta: false, retroalimentacion: "Incorrecta: La ACTH es liberada por la hipófisis, no por el hipotálamo." },
					{ texto: "Cortisol", correcta: false, retroalimentacion: "Incorrecta: El cortisol es liberado por las glándulas suprarrenales, el órgano diana en este eje." },
					{ texto: "Hormona liberadora de corticotropina (CRH)", correcta: true, retroalimentacion: "Correcta: El hipotálamo libera CRH para iniciar la cascada de respuesta al estrés, lo que estimula la hipófisis." },
					{ texto: "Aldosterona", correcta: false, retroalimentacion: "Incorrecta: La aldosterona es producida por las glándulas suprarrenales y su liberación está principalmente controlada por el sistema renina-angiotensina-aldosterona, no directamente por el eje HHA." }
				]
			},
			{
				pregunta: "La realimentación negativa en el eje HHA es mediada principalmente por:",
				opciones: [
					{ texto: "La inhibición de la ACTH por parte de la CRH", correcta: false, retroalimentacion: "Incorrecta: La CRH estimula la liberación de ACTH." },
					{ texto: "La inhibición de la CRH por parte de la ACTH", correcta: false, retroalimentacion: "Incorrecta: Ésta es una realimentación de lazo corto, pero no es la principal forma de realimentación negativa del eje." },
					{ texto: "La supresión de la ACTH y la CRH por niveles elevados de cortisol", correcta: true, retroalimentacion: "Correcta: Los niveles altos de cortisol en la sangre actúan como una señal para el hipotálamo y la hipófisis, reduciendo la secreción de CRH y ACTH para evitar un exceso de cortisol." },
					{ texto: "La estimulación de la producción de cortisol por la ACTH", correcta: false, retroalimentacion: "Incorrecta: Esto describe el proceso de estimulación, no el de realimentación negativa." }
				]
			},
			{
				pregunta: "Una persona presenta fatiga crónica, pérdida de peso, hiperpigmentación de la piel, cortisol bajo y ACTH elevada. ¿Cuál es la patología más probable?",
				opciones: [
					{ texto: "Síndrome de Cushing", correcta: false, retroalimentacion: "Incorrecta: El síndrome de Cushing se caracteriza por un exceso de cortisol." },
					{ texto: "Insuficiencia adrenal secundaria", correcta: false, retroalimentacion: "Incorrecta: En la insuficiencia adrenal secundaria, el problema está en la hipófisis, por lo que los niveles de la ACTH estarían bajos junto con el cortisol." },
					{ texto: "Enfermedad de Addison —insuficiencia adrenal primaria—", correcta: true, retroalimentacion: "Correcta: La enfermedad de Addison es causada por un daño en las glándulas suprarrenales. El cortisol baja y la hipófisis intenta compensar esta disminución produciendo más ACTH, lo que también causa la hiperpigmentación de la piel." },
					{ texto: "Hiperaldosteronismo", correcta: false, retroalimentacion: "Incorrecta: El hiperaldosteronismo se relaciona con la sobreproducción de aldosterona, no de cortisol." }
				]
			},
			{
				pregunta: "Si una persona tiene un hipotiroidismo primario —un problema en la glándula tiroides misma—, ¿cómo esperarías encontrar los niveles de TSH y T4?",
				opciones: [
					{ texto: "TSH baja y T4 alta", correcta: false, retroalimentacion: "Incorrecta: Esta combinación indica hipertiroidismo primario." },
					{ texto: "TSH baja y T4 baja", correcta: false, retroalimentacion: "Incorrecta: Esta combinación es típica del hipotiroidismo secundario —o central—, donde el problema es la falta de TSH." },
					{ texto: "TSH alta y T4 baja", correcta: true, retroalimentacion: "Correcta: El problema está en la tiroides, que no puede producir suficiente T4. Como resultado, no hay realimentación negativa, por lo que la hipófisis produce un exceso de TSH para intentar estimularla." },
					{ texto: "TSH normal y T4 baja", correcta: false, retroalimentacion: "Incorrecta: Los niveles de TSH casi siempre se alteran cuando hay un problema en la producción de T4." }
				]
			},
			{
				pregunta: "Un tumor hipofisario que produce TSH en exceso de manera autónoma, ¿qué efecto tendría?",
				opciones: [
					{ texto: "Disminuirían T3/T4 y causaría hipertiroidismo primario", correcta: false, retroalimentacion: "Incorrecta: El aumento de la TSH causaría uno de T3/T4 y el hipertiroidismo sería secundario." },
					{ texto: "Aumentarían T3/T4 y causaría hipertiroidismo primario", correcta: false, retroalimentacion: "Incorrecta: El problema se origina en la hipófisis; por lo tanto, es hipertiroidismo secundario." },
					{ texto: "Aumentarían T3/T4 y causaría hipertiroidismo secundario", correcta: true, retroalimentacion: "Correcta: El exceso de TSH estimula de forma excesiva la tiroides, elevando los niveles de T3/T4. Dado que la causa del problema está en la hipófisis, se clasifica como hipertiroidismo secundario —o central—." },
					{ texto: "Disminuirían T3/T4 y causaría hipertiroidismo secundario", correcta: false, retroalimentacion: "Incorrecta: La sobreproducción de TSH no puede causar una disminución de hormonas tiroideas." }
				]
			},
			{
				pregunta: "¿Qué zona de la corteza suprarrenal es la principal responsable de la producción de cortisol?",
				opciones: [
					{ texto: "Zona glomerular", correcta: false, retroalimentacion: "Incorrecta: La zona glomerular produce mineralocorticoides como la aldosterona." },
					{ texto: "Zona fasciculada", correcta: true, retroalimentacion: "Correcta: La zona fasciculada es la capa más gruesa de la corteza suprarrenal y donde se sintetiza la mayor parte del cortisol, en respuesta a la ACTH." },
					{ texto: "Zona reticular", correcta: false, retroalimentacion: "Incorrecta: La zona reticular produce andrógenos suprarrenales." },
					{ texto: "Médula suprarrenal", correcta: false, retroalimentacion: "Incorrecta: La médula suprarrenal produce catecolaminas como la adrenalina y la noradrenalina." }
				]
			},
			{
				pregunta: "La molécula precursora de la cual se sintetiza el cortisol es:",
				opciones: [
					{ texto: "Colesterol", correcta: true, retroalimentacion: "Correcta: Todas las hormonas esteroideas, incluyendo el cortisol, se sintetizan a partir del colesterol. Este proceso es crucial para la producción de glucocorticoides." },
					{ texto: "Glucosa", correcta: false, retroalimentacion: "Incorrecta: La glucosa es un sustrato energético, no es precursor directo de las hormonas esteroideas." },
					{ texto: "Aminoácidos", correcta: false, retroalimentacion: "Incorrecta: Los aminoácidos son sustratos energéticos, no los precursores directos de las hormonas esteroideas." },
					{ texto: "Ácidos grasos", correcta: false, retroalimentacion: "Incorrecta: Los ácidos grasos son sustratos energéticos, no los precursores directos de las hormonas esteroideas." }
				]
			},
			{
				pregunta: "El cortisol ejerce su acción en las células diana al unirse a un receptor:",
				opciones: [
					{ texto: "De membrana celular", correcta: false, retroalimentacion: "Incorrecta: Los receptores de membrana están diseñados para hormonas hidrofílicas (como la adrenalina o las hormonas peptídicas) que no pueden atravesar la membrana. Como el cortisol es un esteroide, no necesita un receptor en la superficie, puede entrar directamente al citoplasma." },
					{ texto: "Acoplado a proteína G", correcta: false, retroalimentacion: "Incorrecta: Los GPCR son una familia de receptores de membrana que utilizan segundos mensajeros (como el AMPc). Dado que el cortisol llega directamente al interior de la célula, no requiere esta vía de señalización externa." },
					{ texto: "De canal iónico", correcta: false, retroalimentacion: "Incorrecta: Los receptores de canal iónico permiten el paso rápido de iones (como sodio o potasio) cuando un ligando se une a ellos. El cortisol no funciona abriendo canales iónicos en la membrana, su función principal es la regulación genética a largo plazo." },
					{ texto: "Intracelular", correcta: true, retroalimentacion: "Correcta: Como el cortisol es una hormona esteroidea es lipofílica y puede atravesar la membrana celular. Se une a receptores intracelulares —citoplasmáticos o nucleares— para formar un complejo que se transloca al núcleo y altera la transcripción de genes." }
				]
			},
			{
				pregunta: "¿Qué proteína es esencial para almacenar yodo y sintetizar hormonas tiroideas dentro de la tiroides?",
				opciones: [
					{ texto: "Albúmina", correcta: false, retroalimentacion: "Incorrecta: La albúmina es una proteína de transporte en la sangre, pero no es específica para la tiroides." },
					{ texto: "Insulina", correcta: false, retroalimentacion: "Incorrecta: La insulina es una hormona del páncreas que regula el azúcar en la sangre." },
					{ texto: "Glucagón", correcta: false, retroalimentacion: "Incorrecta: El glucagón es una hormona del páncreas que eleva los niveles de azúcar en la sangre." },
					{ texto: "Tiroglobulina", correcta: true, retroalimentacion: "Correcta: La tiroglobulina es una proteína grande que se almacena en el coloide y sirve como andamio para que la peroxidasa tiroidea añada yodo y sintetice T3 y T4." }
				]
			}
		]
	},
	actividad2: {
		fuente: "UA Eje hipotálamo-hipófisis 31ago26 — Actividad 2",
		titulo: "Actividad 2. Reconociendo las funciones del eje HHG y de las hormonas que produce",
		presentacion: "El eje HHG, así como las hormonas producidas en éste, es responsable de diferentes funciones que son relevantes para el correcto funcionamiento del cuerpo humano; debido a ello, es necesario saber si tienes los conocimientos suficientes del tema.",
		instrucciones: "Lee atentamente cada pregunta y selecciona la opción correcta.",
		configuracion: {
			intentosMaximos: null,
			reactivosAMostrar: 5,
			mezclarReactivos: true,
			mezclarRespuestas: true,
			mostrarRetroalimentacionFinal: false
		},
		reactivos: [
			{
				pregunta: "¿Cuál es la hormona hipotalámica clave que regula la liberación FSH y LH de la hipófisis?",
				opciones: [
					{ texto: "Hormona liberadora de corticotropina (CRH)", correcta: false, retroalimentacion: "Incorrecta: La CRH pertenece al eje hipotálamo-hipófisis-adrenal y regula la liberación de la ACTH." },
					{ texto: "Hormona liberadora de tirotropina (TRH)", correcta: false, retroalimentacion: "Incorrecta: La TRH regula la liberación de la TSH y la prolactina en el eje tiroideo." },
					{ texto: "Dopamina", correcta: false, retroalimentacion: "Incorrecta: La dopamina es un neurotransmisor que, en el contexto hipofisario, principalmente inhibe la secreción de prolactina." },
					{ texto: "Hormona liberadora de gonadotropinas (GnRH)", correcta: true, retroalimentacion: "Correcta: La GnRH es la principal hormona hipotalámica que actúa sobre la hipófisis para controlar la síntesis y liberación de las gonadotropinas FSH y LH." }
				]
			},
			{
				pregunta: "¿Qué patrón de secreción de GnRH es esencial para una función reproductiva normal?",
				opciones: [
					{ texto: "Secreción continua y estable", correcta: false, retroalimentacion: "Incorrecta: Una secreción continua de GnRH, en lugar de pulsos, desensibiliza los receptores hipofisarios y suprime la liberación de gonadotropinas." },
					{ texto: "Pulsos de alta frecuencia en la mañana", correcta: false, retroalimentacion: "Incorrecta: La frecuencia de los pulsos de la GnRH varía a lo largo del día y del ciclo, no se limita a las mañanas." },
					{ texto: "Descarga única al final del día", correcta: false, retroalimentacion: "Incorrecta: Una secreción pulsátil a lo largo del día es necesaria para mantener la función del eje HHG." },
					{ texto: "Secreción en pulsos intermitentes y rítmicos", correcta: true, retroalimentacion: "Correcta: La secreción pulsátil de GnRH es crucial para la regulación normal del eje, ya que una secreción constante provoca la desensibilización del receptor y la supresión de la función gonadal." }
				]
			},
			{
				pregunta: "¿Cuál es la función principal de la FSH en los testículos?",
				opciones: [
					{ texto: "Estimular las células de Leydig para producir testosterona", correcta: false, retroalimentacion: "Incorrecta: La LH, no la FSH, es la principal hormona que estimula la producción de testosterona por las células de Leydig." },
					{ texto: "Regular la presión arterial", correcta: false, retroalimentacion: "Incorrecta: La presión arterial es regulada por la aldosterona, la VP y el sistema nervioso autónomo, no por la FSH." },
					{ texto: "Estimular la espermatogénesis en los túbulos seminíferos", correcta: true, retroalimentacion: "Correcta: La FSH actúa sobre las células de Sertoli para apoyar y nutrir la espermatogénesis, que es la producción de espermatozoides." },
					{ texto: "Inducir la eyaculación", correcta: false, retroalimentacion: "Incorrecta: La eyaculación es un proceso que involucra el sistema nervioso somático y autónomo, no está directamente mediado por la FSH." }
				]
			},
			{
				pregunta: "En el eje HHG, la realimentación negativa a la hipófisis y al hipotálamo es mediada principalmente por las hormonas:",
				opciones: [
					{ texto: "FSH y LH", correcta: false, retroalimentacion: "Incorrecta: La FSH y la LH son las hormonas que estimulan las gónadas, pero no son las principales responsables de la realimentación negativa en el eje." },
					{ texto: "GnRH y hormona inhibidora de gonadotropina (GnIH)", correcta: false, retroalimentacion: "Incorrecta: Estas hormonas son producidas por el hipotálamo y regulan la hipófisis, no son las hormonas finales del eje gonadal que realimentan." },
					{ texto: "Estrógenos, progesterona y testosterona", correcta: true, retroalimentacion: "Correcta: Éstas son las hormonas finales producidas por las gónadas y sus niveles elevados realimentan negativamente para inhibir la secreción de GnRH, FSH y LH." },
					{ texto: "Inhibina y activina", correcta: false, retroalimentacion: "Incorrecta: La inhibina y la activina son péptidos producidos en las gónadas que regulan selectivamente la FSH, pero no son las hormonas principales que controlan la realimentación global del eje." }
				]
			},
			{
				pregunta: "Además de los testículos, ¿qué glándula produce una pequeña cantidad de andrógenos?",
				opciones: [
					{ texto: "Páncreas", correcta: false, retroalimentacion: "Incorrecta: El páncreas produce insulina y glucagón, que regulan el azúcar en la sangre, no hormonas sexuales." },
					{ texto: "Tiroides", correcta: false, retroalimentacion: "Incorrecta: La tiroides produce hormonas que regulan el metabolismo, no andrógenos." },
					{ texto: "Hipófisis", correcta: false, retroalimentacion: "Incorrecta: La hipófisis produce gonadotropinas que estimulan las gónadas, pero no andrógenos." },
					{ texto: "Glándulas suprarrenales", correcta: true, retroalimentacion: "Correcta: Las glándulas suprarrenales producen andrógenos débiles —como la DHEA— que contribuyen a los andrógenos circulantes tanto en hombres como en mujeres." }
				]
			},
			{
				pregunta: "En las células diana, los receptores de hormonas esteroideas —como estrógenos y andrógenos— se localizan principalmente en:",
				opciones: [
					{ texto: "La membrana celular", correcta: false, retroalimentacion: "Incorrecta: Los receptores de membrana son comunes para hormonas peptídicas y neurotransmisores, no para los esteroides." },
					{ texto: "El núcleo celular", correcta: false, retroalimentacion: "Incorrecta: Aunque muchos receptores se translocan al núcleo, la mayoría se encuentra inicialmente en el citoplasma y se mueve al núcleo después de la unión hormonal." },
					{ texto: "Las mitocondrias", correcta: false, retroalimentacion: "Incorrecta: Las mitocondrias son el sitio principal de producción de energía, no de señalización hormonal esteroidea." },
					{ texto: "El citoplasma y el núcleo", correcta: true, retroalimentacion: "Correcta: Los receptores de hormonas esteroideas son receptores intracelulares que se encuentran en el citoplasma o en el núcleo de la célula. Una vez activados por la hormona, el complejo se une al ADN para regular la transcripción de genes." }
				]
			},
			{
				pregunta: "¿Cuál es la hormona hipotalámica que estimula la liberación de la GH de la hipófisis?",
				opciones: [
					{ texto: "Somatostatina (GHIH)", correcta: false, retroalimentacion: "Incorrecta: La somatostatina es la hormona hipotalámica que inhibe la liberación de GH." },
					{ texto: "Hormona liberadora de corticotropina (CRH)", correcta: false, retroalimentacion: "Incorrecta: La CRH estimula la liberación de ACTH, lo que afecta las glándulas suprarrenales." },
					{ texto: "Hormona liberadora de hormona del crecimiento (GHRH)", correcta: true, retroalimentacion: "Correcta: La GHRH es la hormona producida en el hipotálamo que viaja a la hipófisis anterior para estimular la secreción de GH." },
					{ texto: "Prolactina", correcta: false, retroalimentacion: "Incorrecta: La prolactina es una hormona secretada por la hipófisis anterior, no una hormona hipotalámica." }
				]
			},
			{
				pregunta: "¿Qué tipo de célula de la hipófisis anterior produce GH?",
				opciones: [
					{ texto: "Somatotropo", correcta: true, retroalimentacion: "Correcta: Los somatotropos son las células de la hipófisis que sintetizan y secretan GH." },
					{ texto: "Gonadotropo", correcta: false, retroalimentacion: "Incorrecta: Los gonadotropos producen FSH y LH, las cuales regulan las gónadas." },
					{ texto: "Corticotropo", correcta: false, retroalimentacion: "Incorrecta: Los corticotropos producen ACTH, la cual regula las glándulas suprarrenales." },
					{ texto: "Tirotropo", correcta: false, retroalimentacion: "Incorrecta: Las tirotropas producen TSH, la cual regula la glándula tiroides." }
				]
			},
			{
				pregunta: "¿Cuál es la función principal de la prolactina?",
				opciones: [
					{ texto: "Estimular el crecimiento óseo", correcta: false, retroalimentacion: "Incorrecta: La GH es la principal responsable del crecimiento óseo." },
					{ texto: "Regular la presión arterial", correcta: false, retroalimentacion: "Incorrecta: La presión arterial es regulada por la aldosterona y la VP, entre otras hormonas." },
					{ texto: "Promover la producción de leche en las glándulas mamarias", correcta: true, retroalimentacion: "Correcta: La prolactina es la hormona clave para la lactogénesis, que es la producción de leche después del parto." },
					{ texto: "Controlar el ciclo menstrual", correcta: false, retroalimentacion: "Incorrecta: El ciclo menstrual es controlado por las hormonas gonadales FSH, LH y los estrógenos." }
				]
			},
			{
				pregunta: "¿Qué hormona hipotalámica inhibe la secreción de prolactina?",
				opciones: [
					{ texto: "Hormona liberadora de tirotropina (TRH)", correcta: false, retroalimentacion: "Incorrecta: La TRH estimula la liberación de prolactina, aunque su principal función es regular la TSH." },
					{ texto: "Dopamina", correcta: true, retroalimentacion: "Correcta: La dopamina, también conocida como hormona inhibidora de la prolactina, es el principal regulador negativo que suprime la secreción de prolactina en la hipófisis anterior." },
					{ texto: "Oxitocina", correcta: false, retroalimentacion: "Incorrecta: La OXT, liberada por la hipófisis posterior, es crucial para la eyección de leche y las contracciones uterinas, no para la regulación de la prolactina." },
					{ texto: "GHRH", correcta: false, retroalimentacion: "Incorrecta: La GHRH estimula la GH, no la prolactina." }
				]
			},
			{
				pregunta: "En el sistema de realimentación de GH, ¿qué hormona actúa principalmente para inhibir la secreción de GH?",
				opciones: [
					{ texto: "GHRH", correcta: false, retroalimentacion: "Incorrecta: La GHRH es el principal estimulante, no el inhibidor de la secreción de GH." },
					{ texto: "Cortisol", correcta: false, retroalimentacion: "Incorrecta: Aunque el cortisol puede modular la secreción de GH, no es la principal hormona de realimentación negativa en este eje." },
					{ texto: "GHIH e IGF-1", correcta: true, retroalimentacion: "Correcta: La somatostatina —producida en el hipotálamo— y el IGF-1 —producido en el hígado— son los principales inhibidores de la secreción de GH, formando un bucle de realimentación negativo para mantener la homeostasis." },
					{ texto: "Insulina", correcta: false, retroalimentacion: "Incorrecta: La insulina y la GH tienen efectos opuestos en el metabolismo de la glucosa, pero la insulina no es la principal hormona de realimentación negativa de la GH." }
				]
			}
		]
	},
	autoevaluacion: {
		fuente: "UA Eje hipotálamo-hipófisis 31ago26 — Autoevaluación",
		titulo: "Autoevaluación. Reconociendo la importancia del eje hipotálamo-hipófisis",
		presentacion: "Como pudiste ver a lo largo de la unidad, el eje hipotálamo-hipófisis es responsable de regular funciones indispensables del cuerpo humano. Por ello, ahora, es necesario poner a prueba los conocimientos obtenidos sobre este eje.",
		instrucciones: "Lee atentamente cada pregunta y selecciona la respuesta correcta.",
		configuracion: {
			intentosMaximos: null,
			reactivosAMostrar: 10,
			mezclarReactivos: true,
			mezclarRespuestas: true,
			mostrarRetroalimentacionFinal: true
		},
		retroalimentacionGeneral: [
			{ min: 0, max: 5, texto: "¡Intenta de nuevo! Parece que no todo lo visto en la unidad te quedó claro; repásala nuevamente para reforzar conocimientos y realiza un nuevo intento." },
			{ min: 6, max: 8, texto: "¡Bien! Reconoces la importancia del eje hipotálamo-hipófisis, pero puedes repasar la unidad nuevamente para dominar el tema." },
			{ min: 9, max: 10, texto: "¡Excelente! Dominas muy bien todo lo visto en la unidad; logras reconocer la gran importancia del adecuado funcionamiento del eje hipotálamo-hipófisis." }
		],
		reactivos: [
			{
				pregunta: "¿Cuál es la función principal del hipotálamo en el eje hipotálamo-hipófisis-tiroides?",
				opciones: [
					{ texto: "Liberar T3 y T4 directamente a la circulación sistémica", correcta: false, retroalimentacion: "Incorrecta: Las hormonas tiroideas —T3 y T4— son producidas por la glándula tiroides, no por el hipotálamo." },
					{ texto: "Producir TSH que actúa sobre el hipotálamo", correcta: false, retroalimentacion: "Incorrecta: La TSH es producida por la hipófisis y actúa sobre la glándula tiroides, no directamente sobre el hipotálamo." },
					{ texto: "Secretar TRH, que estimula a la hipófisis para producir TSH", correcta: true, retroalimentacion: "Correcta: El hipotálamo es el punto de inicio en este eje al liberar TRH para estimular la hipófisis." },
					{ texto: "Inhibir la producción de hormonas tiroideas", correcta: false, retroalimentacion: "Incorrecta: En condiciones normales, el hipotálamo inicia la cascada para estimular, no inhibir, la producción de hormonas tiroideas." }
				]
			},
			{
				pregunta: "¿Qué hormona secreta la hipófisis anterior en el eje HHA?",
				opciones: [
					{ texto: "Cortisol en respuesta a la señal del hipotálamo", correcta: false, retroalimentacion: "Incorrecta: El cortisol es producido por las glándulas suprarrenales, no por la hipófisis." },
					{ texto: "ACTH que estimula las glándulas suprarrenales", correcta: true, retroalimentacion: "Correcta: La ACTH es la hormona hipofisaria que actúa directamente sobre la corteza suprarrenal, para estimular la producción de cortisol." },
					{ texto: "CRH para estimular la corteza suprarrenal", correcta: false, retroalimentacion: "Incorrecta: La CRH es producida por el hipotálamo, no por la hipófisis." },
					{ texto: "Cortisol para mantener la homeostasis", correcta: false, retroalimentacion: "Incorrecta: El cortisol es producido por las glándulas suprarrenales, no por la hipófisis." }
				]
			},
			{
				pregunta: "¿Cuáles son las hormonas gonadotrópicas liberadas por la hipófisis?",
				opciones: [
					{ texto: "Estradiol y progesterona en hombres", correcta: false, retroalimentacion: "Incorrecta: El estradiol y la progesterona son las principales hormonas sexuales femeninas. Los hombres producen testosterona como principal andrógeno." },
					{ texto: "Testosterona en mujeres", correcta: false, retroalimentacion: "Incorrecta: Aunque las mujeres producen pequeñas cantidades de testosterona, no es la principal hormona sexual femenina regulada por este eje en su función primordial." },
					{ texto: "FSH y LH en ambos sexos", correcta: true, retroalimentacion: "Correcta: La FSH y la LH son las gonadotropinas clave secretadas por la hipófisis que regulan la función gonadal en hombres y mujeres." },
					{ texto: "Prolactina en ambos sexos", correcta: false, retroalimentacion: "Incorrecta: La prolactina está principalmente involucrada en la lactancia y no es la principal hormona que regula el eje gonadal reproductivo." }
				]
			},
			{
				pregunta: "Una deficiencia en la producción de la hormona antidiurética (ADH) por la neurohipófisis resultaría en:",
				opciones: [
					{ texto: "Aumento de la sed y la micción —poliuria y polidipsia—", correcta: true, retroalimentacion: "Correcta: La deficiencia de VP impide la concentración de orina en los riñones, lo que lleva a la excreción de grandes volúmenes de orina diluida y, en consecuencia, una sed intensa, por lo que se incrementa la necesidad de ingesta de líquidos —diabetes insípida—." },
					{ texto: "Aumento de peso y letargo", correcta: false, retroalimentacion: "Incorrecta: Estos síntomas son más característicos del hipotiroidismo." },
					{ texto: "Piel oscura y debilidad muscular", correcta: false, retroalimentacion: "Incorrecta: Éstos son síntomas más característicos de la insuficiencia suprarrenal primaria —enfermedad de Addison—." },
					{ texto: "Crecimiento excesivo de manos y pies", correcta: false, retroalimentacion: "Incorrecta: Estos síntomas son de acromegalia, debido a un exceso de GH." }
				]
			},
			{
				pregunta: "Un adenoma hipofisario no funcionante que destruye las células productoras de TSH conduciría a:",
				opciones: [
					{ texto: "Hipertiroidismo primario", correcta: false, retroalimentacion: "Incorrecta: El hipertiroidismo primario se debe a un problema en la glándula tiroides que produce exceso de hormonas, con TSH suprimida." },
					{ texto: "Hipotiroidismo secundario —central—", correcta: true, retroalimentacion: "Correcta: Si la hipófisis no puede producir TSH —debido a la destrucción de las células tirotróficas—, la glándula tiroides no será estimulada para producir T3 y T4, lo que resulta en hipotiroidismo de origen hipofisario —secundario—." },
					{ texto: "Enfermedad de Graves", correcta: false, retroalimentacion: "Incorrecta: La enfermedad de Graves es una causa autoinmune de hipertiroidismo primario." },
					{ texto: "Bocio multinodular tóxico", correcta: false, retroalimentacion: "Incorrecta: El bocio multinodular tóxico es una causa de hipertiroidismo primario." }
				]
			},
			{
				pregunta: "¿Qué hallazgo indica insuficiencia suprarrenal primaria?",
				opciones: [
					{ texto: "Aumento de cortisol después de la administración de ACTH", correcta: false, retroalimentacion: "Incorrecta: Esto indicaría una respuesta normal o un problema secundario; en la insuficiencia primaria, la respuesta sería deficiente." },
					{ texto: "Supresión de cortisol después de la administración de dexametasona", correcta: false, retroalimentacion: "Incorrecta: Esta prueba se usa para diagnosticar el síndrome de Cushing —exceso de cortisol—." },
					{ texto: "Cortisol basal bajo con ACTH elevada", correcta: true, retroalimentacion: "Correcta: En la insuficiencia suprarrenal primaria —problema en la glándula suprarrenal—, el cortisol está bajo. La hipófisis, en un intento de estimular las suprarrenales, produce un exceso de ACTH debido a la falta de realimentación negativa del cortisol." },
					{ texto: "Cortisol basal alto con ACTH baja", correcta: false, retroalimentacion: "Incorrecta: Esta combinación es más sugestiva de síndrome de Cushing iatrogénico —por medicación— o de un tumor suprarrenal productor de cortisol." }
				]
			},
			{
				pregunta: "La hormona VP liberada por la neurohipófisis tiene como función principal:",
				opciones: [
					{ texto: "Estimular la producción hepática de glucosa", correcta: false, retroalimentacion: "Incorrecta: Ésta es una función del glucagón y otras hormonas, no de la VP." },
					{ texto: "Aumentar la reabsorción de agua en los riñones", correcta: true, retroalimentacion: "Correcta: La VP —hormona antidiurética— actúa sobre los túbulos colectores renales al aumentar su permeabilidad al agua, lo que lleva a una mayor reabsorción de agua y una orina más concentrada." },
					{ texto: "Promover la excreción de sodio en la orina", correcta: false, retroalimentacion: "Incorrecta: La VP está principalmente involucrada en la reabsorción de agua, no en la excreción primaria de sodio, aunque puede haber efectos indirectos." },
					{ texto: "Disminuir la presión arterial", correcta: false, retroalimentacion: "Incorrecta: A dosis farmacológicas, la VP puede tener un efecto vasopresor —aumentar la presión—, pero su función principal en la fisiología normal es el balance hídrico." }
				]
			},
			{
				pregunta: "¿Cómo se describe mejor la relación jerárquica del eje hipotálamo-hipófisis-órgano?",
				opciones: [
					{ texto: "El hipotálamo secreta hormonas para estimular los órganos diana directamente", correcta: false, retroalimentacion: "Incorrecta: Generalmente, el hipotálamo estimula la hipófisis y ésta, a su vez, estimula los órganos diana; no hay una acción directa del hipotálamo sobre la mayoría de los órganos diana." },
					{ texto: "El hipotálamo controla la hipófisis y ésta controla glándulas periféricas", correcta: true, retroalimentacion: "Correcta: Ésta es la descripción precisa de la jerarquía: el hipotálamo es el nivel superior, la hipófisis el intermedio y las glándulas periféricas son los ejecutores finales." },
					{ texto: "Los órganos diana controlan la función del hipotálamo", correcta: false, retroalimentacion: "Incorrecta: Aunque existe realimentación negativa —los órganos diana influyen en el hipotálamo—, la relación principal es de control descendente desde el hipotálamo." },
					{ texto: "Todas las hormonas se producen en el mismo órgano", correcta: false, retroalimentacion: "Incorrecta: Las hormonas se producen en diferentes órganos —hipotálamo, hipófisis y órganos diana— a lo largo del eje." }
				]
			},
			{
				pregunta: "A nivel celular, las hormonas tiroideas T3 y T4 ejercen su efecto uniéndose a receptores que se encuentran en:",
				opciones: [
					{ texto: "La membrana celular", correcta: false, retroalimentacion: "Incorrecta: Los receptores de membrana son comunes para hormonas peptídicas, no para las tiroideas." },
					{ texto: "El citoplasma, pero no se mueven al núcleo", correcta: false, retroalimentacion: "Incorrecta: Los receptores de hormonas tiroideas se encuentran principalmente en el núcleo y afectan la expresión genética." },
					{ texto: "Las mitocondrias, para aumentar la producción de ATP", correcta: false, retroalimentacion: "Incorrecta: Aunque la T3 tiene efectos sobre las mitocondrias, su principal mecanismo de acción es a través de receptores nucleares." },
					{ texto: "El núcleo, donde actúan como factores de transcripción", correcta: true, retroalimentacion: "Correcta: Las hormonas tiroideas atraviesan la membrana celular y se unen con receptores nucleares, lo que altera la expresión de genes para regular el metabolismo, el crecimiento y el desarrollo." }
				]
			},
			{
				pregunta: "¿Qué enzima convierte andrógenos, como la testosterona, en estrógenos?",
				opciones: [
					{ texto: "17-β-hidroxiesteroide-deshidrogenasa", correcta: false, retroalimentacion: "Incorrecta: Esta enzima convierte la androstenodiona en testosterona y la estrona en estradiol, pero no cataliza la aromatización." },
					{ texto: "5-α-reductasa", correcta: false, retroalimentacion: "Incorrecta: Esta enzima convierte la testosterona en dihidrotestosterona (DHT), un andrógeno más potente." },
					{ texto: "Aromatasa", correcta: true, retroalimentacion: "Correcta: La aromatasa es la enzima que convierte los andrógenos, como la testosterona y la androstenodiona, en estrógenos. Es un objetivo importante en el tratamiento del cáncer de mama dependiente de estrógenos." },
					{ texto: "Colesterol desmolasa", correcta: false, retroalimentacion: "Incorrecta: Ésta es la enzima que cataliza el primer paso limitante en la síntesis de esteroides, lo que convierte el colesterol en pregnenolona." }
				]
			},
			{
				pregunta: "¿Qué hormona es responsable de la maduración folicular y la espermatogénesis, respectivamente?",
				opciones: [
					{ texto: "FSH en ambos casos", correcta: true, retroalimentacion: "Correcta: La FSH es responsable de la maduración de los folículos ováricos y de la espermatogénesis en los túbulos seminíferos, en ambos sexos." },
					{ texto: "Estrógeno y testosterona", correcta: false, retroalimentacion: "Incorrecta: El estrógeno y la testosterona son las hormonas finales que actúan en estos procesos, pero no las que los inician desde la hipófisis." },
					{ texto: "LH en ambos casos", correcta: false, retroalimentacion: "Incorrecta: La LH es crucial para la producción de testosterona y la ovulación, pero no para la maduración folicular o la espermatogénesis inicial." },
					{ texto: "Prolactina y GH", correcta: false, retroalimentacion: "Incorrecta: La prolactina y la GH regulan la producción de leche y el crecimiento somático, respectivamente, no la función gonadal primaria." }
				]
			},
			{
				pregunta: "Las hormonas esteroideas, como los estrógenos y los andrógenos, no pueden ser almacenadas en las células que las producen. Esto se debe a que:",
				opciones: [
					{ texto: "Son demasiado grandes para ser almacenadas en vesículas", correcta: false, retroalimentacion: "Incorrecta: Las hormonas esteroideas son pequeñas moléculas lipofílicas y el tamaño no es un impedimento para su almacenamiento." },
					{ texto: "Son liposolubles y se difunden fácilmente a través de la membrana celular una vez sintetizadas", correcta: true, retroalimentacion: "Correcta: Debido a su naturaleza lipofílica, las hormonas esteroideas no pueden ser almacenadas en vesículas. En cambio, se secretan inmediatamente después de su síntesis a través de la membrana celular." },
					{ texto: "Las enzimas necesarias para su síntesis sólo están activas durante periodos de estrés", correcta: false, retroalimentacion: "Incorrecta: Las enzimas para la síntesis de hormonas sexuales están activas de forma continua en respuesta a la estimulación hormonal, no sólo durante el estrés." },
					{ texto: "Requieren proteínas transportadoras para su liberación en el torrente sanguíneo", correcta: false, retroalimentacion: "Incorrecta: Si bien las hormonas esteroideas viajan unidas a proteínas en la sangre, su liberación de la célula productora es por difusión, no por un mecanismo de transporte activo." }
				]
			},
			{
				pregunta: "La pubertad, tanto en hombres como en mujeres, es desencadenada por:",
				opciones: [
					{ texto: "Producción de hormonas sexuales por las glándulas suprarrenales", correcta: false, retroalimentacion: "Incorrecta: Las glándulas suprarrenales contribuyen con andrógenos, pero no son la señal de inicio de la pubertad." },
					{ texto: "Maduración hipofisiaria para secretar GnRH", correcta: false, retroalimentacion: "Incorrecta: La GnRH es producida por el hipotálamo, no por la hipófisis." },
					{ texto: "Un aumento de estrógeno y testosterona", correcta: false, retroalimentacion: "Incorrecta: El aumento de los niveles de estrógeno y testosterona son las consecuencias, no el desencadenante inicial de la pubertad." },
					{ texto: "Aumento de la secreción pulsátil de GnRH por el hipotálamo", correcta: true, retroalimentacion: "Correcta: El “despertar” del eje HHG, marcado por el inicio de la secreción pulsátil de GnRH por el hipotálamo, es el evento hormonal clave que desencadena la pubertad." }
				]
			},
			{
				pregunta: "La GH ejerce la mayoría de sus efectos anabólicos indirectamente mediante:",
				opciones: [
					{ texto: "Testosterona", correcta: false, retroalimentacion: "Incorrecta: La testosterona es una hormona sexual con efectos anabólicos, pero no es el mediador de los efectos de la GH." },
					{ texto: "Glucagón", correcta: false, retroalimentacion: "Incorrecta: El glucagón es una hormona pancreática que aumenta los niveles de glucosa en sangre con un efecto catabólico." },
					{ texto: "Hormonas tiroideas", correcta: false, retroalimentacion: "Incorrecta: Las hormonas tiroideas regulan el metabolismo basal, pero no son las mediadoras directas de los efectos de crecimiento de la GH." },
					{ texto: "IGF-1", correcta: true, retroalimentacion: "Correcta: El IGF-1, producido principalmente en el hígado como respuesta a la GH, es el mediador principal de los efectos promotores del crecimiento de la GH en el hueso, cartílago y músculo." }
				]
			},
			{
				pregunta: "Un prolactinoma produciría típicamente:",
				opciones: [
					{ texto: "Prolactina alta, supresión del eje gonadal, amenorrea e infertilidad", correcta: true, retroalimentacion: "Correcta: El exceso de prolactina inhibe la GnRH, lo que, a su vez, disminuye la secreción de FSH y LH, lo que provoca disfunción gonadal, como la amenorrea en mujeres y la impotencia en hombres." },
					{ texto: "GH alta y prolactina baja", correcta: false, retroalimentacion: "Incorrecta: Un prolactinoma produciría un exceso de prolactina, no de GH." },
					{ texto: "Prolactina alta y dopamina baja", correcta: false, retroalimentacion: "Incorrecta: La dopamina es el freno natural; los niveles bajos de dopamina serían una causa de hiperprolactinemia, pero un prolactinoma es la causa principal en este caso." },
					{ texto: "Prolactina baja y dopamina alta", correcta: false, retroalimentacion: "Incorrecta: Ésta es la condición opuesta a lo que causaría un prolactinoma." }
				]
			},
			{
				pregunta: "El receptor de GH es del tipo",
				opciones: [
					{ texto: "Asociado con proteína G", correcta: false, retroalimentacion: "Incorrecta: Los receptores de proteína G son comunes para las catecolaminas y muchas otras hormonas peptídicas, pero no para la GH." },
					{ texto: "Intracelular —nuclear—", correcta: false, retroalimentacion: "Incorrecta: Los receptores nucleares son para hormonas esteroideas y tiroideas, no para la GH." },
					{ texto: "Con tirosina-cinasa intrínseca", correcta: false, retroalimentacion: "Incorrecta: Aunque la señalización de la GH utiliza una tirosina-cinasa, ésta no es una parte integral del receptor. En su lugar, el receptor se asocia con la tirosina-cinasa JAK2." },
					{ texto: "Asociado con una tirosina-cinasa —como JAK/STAT—", correcta: true, retroalimentacion: "Correcta: El receptor de la GH, al unirse a la hormona, dimeriza y activa la tirosina-cinasa JAK2 y ésta fosforila al receptor y a las proteínas STAT, que, luego, se translocan al núcleo para alterar la expresión génica." }
				]
			},
			{
				pregunta: "GH y prolactina son estructuralmente similares; ambas son:",
				opciones: [
					{ texto: "Hormonas peptídicas de una sola cadena", correcta: true, retroalimentacion: "Correcta: Ambas son hormonas peptídicas compuestas por una sola cadena de aminoácidos, lo que refleja una similitud evolutiva en sus estructuras." },
					{ texto: "Hormonas esteroideas", correcta: false, retroalimentacion: "Incorrecta: Ambas son hormonas peptídicas, no esteroideas." },
					{ texto: "Hormonas derivadas de aminoácidos", correcta: false, retroalimentacion: "Incorrecta: Aunque están compuestas por aminoácidos, no son hormonas de un solo aminoácido, sino hormonas peptídicas completas." },
					{ texto: "Producidas por la hipófisis posterior", correcta: false, retroalimentacion: "Incorrecta: Ambas son producidas en la hipófisis anterior." }
				]
			}
		]
	}
};

function validarBancoContenido(banco, identificador) {
	if (!banco || !banco.titulo || !banco.presentacion || !banco.instrucciones || !Array.isArray(banco.reactivos) || banco.reactivos.length === 0) {
		throw new Error("El banco de contenido '" + identificador + "' no tiene la información editorial completa.");
	}
	if (!banco.configuracion || !Number.isInteger(banco.configuracion.reactivosAMostrar) || banco.configuracion.reactivosAMostrar > banco.reactivos.length) {
		throw new Error("El banco de contenido '" + identificador + "' no tiene una cantidad válida de reactivos por intento.");
	}
	if (banco.configuracion.mostrarRetroalimentacionFinal) {
		var siguientePuntuacion = 0;
		var rangos = banco.retroalimentacionGeneral || [];
		rangos.forEach(function (rango) {
			if (rango.min !== siguientePuntuacion || !Number.isInteger(rango.max) || rango.max < rango.min || !rango.texto) {
				throw new Error("La retroalimentación general de '" + identificador + "' tiene un rango incompleto.");
			}
			siguientePuntuacion = rango.max + 1;
		});
		if (siguientePuntuacion !== banco.configuracion.reactivosAMostrar + 1) {
			throw new Error("La retroalimentación general de '" + identificador + "' no cubre todas las puntuaciones.");
		}
	}

	banco.reactivos.forEach(function (reactivo, indiceReactivo) {
		if (!reactivo.pregunta || !Array.isArray(reactivo.opciones) || reactivo.opciones.length < 2) {
			throw new Error("El reactivo " + (indiceReactivo + 1) + " de '" + identificador + "' está incompleto.");
		}
		var correctas = 0;
		reactivo.opciones.forEach(function (opcion, indiceOpcion) {
			if (!opcion.texto || !opcion.retroalimentacion) {
				throw new Error("Falta texto o retroalimentación en el reactivo " + (indiceReactivo + 1) + ", opción " + (indiceOpcion + 1) + " de '" + identificador + "'.");
			}
			if (opcion.correcta) correctas += 1;
		});
		if (correctas !== 1) {
			throw new Error("El reactivo " + (indiceReactivo + 1) + " de '" + identificador + "' debe tener exactamente una respuesta correcta.");
		}
	});
}
