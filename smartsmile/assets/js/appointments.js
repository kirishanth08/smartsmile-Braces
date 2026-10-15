/**
 * SmartSmile — Consultation & Appointment Booking Interaction Demo
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initBookingFlow();
  });

  function initBookingFlow() {
    const bookingForm = document.getElementById('consultationBookingForm');
    if (!bookingForm) return;

    const doctorSelect = document.getElementById('preferredDoctor');
    const treatmentSelect = document.getElementById('treatmentInterest');
    const dateInput = document.getElementById('preferredDate');
    const timeSelect = document.getElementById('preferredTime');
    const nameInput = document.getElementById('patientName');

    const summaryDoctor = document.getElementById('summaryDoctor');
    const summaryTreatment = document.getElementById('summaryTreatment');
    const summaryDateTime = document.getElementById('summaryDateTime');
    const summaryPatient = document.getElementById('summaryPatient');

    function updateSummary() {
      if (summaryDoctor && doctorSelect) {
        summaryDoctor.textContent = doctorSelect.options[doctorSelect.selectedIndex]?.text || 'Not selected';
      }
      if (summaryTreatment && treatmentSelect) {
        summaryTreatment.textContent = treatmentSelect.options[treatmentSelect.selectedIndex]?.text || 'General Consultation';
      }
      if (summaryDateTime && dateInput && timeSelect) {
        const d = dateInput.value || 'Date pending';
        const t = timeSelect.options[timeSelect.selectedIndex]?.text || 'Time pending';
        summaryDateTime.textContent = `${d} at ${t}`;
      }
      if (summaryPatient && nameInput) {
        summaryPatient.textContent = nameInput.value.trim() || 'Patient Name';
      }
    }

    [doctorSelect, treatmentSelect, dateInput, timeSelect, nameInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', updateSummary);
        input.addEventListener('change', updateSummary);
      }
    });

    // Form submission triggers confirmation modal
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!bookingForm.checkValidity()) {
        bookingForm.classList.add('was-validated');
        return;
      }

      updateSummary();
      const modalElement = document.getElementById('bookingConfirmModal');
      if (modalElement && window.bootstrap) {
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      }
    });
  }
})();
