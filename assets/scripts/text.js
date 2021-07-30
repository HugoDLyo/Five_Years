const typed = new Typed('.typed', {
    strings: [
        '<i class="name">Gracias por ser mi Novia</i>', 
        '<i class="name">Gracias por ser mi Cómplice</i>', 
        '<i class="name">Gracias por ser mi Mujer</i>', 
        '<i class="name">Gracias por ser mi Prometida</i>', 
        '<i class="name">Gracias por ser Única</i>',
        '<i class="name">Gracias por ser Dedicada</i>', 
        '<i class="name">Gracias por ser Amorosa</i>', 
        '<i class="name">Gracias por ser Leal</i>', 
        '<i class="name">Gracias por ser Decidida</i>', 
        '<i class="name">Gracias por ser Maravillosa</i>', 
        '<i class="name">Gracias por ser Comprensiva</i>', 
        '<i class="name">Gracias por hacerme Feliz</i>',
        '<i class="name">Por eso y muchas cosas más…</i>', 
        '<i class="name">TE AMO &#9829; &#9829; &#9829;</i>'
    ],

    //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	//smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});