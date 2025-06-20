
  document.getElementById('btn-empezar').addEventListener('click', function () {
    document.querySelector('.pantalla-inicial').style.display = 'none';
    document.querySelector('.seccion-preguntas').style.display = 'block';
  });

document.addEventListener('DOMContentLoaded', () => {
  const botonesOpcion = document.querySelectorAll('.btn-opcion');
  const grupos = document.querySelectorAll('.grupo-cards');
  const btnFinal = document.getElementById('btn-final');
  const respuestasSeleccionadas = [];
  let grupoActual = 0;

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

      // Si hay más grupos, avanza al siguiente
      if (grupoActual < grupos.length - 1) {
        ocultarGrupo(grupoActual);
        grupoActual++;
        mostrarGrupo(grupoActual);
      } else {
        // Si ya es el último grupo, mostrar botón final
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


