export interface ProjectGalleryImage {
  src: string;
  caption: string;
  stage?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial';
  image: string;
  galleryImages?: ProjectGalleryImage[];
  description: string;
  details: {
    location: string;
    scope: string;
    focus: string;
    typology?: string;
  };
}

export const allProjects: ProjectItem[] = [
  {
    id: 'proj-egin-22',
    title: 'Construction of 2 Units of 3-Bedroom Semi-Detached Duplexes and 1 Unit of 5-Bedroom Fully Detached Duplex',
    category: 'Residential',
    image: 'https://i.postimg.cc/fRFLwYPF/EGIN-22-Facade-Detailing-Perimeter-Gating.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/d3qQW677/EGIN-22-Foundation-Blockwork-Setting.jpg',
        caption: 'Foundation Blockwork Setting',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/pXLXz0ML/EGIN-22-Ground-Floor-Blockwork.avif',
        caption: 'Ground Floor Blockwork',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/wxVj1CZ9/EGIN-22-First-Floor-Deck-Formwork.avif',
        caption: 'First-Floor Deck Formwork',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/nchcBdff/EGIN-22-Superstructure-Shell-Cantilever-Box-Framing.avif',
        caption: 'Superstructure Shell & Cantilever Box Framing',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/fRFLwYPF/EGIN-22-Facade-Detailing-Perimeter-Gating.jpg',
        caption: 'Façade Detailing & Perimeter Gating',
        stage: 'Phase 05',
      },
      {
        src: 'https://i.postimg.cc/Jzgn1jgL/EGIN-22-Practical-Completion-Commissioning.jpg',
        caption: 'Practical Completion & Commissioning',
        stage: 'Phase 06',
      },
    ],
    description:
      'A luxury contemporary residential development featuring prominent cantilevered architectural portal frames, warm natural stacked-stone cladding, vertical aluminium louvre privacy screens, glass balustrades, and a fully gated, paved perimeter compound.',
    details: {
      location: 'Egin, Ojodu Berger',
      scope:
        'Full turnkey civil and structural construction spanning foundation trenches and ground beam gridlines, suspended reinforced concrete floor decking, superstructure masonry shells, timber roof trusses, modern flat-parapet framing, exterior texture rendering, natural stone masonry, security fencing, and sliding access gates.',
      focus:
        'Cantilevered box-frame load distribution, high-strength ground beam foundation stabilization, acoustic and structural separation along party walls, exterior moisture-resistant stone veneer detailing, and integrated solar-control architectural screening.',
    },
  },
  {
    id: 'proj-agege',
    title: 'Construction of 5-Bedroom duplex',
    category: 'Residential',
    image: 'https://i.postimg.cc/KzjJnSfw/Agege-Practical-Completion-Turnkey-Handover.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/vT6hNrpM/Agege-Foundation-Blockwork.jpg',
        caption: 'Foundation Blockwork',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/sXLKm60D/Agege-Slab-Conduit-Prep.jpg',
        caption: 'Slab & Conduit Prep',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/RFhXc5dG/Agege-Superstructure-Roof-Framing.jpg',
        caption: 'Superstructure & Roof Framing',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/fLP5C2qK/Agege-Roofing-Facade-Render-Glazing.jpg',
        caption: 'Roofing, Façade Render & Glazing',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/KzjJnSfw/Agege-Practical-Completion-Turnkey-Handover.jpg',
        caption: 'Practical Completion & Turnkey Handover',
        stage: 'Phase 05',
      },
    ],
    description:
      'A bespoke residential duplex featuring a multi-pitched hip-roof profile, recessed cantilevered front balconies, premium stone-faced masonry cladding, stainless steel and glass railings, and a secure gated perimeter wall.',
    details: {
      location: 'Agege',
      scope:
        'Turnkey ground-up construction covering foundation trenching and ground beam casting, suspended reinforced floor decking with MEP conduits, superstructure masonry blockwork, high-pitch timber roof truss fabrication, stone-coated metal tile roofing, exterior wall stone cladding, fenestration, and boundary wall hardscaping.',
      focus:
        'Subgrade compaction and foundation beam grid integration, suspended floor deflection mitigation, multi-gable roof structural bracing and rainwater runoff management, and durable exterior stone-veneer moisture protection.',
    },
  },
  {
    id: 'proj-2-iju-ishaga',
    title: 'Construction of a 5-Bedroom Contemporary Duplex with Pent Floor',
    category: 'Residential',
    image: 'https://i.postimg.cc/k532QxyW/2-IJU-ISHAGA-Practical-Completion-Turnkey-Commissioning.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/Njry2NR2/2-IJU-ISHAGA-Foundation-Plinth-Beams.jpg',
        caption: 'Foundation Plinth Beams',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/Ghf8208f/2-IJU-ISHAGA-Masonry-Blockwork.jpg',
        caption: 'Masonry Blockwork',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/fR03SHYK/2-IJU-ISHAGA-Facade-Plastering-Mouldings.jpg',
        caption: 'Façade Plastering & Mouldings',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/cL8KtDfh/2-IJU-ISHAGA-Exterior-Painting-Penthouse-Terrace.jpg',
        caption: 'Exterior Painting & Penthouse Terrace',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/k532QxyW/2-IJU-ISHAGA-Practical-Completion-Turnkey-Commissioning.jpg',
        caption: 'Practical Completion & Turnkey Commissioning',
        stage: 'Phase 05',
      },
    ],
    description:
      'A high-end multi-level residential duplex featuring a steep pitched gable roof, expansive cantilevered private balconies, an integrated penthouse terrace with a covered pergola lounge, architectural quoins, and premium stamped concrete hardscaping.',
    details: {
      location: 'IJU ISHAGA',
      scope:
        'Ground-up residential development including reinforced concrete substructure and plinth beams, superstructure masonry shell, roof trusses and gable framing, external plastering with decorative cornices, tinted glass balustrades, rooftop pergola installation, exterior dual-tone painting, and full driveway paving.',
      focus:
        'Reinforced plinth beam grid stabilization, cantilevered floor load distribution, high-pitched gable structural stability, tinted toughened-glass safety railings, and stamped concrete surface water drainage.',
    },
  },
  {
    id: 'proj-alpha-beach',
    title: 'Construction of 9 Units of 2-Bedroom Flats',
    category: 'Residential',
    image: 'https://i.postimg.cc/Yqv0TXng/ALPHA-BEACH-Final-Painting-Exterior-Finishes.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/XNHXHM8J/ALPHA-BEACH-Slab-Casting-STARTER-Column-Rebar-PLACEMENT.jpg',
        caption: 'Slab Casting & Starter Column Rebar Placement',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/bYCdCXTs/ALPHA-BEACH-Beam-Formwork-Propping-Setup.jpg',
        caption: 'Beam Formwork & Propping Setup',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/L4ChCdT8/ALPHA-BEACH-Slab-Beam-Reinforcement.jpg',
        caption: 'Slab & Beam Reinforcement',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/90nMrTMS/ALPHA-BEACH-First-Floor-Deck-Casting.jpg',
        caption: 'First-Floor Deck Casting',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/05WrWgf7/ALPHA-BEACH-Blockwork-Upper-Floor-Formwork.jpg',
        caption: 'Blockwork & Upper Floor Formwork',
        stage: 'Phase 05',
      },
      {
        src: 'https://i.postimg.cc/sDMxbn65/ALPHA-BEACH-Structural-Carcass-Completion.jpg',
        caption: 'Structural Carcass Completion',
        stage: 'Phase 06',
      },
      {
        src: 'https://i.postimg.cc/gkxj1MSv/ALPHA-BEACH-Exterior-Masonry-Plastering.jpg',
        caption: 'Exterior Masonry Plastering',
        stage: 'Phase 07',
      },
      {
        src: 'https://i.postimg.cc/Yqv0TXng/ALPHA-BEACH-Final-Painting-Exterior-Finishes.jpg',
        caption: 'Final Painting & Exterior Finishes',
        stage: 'Phase 08',
      },
    ],
    description:
      'A multi-storey contemporary residential development featuring suspended reinforced concrete floors, cantilevered private balconies, modern dual-tone exterior finishes, and integrated perimeter boundary security.',
    details: {
      location: 'Alpha beach road, Eti Osa',
      scope:
        'Ground-up multi-level construction covering substructure and slab casting, suspended floor shuttering and steelfixing, superstructure blockwork masonry, external rendering, fenestration, dual-tone painting, and boundary wall finishes.',
      focus:
        'Multi-level suspended slab deflection control, cantilever structural reinforcement, high-grade concrete beam gridlines, weather-resistant textured masonry coatings, and optimized space planning for multi-unit residential living.',
    },
  },
  {
    id: 'proj-olodi-apapa',
    title: 'Development of a Contemporary Boutique Hotel',
    category: 'Commercial',
    image: 'https://i.postimg.cc/k4yRXBKk/OLODI-APAPA-Envelope-Finishing-Glazing.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/3NJ4yYZw/OLODI-APAPA-Cast-in-Situ-Piling-Works.jpg',
        caption: 'Cast-in-Situ Piling Works',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/Gt7BGVM3/OLODI-APAPA-Pile-Cap-Casting.jpg',
        caption: 'Pile Cap Casting',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/Gt7BGVMF/OLODI-APAPA-Raft-Reinforcement-Ground-Beams.jpg',
        caption: 'Raft Reinforcement & Ground Beams',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/1X5ngsKy/OLODI-APAPA-First-Floor-Decking-Blockwork.jpg',
        caption: 'First-Floor Decking & Blockwork',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/k4yRXBKk/OLODI-APAPA-Envelope-Finishing-Glazing.jpg',
        caption: 'Envelope Finishing & Glazing',
        stage: 'Phase 05',
      },
    ],
    description:
      'A multi-tier hospitality facility engineered on deep foundations, featuring modern geometric concrete façades, tinted fenestration, integrated perimeter security fencing, and an open rooftop terrace lounge.',
    details: {
      location: 'Olodi Apapa',
      scope:
        'Full end-to-end civil and structural execution, including rotary bored piling, reinforced pile caps, monolithic raft slab casting, multi-level structural framing and blockwork, exterior wall rendering, commercial glazing, and perimeter gate and fencing installation.',
      focus:
        'Deep subgrade stabilization via bored cast-in-situ piles, heavy-load pile cap to column load transfer, moisture-barrier damp-proofing beneath raft slabs, cantilevered floor propping, and solar-reflective commercial glazing.',
    },
  },
  {
    id: 'proj-3-iju-ishaga',
    title: 'Remodelling & Completion of 4 Units of 2-Bedroom Flats',
    category: 'Residential',
    image: 'https://i.postimg.cc/DZfy654X/3-IJU-ISHAGA-Practical-Completion-Final-Turnkey-Handover.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/tTrRMPFm/3-IJU-ISHAGA-Blockwork-Wall-Assembly-Plastering-Preparation.jpg',
        caption: 'Blockwork Wall Assembly & Plastering Preparation',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/qRBMwQ6D/3-IJU-ISHAGA-Masonry-Plastering.jpg',
        caption: 'Masonry Plastering',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/hj4PsMQC/3-IJU-ISHAGA-Window-Casements-Facade-Prep.jpg',
        caption: 'Window Casements & Façade Prep',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/d1Qt6nZC/3-IJU-ISHAGA-Exterior-Paint-Application.jpg',
        caption: 'Exterior Paint Application',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/DZfy654X/3-IJU-ISHAGA-Practical-Completion-Final-Turnkey-Handover.jpg',
        caption: 'Practical Completion & Final Turnkey Handover',
        stage: 'Phase 05',
      },
    ],
    description:
      'A modern multi-family residential upgrade transforming an incomplete blockwork structure into contemporary two-bedroom flats featuring private recessed balconies, updated parapet lines, clean exterior render, and integrated perimeter security fencing.',
    details: {
      location: 'Iju Ishaga',
      scope:
        'Renovation, structural blockwork completion, exterior plastering/rendering, fenestration installation, balcony metalwork, full painting, and external perimeter wall and gate finishes.',
      focus:
        'Weatherproof exterior screeding, architectural mouldings and corner reveals, safety glazing with stainless steel balustrades, and durable perimeter security integration.',
    },
  },
  {
    id: 'proj-surulere',
    title: 'Construction of a 4-Bedroom Duplex',
    category: 'Residential',
    image: 'https://i.postimg.cc/1t0wnWhY/SURULERE-Facade-Plastering-Glazing.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/QC07SHMh/SURULERE-Pile-Cap-and-Ground-Beam-Formwork.jpg',
        caption: 'Pile Cap and Ground Beam Formwork',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/Y0pg11tq/SURULERE-Ground-Floor-Blockwork.jpg',
        caption: 'Ground Floor Blockwork',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/BbqDxxJb/SURULERE-First-Floor-Deck-Preparation.jpg',
        caption: 'First-Floor Deck Preparation',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/BbqDxxJv/SURULERE-Superstructure-Framing.jpg',
        caption: 'Superstructure Framing',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/1t0wnWhY/SURULERE-Facade-Plastering-Glazing.jpg',
        caption: 'Façade Plastering & Glazing',
        stage: 'Phase 05',
      },
    ],
    description:
      'A modern multi-level residential development featuring cantilevered upper-floor projections, a private penthouse level, clean contemporary parapet lines, and large-format glazed fenestration.',
    details: {
      location: 'SURULERE',
      scope:
        'Ground-up civil and structural execution covering foundation beam shuttering and rebar reinforcement, ground floor blockwork and column casting, suspended floor slab and beam construction, superstructure shell enclosure, full exterior cement rendering, and window installation.',
      focus:
        'Interconnected ground beam load redistribution, cantilevered upper-level structural propping, damp-proofing membrane integration beneath suspended slabs, and weather-sealed envelope plastering for protective glazing installation.',
    },
  },
  {
    id: 'proj-byd',
    title: 'BYD Commercial Automotive Showroom',
    category: 'Commercial',
    image: 'https://i.postimg.cc/RZ8T3cTP/BYD-Finished-Showroom-Handover.jpg',
    galleryImages: [
      {
        src: 'https://i.postimg.cc/kgZyVxyh/BYD-Piling-Works-AND-Foundation-Drilling.jpg',
        caption: 'Piling Works & Foundation Drilling',
        stage: 'Phase 01',
      },
      {
        src: 'https://i.postimg.cc/jS9hWzXT/BYD-Ground-Beam-Formwork-Reinforcement.jpg',
        caption: 'Ground Beam Formwork & Reinforcement',
        stage: 'Phase 02',
      },
      {
        src: 'https://i.postimg.cc/fRFv3xvp/BYD-Ground-Floor-Oversite-Concrete-Pouring.jpg',
        caption: 'Ground Floor Oversite Concrete Pouring',
        stage: 'Phase 03',
      },
      {
        src: 'https://i.postimg.cc/K8V5Kn5H/BYD-First-Floor-Decking-Beam-Formwork-Setup.jpg',
        caption: 'First Floor Decking & Beam Formwork Setup',
        stage: 'Phase 04',
      },
      {
        src: 'https://i.postimg.cc/GmNjBkQ1/BYD-Structural-Frame-Completion.jpg',
        caption: 'Structural Frame Completion',
        stage: 'Phase 05',
      },
      {
        src: 'https://i.postimg.cc/RZ8T3cTP/BYD-Finished-Showroom-Handover.jpg',
        caption: 'Finished Showroom Handover',
        stage: 'Phase 06',
      },
    ],
    description:
      'A modern multi-tier commercial showroom featuring expansive curtain wall glazing, heavy-duty industrial interlocking driveways, corporate composite façade cladding, and reinforced structural frameworks designed for high-load vehicle displays.',
    details: {
      location: 'Victoria Island / Lekki Corridor, Lagos',
      scope:
        'Ground-up commercial showroom engineering, structural framing, exterior envelope fabrication, and turn-key handover.',
      focus:
        'Deep piled subgrade stabilization, load-bearing ground beam gridlines, suspended structural floor systems, integrated curtain-wall glazing, and corporate brand architectural finishes.',
    },
  },
];
