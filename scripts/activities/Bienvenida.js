document.addEventListener('DOMContentLoaded', () => {
  const userName = localStorage.getItem('userName');

  if (!userName) {
    const botonesOpcion = document.querySelectorAll('.btn-opcion');
    const grupos = document.querySelectorAll('.grupo-cards');
    const btnFinal = document.getElementById('btn-final');
    const respuestasSeleccionadas = [];
    let grupoActual = 0;

    document.getElementById('btn-empezar').addEventListener('click', () => {
      document.querySelector('.pantalla-inicial').style.display = 'none';
      document.querySelector('.seccion-preguntas').style.display = 'block';
    });

    btnFinal.addEventListener('click', (e) => {
      e.preventDefault();

      const nuevaRespuesta = {
        fecha: new Date().toLocaleString(),
        respuestas: respuestasSeleccionadas
      };

      const respuestasGuardadas = JSON.parse(localStorage.getItem("respuestasMentaiko")) || [];
      respuestasGuardadas.push(nuevaRespuesta);

      localStorage.setItem("respuestasMentaiko", JSON.stringify(respuestasGuardadas));

      window.location.href = "dashboard.html?origen=bienvenida";
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
  } else {
    // Usuario logueado: puedes mostrar mensaje, redirigir o mostrar otras opciones
    console.log(`Usuario logueado: ${userName}`);
  }
});
