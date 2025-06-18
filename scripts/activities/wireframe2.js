

const inputTabla = document.querySelectorAll('.input-horario');
const guardar = document.querySelector('#guardar-horario');

guardar.addEventListener('click', () => {
    const anotacion = new Set();
    inputTabla.forEach((valores) => {
        const valor = valores.value.trim();
        if (valor !== '') {
            anotacion.add(valor);
        }
    });
    console.log([...anotacion]); 
});

