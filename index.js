const express = require("express")

const app = express() //revisar para reoslver  get /

app.use(express.static(__dirname)) //requerido para que pueda funcionar el servidor express

const jugadores = []

class Jugador {
  constructor(id) {
    this.id = id
  }
}

app.get('/unirse', function(req, res) {
  const id = `${Math.random()}`

  const jugador = new Jugador(id)
  jugadores.push(jugador)

  res.setHeader("Access-Control-Allow-Origin", "*")

  res.send(id);
})

app.listen(8080, () => {
  console.log("servidor funcionando")
})




