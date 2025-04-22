const ViewPortHeight = window.innerHeight;
const elements = document.querySelectorAll('.planes');

function checkScroll(){
    elements .forEach((elements) => {
        const rect = elements.getBoundingClientRect();
        if (rect.top <= ViewPortHeight * 0.9){
            elements.classList.add("animate__animated", "animate__bounceInDown");
        } else {
            elements.classList.remove("animate__animated", "animate__bounceInDown");        }
    });
}

window-addEventListener('scroll', checkScroll);
checkScroll();