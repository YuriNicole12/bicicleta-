document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        alert('Formulário enviado com sucesso!');
        contactForm.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
