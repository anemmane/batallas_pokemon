function iniciarJuego(){
  //accion para escuchar el boton de elegir pokemon. Primero creamos la variable    y le decimos que encuentre dentro del documento el elemento con determinado ID

  let botonElegirPokemon = document.getElementById('boton-seleccionar')

  //a la variable le decimos que escuche el event click y llame la funcion          seleccionarPokemon
  botonElegirPokemon.addEventListener('click', seleccionarPokemon)
}

function seleccionarPokemon(){
  let inputCharizard = document.getElementById('charizard')
  let inputBlastoise = document.getElementById('blastoise')
  let inputVenusaur = document.getElementById('venusaur')
  let pokemonJugador = document.getElementById('pokemonJugador')
  
  if (inputCharizard.checked){
    pokemonJugador.innerHTML = 'Charizard' //Primeros pasos de manipulación del DOM
  } else if (inputBlastoise.checked){
    pokemonJugador.innerHTML = 'Blastoise' //modifica el Span con id pokemonJugador
  } else if (inputVenusaur.checked){
    pokemonJugador.innerHTML = 'Venusaur' 
  } else{
    alert('Error en la seleccion')
  }
}



window.addEventListener('load', iniciarJuego) // permite cargar el código a ejecutar cuando cargue todo el HTML