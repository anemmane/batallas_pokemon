let ataqueJugador // variable global
let ataqueEnemigo// variable global
let pokemonJugador
let pokemonEnemigo

function iniciarJuego() {
  //accion para escuchar el boton de elegir pokemon. Primero creamos la variable    y le decimos que encuentre dentro del documento el elemento con determinado ID

  let botonElegirPokemon = document.getElementById('boton-seleccionar') //a la variable le decimos que escuche el event click y llame la funcion seleccionarPokemon
  botonElegirPokemon.addEventListener('click', seleccionarPokemon)

  let botonAtaqueFuego = document.getElementById('boton-ataque-fuego')
  botonAtaqueFuego.addEventListener('click', ataqueFuego)

  let botonAtaqueAgua = document.getElementById('boton-ataque-agua')
  botonAtaqueAgua.addEventListener('click', ataqueAgua)

  let botonAtaquePlanta = document.getElementById('boton-ataque-planta')
  botonAtaquePlanta.addEventListener('click', ataquePlanta)
}

function seleccionarPokemon() {
  let inputCharizard = document.getElementById('charizard')
  let inputBlastoise = document.getElementById('blastoise')
  let inputVenusaur = document.getElementById('venusaur')
  pokemonJugador = document.getElementById('pokemonJugador')
  
  if (inputCharizard.checked){
    pokemonJugador.innerHTML = 'Charizard' //Primeros pasos de manipulación del DOM
    pokemonJugador = 'Charizard'
  } else if (inputBlastoise.checked){
    pokemonJugador.innerHTML = 'Blastoise' //modifica el Span con id pokemonJugador
    pokemonJugador = 'Blastoise'
  } else if (inputVenusaur.checked){
    pokemonJugador.innerHTML = 'Venusaur' 
    pokemonJugador = 'Venusaur'
  } else{
    alert('Error en la seleccion')
  }

  seleccionarPokemonEnemigo()
}

function seleccionarPokemonEnemigo(){
  let pokemonAleatorio = aleatorio(1,3)
  pokemonEnemigo = document.getElementById('pokemonEnemigo')
  
  if (pokemonAleatorio == 1){
    pokemonEnemigo.innerHTML = 'Charizard'
    pokemonEnemigo = 'Charizard'
  } else if (pokemonAleatorio == 2){
    pokemonEnemigo.innerHTML = 'Blastoise'
    pokemonEnemigo = 'Blastoise'
  } else if (pokemonAleatorio == 3){
    pokemonEnemigo.innerHTML = 'Venusaur'
    pokemonEnemigo = 'Venusaur'
  }
}

function ataqueFuego(){
  ataqueJugador = 'FUEGO'
  ataqueEnemigoAccion()
}

function ataqueAgua(){
  ataqueJugador = 'AGUA'
  ataqueEnemigoAccion()
}

function ataquePlanta(){
  ataqueJugador = 'PLANTA'
  ataqueEnemigoAccion()
}

function ataqueEnemigoAccion(){
  let ataqueAleatorio = aleatorio(1,3)

  if (ataqueAleatorio == 1){
    ataqueEnemigo = 'FUEGO'
  } else if (ataqueAleatorio == 2){
    ataqueEnemigo = 'AGUA'
  } else if (ataqueAleatorio == 3){
    ataqueEnemigo = 'PLANTA'
  }

  crearMensajeAtaques()
}

function crearMensajeAtaques(){
  let seccionMensajes = document.getElementById('mensajes')
  
  let parrafo = document.createElement('p') //crea un nuevo elemento HTML
  parrafo.innerHTML = pokemonJugador + ' atacó con ' + ataqueJugador + ', ' + pokemonEnemigo + ' atacó con ' + ataqueEnemigo
  seccionMensajes.appendChild(parrafo) //integra el elemento creado en la sección elegida por ID
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego) // permite cargar el código a ejecutar cuando cargue todo el HTML