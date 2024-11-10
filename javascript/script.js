
document.getElementById("boton").addEventListener("click", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombreHombre").value;
    const peso = document.getElementById("pesoHombre").value;
    const altura = document.getElementById("alturaHombre").value;
    const edad = document.getElementById("edadHombre").value;
    const actividad = document.getElementById("nivelActividad").value;

    if (!nombre || !peso || !altura || !edad || !actividad) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let resultado = ((10 * peso) + (6.25 * altura) - (5 * edad) + 5) * actividad;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML =` ${nombre}, Tu gasto calórico es de ${resultado.toFixed(2)} kcal.`;
});
