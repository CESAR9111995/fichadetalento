function consulta(){
   
      // Simular la URL con parámetros que quiero usar
      let contGraf = document.querySelector("#cont-cartera");
let parametrosSimulados = '?noColaborador=1031951&idFuncion=1234';

    const urlParams = new URLSearchParams(parametrosSimulados);
    var noColaborador = urlParams.get('noColaborador');
    var idFuncion = urlParams.get('idFuncion');

    // mostrar el valor de 'noColaborador' en mi página web
    console.log('Valor de "noColaborador":', noColaborador);
    

    if (idFuncion === '9686') { 
       contGraf.classList.remove('contenedor-general');
        contGraf.classList.add('cont-cartera-oculto');
    }
}

consulta();