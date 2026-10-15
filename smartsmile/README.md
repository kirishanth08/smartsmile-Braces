# SmartSmile — Orthodontic & Braces Clinic Website Template

> **“Confident Smiles Start Here.”**  
> A premium, production-quality, marketplace-ready HTML5 website template architected exclusively for modern orthodontic and braces clinics, clear aligner providers, and digital smile studios.

---

## 💎 Brand Identity & Color Palette

SmartSmile adheres to an exacting, healthcare-calibrated color balance designed to convey warmth, clinical precision, and technological excellence:

| Color Name | Hex Code | Visual Hierarchy | Role & Usage |
| :--- | :--- | :--- | :--- |
| **Warm Ivory** | `#F3F3E0` | 40% | Main page canvas, soft content sections, dark mode body text |
| **White** | `#FFFFFF` | 25% | Card surfaces, interactive panels, navigation background |
| **Smart Blue** | `#27548A` | 20% | Primary buttons, active nav indicators, links, clinical icons |
| **Deep Navy** | `#183B4E` | 10% | Footer, dark editorial sections, headings, dark mode surface |
| **Smile Gold** | `#DDA853` | 5% | Signature accent, milestones, badges, highlights, CTA accents |

---

## 🚀 Strict Technology Compliance

- **HTML5**: Semantic, accessible markup with OpenGraph SEO metadata.
- **CSS3 / Vanilla CSS**: Zero Tailwind, zero preprocessors required. Fully customized Bootstrap 5 grid/components.
- **Bootstrap 5 (v5.3.3)**: Utilized strictly for responsive grid, containers, offcanvas, modals, and accordion components.
- **Vanilla JavaScript**: 100% clean, modular vanilla scripts (Zero jQuery, React, Vue, Angular, or external chart libraries).
- **Google Fonts**: Headings in *Plus Jakarta Sans* (`wght@400;600;700;800`) and body in *Inter* (`wght@300;400;500;600;700`).
- **Icons**: *Bootstrap Icons* (v1.11.3) + Custom Vector Inline SVGs.

---

## 📂 Project Directory Structure

```text
smartsmile/
├── index.html                   # Home 1 (Welcoming, Smile Transformation Focus)
├── home-2.html                  # Home 2 (Clinical, Editorial & Service Focus)
├── about.html                   # About Us & Clinical Philosophy
├── treatments.html              # All Orthodontic Treatments & Interactive Filter
├── treatment-details.html       # Clear Aligners Deep Dive & FAQ Accordion
├── doctors.html                 # Orthodontic Specialists & Live Filter
├── doctor-details.html          # Dr. Olivia Carter Profile & Schedule
├── before-after.html            # Draggable Vanilla JS Before/After Showcase
├── pricing.html                 # Transparent Costs & 0% Installments
├── consultation.html            # Consultation Booking Flow & Live Summary
├── blog.html                    # Orthodontic Patient Guides & Search
├── blog-details.html            # In-Depth Clinical Article & FAQ
├── contact.html                 # Location, Hours & Interactive Contact Form
│
├── auth/
│   ├── login.html               # Patient Portal Login Demo
│   ├── register.html            # Patient Account Registration Demo
│   └── forgot-password.html     # Password Reset Demo
│
├── patient-dashboard/
│   ├── dashboard.html           # My SmartSmile Overview & Key Stats
│   ├── appointments.html        # Tabs (Upcoming, Completed, Cancelled)
│   ├── treatment-progress.html  # 7-Stage Interactive Journey Milestone
│   ├── treatment-photos.html    # Clinical Progress Photo Timeline
│   ├── payment-installments.html# Installment Ledger & Demo Payment Modal
│   ├── treatment-plan.html      # Biomechanical Objectives & Wear Guidelines
│   ├── messages.html            # Direct Chat Simulation with Clinic Team
│   ├── documents.html           # Document PDF Library & Consent Records
│   └── profile.html             # Patient Profile & Notification Settings
│
├── utility/
│   ├── 404.html                 # Creative 404 Error Page
│   ├── coming-soon.html         # Live Countdown Timer & Newsletter
│   └── maintenance.html         # Scheduled Maintenance & On-Call Contact
│
├── assets/
│   ├── css/
│   │   ├── style.css            # Primary Theme & Design System
│   │   ├── responsive.css       # Mobile-first Media Queries (320px–1920px)
│   │   └── rtl.css              # Bidirectional Arabic / Hebrew Support
│   ├── js/
│   │   ├── main.js              # Before/After Slider, Sticky Nav, Back to Top
│   │   ├── theme.js             # Dark / Light Mode with localStorage
│   │   ├── rtl.js               # RTL / LTR Toggle with localStorage
│   │   ├── forms.js             # Validation Feedback Handlers
│   │   ├── appointments.js      # Consultation Flow & Live Summary Updater
│   │   ├── treatments.js        # Service Filter Interactions
│   │   ├── doctors.js           # Specialist Search & Category Filter
│   │   ├── gallery.js           # Lightbox & Category Filtering
│   │   ├── progress.js          # 7-Stage Milestone Journey Interaction
│   │   ├── payments.js          # Ledger Filtering & Payment Simulation
│   │   └── dashboard.js         # Chat Simulation & Adjustment Modal
│   ├── icons/
│   │   └── favicon.svg          # Custom Orthodontic Bracket & Smile Arc Icon
│   └── images/
└── README.md
```

---

## 🌟 Key Features & Interactive Demos

1. **Custom Draggable Before / After Slider**:
   - Zero external libraries. Built purely in Vanilla JS.
   - Smooth mouse drag, responsive touch dragging on mobile phones, and keyboard accessibility (Left/Right arrows).
   - Fully compatible with RTL layout.
2. **True Dark Mode System**:
   - Toggles `data-bs-theme="dark"` and custom class.
   - Preserves state across visits via `localStorage`.
   - Uses `#183B4E` base navy with luminous text and gold accents.
3. **True RTL (Right-to-Left) Support**:
   - Bidirectional flipping via `dir="rtl"` and dedicated `rtl.css`.
   - Automatically repositions navigation, cards, tables, sliders, and sidebar.
4. **Interactive Patient Companion Portal ("My SmartSmile")**:
   - 7-Stage Treatment Journey track (`START` → `Consultation` → `3D Plan` → `Started` → `Alignment 62%` → `Refinement` → `Retention` → `Graduation`).
   - Appointment booking modal and tab views.
   - Installment calculator & simulated checkout modal.
   - Direct messaging simulation with instant coordinator response.
5. **Noticeable CTA Size Difference**:
   - Primary CTA: Bold, high-visibility, padded pill button (`0.85rem 1.85rem`) in Smart Blue with subtle hover glow.
   - Secondary CTA: Medium, outline pill button (`0.65rem 1.4rem`) in Smart Blue or Warm Ivory.
6. **Strict Uniform Card Alignments**:
   - Built with flex layouts (`d-flex flex-column`) ensuring card titles, tags, and action buttons align precisely on the same horizontal plane.

---

## 🔒 Medical Content Safety Disclaimer

All clinical timelines, simulated patient records, and fee estimates in this template are provided for demonstration and website template purposes. In live deployments, all diagnostic claims and timelines must be customized to reflect the specific clinical policies and legal credentials of the licensing dental practice.

---

© 2026 SmartSmile Orthodontic & Braces Clinic. Designed for ThemeForest / TemplateMonster Commercial Distribution.
