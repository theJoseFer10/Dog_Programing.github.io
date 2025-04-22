const ViewPortHeight = window.innerHeight;
const elements = document.querySelectorAll('.producto');

function checkScroll(){
    elements .forEach((elements) => {
        const rect = elements.getBoundingClientRect();
        if (rect.top <= ViewPortHeight * 0.8){
            elements.classList.add("animate__animated", "animate__fadeInUp");
        } else {
            elements.classList.remove("animate__animated", "animate__fadeInUp");
        }
    });
}

window-addEventListener('scroll', checkScroll);
checkScroll();