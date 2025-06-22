// menusito hamburguesa
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const linksHeader = document.getElementById("links-header");

    menuToggle.addEventListener("click", () => {
        linksHeader.classList.toggle("active");
        });
    });

//Validamos el formulario
const miContacto = document.getElementById('formulario-contacto')
    miContacto.addEventListener('submit', async (e) => {
    e.preventDefault(); 

    const form = e.target;
    const datos = {
        nombres: form.nombres.value,
        celular: form.celular.value,
        mensaje: form.mensaje.value,
        email: form.email.value
    };
    
    try {
        const respuesta = await fetch('/api/contacto', {
            method: 'POST',
            headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
        });

    const resultado = await respuesta.text();
    alert(resultado); // Mostrar mensaje del backend
    } catch (error) {
    console.error('Error al enviar el formulario:', error);
    }
});

//Este es el popup, agregar más camino del tutorial, mostrando las secciones, mostrando varias cosas
window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("tutorial-popup");
    const btnSi = document.getElementById("btn-si");
    const btnNo = document.getElementById("btn-no");

    popup.style.display = "flex";

    btnSi.addEventListener("click", () => {
        popup.style.display = "none";

        introJs().setOptions({
            steps: [
                {
                    element: document.querySelector('#about'),
                    intro: "Estos somos nosotos hermano"
                },
                {
                    element: document.querySelector("#services"),
                    intro: "Aquí puedes ver nuestros servicios disponibles."
                },
                {
                    element: document.querySelector('#price'),
                    intro: "Estos son nuestro planes"
                },
                {
                    element: document.querySelector("#contact-section"),
                    intro: "Este es nuestro formulario de contacto."
                },
                {
                    element: document.querySelector("footer"),
                    intro: "Aquí están nuestras redes sociales."
                }
                ],
                overlayOpacity: 0.6,
                nextLabel: "Siguiente",
                prevLabel: "Anterior",
                doneLabel: "Entendido",
                showStepNumbers: false
            }).start();
    });

    btnNo.addEventListener("click", () => {
        popup.style.display = "none";
    });
});
