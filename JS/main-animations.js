const ViewPortHeight = window.innerHeight; // Toma el alto de la ventana del navegador.
const elements = document.querySelectorAll('.caracteristica'); // Selecciona todos los elementos con la clase "caracteristica".
const productosDestacados = document.querySelectorAll('.productos-destacado-grid'); // Cambio de nombre para evitar confusión.

function checkScroll(){
    elements.forEach((element) => { // Cambio de "elements" a "element" dentro del forEach
        const rect = element.getBoundingClientRect(); // Obtiene las dimensiones del elemento.
        if (rect.top <= ViewPortHeight * 0.9){
            element.classList.add("animate__animated", "animate__fadeInUp"); // Añade las clases de animate.css para animar el elemento.
        } else {
            element.classList.remove("animate__animated", "animate__fadeInUp"); // Quita las clases si sale del viewport.
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();

function checkScrollProductosDestacados(){
    productosDestacados.forEach((producto) => { // Cambio de "productos_destacados" a "producto" dentro del forEach
        const rect = producto.getBoundingClientRect(); // Obtiene las dimensiones del elemento.
        if (rect.top <= ViewPortHeight * 0.9){
            producto.classList.add("animate__animated", "animate__backInLeft"); // Añade las clases de animate.css para animar el elemento.
        } else {
            producto.classList.remove("animate__animated", "animate__backInLeft"); // Quita las clases si sale del viewport.
        }
    });
}

window.addEventListener('scroll', checkScrollProductosDestacados);
checkScrollProductosDestacados();
