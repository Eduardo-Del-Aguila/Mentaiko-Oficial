const form = document.getElementById('foro-form');
const textarea = document.getElementById('pregunta');
const respuestas = document.getElementById('respuestas');


let publicaciones = [];


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const texto = textarea.value.trim();
  if (texto === '') return;

  const nuevaPublicacion = {
    autor: 'Usuario anónimo',
    fecha: new Date().toLocaleDateString('es-PE', {
      day: 'numeric', month: 'long', year: 'numeric'
    }),
    pregunta: texto,
    comentarios: []
  };

  publicaciones.unshift(nuevaPublicacion);
  renderPublicaciones();

  textarea.value = '';
});


function renderPublicaciones() {
  respuestas.innerHTML = '';

  publicaciones.forEach((pub) => {
    const pubDiv = document.createElement('div');
    pubDiv.classList.add('publicacion');

    pubDiv.innerHTML = `
      <div class="publicacion-cabecera">
        <strong>${pub.autor}</strong> <span class="fecha">· ${pub.fecha}</span>
      </div>
      <p class="pregunta">${pub.pregunta}</p>
      <div class="comentarios">
        ${pub.comentarios.length > 0
          ? pub.comentarios.map(com => `<div class="comentario"><strong>${com.autor}</strong>: ${com.texto}</div>`).join('')
          : `<div class="comentario"><em>No hay comentarios aún. Sé el primero en responder.</em></div>`}
      </div>
    `;

    respuestas.appendChild(pubDiv);
  });
}
