class Persona {
    constructor(nombre, peso, altura, edad, actividad, resultado) {
        this.nombre = nombre;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
        this.actividad = actividad;
        this.resultado = resultado; // Correctamente asignado
    }
}

const personas = [];

document.getElementById("boton").addEventListener("click", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombreHombre").value;
    const peso = parseFloat(document.getElementById("pesoHombre").value);
    const altura = parseFloat(document.getElementById("alturaHombre").value);
    const edad = parseInt(document.getElementById("edadHombre").value);
    const actividad = parseFloat(document.getElementById("nivelActividad").value);

    if (!nombre || !peso || !altura || !edad || !actividad) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let resultado = ((10 * peso) + (6.25 * altura) - (5 * edad) + 5) * actividad;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `${nombre}, Tu gasto calórico es de ${resultado.toFixed(2)} kcal.`;

    let persona = new Persona(nombre, peso, altura, edad, actividad, resultado);
    personas.push(persona);


    const continuar = confirm("¿Deseas agregar otra persona?");
    if (continuar) {
        // Limpiar los campos del formulario para permitir un nuevo ingreso
        document.getElementById("nombreHombre").value = "";
        document.getElementById("pesoHombre").value = "";
        document.getElementById("alturaHombre").value = "";
        document.getElementById("edadHombre").value = "";
        document.getElementById("nivelActividad").value = "";
    } else {
        alert("Ingreso finalizado");
    }
    
    document.getElementById("nombreLista").innerHTML = "Nombre";
    document.getElementById("pesoLista").innerHTML = "Peso";
    document.getElementById("alturaLista").innerHTML = "Altura";
    document.getElementById("edadLista").innerHTML = "Edad";
    document.getElementById("resultadoLista").innerHTML = "Resultado";

    // Mostrar los datos de cada persona en el HTML
    personas.forEach(elm => {
        document.getElementById("nombreLista").innerHTML += `<p class="lista-item">${elm.nombre}</p>`;
        document.getElementById("pesoLista").innerHTML += `<p class="lista-item">${elm.peso} kg</p>`;
        document.getElementById("alturaLista").innerHTML += `<p class="lista-item">${elm.altura} cm</p>`;
        document.getElementById("edadLista").innerHTML += `<p class="lista-item">${elm.edad} años</p>`;
        document.getElementById("resultadoLista").innerHTML += `<p class="lista-item">${elm.resultado.toFixed(2)} kcal</p>`;
    });
});


document.getElementById("reiniciar").addEventListener("click", (event) => {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Resultado"; 
    document.getElementById("nombreLista").innerHTML = "Nombre";
    document.getElementById("pesoLista").innerHTML = "Peso";
    document.getElementById("alturaLista").innerHTML = "Altura";
    document.getElementById("edadLista").innerHTML = "Edad";
    document.getElementById("resultadoLista").innerHTML = "Resultado";
});

   

    
    