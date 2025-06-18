let sidebarPermanente = false;

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.getElementById('sidebar').classList.add('mostrar');
    sidebarPermanente = true;
    
    alert('Mensaje enviado. La barra lateral está ahora activa.');
});

document.getElementById('toggle-btn').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    

    if(sidebarPermanente) {
        sidebar.classList.toggle('cerrada');
    }
});

document.querySelectorAll('#sidebar-nav li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('#sidebar-nav li').forEach(i => i.classList.remove('activo'));
        this.classList.add('activo');
    });
});


const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-principal-header');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

