//variables de funcion

// Variables GLOBALES
let pokemonJugador
let pokemonJugadorObjeto
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
  constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) { //se puede asignar un valor inicial y lo toma en caso de que no se asigne otro mas adelante
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
    this.ancho = 80
    this.alto = 80
    this.x = aleatorio(0, 800 - this.ancho) // se crean numeros aleatorios desde 0 hasta el ancho del mapa menos el ancho del pokemon
    this.y = aleatorio(0, 600 - this.alto)
    this.mapaFoto = new Image()
    this.mapaFoto.src = fotoMapa
    this.velocidadX = 0
    this.velocidadY = 0
  }

  pintarPokemon() { //llamamos a un metodo, que es una funcion dentro de una clase
    let lienzo = mapa.getContext("2d")
    lienzo.drawImage(
      this.mapaFoto,
      this.x,
      this.y,
      this.ancho,
      this.alto
    )
  }
}

let charizard = new Pokemon('Charizard', 'https://i.postimg.cc/8sHpDj40/char.png', 5, 'https://i.postimg.cc/Th86HxzF/char-avatar.png')
let venusaur = new Pokemon('Venusaur', 'https://i.postimg.cc/c6ZxVQR3/venu.png', 5, 'https://i.postimg.cc/3N0hBNc2/venu-avatar.png')
let blastoise = new Pokemon('Blastoise', 'https://i.postimg.cc/30K3mT81/blas.png', 5, 'https://i.postimg.cc/xCCnXtGx/blas-avatar.png')

let charizardEnemigo = new Pokemon('Charizard', 'https://i.postimg.cc/8sHpDj40/char.png', 5, 'https://i.postimg.cc/Th86HxzF/char-avatar.png', 600, 145)
let venusaurEnemigo = new Pokemon('Venusaur', 'https://i.postimg.cc/c6ZxVQR3/venu.png', 5, 'https://i.postimg.cc/3N0hBNc2/venu-avatar.png', 345, 500)
let blastoiseEnemigo = new Pokemon('Blastoise', 'https://i.postimg.cc/30K3mT81/blas.png', 5, 'https://i.postimg.cc/xCCnXtGx/blas-avatar.png', 109, 305)

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

charizardEnemigo.ataques.push( //insertamos objetos literales en el atributo ataques del objeto charizard
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '🌱', id: 'boton-ataque-planta' },
)

blastoiseEnemigo.ataques.push( //insertamos objetos literales en el atributo ataques del objeto blastoise
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '💧', id: 'boton-ataque-agua' },
  { nombre: '🔥', id: 'boton-ataque-fuego' },
  { nombre: '🌱', id: 'boton-ataque-planta' },
)

venusaurEnemigo.ataques.push( //insertamos objetos literales en el atributo ataques del objeto venusaur
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

  let mapa = document.getElementById('mapa')

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

  let activarSeccionMapa = document.getElementById('ver-mapa')
  activarSeccionMapa.style.display = 'flex'
  iniciarMapa() //iniciamos el mapa después de que se seleccione la mascota

  extraerAtaques(pokemonJugador) //lee los ataques del pokemon elegido
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

function seleccionarPokemonEnemigo(enemigo) {
  //let pokemonAleatorio = aleatorio(0, pokemones.length - 1)
  let spanPokemonEnemigo = document.getElementById('spanPokemonEnemigo')
  spanPokemonEnemigo.innerHTML = enemigo.nombre
  pokemonEnemigo = enemigo.nombre

  ataqueEnemigoLista = enemigo.ataques

  secuenciaAtaque()
}

function ataqueEnemigoAccion() {
  console.log ("ataque enemigo", ataqueEnemigo)
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

function pintarPokemon() {
  let mapa = document.getElementById('mapa')
  let lienzo = mapa.getContext("2d")

  let mapaBackground = new Image()
  mapaBackground.src = 'https://i.postimg.cc/Xqgv0QSj/map.png'

  pokemonJugadorObjeto.x = pokemonJugadorObjeto.x + pokemonJugadorObjeto.velocidadX
  pokemonJugadorObjeto.y = pokemonJugadorObjeto.y + pokemonJugadorObjeto.velocidadY

  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
    mapaBackground,
    0,
    0,
    mapa.width,
    mapa.height
  )
  pokemonJugadorObjeto.pintarPokemon()
  charizardEnemigo.pintarPokemon()
  blastoiseEnemigo.pintarPokemon()
  venusaurEnemigo.pintarPokemon()

  if (pokemonJugadorObjeto.velocidadX != 0 || pokemonJugadorObjeto.velocidadY != 0) {
    revisarColision(charizardEnemigo)
    revisarColision(blastoiseEnemigo)
    revisarColision(venusaurEnemigo)
  }
}

function moverPokemon() {
  pokemonJugadorObjeto.x = pokemonJugadorObjeto.x + 5
  pintarPokemon()
}

function moverDerecha() {
  pokemonJugadorObjeto.velocidadX = 5
}

function moverIzquierda() {
  pokemonJugadorObjeto.velocidadX = - 5

}

function moverAbajo() {
  pokemonJugadorObjeto.velocidadY = + 5
}

function moverArriba() {
  pokemonJugadorObjeto.velocidadY = - 5
}

function detenerMovimiento() {
  pokemonJugadorObjeto.velocidadX = 0
  pokemonJugadorObjeto.velocidadY = 0
}

function controlConTeclado(event) { //como se utiliza con eventlistener, se debe poner el valor event
  switch (event.key) {
    case 'ArrowUp':
      moverArriba()
      break
    case 'ArrowDown':
      moverAbajo()
      break
    case 'ArrowLeft':
      moverIzquierda()
      break
    case 'ArrowRight':
      moverDerecha()
      break
    default:
      break
  }
}

function iniciarMapa() {

  pokemonJugadorObjeto = obtenerImagenPokemon(pokemonJugador)

  let alturaQueBuscamos
  let anchoDelMapa = window.innerWidth - 20

  alturaQueBuscamos = anchoDelMapa * 600 / 800

  mapa.width = anchoDelMapa
  mapa.height = alturaQueBuscamos

  let intervalo = setInterval(pintarPokemon, 50)

  window.addEventListener('keydown', controlConTeclado)
  window.addEventListener('keyup', detenerMovimiento)
}

function obtenerImagenPokemon() {
  for (let i = 0; i < pokemones.length; i++) {
    if (pokemonJugador === pokemones[i].nombre) {
      return pokemones[i]
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y
  const abajoEnemigo = enemigo.y + enemigo.alto
  const derechaEnemigo = enemigo.x + enemigo.ancho
  const izquierdaEnemigo = enemigo.x

  const arribaPokemon = pokemonJugadorObjeto.y
  const abajoPokemon = pokemonJugadorObjeto.y + pokemonJugadorObjeto.alto
  const derechaPokemon = pokemonJugadorObjeto.x + pokemonJugadorObjeto.ancho
  const izquierdaPokemon = pokemonJugadorObjeto.x

  if (
    abajoPokemon < arribaEnemigo ||
    arribaPokemon > abajoEnemigo ||
    derechaPokemon < izquierdaEnemigo ||
    izquierdaPokemon > derechaEnemigo
  ) {
    return //return vacio porque no se cumple la condicion

  } else {
    detenerMovimiento()
    console.log("se detecto una colisión")

    let intervalo = setInterval(pintarPokemon, 50)
    clearInterval(intervalo) //Detenemos las colisiones y el intervalo del movimiento

    let activarSeccionAtaque = document.getElementById('eligeAtaque') //activamos el elemento hasta que se haya elegido un pokemon
    activarSeccionAtaque.style.display = 'flex'

    let activarSeccionMapa = document.getElementById('ver-mapa')
    activarSeccionMapa.style.display = 'none'

    seleccionarPokemonEnemigo(enemigo)
    //alert(enemigo.nombre + " salvaje ha aparecido")
  }
}



window.addEventListener('load', iniciarJuego) // permite cargar el código a ejecutar cuando cargue todo el HTML