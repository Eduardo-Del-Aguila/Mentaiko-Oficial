const loginForm = document.getElementById('loginForm');
const mensaje = document.getElementById('mensaje-login');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('pasword').value.trim();

    try {
    const res = await fetch('https://mentaicoserver.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    console.log('Soy la data', data)
    if (res.ok) {
        mensaje.textContent = '¡Login exitoso!';
        mensaje.style.color = 'green';

        localStorage.setItem('token', data.token);
        localStorage.setItem('userID', data.userID);
        localStorage.setItem('userName', data.name);

        setTimeout(() => {
        window.location.href = '../index.html';
        }, 1500);
    } else {
        mensaje.textContent = data.message;
        mensaje.style.color = 'red';
        }
    } catch (err) {
    mensaje.textContent = 'Error de conexión al iniciar sesión.';
    mensaje.style.color = 'red';
    console.error(err);
    }
});
