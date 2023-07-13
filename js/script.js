//variables de funcion

// Variables GLOBALES
let ataqueJugador
let ataqueEnemigo
let pokemonJugador
let pokemonEnemigo
let contadorJugador = 3
let contadorEnemigo = 3
let opcionDePokemones

let inputCharizard
let inputBlastoise
let inputVenusaur

//arreglos
let pokemones = []

//clases y objetos
class Pokemon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}

let charizard = new Pokemon('Charizard', 'https://i.postimg.cc/8sHpDj40/char.png', 5)
let blastoise = new Pokemon('Blastoise', 'https://i.postimg.cc/30K3mT81/blas.png', 5)
let venusaur = new Pokemon('Venusaur', 'https://i.postimg.cc/c6ZxVQR3/venu.png', 5)

charizard.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  {nombre: 'ascuas', id: 'boton-fuego'},
  {nombre: 'ascuas', id: 'boton-fuego'},
  {nombre: 'ascuas', id: 'boton-fuego'},
  {nombre: 'pistola agua', id: 'boton-agua'},
  {nombre: 'latigo cepa', id: 'boton-planta'},
)

blastoise.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  {nombre: 'pistola agua', id: 'boton-agua'},
  {nombre: 'pistola agua', id: 'boton-agua'},
  {nombre: 'pistola agua', id: 'boton-agua'},
  {nombre: 'ascuas', id: 'boton-fuego'},
  {nombre: 'latigo cepa', id: 'boton-planta'},
)

venusaur.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  {nombre: 'latigo cepa', id: 'boton-planta'},
  {nombre: 'latigo cepa', id: 'boton-planta'},
  {nombre: 'latigo cepa', id: 'boton-planta'},
  {nombre: 'pistola agua', id: 'boton-agua'},
  {nombre: 'ascuas', id: 'boton-fuego'},
)

pokemones.push(charizard, blastoise, venusaur)


//console.log(pokemones) se ocupa si queremos ver un elemento, en este caso el arreglo


function iniciarJuego() {
  let activarSeccionAtaque = document.getElementById('eligeAtaque')
  activarSeccionAtaque.style.display = 'none'

  let activarSeccionReiniciar = document.getElementById('reiniciar')
  activarSeccionReiniciar.style.display = 'none'
  //accion para escuchar el boton de elegir pokemon. Primero creamos la variable    y le decimos que encuentre dentro del documento el elemento con determinado ID

  let contenedorTarjetas = document.getElementById('contenedorTarjetas')

  pokemones.forEach((pokemon) => {
    opcionDePokemones = `
    <input type="radio" name="eleccion" id=${pokemon.nombre} />
      <label class="tarjeta-pokemon" for=${pokemon.nombre}>
        <p>${pokemon.nombre}</p>
        <img src=${pokemon.foto} alt=${pokemon.nombre}>
      </label>`

    contenedorTarjetas.innerHTML += opcionDePokemones

    inputCharizard = document.getElementById('Charizard')
    inputBlastoise = document.getElementById('Blastoise')
    inputVenusaur = document.getElementById('Venusaur')
  })
  

  let botonElegirPokemon = document.getElementById('boton-seleccionar') //a la variable le decimos que escuche el event click y llame la funcion seleccionarPokemon
  botonElegirPokemon.addEventListener('click', seleccionarPokemon)

  let botonAtaqueFuego = document.getElementById('boton-ataque-fuego')
  botonAtaqueFuego.addEventListener('click', ataqueFuego)

  let botonAtaqueAgua = document.getElementById('boton-ataque-agua')
  botonAtaqueAgua.addEventListener('click', ataqueAgua)

  let botonAtaquePlanta = document.getElementById('boton-ataque-planta')
  botonAtaquePlanta.addEventListener('click', ataquePlanta)

  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemon() {

  let activarSeccionPokemon = document.getElementById('eligePokemon')
  activarSeccionPokemon.style.display = 'none'

  let activarSeccionAtaque = document.getElementById('eligeAtaque') //activamos el elemento hasta que se haya elegido un pokemon
  activarSeccionAtaque.style.display = 'flex'

  pokemonJugador = document.getElementById('pokemonJugador')

  if (inputCharizard.checked) {
    pokemonJugador.innerHTML = 'Charizard' //Primeros pasos de manipulación del DOM
    pokemonJugador = 'Charizard'
  } else if (inputBlastoise.checked) {
    pokemonJugador.innerHTML = 'Blastoise' //modifica el Span con id pokemonJugador
    pokemonJugador = 'Blastoise'
  } else if (inputVenusaur.checked) {
    pokemonJugador.innerHTML = 'Venusaur'
    pokemonJugador = 'Venusaur'
  } else {
    alert('Error en la seleccion')
  }

  seleccionarPokemonEnemigo()
}

function seleccionarPokemonEnemigo() {
  let pokemonAleatorio = aleatorio(1, 3)
  pokemonEnemigo = document.getElementById('pokemonEnemigo')

  if (pokemonAleatorio == 1) {
    pokemonEnemigo.innerHTML = 'Charizard'
    pokemonEnemigo = 'Charizard'
  } else if (pokemonAleatorio == 2) {
    pokemonEnemigo.innerHTML = 'Blastoise'
    pokemonEnemigo = 'Blastoise'
  } else if (pokemonAleatorio == 3) {
    pokemonEnemigo.innerHTML = 'Venusaur'
    pokemonEnemigo = 'Venusaur'
  }
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO'
  ataqueEnemigoAccion()
}

function ataqueAgua() {
  ataqueJugador = 'AGUA'
  ataqueEnemigoAccion()
}

function ataquePlanta() {
  ataqueJugador = 'PLANTA'
  ataqueEnemigoAccion()
}

function ataqueEnemigoAccion() {
  let ataqueAleatorio = aleatorio(1, 3)

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = 'FUEGO'
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA'
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo = 'PLANTA'
  }
  resultadoCombate()
}


function resultadoCombate() {
  let spanVidasJugador = document.getElementById('vidas-jugador')
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')


  if (ataqueJugador == ataqueEnemigo) {
    crearMensajeAtaques('Empate')
  } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'PLANTA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'PLANTA' && ataqueEnemigo == 'AGUA')) {
    crearMensajeAtaques('Ganaste')
    contadorEnemigo = contadorEnemigo - 1
    spanVidasEnemigo.innerHTML = contadorEnemigo
  } else {
    crearMensajeAtaques('Perdiste')
    contadorJugador = contadorJugador - 1
    spanVidasJugador.innerHTML = contadorJugador
  }

  contadorVidas()
}

function contadorVidas() {
  if (contadorEnemigo == 0) {
    crearMensajeFinal('El enemigo se ha debilitado. Ganaste la partida')
  } else if (contadorJugador == 0) {
    crearMensajeFinal('Has sido debilitado. Perdiste la partida')
  }
}

function crearMensajeAtaques(resultadoAtaque) {
  let seccionMensajes = document.getElementById('resultado')
  let ataquesDelJugador = document.getElementById('ataques-del-jugador')
  let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

  let nuevoAtaqueJugador = document.createElement('p')
  let nuevoAtaqueEnemigo = document.createElement('p')

  seccionMensajes.innerHTML = resultadoAtaque
  nuevoAtaqueJugador.innerHTML = pokemonJugador + ' atacó con ' + ataqueJugador
  nuevoAtaqueEnemigo.innerHTML = pokemonEnemigo + ' atacó con ' + ataqueEnemigo

  ataquesDelJugador.appendChild(nuevoAtaqueJugador) //integra el elemento creado en la sección elegida por ID
  ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
  let seccionMensajes = document.getElementById('resultado')

  seccionMensajes.innerHTML = resultadoFinal

  let botonAtaqueFuego = document.getElementById('boton-ataque-fuego') //encontramos el elemento cuando se emite el mensaje final
  botonAtaqueFuego.disabled = true //la propiedad del boton se cambia a disabled

  let botonAtaqueAgua = document.getElementById('boton-ataque-agua')
  botonAtaqueAgua.disabled = true

  let botonAtaquePlanta = document.getElementById('boton-ataque-planta')
  botonAtaquePlanta.disabled = true

  let activarSeccionReiniciar = document.getElementById('reiniciar')
  activarSeccionReiniciar.style.display = 'block'

}

function reiniciarJuego() {
  location.reload()
}


function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego) // permite cargar el código a ejecutar cuando cargue todo el HTML