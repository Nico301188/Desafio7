// punto 2
document.addEventListener("DOMContentLoaded", function () {
    console.log("El contenido ya se cargo correctamente")
});
var reemplazarBtn = document.getElementById("btn-reemplazar");

// punto 3

function punto3() {
    document.getElementById(`origen`).value =
        "<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>";
}
punto3()
punto4()

function punto4() {
    document.getElementById('origen').addEventListener('input', function () {
        // Obtener todos los elementos <input> y el botón
        var inputs = document.querySelectorAll('input');
        inputs.forEach(function (input) {
            input.disabled = false;
        })
    })
}
// punto 5
// a
document.getElementById("btn-reemplazar").addEventListener('click', function () {
    let contenido = document.getElementById(`origen`).value
    document.getElementById(`destino`).textContent = contenido
})
// b
document.querySelector(".btn-agregar").addEventListener('click', function () {
    let contenido = document.getElementById(`origen`).value
    document.getElementById(`destino`).textContent = document.getElementById(`destino`).textContent + contenido
})
// c
document.querySelectorAll(".btn-agregar")[1].addEventListener('click', function () {
    let contenido = document.getElementById(`origen`).value
    for (let i = 0; i < 5; i++) {
        document.getElementById(`destino`).textContent = document.getElementById(`destino`).textContent + contenido
    }
})
// d
document.querySelectorAll(".btn-agregar")[2].addEventListener('click', function () {
    let contenido = document.getElementById(`origen`).value
    for (let i = 0; i < 10; i++) {
        document.getElementById(`destino`).textContent = document.getElementById(`destino`).textContent + contenido
    }
})
// e
document.querySelectorAll(".btn-agregar")[3].addEventListener('click', function () {

    let contenido = document.getElementById(`origen`).value
    var cantidadVeces = prompt("Ingrese la cantidad de veces a agregar:");
    // Convertir la entrada del usuario a un número
    cantidadVeces = parseInt(cantidadVeces);
    // Validar si la entrada es un número válido y mayor que cero
    if (!isNaN(cantidadVeces) && cantidadVeces > 0) {
        // Agregar la cantidad de veces indicada por el usuario
        for (var i = 0; i < cantidadVeces; i++) {
            document.getElementById(`destino`).textContent = document.getElementById(`destino`).textContent + contenido
        }
    } else {
        alert("Por favor, ingrese un número válido mayor que cero.");
    }
})

// punto 6
// a
document.querySelector(".btn-vaciar").addEventListener('click', function () {
    // let contenido = document.getElementById(`origen`).value
    document.getElementById(`destino`).textContent = ""
})
// b
document.querySelector(".btn-convertir-a-mayusculas").addEventListener('click', function () {
    // let contenido = document.getElementById(`origen`).value
    document.getElementById(`destino`).textContent = document.getElementById(`destino`).textContent.toUpperCase()
    document.querySelector('button[disabled=""]').disabled=false
})
// c
document.querySelector('button').addEventListener('click', function () {
    document.getElementById(`destino`).textContent = document.getElementById(`destino`).textContent.toLowerCase()
})

function punto7() {
    
    var listaItems = document.getElementsByTagName("li");
    
    for (var i = 0; i < listaItems.length; i++) {
        listaItems[i].innerHTML = "[Ok] " + listaItems[i].innerHTML;
    }
}
punto7()