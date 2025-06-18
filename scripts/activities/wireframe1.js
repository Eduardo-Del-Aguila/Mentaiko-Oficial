
  document.getElementById('btn-empezar').addEventListener('click', function () {
    document.querySelector('.pantalla-inicial').style.display = 'none';
    document.querySelector('.seccion-preguntas').style.display = 'block';
  });

document.addEventListener('DOMContentLoaded', function () {
  const botones = document.querySelectorAll('.btn-opcion');

 const grupos = document.querySelectorAll('.grupo-cards');
  let grupoActual = 0;

  // Mostrar el primer grupo
  grupos[grupoActual].classList.add('activo');

  grupos.forEach((grupo, index) => {
    const botones = grupo.querySelectorAll('.btn-opcion');

    botones.forEach(boton => {
      boton.addEventListener('click', function () {
        // Marcar el botón actual como seleccionado y quitar los demás
        botones.forEach(b => b.classList.remove('seleccionado'));
        this.classList.add('seleccionado');

        // Ir al siguiente grupo si existe
        if (grupoActual < grupos.length - 1) {
          const actual = grupos[grupoActual];
          grupoActual++;

          const siguiente = grupos[grupoActual];

          // Oculta actual con efecto
          actual.classList.remove('activo');

          setTimeout(() => {
            siguiente.classList.add('activo');
          }, 100); // da tiempo al fade-out
        } else {
          console.log("Último grupo alcanzado.");
          // Aquí podrías mostrar un mensaje o ir a una nueva sección
        }
      });
    });
  });
});