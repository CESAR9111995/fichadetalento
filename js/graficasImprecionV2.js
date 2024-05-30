//GRÁFICA DE BARRAS EVALUACIÓN DESEMPEÑO

// Realizar una solicitud Fetch para obtener el JSON local

fetch("../BASEDATOS.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.contenido');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
           
    function mostrarMensajeDeError(mensaje) {

        let contenidoInfo2 = document.querySelector('.contenedor-general');
        contenidoInfo2.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas1"><h3>Evaluación de desempeño</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;

        let contenidoInfo3 = document.querySelector('.contenedor-general-comp');
        contenidoInfo3.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas2"><h3>Comportamientos (40%)</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;

        let contenidoInfo4 = document.querySelector('.contenedor-general-grafica-fondo');
        contenidoInfo4.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas3"><h3>Celdas</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;
    }
           
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
                    barThickness: 20,
                },
            });
        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });





//GRÁFICA3 DE COMPORTAMIENTOS (radar)

fetch("../BASECOMPORTAMIENTOS3.json")
    .then(response => response.json())
    .then(data => {
        //let contenidoInfo = document.querySelector('.contenido');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            function mostrarMensajeDeError(mensaje) {

               /* let contenidoInfo = document.querySelector('.contenedor-general-comp');
                contenidoInfo.innerHTML = `
                <div class="contenedor-grafica">
              
                <div class="titulos-graficas2"><h3>Comportamientos (40%)</h3></div>
                
                <img src="img/iconoerror.png" alt="" class="icono-error">
                <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
                
              </div>	
                `;*/

                let contenidoInfo2 = document.querySelector('.contenedor-general');
                contenidoInfo2.innerHTML = `
                <div class="contenedor-grafica">
              
                <div class="titulos-graficas1"><h3>Evaluación de desempeño</h3></div>
                
                <img src="img/iconoerror.png" alt="" class="icono-error">
                <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
                
              </div>	
                `;
        
                let contenidoInfo3 = document.querySelector('.contenedor-general-comp');
                contenidoInfo3.innerHTML = `
                <div class="contenedor-grafica">
              
                <div class="titulos-graficas2"><h3>Comportamientos (40%)</h3></div>
                
                <img src="img/iconoerror.png" alt="" class="icono-error">
                <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
                
              </div>	
                `;
        
                let contenidoInfo4 = document.querySelector('.contenedor-general-grafica-fondo');
                contenidoInfo4.innerHTML = `
                <div class="contenedor-grafica">
              
                <div class="titulos-graficas3"><h3>Celdas</h3></div>
                
                <img src="img/iconoerror.png" alt="" class="icono-error">
                <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
                
              </div>	
                `;

               
            }
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {
           
            var ctx = document.getElementById('radar3').getContext('2d');

            // Obtener el canvas
var canvas = document.getElementById('radar3');

// Ajustar el tamaño
canvas.width = 200; // ancho
canvas.height = 320; // alto

var miGraficoRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: data.labels,
     
        datasets: [{
            label: data.evaluacionActual,
            data: data.valorActual3,
            //backgroundColor: '#4EAC35', // Color de fondo del área
            borderColor: '#ED9F1B', // Color del borde del área
            borderWidth: 2 // Ancho del borde del área
        },
        {label: data.evaluacionAnterior,
        data: data.valorAnterior3,
        //backgroundColor: '#4EAC35', // Color de fondo del área
        borderColor: '#4EAC35', // Color del borde del área
        borderWidth: 2 // Ancho del borde del área
    }, {label: 'Ideal',
    data: data.Ideal,
    //backgroundColor: '#4EAC35', // Color de fondo del área
    borderColor: '#E42313', // Color del borde del área
    borderWidth: 2 // Ancho del borde del área
}
    
    ],
       
    },
    options: {
        responsive: true,
        maintainAspectRatio: false, // Asegura que el gráfico se ajuste al contenedor
        aspectRatio: 2, // Proporción de aspecto personalizada
        scales: {
            r: {
                min: 0,
                max: 5,
                stepSize: 20 // Intervalo de valores en el eje radial
            }
        },
        plugins: {
            subtitle: {
                display: true,
                text: 'Comparación',
                
            }
        },width: 800,
        height: 500
    }
});

        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });

    



//GRÁFICA barras
//GRÁFICA DE BARRAS CELDAS ***************************************************************************************

fetch("../BASEDATOSCELDAS.json")
    .then(response => response.json())
    .then(data => {
       //let contenidoInfo = document.querySelector('.contenido');
       function mostrarMensajeDeError(mensaje) {

       /* let contenidoInfo = document.querySelector('.contenedor-general-grafica-fondo');
        contenidoInfo.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas3"><h3>Celdas</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;*/

        let contenidoInfo2 = document.querySelector('.contenedor-general');
        contenidoInfo2.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas1"><h3>Evaluación de desempeño</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;

        let contenidoInfo3 = document.querySelector('.contenedor-general-comp');
        contenidoInfo3.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas2"><h3>Comportamientos (40%)</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;

        let contenidoInfo4 = document.querySelector('.contenedor-general-grafica-fondo');
        contenidoInfo4.innerHTML = `
        <div class="contenedor-grafica">
      
        <div class="titulos-graficas3"><h3>Celdas</h3></div>
        
        <img src="img/iconoerror.png" alt="" class="icono-error">
        <p class="texto-error">No Tienes registro de <br>evaluaciones de desempeño</p>
        
      </div>	
        `;
    }
        let   contenidoIndicadores = document.querySelector('.cont-indicadores-celdas');

      
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {
            contenidoIndicadores.innerHTML = `
            <div class="cont-actual"><p>${data.evaluacionActual}</p><div class="cuadro-naranja"></div></div>
            <div class="cont-anterior"><p>${data.evaluacionAnterior}</p><div class="cuadro-verde"></div></div>
    `;

            var ctx = document.getElementById("grafica-fondo").getContext("2d");
// Obtener el canvas

// Ajusta el tamaño del contenedor del lienzo
//ctx.canvas.width = 200; // Ancho personalizado
//ctx.canvas.height = 50; // Altura personalizada

            var miGraficoScatter = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: data.empleado,
                        data: data.valorActual,
                        backgroundColor: ['#ED9F1B',"#0D6543",'#ED9F1B','#ED9F1B'],
                        pointRadius: 8
                    }]
                },
                options: {
                    //responsive: true,
                    maintainAspectRatio: false,
                   // aspectRatio: 1.3,
                    plugins: {
                        legend: {
                            display: false // Oculta la leyenda
                        }
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom',
                            min: 1,
							max: 3,
                            display: false, // ocultar eje x
                        },
                        y: {
                            beginAtZero: true,
                            min: 1,
                            max: 3,
                            display: false, // ocultar ejey
                        }
                        
                    }

                }
            });

        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });








//GRÁFICA DE LINEA
//IPN COLABORADOR

fetch("../BASEDATOSIPNCOLABORADOR.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.contenido');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {
           
           
var ctx = document.getElementById("miGraficoLine").getContext("2d");

var miGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1Q22', '2Q22','3Q22','4Q22'],
        datasets: [
           
            {
                label: data.IPNAnterior, 
                 data: data.valorAnterior,
                backgroundColor: ["g#76777A"],
                borderColor: "#76777A",
                borderWidth: 2,
                
            },  {
                label: data.IPNActual,
                data: data.valorActual,
                backgroundColor: ["#0D6543"],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                
            }
            /*
            {
               label: [''],
                data: [{x:'1Q22', y: 0},{x:'2Q22', y: 0},{x:'3Q22', y: 0},{x:'4Q22', y: 0}], //para ghacer el area
                backgroundColor: ["#DDDDDD"],
                borderColor: "#DDDDDD",
                borderWidth: 1,
                fill: 0,
                
            }*/
           
        
       
    ],
      
    },

    options: {
      
        responsive: true,
        maintainAspectRatio: false,
       
        plugins: {
            title: {
                display: true,
                text: 'IPN Colaborador',
                color: '#54565A', // Cambia el color del título a azul
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks:{
                    color: "#54565A"
                }
                
            },
            y: {
                beginAtZero: true,
                ticks:{
                    color: "#54565A"
                }
                
            },
            
        },
        barThickness: 30
    }
}); 

        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });






    





//GRÁFICA DE ESTRELLAS



fetch("../BASEESTRELLAS.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.cont-prom-general');
        let contenidoEncuesta = document.querySelector('.cont-total-encuestas');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {


            contenidoInfo.innerHTML += `
            <p>${data.PromedioGeneral}</p>
            `;
           
            contenidoEncuesta.innerHTML += `
            <p>${data.TotalEncuestas}</p>
            `;


var ctx = document.getElementById("Grafica-line2").getContext("2d");

var miGraficoRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: data.labels,
    
        datasets: [{
            label: data.Real,
            data: data.valorReal,
            pointRadius: 5,
            //backgroundColor: '#4EAC35', // Color de fondo del área
            borderColor: '#ED9F1B', // Color del borde del área
            borderWidth: 2, // Ancho del borde del área
            pointBackgroundColor: '#ED9F1B', // Color de los puntos
            borderColor:'#FFFFFF',
            tension: 0, // Establece la tensión a 0 para evitar líneas entre los puntos
            borderWidth: 1, // Ancho de las líneas
            backgroundColor: '#ffffff'
        },
        {label: data.Ideal,
        data: data.valorIdeal,
        pointRadius: 5,
        //backgroundColor: '#4EAC35', // Color de fondo del área
        borderColor: '#98989A', // Color del borde del área
        borderWidth: 1, // Ancho del borde del área
        pointBackgroundColor: '#98989A', // Color de los puntos
        tension: 0,
        backgroundColor: '#ffffff',
        borderColor:'#FFFFFF'
    }
    
    ],
       
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            r: {
                min: 0,
                max: 5,
                stepSize: 1, // Intervalo de valores en el eje radial
                reverse: true // Invierte la escala radial
            }
        },
        plugins: {
            subtitle: {
                display: true,
                text: 'Estrellas de servicio semana a semana',
            
                
            }
        }
    }
});

         


        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });





//GRÁFICA DE LINEA
//IPN CLIENTE


fetch("../BASEDATOSVENTASTOTALES.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.contenido');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {

            var ctx = document.getElementById('grafica2').getContext('2d');

            var miGraficoLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: data.ventas,
                        data: data.valorVentas,
                        borderColor: '#0D6543',
                        backgroundColor: '#0D6543',
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            
            

        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });




/*
//GRÁFICA DE BARRAS Productividad - Cartera

var ctx = document.getElementById("grafica3").getContext("2d");

var miGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Evaluación de desempeño', 'Objetivos','Comportamientos'],
        datasets: [{
            label: '2021 Anual',
            data: [12, 19, 3, 5, 25, 30],
            backgroundColor: ["gray","blue","red","orange", "gray","red"],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
           
        },{
            label: '2022 Semesttral',
            data: [12, 19, 3, 5, 25, 30],
            backgroundColor: ["red","blue","red","orange", "gray","red"],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
           
        }
    ],
      
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: 'Mi Gráfico',
                color: '#54565A' // Cambia el color del título a azul
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks:{
                    color: "#54565A"
                }
                
            },
            y: {
                beginAtZero: true,
                ticks:{
                    color: "#54565A"
                }
                
            },
            
        },
        barThickness: 30
    }
});
*/



fetch("../BASEDATOSCARTERA.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.contenido');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {

           
var ctx = document.getElementById('grafica3').getContext('2d');

var miGraficoLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: data.labels,
        datasets: [{
            label: data.ventas,
            data: data.valorVentas,
            borderColor: '#0D6543',
            backgroundColor: '#0D6543',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


            

        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });




//Productividad - Posición en su región
fetch("../BASEREGION.json")
.then(response => response.json())
.then(data => {
    let contenidoInfo = document.querySelector('.contenido');

    // Verificar si el JSON está vacío
    if (!data || !data.labels || data.labels.length === 0) {
        mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
    } else {
        var ctx = document.getElementById('graficaPuntos').getContext('2d');

        // Obtener el índice del número de colaborador en el array de labels
        var numeroColaborador = 86935; // Reemplazar esto con el número de colaborador deseado
        var index = data.labels.indexOf(numeroColaborador);

        // Verificar si el número de colaborador existe en el array
        if (index !== -1) {
            // Crear un array de colores con el mismo tamaño que el array de datos
            var backgroundColorArray = data.labels.map(function (_, i) {
                return i === index ? 'red' : '#ED9F1B';
            });

            var miGraficoScatter = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: data.ventas,
                        data: data.valorVentas,
                        backgroundColor: backgroundColorArray,
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'linear',
                            position: 'bottom'
                        },
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    // Solo mostrar "Colaborador: número de colaborador"
                                    return 'Colaborador: ' + data.labels[context.dataIndex];
                                }
                            }
                        }
                    }
                }
            });
        } else {
            // Mostrar un mensaje de error si el número de colaborador no está en el array
            mostrarMensajeDeError('Número de colaborador no encontrado en el JSON.');
        }
    }
})
.catch(error => {
    mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
});






//Productividad - Productividad - Posición en su territorio

fetch("../BASETERRITORIO.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.contenido');

        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {
            var ctx = document.getElementById('graficaPuntos2').getContext('2d');

            // Variable de prueba con un número de colaborador
            var numeroTerritorioPrueba = 72601; // Reemplazar con el número de territorio de prueba

            // Obtener el índice del número de territorio en el array de labels
            var index = data.labels.indexOf(numeroTerritorioPrueba);

            // Verificar si el número de territorio existe en el array
            if (index !== -1) {
                // Crear un array de colores con el mismo tamaño que el array de datos
                var backgroundColorArray = data.labels.map(function (_, i) {
                    return i === index ? 'red' : '#ED9F1B';
                });

                var miGraficoScatter = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: data.ventas,
                            data: data.valorVentas,
                            backgroundColor: backgroundColorArray,
                        }]
                    },
                    options: {
                        scales: {
                            x: {
                                type: 'linear',
                                position: 'bottom'
                            },
                            y: {
                                beginAtZero: true
                            }
                        },
                         plugins: {
                            tooltip: {
                                callbacks: {
                                    label: function (context) {
                                        // Solo mostrar "Colaborador: número de colaborador"
                                        return 'Colaborador: ' + data.labels[context.dataIndex];
                                    }
                                }
                            }
                        }
                    }
                });
            } else {
                // Mostrar un mensaje de error si el número de territorio no está en el array
                mostrarMensajeDeError('Número de territorio no encontrado en el JSON.');
            }
        }
    })
    .catch(error => {
        mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
    });


/*************GRAFICA ACOMPAÑANDOTE**************************************************************** */


// Realizar una solicitud Fetch para obtener el JSON local

fetch("../BASEACOMPAÑANDOTE.json")
    .then(response => response.json())
    .then(data => {
        let contenidoInfo = document.querySelector('.cont-avance-general');
        
        // Verificar si el JSON está vacío
        if (!data || !data.labels || data.labels.length === 0) {
            mostrarMensajeDeError('El JSON está vacío o no contiene datos.');
        } else {

            contenidoInfo.innerHTML += `
            <p>${data.avanceGeneral}%</p>
            `;
           
            var ctx = document.getElementById("grafica-horizontal").getContext("2d");
            // Obtener el canvas
var canvas = document.getElementById('grafica-horizontal');

// Ajustar el tamaño
//canvas.width = 500; // ancho
//canvas.height = 320; // alto

 // Lógica para asignar colores a cada barra según el rango de porcentaje
 var colores = data.valorActual.map(valor => {
    if (valor >= 95) {
        return '#0D6543';  // 95% a 100% - Verde
    } else if (valor >= 85) {
        return '#FFD206'; // 85% a 94.9% - Amarillo
    } else if (valor >= 60) {
        return '#ED9F1B'; // 60% a 84.9% - Naranja
    } else {
        return '#E42313';    // Abajo de 60% - Rojo
    }
});

var miGrafico = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: data.labels,
        datasets: [{
            label: data.evaluacionActual,
            data: data.valorActual,
            backgroundColor: colores,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            barThickness: 8 // Ajusta el grosor de las barras según tus necesidades
        }, ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        
        plugins: {
            legend: {
                display: false // Oculta la leyenda
            },
            title: {
                display: true,
                text: 'Plan de aprendizaje',
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
        barThickness: 20,
        indexAxis: 'y'// hacer horizontal la barra
    },
});

// condicion que verifica si hay 14 o mas labels de la gráfica, modifique su tamaño o lo deje igual, dependiendo el caso
if(miGrafico.data.labels.length >= 14){
     let contenedorGrafHorizontal = document.querySelector(".contenedor-grafica-horizontal");
     let contBarra2 = document.querySelector(".cont-barra2");
 
     contenedorGrafHorizontal.classList.remove('contenedor-grafica-horizontal');
     contenedorGrafHorizontal.classList.add('contenedor-grafica-horizontal2');
 
     contBarra2.classList.remove('cont-barra2');
     contBarra2.classList.add('cont-barra3');
 
 }else{
     contenedorGrafHorizontal.classList.add('contenedor-grafica-horizontal');
     contenedorGrafHorizontal.classList.remove('contenedor-grafica-horizontal2');
 
     contBarra2.classList.add('cont-barra2');
     contBarra2.classList.remove('cont-barra3');
    
 }
 

}
})
.catch(error => {
mostrarMensajeDeError(`Error al obtener los datos: ${error}`);
});

function mostrarMensajeDeError(mensaje) {


}




