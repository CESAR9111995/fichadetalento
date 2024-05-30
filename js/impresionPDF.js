
document.addEventListener("DOMContentLoaded", () => {
    console.log('Script de impresión cargado.'); // Agrega este mensaje de consola
    //Escuchamos el click del boton
    const $boton = document.querySelector("#btnCrearPDF");
    
    $boton.addEventListener("click", () => {
        console.log("Diste click");
        const $elementoParaConvertir = document.body;// Aquí puedo elegir cualquier elemento del dom  
        console.log($elementoParaConvertir); // Agrega este mensaje de consola
        html2pdf()
        .set({
            margin: 0.1,
            filename: 'FichaDeTalento.pdf',
            image: {
                type: 'jpeg',
                quality: 8.98
            },
            html2canvas: {
                scale: 3, //A mayor escala, mejores gráficos pero más peso
                letterRendering: true,
            },
            jsPDF: {
                unit: "in",
                format: "a4",
                orientation: 'portrait' // landscape o portrait
            }
        })
        .from($elementoParaConvertir)
        .save()
        .catch(err => console.log(err))
    })
})
