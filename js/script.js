//variables de funcion

// Variables GLOBALES
let pokemonJugador
let pokemonEnemigo
let contadorJugador = 0
let contadorEnemigo = 0
let opcionDePokemones
let opcionDeAtaques

let ataquesPokemon
let ataqueEnemigoLista

let inputCharizard
let inputBlastoise
let inputVenusaur

let botonAtaqueFuego
let botonAtaqueAgua
let botonAtaquePlanta

let indexAtaqueJugador
let indexAtaqueEnemigo

//arreglos
let pokemones = []
let botones = []
let ataqueJugador = []
let ataqueEnemigo = []

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
let venusaur = new Pokemon('Venusaur', 'https://i.postimg.cc/c6ZxVQR3/venu.png', 5)
let blastoise = new Pokemon('Blastoise', 'https://i.postimg.cc/30K3mT81/blas.png', 5)

charizard.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '🌱', id: 'boton-ataque-planta' },
)

blastoise.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🌱', id: 'boton-ataque-planta' },
)

venusaur.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  { nombre: '🌱', id: 'boton-ataque-planta' },
  { nombre: '🌱', id: 'boton-ataque-planta' },
  { nombre: '🌱', id: 'boton-ataque-planta' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
)
pokemones.push(charizard, blastoise, venusaur)


//console.log(pokemones) se ocupa si queremos ver un elemento, en este caso el arreglo


function iniciarJuego() {
  let activarSeccionAtaque = document.getElementById('eligeAtaque')
  activarSeccionAtaque.style.display = 'none'

  let activarSeccionReiniciar = document.getElementById('reiniciar')

  activarSeccionReiniciar.style.display = 'none'

  let activarSeccionMapa = document.getElementById('ver-mapa')
  activarSeccionMapa.style.display = 'none'


  
  //accion para escuchar el boton de elegir pokemon. Primero creamos la variable    y le decimos que encuentre dentro del documento el elemento con determinado ID

  let contenedorTarjetas = document.getElementById('contenedorTarjetas')

  pokemones.forEach((pokemon) => {
    opcionDePokemones = `
    <input type="radio" name=${pokemon.nombre} id=${pokemon.nombre} />
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


  //Aqui debe ir la selección dinámica de poderes

  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarPokemon() {

  let activarSeccionPokemon = document.getElementById('eligePokemon')
  activarSeccionPokemon.style.display = 'none'

  let activarSeccionAtaque = document.getElementById('eligeAtaque') //activamos el elemento hasta que se haya elegido un pokemon
  activarSeccionAtaque.style.display = 'none' //cambiar a flex cuando dejemos de ver el mapa

  let activarSeccionMapa = document.getElementById('ver-mapa')
  activarSeccionMapa.style.display = 'flex'

  let mapa = document.getElementById('mapa')

  let imagenCharizard = new Image()
  imagenCharizard.src = charizard.foto

  let lienzo = mapa.getContext("2d")
  lienzo.drawImage
    (imagenCharizard, 
     5, 
     15, 
     80, 
     80)

  pokemonJugador = document.getElementById('pokemonJugador')

  if (inputCharizard.checked) {
    pokemonJugador.innerHTML = inputCharizard.name //Primeros pasos de manipulación del DOM
    pokemonJugador = inputCharizard.name
  } else if (inputBlastoise.checked) {
    pokemonJugador.innerHTML = inputBlastoise.name //modifica el Span con id pokemonJugador
    pokemonJugador = inputBlastoise.name
  } else if (inputVenusaur.checked) {
    pokemonJugador.innerHTML = inputVenusaur.name
    pokemonJugador = inputVenusaur.name
  } else {
    alert('Error en la elección')
  }

  extraerAtaques(pokemonJugador) //lee los ataques del pokemon elegido

  seleccionarPokemonEnemigo()
}

function extraerAtaques(pokemonJugador) {
  let ataques
  for (let i = 0; i < pokemones.length; i++) {
    if (pokemonJugador === pokemones[i].nombre) {
      ataques = pokemones[i].ataques
    }
  }
  mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
  let contenedorAtaques = document.getElementById('contenedorAtaques')
  ataques.forEach((ataque) => {
    ataquesPokemon = `
     <button id=${ataque.id} class="boton-ataque bAtaque">${ataque.nombre}</button>
     `

    contenedorAtaques.innerHTML += ataquesPokemon
  })

  botonAtaqueFuego = document.getElementById('boton-ataque-fuego')
  botonAtaquePlanta = document.getElementById('boton-ataque-planta')
  botonAtaqueAgua = document.getElementById('boton-ataque-agua')

  botones = document.querySelectorAll('.bAtaque')
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugador.push('FUEGO')
        console.log(ataqueJugador)
        boton.style.background = '#111f58'
      } else if (e.target.textContent === '💧') {
        ataqueJugador.push('AGUA')
        console.log(ataqueJugador)
        boton.style.background = '#111f58'
      } else {
        ataqueJugador.push('PLANTA')
        console.log(ataqueJugador)
        boton.style.background = '#111f58'
      }
      ataqueEnemigoAccion()
    })
  })

}

function seleccionarPokemonEnemigo() {
  let pokemonAleatorio = aleatorio(0, pokemones.length - 1)
  let spanPokemonEnemigo = document.getElementById('spanPokemonEnemigo')
  spanPokemonEnemigo.innerHTML = pokemones[pokemonAleatorio].nombre
  pokemonEnemigo = pokemones[pokemonAleatorio].nombre

  ataqueEnemigoLista = pokemones[pokemonAleatorio].ataques

  secuenciaAtaque()
}

function ataqueEnemigoAccion() {
  let ataqueAleatorio = aleatorio(0, ataqueEnemigoLista.length - 1)

  if (ataqueAleatorio == 1 || ataqueAleatorio == 0) {
    ataqueEnemigo.push('FUEGO')
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 4) {
    ataqueEnemigo.push('AGUA')
  } else if (ataqueAleatorio == 3) {
    ataqueEnemigo.push('PLANTA')
  }
  console.log(ataqueEnemigo)
  iniciarPelea()
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    resultadoCombate()
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador]
  indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function resultadoCombate() {
  let spanVidasJugador = document.getElementById('vidas-jugador')
  let spanVidasEnemigo = document.getElementById('vidas-enemigo')

  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponentes(index, index)
      crearMensajeAtaques('Empate')
    } else if ((ataqueJugador[index] == 'FUEGO' && ataqueEnemigo[index] == 'PLANTA') || (ataqueJugador[index] == 'AGUA' && ataqueEnemigo[index] == 'FUEGO') || (ataqueJugador[index] == 'PLANTA' && ataqueEnemigo[index] == 'AGUA')) {
      indexAmbosOponentes(index, index)
      crearMensajeAtaques('Ganaste')
      contadorJugador++
      spanVidasJugador.innerHTML = contadorJugador
    } else {
      indexAmbosOponentes(index, index)
      crearMensajeAtaques('Perdiste')
      contadorEnemigo++
      spanVidasEnemigo.innerHTML = contadorEnemigo
    }
  }


  contadorVidas()
}

function contadorVidas() {
  if (contadorEnemigo === contadorJugador) {
    crearMensajeFinal('Es un empate')
  } else if (contadorJugador > contadorEnemigo) {
    crearMensajeFinal('El enemigo se ha debilitado. Ganaste la partida')
  } else if (contadorJugador < contadorEnemigo) {
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
  nuevoAtaqueJugador.innerHTML = pokemonJugador + ' atacó con ' + indexAtaqueJugador
  nuevoAtaqueEnemigo.innerHTML = pokemonEnemigo + ' atacó con ' + indexAtaqueEnemigo

  ataquesDelJugador.appendChild(nuevoAtaqueJugador) //integra el elemento creado en la sección elegida por ID
  ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
  let seccionMensajes = document.getElementById('resultado')

  seccionMensajes.innerHTML = resultadoFinal

  botonAtaqueFuego.disabled = true //la propiedad del boton se cambia a disabled
  botonAtaqueAgua.disabled = true
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