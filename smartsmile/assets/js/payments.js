/**
 * SmartSmile — Payment Installments & Calculator Demo
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initPaymentInteractions();
  });

  function initPaymentInteractions() {
    // Payment filter buttons
    const filterBtns = document.querySelectorAll('[data-payment-filter]');
    const rows = document.querySelectorAll('[data-payment-status]');

    if (filterBtns.length && rows.length) {
      filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const filter = btn.getAttribute('data-payment-filter');

          filterBtns.forEach((b) => {
            b.classList.remove('active', 'btn-smart-primary');
            b.classList.add('btn-smart-secondary');
          });
          btn.classList.add('active', 'btn-smart-primary');
          btn.classList.remove('btn-smart-secondary');

          rows.forEach((row) => {
            const status = row.getAttribute('data-payment-status');
            if (filter === 'all' || status === filter) {
              row.style.display = '';
            } else {
              row.style.display = 'none';
            }
          });
        });
      });
    }

    // Demo payment submission modal interaction
    const payForm = document.getElementById('installmentPayForm');
    if (payForm) {
      payForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMsg = document.getElementById('paymentDemoSuccess');
        const submitBtn = payForm.querySelector('button[type="submit"]');

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Simulating Transaction...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Complete Demo Payment';
          }
          if (successMsg) {
            successMsg.classList.remove('d-none');
            setTimeout(() => {
              const modalEl = document.getElementById('paymentModal');
              if (modalEl && window.bootstrap) {
                const modal = window.bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
              }
              successMsg.classList.add('d-none');
              if (typeof window.showSmartToast === 'function') {
                window.showSmartToast('Payment Successful!', '₹8,500 recorded in sample ledger. Receipt #REC-7602 generated.', 'success');
              }
            }, 1500);
          }
        }, 1200);
      });
    }
  }
})();
