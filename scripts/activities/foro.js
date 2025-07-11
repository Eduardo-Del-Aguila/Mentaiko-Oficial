const form = document.getElementById('foro-form');
const preguntaInput = document.getElementById('pregunta');
const respuestasContainer = document.getElementById('respuestas');

function guardarYMostrar(pregunta) {
    const post = {
        texto: pregunta,
        fecha: new Date().toLocaleString()
    };

    const foroData = JSON.parse(localStorage.getItem('foro')) || [];
    foroData.unshift(post);
    localStorage.setItem('foro', JSON.stringify(foroData));

    renderRespuestas();
}


function renderRespuestas() {
    const foroData = JSON.parse(localStorage.getItem('foro')) || [];
    respuestasContainer.innerHTML = '';

    foroData.forEach(post => {
        const div = document.createElement('div');
        div.classList.add('respuesta');
        div.innerHTML = `<strong>${post.fecha}</strong><br>${post.texto}`;
        respuestasContainer.appendChild(div);
    });
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = preguntaInput.value.trim();
    if (texto) {
    guardarYMostrar(texto);
    preguntaInput.value = '';
    }
});


window.addEventListener('DOMContentLoaded', renderRespuestas);
