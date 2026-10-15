/**
 * SmartSmile — Forms and Input Validation Demo
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initFormValidation();
  });

  function initFormValidation() {
    const forms = document.querySelectorAll('.needs-validation-demo');
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
          e.stopPropagation();
          form.classList.add('was-validated');
          return;
        }

        form.classList.add('was-validated');

        // Show success alert or trigger modal
        const alertBox = form.querySelector('.form-success-message');
        if (alertBox) {
          alertBox.classList.remove('d-none');
          form.reset();
          form.classList.remove('was-validated');
          setTimeout(() => {
            alertBox.classList.add('d-none');
          }, 6000);
        }
      });
    });
  }
})();
