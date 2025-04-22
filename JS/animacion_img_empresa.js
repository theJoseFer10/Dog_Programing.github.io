const ViewPortHeight = window.innerHeight;
const elements = document.querySelectorAll('.imgs-empresa');

function checkScroll(){
    elements .forEach((elements) => {
        const rect = elements.getBoundingClientRect();
        if (rect.top <= ViewPortHeight * 0.7){
            elements.classList.add("animate__animated", "animate__backInRight");
        } else {
            elements.classList.remove("animate__animated", "animate__backInRight");
        }
    });
}

window-addEventListener('scroll', checkScroll);
checkScroll();