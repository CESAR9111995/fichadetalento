//GRÁFICA DE BARRAS EVALUACIÓN DESEMPEÑO

// Realizar una solicitud Fetch para obtener el JSON local


           
        
            var ctx = document.getElementById("grafica").getContext("2d");

           

        
            var miGrafico = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Evaluación de Desempeño", "Objetivos", "Comportamientos"],
                    datasets: [{
                        label: ["Semestral 2023"],
                        data: [ 3.7,3.6,4],
                        backgroundColor: ["#0D6543", "#0D6543", "#0D6543"],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    }, {
                        label: ["Anual 2022"],
                        data: [ 4.2,2.5,5.8],
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
    




//GRÁFICA3 DE COMPORTAMIENTOS (radar)


           
            var ctx = document.getElementById('radar3').getContext('2d');

            // Obtener el canvas
var canvas = document.getElementById('radar3');

// Ajustar el tamaño
canvas.width = 200; // ancho
canvas.height = 320; // alto

var miGraficoRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ["Pasión por el cliente", "Confianza y respeto","Mejora continua", "Ejecución impecable","Trabajo en equipo"],
        datasets: [{
            label: "Semestral 2023",
            data: [ 5,5,5,5,5],
            //backgroundColor: '#4EAC35', // Color de fondo del área
            borderColor: '#ED9F1B', // Color del borde del área
            borderWidth: 2 // Ancho del borde del área
        },
        {label: "Anual 2022",
        data: [ 4,3.2,3.2,4,4],
        //backgroundColor: '#4EAC35', // Color de fondo del área
        borderColor: '#4EAC35', // Color del borde del área
        borderWidth: 2 // Ancho del borde del área
    }, {label: 'Ideal',
    data: [-1.5, -1.5, -1.7, -1.3, -1.2],
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

    
    



//GRÁFICA barras
//GRÁFICA DE BARRAS CELDAS ***************************************************************************************


           

            var ctx = document.getElementById("grafica-fondo").getContext("2d");
// Obtener el canvas
var canvas = document.getElementById('grafica-fondo');

// Ajustar el tamaño
canvas.width = 500; // ancho
canvas.height = 320; // alto

            var miGraficoScatter = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        label: ["Evaluacion de desempeño",
                        "Objetivos",
                        "Comportamientos"],
                        data: [ { "x": 1, "y": 1 },
                        { "x": 2.5, "y": 2.5 },
                        { "x": 2, "y": 2 },
                        { "x":3, "y": 3 }],
                        backgroundColor: ['#ED9F1B',"#0D6543",'#ED9F1B','#ED9F1B'],
                        pointRadius: 8
                    }]
                },
                options: {
                  
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

    







//GRÁFICA DE LINEA
//IPN COLABORADOR


           
           
var ctx = document.getElementById("miGraficoLine").getContext("2d");

var miGrafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1Q22', '2Q22','3Q22','4Q22'],
        datasets: [
           
            {
                label: "2022", 
                 data: [ "79.00","59.00","91.00","94.00"],
                backgroundColor: ["g#76777A"],
                borderColor: "#76777A",
                borderWidth: 2,
                
            },  {
                label: "2023",
                data:[ "93.00","89.00","39.00","50.00"],
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

    




    





//GRÁFICA DE ESTRELLAS







var ctx = document.getElementById("Grafica-line2").getContext("2d");

var miGraficoRadar = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: [ "1","2","3","4","5","6","7","8","9","10", "11","12","13","14","15","16","17","18","19","20", "21","22","23","24","25","26","27","28","29","30", "31","32","33","34","35","36","37","38","39","40", "41","42","43","44","45","46","47","48","49","50","51","52"],
    
        datasets: [{
            label: "Real",
            data: [ 4,4,4,1,4,4,4,4,2,4,4,4,4,2,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,0,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
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
        {label: "Ideal",
        data: [ 4,4,1,4,4,4,4,2,4,4,4,4,4,4,4,4,4,4,4,4,4,0,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,2,4,4,4],
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

         


  




//GRÁFICA DE LINEA
//VENTAS TOTALES




            var ctx = document.getElementById('grafica2').getContext('2d');

            var miGraficoLine = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ["28", "29", "30", "31", "33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52"],
                    datasets: [{
                        label: "Ventas",
                        data: [600, 1000, 800, 700, 700,1200,800, 900, 880, 850, 700,720,800, 700, 600, 500, 400,700,1400, 1000, 2500, 3200, 2200,900],
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




           
var ctx = document.getElementById('grafica3').getContext('2d');

var miGraficoLine = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["28", "29", "30", "31", "33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52"],
        datasets: [{
            label: "Ventas",
            data: [86000000,86000000, 84000000, 85000000, 86000000,87000000,88000000, 87000000, 89000000, 89000000, 89000000,88000000,88000000, 88000000,89000000, 88000000, 65000000,66000000,67000000, 68000000, 68000000, 68000000, 68000000,69000000],
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


            

  
//GRAFICA REGION



            var ctx = document.getElementById('graficaPuntos').getContext('2d');

            // Obtener el índice del número de colaborador en el array de labels
            var numeroColaborador = 86935; // Reemplazar esto con el número de colaborador deseado
            var index = [
                42368,
                65985,
                72601,
                86928,
                86935,
                143402,
                154924,
                162377,
                165238,
                166535,
                168077,
                169223,
                181570,
                188715,
                206400,
                226485,
                226698,
                231587,
                232186,
                242707,
                248435,
                250325,
                252663,
                263021,
                265997,
                306600,
                311333,
                312248,
                324770,
                326415,
                333155,
                335662,
                341192,
                345371,
                350671,
                352628,
                353876,
                366512,
                516907,
                525655,
                540323,
                570262,
                583268,
                588450,
                596017,
                615807,
                620354,
                620486,
                626515,
                636322,
                638723,
                641433,
                644336,
                650291,
                655559,
                658441,
                670663,
                679508,
                680082,
                692728,
                694265,
                694757,
                695206,
                705275,
                707624,
                708566,
                712074,
                713147,
                715850,
                733753,
                750387,
                756873,
                757655,
                757895,
                758135,
                766287,
                766372,
                773941,
                836367,
                837606,
                840302,
                846663,
                886222,
                886979,
                890469,
                891833,
                893147,
                907192,
                914690,
                921784,
                932235,
                934558,
                942462,
                946727,
                946762,
                957433,
                959361,
                997617
            ].indexOf(numeroColaborador);

            // Verificar si el número de colaborador existe en el array
            if (index !== -1) {
                // Crear un array de colores con el mismo tamaño que el array de datos
                var backgroundColorArray = [
                    42368,
                    65985,
                    72601,
                    86928,
                    86935,
                    143402,
                    154924,
                    162377,
                    165238,
                    166535,
                    168077,
                    169223,
                    181570,
                    188715,
                    206400,
                    226485,
                    226698,
                    231587,
                    232186,
                    242707,
                    248435,
                    250325,
                    252663,
                    263021,
                    265997,
                    306600,
                    311333,
                    312248,
                    324770,
                    326415,
                    333155,
                    335662,
                    341192,
                    345371,
                    350671,
                    352628,
                    353876,
                    366512,
                    516907,
                    525655,
                    540323,
                    570262,
                    583268,
                    588450,
                    596017,
                    615807,
                    620354,
                    620486,
                    626515,
                    636322,
                    638723,
                    641433,
                    644336,
                    650291,
                    655559,
                    658441,
                    670663,
                    679508,
                    680082,
                    692728,
                    694265,
                    694757,
                    695206,
                    705275,
                    707624,
                    708566,
                    712074,
                    713147,
                    715850,
                    733753,
                    750387,
                    756873,
                    757655,
                    757895,
                    758135,
                    766287,
                    766372,
                    773941,
                    836367,
                    837606,
                    840302,
                    846663,
                    886222,
                    886979,
                    890469,
                    891833,
                    893147,
                    907192,
                    914690,
                    921784,
                    932235,
                    934558,
                    942462,
                    946727,
                    946762,
                    957433,
                    959361,
                    997617
                ].map(function (_, i) {
                    return i === index ? 'red' : '#ED9F1B';
                });

                var miGraficoScatter = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: "Metas",
                            data: [[
                                0.79,
                                0.7901298701298701
                            ],
                            [
                                0.9,
                                0.968871158392435
                            ],
                            [
                                0.923,
                                0.9508530106257379
                            ],
                            [
                                1.073,
                                0.9878831168831168
                            ],
                            [
                                0.948,
                                0.9889760638297872
                            ],
                            [
                                0.885,
                                0.9110551948051948
                            ],
                            [
                                1.023,
                                0.9328689492325856
                            ],
                            [
                                0.964,
                                0.9999911452184179
                            ],
                            [
                                0.937,
                                1.0144716646989373
                            ],
                            [
                                0.912,
                                0.9060204081632653
                            ],
                            [
                                0.845,
                                0.9681323529411765
                            ],
                            [
                                0.855,
                                0.9705668449197861
                            ],
                            [
                                0.761,
                                0.9129837662337663
                            ],
                            [
                                1.054,
                                0.9730519480519481
                            ],
                            [
                                0.936,
                                0.9421403743315508
                            ],
                            [
                                0.964,
                                1.0649503437738732
                            ],
                            [
                                1.09,
                                1.000775401069519
                            ],
                            [
                                1.028,
                                0.9448636363636365
                            ],
                            [
                                0.878,
                                0.8968831168831168
                            ],
                            [
                                1.04,
                                1.0084090909090908
                            ],
                            [
                                1.043,
                                1.0142916174734358
                            ],
                            [
                                0.902,
                                0.9305032467532467
                            ],
                            [
                                0.844,
                                0.9733677685950413
                            ],
                            [
                                0.931,
                                0.9379025974025974
                            ],
                            [
                                0.969,
                                1.0084675324675325
                            ],
                            [
                                0.875,
                                0.9593270365997639
                            ],
                            [
                                0.994,
                                0.9110613952020201
                            ],
                            [
                                0.763,
                                1.0117296340023614
                            ],
                            [
                                0.989,
                                1.055057142857143
                            ],
                            [
                                0.885,
                                0.9431345926800473
                            ],
                            [
                                1.479,
                                1.3793238095238094
                            ],
                            [
                                0.824,
                                0.9820932009167304
                            ],
                            [
                                0.902,
                                0.975474025974026
                            ],
                            [
                                0.912,
                                0.9803069657615112
                            ],
                            [
                                1.085,
                                0.982706611570248
                            ],
                            [
                                0.969,
                                1.0301720779220778
                            ],
                            [
                                1.085,
                                1.0497391304347825
                            ],
                            [
                                0.915,
                                0.8844558823529411
                            ],
                            [
                                0.849,
                                0.9473597678916827
                            ],
                            [
                                1.122,
                                1.0061168831168832
                            ],
                            [
                                1.012,
                                0.9661687184343435
                            ],
                            [
                                0.844,
                                0.9747166469893743
                            ],
                            [
                                1.032,
                                1.0397402597402596
                            ],
                            [
                                1.09,
                                1.0474427244582043
                            ],
                            [
                                1.045,
                                0.9822566844919786
                            ],
                            [
                                0.975,
                                0.9791016042780748
                            ],
                            [
                                0.975,
                                0.9119819004524887
                            ],
                            [
                                1.08,
                                1.0091558441558441
                            ],
                            [
                                0.853,
                                0.9870374331550802
                            ],
                            [
                                1.13,
                                1.0105708556149733
                            ],
                            [
                                0.873,
                                0.9621162927981111
                            ],
                            [
                                1.085,
                                1.0338931523022432
                            ],
                            [
                                1.085,
                                0.956835891381346
                            ],
                            [
                                1.035,
                                0.9536428571428571
                            ],
                            [
                                0.966,
                                0.9315348288075561
                            ],
                            [
                                0.772,
                                0.88670333655706
                            ],
                            [
                                0.905,
                                0.983379574970484
                            ],
                            [
                                0.961,
                                0.9795140232108317
                            ],
                            [
                                0.925,
                                0.9129411764705883
                            ],
                            [
                                0.956,
                                0.9541428916827853
                            ],
                            [
                                0.797,
                                0.9602272727272727
                            ],
                            [
                                0.918,
                                0.91674064171123
                            ],
                            [
                                1.015,
                                0.9444285714285714
                            ],
                            [
                                0.797,
                                0.90336186540732
                            ],
                            [
                                0.932,
                                1.0063903743315508
                            ],
                            [
                                1.117,
                                1.0537824675324676
                            ],
                            [
                                0.961,
                                0.9857724854932302
                            ],
                            [
                                1.021,
                                0.9565
                            ],
                            [
                                0.805,
                                0.9559675324675324
                            ],
                            [
                                0.912,
                                0.9569598583234947
                            ],
                            [
                                0.914,
                                0.9025227272727273
                            ],
                            [
                                0.965,
                                1.0407359307359307
                            ],
                            [
                                0.991,
                                0.901461038961039
                            ],
                            [
                                0.853,
                                0.9435347593582888
                            ],
                            [
                                1.391,
                                1.432939393939394
                            ],
                            [
                                0.939,
                                1.0116233766233766
                            ],
                            [
                                1.024,
                                0.965889037433155
                            ],
                            [
                                0.912,
                                0.9511525974025974
                            ],
                            [
                                1.057,
                                0.9978705882352941
                            ],
                            [
                                1.08,
                                0.9825721925133689
                            ],
                            [
                                0.989,
                                0.9896038961038961
                            ],
                            [
                                0.893,
                                0.9708202323991798
                            ],
                            [
                                1.093,
                                1.0243961038961038
                            ],
                            [
                                0.97,
                                1.0206903622693095
                            ],
                            [
                                0.961,
                                0.9374025974025973
                            ],
                            [
                                0.966,
                                0.9993860684769775
                            ],
                            [
                                0.797,
                                0.9379545454545455
                            ],
                            [
                                0.912,
                                0.9497197539302802
                            ],
                            [
                                0.797,
                                0.8649645808736718
                            ],
                            [
                                0.902,
                                0.9888603896103896
                            ],
                            [
                                0.954,
                                1.0219741295938105
                            ],
                            [
                                1.085,
                                0.9591341991341991
                            ],
                            [
                                1.021,
                                1.016031746031746
                            ],
                            [
                                1.104,
                                1.0373725490196077
                            ],
                            [
                                0.989,
                                1.010857142857143
                            ],
                            [
                                0.925,
                                1.0139403778040141
                            ],
                            [
                                0.909,
                                0.9650422077922078
                            ],
                            [
                                1.075,
                                1.0283117647058824
                            ]
                        ],
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
    





//Productividad - Productividad - Posición en su territorio


            var ctx = document.getElementById('graficaPuntos2').getContext('2d');

            // Variable de prueba con un número de colaborador
            var numeroTerritorioPrueba = 72601; // Reemplazar con el número de territorio de prueba

            // Obtener el índice del número de territorio en el array de labels
            var index = [
                42368,
                65985,
                72601,
                86928,
                86935,
                143402,
                154924,
                162377,
                165238,
                166535,
                168077,
                169223,
                181570,
                188715,
                206400,
                226485,
                226698,
                231587,
                232186,
                242707,
                248435,
                250325,
                252663,
                263021,
                265997,
                306600,
                311333,
                312248,
                324770,
                326415,
                333155,
                335662,
                341192,
                345371,
                350671,
                352628,
                353876,
                366512,
                516907,
                525655,
                540323,
                570262,
                583268,
                588450,
                596017,
                615807,
                620354,
                620486,
                626515,
                636322,
                638723,
                641433,
                644336,
                650291,
                655559,
                658441,
                670663,
                679508,
                680082,
                692728,
                694265,
                694757,
                695206,
                705275,
                707624,
                708566,
                712074,
                713147,
                715850,
                733753,
                750387,
                756873,
                757655,
                757895,
                758135,
                766287,
                766372,
                773941,
                836367,
                837606,
                840302,
                846663,
                886222,
                886979,
                890469,
                891833,
                893147,
                907192,
                914690,
                921784,
                932235,
                934558,
                942462,
                946727,
                946762,
                957433,
                959361,
                997617
            ].indexOf(numeroTerritorioPrueba);

            // Verificar si el número de territorio existe en el array
            if (index !== -1) {
                // Crear un array de colores con el mismo tamaño que el array de datos
                var backgroundColorArray = [
                    42368,
                    65985,
                    72601,
                    86928,
                    86935,
                    143402,
                    154924,
                    162377,
                    165238,
                    166535,
                    168077,
                    169223,
                    181570,
                    188715,
                    206400,
                    226485,
                    226698,
                    231587,
                    232186,
                    242707,
                    248435,
                    250325,
                    252663,
                    263021,
                    265997,
                    306600,
                    311333,
                    312248,
                    324770,
                    326415,
                    333155,
                    335662,
                    341192,
                    345371,
                    350671,
                    352628,
                    353876,
                    366512,
                    516907,
                    525655,
                    540323,
                    570262,
                    583268,
                    588450,
                    596017,
                    615807,
                    620354,
                    620486,
                    626515,
                    636322,
                    638723,
                    641433,
                    644336,
                    650291,
                    655559,
                    658441,
                    670663,
                    679508,
                    680082,
                    692728,
                    694265,
                    694757,
                    695206,
                    705275,
                    707624,
                    708566,
                    712074,
                    713147,
                    715850,
                    733753,
                    750387,
                    756873,
                    757655,
                    757895,
                    758135,
                    766287,
                    766372,
                    773941,
                    836367,
                    837606,
                    840302,
                    846663,
                    886222,
                    886979,
                    890469,
                    891833,
                    893147,
                    907192,
                    914690,
                    921784,
                    932235,
                    934558,
                    942462,
                    946727,
                    946762,
                    957433,
                    959361,
                    997617
                ].map(function (_, i) {
                    return i === index ? 'red' : '#ED9F1B';
                });

                var miGraficoScatter = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: "Metas",
                            data: [
        [
            0.79,
            0.7901298701298701
        ],
        [
            0.9,
            0.968871158392435
        ],
        [
            0.923,
            0.9508530106257379
        ],
        [
            1.073,
            0.9878831168831168
        ],
        [
            0.948,
            0.9889760638297872
        ],
        [
            0.885,
            0.9110551948051948
        ],
        [
            1.023,
            0.9328689492325856
        ],
        [
            0.964,
            0.9999911452184179
        ],
        [
            0.937,
            1.0144716646989373
        ],
        [
            0.912,
            0.9060204081632653
        ],
        [
            0.845,
            0.9681323529411765
        ],
        [
            0.855,
            0.9705668449197861
        ],
        [
            0.761,
            0.9129837662337663
        ],
        [
            1.054,
            0.9730519480519481
        ],
        [
            0.936,
            0.9421403743315508
        ],
        [
            0.964,
            1.0649503437738732
        ],
        [
            1.09,
            1.000775401069519
        ],
        [
            1.028,
            0.9448636363636365
        ],
        [
            0.878,
            0.8968831168831168
        ],
        [
            1.04,
            1.0084090909090908
        ],
        [
            1.043,
            1.0142916174734358
        ],
        [
            0.902,
            0.9305032467532467
        ],
        [
            0.844,
            0.9733677685950413
        ],
        [
            0.931,
            0.9379025974025974
        ],
        [
            0.969,
            1.0084675324675325
        ],
        [
            0.875,
            0.9593270365997639
        ],
        [
            0.994,
            0.9110613952020201
        ],
        [
            0.763,
            1.0117296340023614
        ],
        [
            0.989,
            1.055057142857143
        ],
        [
            0.885,
            0.9431345926800473
        ],
        [
            1.479,
            1.3793238095238094
        ],
        [
            0.824,
            0.9820932009167304
        ],
        [
            0.902,
            0.975474025974026
        ],
        [
            0.912,
            0.9803069657615112
        ],
        [
            1.085,
            0.982706611570248
        ],
        [
            0.969,
            1.0301720779220778
        ],
        [
            1.085,
            1.0497391304347825
        ],
        [
            0.915,
            0.8844558823529411
        ],
        [
            0.849,
            0.9473597678916827
        ],
        [
            1.122,
            1.0061168831168832
        ],
        [
            1.012,
            0.9661687184343435
        ],
        [
            0.844,
            0.9747166469893743
        ],
        [
            1.032,
            1.0397402597402596
        ],
        [
            1.09,
            1.0474427244582043
        ],
        [
            1.045,
            0.9822566844919786
        ],
        [
            0.975,
            0.9791016042780748
        ],
        [
            0.975,
            0.9119819004524887
        ],
        [
            1.08,
            1.0091558441558441
        ],
        [
            0.853,
            0.9870374331550802
        ],
        [
            1.13,
            1.0105708556149733
        ],
        [
            0.873,
            0.9621162927981111
        ],
        [
            1.085,
            1.0338931523022432
        ],
        [
            1.085,
            0.956835891381346
        ],
        [
            1.035,
            0.9536428571428571
        ],
        [
            0.966,
            0.9315348288075561
        ],
        [
            0.772,
            0.88670333655706
        ],
        [
            0.905,
            0.983379574970484
        ],
        [
            0.961,
            0.9795140232108317
        ],
        [
            0.925,
            0.9129411764705883
        ],
        [
            0.956,
            0.9541428916827853
        ],
        [
            0.797,
            0.9602272727272727
        ],
        [
            0.918,
            0.91674064171123
        ],
        [
            1.015,
            0.9444285714285714
        ],
        [
            0.797,
            0.90336186540732
        ],
        [
            0.932,
            1.0063903743315508
        ],
        [
            1.117,
            1.0537824675324676
        ],
        [
            0.961,
            0.9857724854932302
        ],
        [
            1.021,
            0.9565
        ],
        [
            0.805,
            0.9559675324675324
        ],
        [
            0.912,
            0.9569598583234947
        ],
        [
            0.914,
            0.9025227272727273
        ],
        [
            0.965,
            1.0407359307359307
        ],
        [
            0.991,
            0.901461038961039
        ],
        [
            0.853,
            0.9435347593582888
        ],
        [
            1.391,
            1.432939393939394
        ],
        [
            0.939,
            1.0116233766233766
        ],
        [
            1.024,
            0.965889037433155
        ],
        [
            0.912,
            0.9511525974025974
        ],
        [
            1.057,
            0.9978705882352941
        ],
        [
            1.08,
            0.9825721925133689
        ],
        [
            0.989,
            0.9896038961038961
        ],
        [
            0.893,
            0.9708202323991798
        ],
        [
            1.093,
            1.0243961038961038
        ],
        [
            0.97,
            1.0206903622693095
        ],
        [
            0.961,
            0.9374025974025973
        ],
        [
            0.966,
            0.9993860684769775
        ],
        [
            0.797,
            0.9379545454545455
        ],
        [
            0.912,
            0.9497197539302802
        ],
        [
            0.797,
            0.8649645808736718
        ],
        [
            0.902,
            0.9888603896103896
        ],
        [
            0.954,
            1.0219741295938105
        ],
        [
            1.085,
            0.9591341991341991
        ],
        [
            1.021,
            1.016031746031746
        ],
        [
            1.104,
            1.0373725490196077
        ],
        [
            0.989,
            1.010857142857143
        ],
        [
            0.925,
            1.0139403778040141
        ],
        [
            0.909,
            0.9650422077922078
        ],
        [
            1.075,
            1.0283117647058824
        ]
    ],
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
    


/*************GRAFICA ACOMPAÑANDOTE**************************************************************** */


// Realizar una solicitud Fetch para obtener el JSON local


           
            var ctx = document.getElementById("grafica-horizontal").getContext("2d");
            // Obtener el canvas
var canvas = document.getElementById('grafica-horizontal');

// Ajustar el tamaño
canvas.width = 500; // ancho
canvas.height = 320; // alto

 // Lógica para asignar colores a cada barra según el rango de porcentaje
 var colores = [
    100,
    100,
    100,
    96,
    92,
    92
    
].map(valor => {
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
        labels: [
            "Captación Banco Azteca",
            "Experto",
            "Academia para crear momentos felices",
            "Básico",
            "Intermedio",
            "SAC"
        ],
        datasets: [{
            
            data: [
                100,
                100,
                100,
                96,
                92,
                92
                
            ],
            backgroundColor: colores,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
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
        barThickness: 30,
        indexAxis: 'y'// hacer horizontal la barra
    },
});

// condicion que verifica si hay 14 o mas labels de la gráfica, modifique su tamaño o lo deje igual, dependiendo el caso
if(miGrafico.labels.length >= 14){
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
 










