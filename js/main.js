
window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});
// formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const messageInput = document.getElementById("message");

  // Limpia los campos del formulario cuando la página se carga
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  messageInput.value = "";

  submitButton.addEventListener("click", function () {
    // Verificar si todos los campos están completos
    if (!nameInput.value || !emailInput.value || !phoneInput.value || !messageInput.value) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Verificar si el correo electrónico es válido
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
      alert("Por favor, ingrese un correo electrónico válido.");
      return;
    }

    // Si todos los campos están completos y el correo es válido, mostrar un mensaje de éxito
    alert("Mail enviado exitosamente a Sebastian Macchia");

    // Limpiar todos los campos del formulario
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";

    // Puedes agregar aquí el código para enviar el formulario al servidor si lo deseas.
  });
});
