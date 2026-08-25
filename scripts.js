let segundos = 0
let minutos = 0
let horas = 0

let intervalo

const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");
const value3 = document.getElementById("value3");

function atualizarCronometro() {
    segundos++;

    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    if (minutos === 60) {
        minutos = 0;
        horas++;
    }

    value1.textContent = horas.toString().padStart(2, "0") + ":";
    value2.textContent = minutos.toString().padStart(2, "0") + ":";
    value3.textContent = segundos.toString().padStart(2, "0");
}

function iniciar() {
    if (intervalo) return;

    intervalo = setInterval(atualizarCronometro, 1000);
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function resetar() {
    clearInterval(intervalo);
    intervalo = null;

    segundos = 0
    minutos = 0
    horas = 0

    value1.textContent = "00:"
    value2.textContent = "00:"
    value3.textContent = "00"
}