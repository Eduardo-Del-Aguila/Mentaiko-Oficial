const formRegister = document.getElementById('form-register');
const mensajeRegistro = document.getElementById('mensaje-registro');

formRegister.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const passwordConfirm = document.getElementById('passwordConfirm').value.trim();

  if (password !== passwordConfirm) {
    mensajeRegistro.textContent = 'Las contraseñas no coinciden.';
    mensajeRegistro.style.color = 'red';
    return;
  }

  try {
    const res = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();

    if (res.ok) {
      mensajeRegistro.textContent = '¡Registro exitoso! Redirigiendo...';
      mensajeRegistro.style.color = 'green';
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    } else {
      mensajeRegistro.textContent = data.message;
      mensajeRegistro.style.color = 'red';
    }
  } catch (err) {
    console.error('Error al registrar:', err);
    mensajeRegistro.textContent = 'Error en el registro.';
    mensajeRegistro.style.color = 'red';
  }
});
