/**
 * SmartSmile — Patient Dashboard Interactive Functionality Engine
 * Comprehensive handling for all buttons, clickables, modals, and notifications across:
 * - dashboard.html (Overview & Quick Actions)
 * - appointments.html (Reschedule, Cancel, View Notes, Rebook, Adjustment)
 * - messages.html (Thread switching, real-time simulated chat, Call Clinic)
 * - documents.html (PDF preview, download simulation)
 * - treatment-photos.html (Lightbox zoom, comparison, selfie upload)
 * - treatment-plan.html & treatment-progress.html (Roadmap step previews, plan download)
 * - payment-installments.html (Receipt preview, quick payment)
 * - profile.html (Form submission animations & toasts)
 */

(function () {
  'use strict';

  // State cache for appointments and threads
  const dashboardState = {
    activeThread: 'dr-carter',
    lastCancelledAppt: null,
    threads: {
      'dr-carter': {
        name: 'Dr. Olivia Carter, DDS',
        role: 'Active Doctor • Online',
        avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=80&q=80',
        status: 'Responds within clinical hours',
        messages: [
          { sender: 'doctor', name: 'Dr. Olivia Carter', text: 'Hi Alex! I reviewed your progress selfie from last Friday. Your upper right premolar is tracking wonderfully with Tray 17.', time: 'Yesterday • 3:45 PM' },
          { sender: 'patient', name: 'Alex Morgan', text: 'Thank you Dr. Carter! I switched to Tray 18 yesterday evening. It felt quite snug the first few hours but feels great now.', time: 'Yesterday • 4:10 PM' },
          { sender: 'doctor', name: 'Dr. Olivia Carter', text: 'That snug sensation is exactly the gentle force we want! We look forward to evaluating Stage 18 at your appointment on Oct 18 at 4:30 PM.', time: 'Today • 9:15 AM' }
        ],
        replies: [
          "Great question, Alex! Yes, please continue wearing Tray 18 for full 22 hours per day until we see you this Friday.",
          "Noted! If you feel any sharp edge near the lower canine, you can apply a pinch of orthodontic wax we gave you.",
          "Your tracking velocity is phenomenal. Keep up the consistent wear and bring Tray 17 and 18 with you to the clinic."
        ]
      },
      'coordinator': {
        name: 'Sarah Jenkins',
        role: 'Treatment & Tray Coordinator',
        avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80',
        status: 'Available • Mon-Fri 9AM-5PM',
        messages: [
          { sender: 'coordinator', name: 'Sarah (Coordinator)', text: 'Hello Alex! Just checking in — Trays 19 through 24 have arrived from our digital lab and are ready for pickup at your Friday visit!', time: 'Oct 14 • 11:20 AM' },
          { sender: 'patient', name: 'Alex Morgan', text: 'Awesome news! Will I also receive the travel case replacement?', time: 'Oct 14 • 11:45 AM' },
          { sender: 'coordinator', name: 'Sarah (Coordinator)', text: 'Yes, absolutely! I have reserved a fresh slim travel case and whitening foam for you.', time: 'Oct 14 • 12:00 PM' }
        ],
        replies: [
          "I have updated your patient file with that note. Let me know if you need parking validation for Friday!",
          "Trays 19 through 24 are inspected and packaged in your personalized SmartSmile pouch.",
          "If you ever need an emergency adjustment slot, feel free to drop me a message here anytime!"
        ]
      },
      'billing': {
        name: 'Accounts & Insurance Support',
        role: 'Billing Specialist',
        avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=80&q=80',
        status: 'Available • Finance Desk',
        messages: [
          { sender: 'billing', name: 'Billing Dept', text: 'Hi Alex, your receipt for Installment #3 (₹8,500) has been archived in your Documents tab. Installment #4 is scheduled for Oct 25.', time: 'Oct 15 • 9:00 AM' },
          { sender: 'patient', name: 'Alex Morgan', text: 'Thanks! Can I also get an itemized statement for my health insurance reimbursement?', time: 'Oct 15 • 10:15 AM' },
          { sender: 'billing', name: 'Billing Dept', text: 'Certainly! I have generated and uploaded the insurance claim receipt #REC-7602 to your Documents section.', time: 'Oct 15 • 10:30 AM' }
        ],
        replies: [
          "Your payment ledger has been refreshed. All tax invoices are available in PDF format under Documents.",
          "We accept all major credit cards, UPI, and flexible health spending accounts (FSA/HSA).",
          "Your remaining balance is split across 4 remaining scheduled installments with 0% interest."
        ]
      }
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    initToastContainer();
    injectDynamicModals();
    initClickableCards();
    initAppointmentActions();
    initChatSystem();
    initDocumentActions();
    initTreatmentPhotoActions();
    initQuickPaymentActions();
    initProfileFormActions();
    initRoadmapInteractions();
    initAdjustmentBooking();
  });

  /* ==========================================================================
     1. Toast Notification System
     ========================================================================== */
  function initToastContainer() {
    if (!document.getElementById('smartToastContainer')) {
      const container = document.createElement('div');
      container.id = 'smartToastContainer';
      container.className = 'smart-toast-container';
      container.setAttribute('aria-live', 'polite');
      container.setAttribute('aria-atomic', 'true');
      document.body.appendChild(container);
    }
  }

  window.showSmartToast = function (title, message, type = 'success', duration = 4200, actionBtn = null) {
    initToastContainer();
    const container = document.getElementById('smartToastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `smart-toast smart-toast-${type}`;

    let iconClass = 'bi-check-circle-fill';
    if (type === 'info') iconClass = 'bi-info-circle-fill';
    else if (type === 'warning') iconClass = 'bi-exclamation-triangle-fill';
    else if (type === 'danger') iconClass = 'bi-x-circle-fill';

    let actionHtml = '';
    if (actionBtn && actionBtn.text && typeof actionBtn.callback === 'function') {
      actionHtml = `<button class="btn btn-sm btn-link p-0 mt-1 fw-bold text-decoration-underline text-primary toast-action-btn">${escapeHtml(actionBtn.text)}</button>`;
    }

    toast.innerHTML = `
      <i class="bi ${iconClass} toast-icon"></i>
      <div class="toast-content">
        <div class="toast-title">${escapeHtml(title)}</div>
        <div class="toast-body">${escapeHtml(message)}</div>
        ${actionHtml}
      </div>
      <button type="button" class="toast-close" aria-label="Close">&times;</button>
    `;

    container.appendChild(toast);

    const closeBtn = toast.querySelector('.toast-close');
    const dismiss = () => {
      toast.classList.add('toast-hiding');
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 260);
    };

    if (closeBtn) closeBtn.addEventListener('click', dismiss);

    if (actionBtn && actionBtn.callback) {
      const btn = toast.querySelector('.toast-action-btn');
      if (btn) {
        btn.addEventListener('click', () => {
          actionBtn.callback();
          dismiss();
        });
      }
    }

    if (duration > 0) {
      setTimeout(() => {
        if (toast.parentNode) dismiss();
      }, duration);
    }
  };

  /* ==========================================================================
     2. Dynamic Modals Injection
     ========================================================================== */
  function injectDynamicModals() {
    if (document.getElementById('smartDashboardModalsContainer')) return;

    const modalWrapper = document.createElement('div');
    modalWrapper.id = 'smartDashboardModalsContainer';

    modalWrapper.innerHTML = `
      <!-- Reschedule Modal -->
      <div class="modal fade" id="smartRescheduleModal" tabindex="-1" aria-labelledby="rescheduleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold" id="rescheduleModalLabel" style="color: var(--text-primary);"><i class="bi bi-calendar-range me-2 text-primary"></i>Reschedule Appointment</h5>
                <p class="small text-muted mb-0" id="rescheduleApptSubtitle">Modify your upcoming check-in with Dr. Olivia Carter</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="smartRescheduleForm">
                <input type="hidden" id="rescheduleTargetId" value="">
                <div class="p-3 rounded-3 mb-3" style="background: var(--surface-muted); border-left: 3px solid var(--smart-blue);">
                  <div class="small text-muted">Current Slot:</div>
                  <strong class="d-block" id="rescheduleCurrentSlot">Friday, Oct 18, 2026 • 4:30 PM</strong>
                  <div class="small text-muted mt-1">Suite 300, Treatment Bay 2 • Dr. Olivia Carter</div>
                </div>

                <div class="row g-2 mb-3">
                  <div class="col-sm-6">
                    <label class="form-label small fw-bold">Select New Date</label>
                    <input type="date" id="newAppointmentDate" class="form-control" required>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label small fw-bold">Select Time Slot</label>
                    <select id="newAppointmentTime" class="form-select" required>
                      <option value="10:00 AM">10:00 AM (Morning)</option>
                      <option value="11:30 AM">11:30 AM (Morning)</option>
                      <option value="2:15 PM">2:15 PM (Afternoon)</option>
                      <option value="4:30 PM" selected>4:30 PM (Evening)</option>
                      <option value="5:45 PM">5:45 PM (Evening)</option>
                    </select>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label small fw-bold">Reason for Change</label>
                  <select id="rescheduleReason" class="form-select">
                    <option value="work">Work or School Schedule Conflict</option>
                    <option value="travel">Out of Town / Travel</option>
                    <option value="earlier">Need Earlier Check-In (Tray snugness / questions)</option>
                    <option value="other">Personal / Family Routine</option>
                  </select>
                </div>

                <div class="mb-3">
                  <label class="form-label small fw-bold">Special Notes (Optional)</label>
                  <textarea id="rescheduleNotes" class="form-control" rows="2" placeholder="Let Dr. Carter's clinic coordinator know any details..."></textarea>
                </div>

                <div class="d-flex gap-2">
                  <button type="button" class="btn-smart-secondary flex-grow-1" data-bs-dismiss="modal">Keep Slot</button>
                  <button type="submit" class="btn-smart-primary flex-grow-1" id="btnSubmitReschedule">Confirm Reschedule</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Cancel Appointment Confirmation Modal -->
      <div class="modal fade" id="smartCancelModal" tabindex="-1" aria-labelledby="cancelModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold text-danger" id="cancelModalLabel"><i class="bi bi-exclamation-triangle-fill me-2"></i>Cancel Appointment</h5>
                <p class="small text-muted mb-0">Please confirm your cancellation request</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="small mb-3" style="color: var(--text-primary);">
                Are you sure you want to cancel your upcoming check-in? Regular tracking visits ensure your aligners continue displacing teeth according to Dr. Carter's CAD schedule.
              </p>
              <div class="p-3 rounded-3 mb-3" style="background: var(--surface-muted); border-left: 3px solid #ef4444;">
                <div class="fw-bold" id="cancelApptDetails">Friday, Oct 18, 2026 • 4:30 PM</div>
                <div class="small text-muted">Aligner Tracking Check-in • Dr. Olivia Carter</div>
              </div>

              <div class="mb-3">
                <label class="form-label small fw-bold">Reason for Cancellation</label>
                <select id="cancelReasonSelect" class="form-select">
                  <option value="conflict">Unavoidable schedule conflict</option>
                  <option value="sick">Feeling unwell</option>
                  <option value="rebook-later">Will rebook next month</option>
                  <option value="travel">Traveling abroad</option>
                </select>
              </div>

              <div class="d-flex gap-2">
                <button type="button" class="btn-smart-secondary flex-grow-1" data-bs-dismiss="modal">Keep Appointment</button>
                <button type="button" class="btn-smart-danger flex-grow-1" id="btnConfirmCancelAppt">Confirm Cancellation</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Clinical Notes Modal -->
      <div class="modal fade" id="smartClinicalNotesModal" tabindex="-1" aria-labelledby="clinicalNotesLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold" id="clinicalNotesLabel" style="color: var(--text-primary);"><i class="bi bi-journal-medical me-2 text-primary"></i>Doctor Clinical Notes</h5>
                <p class="small text-muted mb-0">Record of appointment assessment &amp; orthodontic chart</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="d-flex align-items-center justify-content-between p-3 rounded-3 mb-3" style="background: var(--surface-muted);">
                <div>
                  <div class="fw-bold fs-6" id="notesVisitTitle">Stage 12 Progress Check &amp; Attachment Polish</div>
                  <div class="small text-muted" id="notesVisitDate">August 22, 2026 • Dr. Olivia Carter, DDS</div>
                </div>
                <span class="badge bg-success-subtle text-success border border-success px-3 py-2">Verified Complete</span>
              </div>

              <div class="row g-3 mb-3">
                <div class="col-sm-4">
                  <div class="p-2 border rounded-2 text-center" style="background: var(--card-bg);">
                    <div class="small text-muted">Wear Compliance</div>
                    <strong class="text-success fs-5">22 hrs / day</strong>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="p-2 border rounded-2 text-center" style="background: var(--card-bg);">
                    <div class="small text-muted">Tracking Lag</div>
                    <strong class="text-primary fs-5">0.0 mm (Exact)</strong>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="p-2 border rounded-2 text-center" style="background: var(--card-bg);">
                    <div class="small text-muted">Attachments</div>
                    <strong class="text-dark fs-5">Intact (4,5,12,13)</strong>
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <h6 class="fw-bold small text-uppercase text-muted">Clinical Observations</h6>
                <div class="p-3 rounded-3 border" style="background: var(--card-bg); font-size: 0.9rem; line-height: 1.6;" id="notesContentText">
                  Patient Alex Morgan demonstrates exceptional compliance with aligner seaters. Maxillary lateral incisors are responding symmetrically to expansion mechanics. Anterior overjet reduced from baseline 5.5mm to 3.8mm. No interproximal friction noted. Cleaned and repolished composite attachments. Patient instructed to progress through Trays 13–18 at 10-day intervals.
                </div>
              </div>

              <div class="mb-3">
                <h6 class="fw-bold small text-uppercase text-muted">Next Treatment Steps</h6>
                <ul class="small mb-0 text-muted ps-3">
                  <li>Dispense Trays 19–24 at Oct 18 appointment.</li>
                  <li>Perform digital 3D check-in to confirm arch symmetry.</li>
                  <li>Review night retainer maintenance routine.</li>
                </ul>
              </div>

              <div class="d-flex justify-content-end gap-2 pt-2 border-top">
                <button type="button" class="btn-smart-secondary btn-sm" id="btnPrintClinicalNotes"><i class="bi bi-printer me-1"></i>Print Record</button>
                <button type="button" class="btn-smart-primary btn-sm" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Document Preview & Download Modal -->
      <div class="modal fade" id="smartDocModal" tabindex="-1" aria-labelledby="docModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div class="d-flex align-items-center gap-3">
                <div class="rounded-3 p-2 text-center" style="background: var(--blue-tint); color: var(--smart-blue); font-size: 1.5rem;">
                  <i class="bi bi-file-earmark-pdf-fill"></i>
                </div>
                <div>
                  <h5 class="modal-title fw-bold mb-0" id="docModalTitle" style="color: var(--text-primary);">Document Preview</h5>
                  <p class="small text-muted mb-0" id="docModalMeta">SmartSmile Secure Patient Archive • Verified PDF</p>
                </div>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="p-4 rounded-3 text-center border mb-3" style="background: var(--surface-muted); min-height: 260px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                <div class="rounded-circle p-3 mb-3" style="background: var(--card-bg); width: 68px; height: 68px; display: inline-flex; align-items: center; justify-content: center; box-shadow: var(--shadow-sm);">
                  <i class="bi bi-filetype-pdf text-danger fs-2"></i>
                </div>
                <h5 class="fw-bold mb-1" id="docPreviewName">3D Aligner CAD Movement Plan.pdf</h5>
                <p class="small text-muted mb-3" id="docPreviewSub">Official Orthodontic Record • Digitally Signed by Dr. Olivia Carter, DDS</p>
                
                <div class="d-inline-flex gap-3 p-2 rounded-2 border small" style="background: var(--card-bg);">
                  <span><i class="bi bi-shield-lock-fill text-success me-1"></i>256-Bit Encrypted</span>
                  <span><i class="bi bi-calendar-check me-1"></i>Generated: Oct 2026</span>
                  <span><i class="bi bi-hdd-fill me-1"></i>2.4 MB</span>
                </div>
              </div>

              <div class="d-flex justify-content-between align-items-center pt-2">
                <span class="small text-muted"><i class="bi bi-info-circle me-1"></i>Official dental document for patient Alex Morgan.</span>
                <div class="d-flex gap-2">
                  <button type="button" class="btn-smart-secondary btn-sm" id="btnDirectPrintDoc"><i class="bi bi-printer me-1"></i>Print</button>
                  <button type="button" class="btn-smart-primary btn-sm" id="btnTriggerDocDownload"><i class="bi bi-download me-1"></i>Download PDF</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo Lightbox Modal -->
      <div class="modal fade" id="smartPhotoModal" tabindex="-1" aria-labelledby="photoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold" id="photoModalLabel" style="color: var(--text-primary);">Smile Milestone Lightbox</h5>
                <p class="small text-muted mb-0" id="photoModalStage">High Definition Clinical Photography</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center p-2">
              <div class="position-relative rounded-3 overflow-hidden mb-3" style="max-height: 480px; background: #000;">
                <img id="photoModalImg" src="" alt="Smile Progress" class="img-fluid w-100 object-fit-contain" style="max-height: 460px;">
                <span class="badge bg-dark bg-opacity-75 position-absolute top-0 start-0 m-3 px-3 py-2 fs-6" id="photoModalBadge">Milestone</span>
              </div>
              <div class="text-start p-3 rounded-3" style="background: var(--surface-muted);">
                <h6 class="fw-bold mb-1" id="photoModalTitle">Arch Development &amp; Tracking</h6>
                <p class="small text-secondary mb-0" id="photoModalDesc">Clinical photograph captured under LED dental ring light during routine evaluation.</p>
              </div>
            </div>
            <div class="modal-footer border-top justify-content-between">
              <span class="small text-muted"><i class="bi bi-camera me-1"></i>High-resolution orthodontic diagnostic photo.</span>
              <button type="button" class="btn-smart-secondary btn-sm" data-bs-dismiss="modal">Close Viewer</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Payment Modal -->
      <div class="modal fade" id="smartPayModal" tabindex="-1" aria-labelledby="smartPayModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold" id="smartPayModalLabel" style="color: var(--text-primary);"><i class="bi bi-credit-card-2-front-fill me-2 text-primary"></i>Make Demo Installment Payment</h5>
                <p class="small text-muted mb-0">Secure orthodontic payment installment portal</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="p-3 rounded-3 mb-3" style="background: var(--surface-muted);">
                <div class="d-flex justify-content-between mb-1">
                  <span class="small text-muted">Installment:</span>
                  <strong class="small">Monthly Stage 4 of 8 (Active)</strong>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="small text-muted">Amount Due:</span>
                  <strong class="fs-4" style="color: var(--smart-blue);">₹8,500</strong>
                </div>
              </div>

              <form id="smartQuickPayForm">
                <div class="mb-3">
                  <label class="form-label small fw-bold">Payment Method</label>
                  <select class="form-select" id="payMethodSelect">
                    <option value="card" selected>Visa / MasterCard ending in •• 4920</option>
                    <option value="upi">UPI / Instant NetBanking</option>
                    <option value="fsa">FSA / HSA Health Account Card</option>
                  </select>
                </div>
                <div class="mb-3">
                  <label class="form-label small fw-bold">Cardholder / Account Name</label>
                  <input type="text" class="form-control" value="Alex Morgan" required>
                </div>
                <div class="row g-2 mb-3">
                  <div class="col-8">
                    <label class="form-label small fw-bold">Card Number</label>
                    <input type="text" class="form-control" value="4532 •••• •••• 4920" required>
                  </div>
                  <div class="col-4">
                    <label class="form-label small fw-bold">CVV</label>
                    <input type="password" class="form-control" value="821" maxlength="4" required>
                  </div>
                </div>
                <button type="submit" class="btn-smart-primary w-100 py-3" id="btnSubmitQuickPay">
                  Pay Now (₹8,500 Demo)
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <!-- Call Clinic Modal -->
      <div class="modal fade" id="smartCallModal" tabindex="-1" aria-labelledby="callModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold" id="callModalLabel" style="color: var(--text-primary);"><i class="bi bi-telephone-outbound-fill me-2 text-primary"></i>Call SmartSmile Clinic</h5>
                <p class="small text-muted mb-0">Direct clinic reception &amp; coordinator hotline</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="text-center p-4 rounded-3 mb-3" style="background: var(--surface-muted);">
                <div class="rounded-circle p-3 mb-2 d-inline-flex align-items-center justify-content-center" style="background: var(--card-bg); width: 64px; height: 64px;">
                  <i class="bi bi-headset fs-2" style="color: var(--smart-blue);"></i>
                </div>
                <h4 class="fw-bold mb-1" style="color: var(--text-primary);">+1 (800) 555-SMILE</h4>
                <div class="small text-muted">Clinic Extension: Ext. 402 (Dr. Olivia Carter's Team)</div>
              </div>

              <ul class="list-unstyled small mb-3 text-secondary">
                <li class="mb-2"><i class="bi bi-clock me-2 text-primary"></i><strong>Clinic Hours:</strong> Monday – Saturday: 8:00 AM – 7:00 PM</li>
                <li class="mb-2"><i class="bi bi-geo-alt me-2 text-primary"></i><strong>Location:</strong> 100 Smile Plaza, Suite 300, Medical District</li>
                <li><i class="bi bi-lightning-charge me-2 text-warning"></i><strong>Emergency After-Hours:</strong> Ext. 991 for urgent wire/attachment issues</li>
              </ul>

              <div class="d-flex gap-2">
                <button type="button" class="btn-smart-secondary flex-grow-1" id="btnCopyPhone"><i class="bi bi-copy me-1"></i>Copy Number</button>
                <a href="tel:+18005557645" class="btn-smart-primary flex-grow-1 text-center"><i class="bi bi-telephone-fill me-1"></i>Dial Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Upload Selfie Modal -->
      <div class="modal fade" id="smartUploadSelfieModal" tabindex="-1" aria-labelledby="uploadSelfieLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content border-0 shadow-lg p-3" style="background-color: var(--card-bg);">
            <div class="modal-header border-bottom">
              <div>
                <h5 class="modal-title fw-bold" id="uploadSelfieLabel" style="color: var(--text-primary);"><i class="bi bi-cloud-arrow-up-fill me-2 text-primary"></i>Upload Progress Selfie</h5>
                <p class="small text-muted mb-0">Share your latest smile photo directly with Dr. Olivia Carter</p>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form id="smartSelfieUploadForm">
                <div class="border border-2 border-dashed rounded-3 p-4 text-center mb-3" style="border-color: var(--border-color); background: var(--surface-muted); cursor: pointer;" id="selfieDropZone">
                  <i class="bi bi-camera-fill fs-1 text-primary mb-2 d-block"></i>
                  <span class="fw-bold d-block mb-1">Click to browse or take photo</span>
                  <span class="small text-muted">Supports JPG, PNG with teeth clearly visible in natural light</span>
                  <input type="file" id="selfieFileInput" accept="image/*" class="d-none">
                </div>

                <div id="selfiePreviewWrap" class="d-none mb-3 text-center">
                  <img id="selfiePreviewImg" src="" alt="Preview" class="rounded-3 shadow-sm" style="max-height: 160px;">
                  <div class="small text-success mt-1"><i class="bi bi-check-circle-fill me-1"></i>Photo selected</div>
                </div>

                <div class="row g-2 mb-3">
                  <div class="col-6">
                    <label class="form-label small fw-bold">Current Aligner Tray</label>
                    <input type="text" class="form-control" value="Tray 18 of 28" required>
                  </div>
                  <div class="col-6">
                    <label class="form-label small fw-bold">Days on Current Tray</label>
                    <input type="number" class="form-control" value="4" min="1" max="14" required>
                  </div>
                </div>

                <div class="mb-3">
                  <label class="form-label small fw-bold">Notes for Dr. Carter (Optional)</label>
                  <textarea class="form-control" rows="2" placeholder="e.g. Tray fits snugly, minor tenderness on upper left..."></textarea>
                </div>

                <button type="submit" class="btn-smart-primary w-100 py-3" id="btnSubmitSelfie">
                  Submit Selfie to Doctor
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modalWrapper);
    bindModalInternalEvents();
  }

  function bindModalInternalEvents() {
    // Copy phone button
    const copyPhoneBtn = document.getElementById('btnCopyPhone');
    if (copyPhoneBtn) {
      copyPhoneBtn.addEventListener('click', () => {
        navigator.clipboard?.writeText('+18005557645');
        showSmartToast('Number Copied!', '+1 (800) 555-SMILE copied to clipboard.', 'info');
      });
    }

    // Direct print doc
    const printDocBtn = document.getElementById('btnDirectPrintDoc');
    if (printDocBtn) {
      printDocBtn.addEventListener('click', () => {
        showSmartToast('Printing Initialized', 'Preparing document formatting for printer spooler...', 'info');
      });
    }

    // Trigger Doc Download simulation
    const downloadDocBtn = document.getElementById('btnTriggerDocDownload');
    if (downloadDocBtn) {
      downloadDocBtn.addEventListener('click', () => {
        const docName = document.getElementById('docPreviewName')?.textContent || 'Document.pdf';
        downloadDocBtn.disabled = true;
        downloadDocBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Downloading...';

        setTimeout(() => {
          downloadDocBtn.disabled = false;
          downloadDocBtn.innerHTML = '<i class="bi bi-download me-1"></i>Download PDF';
          showSmartToast('Download Completed!', `Saved "${docName}" to your local downloads folder.`, 'success');

          const modalEl = document.getElementById('smartDocModal');
          if (modalEl && window.bootstrap) {
            const modal = window.bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          }
        }, 1100);
      });
    }

    // Print clinical notes
    const printNotesBtn = document.getElementById('btnPrintClinicalNotes');
    if (printNotesBtn) {
      printNotesBtn.addEventListener('click', () => {
        showSmartToast('Clinical Chart Exported', 'Dr. Olivia Carter’s notes saved as PDF summary.', 'success');
      });
    }

    // Quick Pay Form Submit
    const quickPayForm = document.getElementById('smartQuickPayForm');
    if (quickPayForm) {
      quickPayForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btnSubmitQuickPay');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Processing Payment...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Pay Now (₹8,500 Demo)';
          }

          const modalEl = document.getElementById('smartPayModal');
          if (modalEl && window.bootstrap) {
            const modal = window.bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          }

          showSmartToast('Installment Paid ✓', '₹8,500 payment successfully recorded! Receipt #REC-7602 generated.', 'success');
        }, 1200);
      });
    }

    // Selfie file input & dropzone
    const dropZone = document.getElementById('selfieDropZone');
    const fileInput = document.getElementById('selfieFileInput');
    const previewWrap = document.getElementById('selfiePreviewWrap');
    const previewImg = document.getElementById('selfiePreviewImg');

    if (dropZone && fileInput) {
      dropZone.addEventListener('click', () => fileInput.click());
      fileInput.addEventListener('change', () => {
        if (fileInput.files && fileInput.files[0]) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (previewImg && previewWrap) {
              previewImg.src = e.target.result;
              previewWrap.classList.remove('d-none');
            }
          };
          reader.readAsDataURL(fileInput.files[0]);
        }
      });
    }

    // Selfie form submit
    const selfieForm = document.getElementById('smartSelfieUploadForm');
    if (selfieForm) {
      selfieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btnSubmitSelfie');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Uploading to Dr. Carter...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Submit Selfie to Doctor';
          }

          const modalEl = document.getElementById('smartUploadSelfieModal');
          if (modalEl && window.bootstrap) {
            const modal = window.bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          }

          selfieForm.reset();
          if (previewWrap) previewWrap.classList.add('d-none');

          showSmartToast('Progress Selfie Received!', 'Dr. Olivia Carter will review your tooth alignment within 24 hours.', 'success');
        }, 1200);
      });
    }
  }

  /* ==========================================================================
     3. Clickable Overview Cards on dashboard.html
     ========================================================================== */
  function initClickableCards() {
    const statCards = document.querySelectorAll('.stat-card');
    if (!statCards.length) return;

    statCards.forEach((card, index) => {
      card.classList.add('clickable-card');
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');

      let destination = '';
      let title = '';

      if (index === 0) {
        destination = 'appointments.html';
        title = 'Manage your check-in appointments';
      } else if (index === 1) {
        destination = 'treatment-progress.html';
        title = 'View full 28-stage treatment progress';
      } else if (index === 2) {
        destination = 'payment-installments.html';
        title = 'Review payment ledger & receipts';
      } else if (index === 3) {
        destination = 'treatment-plan.html';
        title = 'View clinical CAD treatment plan';
      }

      card.setAttribute('title', title);

      card.addEventListener('click', () => {
        if (destination) window.location.href = destination;
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (destination) window.location.href = destination;
        }
      });
    });
  }

  /* ==========================================================================
     4. Appointment Actions (Reschedule, Cancel, View Notes, Rebook)
     ========================================================================== */
  function initAppointmentActions() {
    // Set min date for reschedule
    const dateInput = document.getElementById('newAppointmentDate');
    if (dateInput) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      dateInput.min = tomorrow.toISOString().split('T')[0];
      dateInput.value = tomorrow.toISOString().split('T')[0];
    }

    // Delegate click handler for appointment buttons across dashboard & appointments.html
    document.addEventListener('click', (e) => {
      const target = e.target.closest('button, a');
      if (!target) return;

      const btnText = (target.textContent || '').trim().toLowerCase();

      // RESCHEDULE TRIGGER
      if (
        target.matches('[data-action="reschedule"]') ||
        target.classList.contains('btn-reschedule') ||
        (btnText === 'reschedule' && !target.closest('.modal'))
      ) {
        e.preventDefault();
        openRescheduleModal(target);
        return;
      }

      // CANCEL TRIGGER
      if (
        target.matches('[data-action="cancel-appointment"]') ||
        target.classList.contains('btn-cancel-appt') ||
        (btnText === 'cancel' && !target.closest('.modal'))
      ) {
        e.preventDefault();
        openCancelModal(target);
        return;
      }

      // VIEW NOTES TRIGGER
      if (
        target.matches('[data-action="view-notes"]') ||
        target.classList.contains('btn-view-notes') ||
        btnText.includes('view notes')
      ) {
        e.preventDefault();
        openClinicalNotesModal(target);
        return;
      }

      // REBOOK TRIGGER
      if (
        target.matches('[data-action="rebook"]') ||
        target.classList.contains('btn-rebook') ||
        btnText.includes('rebook')
      ) {
        e.preventDefault();
        openRebookModal(target);
        return;
      }

      // CALL CLINIC TRIGGER
      if (
        target.matches('[data-action="call-clinic"]') ||
        btnText.includes('call clinic')
      ) {
        e.preventDefault();
        openCallClinicModal();
        return;
      }

      // UPLOAD SELFIE TRIGGER
      if (
        target.matches('[data-action="upload-selfie"]') ||
        btnText.includes('upload progress selfie')
      ) {
        e.preventDefault();
        openUploadSelfieModal();
        return;
      }
    });

    // Handle Reschedule form submission
    const reschedForm = document.getElementById('smartRescheduleForm');
    if (reschedForm) {
      reschedForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('btnSubmitReschedule');
        const newDate = document.getElementById('newAppointmentDate')?.value || '';
        const newTime = document.getElementById('newAppointmentTime')?.value || '';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Confirming...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Confirm Reschedule';
          }

          const modalEl = document.getElementById('smartRescheduleModal');
          if (modalEl && window.bootstrap) {
            const modal = window.bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          }

          // Format readable date
          let readableDate = newDate;
          try {
            const d = new Date(newDate + 'T00:00:00');
            readableDate = d.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
          } catch (_) {}

          showSmartToast(
            'Appointment Rescheduled!',
            `New check-in confirmed for ${readableDate} at ${newTime} with Dr. Olivia Carter.`,
            'success'
          );

          // Update upcoming appointment card on dashboard if present
          const upcomingCardDate = document.querySelector('.smart-card .badge.bg-primary + h4 + .small.text-muted');
          if (upcomingCardDate) {
            upcomingCardDate.innerHTML = `<i class="bi bi-clock me-1"></i> ${readableDate} • ${newTime} (30 min)`;
          }
        }, 900);
      });
    }

    // Handle Cancellation Confirm button
    const confirmCancelBtn = document.getElementById('btnConfirmCancelAppt');
    if (confirmCancelBtn) {
      confirmCancelBtn.addEventListener('click', () => {
        const modalEl = document.getElementById('smartCancelModal');
        if (modalEl && window.bootstrap) {
          const modal = window.bootstrap.Modal.getInstance(modalEl);
          if (modal) modal.hide();
        }

        const targetCard = dashboardState.targetApptCard;
        if (targetCard) {
          const badge = targetCard.querySelector('.badge');
          if (badge) {
            badge.className = 'badge bg-danger-subtle text-danger border border-danger px-3 py-2';
            badge.textContent = 'Cancelled';
          }
          dashboardState.lastCancelledAppt = {
            card: targetCard,
            prevHtml: targetCard.innerHTML
          };
        }

        showSmartToast(
          'Appointment Cancelled',
          'Oct 18 check-in has been cancelled. You can rebook anytime.',
          'warning',
          8000,
          {
            text: 'Undo Cancellation',
            callback: () => {
              if (dashboardState.lastCancelledAppt && dashboardState.lastCancelledAppt.card) {
                const badge = dashboardState.lastCancelledAppt.card.querySelector('.badge');
                if (badge) {
                  badge.className = 'badge bg-success-subtle text-success border border-success px-3 py-2';
                  badge.textContent = 'Confirmed';
                }
                showSmartToast('Restored!', 'Your appointment has been reinstated.', 'success');
              }
            }
          }
        );
      });
    }
  }

  function openRescheduleModal(btnElement) {
    const card = btnElement.closest('.smart-card') || btnElement.closest('.p-3');
    dashboardState.targetApptCard = card;

    const modalEl = document.getElementById('smartRescheduleModal');
    if (modalEl && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  function openCancelModal(btnElement) {
    const card = btnElement.closest('.smart-card') || btnElement.closest('.p-3');
    dashboardState.targetApptCard = card;

    const modalEl = document.getElementById('smartCancelModal');
    if (modalEl && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  function openClinicalNotesModal(btnElement) {
    const card = btnElement.closest('.smart-card');
    const titleEl = card ? card.querySelector('.fw-bold:not(.text-muted)') : null;
    const dateEl = card ? card.querySelector('.col-md-3 .fw-bold') : null;

    if (titleEl && document.getElementById('notesVisitTitle')) {
      document.getElementById('notesVisitTitle').textContent = titleEl.textContent;
    }
    if (dateEl && document.getElementById('notesVisitDate')) {
      document.getElementById('notesVisitDate').textContent = dateEl.textContent + ' • Dr. Olivia Carter, DDS';
    }

    const modalEl = document.getElementById('smartClinicalNotesModal');
    if (modalEl && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  function openRebookModal() {
    const adjModal = document.getElementById('bookAdjustmentModal');
    if (adjModal && window.bootstrap) {
      const modal = new window.bootstrap.Modal(adjModal);
      modal.show();
    } else {
      window.location.href = 'appointments.html';
    }
  }

  function openCallClinicModal() {
    const modalEl = document.getElementById('smartCallModal');
    if (modalEl && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  function openUploadSelfieModal() {
    const modalEl = document.getElementById('smartUploadSelfieModal');
    if (modalEl && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalEl);
      modal.show();
    }
  }

  /* ==========================================================================
     5. Chat Simulation Engine (messages.html)
     ========================================================================== */
  function initChatSystem() {
    const chatContainer = document.getElementById('chatMessagesContainer');
    const chatForm = document.getElementById('chatSendForm');
    const chatInput = document.getElementById('chatInput');
    if (!chatContainer || !chatForm || !chatInput) return;

    // Contact thread switching
    const contactLinks = document.querySelectorAll('.list-group-item');
    contactLinks.forEach((link, idx) => {
      link.classList.add('chat-thread-item');
      link.addEventListener('click', (e) => {
        e.preventDefault();
        contactLinks.forEach((l) => l.classList.remove('active', 'active-thread'));
        link.classList.add('active', 'active-thread');

        // Identify thread
        let threadKey = 'dr-carter';
        if (idx === 1 || link.textContent.includes('Sarah') || link.textContent.includes('Coordinator')) {
          threadKey = 'coordinator';
        } else if (idx === 2 || link.textContent.includes('Billing')) {
          threadKey = 'billing';
        }

        switchChatThread(threadKey);
      });
    });

    // Form submit sends message
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = chatInput.value.trim();
      if (!text) return;

      const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      // Append patient message
      const patientMsgHtml = `
        <div class="d-flex justify-content-end mb-3">
          <div class="p-3 rounded-4 shadow-sm" style="max-width: 75%; background-color: var(--smart-blue); color: #ffffff;">
            <p class="mb-1 text-white">${escapeHtml(text)}</p>
            <div class="text-end" style="font-size: 0.72rem; opacity: 0.85;">${timeString} • Sent</div>
          </div>
        </div>
      `;
      chatContainer.insertAdjacentHTML('beforeend', patientMsgHtml);
      chatInput.value = '';
      chatContainer.scrollTop = chatContainer.scrollHeight;

      // Simulated typing indicator & response
      const activeThread = dashboardState.threads[dashboardState.activeThread] || dashboardState.threads['dr-carter'];
      const replies = activeThread.replies;
      const replyText = replies[Math.floor(Math.random() * replies.length)];

      setTimeout(() => {
        const replyHtml = `
          <div class="d-flex justify-content-start mb-3">
            <div class="p-3 rounded-4 shadow-sm" style="max-width: 75%; background-color: var(--card-bg); border: 1px solid var(--border-color);">
              <div class="fw-bold mb-1" style="color: var(--smart-blue); font-size: 0.85rem;">${escapeHtml(activeThread.name)}</div>
              <p class="mb-1" style="color: var(--text-primary);">${escapeHtml(replyText)}</p>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
            </div>
          </div>
        `;
        chatContainer.insertAdjacentHTML('beforeend', replyHtml);
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }, 1100);
    });
  }

  function switchChatThread(threadKey) {
    dashboardState.activeThread = threadKey;
    const thread = dashboardState.threads[threadKey];
    if (!thread) return;

    // Update Header
    const headerImg = document.querySelector('.col-md-8 .border-bottom img');
    const headerName = document.querySelector('.col-md-8 .border-bottom .fw-bold');
    const headerStatus = document.querySelector('.col-md-8 .border-bottom .small, .col-md-8 .border-bottom div[style*="font-size: 0.72rem"]');

    if (headerImg && thread.avatar) headerImg.src = thread.avatar;
    if (headerName) headerName.textContent = thread.name;
    if (headerStatus) headerStatus.innerHTML = `<i class="bi bi-circle-fill text-success me-1"></i> ${thread.status}`;

    // Render Messages
    const container = document.getElementById('chatMessagesContainer');
    if (!container) return;

    let html = '';
    thread.messages.forEach((msg) => {
      if (msg.sender === 'patient') {
        html += `
          <div class="d-flex justify-content-end mb-3">
            <div class="p-3 rounded-4 shadow-sm" style="max-width: 75%; background-color: var(--smart-blue); color: #ffffff;">
              <p class="mb-1 text-white">${escapeHtml(msg.text)}</p>
              <div class="text-end" style="font-size: 0.72rem; opacity: 0.85;">${escapeHtml(msg.time)}</div>
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="d-flex justify-content-start mb-3">
            <div class="p-3 rounded-4 shadow-sm" style="max-width: 75%; background-color: var(--card-bg); border: 1px solid var(--border-color);">
              <div class="fw-bold mb-1" style="color: var(--smart-blue); font-size: 0.85rem;">${escapeHtml(msg.name)}</div>
              <p class="mb-1" style="color: var(--text-primary);">${escapeHtml(msg.text)}</p>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${escapeHtml(msg.time)}</div>
            </div>
          </div>
        `;
      }
    });

    container.innerHTML = html;
    container.scrollTop = container.scrollHeight;

    showSmartToast('Conversation Loaded', `Switched to ${thread.name}`, 'info', 2200);
  }

  /* ==========================================================================
     6. Documents Actions (View & Download)
     ========================================================================== */
  function initDocumentActions() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.doc-action-btn, [data-doc]');
      if (!btn) return;

      e.preventDefault();
      const docName = btn.getAttribute('data-doc') || 'Document.pdf';
      const isDownload = (btn.textContent || '').toLowerCase().includes('download');

      const modalTitle = document.getElementById('docPreviewName');
      if (modalTitle) modalTitle.textContent = docName;

      if (isDownload) {
        showSmartToast('Preparing Download', `Generating secure download token for "${docName}"...`, 'info', 1800);
        setTimeout(() => {
          showSmartToast('Download Ready', `File "${docName}" downloaded successfully.`, 'success');
        }, 1200);
      } else {
        const modalEl = document.getElementById('smartDocModal');
        if (modalEl && window.bootstrap) {
          const modal = new window.bootstrap.Modal(modalEl);
          modal.show();
        }
      }
    });
  }

  /* ==========================================================================
     7. Treatment Photos Actions (Lightbox Zoom)
     ========================================================================== */
  function initTreatmentPhotoActions() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;

      const btnText = (btn.textContent || '').trim().toLowerCase();
      if (btnText === 'enlarge' || btn.matches('[data-action="enlarge-photo"]')) {
        e.preventDefault();
        const card = btn.closest('.smart-card');
        const img = card ? card.querySelector('img') : null;
        const title = card ? card.querySelector('h3') : null;
        const desc = card ? card.querySelector('p') : null;
        const badge = card ? card.querySelector('.badge') : null;

        const modalImg = document.getElementById('photoModalImg');
        const modalTitle = document.getElementById('photoModalTitle');
        const modalDesc = document.getElementById('photoModalDesc');
        const modalBadge = document.getElementById('photoModalBadge');

        if (modalImg && img) modalImg.src = img.src;
        if (modalTitle && title) modalTitle.textContent = title.textContent;
        if (modalDesc && desc) modalDesc.textContent = desc.textContent;
        if (modalBadge && badge) modalBadge.textContent = badge.textContent;

        const modalEl = document.getElementById('smartPhotoModal');
        if (modalEl && window.bootstrap) {
          const modal = new window.bootstrap.Modal(modalEl);
          modal.show();
        }
      }
    });
  }

  /* ==========================================================================
     8. Quick Payment Actions (Pay Demo on dashboard & Installments)
     ========================================================================== */
  function initQuickPaymentActions() {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('a, button');
      if (!btn) return;

      const btnText = (btn.textContent || '').trim().toLowerCase();
      if (btnText === 'pay demo' && !btn.closest('.modal')) {
        e.preventDefault();
        const modalEl = document.getElementById('smartPayModal');
        if (modalEl && window.bootstrap) {
          const modal = new window.bootstrap.Modal(modalEl);
          modal.show();
        }
      }
    });
  }

  /* ==========================================================================
     9. Profile Form Submission Interactions (profile.html)
     ========================================================================== */
  function initProfileFormActions() {
    const profileForms = document.querySelectorAll('main.dashboard-main form');
    profileForms.forEach((form) => {
      // Avoid overriding chat or modal forms
      if (form.id === 'chatSendForm' || form.id === 'adjustmentBookingForm') return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const origText = submitBtn ? submitBtn.innerHTML : 'Save';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Saving...';
        }

        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
          }

          if (form.querySelector('input[type="password"]')) {
            showSmartToast('Password Updated', 'Your patient portal credentials have been securely updated.', 'success');
            form.reset();
          } else {
            showSmartToast('Profile Saved', 'Your contact info and notification preferences have been saved.', 'success');
          }
        }, 800);
      });
    });
  }

  /* ==========================================================================
     10. Roadmap Step Interactivity (dashboard.html & treatment-progress.html)
     ========================================================================== */
  function initRoadmapInteractions() {
    const roadmapItems = document.querySelectorAll('.dashboard-main ul.list-unstyled li');
    roadmapItems.forEach((item) => {
      item.style.cursor = 'pointer';
      item.setAttribute('title', 'Click to view phase breakdown');
      item.addEventListener('click', () => {
        const text = item.textContent.trim();
        showSmartToast('Stage Details', text, 'info', 3200);
      });
    });
  }

  /* ==========================================================================
     11. Adjustment Booking Form Modal
     ========================================================================== */
  function initAdjustmentBooking() {
    const adjForm = document.getElementById('adjustmentBookingForm');
    if (!adjForm) return;

    adjForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const modalEl = document.getElementById('bookAdjustmentModal');
      if (modalEl && window.bootstrap) {
        const modal = window.bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
      }

      showSmartToast(
        'Adjustment Requested!',
        'Dr. Olivia Carter’s clinic team will contact you to confirm your adjustment time slot.',
        'success'
      );
      adjForm.reset();
    });
  }

  /* Utility function to escape HTML */
  function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.innerText = str;
    return div.innerHTML;
  }
})();
