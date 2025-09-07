//Validaciones para el formulario de contacto

        document.getElementById('contactForm').addEventListener('submit', function(e) {
            let nombre = document.getElementById('nombre').value.trim();
            let apellido = document.getElementById('apellido').value.trim();
            let email = document.getElementById('email').value.trim();
            let asunto = document.getElementById('asunto').value.trim();
            let mensaje = document.getElementById('mensaje').value.trim();
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (nombre.length < 2) {
                alert('El nombre debe tener al menos 2 caracteres.');
                e.preventDefault();
                return;
            }
            if (apellido.length < 2) {
                alert('El apellido debe tener al menos 2 caracteres.');
                e.preventDefault();
                return;
            }
            if (!emailRegex.test(email)) {
                alert('Ingresa un correo electrónico válido.');
                e.preventDefault();
                return;
            }
            if (asunto.length < 3) {
                alert('El asunto debe tener al menos 3 caracteres.');
                e.preventDefault();
                return;
            }
            if (mensaje.length < 10) {
                alert('El mensaje debe tener al menos 10 caracteres.');
                e.preventDefault();
                return;
            }
        });
