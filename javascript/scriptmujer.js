document.getElementById("botonMujer").addEventListener("click", (event) => {
    event.preventDefault();
    const nombre = document.getElementById("nombreMujer").value;
    const peso = document.getElementById("pesoMujer").value;
    const altura = document.getElementById("alturaMujer").value;
    const edad = document.getElementById("edadMujer").value;
    const actividad = parseFloat(document.getElementById("nivelActividadMujer").value); // Convertir a número

    if (!nombre || !peso || !altura || !edad || !actividad) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    let resultado = ((10 * peso) + (6.25 * altura) - (5 * edad) - 161 ) * actividad;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `${nombre}, tu gasto calórico es de ${resultado.toFixed(2)} kcal.`;
});