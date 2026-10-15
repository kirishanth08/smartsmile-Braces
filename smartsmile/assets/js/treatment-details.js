/**
 * SmartSmile Orthodontics — Dynamic Treatment Details Renderer
 * Renders unique clinical content, hero, biomechanics, benefits, roadmap, and FAQs
 * based on the ?id= URL parameter.
 */
(function () {
  'use strict';

  const TREATMENTS_DATA = {
    'metal-braces': {
      title: 'Traditional Metal Braces | SmartSmile Orthodontic Clinic',
      meta: 'High-grade stainless steel metal braces for comprehensive malocclusion correction. Learn about archwire mechanics, benefits, stages, and FAQs.',
      badge: '<i class="bi bi-gear-fill"></i> Fixed Appliance Mechanics',
      duration: '<i class="bi bi-clock-history"></i> Est. 18 to 24 Months*',
      heroTitle: 'TRADITIONAL METAL BRACES THERAPY.',
      heroDesc: 'Durable medical-grade stainless steel brackets engineered with low-profile contours to exert maximum three-dimensional control over complex crowding and severe rotations.',
      heroImage: 'assets/images/treatment-metal-braces.jpg',
      heroImageAlt: 'Traditional Metal Braces on Dental Model',
      primaryCta: 'Book Braces Assessment',
      pricingCta: 'View Braces Pricing',
      clinicalNote: 'Stainless steel brackets deliver constant biomechanical torque. Exact duration depends on individual malocclusion severity and skeletal density.',
      howSubtitle: 'Biomechanics & Archwire Tension',
      howTitle: 'HOW METAL BRACES WORK.',
      howDesc: 'Engineered using high-tensile nickel-titanium shape memory archwires seated into precision-milled bracket slots to deliver controlled 3D tooth movement.',
      howSteps: [
        {
          icon: 'bi-grid-3x3-gap-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. Computerized Indirect Bonding',
          desc: 'Brackets are positioned on a digital 3D model with 0.1mm accuracy before being transferred to teeth using custom placement trays.'
        },
        {
          icon: 'bi-arrow-repeat',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. Progressive Archwire Stages',
          desc: 'We transition through light flexible NiTi leveling wires to rigid stainless steel finishing wires, controlling tipping, torque, and rotation.'
        },
        {
          icon: 'bi-shield-check',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Precision Intermaxillary Elastics',
          desc: 'Custom elastic configurations coordinate upper and lower dental arches, establishing a harmonious Class I functional occlusion.'
        }
      ],
      benefitsSubtitle: 'Strength & Predictability',
      benefitsTitle: 'THE METAL BRACES ADVANTAGES.',
      benefitsDesc: 'Time-tested mechanics capable of resolving the most complex anatomical and skeletal bite anomalies.',
      benefits: [
        { icon: 'bi-shield-fill-check', color: 'text-primary', title: 'Unbeatable Mechanical Strength', desc: 'Crafted from surgical stainless steel that resists fracture even under strong chewing forces.' },
        { icon: 'bi-arrows-angle-contract', color: 'text-warning', title: 'Maximum Rotational Force', desc: 'Full 3D control to bring impacted teeth into the arch and resolve severe crowded rotations.' },
        { icon: 'bi-palette-fill', color: 'text-primary', title: 'Customizable Color Ties', desc: 'Patients can choose from 24 vibrant elastic colors at every routine adjustment visit.' },
        { icon: 'bi-check2-circle', color: 'text-warning', title: 'Zero Compliance Worry', desc: 'Fixed onto teeth 24/7, so progress never pauses due to forgotten aligner wear.' },
        { icon: 'bi-wallet2', color: 'text-primary', title: 'Most Cost-Effective Investment', desc: 'Provides the clinic\'s most affordable entry point for comprehensive comprehensive orthodontic correction.' },
        { icon: 'bi-speedometer2', color: 'text-warning', title: 'Continuous Predictable Progress', desc: 'Continuous mechanical vector ensures constant biological remodeling of the alveolar bone.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'YOUR BRACES JOURNEY STEP BY STEP.',
      journeyDesc: 'Progression roadmap for a traditional metal braces patient.',
      journeySteps: [
        { num: '01', title: 'Scan & Bonding', timing: 'Week 1', desc: 'Intraoral imaging, bracket bonding, and insertion of the first flexible leveling archwire.' },
        { num: '02', title: 'Archwire Leveling', timing: 'Months 2–6', desc: 'Regular 6–8 week check-ins to advance wire gauges and guide teeth into parallel alignments.' },
        { num: '03', title: 'Space Closure & Bite Seating', timing: 'Months 7–18', desc: 'Intermaxillary elastics close extraction spaces or diastemas and seat the posterior bite.' },
        { num: '04', title: 'Debonding & Retention', timing: 'Final Phase', desc: 'Careful removal of brackets, enamel polishing, and delivery of custom SmartSmile retainers.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'TRADITIONAL METAL BRACES FAQS.',
      faqDesc: 'Answers to common questions regarding comfort, care, and food guidelines.',
      faqs: [
        {
          q: 'How do metal braces compare to clear aligners in complex cases?',
          a: 'Metal braces offer superior three-dimensional rotational force and root uprighting capabilities, making them the preferred gold standard for severe crowding, severe deep bites, and impacted canines.'
        },
        {
          q: 'Do metal brackets hurt when adjusted?',
          a: 'Patients typically feel mild tenderness for 48 to 72 hours after an archwire change as cellular remodeling begins. Modern nickel-titanium wires produce gentle continuous forces rather than sharp tension.'
        },
        {
          q: 'What foods should I avoid with metal braces?',
          a: 'To avoid broken brackets, avoid hard foods (nuts, hard candies, ice), sticky foods (chewing gum, caramel), and bite into apples or corn on the cob by cutting them into smaller pieces first.'
        },
        {
          q: 'Can I choose colors for my braces?',
          a: 'Yes! At every adjustment appointment (every 6 to 8 weeks), you can pick from dozens of colored elastic ligatures or opt for discreet silver ties to match the bracket finish.'
        }
      ],
      ctaSubtitle: 'Schedule Your Consultation',
      ctaTitle: 'READY TO START YOUR BRACES JOURNEY?',
      ctaDesc: 'Book an in-depth clinical consultation with our board-certified orthodontists and discover your customized treatment blueprint.'
    },

    'ceramic-braces': {
      title: 'Ceramic Tooth-Colored Braces | SmartSmile Orthodontic Clinic',
      meta: 'Discreet translucent ceramic braces blending fixed bracket mechanics with aesthetic subtlety. Read about materials, care, and FAQs.',
      badge: '<i class="bi bi-gem"></i> Aesthetic Brackets',
      duration: '<i class="bi bi-clock-history"></i> Est. 16 to 22 Months*',
      heroTitle: 'CERAMIC TOOTH-COLORED BRACES.',
      heroDesc: 'Engineered from stain-resistant monocrystalline alumina that blends seamlessly with your tooth shade, delivering fixed-appliance power without metallic visibility.',
      heroImage: 'assets/images/treatment-ceramic-braces.jpg',
      heroImageAlt: 'Aesthetic Ceramic Braces on Patient Smile',
      primaryCta: 'Book Ceramic Assessment',
      pricingCta: 'View Ceramic Pricing',
      clinicalNote: 'High-density polycrystalline brackets resist cosmetic discoloration. Optimal for adults and teens desiring discreet fixed mechanics.',
      howSubtitle: 'Material Science & Aesthetics',
      howTitle: 'HOW CERAMIC BRACES WORK.',
      howDesc: 'Translucent sapphire alumina brackets bond securely to enamel, transmitting biomechanical vectors through tooth-colored or rhodium-coated aesthetic wires.',
      howSteps: [
        {
          icon: 'bi-gem',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '1. Monocrystalline Alumina Brackets',
          desc: 'High-clarity ceramic brackets absorb and refract the underlying tooth color for near-invisible presentation.'
        },
        {
          icon: 'bi-eye-slash-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '2. Rhodium-Coated Aesthetic Archwires',
          desc: 'Special matte-finished wires complement ceramic brackets while exerting precise bio-compatible forces.'
        },
        {
          icon: 'bi-shield-check',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '3. Stain-Resistant Glaze',
          desc: 'Ultra-smooth microscopic surface coat prevents absorption of pigments from common beverages.'
        }
      ],
      benefitsSubtitle: 'Discretion & Performance',
      benefitsTitle: 'THE CERAMIC ADVANTAGES.',
      benefitsDesc: 'The power of fixed orthodontics combined with discreet visual appearance.',
      benefits: [
        { icon: 'bi-eye-slash', color: 'text-primary', title: 'Virtually Invisible at Speaking Distance', desc: 'Blends with natural tooth coloration, letting you present and smile with complete ease.' },
        { icon: 'bi-gear-fill', color: 'text-warning', title: 'Fixed Appliance Precision', desc: 'Solves complex bites, rotations, and vertical discrepancies without removable tray non-compliance.' },
        { icon: 'bi-shield-check', color: 'text-primary', title: 'Stain-Resistant Bracket Material', desc: 'High-density ceramic does not yellow over time under normal dietary conditions.' },
        { icon: 'bi-heart-fill', color: 'text-warning', title: 'Smooth Contoured Comfort', desc: 'Rounded microscopic profile reduces soft-tissue friction on lips and cheeks.' },
        { icon: 'bi-briefcase-fill', color: 'text-primary', title: 'Professional Choice', desc: 'Favored by corporate executives, educators, and working adults who need fixed mechanics.' },
        { icon: 'bi-lightning-fill', color: 'text-warning', title: 'Proven Treatment Velocity', desc: 'Achieves movement timelines comparable to traditional stainless steel brackets.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'YOUR CERAMIC BRACES JOURNEY.',
      journeyDesc: 'Progression roadmap for adult or teen ceramic braces therapy.',
      journeySteps: [
        { num: '01', title: 'Diagnostic Scan & Bonding', timing: 'Week 1', desc: '3D tooth scanning, shade matching, and custom indirect bonding of ceramic brackets.' },
        { num: '02', title: 'Aesthetic Wire Progression', timing: 'Months 2–6', desc: 'Gentle leveling with frosted aesthetic wires to smoothly uncrowd anterior teeth.' },
        { num: '03', title: 'Bite Seating & Detailing', timing: 'Months 7–16', desc: 'Fine-tuning angulations and arch relationships with discreet clear intermaxillary ties.' },
        { num: '04', title: 'Debonding & Retention', timing: 'Final Phase', desc: 'Ultrasonic bracket removal, enamel polishing, and delivery of custom clear retainers.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'CERAMIC BRACES FAQS.',
      faqDesc: 'Frequently asked questions regarding ceramic bracket durability and staining.',
      faqs: [
        {
          q: 'Do ceramic braces stain from coffee, tea, or curry?',
          a: 'The ceramic bracket bodies themselves are made from impervious monocrystalline alumina and will never stain. However, clear elastic ligature ties can discolor over several weeks; these are swapped fresh at every adjustment visit.'
        },
        {
          q: 'Are ceramic braces as strong as metal braces?',
          a: 'Modern ceramic brackets are exceptionally strong and engineered for heavy masticatory loads. While slightly more brittle than steel if subjected to direct blunt trauma, breakages are extremely rare in regular daily life.'
        },
        {
          q: 'Is ceramic braces treatment time longer than metal?',
          a: 'In modern orthodontics with low-friction bracket slots, ceramic braces treatment times are practically identical to metal braces for almost all cases.'
        },
        {
          q: 'Can I get ceramic brackets on top teeth and metal on bottom teeth?',
          a: 'Yes! Many patients choose "dual aesthetic" treatment: clear ceramic brackets on the visible upper smile arc, and low-profile metal brackets on the lower teeth.'
        }
      ],
      ctaSubtitle: 'Schedule Your Consultation',
      ctaTitle: 'EXPERIENCE DISCREET FIXED ORTHODONTICS.',
      ctaDesc: 'Schedule your comprehensive digital smile consultation and explore translucent ceramic brackets tailored to your lifestyle.'
    },

    'clear-aligners': {
      title: 'SmartSmile Clear Aligners Therapy | SmartSmile Orthodontic Clinic',
      meta: 'Discreet transparent clear aligners custom laser-trimmed for predictable tooth alignment without wires. Learn about stages, care, and FAQs.',
      badge: '<i class="bi bi-gem"></i> Discreet Orthodontics',
      duration: '<i class="bi bi-clock-history"></i> Est. 9 to 18 Months*',
      heroTitle: 'SMARTSMILE CLEAR ALIGNERS THERAPY.',
      heroDesc: 'Straighten your teeth with virtually invisible, removable medical-grade aligners customized with computer precision for your exact dental anatomy.',
      heroImage: 'assets/images/treatment-clear-aligners.jpg',
      heroImageAlt: 'Clear Aligner Trays with Precision Attachment Sites',
      primaryCta: 'Book Aligner Assessment',
      pricingCta: 'View Aligner Pricing',
      clinicalNote: 'Exact treatment duration varies depending on individual malocclusion severity and adherence to the recommended 20–22 hour daily wear protocol.',
      howSubtitle: 'Biomechanics & Technology',
      howTitle: 'HOW CLEAR ALIGNERS WORK.',
      howDesc: 'Engineered using multi-layer polyurethane film designed to exert sustained, controlled physiological pressure without bracket wire irritation.',
      howSteps: [
        {
          icon: 'bi-camera-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. 3D Digital Intraoral Scan',
          desc: 'We capture an optical 3D model of your dentition. Our CAD software calculates tooth movements down to 0.1mm increments.'
        },
        {
          icon: 'bi-layers-half',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. Sequential Movement Stages',
          desc: 'Each tray advances your teeth by approximately 0.25mm. You swap to a new set every 7–10 days as prescribed by your doctor.'
        },
        {
          icon: 'bi-pin-angle-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Tooth-Colored Smart Attachments',
          desc: 'Discreet enamel-matching buttons temporarily bonded to specific teeth ensure complex rotational forces and root leveling.'
        }
      ],
      benefitsSubtitle: 'Why Patients Love Aligners',
      benefitsTitle: 'THE CLEAR ADVANTAGES.',
      benefitsDesc: 'Clear aligners fit seamlessly into modern life, careers, social activities, and athletic routines.',
      benefits: [
        { icon: 'bi-eye-slash-fill', color: 'text-primary', title: 'Aesthetic Invisibility', desc: 'Virtually imperceptible in person and on video calls. Smile with full confidence throughout treatment.' },
        { icon: 'bi-egg-fried', color: 'text-warning', title: 'Zero Dietary Restrictions', desc: 'Pop your trays out before meals and enjoy popcorn, apples, nuts, and your favorite foods without fear of broken wires.' },
        { icon: 'bi-brush-fill', color: 'text-primary', title: 'Effortless Oral Hygiene', desc: 'Brush and floss normally without threading wires. Reduces plaque buildup and white spot decalcification.' },
        { icon: 'bi-shield-check', color: 'text-warning', title: 'Smooth Gum Comfort', desc: 'Laser-scalloped edges follow your gum line. No sharp metal pokers or wax emergencies.' },
        { icon: 'bi-calendar-event', color: 'text-primary', title: 'Fewer In-Person Appointments', desc: 'Because we provide multiple tray stages in advance, check-ins occur every 8–10 weeks, saving you valuable time.' },
        { icon: 'bi-phone-fill', color: 'text-warning', title: 'Virtual Patient Monitoring', desc: 'Upload progress selfies right from your phone for doctor review between regular visits.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'YOUR ALIGNER JOURNEY STEP BY STEP.',
      journeyDesc: 'Sample progression roadmap for a typical adult or teen clear aligner patient.',
      journeySteps: [
        { num: '01', title: 'Scan & 3D Setup', timing: 'Week 1', desc: 'Precision 3D optical scan, treatment blueprint review, and approval of 3D outcome projection.' },
        { num: '02', title: 'Delivery & Attachments', timing: 'Week 3–4', desc: 'Bonding of tooth-colored smart attachments and delivery of your initial series of aligner trays.' },
        { num: '03', title: 'Active Tray Changes', timing: 'Months 2–12', desc: 'Switch trays every 7 to 10 days. Clinic check-ins every 8–10 weeks to verify tracking velocity.' },
        { num: '04', title: 'Refinement & Retention', timing: 'Final Phase', desc: 'Minor micro-adjustments if needed, attachment removal, and custom SmartSmile retainers fitting.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'CLEAR ALIGNERS FAQS.',
      faqDesc: 'Answers to the most common questions regarding daily wear, comfort, and aligner care.',
      faqs: [
        {
          q: 'How many hours per day do I need to wear the aligners?',
          a: 'For optimal movement and on-time results, aligners should be worn for <strong>20 to 22 hours each day</strong>. They should only be removed for meals, drinking hot beverages, and brushing or flossing your teeth.'
        },
        {
          q: 'Does clear aligner treatment hurt?',
          a: 'Most patients report a mild feeling of snug pressure for the first 24–48 hours after inserting a brand-new tray. This is a normal indicator that the teeth are moving gently. Unlike metal brackets, there are no wires to poke your cheeks or lips.'
        },
        {
          q: 'How do I clean and maintain my aligner trays?',
          a: 'Gently brush your trays with lukewarm water and a soft-bristled toothbrush morning and night. Avoid using hot water as it can warp the medical-grade polymer. Specialized cleaning crystals or aligner foam can also be used.'
        },
        {
          q: 'What happens if I lose or damage an aligner tray?',
          a: 'Don\'t worry! Contact SmartSmile immediately or message us via your Patient Portal. Depending on where you are in that stage, your orthodontist may advise you to move forward to the next tray early or wear your previous tray while an in-house replacement is 3D printed.'
        }
      ],
      ctaSubtitle: 'Schedule Your Scan',
      ctaTitle: 'READY TO START YOUR ALIGNER JOURNEY?',
      ctaDesc: 'Book a complimentary 3D intraoral scan and preview your aligned smile before making any commitments.'
    },

    'retention': {
      title: 'Custom Retention Systems | SmartSmile Orthodontic Clinic',
      meta: 'Preserve your orthodontic results with custom Essix clear retainers, Hawley wire retainers, and bonded lingual wires.',
      badge: '<i class="bi bi-shield-lock-fill"></i> Retention & Stability',
      duration: '<i class="bi bi-shield-check"></i> Lifelong Nighttime Wear*',
      heroTitle: 'CUSTOM RETENTION SYSTEMS & LIFELONG CARE.',
      heroDesc: 'Preserve your beautiful new alignment with custom clear Essix retainers, Hawley wire retainers, or lingual bonded permanent retention wires.',
      heroImage: 'assets/images/treatment-custom-retainers.jpg',
      heroImageAlt: 'Precision Orthodontic Retention Systems',
      primaryCta: 'Book Retainer Fitting',
      pricingCta: 'View Retention Plans',
      clinicalNote: 'Teeth possess physiological memory and tend to drift with age. Consistent retention preserves ideal occlusion and alignment indefinitely.',
      howSubtitle: 'Biomechanics & Relapse Prevention',
      howTitle: 'HOW ORTHODONTIC RETENTION WORKS.',
      howDesc: 'Following active tooth movement, periodontal ligament fibers require up to 12 months to reorganize into dense bone, necessitating passive stabilizing retainers.',
      howSteps: [
        {
          icon: 'bi-upc-scan',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. Final Digital Impression',
          desc: 'High-speed intraoral 3D scanning captures your perfected smile contour at the hour of debonding.'
        },
        {
          icon: 'bi-printer-fill',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. In-House Precision 3D Printing',
          desc: 'We 3D print master dental models and thermoform durable medical co-polyester Essix retainers with zero distortion.'
        },
        {
          icon: 'bi-shield-check',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Multi-Strand Lingual Splints',
          desc: 'Optional bonded titanium wire fixed invisibly behind lower anterior teeth provides 24/7 passive relapse protection.'
        }
      ],
      benefitsSubtitle: 'Long-Term Smile Protection',
      benefitsTitle: 'THE RETENTION ADVANTAGES.',
      benefitsDesc: 'Retainers protect your substantial investment of time, finances, and effort.',
      benefits: [
        { icon: 'bi-shield-lock-fill', color: 'text-primary', title: 'Prevents Physiological Relapse', desc: 'Maintains dental arch width and front alignment against natural age-related mesial drift.' },
        { icon: 'bi-eye-slash-fill', color: 'text-warning', title: 'Crystal Clear Night Wear', desc: 'Essix retainers are virtually invisible and fit snugly over your teeth during sleep.' },
        { icon: 'bi-arrow-repeat', color: 'text-primary', title: 'SmartSmile Retainer Club', desc: 'Enjoy discounted replacement sets 3D printed on demand from your stored digital scan.' },
        { icon: 'bi-moon-stars-fill', color: 'text-warning', title: 'Guards Against Night Clenching', desc: 'Durable thermoplastic acts as a protective buffer preventing nocturnal enamel wear and bruxism.' },
        { icon: 'bi-award-fill', color: 'text-primary', title: 'Multi-System Options', desc: 'Choose between clear removable Essix trays, adjustable Hawley acrylics, or permanent bonded wires.' },
        { icon: 'bi-clock-history', color: 'text-warning', title: 'Zero Daytime Disruption', desc: 'After the initial 3 months, retainers are worn only at night while sleeping.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'YOUR RETENTION TIMELINE.',
      journeyDesc: 'Phased wear protocol recommended by orthodontic specialists.',
      journeySteps: [
        { num: '01', title: 'Debond & Scan', timing: 'Day 1', desc: 'Brackets/attachments are removed, teeth polished, and digital scan captured immediately.' },
        { num: '02', title: 'Full-Time Stabilization', timing: 'Months 1–3', desc: 'Wear your retainers 20–22 hours daily while periodontal ligaments and alveolar bone remodel.' },
        { num: '03', title: 'Nighttime Only Wear', timing: 'Month 4 Onward', desc: 'Transition to wearing your retainers every night before bed as part of your sleep routine.' },
        { num: '04', title: 'Annual Check & Scans', timing: 'Annual', desc: 'Brief complimentary retainer fit inspections to verify stability and order spare backup sets.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'RETENTION FAQS.',
      faqDesc: 'Everything you need to know about keeping your teeth in perfect alignment.',
      faqs: [
        {
          q: 'How long do I need to wear my retainers after braces or aligners?',
          a: 'Retention is a lifetime commitment. Teeth naturally shift inward and forward throughout life due to age-related changes. Wearing your retainers at night ensures your teeth remain in their post-orthodontic positions forever.'
        },
        {
          q: 'What is the difference between Essix and Hawley retainers?',
          a: 'Essix retainers are clear, transparent thermoplastic trays that look like aligners and completely cover your teeth. Hawley retainers use an acrylic base with a front wire, offering high durability and minor adjustability.'
        },
        {
          q: 'What should I do if my retainer cracks, warps, or gets lost?',
          a: 'Contact us immediately! Because we keep your digital 3D scans securely on file in our CAD laboratory, we can 3D print and thermoform a replacement retainer without having you come in for another messy impression.'
        },
        {
          q: 'How do I properly clean and care for my retainers?',
          a: 'Rinse with cool or lukewarm water and gently brush with a soft toothbrush daily. Never soak in boiling water or leave them in a hot car, as heat will warp the precision plastic.'
        }
      ],
      ctaSubtitle: 'Protect Your Investment',
      ctaTitle: 'NEED NEW OR REPLACEMENT RETAINERS?',
      ctaDesc: 'Book an appointment to get 3D scanned for fresh custom retainers or join our SmartSmile Lifetime Retainer Program.'
    },

    'early-ortho': {
      title: 'Early Orthodontic Care (Ages 7–11) | SmartSmile Orthodontic Clinic',
      meta: 'Phase I interceptive orthodontics guiding young jaw arches, creating space for permanent teeth, and correcting crossbites.',
      badge: '<i class="bi bi-stars"></i> Phase I Interceptive',
      duration: '<i class="bi bi-clock-history"></i> Est. 12 to 15 Months*',
      heroTitle: 'EARLY ORTHODONTIC CARE (AGES 7–11).',
      heroDesc: 'Proactive interceptive treatment to guide developing jaw arches, intercept crossbites early, and create sufficient room for incoming permanent adult dentition.',
      heroImage: 'assets/images/treatment-early-orthodontics.jpg',
      heroImageAlt: 'Pediatric Early Orthodontic Evaluation',
      primaryCta: 'Book Pediatric Assessment',
      pricingCta: 'View Early Care Plans',
      clinicalNote: 'Early intervention takes advantage of active facial growth spurts when bone sutures are biologically flexible, preventing invasive extractions later.',
      howSubtitle: 'Developmental Biomechanics',
      howTitle: 'HOW INTERCEPTIVE ORTHODONTICS WORKS.',
      howDesc: 'Focuses on the skeletal relationship between the upper and lower jaws while primary baby teeth are still transitioning to permanent dentition.',
      howSteps: [
        {
          icon: 'bi-bounding-box-circles',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. Palatal Expansion',
          desc: 'Gentle expansion appliances gradually widen a narrow upper jaw, correcting posterior crossbites and broadening nasal passages.'
        },
        {
          icon: 'bi-grid-fill',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. Space Supervision & Maintainers',
          desc: 'Preserves critical arch length so unerupted permanent canines and premolars emerge without becoming impacted or blocked.'
        },
        {
          icon: 'bi-heart-pulse-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Habit & Airway Guidance',
          desc: 'Eliminates tongue-thrusting or prolonged thumb-sucking patterns that deform anterior alveolar bone morphology.'
        }
      ],
      benefitsSubtitle: 'Proactive Growth Care',
      benefitsTitle: 'THE EARLY CARE ADVANTAGES.',
      benefitsDesc: 'Treating structural malocclusions early simplifies or completely eliminates future complex treatments.',
      benefits: [
        { icon: 'bi-magic', color: 'text-primary', title: 'Guides Jaw Growth While Flexible', desc: 'Directs skeletal balance before palatal mid-sutures fuse during adolescent maturation.' },
        { icon: 'bi-shield-check', color: 'text-warning', title: 'Prevents Impacted Permanent Teeth', desc: 'Creates room for large incoming adult incisors and canines, preventing costly surgical exposures.' },
        { icon: 'bi-emoji-smile-fill', color: 'text-primary', title: 'Reduces Trauma to Protruding Teeth', desc: 'Retracts protruding front teeth ("buck teeth"), dramatically lowering the risk of accidental chips.' },
        { icon: 'bi-wind', color: 'text-warning', title: 'Improves Airway & Nasal Breathing', desc: 'Upper arch expansion increases nasal floor volume, improving sleep and speech clarity.' },
        { icon: 'bi-people-fill', color: 'text-primary', title: 'Boosts Early Childhood Confidence', desc: 'Children gain genuine self-esteem and pride in their smile during formative school years.' },
        { icon: 'bi-check2-all', color: 'text-warning', title: 'Simpler Phase II Treatment', desc: 'If full braces are needed later as a teen, the case duration is significantly shorter and easier.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'THE PHASE I ORTHODONTIC JOURNEY.',
      journeyDesc: 'Step-by-step roadmap for young patients between ages 7 and 11.',
      journeySteps: [
        { num: '01', title: 'Age 7 Growth Screening', timing: 'Month 1', desc: 'Low-dose digital panoramic imaging and dental growth evaluation recommended by AAO standards.' },
        { num: '02', title: 'Appliance Fitting', timing: 'Month 2', desc: 'Gentle fitting of custom expander, partial 2x4 front brackets, or space maintainers.' },
        { num: '03', title: 'Active Arch Guidance', timing: 'Months 3–12', desc: 'Routine 8-week monitoring as teeth move into favorable developmental corridors.' },
        { num: '04', title: 'Resting & Observation', timing: 'Phase Transition', desc: 'Removal of Phase I appliances followed by periodic checkups as remaining permanent teeth erupt.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'EARLY ORTHODONTICS FAQS.',
      faqDesc: 'Answers to parent questions regarding age 7 assessments and expanders.',
      faqs: [
        {
          q: 'Why does the American Association of Orthodontists recommend seeing an orthodontist by age 7?',
          a: 'By age 7, the first permanent molars have erupted, establishing the posterior bite. An orthodontic specialist can spot subtle crossbites, severe crowding, and jaw asymmetries before they worsen into skeletal deformities.'
        },
        {
          q: 'What is the difference between Phase 1 and Phase 2 orthodontics?',
          a: 'Phase 1 occurs while children still have baby teeth and focuses on skeletal jaw alignment and arch width. Phase 2 occurs around age 12–14 once all permanent teeth have erupted to fine-tune final cosmetic alignments.'
        },
        {
          q: 'Does a palatal expander cause pain for a young child?',
          a: 'Most children experience only mild pressure around the bridge of their nose for a few minutes after an activation turn. Children adapt remarkably fast, usually speaking and eating normally within 24 to 48 hours.'
        },
        {
          q: 'Can early treatment eliminate the need for permanent tooth extractions?',
          a: 'In many cases, yes! By proactively expanding a narrow jaw early, we create the necessary perimeter space for all 28 permanent teeth to erupt naturally without requiring premolar extractions.'
        }
      ],
      ctaSubtitle: 'Schedule a Growth Consultation',
      ctaTitle: 'SCHEDULE YOUR CHILD’S AGE-7 SMILE EXAM.',
      ctaDesc: 'Our friendly pediatric orthodontists make first visits gentle, educational, and fun. Complimentary 3D diagnostic evaluations.'
    },

    'teen-ortho': {
      title: 'Teen Orthodontics | SmartSmile Orthodontic Clinic',
      meta: 'Flexible teen orthodontic choices between colorful designer brackets and discreet clear aligners with compliance indicators.',
      badge: '<i class="bi bi-mortarboard-fill"></i> Teen Friendly',
      duration: '<i class="bi bi-clock-history"></i> Est. 14 to 20 Months*',
      heroTitle: 'TEEN ORTHODONTICS & ACTIVE LIFESTYLES.',
      heroDesc: 'Flexible options between colorful bracket elastics or discreet teen clear aligners featuring compliance indicator dots to help busy students stay on track.',
      heroImage: 'assets/images/treatments/treatment-teen-orthodontics.jpg',
      heroImageAlt: 'Teen Girl Smiling Confidently with Orthodontic Braces in Modern Clinic',
      primaryCta: 'Book Teen Assessment',
      pricingCta: 'View Teen Plans',
      clinicalNote: 'Adolescent growth spurts provide the fastest biological bone remodeling velocity, making teenage years the ideal window for comprehensive bite correction.',
      howSubtitle: 'Tailored for Students',
      howTitle: 'HOW TEEN ORTHODONTICS WORKS.',
      howDesc: 'Engineered for high school schedules, athletic leagues, instrument playing, and digital lifestyles with flexible appliance modalities.',
      howSteps: [
        {
          icon: 'bi-magic',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. Choice of Braces or Aligners',
          desc: 'Teens can choose between sleek low-profile metal brackets, tooth-colored ceramic brackets, or clear aligner trays.'
        },
        {
          icon: 'bi-droplet-fill',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. Blue Compliance Indicator Dots',
          desc: 'Teen clear aligners feature discreet blue dots that fade with saliva contact to reassure parents of consistent 22-hour wear.'
        },
        {
          icon: 'bi-trophy-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Sports & Music Compatibility',
          desc: 'We provide specialized athletic mouthguards designed to protect both teeth and brackets during football, basketball, and field sports.'
        }
      ],
      benefitsSubtitle: 'Designed for High School Life',
      benefitsTitle: 'THE TEEN ORTHODONTIC ADVANTAGES.',
      benefitsDesc: 'Empowering teens with confidence and convenience throughout middle and high school.',
      benefits: [
        { icon: 'bi-mortarboard', color: 'text-primary', title: 'Boosts Confidence for School Photos', desc: 'Promotes self-assurance during yearbooks, presentations, social activities, and graduation milestones.' },
        { icon: 'bi-speedometer2', color: 'text-warning', title: 'Faster Adolescent Bone Remodeling', desc: 'Teenage cellular turnover allows teeth to glide into alignment faster than adult dentition.' },
        { icon: 'bi-palette', color: 'text-primary', title: 'Personalized Bracket Color Combos', desc: 'Switch bracket tie colors for school spirit, holidays, sports teams, or seasonal trends at every visit.' },
        { icon: 'bi-music-note-beamed', color: 'text-warning', title: 'Compatible with Wind Instruments', desc: 'Smooth low-profile brackets minimize interference for trumpet, flute, and saxophone players.' },
        { icon: 'bi-phone', color: 'text-primary', title: 'Digital Remote App Monitoring', desc: 'Send progress photos directly to our doctors from a smartphone, minimizing missed school hours.' },
        { icon: 'bi-shield-check', color: 'text-warning', title: 'Free Replacement Aligners Included', desc: 'Teen aligner packages include up to 4 free replacement trays for peace of mind.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'THE TEEN ORTHODONTIC JOURNEY.',
      journeyDesc: 'Streamlined progression roadmap designed for busy high school students.',
      journeySteps: [
        { num: '01', title: '3D Scan & Selection', timing: 'Week 1', desc: 'No gooey impressions! 90-second digital scan and choosing between braces and clear aligners.' },
        { num: '02', title: 'Start Day & Starter Kit', timing: 'Week 2–3', desc: 'Bonding or aligner delivery with our Teen Smile Kit containing wax, travel brush, and aligner case.' },
        { num: '03', title: 'Routine 8-Week Check-Ins', timing: 'Months 2–16', desc: 'Quick checkups between classes to advance wires or receive the next sequence of aligner trays.' },
        { num: '04', title: 'Big Smile Reveal & Retainers', timing: 'Graduation Phase', desc: 'Appliance removal celebration, final photographs, and fitting custom retainers to keep the smile sharp.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'TEEN ORTHODONTICS FAQS.',
      faqDesc: 'Common questions from parents and teenagers about braces and school routines.',
      faqs: [
        {
          q: 'Can my teen play contact sports or wind instruments with braces?',
          a: 'Absolutely! For contact sports (soccer, football, martial arts), we fit a custom orthodontic mouthguard that fits comfortably over brackets. Musicians playing brass or woodwinds adapt within one to two weeks.'
        },
        {
          q: 'Are clear aligners really effective for teenagers?',
          a: 'Yes! Teen aligners are clinically proven to treat the majority of adolescent orthodontic problems. Plus, compliance indicator dots fade from blue to clear, making it simple to track proper wear.'
        },
        {
          q: 'What happens if my teen loses an aligner or breaks a bracket at school?',
          a: 'If a bracket comes loose, apply orthodontic relief wax and call our clinic; we will repair it promptly. Teen aligner treatments include complimentary replacement trays so treatment never gets derailed.'
        },
        {
          q: 'How long do teenagers typically have to wear braces?',
          a: 'Most adolescent treatments take between 14 and 20 months, depending on the severity of malocclusion and whether jaw expansion is required.'
        }
      ],
      ctaSubtitle: 'Book a Teen Evaluation',
      ctaTitle: 'GIVE YOUR TEEN A SMILE THAT SHINES.',
      ctaDesc: 'Schedule a free consultation and intraoral scan for your teenager today. Flexible appointments after school.'
    },

    'adult-ortho': {
      title: 'Adult Orthodontics | SmartSmile Orthodontic Clinic',
      meta: 'Advanced accelerated adult orthodontics tailored for professionals. Discreet aligners, aesthetic ceramic braces, and flexible scheduling.',
      badge: '<i class="bi bi-briefcase-fill"></i> Adult Focus',
      duration: '<i class="bi bi-clock-history"></i> Est. 10 to 18 Months*',
      heroTitle: 'ADULT ORTHODONTICS & ACCELERATED CARE.',
      heroDesc: 'Over 35% of our patients are adults. We formulate accelerated treatments designed around active professional careers, weddings, and aesthetic lifestyles.',
      heroImage: 'assets/images/treatments/treatment-adult-orthodontics.jpg',
      heroImageAlt: 'Confident Adult Patient in High-Tech Orthodontic Consultation Room',
      primaryCta: 'Book Adult Assessment',
      pricingCta: 'View Adult Financing',
      clinicalNote: 'Adult bone biology responds predictably to continuous physiological vectors. We prioritize discreet presentation and streamlined appointment frequency.',
      howSubtitle: 'Tailored for Careers',
      howTitle: 'HOW ADULT ORTHODONTICS WORKS.',
      howDesc: 'Combining digital planning with periodontal safety protocols to deliver radiant cosmetic and functional alignment without social interruption.',
      howSteps: [
        {
          icon: 'bi-briefcase-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. Executive Discretion',
          desc: 'High-clarity aligners or lingual/ceramic brackets that are virtually imperceptible in boardroom presentations and Zoom meetings.'
        },
        {
          icon: 'bi-lightning-charge-fill',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. Targeted Social Six Focus',
          desc: 'Option for accelerated cosmetic alignment of front visible smile teeth in as little as 6 to 9 months for upcoming life events.'
        },
        {
          icon: 'bi-shield-plus',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Interdisciplinary Coordination',
          desc: 'We coordinate seamlessly with your general dentist, periodontist, or prosthodontist for crowns, implants, or veneers.'
        }
      ],
      benefitsSubtitle: 'Career & Lifestyle Alignment',
      benefitsTitle: 'THE ADULT ADVANTAGES.',
      benefitsDesc: 'A straight, functional bite improves oral longevity, airway health, and professional confidence.',
      benefits: [
        { icon: 'bi-person-check-fill', color: 'text-primary', title: 'Zero Speech or Appearance Interference', desc: 'Present with absolute confidence. Removable trays allow easy speaking and dining flexibility.' },
        { icon: 'bi-heart-pulse-fill', color: 'text-warning', title: 'Relieves TMJ & Tooth Wear', desc: 'Proper bite alignment eliminates abnormal enamel wear, chipped edges, and tension headaches caused by bite clenching.' },
        { icon: 'bi-calendar-check', color: 'text-primary', title: 'Flexible Executive Scheduling', desc: 'Early morning, evening, and lunch appointments plus virtual remote tracking to fit busy corporate schedules.' },
        { icon: 'bi-flower1', color: 'text-warning', title: 'Healthier Gums & Hygiene', desc: 'Straight, uncrowded teeth are drastically easier to floss and clean, reducing gum inflammation and tartar.' },
        { icon: 'bi-credit-card-2-front', color: 'text-primary', title: 'HSA / FSA & 0% Financing', desc: 'Maximize pre-tax health savings dollars and take advantage of interest-free monthly installment plans.' },
        { icon: 'bi-award-fill', color: 'text-warning', title: 'Reverse Age-Related Tooth Relapse', desc: 'Correct subtle shifting or crowding that occurred years after legacy childhood braces.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'THE ADULT SMILE JOURNEY.',
      journeyDesc: 'Convenient progression roadmap customized for working professionals.',
      journeySteps: [
        { num: '01', title: 'Private 3D Consultation', timing: 'Week 1', desc: 'Private evaluation with a specialist orthodontist, full digital scans, and 3D outcome preview.' },
        { num: '02', title: 'Custom Appliance Setup', timing: 'Week 2–3', desc: 'Delivery of your discreet aligners or aesthetic ceramic appliances with home care guidance.' },
        { num: '03', title: 'Virtual Progress Checkups', timing: 'Months 2–12', desc: 'Upload weekly progress photos via app, reducing clinic visits to once every 10–12 weeks.' },
        { num: '04', title: 'Smile Completion & Retainers', timing: 'Month 12–18', desc: 'Final detailing, enamel contouring, and fitting of durable custom nighttime retainers.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'ADULT ORTHODONTICS FAQS.',
      faqDesc: 'Frequently asked questions regarding age limits, crowns, and adult teeth.',
      faqs: [
        {
          q: 'Is it ever too late to get braces or aligners as an adult?',
          a: 'Never! Healthy teeth can be moved at any age. Over 35% of all orthodontic patients today are adults in their 30s, 40s, 50s, and beyond who want to improve their oral health and self-image.'
        },
        {
          q: 'Can I get orthodontic treatment if I have dental crowns, implants, or veneers?',
          a: 'Yes. While dental implants do not move because they are anchored into bone, teeth with crowns or fillings can be aligned normally. We tailor force vectors around existing restorations.'
        },
        {
          q: 'Will wearing aligners or braces give me a lisp?',
          a: 'Clear aligners are precision laser-trimmed to the exact gum margins. Most adults adapt within 24 to 48 hours and speak completely naturally during client presentations and phone calls.'
        },
        {
          q: 'How long does adult orthodontic treatment typically take?',
          a: 'Adult treatment typically ranges from 10 to 18 months. Minor cosmetic alignment can be completed in as little as 6 months with our express digital protocols.'
        }
      ],
      ctaSubtitle: 'Book an Adult Consultation',
      ctaTitle: 'INVEST IN YOUR SMILE AND CONFIDENCE.',
      ctaDesc: 'Schedule a private adult orthodontic consultation today. Discover how modern digital techniques fit effortlessly into your career.'
    },

    'surgical-ortho': {
      title: 'Complex Alignment & Surgical Ortho | SmartSmile Orthodontic Clinic',
      meta: 'Combined orthognathic surgical planning and precision orthodontics to correct severe skeletal open bites, asymmetries, and jaw discrepancies.',
      badge: '<i class="bi bi-hospital-fill"></i> Specialist Care',
      duration: '<i class="bi bi-clock-history"></i> Est. 20 to 30 Months*',
      heroTitle: 'COMPLEX ALIGNMENT & SURGICAL ORTHODONTICS.',
      heroDesc: 'Combined orthognathic surgical planning and precision bracket mechanics to correct severe skeletal open bites, impacted canines, and facial asymmetry.',
      heroImage: 'assets/images/treatments/treatment-surgical-orthodontics.jpg',
      heroImageAlt: 'Orthodontic Specialist and Patient Reviewing 3D Craniofacial Alignment Simulation',
      primaryCta: 'Book Surgical Consultation',
      pricingCta: 'View Complex Care Options',
      clinicalNote: 'Orthognathic treatment involves coordinated care between our board-certified orthodontists and maxillofacial surgeons for skeletal jaw alignment.',
      howSubtitle: 'Craniofacial Biomechanics',
      howTitle: 'HOW SURGICAL ORTHODONTICS WORKS.',
      howDesc: 'When skeletal discrepancy exceeds the physiological boundaries of dental tooth movement, combined orthodontics and corrective jaw surgery harmonizes both teeth and facial bones.',
      howSteps: [
        {
          icon: 'bi-cpu-fill',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '1. Virtual Surgical Planning (VSP)',
          desc: 'High-resolution CBCT scans produce 3D computerized craniofacial models to simulate jaw repositioning down to sub-millimeter precision.'
        },
        {
          icon: 'bi-grid-3x3-gap-fill',
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          title: '2. Pre-Surgical Orthodontic Decompensation',
          desc: 'Braces align teeth over the basal bone of each individual jaw so teeth interlock perfectly once the surgical repositioning occurs.'
        },
        {
          icon: 'bi-check2-circle',
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          title: '3. Post-Surgical Micro-Detailing',
          desc: 'Following a brief healing phase, fine finishing archwires settle the occlusion into a solid, stable, and permanent Class I functional bite.'
        }
      ],
      benefitsSubtitle: 'Transformative Clinical Outcomes',
      benefitsTitle: 'THE SURGICAL ORTHODONTIC ADVANTAGES.',
      benefitsDesc: 'Restores harmonious facial symmetry, normal chewing biomechanics, and expanded airway capacity.',
      benefits: [
        { icon: 'bi-aspect-ratio', color: 'text-primary', title: 'Dramatic Facial Profile Balance', desc: 'Harmonizes chin projection, lip competency, and jaw symmetry for lifelong aesthetic transformation.' },
        { icon: 'bi-wind', color: 'text-warning', title: 'Expands Pharyngeal Airway', desc: 'Advancement of the maxilla or mandible relieves severe obstructive sleep apnea (OSA) and enhances airflow.' },
        { icon: 'bi-check-all', color: 'text-primary', title: 'Resolves Severe Skeletal Open Bites', desc: 'Allows front teeth to properly overlap and incise food where conventional braces alone would relapse.' },
        { icon: 'bi-hospital', color: 'text-warning', title: 'Multi-Specialist Team Approach', desc: 'Close collaboration between board-certified orthodontists and elite oral & maxillofacial surgeons.' },
        { icon: 'bi-shield-fill-check', color: 'text-primary', title: 'Permanent Skeletal Stability', desc: 'Rigid internal fixation plates secure bone in its ideal position, preventing long-term skeletal relapse.' },
        { icon: 'bi-emoji-smile', color: 'text-warning', title: 'Pain Relief from Severe TMJ Strain', desc: 'Balances jaw joint forces, eliminating chronic temporomandibular joint pain and muscular fatigue.' }
      ],
      journeySubtitle: 'Milestones & Flow',
      journeyTitle: 'THE SURGICAL ORTHODONTIC JOURNEY.',
      journeyDesc: 'Phased multidisciplinary roadmap for corrective jaw surgery patients.',
      journeySteps: [
        { num: '01', title: '3D Cephalometric Diagnosis', timing: 'Month 1', desc: 'Joint consultation between orthodontist and oral surgeon with 3D CBCT computer simulation.' },
        { num: '02', title: 'Pre-Surgical Orthodontics', timing: 'Months 2–18', desc: 'Precision braces level dental arches independently to prepare them for skeletal jaw movement.' },
        { num: '03', title: 'Corrective Jaw Surgery', timing: 'Surgical Stage', desc: 'Inpatient corrective orthognathic procedure performed by a specialist maxillofacial surgeon.' },
        { num: '04', title: 'Post-Surgical Finishing', timing: 'Months 20–26', desc: 'Final 4–6 months of light finishing elastics followed by custom retention stabilization.' }
      ],
      faqSubtitle: 'Got Questions?',
      faqTitle: 'SURGICAL ORTHODONTICS FAQS.',
      faqDesc: 'Answers to essential questions regarding corrective jaw surgery and orthodontics.',
      faqs: [
        {
          q: 'Who needs surgical orthodontics (orthognathic surgery)?',
          a: 'Adult patients whose upper and lower jaws are significantly mismatched in size or position (such as severe underbites, skeletal open bites, or severe facial asymmetry) that cannot be corrected by tooth movement alone.'
        },
        {
          q: 'Why do I have to wear braces before and after the jaw surgery?',
          a: 'Pre-surgical braces align the teeth to fit each jaw properly. After surgery, teeth must interlock like matching puzzle pieces. Post-surgical braces fine-tune this bite into a locked, stable position.'
        },
        {
          q: 'How long is the recovery period following corrective jaw surgery?',
          a: 'Most patients take 2 to 3 weeks off work or university. Initial bone healing takes about 6 weeks, during which a modified soft diet is followed. Full bone remodeling completes within several months.'
        },
        {
          q: 'Can surgical orthodontics treat sleep apnea?',
          a: 'Yes! Maxillomandibular advancement (MMA) is one of the most effective surgical cures for obstructive sleep apnea, physically pulling forward the tongue base and dramatically opening the airway.'
        }
      ],
      ctaSubtitle: 'Comprehensive Specialist Care',
      ctaTitle: 'EXPERIENCE EXPERT MULTIDISCIPLINARY CARE.',
      ctaDesc: 'Schedule a comprehensive orthognathic diagnostic consultation with our senior specialist orthodontic faculty.'
    },
    'self-ligating-braces': {
      title: 'Self-Ligating Passive Braces | Damon System | SmartSmile',
      meta: 'Learn about self-ligating braces at SmartSmile: low-friction shape memory wires, faster appointments, easier oral hygiene, and gentle tooth movement.',
      badge: 'Advanced Damon Low-Friction System',
      duration: 'Est. 12–18 Months',
      heroTitle: 'GENTLE BIOMECHANICS. ZERO ELASTIC FRICTION.',
      heroDesc: 'Self-ligating braces feature specialized slide doors instead of traditional rubber elastics. This allows high-tech shape-memory wires to glide freely, moving teeth with lighter, more biologically natural forces.',
      primaryCta: 'Book Self-Ligating Consult',
      pricingCta: 'View Installment Options',
      clinicalNote: 'Clinical Advantage: Up to 40% less appointment time and significantly reduced plaque accumulation compared to traditional ligated braces.',
      heroImage: 'assets/images/treatments/treatment-self-ligating.jpg',
      heroImageAlt: 'Self-Ligating Passive Braces Archwire System',
      howSubtitle: 'Biomechanic Superiority',
      howTitle: 'HOW SELF-LIGATING TECHNOLOGY WORKS.',
      howDesc: 'Engineered for optimal tooth movement efficiency and unmatched oral hygiene during treatment.',
      howSteps: [
        {
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          icon: 'bi-sliders',
          title: 'Passive Slide Mechanism',
          desc: 'Each bracket incorporates a microscopic mechanical slide that holds the archwire securely without binding or pinching.'
        },
        {
          tint: 'var(--gold-tint)',
          color: 'var(--smile-gold)',
          icon: 'bi-activity',
          title: 'Light Continuous Forces',
          desc: 'Superelastic nickel-titanium wires activate at body temperature, generating sustained physiological forces that respect bone biology.'
        },
        {
          tint: 'var(--blue-tint)',
          color: 'var(--smart-blue)',
          icon: 'bi-stars',
          title: 'Discreet Aesthetic Options',
          desc: 'Available in robust medical-grade stainless steel or virtually invisible monocrystalline ceramic on your upper smile teeth.'
        }
      ],
      benefitsSubtitle: 'Patient Advantages',
      benefitsTitle: 'WHY CHOOSE SELF-LIGATING BRACES?',
      benefitsDesc: 'A faster, cleaner, and more comfortable modern alternative to legacy bracket systems.',
      benefits: [
        { icon: 'bi-lightning-charge-fill', color: 'text-warning', title: 'Fewer Adjustments', desc: 'Patients need clinic adjustments only every 8–10 weeks instead of every 4 weeks.' },
        { icon: 'bi-brush-fill', color: 'text-primary', title: 'Effortless Cleaning', desc: 'No rubber ties means significantly less plaque and food particle entrapment.' },
        { icon: 'bi-emoji-smile-fill', color: 'text-warning', title: 'Greater Comfort', desc: 'Eliminating tight elastic ties dramatically reduces soreness after adjustments.' },
        { icon: 'bi-clock-history', color: 'text-primary', title: 'Faster Appointments', desc: 'Wire swaps take under 5 minutes with smooth slide-door mechanisms.' },
        { icon: 'bi-arrows-angle-expand', color: 'text-warning', title: 'Natural Arch Expansion', desc: 'Promotes broad, full smile aesthetics often without requiring premolar extractions.' },
        { icon: 'bi-shield-check', color: 'text-primary', title: 'Proven Stability', desc: 'Produces ideal root parallelism and long-term occlusal functional health.' }
      ],
      journeySubtitle: 'Care Protocol',
      journeyTitle: 'YOUR SELF-LIGATING JOURNEY.',
      journeyDesc: 'Four systematic milestones to an impeccably aligned smile.',
      journeySteps: [
        { num: '01', title: '3D Optical Scan', timing: 'Visit 1 • Day 1', desc: 'Digital diagnostics and precise bracket placement positioning mapping.' },
        { num: '02', title: 'Indirect Bonding', timing: 'Visit 2 • Week 2', desc: 'Precision bonding using custom transfer trays for 100% accurate bracket angles.' },
        { num: '03', title: 'High-Tech Wire Progression', timing: 'Weeks 8–48', desc: 'Gradual progression through thermal NiTi, Beta-Titanium, and stainless steel finishing wires.' },
        { num: '04', title: 'Debond & Retention', timing: 'Month 12–18', desc: 'Gentle bracket removal, polish, and custom retainer fitting to preserve results forever.' }
      ],
      faqSubtitle: 'Common Questions',
      faqTitle: 'FREQUENTLY ASKED QUESTIONS.',
      faqDesc: 'Everything you need to know about self-ligating bracket therapy.',
      faqs: [
        { q: 'Are self-ligating braces faster than traditional braces?', a: 'Yes. Clinical studies show self-ligating brackets can shorten overall treatment time by several months and require up to 40% fewer adjustment visits.' },
        { q: 'Are they available in clear/tooth-colored brackets?', a: 'Yes! We offer Damon Clear brackets for the upper teeth, combining the low-friction mechanical benefits with discreet, stain-resistant aesthetics.' },
        { q: 'Is it painful when the wires are changed?', a: 'Because self-ligating brackets do not use tight elastic ties, the force applied is much lighter and gentler, resulting in substantially less soreness after visits.' }
      ],
      ctaSubtitle: 'Modern Orthodontics',
      ctaTitle: 'READY FOR FASTER, GENTLER SMILE ALIGNMENT?',
      ctaDesc: 'Schedule your comprehensive digital self-ligating consultation today.'
    }
  };

  function renderTreatmentDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id') || 'clear-aligners';
    const data = TREATMENTS_DATA[id] || TREATMENTS_DATA['clear-aligners'];

    // Update document title & meta description
    if (data.title) document.title = data.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && data.meta) metaDesc.setAttribute('content', data.meta);

    // 1. Hero Section
    const heroPanel = document.querySelector('.hero-text-panel');
    if (heroPanel) {
      const badgeWrap = heroPanel.querySelector('.d-flex.align-items-center.gap-2.mb-3');
      if (badgeWrap) {
        badgeWrap.innerHTML = `
          <span class="smart-badge smart-badge-gold">${data.badge}</span>
          <span class="small fw-bold" style="color: var(--smart-blue);">${data.duration}</span>
        `;
      }

      const heroH1 = heroPanel.querySelector('h1');
      if (heroH1) heroH1.textContent = data.heroTitle;

      const heroLead = heroPanel.querySelector('.lead');
      if (heroLead) heroLead.textContent = data.heroDesc;

      const ctaWrap = heroPanel.querySelector('.d-flex.flex-wrap.gap-3.mb-4');
      if (ctaWrap) {
        ctaWrap.innerHTML = `
          <a href="consultation.html" class="btn-smart-primary"><i class="bi bi-calendar-check-fill"></i> ${data.primaryCta}</a>
          <a href="pricing.html" class="btn-smart-secondary"><i class="bi bi-currency-dollar"></i> ${data.pricingCta}</a>
        `;
      }

      const noteBox = heroPanel.querySelector('.small[style*="var(--text-primary)"]');
      if (noteBox) noteBox.textContent = data.clinicalNote;
    }

    // Hero Image
    const heroImg = document.getElementById('treatmentHeroImg') || document.querySelector('.hero-bg-treatment-details img') || document.querySelector('section.hero-section-bg img');
    if (heroImg && data.heroImage) {
      heroImg.src = data.heroImage;
      heroImg.alt = data.heroImageAlt || data.heroTitle;
    }

    // 2. How the Treatment Works Section
    const sec2Header = document.querySelector('section.section-white:nth-of-type(2) .section-header');
    if (sec2Header) {
      const sub = sec2Header.querySelector('.section-subtitle');
      if (sub) sub.textContent = data.howSubtitle;
      const title = sec2Header.querySelector('.section-title');
      if (title) title.textContent = data.howTitle;
      const desc = sec2Header.querySelector('.section-desc');
      if (desc) desc.textContent = data.howDesc;
    }

    const sec2Grid = document.querySelector('section.section-white:nth-of-type(2) .row.g-4');
    if (sec2Grid && data.howSteps && data.howSteps.length >= 3) {
      sec2Grid.innerHTML = data.howSteps.map((step) => `
        <div class="col-lg-4">
          <div class="smart-card p-4 h-100">
            <div class="rounded-circle d-flex align-items-center justify-content-center mb-3" style="width: 52px; height: 52px; background: ${step.tint}; color: ${step.color}; font-size: 1.4rem;">
              <i class="bi ${step.icon}"></i>
            </div>
            <h3 class="fs-5 fw-bold mb-2">${step.title}</h3>
            <p class="smart-card-text">${step.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 3. Clinical & Lifestyle Benefits Section
    const sec3Header = document.querySelector('section.section-warm:nth-of-type(3) .section-header');
    if (sec3Header) {
      const sub = sec3Header.querySelector('.section-subtitle');
      if (sub) sub.textContent = data.benefitsSubtitle;
      const title = sec3Header.querySelector('.section-title');
      if (title) title.textContent = data.benefitsTitle;
      const desc = sec3Header.querySelector('.section-desc');
      if (desc) desc.textContent = data.benefitsDesc;
    }

    const sec3Grid = document.querySelector('section.section-warm:nth-of-type(3) .row.g-4');
    if (sec3Grid && data.benefits && data.benefits.length >= 6) {
      sec3Grid.innerHTML = data.benefits.map((b) => `
        <div class="col-md-6 col-lg-4">
          <div class="smart-card p-4 h-100">
            <i class="bi ${b.icon} fs-2 ${b.color} mb-3"></i>
            <h4 class="fs-5 fw-bold mb-2">${b.title}</h4>
            <p class="small text-secondary mb-0">${b.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 4. Treatment Journey Stages Section
    const sec4Header = document.querySelector('section.section-white:nth-of-type(4) .section-header');
    if (sec4Header) {
      const sub = sec4Header.querySelector('.section-subtitle');
      if (sub) sub.textContent = data.journeySubtitle;
      const title = sec4Header.querySelector('.section-title');
      if (title) title.textContent = data.journeyTitle;
      const desc = sec4Header.querySelector('.section-desc');
      if (desc) desc.textContent = data.journeyDesc;
    }

    const sec4Grid = document.querySelector('section.section-white:nth-of-type(4) .row.g-4');
    if (sec4Grid && data.journeySteps && data.journeySteps.length >= 4) {
      sec4Grid.innerHTML = data.journeySteps.map((j) => `
        <div class="col-lg-3 col-md-6">
          <div class="journey-step-card text-center">
            <div class="journey-number justify-content-center">${j.num}</div>
            <h4 class="fs-6 fw-bold mb-1">${j.title}</h4>
            <p class="small text-muted mb-2">${j.timing}</p>
            <p class="small text-secondary mb-0">${j.desc}</p>
          </div>
        </div>
      `).join('');
    }

    // 5. Frequently Asked Questions Section
    const sec5Header = document.querySelector('section.section-warm:nth-of-type(5) .section-header');
    if (sec5Header) {
      const sub = sec5Header.querySelector('.section-subtitle');
      if (sub) sub.textContent = data.faqSubtitle;
      const title = sec5Header.querySelector('.section-title');
      if (title) title.textContent = data.faqTitle;
      const desc = sec5Header.querySelector('.section-desc');
      if (desc) desc.textContent = data.faqDesc;
    }

    const faqAccordion = document.getElementById('alignerFaqAccordion');
    if (faqAccordion && data.faqs && data.faqs.length > 0) {
      faqAccordion.innerHTML = data.faqs.map((faq, idx) => {
        const isFirst = idx === 0;
        const collapseId = `faqDynamicCollapse${idx + 1}`;
        const headingId = `faqDynamicHeading${idx + 1}`;
        return `
          <div class="accordion-item border-bottom">
            <h2 class="accordion-header" id="${headingId}">
              <button class="accordion-button fw-bold ${isFirst ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${isFirst ? 'true' : 'false'}" aria-controls="${collapseId}">
                ${faq.q}
              </button>
            </h2>
            <div id="${collapseId}" class="accordion-collapse collapse ${isFirst ? 'show' : ''}" aria-labelledby="${headingId}" data-bs-parent="#alignerFaqAccordion">
              <div class="accordion-body text-secondary">
                ${faq.a}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    // 6. Consultation CTA Section
    const ctaSection = document.querySelector('section.section-navy');
    if (ctaSection) {
      const badge = ctaSection.querySelector('.smart-badge');
      if (badge) badge.textContent = data.ctaSubtitle;
      const title = ctaSection.querySelector('h2');
      if (title) title.textContent = data.ctaTitle;
      const lead = ctaSection.querySelector('.lead');
      if (lead) lead.textContent = data.ctaDesc;
    }
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderTreatmentDetails);
  } else {
    renderTreatmentDetails();
  }
})();
