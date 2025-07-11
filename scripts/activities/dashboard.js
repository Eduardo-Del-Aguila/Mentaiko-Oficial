
//Acá van todas las funciones
async function obtenerRespuestas() {
  const data = JSON.parse(localStorage.getItem("respuestasMentaiko")) || [];


  // mostrarUltimas(data);
  mostrarTop(data);
  mostrarGraficos(data);
  mostrarTabla(data);
}

window.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const origen = params.get("origen");
  console.log("Origen recibido:", origen); // 👈 Ver esto en consola

  const contenedor = document.getElementById("boton-dinamico");
  if (!contenedor) return;

  const boton = document.createElement("button");

  if (origen === "bienvenida") {
    boton.textContent = "Iniciar sesión";
    boton.onclick = () => window.location.href = "login.html";
  } else {
    boton.textContent = "Volver";
    boton.onclick = () => window.location.href = "index.html";
  }

  contenedor.appendChild(boton);
});


document.addEventListener('DOMContentLoaded', () => {
  const yaTieneDatos = localStorage.getItem("respuestasMentaiko");
  if (!yaTieneDatos) {
    const opciones = {
      grupo1: ["Concentrado", "Confiado", "Cansado"],
      grupo2: ["Mantener Ritmo", "Evitar distracciones", "Gestionar Tiempo"],
      grupo3: ["Redes Sociales", "Interrupciones", "Ansiedad"],
      grupo4: ["Objetivos claros", "Reduccion de estres", "Organiza tu día"]
    };

    function obtenerAleatorio(lista) {
      return lista[Math.floor(Math.random() * lista.length)];
    }

    // Generar 30 respuestas simuladas con fechas distintas
    const simuladas = Array.from({ length: 30 }, (_, i) => {
      const fecha = new Date(Date.now() - i * 3600 * 1000).toLocaleString(); // cada hora menos
      return {
        fecha,
        respuestas: [
          obtenerAleatorio(opciones.grupo1),
          obtenerAleatorio(opciones.grupo2),
          obtenerAleatorio(opciones.grupo3),
          obtenerAleatorio(opciones.grupo4)
        ]
      };
    });

    localStorage.setItem("respuestasMentaiko", JSON.stringify(simuladas));
  }

  // Luego llama a tus funciones normalmente
  obtenerRespuestas();
});


//Posible a Eliminar
// function mostrarUltimas(respuestas) {
//   const contenedor = document.getElementById('ultimas-respuestas');
//   contenedor.innerHTML = '';
//   respuestas.slice(-5).reverse().forEach((r, i) => {
//     const li = document.createElement('li');
//     li.textContent = `${r.fecha} → ${r.respuestas.join(', ')}`;
//     contenedor.appendChild(li);
//   });
// }

function mostrarTop(respuestas) {
  const conteo = {};
  respuestas.forEach(r => {
    r.respuestas.forEach(opcion => {
      conteo[opcion] = (conteo[opcion] || 0) + 1;
    });
  });

  const top = Object.entries(conteo)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const contenedor = document.getElementById('top-elecciones');
  contenedor.innerHTML = '';
  top.forEach(([opcion, cantidad]) => {
    const li = document.createElement('li');
    li.textContent = `${opcion}: ${cantidad} selección(es)`;
    contenedor.appendChild(li);
  });
}

// Acá añadimos todo el codigo nuevo por si existen más graficas
function mostrarGraficos(respuestas) {
  
  //Conteo de respuestas
  const conteoCategorias = {};
  respuestas.forEach(r => {
    r.respuestas.forEach(opcion => {
      const categoria = opcion; // Puedes ajustar si hay una categoría real
      conteoCategorias[categoria] = (conteoCategorias[categoria] || 0) + 1;
    });
  });

  // Top 3 respuestas
  const conteoElecciones = {};
  respuestas.forEach(r => {
    r.respuestas.forEach(opcion => {
      conteoElecciones[opcion] = (conteoElecciones[opcion] || 0) + 1;
    });
  });

  const top3 = Object.entries(conteoElecciones)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // Gráfico de barras, medimos los clicks o elecciones de cada categoría
  const ctxCat = document.getElementById('graficoCategorias').getContext('2d');
  new Chart(ctxCat, {
    type: 'bar',
    data: {
      labels: Object.keys(conteoCategorias),
      datasets: [{
        label: 'Cantidad por Categoría',
        data: Object.values(conteoCategorias),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });


// Gráfica pastel basada en el top 3
  const ctxTop = document.getElementById('graficoTop').getContext('2d');
  new Chart(ctxTop, {
    type: 'pie',
    data: {
      labels: top3.map(([eleccion]) => eleccion),
      datasets: [{
        label: 'Top 3 Elecciones',
        data: top3.map(([_, cantidad]) => cantidad),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }]
    },
    options: {
      responsive: true
    }
  });
}

function mostrarTabla(respuestas) {
  const tbody = document.querySelector('#tabla-respuestas tbody');
  tbody.innerHTML = '';
  respuestas.forEach(r => {
    const tr = document.createElement('tr');

    const tdFecha = document.createElement('td');
    tdFecha.textContent = r.fecha;
    tr.appendChild(tdFecha);

    const tdRespuestas = document.createElement('td');
    tdRespuestas.textContent = r.respuestas.join(', ');
    tr.appendChild(tdRespuestas);

    tbody.appendChild(tr);
  });
}





obtenerRespuestas();
