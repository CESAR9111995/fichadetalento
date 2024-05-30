let contBuscador1 = document.getElementById("cont-gen-buscador1");
let botonform1 = document.getElementById("btn-formulario1");
let cerrarform1 = document.getElementById("icono-cerrar1");
/*
let contBuscador2 = document.getElementById("cont-gen-buscador2");
let botonform2 = document.getElementById("btn-formulario2");
let cerrarform2 = document.getElementById("icono-cerrar2");

let contBuscador3 = document.getElementById("cont-gen-buscador3");
let botonform3 = document.getElementById("btn-formulario3");
let cerrarform3 = document.getElementById("icono-cerrar3");
*/


botonform1.addEventListener("click", 
 mostrar = () => {
    contBuscador1.classList.remove('buscador-oculto');
   contBuscador1.classList.add('cont-gen-buscador');

}
);
cerrarform1.addEventListener("click",
    ocultar = () => {   
  contBuscador1.classList.remove('cont-gen-buscador');
   contBuscador1.classList.add('buscador-oculto');
     }
)


botonform2.addEventListener("click", 
 mostrar = () => {
    contBuscador2.classList.remove('buscador-oculto');
   contBuscador2.classList.add('cont-gen-buscador');

}
);
cerrarform2.addEventListener("click",
    ocultar = () => {   
  contBuscador2.classList.remove('cont-gen-buscador');
   contBuscador2.classList.add('buscador-oculto');
     }
)



botonform3.addEventListener("click", 
 mostrar = () => {
    contBuscador3.classList.remove('buscador-oculto');
   contBuscador3.classList.add('cont-gen-buscador');

}
);
cerrarform3.addEventListener("click",
    ocultar = () => {   
  contBuscador3.classList.remove('cont-gen-buscador');
   contBuscador3.classList.add('buscador-oculto');
     }
)