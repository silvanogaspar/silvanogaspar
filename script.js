const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.getElementById('form-cadastro').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Obrigado pelo seu cadastro! Entraremos em contato em breve.');
    e.target.reset();
});
