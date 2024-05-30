fetch("../BASEDATOS.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.contenido');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {
            contenidoInfo.innerHTML += `
            <div class="cont-evaluacion">
            <div class="eval-semestral"><h3>${data.evaluacionActual}</h3></div>
            <div class="eval-anual"><h3>${data.evaluacionAnterior}</h3></div>
          </div>
          
          <table class="tabla-datos-grafica">
                   
                    <tr>
                          <th>Evaluación de desempeño</th>
                        <th>Objetivos</th>
                        <th>Comportamientos</th>
                      </tr>          
                        <tr>
                          <td id="actual-desempeno" class="actual"> ${data.valorActualEtiquetas[0]} </td>
                        <td id="actual-objetivos" class="actual"> ${data.valorActualEtiquetas[1]}  </td>
                          <td id="actual-comportamientos" class="actual"> ${data.valorActualEtiquetas[2]} </td>
                        </tr>
                        <tr>
                          <td id="anterior-desempeno" class="anterior">${data.valorAnteriorEtiquetas[0]}</td>
                        <td id="anterior-objetivos" class="anterior">${data.valorAnteriorEtiquetas[1]}</td>
                          <td id="anterior-comportamientos" class="anterior">${data.valorAnteriorEtiquetas[2]} </td>
                        </tr>
                    
                      </table>
            `;
        
            var ctx = document.getElementById("grafica").getContext("2d");
        
            var miGrafico = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: data.evaluacionActual,
                        data: data.valorActual,
                        backgroundColor: ["#0D6543", "#0D6543", "#0D6543"],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }, {
                        label: data.evaluacionAnterior,
                        data: data.valorAnterior,
                        backgroundColor: ["#ED9F1B", "#ED9F1B", "#ED9F1B"],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: {
                            display: true,
                            text: 'Evaluación y Desempeño',
                            color: '#54565A' // Cambia el color del título a azul
                        },
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            ticks: {
                                color: "#54565A",
                            },
                        },
                        y: {
                            beginAtZero: true,
                            ticks: {
                                color: "#54565A",
                            },
                        },
                    },
                    barThickness: 30,
                },
            });
        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });

function mostrarMensajeDeError(mensaje) {

    let contenidoInfo = document.querySelector('.contenedor-general');
    contenidoInfo.innerHTML = `
    <div class="contenedor-grafica">
  
    <div class="titulos-graficas1"><h3>Evaluación de desempeño</h3></div>
    
    <img src="img/iconoerror.png" alt="" class="icono-error">
    <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
    
  </div>	
    `;
}





var ctx = document.getElementById('miGrafica').getContext('2d');

// Datos de la primera gráfica
var dataPrimeraGrafica = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
        label: 'Primer conjunto de datos',
        data: [10, 15, 7, 12, 9],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

// Datos de la segunda gráfica

var dataSegundaGrafica = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [{
        label: 'Segundo conjunto de datos',
        data: [8, 10, 6, 14, 7],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};



// Configuración común para ambas gráficas
var config = {
    type: 'bar',
    data: dataPrimeraGrafica, // Se puede empezar con uno de los conjuntos de datos
    options: {
        // Otras configuraciones como ejes, títulos, leyendas, etc.
    }
};

// Crear la primera gráfica
var primeraGrafica = new Chart(ctx, config);

// Agregar un botón para cambiar entre gráficas
document.getElementById('cambiarGrafica').addEventListener('click', function() {
    // Cambiar entre los conjuntos de datos
    if (primeraGrafica.data === dataPrimeraGrafica) {
        primeraGrafica.data = dataSegundaGrafica;
    } else {
        primeraGrafica.data = dataPrimeraGrafica;
    }
    primeraGrafica.update(); // Actualizar la gráfica con los nuevos datos
});