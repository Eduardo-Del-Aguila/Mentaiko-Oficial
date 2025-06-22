document.addEventListener('DOMContentLoaded', () => {
  const botonesOpcion = document.querySelectorAll('.btn-opcion');
  const grupos = document.querySelectorAll('.grupo-cards');
  const btnFinal = document.getElementById('btn-final');
  const respuestasSeleccionadas = [];
  let grupoActual = 0;

  document.getElementById('btn-empezar').addEventListener('click', () => {
    document.querySelector('.pantalla-inicial').style.display = 'none';
    document.querySelector('.seccion-preguntas').style.display = 'block';
  });

  btnFinal.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch('/api/respuestas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ respuestas: respuestasSeleccionadas })
      });

      const resultado = await respuesta.text();
      console.log(resultado);
      window.location.href = 'dashboard.html';
    } catch (error) {
      console.error('Error al enviar las respuestas:', error);
    }
  });

  mostrarGrupo(grupoActual);

  botonesOpcion.forEach(boton => {
    boton.addEventListener('click', () => {
      const grupo = boton.closest('.grupo-cards');
      grupo.querySelectorAll('.btn-opcion').forEach(b => b.classList.remove('seleccionado'));
      boton.classList.add('seleccionado');

      const textoOpcion = boton.parentElement.querySelector('span').textContent;
      const index = Array.from(grupos).indexOf(grupo);
      respuestasSeleccionadas[index] = textoOpcion;

      console.log(respuestasSeleccionadas);

      if (grupoActual < grupos.length - 1) {
        ocultarGrupo(grupoActual);
        grupoActual++;
        mostrarGrupo(grupoActual);
      } else {
        btnFinal.classList.remove('oculto');
      }
    });
  });

  function mostrarGrupo(index) {
    grupos[index].classList.add('activo');
  }

  function ocultarGrupo(index) {
    grupos[index].classList.remove('activo');
  }
});
