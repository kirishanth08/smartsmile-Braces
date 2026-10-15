/**
 * SmartSmile — Treatment Progress Journey Visualization
 * Milestone interaction & details updater
 */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initProgressMilestones();
  });

  const milestoneData = {
    1: {
      title: 'Initial Consultation',
      status: 'Completed',
      date: 'June 10, 2026',
      notes: 'Comprehensive 3D intraoral scan completed. Facial symmetry and bite alignment analyzed.'
    },
    2: {
      title: 'Digital Treatment Planning',
      status: 'Completed',
      date: 'June 24, 2026',
      notes: 'Orthodontic plan generated. Patient approved personalized clear aligner sequence.'
    },
    3: {
      title: 'Treatment Started',
      status: 'Completed',
      date: 'July 15, 2026',
      notes: 'First set of aligners delivered. Attachment bonding completed with Dr. Olivia Carter.'
    },
    4: {
      title: 'Active Alignment Phase',
      status: 'Active (62% Completed)',
      date: 'Current Stage (Tray 18 of 28)',
      notes: 'Arch expansion progressing smoothly. Overjet reduction in progress. Next check-in Oct 18.'
    },
    5: {
      title: 'Refinement Stage',
      status: 'Upcoming',
      date: 'Estimated Dec 2026',
      notes: 'Micro-movements and final contact polishing to achieve optimal aesthetic alignment.'
    },
    6: {
      title: 'Retention Phase',
      status: 'Pending',
      date: 'Estimated Feb 2027',
      notes: 'Custom SmartSmile clear retainers fitted to maintain lifelong tooth stability.'
    },
    7: {
      title: 'Completed Smile',
      status: 'Pending',
      date: 'Smile Graduation',
      notes: 'Lifelong healthy smile achieved. Annual retention check-in scheduled.'
    }
  };

  function initProgressMilestones() {
    const nodes = document.querySelectorAll('.milestone-node');
    const detailTitle = document.getElementById('milestoneDetailTitle');
    const detailStatus = document.getElementById('milestoneDetailStatus');
    const detailDate = document.getElementById('milestoneDetailDate');
    const detailNotes = document.getElementById('milestoneDetailNotes');

    if (!nodes.length) return;

    nodes.forEach((node) => {
      node.style.cursor = 'pointer';
      node.addEventListener('click', () => {
        const step = node.getAttribute('data-step');
        if (!step || !milestoneData[step]) return;

        nodes.forEach((n) => n.classList.remove('selected-node'));
        node.classList.add('selected-node');

        const data = milestoneData[step];
        if (detailTitle) detailTitle.textContent = data.title;
        if (detailStatus) detailStatus.textContent = data.status;
        if (detailDate) detailDate.textContent = data.date;
        if (detailNotes) detailNotes.textContent = data.notes;
      });
    });
  }
})();
