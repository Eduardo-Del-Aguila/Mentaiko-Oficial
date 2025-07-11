// menusito hamburguesa
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const linksHeader = document.getElementById("links-header");
    const boton = document.getElementById('btn-started');
    const nombre = localStorage.getItem('userName');
    console.log('Soy el gran nombre', nombre)
    if (nombre && boton) {
      boton.textContent = nombre;
      boton.classList.add('logueado'); 
    }


    menuToggle.addEventListener("click", () => {
        linksHeader.classList.toggle("active");
        });
    });





window.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("tutorial-popup");
  const btnSi = document.getElementById("btn-si");
  const btnNo = document.getElementById("btn-no");

  const tutorialRespondido = localStorage.getItem("tutorialRespondido");
  console.log("Respondido:", tutorialRespondido); 
  localStorage.removeItem("tutorialRespondido")

  if (!tutorialRespondido) {
    popup.style.display = "flex";
  }

    btnSi.addEventListener("click", () => {;
        popup.style.display = "none";
        localStorage.setItem("tutorialRespondido", "si");

        introJs().setOptions({
            steps: [
    {
      element: document.querySelector('#about'),
      intro: "👋 Bienvenido a <strong>Mentaiko</strong>. Aquí comienza tu camino hacia una mejor salud mental."
    },
    {
      element: document.querySelector('.btn-text-cover'),
      intro: "💡 Haz clic en <strong>Started</strong> para realizar tu test emocional personalizado."
    },
    {
      element: document.querySelector("#services"),
      intro: "🛠️ Estas son las funciones clave que te ayudarán a organizarte y sentirte mejor cada día."
    },
    {
      element: document.querySelectorAll('.card-flip')[0], 
      intro: "📊 El <strong>Dashboard</strong> te permite visualizar tu progreso y acceder a métricas emocionales."
    },
    {
      element: document.querySelectorAll('.card-flip')[1], 
      intro: "🕒 En <strong>Horario</strong> puedes estructurar tu día y crear hábitos saludables con recordatorios."
    },
    {
      element: document.querySelectorAll('.card-flip')[2], 
      intro: "💬 <strong>Foro</strong> es tu espacio seguro para compartir, consultar y aprender con otros usuarios."
    },
    {
      element: document.querySelectorAll('.card-flip')[3], 
      intro: "🐾 <strong>Menti</strong> es tu acompañante emocional que te da soporte y crece contigo."
    },
    {
      element: document.querySelector("#price"),
      intro: "💸 Aquí puedes consultar los planes disponibles según tu nivel de uso."
    },
    {
      element: document.querySelectorAll('.plan')[0], 
      intro: "🎁 <strong>Plan Gratis</strong>: Ideal para comenzar a explorar con acceso limitado pero funcional."
    },
    {
      element: document.querySelectorAll('.plan')[1], 
      intro: "🌟 <strong>Plan Plus</strong>: Recomendado para estudiantes con acceso completo y soporte rápido."
    },
    {
      element: document.querySelectorAll('.plan')[2], 
      intro: "🚀 <strong>Plan Pro</strong>: Para profesionales y equipos que buscan personalización avanzada y asistencia 24/7."
    },
    {
      element: document.querySelector("#contact-section"),
      intro: "📬 Si necesitas ayuda, aquí puedes dejarnos un mensaje o escribirnos por redes."
    },
    {
      element: document.querySelector("footer"),
      intro: "🌐 En el pie de página encontrarás nuestros enlaces útiles, redes sociales y recursos legales."
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
      // localStorage.setItem("tutorialRespondido", "no");
  });
    
});


//Validamos el formulario
document.addEventListener("DOMContentLoaded", () => {
  const miContacto = document.getElementById('formulario-contacto');

  miContacto.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita el envío real

    const form = e.target;
    const datos = {
      nombres: form.nombres.value,
      celular: form.celular.value,
      mensaje: form.mensaje.value,
      email: form.email.value
    };

    alert(`¡Gracias ${datos.nombres}! Hemos recibido tu mensaje y te responderemos pronto a ${datos.email}.`);

    form.reset();
  });
});

// const mensajeExito = document.getElementById('mensaje-confirmacion');
// mensajeExito.style.display = 'block';
// if()
// form.reset();
// setTimeout(() => {
//   mensajeExito.style.display = 'none';
// }, 5000);

