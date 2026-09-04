(function () {
  "use strict";

  const CONTACT = {
    phone: "+212 5 37 37 40 96",
    tel: "+212537374096",
    email: "cliniqueveterinairedugharb@gmail.com",
    address: "464 avenue Mohammed V, Kénitra, Maroc",
    map: "https://www.google.com/maps/search/?api=1&query=464+avenue+Mohammed+V+Kenitra+Maroc"
  };

  const services = [
    { slug: "consultations", title: "Consultations", icon: "stethoscope", short: "Prévention, diagnostic et suivi personnalisé." },
    { slug: "vaccins", title: "Vaccins & antiparasitaires", icon: "shield", short: "Une protection adaptée à chaque étape de vie." },
    { slug: "sterilisation", title: "Stérilisation", icon: "scissors", short: "Une intervention encadrée, du bilan au réveil." },
    { slug: "operations", title: "Opérations chirurgicales", icon: "activity", short: "Une prise en charge rigoureuse et rassurante." },
    { slug: "hospitalisation", title: "Hospitalisation", icon: "heartPulse", short: "Surveillance, confort et soins continus." },
    { slug: "analyses", title: "Analyses vétérinaires", icon: "microscope", short: "Des examens pour décider plus vite et plus juste." },
    { slug: "dentisterie", title: "Dentisterie", icon: "tooth", short: "Prévenir la douleur et préserver la santé buccale." },
    { slug: "medicaments", title: "Pharmacie vétérinaire", icon: "pill", short: "Des traitements délivrés avec un conseil clinique." },
    { slug: "vermifugation", title: "Vermifugation & parasites", icon: "bug", short: "Protéger votre animal, votre foyer et son environnement." },
    { slug: "alimentation", title: "Alimentation diététique", icon: "apple", short: "Des conseils nutritionnels selon ses besoins." },
    { slug: "nac", title: "Nouveaux animaux de compagnie", icon: "rabbit", short: "Des soins attentifs pour les NAC." }
  ];

  const serviceDetails = {
    consultations: {
      eyebrow: "Médecine préventive",
      title: "Consultations vétérinaires",
      intro: "Une consultation attentive pour comprendre les signes, prévenir les maladies et construire un suivi adapté à votre animal.",
      noteTitle: "Quand consulter ?",
      note: "Dès qu'un changement d'appétit, de comportement ou d'énergie vous inquiète.",
      body: `
        <div class="lead-box">Les consultations régulières permettent de détecter plus tôt les problèmes de santé, d'éviter du stress à votre animal et d'organiser un plan de soins clair.</div>
        <h2>Une visite pensée pour lui</h2>
        <p>Nous prenons le temps d'écouter vos observations, d'examiner votre animal avec douceur et de vous expliquer chaque recommandation dans un langage simple.</p>
        <div class="benefit-grid">
          ${benefit("stethoscope", "Bilan clinique", "Poids, cœur, respiration, peau, yeux, oreilles et mobilité.")}
          ${benefit("shield", "Prévention", "Vaccins, parasites, alimentation et hygiène de vie.")}
          ${benefit("activity", "Suivi ciblé", "Examens complémentaires si les signes le nécessitent.")}
          ${benefit("message", "Conseils clairs", "Un plan de soins expliqué et adapté à votre quotidien.")}
        </div>
        <h3>Consultations proposées</h3>
        ${careTable(["Consultation", "Pour qui ?", "Durée indicative"], [
          ["Bilan général", "Chien, chat ou NAC", "20–30 min"],
          ["Première visite", "Jeune animal", "30 min"],
          ["Suivi", "Traitement en cours", "15–20 min"],
          ["Sénior", "Animal de 7 ans et +", "30–40 min"]
        ])}`
    },
    sterilisation: {
      eyebrow: "Chirurgie de convenance",
      title: "Stérilisation & castration",
      intro: "Une prise en charge sécurisée, depuis le bilan préopératoire jusqu'aux conseils de retour à la maison.",
      noteTitle: "À savoir",
      note: "Chaque indication est discutée selon l'espèce, l'âge, la santé et le mode de vie.",
      body: `
        <div class="lead-box">Depuis 1980, notre clinique accompagne les animaux de Kénitra et leurs propriétaires avec une équipe expérimentée et un équipement adapté.</div>
        <h2>Les bénéfices possibles</h2>
        <ol class="numbered-list">
          <li><div><strong>Éviter les portées non désirées</strong><br><span class="muted">Une décision responsable pour votre animal et son environnement.</span></div></li>
          <li><div><strong>Réduire certains risques de santé</strong><br><span class="muted">Notamment certaines affections de l'appareil reproducteur.</span></div></li>
          <li><div><strong>Limiter certains comportements hormonaux</strong><br><span class="muted">Comme le marquage, les fugues ou les chaleurs.</span></div></li>
          <li><div><strong>Prévenir certaines complications</strong><br><span class="muted">Le bénéfice dépend toujours du profil individuel.</span></div></li>
        </ol>
        <p class="muted">Une consultation préopératoire est indispensable. Elle permet d'évaluer le bon moment, le protocole anesthésique et les consignes de préparation.</p>`
    },
    vaccins: {
      eyebrow: "Prévention",
      title: "Vaccins & traitements antiparasitaires",
      intro: "Un calendrier de prévention ajusté à l'âge, au mode de vie et aux déplacements de votre compagnon.",
      noteTitle: "Protection sur mesure",
      note: "Le protocole est revu à chaque visite, sans vaccination inutile.",
      body: `
        <div class="lead-box">Vacciner et traiter les parasites aide à prévenir des maladies parfois graves, dont certaines peuvent aussi concerner les humains.</div>
        <h2>Un suivi simple et lisible</h2>
        <p>Nous vérifions le carnet de santé, les rappels précédents, les habitudes de sortie et les risques particuliers avant toute recommandation.</p>
        ${careTable(["Animal", "Étape", "Prévention discutée"], [
          ["Chiot", "Dès les premières semaines", "Primo-vaccination et parasites"],
          ["Chien adulte", "Selon les rappels", "Vaccins essentiels et mode de vie"],
          ["Chaton", "Dès les premières semaines", "Primo-vaccination et parasites"],
          ["Chat adulte", "Intérieur ou extérieur", "Rappels et protection ciblée"]
        ])}
        <p class="muted">Votre vétérinaire confirme toujours le protocole après examen clinique.</p>`
    },
    operations: {
      eyebrow: "Chirurgie vétérinaire",
      title: "Opérations chirurgicales",
      intro: "Une approche méthodique pour préparer, opérer et surveiller votre animal dans les meilleures conditions possibles.",
      noteTitle: "Notre approche",
      note: "Information, préparation, anesthésie surveillée et accompagnement au retour.",
      body: `
        <div class="lead-box">Notre équipe s'appuie sur un examen préopératoire, un protocole adapté et une surveillance attentive du réveil.</div>
        <h2>Interventions courantes</h2>
        <div class="benefit-grid">
          ${benefit("scissors", "Stérilisation", "Chirurgie de convenance après évaluation clinique.")}
          ${benefit("activity", "Chirurgie des tissus mous", "Plaies, masses et interventions abdominales selon indication.")}
          ${benefit("heartPulse", "Urologie", "Prise en charge chirurgicale lorsque le diagnostic le nécessite.")}
          ${benefit("bone", "Os & articulations", "Évaluation et orientation pour les affections orthopédiques.")}
        </div>
        <a class="text-link" href="notre-approche.html">Découvrir notre approche chirurgicale ${icon("arrow")}</a>`
    },
    analyses: {
      eyebrow: "Diagnostic",
      title: "Analyses vétérinaires",
      intro: "Des examens complémentaires pour éclairer un diagnostic, mesurer un risque et suivre l'évolution de la santé.",
      noteTitle: "Décider tôt",
      note: "Une analyse n'est jamais isolée : elle complète l'examen clinique.",
      body: `
        <div class="lead-box">Les analyses peuvent aider à identifier un problème avant qu'il ne s'aggrave et à choisir un traitement plus précisément.</div>
        <h2>Quand une analyse peut être utile</h2>
        <ul class="check-list">
          ${check("Refus soudain de l'eau ou de la nourriture")}
          ${check("Difficulté à respirer ou essoufflement constant")}
          ${check("Vomissements ou diarrhée persistants")}
          ${check("Fatigue, faiblesse ou changement brutal de comportement")}
          ${check("Bilan avant anesthésie ou suivi d'un traitement")}
        </ul>
        ${careTable(["Examen", "Ce qu'il aide à évaluer", "Résultat"], [
          ["Bilan sanguin", "Organes, inflammation, cellules", "Selon examen"],
          ["Analyse urinaire", "Reins, voies urinaires", "Selon examen"],
          ["Prélèvement", "Peau, oreilles ou masse", "Selon technique"]
        ])}`
    },
    vermifugation: {
      eyebrow: "Prévention parasitaire",
      title: "Vermifugation & parasites",
      intro: "Une protection régulière qui tient compte de l'espèce, de l'âge et du niveau d'exposition de votre animal.",
      noteTitle: "Le bon rythme",
      note: "Il varie selon les sorties, les voyages, l'alimentation et les autres animaux du foyer.",
      body: `
        <h2>Pourquoi est-ce important ?</h2>
        <ol class="numbered-list">
          <li><div><strong>Préserver sa santé</strong><br><span class="muted">Les parasites peuvent provoquer diarrhée, vomissements, amaigrissement et retard de croissance.</span></div></li>
          <li><div><strong>Protéger le foyer</strong><br><span class="muted">Certains parasites peuvent se transmettre à l'humain, en particulier aux enfants.</span></div></li>
          <li><div><strong>Réduire la contamination</strong><br><span class="muted">Une prévention adaptée limite les œufs et parasites dans l'environnement.</span></div></li>
        </ol>
        <div class="lead-box">N'utilisez pas un produit destiné à une autre espèce : certains antiparasitaires pour chien sont dangereux pour le chat.</div>`
    },
    hospitalisation: {
      eyebrow: "Soins & surveillance",
      title: "Hospitalisation",
      intro: "Un espace calme et surveillé pour administrer les soins, observer l'évolution et soutenir la récupération.",
      noteTitle: "Rester informé",
      note: "Nous convenons avec vous du rythme des nouvelles et des prochaines décisions.",
      body: `
        <div class="lead-box">Notre équipe veille au confort, à l'hygiène et à la sécurité des animaux hospitalisés, avec un protocole adapté à leur état.</div>
        <div class="treatment-grid">
          <div class="treatment-item"><strong>Avant l'admission</strong><p>Apportez les ordonnances, traitements, analyses et informations utiles. Respectez les consignes de jeûne données par l'équipe.</p></div>
          <div class="treatment-item"><strong>Pendant le séjour</strong><p>Surveillance clinique, administration des soins et ajustement selon l'évolution.</p></div>
          <div class="treatment-item"><strong>Au retour</strong><p>Installez votre animal dans un endroit propre, sec et calme. Suivez précisément l'ordonnance.</p></div>
          <div class="treatment-item"><strong>Quand rappeler</strong><p>Douleur inhabituelle, gonflement, écoulement, refus de boire ou de manger, ou changement inquiétant.</p></div>
        </div>`
    },
    medicaments: {
      eyebrow: "Pharmacie vétérinaire",
      title: "Médicaments",
      intro: "Des traitements vétérinaires expliqués clairement, avec la dose, la durée et les précautions adaptées.",
      noteTitle: "Sécurité d'abord",
      note: "Ne donnez jamais un médicament humain sans avis vétérinaire.",
      body: `
        <h2>Comment ce service aide votre animal</h2>
        <div class="benefit-grid">
          ${benefit("check", "Prescription adaptée", "Une dose calculée selon l'espèce, le poids et le diagnostic.")}
          ${benefit("message", "Administration expliquée", "Nos conseils pour donner le traitement plus sereinement.")}
          ${benefit("clock", "Durée claire", "Un schéma précis pour limiter oublis et erreurs.")}
          ${benefit("shield", "Suivi des effets", "Les signes attendus et ceux qui doivent conduire à nous rappeler.")}
        </div>
        <div class="lead-box">Conservez les médicaments dans leur emballage d'origine, hors de portée des enfants et des animaux.</div>`
    },
    dentisterie: {
      eyebrow: "Santé bucco-dentaire",
      title: "Dentisterie",
      intro: "Prévenir la douleur, l'infection et les conséquences du tartre sur le bien-être général de votre compagnon.",
      noteTitle: "Un contrôle régulier",
      note: "La bouche peut sembler normale alors qu'une gêne s'installe déjà.",
      body: `
        <div class="lead-box">Une bonne santé dentaire participe au confort, à l'appétit et à la santé générale. Le dépistage précoce permet d'agir avant une douleur importante.</div>
        <h2>Les signes à surveiller</h2>
        <div class="benefit-grid">
          ${benefit("alert", "Mauvaise haleine", "Une odeur persistante mérite un contrôle.")}
          ${benefit("tooth", "Tartre ou gencives rouges", "Plaque visible, saignement ou inflammation.")}
          ${benefit("apple", "Difficulté à manger", "Mastication d'un seul côté ou aliments délaissés.")}
          ${benefit("activity", "Changement de comportement", "Irritabilité, salivation ou frottement du museau.")}
        </div>
        <p>Selon le bilan, nous discutons avec vous des soins, de l'anesthésie et de la prévention à la maison.</p>`
    },
    alimentation: {
      eyebrow: "Nutrition vétérinaire",
      title: "Alimentation animale diététique",
      intro: "Des repères concrets pour nourrir votre animal selon son âge, son poids, son activité et sa santé.",
      noteTitle: "Chaque animal est unique",
      note: "Une ration adaptée se raisonne avec son poids idéal et son état de santé.",
      body: `
        <div class="lead-box">Certaines pathologies sont directement influencées par l'alimentation. Un conseil précis peut soutenir la prévention et le traitement.</div>
        <h2>Les bases à retenir</h2>
        ${careTable(["Animal", "À privilégier", "À éviter"], [
          ["Chat", "Aliment complet adapté à l'âge, eau fraîche", "Restes gras, oignon, ail, chocolat"],
          ["Chien", "Ration mesurée et aliment complet", "Chocolat, raisins, xylitol, os cuits"],
          ["Animal en surpoids", "Plan progressif et suivi du poids", "Restriction brutale et friandises non comptées"],
          ["Animal malade", "Aliment conseillé après diagnostic", "Changement improvisé ou complément non validé"]
        ])}
        <p class="muted">Toute transition alimentaire se fait progressivement, sauf indication vétérinaire différente.</p>`
    },
    nac: {
      eyebrow: "Médecine des NAC",
      title: "Nouveaux animaux de compagnie",
      intro: "Des conseils et des soins adaptés aux besoins particuliers des petits mammifères, reptiles, oiseaux et autres NAC.",
      noteTitle: "Une consultation spécifique",
      note: "Apportez si possible des photos de l'habitat, de l'alimentation et des installations.",
      body: `
        <h2>Quels animaux sont concernés ?</h2>
        <div class="benefit-grid">
          ${benefit("rabbit", "Petits mammifères", "Lapins, rongeurs et autres petits compagnons.")}
          ${benefit("activity", "Reptiles & amphibiens", "Évaluation de l'environnement, de l'alimentation et de la santé.")}
          ${benefit("feather", "Oiseaux", "Bilan clinique et conseils d'entretien adaptés.")}
          ${benefit("heart", "Autres NAC", "Contactez-nous avant la visite pour confirmer la prise en charge.")}
        </div>
        <h3>Les signes qui nécessitent un avis</h3>
        <ul class="check-list">
          ${check("Refus de manger ou modification des selles")}
          ${check("Respiration inhabituelle ou baisse d'activité")}
          ${check("Blessure, masse ou gonflement")}
          ${check("Changement soudain de comportement")}
        </ul>
        <div class="lead-box">Chez de nombreux NAC, une baisse d'appétit est rapidement préoccupante. Appelez la clinique sans attendre.</div>`
    }
  };

  const pageTitles = {
    home: "Clinique Vétérinaire du Gharb — Kénitra",
    appointment: "Prendre rendez-vous — Clinique Vétérinaire du Gharb",
    approach: "Notre approche chirurgicale — Clinique Vétérinaire du Gharb",
    information: "Demande de renseignements — Clinique Vétérinaire du Gharb",
    emergency: "Urgences vétérinaires — Clinique Vétérinaire du Gharb",
    "emergency-operations": "Opérations urgentes — Clinique Vétérinaire du Gharb",
    "emergency-steps": "Premiers gestes en urgence — Clinique Vétérinaire du Gharb",
    "emergency-identify": "Identifier une urgence — Clinique Vétérinaire du Gharb",
    "emergency-faq": "Questions sur les urgences — Clinique Vétérinaire du Gharb",
    "emergency-treatment": "Prise en charge d'urgence — Clinique Vétérinaire du Gharb",
    contact: "Contact — Clinique Vétérinaire du Gharb"
  };

  function icon(name) {
    const paths = {
      paw: '<circle cx="8" cy="7" r="2"/><circle cx="16" cy="7" r="2"/><circle cx="5" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><path d="M8.5 18.2c0-3 1.7-5.2 3.5-5.2s3.5 2.2 3.5 5.2c0 1.6-1.2 2.8-3.5 2.8s-3.5-1.2-3.5-2.8Z"/>',
      menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
      close: '<path d="m6 6 12 12M18 6 6 18"/>',
      moon: '<path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.5 8.5 0 1 0 20 15.5Z"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/>',
      chevron: '<path d="m8 10 4 4 4-4"/>',
      arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
      calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
      clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>',
      mapPin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
      mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      check: '<path d="m5 12 4 4L19 6"/>',
      home: '<path d="m3 11 9-8 9 8v9a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
      stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 18a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="14" r="2"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
      scissors: '<circle cx="6" cy="7" r="3"/><circle cx="6" cy="17" r="3"/><path d="m8.5 8.5 11 7.5M8.5 15.5 19 8"/>',
      activity: '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
      heartPulse: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.7 12h4l1.5-3 2.5 6 2-3h6.6"/>',
      microscope: '<path d="m6 18 3-3M10 14a5 5 0 0 0 7 0M9 2h4v6H9zM11 8l-3 5M5 22h14M15 19a5 5 0 0 0 2-9"/>',
      tooth: '<path d="M12 5c-2.5-3-7-2.5-8 1.5S5.5 20 8 21c2 .8 1.5-6 4-6s2 6.8 4 6c2.5-1 5-10.5 4-14.5S14.5 2 12 5Z"/>',
      pill: '<path d="m10.5 20.5-7-7a5 5 0 0 1 7-7l7 7a5 5 0 0 1-7 7ZM7 10l7 7"/>',
      bug: '<path d="M8 2h8M9 7l-1-3M15 7l1-3M5 13H2M22 13h-3M6 8 3 6M18 8l3-2M6 18l-3 2M18 18l3 2"/><rect x="6" y="7" width="12" height="15" rx="6"/><path d="M6 13h12M12 7v15"/>',
      apple: '<path d="M12 6c-2-3-7-2-8 3-1 6 3 12 6 12 1 0 1.2-.6 2-.6s1 .6 2 .6c3 0 7-6 6-12-1-5-6-6-8-3Z"/><path d="M12 6c0-3 2-5 5-5M14 4c1-2 3-2 5-1"/>',
      rabbit: '<path d="M9 9C5 5 5 1 7 1c3 0 4 5 5 8M15 9c4-4 4-8 2-8-3 0-4 5-5 8"/><circle cx="12" cy="15" r="7"/><circle cx="9.5" cy="14" r=".7"/><circle cx="14.5" cy="14" r=".7"/><path d="m11 17 1 1 1-1"/>',
      message: '<path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/>',
      bone: '<path d="M7 8a3 3 0 1 1-4-4 3 3 0 1 1 4-1l10 10a3 3 0 1 1 4 4 3 3 0 1 1-4 4Z"/>',
      alert: '<path d="M10.3 2.8 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.8a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
      feather: '<path d="M20.2 4.8c-4.4-4.4-11.5 1-14 6.4C4.4 15 4 19 4 21c2-1 5.5-2.6 8.8-5.2 4.6-3.7 9.7-8.7 7.4-11Z"/><path d="M4 21 16 8M8 17h5M11 13h5"/>',
      heart: '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>',
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
      user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
      pet: '<path d="M8 12c-4 0-6 2.5-6 5s2 4 5 4h10c3 0 5-1.5 5-4s-2-5-6-5M8 12V8a4 4 0 0 1 8 0v4M6 7 3 5M18 7l3-2"/>',
      ambulance: '<path d="M3 6h12v12H3zM15 10h4l2 3v5h-6zM7 10h4M9 8v4"/><circle cx="7" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
      plus: '<path d="M12 5v14M5 12h14"/>'
    };
    return `<svg class="icon" aria-hidden="true" viewBox="0 0 24 24">${paths[name] || paths.heart}</svg>`;
  }

  function benefit(iconName, title, text) {
    return `<div class="benefit-item"><span class="card-icon">${icon(iconName)}</span><strong>${title}</strong><p>${text}</p></div>`;
  }

  function check(text) {
    return `<li>${icon("check")}<span>${text}</span></li>`;
  }

  function careTable(headings, rows) {
    return `<div class="care-table-wrap"><table class="care-table"><thead><tr>${headings.map((heading) => `<th>${heading}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell, index) => `<td>${index === 0 ? `<strong>${cell}</strong>` : cell}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }

  function brand() {
    return `<img class="brand-logo" src="logo.png" alt="" width="58" height="58"><span><span class="brand-name">Clinique Vétérinaire du Gharb</span><span class="brand-place">Kénitra · depuis 1980</span></span>`;
  }

  function serviceLinks(mobile) {
    return services.map((service) => `<a class="menu-link" href="${service.slug}.html" data-route="${service.slug}">${icon(service.icon)}<span>${service.title}</span></a>`).join("");
  }

  function headerMarkup() {
    return `
      <a class="skip-link" href="#main-content">Aller au contenu</a>
      <header class="site-header">
        <div class="container header-row">
          <a class="brand" href="index.html" aria-label="Clinique Vétérinaire du Gharb — Accueil">${brand()}</a>
          <nav class="desktop-nav" aria-label="Navigation principale">
            <a class="nav-link" href="index.html" data-route="home">Accueil</a>
            <div class="nav-menu-wrap">
              <button class="nav-trigger" type="button" aria-expanded="false" aria-controls="services-menu">Services ${icon("chevron")}</button>
              <div class="services-menu" id="services-menu">${serviceLinks(false)}</div>
            </div>
            <a class="nav-link" href="urgences.html" data-route="emergency">Urgences</a>
            <a class="nav-link" href="renseignements.html" data-route="information">Renseignements</a>
            <a class="nav-link" href="contact.html" data-route="contact">Contact</a>
          </nav>
          <button class="language-toggle" type="button" data-language-toggle aria-label="Afficher le site en arabe marocain" title="Changer de langue"><span aria-hidden="true">ع</span><span class="language-toggle-label">العربية</span></button>
          <button class="icon-button theme-toggle" type="button" aria-label="Activer le mode sombre" title="Changer de thème">${icon("moon")}</button>
          <a class="btn btn-primary header-appointment" href="rendez-vous.html">Prendre rendez-vous</a>
          <button class="menu-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-drawer">${icon("menu")}</button>
        </div>
      </header>
      <div class="drawer-scrim" aria-hidden="true"></div>
      <aside class="mobile-drawer" id="mobile-drawer" aria-label="Menu mobile" aria-hidden="true">
        <div class="drawer-head"><a class="brand" href="index.html">${brand()}</a><button class="icon-button drawer-close" type="button" aria-label="Fermer le menu">${icon("close")}</button></div>
        <nav class="mobile-links" aria-label="Navigation mobile">
          <a class="nav-link" href="index.html" data-route="home">Accueil ${icon("arrow")}</a>
          <div class="mobile-section-title">Nos services</div>
          <div class="mobile-service-grid">${serviceLinks(true)}</div>
          <div class="mobile-section-title">À votre service</div>
          <a class="nav-link" href="urgences.html" data-route="emergency">Urgences ${icon("arrow")}</a>
          <a class="nav-link" href="renseignements.html" data-route="information">Renseignements ${icon("arrow")}</a>
          <a class="nav-link" href="contact.html" data-route="contact">Contact ${icon("arrow")}</a>
        </nav>
        <div class="drawer-actions"><button class="btn btn-secondary" type="button" data-language-toggle>العربية</button><a class="btn btn-primary" href="rendez-vous.html">Prendre rendez-vous</a><a class="btn btn-urgent" href="tel:${CONTACT.tel}">${icon("phone")} Appeler la clinique</a></div>
      </aside>`;
  }

  function footerMarkup() {
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div><a class="brand footer-brand" href="index.html">${brand()}</a><p class="footer-copy">Une médecine attentive et compréhensible pour les animaux de Kénitra et les personnes qui les aiment.</p></div>
            <div><div class="footer-title">Explorer</div><ul class="footer-links"><li><a href="index.html#services">Nos services</a></li><li><a href="rendez-vous.html">Rendez-vous</a></li><li><a href="urgences.html">Urgences</a></li><li><a href="contact.html">Nous trouver</a></li></ul></div>
            <div><div class="footer-title">Horaires</div><div class="hours-list"><div class="hours-line"><span>Lun – Ven</span><strong>08:30 – 19:00</strong></div><div class="hours-line"><span>Samedi</span><strong>09:00 – 17:00</strong></div><div class="hours-line"><span>Dimanche</span><strong>Urgences</strong></div></div></div>
            <div><div class="footer-title">Contact</div><ul class="footer-links"><li><a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></li><li><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></li><li><a href="${CONTACT.map}" target="_blank" rel="noopener">${CONTACT.address}</a></li></ul></div>
          </div>
          <div class="footer-bottom"><span>© <span id="year"></span> Clinique Vétérinaire du Gharb</span><span>Site d'information — en cas d'urgence, appelez la clinique.</span><button class="footer-consent-link" type="button" data-consent-settings>Gérer mes préférences</button></div>
        </div>
      </footer>
      <div class="toast" id="toast" role="status" aria-live="polite">${icon("check")}<span></span></div>`;
  }

  function breadcrumbs(items) {
    return `<nav class="breadcrumbs" aria-label="Fil d'Ariane"><a href="index.html">Accueil</a>${items.map((item) => `${icon("chevron")}${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`}`).join("")}</nav>`;
  }

  function pageHero(eyebrow, title, intro, noteTitle, note) {
    return `<section class="page-hero"><div class="container">${breadcrumbs([{ label: title }])}<div class="page-hero-grid"><div><span class="eyebrow">${eyebrow}</span><h1>${title}</h1><p>${intro}</p></div>${note ? `<aside class="page-hero-note">${icon("info")}<strong>${noteTitle}</strong><p>${note}</p></aside>` : ""}</div></div></section>`;
  }

  function appointmentSideCard() {
    return `<aside class="side-card"><div class="side-card-body"><span class="eyebrow">Besoin d'aide ?</span><h3>Nous sommes à votre écoute</h3><p>Pour une situation urgente ou si vous hésitez sur le motif, appelez directement la clinique.</p><div class="side-meta"><span>${icon("phone")}<a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></span><span>${icon("clock")}Lun–ven 08:30–19:00<br>Sam 09:00–17:00</span><span>${icon("mapPin")}${CONTACT.address}</span></div><a class="btn btn-primary btn-block" href="rendez-vous.html">Prendre rendez-vous</a><a class="btn btn-urgent btn-block" href="urgences.html">Voir les urgences</a></div></aside>`;
  }

  function servicePage(slug) {
    const service = serviceDetails[slug];
    return `${pageHero(service.eyebrow, service.title, service.intro, service.noteTitle, service.note)}<section class="content-shell"><div class="container content-grid"><article>${`<div class="prose-card">${service.body}<div class="button-row" style="margin-top:32px"><a class="btn btn-primary" href="rendez-vous.html?service=${slug}">${icon("calendar")} Prendre rendez-vous</a>${slug === "hospitalisation" || slug === "alimentation" || slug === "nac" ? `<a class="btn btn-urgent" href="urgences.html">Contact d'urgence</a>` : ""}</div></div>`}</article>${appointmentSideCard()}</div></section>`;
  }

  function homePage() {
    const featured = services.slice(0, 6);
    return `
      <main id="main-content">
        <section class="hero"><div class="container"><div class="hero-panel"><img class="hero-image" src="assets/images/hero-clinic.png" alt="Une vétérinaire examine doucement un chien avec sa propriétaire"><div class="hero-copy"><div><span class="eyebrow">Soigner avec attention, depuis 1980</span><h1>Leur santé mérite une écoute sincère.</h1><p class="hero-lead">À Kénitra, notre équipe accompagne chaque animal avec une médecine claire, douce et exigeante — de la prévention aux urgences.</p><div class="hero-actions"><a class="btn btn-primary" href="rendez-vous.html">${icon("calendar")} Prendre rendez-vous</a><a class="btn btn-secondary" href="tel:${CONTACT.tel}">${icon("phone")} ${CONTACT.phone}</a></div><div class="trust-row"><span class="trust-item">${icon("check")} Équipe expérimentée</span><span class="trust-item">${icon("check")} Chien, chat & NAC</span><span class="trust-item">${icon("check")} Soins personnalisés</span></div></div></div></div></div></section>
        <section class="quick-contact"><div class="container"><div class="quick-contact-grid"><a class="quick-contact-item" href="contact.html"><span class="quick-contact-icon">${icon("mapPin")}</span><span><small>Nous trouver</small><strong>Centre de Kénitra</strong><small>464 avenue Mohammed V</small></span></a><a class="quick-contact-item" href="contact.html#horaires"><span class="quick-contact-icon">${icon("clock")}</span><span><small>Ouvert en semaine</small><strong>08:30 – 19:00</strong><small>Samedi 09:00 – 17:00</small></span></a><a class="quick-contact-item" href="urgences.html"><span class="quick-contact-icon">${icon("heartPulse")}</span><span><small>Une inquiétude ?</small><strong>Guide des urgences</strong><small>Les signes et premiers gestes</small></span></a></div></div></section>
        <section class="section" id="services"><div class="container"><div class="section-head"><div><span class="eyebrow">Nos services</span><h2>Des soins pour chaque étape de leur vie.</h2></div><p class="section-intro">Prévention, diagnostic, chirurgie et accompagnement : découvrez les soins proposés à la clinique.</p></div><div class="service-grid">${featured.map(serviceCard).join("")}</div><div style="margin-top:28px;text-align:center"><a class="btn btn-secondary" href="consultations.html">Explorer tous les services ${icon("arrow")}</a></div></div></section>
        <section class="section home-story"><div class="container split-layout"><div class="story-visual" role="img" aria-label="Vétérinaire aux côtés d'un chien"><div class="since-badge"><strong>1980</strong><span>À vos côtés depuis</span></div></div><div><span class="eyebrow">Notre clinique</span><h2>La confiance se construit à chaque visite.</h2><p class="section-intro">Nous savons qu'une visite peut être stressante. Notre approche réunit douceur, observation et explications précises pour que vous restiez acteur des décisions.</p><ul class="check-list">${check("Un examen attentif et adapté au rythme de l'animal")}${check("Des options de soins présentées sans jargon")}${check("Des conseils pratiques pour le retour à la maison")}</ul><a class="btn btn-primary" href="renseignements.html">Poser une question</a></div></div></section>
        <section class="emergency-strip"><div class="container emergency-strip-inner"><div><h2>Vous pensez que c'est une urgence ?</h2><p>Difficulté à respirer, saignement important, convulsions, perte de conscience ou ingestion toxique : appelez avant de vous déplacer.</p></div><div class="button-row"><a class="btn btn-urgent" href="tel:${CONTACT.tel}">${icon("phone")} Appeler maintenant</a><a class="btn btn-secondary" href="urgences.html">Voir les premiers gestes</a></div></div></section>
      </main>`;
  }

  function serviceCard(service) {
    return `<a class="service-card" href="${service.slug}.html"><span class="card-icon">${icon(service.icon)}</span><h3>${service.title}</h3><p>${service.short}</p><span class="card-arrow">En savoir plus ${icon("arrow")}</span></a>`;
  }

  function appointmentPage() {
    return `
      <main id="main-content">
        ${pageHero("Rendez-vous", "Planifier une visite", "Dites-nous qui vous accompagne et choisissez le créneau qui vous convient. Votre demande reste modifiable jusqu'à la confirmation.", "Urgence ?", "N'attendez pas un créneau en ligne : appelez-nous directement.")}
        <section class="form-section"><div class="container booking-layout"><div class="form-card"><div class="booking-progress" aria-label="Progression"><div class="progress-item is-active" data-progress="1"><span class="progress-number">1</span><span>Vos informations</span></div><div class="progress-item" data-progress="2"><span class="progress-number">2</span><span>Date & heure</span></div><div class="progress-item" data-progress="3"><span class="progress-number">3</span><span>Confirmation</span></div></div>
          <form id="appointment-form" novalidate>
            <section class="booking-step is-active" data-step="1"><h2>Parlez-nous de votre animal</h2><p class="muted">Les champs marqués d'un astérisque sont obligatoires.</p><div class="form-grid">
              <div class="field"><label for="civility">Titre</label><select id="civility" name="civility"><option value="">Choisir</option><option>Mme</option><option>M.</option><option>Dr</option></select></div>
              <div class="field"><label for="first-name">Prénom <span class="required">*</span></label><input id="first-name" name="firstName" autocomplete="given-name" required></div>
              <div class="field"><label for="last-name">Nom <span class="required">*</span></label><input id="last-name" name="lastName" autocomplete="family-name" required></div>
              <div class="field"><label for="phone">Téléphone <span class="required">*</span></label><input id="phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="06 00 00 00 00" required></div>
              <div class="field"><label for="email">E-mail</label><input id="email" name="email" type="email" autocomplete="email" placeholder="vous@exemple.com"></div>
              <div class="field"><label for="pet-name">Nom de l'animal <span class="required">*</span></label><input id="pet-name" name="petName" required></div>
              <div class="field"><label for="species">Espèce <span class="required">*</span></label><select id="species" name="species" required><option value="">Choisir</option><option>Chien</option><option>Chat</option><option>Lapin</option><option>Oiseau</option><option>Reptile</option><option>Autre NAC</option></select></div>
              <div class="field"><label for="breed">Race</label><input id="breed" name="breed"></div>
              <div class="field field-full"><label for="service">Motif de visite <span class="required">*</span></label><select id="service" name="service" required><option value="">Choisir un service</option>${services.map((service) => `<option value="${service.slug}">${service.title}</option>`).join("")}</select></div>
              <div class="field field-full"><label for="problem">Que remarquez-vous ? <span class="required">*</span></label><textarea id="problem" name="problem" placeholder="Décrivez brièvement les symptômes ou l'objet de la visite…" required></textarea><span class="field-hint">N'indiquez pas d'informations confidentielles non nécessaires.</span></div>
            </div><div class="form-actions"><a class="text-link" href="urgences.html">Est-ce une urgence ?</a><button class="btn btn-primary" type="button" data-next>Choisir un créneau ${icon("arrow")}</button></div></section>
            <section class="booking-step" data-step="2"><h2>Choisissez votre créneau</h2><p class="muted">Les horaires affichés sont des préférences de demande. L'équipe vous confirme ensuite le rendez-vous.</p><div class="field"><label for="appointment-date">Date souhaitée <span class="required">*</span></label><input id="appointment-date" name="date" type="date" required><div class="date-shortcuts" id="date-shortcuts"></div></div><div class="field"><label>Heure souhaitée <span class="required">*</span></label><input id="appointment-time" name="time" type="hidden" required><div class="time-grid" id="time-grid" role="group" aria-label="Horaires disponibles"></div></div><div class="form-actions"><button class="btn btn-secondary" type="button" data-back>Retour</button><button class="btn btn-primary" type="submit">Confirmer ma demande ${icon("check")}</button></div></section>
            <section class="booking-step" data-step="3"><div class="confirmation"><span class="confirmation-icon">${icon("check")}</span><h2>Votre demande est prête</h2><p>Elle a été enregistrée sur cet appareil. Envoyez-la par e-mail ou appelez la clinique pour obtenir la confirmation du créneau.</p><div class="lead-box" id="confirmation-summary"></div><div class="button-row" style="justify-content:center"><a class="btn btn-primary" id="appointment-email" href="mailto:${CONTACT.email}">${icon("mail")} Envoyer par e-mail</a><a class="btn btn-secondary" href="tel:${CONTACT.tel}">${icon("phone")} Appeler la clinique</a></div></div></section>
          </form></div>
          <aside class="summary-card"><span class="eyebrow">Votre demande</span><h3>Récapitulatif</h3><div class="summary-list"><div class="summary-line">${icon("user")}<span><small>Propriétaire</small><strong id="summary-owner">À renseigner</strong></span></div><div class="summary-line">${icon("pet")}<span><small>Animal</small><strong id="summary-pet">À renseigner</strong></span></div><div class="summary-line">${icon("stethoscope")}<span><small>Motif</small><strong id="summary-service">À choisir</strong></span></div><div class="summary-line">${icon("calendar")}<span><small>Créneau souhaité</small><strong id="summary-slot">À choisir</strong></span></div></div><p class="summary-note">Aucune réservation n'est définitive avant confirmation de la clinique. En cas d'urgence, appelez le ${CONTACT.phone}.</p></aside>
        </div></section>
      </main>`;
  }

  function approachPage() {
    return `<main id="main-content">${pageHero("Chirurgie", "Notre approche", "Un parcours transparent en quatre temps, avec des consignes simples avant et après l'intervention.", "Votre rôle compte", "Une bonne préparation facilite l'anesthésie, le réveil et le retour à la maison.")}<section class="content-shell"><div class="container content-grid"><article><div class="prose-card"><h2>Le parcours chirurgical</h2><ol class="numbered-list"><li><div><strong>Consultation préopératoire</strong><br><span class="muted">Examen, indication, bénéfices, risques et réponses à vos questions.</span></div></li><li><div><strong>Préparation personnalisée</strong><br><span class="muted">Consignes de jeûne, bilan éventuel et protocole anesthésique.</span></div></li><li><div><strong>Intervention surveillée</strong><br><span class="muted">Surveillance des paramètres essentiels pendant toute l'opération.</span></div></li><li><div><strong>Réveil & retour</strong><br><span class="muted">Contrôle de la douleur et consignes écrites avant la sortie.</span></div></li></ol>
        <div class="treatment-grid"><div class="treatment-item"><strong>Avant l'opération</strong><p>Respectez exactement les consignes de jeûne. Signalez tout changement d'état ou traitement en cours.</p></div><div class="treatment-item"><strong>À ne pas faire</strong><p>Ne donnez ni aliment ni médicament non validé par la clinique le matin de l'intervention.</p></div><div class="treatment-item"><strong>Après l'opération</strong><p>Gardez votre animal au calme, vérifiez la plaie et administrez les traitements prescrits.</p></div><div class="treatment-item"><strong>Quand nous rappeler</strong><p>Saignement, douleur non contrôlée, vomissements répétés, gonflement ou abattement marqué.</p></div></div><div class="button-row"><a class="btn btn-primary" href="rendez-vous.html?service=operations">Prendre rendez-vous</a><a class="btn btn-secondary" href="operations.html">Voir les opérations</a></div></div></article>${appointmentSideCard()}</div></section></main>`;
  }

  function informationPage() {
    return `<main id="main-content">${pageHero("Nous écrire", "Demande de renseignements", "Une question sur un service, une préparation ou un suivi ? Laissez-nous les informations utiles pour vous répondre clairement.", "Pour aller plus vite", "Pour une demande urgente ou un animal qui va mal, téléphonez directement.")}<section class="form-section"><div class="container info-request-layout"><div class="form-card"><h2>Votre question</h2><p class="muted">Ce formulaire prépare un e-mail dans votre messagerie. Aucun renseignement n'est envoyé automatiquement.</p><form id="information-form" class="form-grid"><div class="field"><label for="info-title">Titre</label><select id="info-title" name="title"><option>Mme</option><option>M.</option><option>Dr</option></select></div><div class="field"><label for="info-first-name">Prénom <span class="required">*</span></label><input id="info-first-name" name="firstName" required autocomplete="given-name"></div><div class="field"><label for="info-last-name">Nom <span class="required">*</span></label><input id="info-last-name" name="lastName" required autocomplete="family-name"></div><div class="field"><label for="info-email">E-mail <span class="required">*</span></label><input id="info-email" name="email" type="email" required autocomplete="email"></div><div class="field"><label for="info-pet">Nom de l'animal</label><input id="info-pet" name="petName"></div><div class="field"><label for="info-species">Espèce</label><select id="info-species" name="species"><option value="">Choisir</option><option>Chien</option><option>Chat</option><option>Lapin</option><option>Oiseau</option><option>Reptile</option><option>Autre NAC</option></select></div><div class="field field-full"><label for="info-topic">Sujet <span class="required">*</span></label><select id="info-topic" name="topic" required><option value="">Choisir</option><option>Informations sur un service</option><option>Préparer une visite</option><option>Suivi après une consultation</option><option>Horaires et accès</option><option>Autre question</option></select></div><div class="field field-full"><label for="info-message">Votre message <span class="required">*</span></label><textarea id="info-message" name="message" required></textarea></div><div class="field field-full"><button class="btn btn-primary" type="submit">${icon("mail")} Préparer mon e-mail</button></div></form></div><aside class="summary-card"><span class="eyebrow">Réponse rapide</span><h3>Vous pouvez aussi nous joindre directement</h3><div class="summary-list"><div class="summary-line">${icon("phone")}<span><small>Téléphone</small><strong><a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></strong></span></div><div class="summary-line">${icon("mail")}<span><small>E-mail</small><strong><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></strong></span></div><div class="summary-line">${icon("mapPin")}<span><small>Adresse</small><strong>${CONTACT.address}</strong></span></div></div><p class="summary-note">N'envoyez pas de demande urgente par e-mail.</p></aside></div></section></main>`;
  }

  const emergencyPages = [
    { href: "operations-urgentes.html", icon: "activity", title: "Opérations urgentes", text: "Les situations chirurgicales prises en charge après évaluation." },
    { href: "premiers-gestes.html", icon: "heartPulse", title: "Les premiers gestes", text: "Sécuriser, observer et transporter sans aggraver la situation." },
    { href: "identifier-urgence.html", icon: "alert", title: "Identifier une urgence", text: "Les signes qui justifient un appel immédiat à la clinique." },
    { href: "prise-en-charge.html", icon: "stethoscope", title: "La prise en charge", text: "Ce qui se passe lorsque votre animal arrive à la clinique." },
    { href: "faq-urgences.html", icon: "message", title: "Questions fréquentes", text: "Les réponses utiles avant de prendre la route." }
  ];

  function emergencyPage() {
    return `<main id="main-content"><section class="emergency-page-hero"><div class="container"><span class="eyebrow">Disponible par téléphone</span><h1>Urgences vétérinaires</h1><p>Si votre animal respire mal, saigne abondamment, convulse, perd connaissance ou a ingéré un produit toxique, appelez la clinique immédiatement.</p><div class="emergency-actions"><a class="btn btn-urgent" href="tel:${CONTACT.tel}">${icon("phone")} ${CONTACT.phone}</a><a class="btn btn-secondary" href="${CONTACT.map}" target="_blank" rel="noopener">${icon("mapPin")} Itinéraire vers la clinique</a></div></div></section><section class="section"><div class="container"><div class="urgent-notice">${icon("alert")}<div><strong>Appelez avant de venir.</strong><br><span class="muted">Cela nous permet d'évaluer la priorité, de vous donner les premiers conseils et de préparer votre arrivée.</span></div></div><div class="section-head"><div><span class="eyebrow">Guide pratique</span><h2>Agir calmement, étape par étape.</h2></div></div><div class="emergency-grid">${emergencyPages.map((page) => `<a class="emergency-card" href="${page.href}"><span class="card-icon">${icon(page.icon)}</span><h3>${page.title}</h3><p>${page.text}</p><span class="card-arrow">Consulter ${icon("arrow")}</span></a>`).join("")}</div></div></section>${emergencyStrip()}</main>`;
  }

  function emergencyHero(title, intro) {
    return `<section class="emergency-page-hero"><div class="container">${breadcrumbs([{ label: "Urgences", href: "urgences.html" }, { label: title }])}<span class="eyebrow">Guide d'urgence</span><h1>${title}</h1><p>${intro}</p><div class="emergency-actions"><a class="btn btn-urgent" href="tel:${CONTACT.tel}">${icon("phone")} Appeler la clinique</a><a class="btn btn-secondary" href="urgences.html">Retour aux urgences</a></div></div></section>`;
  }

  function emergencyStrip() {
    return `<section class="emergency-strip"><div class="container emergency-strip-inner"><div><h2>Un doute vaut toujours un appel.</h2><p>Décrivez les symptômes, leur durée et ce qui s'est passé. L'équipe vous indique la conduite à tenir.</p></div><a class="btn btn-urgent" href="tel:${CONTACT.tel}">${icon("phone")} ${CONTACT.phone}</a></div></section>`;
  }

  function emergencyOperationsPage() {
    return `<main id="main-content">${emergencyHero("Opérations urgentes", "Certaines situations nécessitent une stabilisation puis une intervention sans délai. La priorité est déterminée après l'examen initial.")}<section class="content-shell"><div class="container content-grid"><article><div class="prose-card"><h2>Situations pouvant nécessiter une chirurgie</h2><div class="benefit-grid">${benefit("activity", "Traumatisme", "Plaie profonde, accident, fracture suspectée ou saignement.")}${benefit("heartPulse", "Abdomen aigu", "Ballonnement brutal, douleur forte ou suspicion de corps étranger.")}${benefit("alert", "Obstruction", "Difficulté majeure ou impossibilité d'uriner, d'avaler ou de respirer.")}${benefit("pet", "Mise bas difficile", "Contractions sans naissance, épuisement ou intervalle inquiétant.")}</div><div class="lead-box">Cette liste n'est pas exhaustive. N'essayez pas de faire manger ou boire un animal susceptible d'être anesthésié avant d'avoir appelé.</div><h3>À l'arrivée</h3><p>L'équipe commence par stabiliser les fonctions vitales et soulager la douleur. Les examens nécessaires sont ensuite expliqués avant la décision chirurgicale, lorsque la situation le permet.</p></div></article>${appointmentSideCard()}</div></section></main>`;
  }

  function emergencyStepsPage() {
    return `<main id="main-content">${emergencyHero("Les premiers gestes en urgence", "Votre sécurité compte autant que celle de votre animal. Approchez-le lentement : la douleur peut provoquer une réaction inhabituelle.")}<section class="content-shell"><div class="container content-grid"><article><div class="prose-card"><h2>Avant de prendre la route</h2><ol class="numbered-list"><li><div><strong>Sécurisez les lieux</strong><br><span class="muted">Éloignez la circulation, le feu, l'électricité, les produits toxiques et les autres animaux.</span></div></li><li><div><strong>Vérifiez sa réponse</strong><br><span class="muted">Appelez-le par son nom et observez s'il réagit au son ou au toucher.</span></div></li><li><div><strong>Observez sa respiration</strong><br><span class="muted">Regardez les mouvements du thorax et vérifiez que la bouche n'est pas obstruée, sans mettre vos doigts en danger.</span></div></li><li><div><strong>Limitez les mouvements</strong><br><span class="muted">Utilisez une couverture ou une surface rigide si un traumatisme est possible.</span></div></li><li><div><strong>Appelez la clinique</strong><br><span class="muted">Décrivez les signes et suivez les consignes données avant le transport.</span></div></li></ol><div class="urgent-notice">${icon("alert")}<div><strong>Ne donnez ni médicament, ni nourriture, ni eau de force.</strong><br><span class="muted">N'appliquez pas de garrot sans consigne d'un professionnel.</span></div></div></div></article>${appointmentSideCard()}</div></section></main>`;
  }

  function emergencyIdentifyPage() {
    const signs = ["Saignement abondant", "Difficulté à respirer", "Perte de conscience", "Convulsions répétées", "Vomissements ou diarrhée sévères", "Abdomen gonflé et douloureux", "Ingestion d'un produit toxique", "Impossibilité d'uriner", "Traumatisme ou chute", "Douleur intense ou paralysie soudaine"];
    return `<main id="main-content">${emergencyHero("Comment identifier une urgence", "Certains signes peuvent engager le pronostic vital. S'ils sont présents, appelez sans attendre même si vous n'êtes pas certain de leur gravité.")}<section class="content-shell"><div class="container content-grid"><article><div class="prose-card"><h2>Les signes d'alerte</h2><div class="emergency-signs">${signs.map((sign) => `<div class="emergency-sign">${icon("alert")}<span>${sign}</span></div>`).join("")}</div><div class="lead-box">Chez un très jeune animal, un sénior ou un NAC, une dégradation peut être rapide. Un comportement anormal associé à une baisse d'appétit justifie un avis.</div></div></article>${appointmentSideCard()}</div></section></main>`;
  }

  function emergencyTreatmentPage() {
    return `<main id="main-content">${emergencyHero("Comment votre animal va être pris en charge", "Notre priorité est de comprendre ce qui menace sa santé, de stabiliser son état et de soulager la douleur.")}<section class="content-shell"><div class="container content-grid"><article><div class="prose-card"><h2>À votre arrivée</h2><ol class="numbered-list"><li><div><strong>Évaluation immédiate</strong><br><span class="muted">L'équipe vérifie la respiration, la circulation, la conscience et la douleur.</span></div></li><li><div><strong>Stabilisation</strong><br><span class="muted">Oxygène, accès veineux, contrôle du saignement ou autre geste prioritaire selon l'état.</span></div></li><li><div><strong>Examens ciblés</strong><br><span class="muted">Analyses ou imagerie sont proposés pour préciser le diagnostic.</span></div></li><li><div><strong>Plan de soins</strong><br><span class="muted">Nous vous expliquons la situation, les options et les prochaines étapes aussi vite que possible.</span></div></li></ol><div class="lead-box">L'ordre de passage dépend de la gravité clinique, pas de l'ordre d'arrivée. Un animal instable est pris en charge en priorité.</div></div></article>${appointmentSideCard()}</div></section></main>`;
  }

  function emergencyFaqPage() {
    const faqs = [
      ["Dois-je appeler avant d'arriver ?", "Oui. L'appel permet à l'équipe d'évaluer la priorité, de préparer votre arrivée et de vous indiquer les gestes utiles pendant le trajet."],
      ["Quelles informations dois-je fournir ?", "Le nom et l'espèce de l'animal, son poids approximatif, ses symptômes, l'heure de début, les traitements en cours et la cause possible — accident, ingestion ou maladie."],
      ["Que faire avant d'arriver ?", "Gardez votre animal au calme, limitez ses mouvements et suivez les consignes données au téléphone. Ne donnez pas de médicament humain."],
      ["Que dois-je apporter ?", "Son carnet de santé, les ordonnances, les médicaments en cours et, en cas d'ingestion, l'emballage ou une photo du produit concerné."],
      ["Comment transporter un animal blessé ?", "Utilisez une caisse pour un petit animal. Pour un animal plus grand, une couverture peut servir de brancard. Évitez de plier son dos et protégez-vous d'une morsure réflexe."],
      ["Puis-je lui donner à manger ou à boire ?", "Pas sans avis. Une anesthésie peut être nécessaire et forcer un animal à boire peut être dangereux." ]
    ];
    return `<main id="main-content">${emergencyHero("Questions fréquentes sur les urgences", "Les réponses essentielles pour préparer l'appel, le transport et l'arrivée à la clinique.")}<section class="content-shell"><div class="container content-grid"><article><div class="faq-list">${faqs.map((faq, index) => `<div class="faq-item"><button class="faq-question" type="button" aria-expanded="${index === 0}" aria-controls="faq-${index}"><span>${faq[0]}</span>${icon("plus")}</button><div class="faq-answer ${index === 0 ? "is-open" : ""}" id="faq-${index}"><p>${faq[1]}</p></div></div>`).join("")}</div></article>${appointmentSideCard()}</div></section></main>`;
  }

  function contactPage() {
    return `<main id="main-content">${pageHero("Nous trouver", "Contact", "Une question, un rendez-vous à confirmer ou une urgence ? Choisissez le moyen le plus direct pour joindre l'équipe.", "Avant de vous déplacer", "En cas d'urgence, appelez afin que nous puissions préparer votre arrivée.")}<section class="form-section"><div class="container contact-layout"><div class="map-card" data-map-container><div class="map-consent"><span class="map-pin">${icon("mapPin")}</span><div><strong>Carte Google Maps</strong><p>La carte est bloquée pour protéger votre vie privée. En l'affichant, vous autorisez le chargement de contenu depuis Google.</p><button class="btn btn-primary" type="button" data-map-consent>Autoriser et afficher la carte</button><a class="text-link map-fallback-link" href="${CONTACT.map}" target="_blank" rel="noopener">Ouvrir l'itinéraire sans intégrer la carte ${icon("arrow")}</a></div></div></div><aside class="contact-panel"><span class="eyebrow">Clinique du Gharb</span><h2>À Kénitra, au cœur de la ville.</h2><div class="contact-detail">${icon("mapPin")}<span><small>Adresse</small><strong>${CONTACT.address}</strong></span></div><div class="contact-detail">${icon("phone")}<span><small>Téléphone</small><strong><a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></strong></span></div><div class="contact-detail">${icon("mail")}<span><small>E-mail</small><strong><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></strong></span></div><div class="contact-detail" id="horaires">${icon("clock")}<span><small>Horaires</small><strong>Lun–ven : 08:30–19:00<br>Sam : 09:00–17:00<br>Dim : urgences sur appel</strong></span></div><a class="btn btn-urgent btn-block" href="tel:${CONTACT.tel}">${icon("phone")} Appeler la clinique</a><a class="btn btn-primary btn-block" href="rendez-vous.html">Prendre rendez-vous</a></aside></div></section></main>`;
  }

  function renderPage(page) {
    if (page === "home") return homePage();
    if (serviceDetails[page]) return `<main id="main-content">${servicePage(page)}</main>`;
    const pages = {
      appointment: appointmentPage,
      approach: approachPage,
      information: informationPage,
      emergency: emergencyPage,
      "emergency-operations": emergencyOperationsPage,
      "emergency-steps": emergencyStepsPage,
      "emergency-identify": emergencyIdentifyPage,
      "emergency-faq": emergencyFaqPage,
      "emergency-treatment": emergencyTreatmentPage,
      contact: contactPage
    };
    return pages[page] ? pages[page]() : homePage();
  }

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.content = theme === "dark" ? "#0c171f" : "#0d817a";
    const button = document.querySelector(".theme-toggle");
    if (button) {
      const dark = theme === "dark";
      button.innerHTML = icon(dark ? "sun" : "moon");
      const arabic = document.documentElement.lang === "ary";
      button.setAttribute("aria-label", arabic ? (dark ? "فعّل المظهر الفاتح" : "فعّل المظهر الغامق") : (dark ? "Activer le mode clair" : "Activer le mode sombre"));
    }
    try { localStorage.setItem("vdg-theme", theme); } catch (_) { /* Storage can be unavailable on file URLs. */ }
  }

  function initialTheme() {
    const requested = new URLSearchParams(window.location.search).get("theme");
    if (requested === "light" || requested === "dark") return requested;
    try {
      const saved = localStorage.getItem("vdg-theme");
      if (saved === "light" || saved === "dark") return saved;
    } catch (_) { /* Use system preference. */ }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function initNavigation(page) {
    const menuToggle = document.querySelector(".menu-toggle");
    const drawer = document.querySelector(".mobile-drawer");
    const scrim = document.querySelector(".drawer-scrim");
    const close = document.querySelector(".drawer-close");
    const servicesButton = document.querySelector(".nav-trigger");
    const servicesMenu = document.querySelector(".services-menu");
    const servicePageActive = Boolean(serviceDetails[page] || page === "approach");

    document.querySelectorAll(`[data-route="${page}"]`).forEach((link) => link.setAttribute("aria-current", "page"));
    if (servicePageActive) servicesButton.classList.add("is-active");

    function toggleDrawer(open) {
      document.body.classList.toggle("nav-open", open);
      menuToggle.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("aria-hidden", String(!open));
      if (open) close.focus();
      else menuToggle.focus();
    }

    menuToggle.addEventListener("click", () => toggleDrawer(true));
    close.addEventListener("click", () => toggleDrawer(false));
    scrim.addEventListener("click", () => toggleDrawer(false));
    servicesButton.addEventListener("click", () => {
      const open = servicesButton.getAttribute("aria-expanded") !== "true";
      servicesButton.setAttribute("aria-expanded", String(open));
      servicesMenu.classList.toggle("is-open", open);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        if (document.body.classList.contains("nav-open")) toggleDrawer(false);
        servicesButton.setAttribute("aria-expanded", "false");
        servicesMenu.classList.remove("is-open");
      }
    });
  }

  function showToast(message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.querySelector("span").textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(showToast.timer);
    showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 4200);
  }

  function initFaq() {
    document.querySelectorAll(".faq-question").forEach((button) => {
      button.addEventListener("click", () => {
        const open = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!open));
        document.getElementById(button.getAttribute("aria-controls")).classList.toggle("is-open", !open);
      });
    });
  }

  function localDateValue(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function friendlyDate(value) {
    if (!value) return "À choisir";
    const parts = value.split("-").map(Number);
    const date = new Date(parts[0], parts[1] - 1, parts[2]);
    const locale = document.documentElement.lang === "ary" ? "ar-MA" : "fr-FR";
    return new Intl.DateTimeFormat(locale, { weekday: "long", day: "numeric", month: "long" }).format(date);
  }

  function initAppointment() {
    const form = document.getElementById("appointment-form");
    if (!form) return;
    const dateInput = document.getElementById("appointment-date");
    const timeInput = document.getElementById("appointment-time");
    const dateShortcuts = document.getElementById("date-shortcuts");
    const timeGrid = document.getElementById("time-grid");
    const slots = ["09:00", "10:30", "11:30", "14:00", "15:30", "17:00"];
    let step = 1;

    const today = new Date();
    dateInput.min = localDateValue(today);

    function nextWorkingDays(count) {
      const days = [];
      const cursor = new Date(today);
      cursor.setHours(12, 0, 0, 0);
      while (days.length < count) {
        cursor.setDate(cursor.getDate() + 1);
        if (cursor.getDay() !== 0) days.push(new Date(cursor));
      }
      return days;
    }

    dateShortcuts.innerHTML = nextWorkingDays(3).map((date) => `<button class="date-option" type="button" data-date="${localDateValue(date)}">${new Intl.DateTimeFormat("fr-FR", { weekday: "short" }).format(date)}<small>${new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short" }).format(date)}</small></button>`).join("");
    timeGrid.innerHTML = slots.map((slot) => `<button class="time-option" type="button" data-time="${slot}">${slot}</button>`).join("");

    const query = new URLSearchParams(window.location.search);
    if (query.get("service") && services.some((service) => service.slug === query.get("service"))) {
      document.getElementById("service").value = query.get("service");
    }

    function updateSummary() {
      const data = new FormData(form);
      const owner = [data.get("firstName"), data.get("lastName")].filter(Boolean).join(" ");
      const pet = [data.get("petName"), data.get("species")].filter(Boolean).join(" · ");
      const service = services.find((item) => item.slug === data.get("service"));
      document.getElementById("summary-owner").textContent = owner || "À renseigner";
      document.getElementById("summary-pet").textContent = pet || "À renseigner";
      document.getElementById("summary-service").textContent = service ? service.title : "À choisir";
      const timeConnector = document.documentElement.lang === "ary" ? "، الساعة " : " à ";
      document.getElementById("summary-slot").textContent = data.get("date") ? `${friendlyDate(data.get("date"))}${data.get("time") ? `${timeConnector}${data.get("time")}` : ""}` : "À choisir";
    }

    function setStep(nextStep) {
      step = nextStep;
      document.querySelectorAll(".booking-step").forEach((panel) => panel.classList.toggle("is-active", Number(panel.dataset.step) === step));
      document.querySelectorAll(".progress-item").forEach((item) => {
        const itemStep = Number(item.dataset.progress);
        item.classList.toggle("is-active", itemStep === step);
        item.classList.toggle("is-complete", itemStep < step);
      });
      document.querySelector(".form-card").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function validateStep(currentStep) {
      const controls = [...form.querySelector(`[data-step="${currentStep}"]`).querySelectorAll("input:not([type=hidden]), select, textarea")];
      let valid = true;
      controls.forEach((control) => {
        const controlValid = control.checkValidity();
        control.setAttribute("aria-invalid", String(!controlValid));
        if (!controlValid && valid) {
          control.reportValidity();
          valid = false;
        }
      });
      return valid;
    }

    form.addEventListener("input", (event) => {
      event.target.removeAttribute("aria-invalid");
      updateSummary();
    });
    form.addEventListener("change", updateSummary);
    form.querySelector("[data-next]").addEventListener("click", () => { if (validateStep(1)) setStep(2); });
    form.querySelector("[data-back]").addEventListener("click", () => setStep(1));

    dateShortcuts.addEventListener("click", (event) => {
      const button = event.target.closest("[data-date]");
      if (!button) return;
      dateInput.value = button.dataset.date;
      dateShortcuts.querySelectorAll(".date-option").forEach((item) => item.classList.toggle("is-selected", item === button));
      updateSummary();
    });
    dateInput.addEventListener("change", () => {
      dateShortcuts.querySelectorAll(".date-option").forEach((item) => item.classList.toggle("is-selected", item.dataset.date === dateInput.value));
    });
    timeGrid.addEventListener("click", (event) => {
      const button = event.target.closest("[data-time]");
      if (!button) return;
      timeInput.value = button.dataset.time;
      timeGrid.querySelectorAll(".time-option").forEach((item) => item.classList.toggle("is-selected", item === button));
      updateSummary();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!dateInput.value) { dateInput.reportValidity(); return; }
      if (!timeInput.value) { showToast("Veuillez choisir une heure souhaitée."); return; }
      const data = Object.fromEntries(new FormData(form).entries());
      data.reference = `VDG-${Date.now().toString().slice(-6)}`;
      try {
        const saved = JSON.parse(localStorage.getItem("vdg-appointments") || "[]");
        saved.push(data);
        localStorage.setItem("vdg-appointments", JSON.stringify(saved.slice(-10)));
      } catch (_) { /* The e-mail action still works. */ }
      const service = services.find((item) => item.slug === data.service);
      const translatedService = service && window.VDGI18n ? window.VDGI18n.translate(service.title) : (service ? service.title : data.service);
      const isArabic = document.documentElement.lang === "ary";
      document.getElementById("confirmation-summary").innerHTML = `<strong>${data.petName} · ${translatedService}</strong><br>${friendlyDate(data.date)}${isArabic ? "، الساعة " : " à "}${data.time}<br><span class="muted">${isArabic ? "المرجع المحلي" : "Référence locale"} : ${data.reference}</span>`;
      const subject = encodeURIComponent(`Demande de rendez-vous — ${data.petName} — ${data.reference}`);
      const body = encodeURIComponent(`Bonjour,\n\nJe souhaite demander un rendez-vous.\n\nPropriétaire : ${data.firstName} ${data.lastName}\nTéléphone : ${data.phone}\nAnimal : ${data.petName} (${data.species}${data.breed ? `, ${data.breed}` : ""})\nMotif : ${service ? service.title : data.service}\nCréneau souhaité : ${friendlyDate(data.date)} à ${data.time}\n\nMessage :\n${data.problem}\n\nRéférence locale : ${data.reference}`);
      document.getElementById("appointment-email").href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
      setStep(3);
      showToast("Demande enregistrée sur cet appareil.");
    });
    updateSummary();
  }

  function initInformationForm() {
    const form = document.getElementById("information-form");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = Object.fromEntries(new FormData(form).entries());
      const subject = encodeURIComponent(`${data.topic} — ${data.firstName} ${data.lastName}`);
      const body = encodeURIComponent(`Bonjour,\n\n${data.message}\n\nNom : ${data.title} ${data.firstName} ${data.lastName}\nE-mail : ${data.email}\nAnimal : ${data.petName || "Non renseigné"}\nEspèce : ${data.species || "Non renseignée"}`);
      showToast("Votre messagerie va s'ouvrir avec la demande préparée.");
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    });
  }

  function boot() {
    const root = document.getElementById("site");
    const page = document.body.dataset.page || "home";
    const serviceTitle = serviceDetails[page] ? `${serviceDetails[page].title} — Clinique Vétérinaire du Gharb` : null;
    document.title = serviceTitle || pageTitles[page] || pageTitles.home;
    setTheme(initialTheme());
    root.innerHTML = `${headerMarkup()}${renderPage(page)}${footerMarkup()}`;
    setTheme(document.documentElement.dataset.theme);
    document.getElementById("year").textContent = new Date().getFullYear();
    initNavigation(page);
    initFaq();
    initAppointment();
    initInformationForm();
    document.querySelector(".theme-toggle").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
