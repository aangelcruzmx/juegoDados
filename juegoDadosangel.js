const dados1 = document.getElementById("dados1");
const dados2 = document.getElementById("dados2");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const puntos1 = document.getElementById("puntos1");
const puntos2 = document.getElementById("puntos2");
const ganador = document.getElementById("ganador");

let puntosJugador1 = 0;
let puntosJugador2 = 0;
let tiradasRestantes = 3;

const lanzarDados = () => {
  let suma1 = 0;
  let suma2 = 0;
  const dadosLanzados1 = parseInt(dados1.value);
  const dadosLanzados2 = parseInt(dados2.value);

  // para comprobar si quedan tiradas

  if (tiradasRestantes === 0) {
    alert("No te quedan tiradas!");
    return;
  }

  // lanza dados jugador 1
  for (let i = 0; i < dadosLanzados1; i++) {
    suma1 += Math.floor(Math.random() * 6) + 1;
  }

  // laza dados jugador 2
  for (let i = 0; i < dadosLanzados2; i++) {
    suma2 += Math.floor(Math.random() * 6) + 1;
  }

  //  resultados
  resultado1.textContent = `Suma: ${suma1}`;
  resultado2.textContent = `Suma: ${suma2}`;

  // imágenes de dados
  const contenedorDados1 = document.querySelector(`#jugador1 .dados`);
  const contenedorDados2 = document.querySelector(`#jugador2 .dados`);

  //limpiar el area
  contenedorDados1.innerHTML = "";
  contenedorDados2.innerHTML = "";

  for (let i = 0; i < dadosLanzados1; i++) {
    const caraDado = Math.floor(Math.random() * 6) + 1;
    const imagenDado = document.createElement("img");
    imagenDado.src = `../../img/juegoDados/juegoAngel/d${caraDado}.png`;
    imagenDado.classList.add("dado");
    contenedorDados1.appendChild(imagenDado);
  }

  for (let i = 0; i < dadosLanzados2; i++) {
    const caraDado = Math.floor(Math.random() * 6) + 1;
    const imagenDado = document.createElement("img");
    imagenDado.src = `../../img/juegoDados/juegoAngel/d${caraDado}.png`;
    imagenDado.classList.add("dado");
    contenedorDados2.appendChild(imagenDado);
  }

  // quien gana la partida
  let ganadorTirada;
  if (suma1 > suma2) {
    ganadorTirada = "Jugador 1";
    puntosJugador1++;
  } else if (suma1 < suma2) {
    ganadorTirada = "Jugador 2";
    puntosJugador2++;
  } else {
    ganadorTirada = "Empate";
  }
  alert(`${ganadorTirada} ha ganado la tirada!`);

  // renueva marcador
  puntos1.textContent = `Jugador 1: ${puntosJugador1} puntos`;
  puntos2.textContent = `Jugador 2: ${puntosJugador2} puntos`;

  tiradasRestantes--;

  // para comprobar ganador del juego
  if (puntosJugador1 === 2) {
    ganador.textContent = "¡Jugador 1 ha ganado la partida!";
    tiradasRestantes = 0; //  detener juego
  } else if (puntosJugador2 === 2) {
    ganador.textContent = "¡Jugador 2 ha ganado la partida!";
    tiradasRestantes = 0; // detener el juego
  }

  // no permite si ya no hay tiradaas
  if (tiradasRestantes === 0) {
    dados1.disabled = true;
    dados2.disabled = true;
  }
};

const botonLanzar = document.getElementById("lanzar");
botonLanzar.addEventListener("click", lanzarDados);
