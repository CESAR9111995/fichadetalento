let contenedorP1 = document.getElementById("cont-Personajes1");
let contenedorP2 = document.getElementById("cont-Personajes2");
let contenedorP3 = document.getElementById("cont-Personajes3");
let globo1 = document.getElementById("globo1");
let globo2 = document.getElementById("globo2");
let globo3 = document.getElementById("globo3");


contenedorP1.addEventListener("mouseover", 
 mostrar = () => {
    globo1.classList.remove('globo-oculto');
   globo1.classList.add('globo-dialogo1');

}
);

contenedorP1.addEventListener("mouseout",
    ocultar = () => {   
   globo1.classList.remove('globo-dialogo1');
   globo1.classList.add('globo-oculto');
     }
)


contenedorP2.addEventListener("mouseover", 
 mostrar = () => {
    globo2.classList.remove('globo-oculto');
   globo2.classList.add('globo-dialogo2');

}
);

contenedorP2.addEventListener("mouseout",
    ocultar = () => {   
   globo2.classList.remove('globo-dialogo2');
   globo2.classList.add('globo-oculto');
     }
)


contenedorP3.addEventListener("mouseover", 
 mostrar = () => {
    globo3.classList.remove('globo-oculto');
   globo3.classList.add('globo-dialogo3');

}
);

contenedorP3.addEventListener("mouseout",
    ocultar = () => {   
   globo3.classList.remove('globo-dialogo3');
   globo3.classList.add('globo-oculto');
     }
)

