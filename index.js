
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//Porobando un ejemplo de ruta
app.get('/api/saludo', (req, res) => {
    res.send('Hola desde el backend de Mentaiko!');
});



// Pruebas
app.post('/api/enviar', (req, res) => {
    const datos = req.body;
    console.log('Datos recibidos:', datos);
    res.send('Datos recibidos en el backend.');
});

app.listen(PORT, () => {
    console.log(`✅ Servidor backend corriendo en http://localhost:${PORT}`);
});



app.post('/api/contacto', (req, res) => {
  const { nombres, celular, mensaje, email } = req.body;
  console.log('📥 Datos del formulario:');
  console.log('Nombres:', nombres);
  console.log('Celular:', celular);
  console.log('Email:', email);
  console.log('Mensaje:', mensaje);
  res.send('¡Formulario recibido correctamente!');
});


//Usamos una lista (no hay presupuesto para SQL SERVER)
const respuestas = [];

app.post('/api/respuestas', (req, res) => {
  const nuevaRespuesta = {
    respuestas: req.body.respuestas,
    fecha: new Date().toLocaleString()
  };
  respuestas.push(nuevaRespuesta);
  res.send('Respuestas guardadas correctamente');
});

app.get('/api/respuestas', (req, res) => {
  res.json(respuestas);
});

