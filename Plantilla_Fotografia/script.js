const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slider = document.querySelector(".slider");

/** Funciones  */

prev.addEventListener('click', () =>{ slider.scrollLeft -=375})

next.addEventListener('click', () =>{ slider.scrollLeft +=375})

/** **/

/** 2º Funcion **/


    const slider2 = document.querySelector('.slider2');
    const navItems = document.querySelectorAll('.navSlider li');
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 1300; // Mueve el slider por el ancho de la imagen
        slider.style.transform = `translateX(${offset}px)`;
        navItems.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex); // Actualiza la clase activa
        });
    }

    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index; // Actualiza el índice actual
            updateSlider(); // Llama a la función para mover el slider
        });
    });

    

