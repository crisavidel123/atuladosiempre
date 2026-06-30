/* ═══════════════════════════════════════════════
   MARISOL — JavaScript compartido
   ═══════════════════════════════════════════════ */

/* ─── PÉTALOS FLOTANTES ─── */
function spawnPetals() {
  const symbols = ['🌸','✨','🌺','🌹','💫','🌷','⭐','🍃'];
  const container = document.body;
  for (let i = 0; i < 10; i++) {
    const p = document.createElement('span');
    p.className = 'petal';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (0.9 + Math.random() * 1.4) + 'rem';
    p.style.animationDuration = (12 + Math.random() * 14) + 's';
    p.style.animationDelay = (Math.random() * 12) + 's';
    container.appendChild(p);
  }
}

/* ─── OVERLAY ─── */
const overlayData = {
  /* ── VIDEOS ── */
  'video-alegria':   { e:'🌟', t:'Tu mensaje de alegría', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-tristeza':  { e:'🌧️', t:'Tu abrazo en video', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-logro':     { e:'🎉', t:'¡Tu celebración en video!', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-sola':      { e:'🕯️', t:'Compañía en video', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-enojo':     { e:'🌪️', t:'Tu voz de calma', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-amor':      { e:'🌹', t:'Palabras sobre el amor', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-ansiedad':  { e:'🫶', t:'Mensaje para la ansiedad', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-nostalgia': { e:'🌙', t:'Para los momentos de nostalgia', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-motivacion':{ e:'🔥', t:'Tu grito de motivación', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-gratitud':  { e:'🙏', t:'Gratitud compartida', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-cumple':    { e:'🎂', t:'¡Feliz cumpleaños, Marisol!', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-miedo':     { e:'🛡️', t:'No estás sola en esto', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-cansancio': { e:'🌿', t:'Permiso de descansar', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },
  'video-nuevainicio':{ e:'🚀', t:'Un nuevo comienzo', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' },

  /* ── ACTIVIDADES UNIVERSALES ── */
  'act-respira':   { e:'🫁', t:'Respiración 4-7-8', d:'Inhala 4 seg → sostén 7 seg → exhala 8 seg. Repite 4 veces. El sistema nervioso se regula solo. Cierra los ojos y hazlo ahora.' },
  'act-respira2':  { e:'🫁', t:'Respiración 4-7-8', d:'Inhala 4 seg → sostén 7 seg → exhala 8 seg. Repite 4 veces. Simplemente quiero que con esto respires un poco y pienses mejor en lo que quieres hacer. Tómate tu tiempo' },
  'act-respira3':  { e:'🫁', t:'Respiración 4-7-8', d:'Inhala 4 seg → sostén 7 seg → exhala 8 seg. Repite 4 veces. No te estreses por cosas que quiza no pasen, respira y tómate tu tiempo para relajarte. No tienes que correr por algo que puedes llegar caminando.' },
  'act-respira4':  { e:'🫁', t:'Respira', d:'Respira, no te apresures a tomar una decisión, te conozco y sé que una decision a la rápida no puede ser lo que realmente quieres, piensa bien las cosas, y para eso respira y tomate tu tiempo, tu confusión no tiene que solucionarse de manera rápida.' },
  'act-respira5':  { e:'🫁', t:'Respira', d:'Todo sucede, todo pasa y asi mismo todo termina. No te desesperes, no actues de mala manera, solo respira y piensa que eres mucho mejor que lo que pasó.' },
  'act-diario':    { e:'📖', t:'Escribe lo bonito', d:'Toma papel o tu celular. Escribe: ¿qué me hizo feliz hoy? ¿qué cosas lindas pasaron? Guárdalo donde puedas releerlo después.' },
  'act-diario2':   { e:'📖', t:'Escribe lo bonito', d:'Ahora escribe lo que sientes, pero esta vez no te lo guardes, pueden ser palabras dulces o algo que te atormente, pero sea lo que sea lo que escribas, compartelo con tu pareja. Te escucha...' },
  'act-diario3':   { e:'📖', t:'Escribe lo bonito', d:'Quiza tienes muchas cosas por dar gracias, que te parece si lo escribes, no solamente 3, sino todas las que tienes. Guarda ese papel, porque sé que mas adelante iras alargando más y más la lista.' },
  'act-diario4':   { e:'📖', t:'Escribe lo diferente', d:'Se que nunca volveras a cometer algun error del pasado, y no pretendo recordarlos, solo quiero que escribas ahora que es lo que quieres que sea diferente. Las cosas no pasan dos veces en la vida.' },
  'act-diario5':   { e:'📖', t:'Carta para tí', d:'Hablamos de propositos, y este es tu momento de hacerlo, escribe todas tus metas o propositos que quisieras realizar en este tu nuevo año, guarda este escrito y leelo al siguiente año para saber lo que paso, no con nostalgia sino con el objetivo de saber cuanto cambiaste desde entonces... OJO, no vale colocar, tener mas aguante en las fiestas jajaja' },
  'act-diario6':   { e:'📖', t:'Recuerdos...', d:'Estos seran tus recuerdos, tu vida estará de subidas y bajadas, pero en estas subidas mejor escribirlas y recordarlas, o que tal si mejor haces algo diferente, no escribas, pero si haces audios tipo historia que guardes en tu chat personal? Digo, a veces un audiolibro resulta mas interesante...' },
  'act-diario7':   { e:'📖', t:'Algo nuevo?', d:'La escritura es una manera para no olvidar algo, por ese motivo existe el papeleo en muchas instancias. Pero al punto, escribe y no dejes de escribir, ya que nunca lo olvidaras, ten esa esperanza de que las cosas pueden cambiar y ser mejor, aún más de lo que esperas.' },
  'act-diario8':   { e:'📖', t:'Todo es bueno', d:'Toda idea es buena, lo que realmente importa es que nazca de ti en beneficio de ti o los que mas quieres. Pero nunca pierdas esa idea, asi que escribela para que nunca lo olvides.' },
  'act-playlist':  { e:'🎵', t:'Playlist de alegria', d:'Busca en Spotify o YouTube una playlist que hable por ti. La música te ayuda a reir y celebrar junto a esa buena vibra que tienes.' },
  'act-playlist2': { e:'🎵', t:'Playlist del alma', d:'Busca en Spotify o YouTube una musica que te acompañe. La música tambien llora lo que las palabras no alcanzan.' },
  'act-baile':     { e:'💃', t:'Reto del baile', d:'Pon una canción que te encante, cierra la puerta y baila como si nadie mirara. Todo el salón es tuyo. Mínimo 3 canciones.' },
  'act-baile2':    { e:'💃', t:'Mueve el Cuerpo', d:'Baila y goza del momento, te aseguro que cuando bailas es cuando mas feliz te veo, hazlo sin miedo, porque el verte bailar no solamente alegra mi corazón, tambien alegra todo tu ambiente alrededor tuyo.' },
  'act-baile3':    { e:'💃', t:'Mueve el Cuerpo', d:'Intenta bailar algo nuevo, yo se que te encanta bailar, pero intenta cosas nuevas, quiza reforzar una danza en la cual flaqueas un poco, atrevete a seguir aprendiendo, para que la proxima vez que lo hagas seas una total profesional!' },
  'act-carta':     { e:'💌', t:'Carta a futuro yo', d:'Escríbele a ti misma en 6 meses: "Ya lo superé, ya estoy bien, aquí estoy". A veces el futuro nos rescata desde el papel.' },
  'act-carta2':    { e:'💌', t:'Carta de amor', d:'Estas enamorada, y eso nadie te lo tiene que quitar. Escribe todo lo que sientes, y lo que esperas lograr en esta etapa, y cuando sientas que todo se te cae a pedazos lee esta carta y recupera toda esa energía. El amor no es facil, por eso siempre lucha por tu amor...' },
  'act-carta3':    { e:'💌', t:'Futuro', d:'La decepción duele, pero como cualquier dolor, no dura para siempre. Escribele a tu yo del futuro, pasaste por algo malo, pero te conoces a ti misma, te conoces muy bien, entonces dile a tu yo futuro que pese a los problemas eres alguien fuerte, y que todo lo que paso no te hara caer y que te levantarás más fuerte' },
  'act-te':        { e:'☕', t:'Momento té', d:'Hazte un té o algo calientito. Envuélvete en una cobija. No tienes que hacer nada productivo. Solo estar, sin culpa.' },
  'act-te2':       { e:'☕', t:'Momento té', d:'Prepárate un mate o té caliente, y simplemente relajate para mantener la serenidad en tu mente, no todo tiene que salir perfecto, pero si en benefecio para tí.' },
  'act-te3':       { e:'☕', t:'Toma cada recuerdo', d:'Las bebidas calientes son buen acompañante dentro el pensamiento y el recuerdo, tomar algo caliente puede ayudarte a liberarte pero sobre todo te hace entender que nuestros recuerdos tambien pueden terminar cuando terminamos de tomar algo caliente.' },
  'act-te4':       { e:'☕', t:'Toma un descanso', d:'Toma un mate de manzanilla o cedron, o algo que te ayude a relejar tu cuerpo, no necesitas estar siempre alerta, baja la guardia por un momento...' },
  'act-te5':       { e:'☕', t:'Relajate con algo caliente', d:'Todo tiene su tiempo, pero ahora es momento que tu tambien te dés tu propio tiempo, cuando tomes algo caliente, observa el vapor que genera el mismo, no te pierdas en su silueta, pierdete en tus pensamientos, pierdete pero pensando en tí.' },
  'act-foto':      { e:'📸', t:'Foto del momento', d:'Hazte una foto ahora mismo, tal como estás. Así te ves en este momento de tu vida. Guárdala en una carpeta especial.' },
  'act-foto2':     { e:'📸', t:'Foto del logro', d:'Un logro con lindos recuerdos es lo que mas atesorarás para siempre. Tómate fotos sola, con las personas que te acompañen ese momento, y recuerda este momento para siempre.' },
  'act-foto3':     { e:'📸', t:'Foto del recuerdo', d:'Tienes una foto del recuerdo? Porque no observarla... Es verdad lo que dicen, recordar es volver a vivir, no importa si fue malo o bueno, cada experiencia nos enseña algo que queda en nosotros para toda la vida.' },
  'act-foto4':     { e:'📸', t:'Foto del momento', d:'Llena tu galeria de todo lo bueno que te pasa, mas recuerdos bonitos es lo que necesitamos en la vida...' },
  'act-foto5':     { e:'📸', t:'Foto cumpleañera!', d:'Siendo un dia tan especial, tambien nunca debe ser olvidado, tómate miles de fotos, videos y comparte con familia o en redes, el unico requisito, que nunca falte una sonrisa en tu rostro...' },
  'act-foto6':     { e:'📸', t:'Foto Relajante', d:'Alguna vez compartí contigo el gusto de los paisajes, y quiero compartir ese gusto a tí. Toma la camara de tu telefono y empieza a fotografiar amaneceres, la naturaleza o algo que te llame la atención, lo que quiero que veas es que siempre existe un nuevo inicio y cada inicio tiene cosas diferentes las cuales podemos rescatar.' },
  'act-foto7':     { e:'📸', t:'Foto a lo Desconocido', d:'Junto con tus salidas, aprovecha en tomar fotos ramdon, recuerda que todo debe ser aleatorio, sal de esa rituna, algo nuevo te desestreza y te mantiene con energía.' },
  'act-foto8':     { e:'📸', t:'Foto de tu vision', d:'Si no puedes escribir o no sabes como describirlo entonces dibujalo, diseñalo, pero que no se pierda esa idea, y tomalo una foto (Perdón, quiza por mi toda tu galeria se llene jaja).' },
  'act-gesto':     { e:'🌻', t:'Gesto del día', d:'Envíale un mensaje bonito a alguien que ames o aprecies. No tiene que ser largo a veces un "te quiero" cambia el día de alguien.' },
  'act-gesto2':    { e:'🌻', t:'Gesto del día', d:'Un simple mensaje con un "Te quiero" o un "Te pienso" puede alegrar el dia de tu pareja, no tengas miedo de amar. Ama como quisieras que te amen a ti...' },
  'act-gesto3':    { e:'🌻', t:'Gesto del día', d:'El ser agradecido con las personas que nos rodean puede generar un cambio de humor postivo a tu alrededor, trata como quisieras que te traten, agradece como quisieras que te agradezcan...' },
  'act-autoabr':   { e:'🫂', t:'Autoabrazo', d:'Pon tus manos en tus hombros y date un abrazo real. Cierra los ojos y empieza a decir: "Estoy bien. Me quiero." Tres veces.' },
  'act-autoabr2':   { e:'🫂', t:'Autoabrazo', d:'Pon tus manos en tus hombros y date un abrazo real. Cierra los ojos y date cuenta de lo especial y fuerte que eres, el cansancio es normal en una persona, no dudes de tí.' },
  'act-confeti':   { e:'🎊', t:'¡Confeti virtual!', d:'🎉🎊🥳🎉🎊🥳 ¡FELICIDADES, MARISOL! Lo que lograste merece fuegos artificiales, confeti y aplausos. ¡Así se hace, campeona!' },
  'act-confeti2':  { e:'🎊', t:'¡FELICIDADES!', d:'🎉🎊🥳🎉🎊🥳 ¡FELICIDADES, MARISOL! Me alegra mucho que hoy cumplas un año mas de vida, pero el aumentar de años no significa que estemos viejos, significa que el tiempo que pasa nos enseña y prepara para saber afrontar todo lo que se viene, y porque no, apoyar a quienes nos necesitan...' },
  'act-muro':      { e:'🌟', t:'Muro de logros', d:'Escribe en papel o nota: "[fecha] Hoy lo logré: ___." Guárdalo. Cuando dudes de ti, saca ese papel y léelo en voz alta.' },
  'act-muro2':     { e:'🌟', t:'Levanta esos Ánimos', d:'Mira donde estas ahora, pasaste por mucho para lograr todo lo que tienes, y ter aseguro que esto apenas es el comienzo, descansa hoy pero mañana estaras mas fuerte.' },
  'act-muro3':     { e:'🌟', t:'Levanta esos Ánimos', d:'El miedo nunca fue algo que te caracterice, al contrario, tu fortaleza siempre te hizo destacar ante las demas personas. Tus miedos se irán con tu seguridad y tu perseverancia. Tu puedes!' },
  'act-muro4':     { e:'🌟', t:'Recuerda tu año', d:'Muchos dicen que un año nuevo verdadero es cuando uno cumple años, entonces, ¿Qué aprendiste de tu anterior año? Mi intención es que pienses en todo lo que hiciste y todo lo que puedes llegar a ser mejor... Realiza tus propositos para tu proximo cumpleaños, propositos que hagan una versión mejorada de ti. ' },
  'act-muro5':     { e:'🌟', t:'Recuerda este momento', d:'Tu muro de recuerdos siempre tiene que estar actualizado, al final son tus recuerdos y memorias, que quiza llegues a olvidar, pero en un futuro al ver fotos, videos o hasta las notas escritas por ti, te haran decir: Viví mi vida al máximo. ' },
  'act-capricho':  { e:'🍰', t:'Tu capricho del día', d:'Hoy mereces algo rico. Ese postre que evitas, esa ropa que querías, esa película de 3 horas. Hoy sí se puede.' },
  'act-capricho2': { e:'🍰', t:'Tu capricho cumpleañero', d:'Es tu día, asi que puede hacer todos tus caprichos, come lo que tu quieras, sal donde desees, puedes tomar si quieres... Pero sobre todo, disfruta de tu día!.' },
  'act-pelicula':  { e:'🎬', t:'Película del alma', d:'Sugerencia especial: "Coco" para sentir, "Julie & Julia" para inspirarte, "The Secret Life of Walter Mitty" para soñar. Tú eliges.' },
  'act-pelicula2': { e:'🎬', t:'Película del Olvido', d:'Es momento de despejar la mente, y una buena forma de hacerlo es ver una buena pelicula o serie. Personalmente te recomendaria la serie "YOU", una serie de varias temporadas pero con una trama que quiza puede llegar a sorprenderte.' },
  'act-pelicula3': { e:'🎬', t:'Película del Descanso', d:'No te pido que veas algo atentamente, solo intenta ver algo que te haga reir y sobre todo, te haga sentir en casa y sobre todo, visualiza algo que no te haga pensar, solo disfruta de ver una buena pelicula comiendo palomitas.' },
  'act-pelicula4': { e:'🎬', t:'Descubre algo nuevo', d:'Te tengo un reto, quiza no hacer una tarde de peliculas o de series. Te reto a que veas un documental, de algo que te interese, a veces el conocer algo nuevo expande tu mente. Pero sobre todo al momento de hablar te puede hacer sonar mas intelectual...' },
  'act-escribe':   { e:'✍️', t:'Escríbelo sin filtros', d:'Papel y pluma. Escribe todo lo que sientes, sin autocorrección, sin censura. Cuando acabes rómpelo si quieres. Ya salió de ti.' },
  'act-escribe2':  { e:'✍️', t:'Escritura de Aclaramiento', d:'Muchas veces la confusion puede ser negativo para tí, pero que te parece si ahora escribes todo lo que te mantiene confundida a veces teniendo las cosas frente a ti puedes pensar mejor las cosas, no te quedes con esas ideas, ya que todo eso tiene causas y consecuencias, escribelas y analiza la situacion segun tu conveniencia.' },
  'act-ejercicio': { e:'🏃', t:'Mueve el cuerpo', d:'10 saltos, 10 sentadillas, una caminata de 5 minutos afuera. El cuerpo procesa las emociones moviéndose. Pruébalo ahora.' },
  'act-gritar':    { e:'🎤', t:'Grita una canción', d:'Pon una canción a todo volumen, la que sea. Canta, grita, lo que necesites. Sin vergüenza.' },
  'act-lluvia':    { e:'🌧️', t:'Sonidos de lluvia', d:'Busca "rain sounds" o "thunderstorm ambience" en YouTube. Cierra los ojos, respira, deja que el sonido te lleve a otro lugar.' },
  'act-lluvia2':   { e:'🌧️', t:'Sonidos', d:'Muchas veces el sentirse solo no quiere decir que realmente lo estemos, yo estoy ahora contigo, estoy justo ahora en tu mano mediante algo virtual pero estoy contigo, cada video, cada audio antiguo, puedes escucharlo y asi sabras que estoy contigo en donde sea que te encuentres.' },
  'act-lluvia3':   { e:'🌧️', t:'Sonidos', d:'Muchas veces no puedes controlar todo lo que sucede, pero tu eres dueña de tus pensamientos, ideas y sueños. Escucha algo que te relaje, puede ser musica clasica, covers de piano o guitarra, escucha algo lento que te despeje y te relaje.' },
  'act-lluvia4':   { e:'🌧️', t:'Sonidos', d:'Escucha algo relajante, escucha algo que llegue a hacerte dormir... A veces de manera inconciente la musica puede hacer descansar a nuestra mente, no solamente el cuerpo.' },
  'act-lluvia5':   { e:'🌧️', t:'Sonidos', d:'Según internet los sonidos de lluvia relajan, y quiza en parte tiene razón, ya que cuando hay una lluvia yo prefiero estar en cama y relajandome. Pero tambien puede usar sonidos de la naturaleza o porque no, música suave o lenta que te ayuden a relajarte.' },
  'act-receta':    { e:'🍜', t:'Cocínate algo', d:'Tu platillo favorito o algo sencillo, realiza algo nuevo que quiza no te atrevias antes. Cocinarte a ti misma es un acto de amor propio. Come despacio y sin pantalla. Saboréalo.' },
  'act-receta2':   { e:'🍜', t:'Algo Nuevo', d:'Te atreves a cocinar algo nuevo? No importa como salga pero colocale tu toque, la cosa es que haya nacido de ti y que te guste a tí, aunque quizá la comida y creatividad solo sea para expertos, no pierdes nada intentandolo.' },
  'act-vela':      { e:'🕯️', t:'Enciende una vela', d:'Si tienes una vela en casa, enciéndela. Pon música suave. Oscuridad y luz bailando hay algo mágico en eso que calma.' },
  'act-vela2':     { e:'🕯️', t:'Enciende una vela', d:'Enciende una vela y apaga las luces, asi como la vela, tu cansancio no es eterno, lo que quiero es que busques relajarte y sobre todo te desconectes de tus problemas y responsabilidades.' },
  'act-vela3':     { e:'🕯️', t:'Sé como la vela', d:'Una vela siempre estara encendida en calma, siempre alumbrará pese a la oscuridad. Asi que no dejes que nada rompa tu tranquilidad, mantente viva y alumbra todo tu alrededor con tu paz y buen carisma.' },
  'act-5min':      { e:'⏱️', t:'Pausa de 5 minutos', d:'Sal de donde estás ahora mismo. Camina al lugar más cercano con aire fresco. Regresa distinta. Siempre funciona, siempre.' },
  'act-afirmacion':{ e:'🌞', t:'Afirmación del día', d:'"Soy capaz. Soy suficiente. Estoy exactamente donde necesito estar." Di esto tres veces en voz alta, aunque no lo creas del todo.' },
  'act-afirmacion2':{ e:'🌞', t:'Lee esto en Voz Alta', d:'No hay nada que me detenga, soy imparable, quiza ahora estoy sin ganas ni fuerzas, pero pronto volvere a ser más fuerte. Lo manifiesto.' },
  'act-afirmacion3':{ e:'🌞', t:'Tu lo conseguiste', d:'Todo lo que tienes es a costa de tu trabajo y esfuerzo. Sin ti nada de esto hubiera sido posible... Agradece por tu salud y buena fortuna.' },
  'act-afirmacion4':{ e:'🌞', t:'Lo conseguirás', d:'Los nuevos inicios no deben estar acompañados del miedo, al contrario, deben estar acompañador de la fuerza y energia que tienes, sigue callando bocas como siempre lo hiciste.' },
  'act-afirmacion5':{ e:'🌞', t:'Campeona!', d:'No siempre es necesario que alguien mas lo diga, con que tu misma te lo digas es mas que suficiente, porque solo tu sabes cuanto te cuestan las cosas y todo lo que haces para conseguirlo. Asi que mírate al espejo y di en voz alta, estoy orgullosa de ti Marisol.' },
  'act-afirmacion6':{ e:'🌞', t:'Atráe lo bueno', d:'Tu misma me lo decías, atrae las buenas vibras, atrae todo lo que quieres, veras que todo lo que deseas te llegara, puede ser rápido, puede ser lento, pero de que llegará a ti, lo hará en el momento menos esperado pero perfecto para tí.' },
  'act-llamada':   { e:'📞', t:'Llama a alguien que amas', d:'Una llamada de 5 minutos a quien más quieras. No importa el motivo. A veces la voz de alguien que nos quiere lo cura todo.' },
  'act-llamada2':  { e:'📞', t:'Llama a alguien que quieres', d:'Cuenta a todos lo que lograste. Al final es un logro que todos tenemos que festejar, es un logro unico.' },
  'act-llamada3':  { e:'📞', t:'Llamada de Apoyo', d:'A veces eres mas fuerte cuando tienes a alguien que te apoye, llama a la persona o las personas con las cuales te sientes con fuerza, cuentales tu miedo, y asi con apoyo tus miedos se alejarán de ti.' },
  'act-llamada4':  { e:'📞', t:'Llamada de Agradecimiento', d:'Es momento de agredecer a las personas que te ayudaron, aun sea minimo el apoyo, pero fue parte importante para tus objetivos. Siempre hay que ser agradecidos...' },
  'act-llamada5':  { e:'📞', t:'Llamada de Buenas Nuevas', d:'Tu mamá es muy importante para tí, llámala y cuentale de este nuevo inicio, y tambien escucha, una madre siempre te va a querer feliz, y sus consejos serán para que seas feliz, hazlo y veras que sera un inicio diferente y positivo.' },
  'act-llamada6':  { e:'📞', t:'Llamadas de Cumpleaños', d:'Ahora no te diré que llames a alguien, todo lo contrario, espera las llamadas de felicitaciones. Estoy seguro que hay personas como yo que quieren desearte todo lo mejor del mundo. OJO, toda llamada es bien recibida jaja.' },
  'act-llamada7':  { e:'📞', t:'Llamadas de Orgullo', d:'Sé lo que puedes llegar a pensar, si te pido muchas veces que llames para contar tus logros, puede resultar dificil o tedioso, pero hazlo, realmente el compartir con alguien estos momentos, te hace aún más feliz.' },
  'act-llamada8':  { e:'📞', t:'Llamada conjunta', d:'Sé que eres una persona que resuelve todo, pero a veces una opinion puede ser desiciva para elegir algo, pero no te quedes con una sola opinion, tienes que ver la situacion de diferentes puntos de vista y eso no es necesario que lo hagas sola, tienes personas que te apoyan, acude a ellas.' },
  'act-llamada9':  { e:'📞', t:'Llama a alguien', d:'Tu nunca estas sola Marisol, nunca lo estuviste y tampoco nunca lo estaras. No tienes porque estar sola ahora mismo, busca apoyo, no busques consejos pero busca alguien quien te escuche y es silencio te acompañe y este contigo para cualquier cosa...' },
  'act-estrellas': { e:'🌌', t:'Noche de estrellas', d:'Si puedes, sal esta noche y mira el cielo. Si no, busca "live star camera" en YouTube. El universo pone en perspectiva cualquier cosa.' },
  'act-estrellas2':{ e:'🌌', t:'Noche de estrellas', d:'Salgan esta noche y miren el cielo. Disfruta de los momentos en pareja, sonrian y diviertanse, demuestrense amor y afecto. Vivan su momento y no dejes pasar un momento juntos...' },
  'act-estrellas3':{ e:'🌌', t:'Mirada al Cielo', d:'Muchos dicen que los recuerdos se lo lleva el viento, pero en muchas ocasiones lo mejor es mirar al cielo y dejar que todo el recuerdo fluya y se lo lleve el cielo, puede regresar pero nunca regresará de la misma manera.' },
  'act-perdon':    { e:'🕊️', t:'Carta de perdón', d:'Escríbele a alguien (o a ti misma) una carta de perdón que quizás nunca envíes. Soltar el peso de adentro es un acto de valentía.' },
  'act-perdon2':   { e:'🕊️', t:'Carta de enojo', d:'Escríbele a alguien (o a ti misma) una carta donde expreses todo lo que sientes, desata tu enojo en la carta, escribe, dibuja o rayonea la hoja. Por ultimo quema la carta, suelta todo tu enojo.' },
  'act-bano':      { e:'🛁', t:'Baño ritual', d:'Baño calientito, música suave, vela si tienes. No es un baño es un ritual de cuidado. Tómate todo el tiempo que quieras.' },
  'act-bano2':     { e:'🛁', t:'Baño ritual', d:'Baño calientito y música suave. No espero que con este ganes fuerza y energia, solo quiero que te relajes y sientas que por un momento nada en el mundo te moleste.' },
  'act-bano3':     { e:'🛁', t:'El agua se lleva todo', d:'Toma un baño caliente. Las duchas o baños limpian la piel, limpian el cuerpo de manera externa, pero si es necesario llora, deja salir todo lo que tienes dentro, limpiate como por dentro y fuera, y dejar que todo se vaya con el agua, hacia afuera...' },
  'act-objetivo':  { e:'🎯', t:'Visualiza tu meta', d:'Cierra los ojos 2 minutos. Imagínate ya habiendo logrado lo que quieres. ¿Cómo te sientes? ¿Qué llevas puesto? Vívelo ya.' },
  'act-objetivo2': { e:'🎯', t:'Meta cumplida', d:'Ya lo lograste, quiza fue dificil, pero pese a eso lo conseguiste. ¿Cómo te sientes? Vive tu momento, dale con todo!' },
  'act-objetivo3': { e:'🎯', t:'Visualiza tus Metas', d:'Eres capaz de hacer cualquier cosa, no te quedes ahi, eres capaz de cualquier cosa, tu sabes resolver cualquier cosa, no hay nada en el mundo que te impida cumplir tus sueños' },
  'act-objetivo4': { e:'🎯', t:'Visualiza tu meta', d:'Cierra los ojos 2 minutos. Imagínate ya habiendo logrado lo que quieres. ¿Cómo te sientes? Esa sensacion tambien debe ser un objetivo para lograr esta nueva meta.' },
  'act-objetivo5': { e:'🎯', t:'Sueña', d:'Lo mas bonito de la esperanza es siempre esperar que las cosas pueden cambiar para bien, entonces sueña con ese cambio esperado, a veces un sueño te genera mas fuerzas para llegar a tu objetivo, no dejes de soñar y veras que brillarás más que todos.' },
  'act-mantra':    { e:'🔮', t:'Mantra anti-miedo', d:'"El miedo es solo energía sin dirección. Yo elijo hacia dónde va." Repítelo. El miedo no desaparece aprendes a caminar con él.' },
  'act-naturaleza':{ e:'🌿', t:'Minuto de naturaleza', d:'Sal afuera aunque sea a tu patio, donde el calor del sol te acompañe, pon los pies en el piso y observa algo natural una planta, el cielo, el viento. 60 segundos.' },
  'act-naturaleza2':{ e:'🌿', t:'Tómate un minuto', d:'Sin energía? Que te parece si sales un momento a dar la vuelta, puedes tener contacto con la naturaleza, o tambien enfocate en ti misma y realiza algo que tienes pendiente. Hazte las uñas, el cabello... Concientete.' },
  'act-naturaleza3':{ e:'🌿', t:'Salir no significa escapar', d:'El salir a pensar bien las cosas no tiene nada de malo, al contrario, pensar como afrontarlos te hace volver con fuerza. Entonces el contacto con el mundo exterior te puede generar mas fuerza y valor.' },
  'act-naturaleza4':{ e:'🌿', t:'Mira a tu alrededor', d:'Es bueno salir y agradecer por la vida y por todas las cosas que tenemos, hasta el agradecerse a uno mismo nos llena de energia, ya que muchas veces trabajamos por todo lo que nos rodea y ver que poco a poco lo vas logrando debe ser motivo de agradecimiento.' },
  'act-naturaleza5':{ e:'🌿', t:'Camina', d:'Una recomendación mía, sal y camina, camina hasta que tus pies se cansen, camina todo lo necesario, pero camina pensando, analizando y sobre todo manten la calma, las cosas se irán ordenando poco a poco.' },
  'act-naturaleza6':{ e:'🌿', t:'Observa tu entorno', d:'Muchas cosas no son las mismas cada día, y es bueno observar esos cambios, no por envidia, sino para tambien generar el cambio en nosotros mismos, un arbol nunca es el mismo, va cambiando y creciendo, porque no hacer lo mismo, cambiar y crecer para mejorar.' },
  'act-naturaleza7':{ e:'🌿', t:'Algo nuevo', d:'Las salidas son las mejores formas de despejar la mente, pero que tal si sales a un lugar nuevo, a un lugar que nunca antes habias visitado, la curiosidad de conocer nuevos lugares tiene que ser un nuevo habito en todos.' },
  'act-selfie':    { e:'🤳', t:'Selfie poderosa', d:'Hazte una foto de frente, mirada directa. Eres más fuerte de lo que crees. Guárdala y recuérdalo cuando dudes.' },
  'act-selfie2':   { e:'🤳', t:'Selfie amorosa', d:'Hazte una foto, sola (para ver lo feliz que te hace estar con esa persona) o junto a tu ser amado, guardalo para que los recuerdos puedan vivirlos las veces que quieras' },
  'act-selfie3':   { e:'🤳', t:'Selfie de Fuerza', d:'Tómate una selfie ahora mismo, quiza puedas tener una cara de miedo, pero eso no importa, mas bien con esta selfie intenta cambiar de cara, no dejes notar tu miedo, eres fuerte, tanto por dentro y fuera, lo sé porque te conozco. Cambia esa cara de miedo por una de felicidad y fuerza.' },
  'act-selfie4':   { e:'🤳', t:'Selfie de Inicio', d:'Tómate una selfie ahora, será un recuerdo de este nuevo inicio, y al final tambien tómate una foto. OJO, no te olvides sonreir en todo momento, ya que una sonrisa al principio y al final será tu mejor recompensa. Inicia feliz, termina feliz.' },
  'act-selfie5':   { e:'🤳', t:'Selfie de Orgullo', d:'Lo sé quiza estoy pidiendo que te tomes muchas fotos, pero tienes que aceptar que en las fotos se encuentran recuerdos inolvidables. Toma la foto, puede ser tuya o de lo que estes orgullosa, pero esa foto nadie te la quita.' },
  'act-cancion':   { e:'🎶', t:'Una canción que te llene', d:'Pon la canción que más te haga sentir viva, poderosa o en paz. A veces una sola canción cambia el estado de ánimo por completo.' },
  'act-cancion2':  { e:'🎶', t:'Una canción que ames', d:'Pon la canción que mas represente lo que sientes. Una cancion puede representar muchas cosas, pero esta en especial tiene que representar tu amor' },
  'act-cancion3':  { e:'🎶', t:'Una cancion del Recuerdo', d:'Muchas veces los recuerdos pueden atormentarnos, pero es mejor recordarlos con cariño. Escucha una canción que te recuerde ese momento y deja salir los recuerdos que poco a poco te dejaran de aquejar.' },
  'act-cancion4':  { e:'🎶', t:'Una cancion nueva', d:'Es un nuevo inicio, entonces inicia con buena energía, te parece que inicies con una cancion? Canta, baila, disfruta de tu cancion, quien sabe, quiza sea algo mas representativo a futuro.' },
  'act-cancion5':  { e:'🎶', t:'Una cancion nueva', d:'Que te parece si creas una nueva cancion, no es necesario que realices la musica, pero que tal si escribes una letra que contenga todo lo que sientas y lo que quieres, el cantar tus palabras le dan un plus a tus emociones :)' },
};

function showOverlay(key) {
  const d = overlayData[key];
  if (!d) return;
  document.getElementById('ov-emoji').textContent = d.e;
  document.getElementById('ov-title').textContent = d.t;
  document.getElementById('ov-text').textContent  = d.d;
  const ov = document.getElementById('overlay');
  ov.classList.add('open');
}

function closeOverlay() {
  document.getElementById('overlay').classList.remove('open');
}

document.addEventListener('DOMContentLoaded', () => {
  spawnPetals();
  const ov = document.getElementById('overlay');
  if (ov) {
    ov.addEventListener('click', e => { if (e.target === ov) closeOverlay(); });
  }
});

/* ── VIDEOS PÁGINAS EXTRA ── */
overlayData['video-orgullosa']    = { e:'💪', t:'Tu mensaje de orgullo',      d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-confundida']   = { e:'🌫️', t:'Tu voz de claridad',         d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-esperanza']    = { e:'🌅', t:'Tu mensaje de esperanza',     d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-decepcionada'] = { e:'💔', t:'Tu abrazo ante la decepción', d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-curiosa']      = { e:'🔍', t:'Tu mensaje curioso',          d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-tranquila']    = { e:'🌊', t:'Tu mensaje de paz',           d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-creativa']     = { e:'🎨', t:'Tu mensaje creativo',         d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-resiliente']   = { e:'🦋', t:'Tu grito de orgullo',         d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-gratitud']     = { e:'🙏', t:'Tu mensaje de gratitud',      d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-cansancio']    = { e:'🌿', t:'Tu permiso de descansar',     d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-nuevainicio']  = { e:'🚀', t:'Tu mensaje de inicio',        d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
overlayData['video-cumple']       = { e:'🎂', t:'Tu mensaje de cumpleaños',    d:'Por favor ten paciencia, este video esta en desarrollo :) Atte. Cris' };
