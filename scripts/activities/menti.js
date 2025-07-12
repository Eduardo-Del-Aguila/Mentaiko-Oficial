const emociones = {
  "concentrado": {
    id: "concentrado",
    nombre: "Concentrado",
    categoria: "Estado mental",
    descripcion: "Estás en un momento de enfoque. Aprovecha este impulso para avanzar en tus tareas importantes.",
    sugerencia: "Prueba técnicas de enfoque como Pomodoro o escucha música instrumental.",
    consejo: "Recuerda hacer pausas activas cada cierto tiempo para no agotarte."
  },
  "ansiedad": {
    id: "ansiedad",
    nombre: "Ansiedad",
    categoria: "Estado emocional",
    descripcion: "La ansiedad puede ser una respuesta al estrés o exceso de estímulos.",
    sugerencia: "Haz respiraciones profundas o usa la función de relajación guiada.",
    consejo: "Escribe lo que sientes o habla con alguien de confianza."
  },
  "objetivos": {
    id: "objetivos",
    nombre: "Objetivos Claros",
    categoria: "Productividad",
    descripcion: "Tener claridad sobre tus metas mejora la motivación.",
    sugerencia: "Haz una lista breve de tareas y define prioridades.",
    consejo: "Divide tus metas grandes en pasos pequeños y alcanzables."
  },
};


    function enviarMensaje() {
        const input = document.getElementById("input-mensaje");
        const texto = input.value.trim();
        if (texto === "") return;
        agregarMensaje('usuario', texto);
        procesarRespuesta(texto);
        input.value = "";
    }

    function agregarMensaje(tipo, texto) {
        const chat = document.getElementById("chat-body");
        const div = document.createElement("div");
        div.className = `chat-msg ${tipo}`;
        div.innerHTML = texto;
        chat.appendChild(div);
        chat.scrollTop = chat.scrollHeight;
    }

    function procesarRespuesta(texto) {
        const mensaje = texto.toLowerCase();

            if (mensaje === "/emociones similares") {
                let respuesta = "<strong>Emociones y estados disponibles:</strong><br>";
                for (const id in emociones) {
                    const e = emociones[id];
                    respuesta += `
                    <br>
                    <strong>${e.nombre}</strong> (ID: ${e.id})<br>
                    `;
                }
                respuesta += `<br><em>Escribe el nombre o ID de un estado para conocer más.</em>`;
                agregarMensaje('bot', respuesta);
                return;
            }

        let encontrado = null;
        for (const id in emociones) {
          const e = emociones[id];
          if (
            mensaje.includes(e.nombre.toLowerCase()) ||
            mensaje.includes(e.id)
          ) {
            encontrado = e;
            break;
          }
        }
        
        if (encontrado) {
          const e = encontrado;
          const respuesta = `
            <strong>${e.nombre}</strong><br>
            <strong>ID:</strong> ${e.id}<br>
            <strong>Categoría:</strong> ${e.categoria}<br>
            <strong>Descripción:</strong> ${e.descripcion}<br>
            <strong>Sugerencia:</strong> ${e.sugerencia}<br>
            <strong>Consejo:</strong> ${e.consejo}
          `;
          agregarMensaje('bot', respuesta);
        
          const otras = Object.values(emociones)
            .filter(item => item.id !== e.id)
            .map(item => `<code>${item.id}</code> (${item.nombre})`)
            .join(', ');
        
          const sugerencia = `
            ¿Quieres explorar otra emoción? Puedes elegir entre: ${otras}
          `;
          setTimeout(() => agregarMensaje('bot', sugerencia), 600);
          return;
        }


      agregarMensaje('bot', generarRespuestaSimulada(mensaje));
    }

    function generarRespuestaSimulada(mensaje) {
        if (mensaje.includes('hola') || mensaje.includes('buenas')) {
            return '¡Hola! Soy Menti 🌱 Estoy aquí para acompañarte. Puedes escribir "/emociones similares" para ver cómo te puedo ayudar según tu estado.';
        } else if (mensaje.includes('estres') || mensaje.includes('cansado') || mensaje.includes('agotado')) {
            return 'Parece que estás agotado. Te sugiero consultar la emoción "Reducción de estrés" o "Cansado" para recibir algunos consejos. 😌';
        } else if (mensaje.includes('gracias')) {
            return '¡Estoy aquí para ayudarte! Cuando quieras, puedes volver a escribirme 💬';
        } else {
            return 'Lo siento, aún estoy aprendiendo 🧠. Puedes escribir "/emociones similares" o escribir el nombre de una emoción como "ansiedad" o "objetivos".';
        }
    }


    function toggleChatMenti() {
        const widget = document.getElementById("mentiChat");
        widget.style.display = widget.style.display === "flex" ? "none" : "flex";
    }

    const boton = document.getElementById("btn-volver");

    boton.onclick = ( ) => window.location.href = "../index.html";