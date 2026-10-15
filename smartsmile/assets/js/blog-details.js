/**
 * SmartSmile Orthodontics — Dynamic Blog Details Renderer
 * Renders complete, unique, specialist-written article content, hero, inline graphics,
 * key decision factors, FAQs, and related reading based on the ?id= URL parameter.
 */
(function () {
  'use strict';

  const BLOG_ARTICLES = {
    'clear-aligners-vs-braces': {
      id: 'clear-aligners-vs-braces',
      metaTitle: 'The Complete Guide to Clear Aligners vs. Traditional Braces in 2026 | SmartSmile',
      metaDesc: 'A comprehensive orthodontic comparison between custom clear aligners and fixed braces: biomechanical control, hygiene routines, aesthetics, and lifestyle fit.',
      badge: '<i class="bi bi-stars"></i> Comprehensive Orthodontic Guide',
      title: 'The Complete Guide to Clear Aligners vs. Traditional Braces in 2026',
      authorName: 'Dr. Olivia Carter, DDS',
      authorRole: 'Chief Orthodontist & Clear Aligner Specialist',
      date: 'October 2, 2026',
      readTime: '6 Min Read',
      heroImage: 'assets/images/blog-aligners-vs-braces.jpg',
      heroImageAlt: 'Modern Clear Aligners versus Orthodontic Braces Model',
      lead: 'Choosing between clear aligners and fixed braces is one of the most critical decisions facing patients at SmartSmile. With advances in 3D multi-layer polymers, clear aligners can now resolve cases that once strictly required metal brackets—yet traditional fixed appliances still hold indispensable advantages in specific skeletal anomalies.',
      sections: [
        {
          heading: '1. The Biomechanical Differences',
          paragraphs: [
            'Fixed braces exert force through ceramic or surgical stainless steel brackets bonded directly to enamel, connected by shape-memory nickel-titanium archwires. This direct mechanical coupling allows orthodontists three-dimensional control over root torque, vertical extrusion, and bodily translation simultaneously.',
            'Clear aligners, by contrast, wrap circumferentially around the tooth crown. By staging micro-movements of roughly 0.2mm to 0.25mm per tray and utilizing tooth-colored composite attachments engineered with specific bevel angles, aligners push teeth progressively into place with low, continuous physiological forces.'
          ],
          callout: {
            title: 'Clinical Takeaway',
            text: 'While braces pull teeth along an archwire track, clear aligners push teeth utilizing programmed vector contact surfaces.'
          }
        },
        {
          heading: '2. Daily Lifestyle, Eating & Compliance',
          paragraphs: [
            'The signature benefit of clear aligners is complete removability during meals and professional engagements. You never need to compromise on favorite crunchy or fibrous foods, and attending keynote presentations or formal galas can be done without visible appliances.',
            'However, removability requires high patient responsibility: aligners must remain in the mouth for 20 to 22 hours every single day. If you remove trays for snacking and forget to put them back in, tooth movement stalls and alveolar bone remodeling pauses. Fixed braces, on the other hand, deliver 24/7 continuous orthodontic movement without requiring conscious memory.'
          ],
          inlineImage: {
            src: 'assets/images/treatment-clear-aligners.jpg',
            alt: 'Clear Aligners Insertion and Handling',
            caption: 'Clear aligners deliver near-invisibility but require strict 22-hour daily compliance.'
          }
        },
        {
          heading: '3. Oral Hygiene & Decalcification Defense',
          paragraphs: [
            'Braces wearers must navigate brackets and archwires using interdental brushes, floss threaders, and water irrigators to prevent plaque accumulation. In contrast, aligner patients simply remove their trays and brush and floss normally without obstacles.',
            'This hygiene advantage makes clear aligners particularly advantageous for adult patients with mild pre-existing gingivitis or periodontal vulnerability, as soft tissue health is significantly easier to preserve.'
          ]
        }
      ],
      takeawaysTitle: 'Key Decision Factors at a Glance:',
      takeaways: [
        {
          title: 'Aesthetic Invisibility',
          desc: 'Clear aligners win decisively for career professionals, teens, and adults prioritizing cosmetic discretion.'
        },
        {
          title: 'Severe Skeletal Malocclusions',
          desc: 'Traditional or ceramic fixed braces remain the clinical gold standard for complex premolar extractions and orthognathic surgery.'
        },
        {
          title: 'Compliance Discipline',
          desc: 'If you or your teen might struggle to track wear hours, fixed braces eliminate all compliance anxiety with continuous 24/7 progress.'
        }
      ],
      faqs: [
        {
          q: 'Are clear aligners faster than braces?',
          a: 'For mild to moderate crowding, clear aligners are often slightly faster because digital batch movement can adjust multiple teeth simultaneously. For complex skeletal discrepancy or severe rotations, fixed braces remain faster.'
        },
        {
          q: 'Can I switch from braces to clear aligners mid-treatment?',
          a: 'Yes, this is known as hybrid orthodontic therapy. Many SmartSmile patients start with ceramic braces for 6 months to level severe crowding, then transition to clear aligners for finishing details.'
        }
      ],
      ctaTitle: 'WHICH OPTION IS RIGHT FOR YOUR TEETH?',
      ctaDesc: 'Book a complimentary 3D digital smile consultation with Dr. Olivia Carter and discover your ideal orthodontic path.',
      relatedIds: ['retainers-stability', 'oral-hygiene-secrets', '3d-intraoral-scanning']
    },

    'retainers-stability': {
      id: 'retainers-stability',
      metaTitle: 'Why Retainers Are Crucial for Lifelong Stability | SmartSmile Orthodontics',
      metaDesc: 'Discover the biology of orthodontic relapse, why custom retainers protect your alignment investment, and the differences between clear and bonded retainers.',
      badge: '<i class="bi bi-shield-check"></i> Retention & Stability Protocol',
      title: 'Why Retainers Are Crucial for Lifelong Stability',
      authorName: 'Dr. Marcus Vance, MS',
      authorRole: 'Orthodontic Retention Specialist',
      date: 'September 24, 2026',
      readTime: '5 Min Read',
      heroImage: 'assets/images/blog-retainers-stability.jpg',
      heroImageAlt: 'Crystal Clear Orthodontic Retainers with Modern Minimalist Case',
      lead: 'Finishing your braces or clear aligner journey is a celebratory milestone, but debonding day is truly only the midpoint of orthodontic care. Without diligent retention, periodontal elastic memory and natural mesial drift can gradually pull your newly aligned teeth back toward their former crowded positions.',
      sections: [
        {
          heading: '1. The Biological Phenomenon of Orthodontic Relapse',
          paragraphs: [
            'Every tooth is suspended within its socket by the periodontal ligament (PDL) and encircled by supra-crestal gingival collagen fibers. When orthodontic appliances shift teeth into alignment, these elastic fibers stretch like rubber bands.',
            'While bone tissue mineralizes around the tooth roots within 9 to 12 months, the elastic collagen fibers in the surrounding gum tissue take significantly longer to reorganize. If retainers are neglected during this critical biological window, these fibers contract, causing rapid micro-relapse and crowding.'
          ],
          callout: {
            title: 'Orthodontic Rule of Thumb',
            text: 'Teeth have biological memory. Retainers hold teeth firmly while your jawbone and collagen fibers permanently solidify.'
          }
        },
        {
          heading: '2. Clear Removable Retainers vs. Bonded Lingual Wires',
          paragraphs: [
            'Removable clear retainers (such as SmartSmile Essix or Vivera retainers) cover the entire dental arch. They provide comprehensive protection against rotational relapse, guard incisal edges against nocturnal grinding wear, and can be easily cleaned in lukewarm water.',
            'Fixed lingual retainers consist of a biocompatible braided wire bonded behind the lower front six teeth. Because lower incisors are anatomically prone to late crowding due to natural lifelong jaw changes, bonded wires provide uninterrupted, invisible peace of mind 24 hours a day.'
          ],
          inlineImage: {
            src: 'assets/images/resources/retainer-care-guide.jpg',
            alt: 'Retainer Cleaning and Ultrasonic Care Kit',
            caption: 'Proper hygiene routines keep retainers crystal clear and bacteria-free for years.'
          }
        },
        {
          heading: '3. Essential Rules for Retainer Care & Longevity',
          paragraphs: [
            'Always adhere to the golden rule: "In your mouth or in your case." Never wrap a retainer in a restaurant paper napkin, as this is the leading cause of accidental loss.',
            'Clean your retainers daily using a soft-bristle toothbrush and mild antibacterial cleanser or specialized effervescent tablets. Never soak retainers in boiling water, as thermoplastic materials will warp instantly and compromise their precise clinical fit.'
          ]
        }
      ],
      takeawaysTitle: 'Retention Golden Rules for Life:',
      takeaways: [
        {
          title: 'The Critical First Year',
          desc: 'Wear your removable retainers full-time for the first 3 to 6 months, transitioning to nightly wear as advised by your orthodontist.'
        },
        {
          title: 'Nighttime Wear is Lifelong',
          desc: 'Teeth drift naturally throughout life due to facial aging. Wearing retainers several nights weekly guarantees permanent smile alignment.'
        },
        {
          title: 'Immediate Replacement if Damaged',
          desc: 'If a retainer cracks or feels loose, contact SmartSmile immediately before teeth have an opportunity to shift.'
        }
      ],
      faqs: [
        {
          q: 'How long do I need to wear my retainers full-time after treatment?',
          a: 'Most patients wear retainers 20 to 22 hours daily for the first 3 to 6 months. Once bone density has consolidated, Dr. Vance transitions patients to sleeping hours only.'
        },
        {
          q: 'Why does my retainer feel uncomfortably tight after skipping a few nights?',
          a: 'A tight sensation is an immediate warning sign that teeth have begun micro-shifting. Wear the retainer consistently for several consecutive nights to gently nudge them back into place.'
        }
      ],
      ctaTitle: 'NEED A REPLACEMENT RETAINER OR CHECKUP?',
      ctaDesc: 'Protect your orthodontic investment with a customized 3D digital retainer scan at SmartSmile.',
      relatedIds: ['clear-aligners-vs-braces', 'oral-hygiene-secrets', '3d-intraoral-scanning']
    },

    'oral-hygiene-secrets': {
      id: 'oral-hygiene-secrets',
      metaTitle: '5 Oral Hygiene Secrets for Braces Wearers | SmartSmile Orthodontics',
      metaDesc: 'Master daily oral hygiene routines with fixed braces. Learn how to prevent white spot lesions, clean around brackets, and use interdental brushes effectively.',
      badge: '<i class="bi bi-droplet-half"></i> Oral Health & Hygiene Tips',
      title: '5 Oral Hygiene Secrets for Braces Wearers',
      authorName: 'Dr. Elena Rostova, DMD',
      authorRole: 'Pediatric & Preventive Orthodontics',
      date: 'September 15, 2026',
      readTime: '5 Min Read',
      heroImage: 'assets/images/blog-hygiene-secrets.jpg',
      heroImageAlt: 'Orthodontic Dental Hygiene Tools and Ultrasonic Cleaner',
      lead: 'Wearing braces creates dozens of tiny ledges, bracket wings, and archwire recesses where food particles and bacterial plaque eagerly accumulate. Maintaining impeccable oral hygiene throughout orthodontic therapy prevents white spot decalcification scars and gingival swelling, ensuring your final smile reveal is bright, radiant, and healthy.',
      sections: [
        {
          heading: '1. The 45-Degree Bracket Angulation Technique',
          paragraphs: [
            'Standard horizontal scrubbing simply bounces over bracket edges. To effectively clean orthodontic surfaces, hold your toothbrush at a 45-degree angle pointing downward toward the top of the bracket, vibrating gently along the gumline.',
            'Next, tilt the brush upward at a 45-degree angle beneath the archwire to clean the bottom bracket surface. This two-step technique guarantees thorough biofilm disruption along the critical gingival margins.'
          ],
          callout: {
            title: 'Pro Technique',
            text: 'Spend a minimum of 10 seconds per tooth: 5 seconds above the bracket and 5 seconds underneath the archwire.'
          }
        },
        {
          heading: '2. The Interdental Proxabrush & Water Flosser Synergy',
          paragraphs: [
            'Traditional string floss cannot bypass orthodontic archwires without a threader. An interdental proxabrush (a miniature bottle-brush) slides effortlessly under the wire between brackets to dislodge trapped fibers that toothbrushes miss.',
            'Pairing proxabrushes with a pulsating water flosser cleanses periodontal pockets and massages inflamed gingival papillae, reducing inflammation within 7 days of daily use.'
          ],
          inlineImage: {
            src: 'assets/images/treatment-ceramic-braces.jpg',
            alt: 'Ceramic Braces Archwire and Clean Enamel',
            caption: 'Clean brackets protect tooth enamel against permanent white spot decalcification.'
          }
        },
        {
          heading: '3. Enamel Remineralization & Fluoride Defense',
          paragraphs: [
            'When food stays trapped around brackets, plaque bacteria metabolize sugars into acid, leaching calcium and phosphate from enamel. This causes "white spot lesions"—permanent chalky scars visible after bracket removal.',
            'Incorporate a high-fluoride remineralizing rinse into your nightly bedtime routine. Avoid rinsing with water immediately after brushing with fluoride toothpaste to allow the active minerals to fortify vulnerable bracket borders.'
          ]
        }
      ],
      takeawaysTitle: 'Your Daily Braces Hygiene Checklist:',
      takeaways: [
        {
          title: 'Brush After Every Meal',
          desc: 'Keep an orthodontic travel kit in your backpack or purse with a folding toothbrush and proxabrush.'
        },
        {
          title: 'Daily Archwire Flossing',
          desc: 'Use orthodontic floss threaders or a water flosser every evening before sleeping.'
        },
        {
          title: 'Keep Up 6-Month Dental Cleanings',
          desc: 'Visit your general family dentist every 6 months for professional ultrasonic prophylaxis alongside orthodontic adjustments.'
        }
      ],
      faqs: [
        {
          q: 'Can I use an electric toothbrush with braces?',
          a: 'Yes! Electric toothbrushes with round oscillating heads or sonic vibrations are highly recommended by our orthodontists and clinically proven to remove up to 3x more plaque around brackets.'
        },
        {
          q: 'What should I do if my gums swell or bleed around brackets?',
          a: 'Gingival bleeding indicates localized plaque buildup. Rinse with warm salt water for 30 seconds and increase your proxabrush cleaning frequency. Gums will normalize within 3 to 5 days of thorough hygiene.'
        }
      ],
      ctaTitle: 'EXPERIENCING BRACES SORENESS OR HYGIENE QUESTIONS?',
      ctaDesc: 'Our orthodontic hygiene team is always here to demonstrate proper flossing techniques and supply specialized brushes.',
      relatedIds: ['clear-aligners-vs-braces', 'retainers-stability', '3d-intraoral-scanning']
    },

    '3d-intraoral-scanning': {
      id: '3d-intraoral-scanning',
      metaTitle: 'How 3D Intraoral Scanning Replaced Dental Putty | SmartSmile Clinic',
      metaDesc: 'Discover how high-speed 3D digital intraoral wand scanning replaced messy dental putty impressions, offering 20-micron accuracy and real-time smile simulations.',
      badge: '<i class="bi bi-cpu"></i> Advanced Orthodontic Tech',
      title: 'How 3D Intraoral Scanning Replaced Dental Putty',
      authorName: 'Dr. Julian Chen, DDS',
      authorRole: 'Digital Orthodontics & Surgical Specialist',
      date: 'August 30, 2026',
      readTime: '6 Min Read',
      heroImage: 'assets/images/tech-outcome-simulator.jpg',
      heroImageAlt: 'Doctor Demonstrating 3D Smile Simulation on Large Display',
      lead: 'For generations, entering an orthodontic clinic meant dreading the impression tray: large metal scoops loaded with gooey, cold, gag-inducing alginate putty. Today at SmartSmile, physical impressions are obsolete. Our high-speed 3D optical intraoral scanners capture 6,000 frames per second, transforming smile diagnostics into an interactive, photorealistic digital experience.',
      sections: [
        {
          heading: '1. The Optical Mechanics of 3D Intraoral Scanners',
          paragraphs: [
            'Intraoral scanners utilize safe, non-radiative structured light and confocal optical sensors. As the ergonomic wand passes smoothly over dental arches, it captures thousands of high-definition digital images per second.',
            'Advanced AI algorithms stitch these snapshots into an ultra-dense 3D triangular surface mesh in real time. Within 90 seconds, a full-color, millimeter-accurate computerized model of your teeth and gum architecture appears on the chairside monitor.'
          ],
          callout: {
            title: 'Gag-Free Precision',
            text: 'Patients breathe and swallow naturally throughout the scan. Zero messy trays, zero choking sensations.'
          }
        },
        {
          heading: '2. Sub-Millimeter Accuracy vs. Traditional Putty Distortion',
          paragraphs: [
            'Traditional dental putty is chemically unstable: alginate impressions shrink upon drying and tear when dislodged from deep undercut teeth. Even a microscopic 0.5mm distortion can cause clear aligner trays to track poorly or brackets to fit loosely.',
            'Digital 3D optical scans maintain sub-20-micron precision. This sub-millimeter fidelity ensures that aligner attachments click flawlessly onto enamel and brackets seat with computerized placement accuracy.'
          ],
          inlineImage: {
            src: 'assets/images/hero-home-2.jpg',
            alt: '3D Digital Scan Analysis Screen',
            caption: 'Chairside screens display full 3D jaw articulation and bite occlusion instantly.'
          }
        },
        {
          heading: '3. Real-Time Smile Outcome Simulation',
          paragraphs: [
            'Perhaps the most thrilling feature for patients is the instant chairside outcome simulator. Before ever deciding to start treatment, the digital software calculates orthodontic vector forces and renders an interactive before-and-after simulation of your corrected smile.',
            'You can view your projected final bite from every angle, observe how crowded teeth unravel, and collaborate directly with Dr. Chen to fine-tune your aesthetic preferences.'
          ]
        }
      ],
      takeawaysTitle: 'Benefits of Digital 3D Scanning:',
      takeaways: [
        {
          title: '100% Comfortable & Gag-Free',
          desc: 'Ideal for patients with sensitive gag reflexes or claustrophobia; pause and swallow whenever needed.'
        },
        {
          title: 'Direct Cloud Laboratory Transfer',
          desc: 'Digital files upload to clear aligner fabricators within seconds, saving up to 10 business days of shipping.'
        },
        {
          title: 'Visual Predictive Modeling',
          desc: 'Preview your finished, aligned smile in full photorealistic 3D before your appliances are even manufactured.'
        }
      ],
      faqs: [
        {
          q: 'Does the 3D intraoral scanner emit any radiation?',
          a: 'No. Intraoral scanners use pure visible light and optical sensors—identical to high-end digital cameras. There is zero ionizing radiation involved.'
        },
        {
          q: 'How long does a full mouth 3D digital scan take?',
          a: 'A complete scan of both upper and lower dental arches and your resting bite relationship takes between 60 to 90 seconds.'
        }
      ],
      ctaTitle: 'EXPERIENCE A 3D DIGITAL SMILE SCAN TODAY',
      ctaDesc: 'Book a complimentary 3D scan at SmartSmile and see your simulated smile transformation in real time.',
      relatedIds: ['clear-aligners-vs-braces', 'retainers-stability', 'oral-hygiene-secrets']
    }
  };

  function getArticleIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && BLOG_ARTICLES[id]) {
      return id;
    }
    return 'clear-aligners-vs-braces';
  }

  function renderArticle(articleId) {
    const article = BLOG_ARTICLES[articleId] || BLOG_ARTICLES['clear-aligners-vs-braces'];

    // Update document title and meta description
    document.title = article.metaTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', article.metaDesc);
    }

    // Hero Badge
    const badgeEl = document.getElementById('articleBadge');
    if (badgeEl) {
      badgeEl.innerHTML = article.badge;
    }

    // Hero Title
    const titleEl = document.getElementById('articleTitle');
    if (titleEl) {
      titleEl.textContent = article.title;
    }

    // Hero Meta
    const metaEl = document.getElementById('articleMeta');
    if (metaEl) {
      metaEl.innerHTML = `
        <span><i class="bi bi-person-fill text-primary"></i> ${article.authorName}</span>
        <span>•</span>
        <span><i class="bi bi-calendar3 text-warning"></i> ${article.date}</span>
        <span>•</span>
        <span><i class="bi bi-clock-history"></i> ${article.readTime}</span>
      `;
    }

    // Hero Image
    const heroImgEl = document.getElementById('articleHeroImg');
    if (heroImgEl) {
      heroImgEl.src = article.heroImage;
      heroImgEl.alt = article.heroImageAlt;
    }

    // Article Content Body
    const contentEl = document.getElementById('articleContent');
    if (contentEl) {
      let html = `<p class="lead fw-normal text-secondary mb-4">${article.lead}</p>`;

      article.sections.forEach(function (sec) {
        html += `<h2 class="fs-3 fw-bold mt-5 mb-3" style="color: var(--text-primary);">${sec.heading}</h2>`;
        sec.paragraphs.forEach(function (p) {
          html += `<p>${p}</p>`;
        });

        if (sec.callout) {
          html += `
            <div class="p-3 my-4 rounded-3 border-start border-4 border-primary" style="background: var(--blue-tint);">
              <div class="fw-bold text-primary mb-1"><i class="bi bi-info-circle-fill me-1"></i> ${sec.callout.title}</div>
              <div class="small text-secondary">${sec.callout.text}</div>
            </div>
          `;
        }

        if (sec.inlineImage) {
          html += `
            <div class="rounded-4 overflow-hidden shadow-sm my-4 border">
              <img src="${sec.inlineImage.src}" alt="${sec.inlineImage.alt}" class="w-100 object-fit-cover" style="max-height: 400px;">
              ${sec.inlineImage.caption ? `<div class="p-2 text-center small text-muted bg-light">${sec.inlineImage.caption}</div>` : ''}
            </div>
          `;
        }
      });

      contentEl.innerHTML = html;
    }

    // Takeaways Matrix
    const takeawaysTitleEl = document.getElementById('takeawaysTitle');
    if (takeawaysTitleEl) {
      takeawaysTitleEl.textContent = article.takeawaysTitle || 'Key Decision Factors:';
    }

    const takeawaysListEl = document.getElementById('takeawaysList');
    if (takeawaysListEl) {
      let listHtml = '';
      article.takeaways.forEach(function (t) {
        listHtml += `
          <li class="d-flex align-items-start gap-3 mb-3">
            <i class="bi bi-check-circle-fill text-primary fs-5 mt-1"></i>
            <div>
              <strong>${t.title}:</strong> ${t.desc}
            </div>
          </li>
        `;
      });
      takeawaysListEl.innerHTML = listHtml;
    }

    // FAQs
    const faqContainer = document.getElementById('articleFaq');
    if (faqContainer) {
      let faqHtml = '';
      article.faqs.forEach(function (item, idx) {
        const isOpen = idx === 0;
        faqHtml += `
          <div class="accordion-item ${idx < article.faqs.length - 1 ? 'border-bottom' : ''}">
            <h2 class="accordion-header" id="afaqHeader${idx}">
              <button class="accordion-button ${isOpen ? '' : 'collapsed'} fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#afaqBody${idx}">
                ${item.q}
              </button>
            </h2>
            <div id="afaqBody${idx}" class="accordion-collapse collapse ${isOpen ? 'show' : ''}" data-bs-parent="#articleFaq">
              <div class="accordion-body small text-secondary">
                ${item.a}
              </div>
            </div>
          </div>
        `;
      });
      faqContainer.innerHTML = faqHtml;
    }

    // Related Articles Cards
    const relatedRow = document.getElementById('relatedArticlesRow');
    if (relatedRow && article.relatedIds) {
      let relHtml = '';
      article.relatedIds.forEach(function (relId) {
        const relArticle = BLOG_ARTICLES[relId];
        if (relArticle) {
          relHtml += `
            <div class="col-lg-4 col-md-6">
              <div class="smart-card h-100 d-flex flex-column">
                <div style="height: 190px; overflow: hidden;">
                  <img src="${relArticle.heroImage}" alt="${relArticle.heroImageAlt}" class="w-100 h-100 object-fit-cover">
                </div>
                <div class="smart-card-body d-flex flex-column flex-grow-1">
                  <span class="smart-badge smart-badge-gold mb-2">${relArticle.readTime}</span>
                  <h4 class="fs-6 fw-bold mb-2">${relArticle.title}</h4>
                  <p class="small text-secondary mb-3 flex-grow-1">${relArticle.lead.slice(0, 110)}...</p>
                  <div class="mt-auto">
                    <a href="blog-details.html?id=${relArticle.id}" class="btn-smart-secondary w-100 text-center">Read Article</a>
                  </div>
                </div>
              </div>
            </div>
          `;
        }
      });
      relatedRow.innerHTML = relHtml;
    }

    // CTA Section
    const ctaTitleEl = document.getElementById('articleCtaTitle');
    if (ctaTitleEl) {
      ctaTitleEl.textContent = article.ctaTitle;
    }
    const ctaDescEl = document.getElementById('articleCtaDesc');
    if (ctaDescEl) {
      ctaDescEl.textContent = article.ctaDesc;
    }

    // Smooth scroll to top on dynamic switch
    if (window.scrollY > 300) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function () {
    const currentId = getArticleIdFromUrl();
    renderArticle(currentId);

    // Support browser back/forward buttons
    window.addEventListener('popstate', function () {
      renderArticle(getArticleIdFromUrl());
    });
  });

})();
