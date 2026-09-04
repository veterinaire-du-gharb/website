(function () {
  "use strict";

  const STORAGE_KEY = "vdg-language";
  const ARABIC = "ary";
  const FRENCH = "fr";

  const ar = {
    /* Shared navigation and actions */
    "Aller au contenu": "دوز للمحتوى",
    "Accueil": "الرئيسية",
    "Navigation principale": "القائمة الرئيسية",
    "Services": "الخدمات",
    "Urgences": "المستعجلات",
    "Renseignements": "استفسارات",
    "Contact": "تواصل معنا",
    "Nos services": "الخدمات ديالنا",
    "À votre service": "رهن الإشارة",
    "Prendre rendez-vous": "حجز موعد",
    "Appeler la clinique": "عيّط للمصحة",
    "Appelez la clinique": "عيّط للمصحة",
    "Activer le mode sombre": "فعّل المظهر الغامق",
    "Activer le mode clair": "فعّل المظهر الفاتح",
    "Changer de thème": "بدّل المظهر",
    "Ouvrir le menu": "حلّ القائمة",
    "Fermer le menu": "سدّ القائمة",
    "Menu mobile": "قائمة الهاتف",
    "Navigation mobile": "قائمة الهاتف",
    "Clinique Vétérinaire du Gharb": "مصحة الغرب البيطرية",
    "Clinique Vétérinaire du Gharb — Accueil": "مصحة الغرب البيطرية — الرئيسية",
    "Kénitra · depuis 1980": "القنيطرة · من 1980",
    "Explorer": "تصفّح",
    "Rendez-vous": "المواعيد",
    "Nous trouver": "فين تلقانا",
    "Horaires": "الأوقات",
    "Lun – Ven": "الاثنين – الجمعة",
    "Samedi": "السبت",
    "Samedi 09:00 – 17:00": "السبت 09:00 – 17:00",
    "Dimanche": "الأحد",
    "Une médecine attentive et compréhensible pour les animaux de Kénitra et les personnes qui les aiment.": "طب بيطري فيه الاهتمام والوضوح لحيوانات القنيطرة وللناس اللي كيبغيوهم.",
    "Site d'information — en cas d'urgence, appelez la clinique.": "موقع للمعلومات — فالحالة المستعجلة عيّط للمصحة.",
    "Gérer mes préférences": "نسير اختيارات الخصوصية",
    "En savoir plus": "عرف كثر",
    "Consulter": "شوف التفاصيل",
    "Retour": "رجوع",
    "À savoir": "خاصك تعرف",
    "Besoin d'aide ?": "محتاج المساعدة؟",
    "Nous sommes à votre écoute": "حنا هنا باش نسمعوك",
    "Pour une situation urgente ou si vous hésitez sur le motif, appelez directement la clinique.": "إلا كانت الحالة مستعجلة ولا ما عرفتيش شنو تختار، عيّط للمصحة مباشرة.",
    "Lun–ven 08:30–19:00": "الاثنين–الجمعة 08:30–19:00",
    "Sam 09:00–17:00": "السبت 09:00–17:00",
    "Voir les urgences": "شوف المستعجلات",

    /* Home */
    "Soigner avec attention, depuis 1980": "كنعالجو باهتمام من 1980",
    "Leur santé mérite une écoute sincère.": "صحتهم كتستاهل اهتمام من القلب.",
    "À Kénitra, notre équipe accompagne chaque animal avec une médecine claire, douce et exigeante — de la prévention aux urgences.": "فالقنيطرة، الفريق ديالنا كيرافق كل حيوان بعلاج واضح وحنين ودقيق — من الوقاية حتى للمستعجلات.",
    "Équipe expérimentée": "فريق عندو تجربة",
    "Chien, chat & NAC": "كلاب، قطط وحيوانات أليفة أخرى",
    "Soins personnalisés": "علاج على القياس",
    "Centre de Kénitra": "وسط القنيطرة",
    "464 avenue Mohammed V": "464 شارع محمد الخامس",
    "Ouvert en semaine": "محلولين وسط السيمانة",
    "Une inquiétude ?": "كاين شي قلق؟",
    "Guide des urgences": "دليل المستعجلات",
    "Les signes et premiers gestes": "العلامات والخطوات الأولى",
    "Des soins pour chaque étape de leur vie.": "عناية فكل مرحلة من حياتهم.",
    "Prévention, diagnostic, chirurgie et accompagnement : découvrez les soins proposés à la clinique.": "الوقاية، التشخيص، الجراحة والمتابعة: تعرّف على العلاجات اللي كنقدمو فالمصحة.",
    "Explorer tous les services": "شوف الخدمات كاملة",
    "Notre clinique": "المصحة ديالنا",
    "La confiance se construit à chaque visite.": "الثقة كتبدا مع كل زيارة.",
    "Nous savons qu'une visite peut être stressante. Notre approche réunit douceur, observation et explications précises pour que vous restiez acteur des décisions.": "عارفين باللي الزيارة تقدر تقلّق الحيوان. كنخدمو بالرفق والملاحظة والشرح الواضح باش تبقى فاهم ومشارك فالقرار.",
    "Un examen attentif et adapté au rythme de l'animal": "فحص بالاهتمام وعلى حساب راحة الحيوان",
    "Des options de soins présentées sans jargon": "اختيارات العلاج بشرح بسيط وواضح",
    "Des conseils pratiques pour le retour à la maison": "نصائح عملية منين ترجع للدار",
    "Poser une question": "طرح سؤال",
    "Vous pensez que c'est une urgence ?": "كاتظن الحالة مستعجلة؟",
    "Difficulté à respirer, saignement important, convulsions, perte de conscience ou ingestion toxique : appelez avant de vous déplacer.": "صعوبة فالتنفس، نزيف قوي، تشنجات، فقدان الوعي ولا بلع مادة سامة: عيّط قبل ما تجي.",
    "Appeler maintenant": "عيّط دابا",
    "Voir les premiers gestes": "شوف الخطوات الأولى",
    "À vos côtés depuis": "حداكم من",

    /* Services names and summaries */
    "Consultations": "الفحوصات",
    "Consultations vétérinaires": "الفحوصات البيطرية",
    "Prévention, diagnostic et suivi personnalisé.": "الوقاية والتشخيص والمتابعة على القياس.",
    "Vaccins & antiparasitaires": "التلقيحات ومضادات الطفيليات",
    "Vaccins & traitements antiparasitaires": "التلقيحات وعلاج الطفيليات",
    "Une protection adaptée à chaque étape de vie.": "حماية مناسبة لكل مرحلة من العمر.",
    "Stérilisation": "التعقيم",
    "Stérilisation & castration": "التعقيم والإخصاء",
    "Une intervention encadrée, du bilan au réveil.": "عملية مراقبة من الفحص حتى الفياق.",
    "Opérations chirurgicales": "العمليات الجراحية",
    "Une prise en charge rigoureuse et rassurante.": "عناية دقيقة ومطمئنة.",
    "Hospitalisation": "الإقامة فالمصحة",
    "Surveillance, confort et soins continus.": "مراقبة وراحة وعلاج مستمر.",
    "Analyses vétérinaires": "التحاليل البيطرية",
    "Des examens pour décider plus vite et plus juste.": "فحوصات باش ناخدو القرار بسرعة ودقة.",
    "Dentisterie": "طب الأسنان",
    "Prévenir la douleur et préserver la santé buccale.": "الوقاية من الألم والحفاظ على صحة الفم.",
    "Pharmacie vétérinaire": "الصيدلية البيطرية",
    "Des traitements délivrés avec un conseil clinique.": "أدوية مع نصيحة بيطرية واضحة.",
    "Vermifugation & parasites": "الديدان والطفيليات",
    "Protéger votre animal, votre foyer et son environnement.": "حماية الحيوان والدار والمحيط ديالو.",
    "Alimentation diététique": "التغذية العلاجية",
    "Alimentation animale diététique": "التغذية العلاجية للحيوانات",
    "Des conseils nutritionnels selon ses besoins.": "نصائح فالتغذية على حساب الاحتياجات ديالو.",
    "Nouveaux animaux de compagnie": "الحيوانات الأليفة غير المألوفة",
    "Des soins attentifs pour les NAC.": "عناية خاصة بالحيوانات الأليفة غير المألوفة.",

    /* Consultations */
    "Médecine préventive": "الطب الوقائي",
    "Une consultation attentive pour comprendre les signes, prévenir les maladies et construire un suivi adapté à votre animal.": "فحص باهتمام باش نفهمو العلامات ونوقيو من الأمراض ونديرو متابعة مناسبة للحيوان ديالك.",
    "Quand consulter ?": "فوقاش خاص الفحص؟",
    "Dès qu'un changement d'appétit, de comportement ou d'énergie vous inquiète.": "منين يبان ليك شي تغيير فالشهية ولا السلوك ولا النشاط.",
    "Les consultations régulières permettent de détecter plus tôt les problèmes de santé, d'éviter du stress à votre animal et d'organiser un plan de soins clair.": "الفحوصات المنتظمة كتعاون نكتاشفو المشاكل بكري، ننقصو التوتر على الحيوان ونديرو خطة علاج واضحة.",
    "Une visite pensée pour lui": "زيارة مراعية ليه",
    "Nous prenons le temps d'écouter vos observations, d'examiner votre animal avec douceur et de vous expliquer chaque recommandation dans un langage simple.": "كناخدو الوقت نسمعو الملاحظات ديالك، نفحصو الحيوان بالرفق ونشرحو ليك كل توصية بكلام بسيط.",
    "Bilan clinique": "فحص شامل",
    "Poids, cœur, respiration, peau, yeux, oreilles et mobilité.": "الوزن، القلب، التنفس، الجلد، العينين، الودنين والحركة.",
    "Prévention": "الوقاية",
    "Vaccins, parasites, alimentation et hygiène de vie.": "التلقيحات، الطفيليات، التغذية ونمط العيش.",
    "Suivi ciblé": "متابعة مركزة",
    "Examens complémentaires si les signes le nécessitent.": "فحوصات إضافية إلا كانت العلامات كتطلبها.",
    "Conseils clairs": "نصائح واضحة",
    "Un plan de soins expliqué et adapté à votre quotidien.": "خطة علاج مشروحة ومناسبة للحياة اليومية ديالك.",
    "Consultations proposées": "الفحوصات المتوفرة",
    "Consultation": "الفحص",
    "Pour qui ?": "لمن؟",
    "Durée indicative": "المدة التقريبية",
    "Bilan général": "فحص عام",
    "Chien, chat ou NAC": "كلب، قط ولا حيوان أليف آخر",
    "Première visite": "أول زيارة",
    "Jeune animal": "حيوان صغير",
    "Suivi": "متابعة",
    "Traitement en cours": "علاج جاري",
    "Sénior": "حيوان كبير فالسن",
    "Animal de 7 ans et +": "حيوان عندو 7 سنين ولا كثر",

    /* Sterilisation */
    "Chirurgie de convenance": "جراحة اختيارية",
    "Une prise en charge sécurisée, depuis le bilan préopératoire jusqu'aux conseils de retour à la maison.": "عناية آمنة من الفحص قبل العملية حتى نصائح الرجوع للدار.",
    "Chaque indication est discutée selon l'espèce, l'âge, la santé et le mode de vie.": "كل حالة كنناقشوها على حساب النوع والعمر والصحة ونمط العيش.",
    "Depuis 1980, notre clinique accompagne les animaux de Kénitra et leurs propriétaires avec une équipe expérimentée et un équipement adapté.": "من 1980، المصحة ديالنا كترفق حيوانات القنيطرة ومالينهم بفريق مجرّب وتجهيزات مناسبة.",
    "Les bénéfices possibles": "الفوائد الممكنة",
    "Éviter les portées non désirées": "تجنب الولادات غير المرغوب فيها",
    "Une décision responsable pour votre animal et son environnement.": "قرار مسؤول للحيوان والمحيط ديالو.",
    "Réduire certains risques de santé": "تنقيص بعض المخاطر الصحية",
    "Notamment certaines affections de l'appareil reproducteur.": "خصوصا بعض أمراض الجهاز التناسلي.",
    "Limiter certains comportements hormonaux": "التقليل من بعض السلوكات الهرمونية",
    "Comme le marquage, les fugues ou les chaleurs.": "بحال التعليم بالبول، الهروب ولا فترة التزاوج.",
    "Prévenir certaines complications": "الوقاية من بعض المضاعفات",
    "Le bénéfice dépend toujours du profil individuel.": "الفائدة كتبقى على حساب الحالة ديال كل حيوان.",
    "Une consultation préopératoire est indispensable. Elle permet d'évaluer le bon moment, le protocole anesthésique et les consignes de préparation.": "الفحص قبل العملية ضروري باش نحددو الوقت المناسب وطريقة التخدير وتعليمات التحضير.",

    /* Vaccination */
    "Un calendrier de prévention ajusté à l'âge, au mode de vie et aux déplacements de votre compagnon.": "برنامج وقاية مناسب للعمر ونمط العيش والتنقلات ديال الحيوان.",
    "Protection sur mesure": "حماية على القياس",
    "Le protocole est revu à chaque visite, sans vaccination inutile.": "كنراجعو البرنامج فكل زيارة بلا تلقيحات زايدة.",
    "Vacciner et traiter les parasites aide à prévenir des maladies parfois graves, dont certaines peuvent aussi concerner les humains.": "التلقيح وعلاج الطفيليات كيعاون يوقي من أمراض خطيرة، شي وحدين منها يقدرو يمسو حتى الإنسان.",
    "Un suivi simple et lisible": "متابعة بسيطة وواضحة",
    "Nous vérifions le carnet de santé, les rappels précédents, les habitudes de sortie et les risques particuliers avant toute recommandation.": "كنراجعو الدفتر الصحي والتلقيحات السابقة والخروج والمخاطر قبل أي توصية.",
    "Animal": "الحيوان",
    "Étape": "المرحلة",
    "Prévention discutée": "الوقاية المقترحة",
    "Chiot": "جرو",
    "Dès les premières semaines": "من السيمانات الأولى",
    "Primo-vaccination et parasites": "التلقيحات الأولى والطفيليات",
    "Chien adulte": "كلب بالغ",
    "Selon les rappels": "على حساب التذكير",
    "Vaccins essentiels et mode de vie": "التلقيحات الأساسية ونمط العيش",
    "Chaton": "قط صغير",
    "Chat adulte": "قط بالغ",
    "Intérieur ou extérieur": "فالدار ولا كيخرج",
    "Rappels et protection ciblée": "التذكير والحماية المناسبة",
    "Votre vétérinaire confirme toujours le protocole après examen clinique.": "البيطري كيأكد البرنامج ديما من بعد الفحص.",

    /* Surgery */
    "Chirurgie vétérinaire": "الجراحة البيطرية",
    "Chirurgie": "الجراحة",
    "Une approche méthodique pour préparer, opérer et surveiller votre animal dans les meilleures conditions possibles.": "طريقة منظمة لتحضير وعمل ومراقبة الحيوان فأحسن الظروف الممكنة.",
    "Notre approche": "الطريقة ديالنا",
    "Information, préparation, anesthésie surveillée et accompagnement au retour.": "شرح وتحضير وتخدير مراقب ومتابعة من بعد الرجوع.",
    "Notre équipe s'appuie sur un examen préopératoire, un protocole adapté et une surveillance attentive du réveil.": "الفريق كيعتمد على فحص قبل العملية وبروتوكول مناسب ومراقبة دقيقة ديال الفياق.",
    "Interventions courantes": "العمليات المعتادة",
    "Chirurgie de convenance après évaluation clinique.": "جراحة اختيارية من بعد الفحص.",
    "Chirurgie des tissus mous": "جراحة الأنسجة الرخوة",
    "Plaies, masses et interventions abdominales selon indication.": "الجروح والكتل وعمليات البطن على حساب الحالة.",
    "Urologie": "المسالك البولية",
    "Prise en charge chirurgicale lorsque le diagnostic le nécessite.": "جراحة ملي التشخيص كيطلبها.",
    "Os & articulations": "العظام والمفاصل",
    "Évaluation et orientation pour les affections orthopédiques.": "فحص وتوجيه لمشاكل العظام والمفاصل.",
    "Découvrir notre approche chirurgicale": "تعرّف على الطريقة ديالنا فالجراحة",

    /* Analyses */
    "Diagnostic": "التشخيص",
    "Des examens complémentaires pour éclairer un diagnostic, mesurer un risque et suivre l'évolution de la santé.": "تحاليل إضافية باش نوضحو التشخيص ونقيسو الخطر ونتابعو تطور الصحة.",
    "Décider tôt": "قرار بكري",
    "Une analyse n'est jamais isolée : elle complète l'examen clinique.": "التحليل ما كيكونش بوحدو: كيكمل الفحص البيطري.",
    "Les analyses peuvent aider à identifier un problème avant qu'il ne s'aggrave et à choisir un traitement plus précisément.": "التحاليل كتعاون نكتاشفو المشكل قبل ما يكبر ونختارو العلاج بدقة.",
    "Quand une analyse peut être utile": "فوقاش التحليل كيكون مفيد",
    "Refus soudain de l'eau ou de la nourriture": "رفض مفاجئ للماء ولا الماكلة",
    "Difficulté à respirer ou essoufflement constant": "صعوبة فالتنفس ولا لهث مستمر",
    "Vomissements ou diarrhée persistants": "قيء ولا إسهال مستمر",
    "Fatigue, faiblesse ou changement brutal de comportement": "عياء أو ضعف أو تبدل مفاجئ فالسلوك",
    "Bilan avant anesthésie ou suivi d'un traitement": "تحاليل قبل التخدير ولا لمتابعة العلاج",
    "Examen": "الفحص",
    "Ce qu'il aide à évaluer": "شنو كيساعد نقيمو",
    "Résultat": "النتيجة",
    "Bilan sanguin": "تحليل الدم",
    "Organes, inflammation, cellules": "الأعضاء والالتهاب والخلايا",
    "Selon examen": "على حساب الفحص",
    "Analyse urinaire": "تحليل البول",
    "Reins, voies urinaires": "الكلي والمسالك البولية",
    "Prélèvement": "عينة",
    "Peau, oreilles ou masse": "الجلد والودنين ولا كتلة",
    "Selon technique": "على حساب التقنية",

    /* Parasites */
    "Prévention parasitaire": "الوقاية من الطفيليات",
    "Une protection régulière qui tient compte de l'espèce, de l'âge et du niveau d'exposition de votre animal.": "حماية منتظمة على حساب النوع والعمر ودرجة تعرض الحيوان للطفيليات.",
    "Le bon rythme": "الوقت المناسب",
    "Il varie selon les sorties, les voyages, l'alimentation et les autres animaux du foyer.": "كيتبدل على حساب الخروج والسفر والتغذية والحيوانات الأخرى فالدار.",
    "Pourquoi est-ce important ?": "علاش هادشي مهم؟",
    "Préserver sa santé": "نحافظو على الصحة ديالو",
    "Les parasites peuvent provoquer diarrhée, vomissements, amaigrissement et retard de croissance.": "الطفيليات تقدر تسبب الإسهال والقيء ونقصان الوزن وتأخر النمو.",
    "Protéger le foyer": "نحميو الدار",
    "Certains parasites peuvent se transmettre à l'humain, en particulier aux enfants.": "شي طفيليات يقدرو يتنقلو للإنسان، خصوصا الدراري.",
    "Réduire la contamination": "ننقصو انتشار العدوى",
    "Une prévention adaptée limite les œufs et parasites dans l'environnement.": "الوقاية المناسبة كتنقص البيض والطفيليات فالمحيط.",
    "N'utilisez pas un produit destiné à une autre espèce : certains antiparasitaires pour chien sont dangereux pour le chat.": "ما تستعملش دواء ديال نوع آخر: كاينين مضادات طفيليات ديال الكلاب خطيرين على القطط.",

    /* Hospitalisation and medicine */
    "Soins & surveillance": "العلاج والمراقبة",
    "Un espace calme et surveillé pour administrer les soins, observer l'évolution et soutenir la récupération.": "فضاء هادئ ومراقب للعلاج وتتبع الحالة ومساعدة الحيوان يتعافى.",
    "Rester informé": "تبقى على علم",
    "Nous convenons avec vous du rythme des nouvelles et des prochaines décisions.": "كنتفاهـمو معاك على وقت الأخبار والقرارات الجاية.",
    "Notre équipe veille au confort, à l'hygiène et à la sécurité des animaux hospitalisés, avec un protocole adapté à leur état.": "الفريق كيسهر على الراحة والنظافة والسلامة ديال الحيوانات اللي بقاو فالمصحة، بعلاج مناسب لحالتهم.",
    "Avant l'admission": "قبل الدخول",
    "Apportez les ordonnances, traitements, analyses et informations utiles. Respectez les consignes de jeûne données par l'équipe.": "جيب الوصفات والأدوية والتحاليل والمعلومات المهمة، وتبع تعليمات الصيام اللي عطاك الفريق.",
    "Pendant le séjour": "فمدة الإقامة",
    "Surveillance clinique, administration des soins et ajustement selon l'évolution.": "مراقبة وعلاج وتعديل على حساب تطور الحالة.",
    "Au retour": "منين يرجع للدار",
    "Installez votre animal dans un endroit propre, sec et calme. Suivez précisément l'ordonnance.": "خلي الحيوان فبلاصة نقية وناشفة وهادئة، وتبع الوصفة بالدقة.",
    "Quand rappeler": "فوقاش تعاود تعيّط",
    "Douleur inhabituelle, gonflement, écoulement, refus de boire ou de manger, ou changement inquiétant.": "ألم غير عادي، انتفاخ، سيلان، رفض الما ولا الماكلة، أو تغيير مقلق.",
    "Médicaments": "الأدوية",
    "Des traitements vétérinaires expliqués clairement, avec la dose, la durée et les précautions adaptées.": "أدوية بيطرية بشرح واضح للجرعة والمدة والاحتياطات.",
    "Sécurité d'abord": "السلامة أولا",
    "Ne donnez jamais un médicament humain sans avis vétérinaire.": "ما تعطي حتى دوا ديال الإنسان بلا رأي البيطري.",
    "Comment ce service aide votre animal": "كيفاش هاد الخدمة كتعاون الحيوان",
    "Prescription adaptée": "وصفة مناسبة",
    "Une dose calculée selon l'espèce, le poids et le diagnostic.": "جرعة محسوبة على حساب النوع والوزن والتشخيص.",
    "Administration expliquée": "طريقة الاستعمال مشروحة",
    "Nos conseils pour donner le traitement plus sereinement.": "نصائح باش تعطي الدوا بسهولة وأمان.",
    "Durée claire": "مدة واضحة",
    "Un schéma précis pour limiter oublis et erreurs.": "برنامج دقيق باش ننقصو النسيان والأخطاء.",
    "Suivi des effets": "متابعة المفعول",
    "Les signes attendus et ceux qui doivent conduire à nous rappeler.": "العلامات العادية واللي خاصك تعيّط علينا بسببها.",
    "Conservez les médicaments dans leur emballage d'origine, hors de portée des enfants et des animaux.": "خلي الأدوية فالعلبة الأصلية وبعيدة على الدراري والحيوانات.",

    /* Dentistry and nutrition */
    "Santé bucco-dentaire": "صحة الفم والأسنان",
    "Prévenir la douleur, l'infection et les conséquences du tartre sur le bien-être général de votre compagnon.": "الوقاية من الألم والالتهاب وآثار الجير على صحة الحيوان عامة.",
    "Un contrôle régulier": "فحص منتظم",
    "La bouche peut sembler normale alors qu'une gêne s'installe déjà.": "الفم يقدر يبان عادي والمشكل راه بدا.",
    "Une bonne santé dentaire participe au confort, à l'appétit et à la santé générale. Le dépistage précoce permet d'agir avant une douleur importante.": "صحة السنان كتعاون فالراحة والشهية والصحة العامة، والكشف بكري كيخلينا نتدخلو قبل ما يقوى الألم.",
    "Les signes à surveiller": "العلامات اللي خاص تراقب",
    "Mauvaise haleine": "ريحة الفم خايبة",
    "Une odeur persistante mérite un contrôle.": "الريحة اللي كتبقى خاصها فحص.",
    "Tartre ou gencives rouges": "الجير ولا اللثة حمرا",
    "Plaque visible, saignement ou inflammation.": "ترسبات باينة أو نزيف أو التهاب.",
    "Difficulté à manger": "صعوبة فالماكلة",
    "Mastication d'un seul côté ou aliments délaissés.": "كيمضغ من جهة وحدة ولا كيخلي الماكلة.",
    "Changement de comportement": "تغيير فالسلوك",
    "Irritabilité, salivation ou frottement du museau.": "العصبية أو اللعاب بزاف أو حك الفم.",
    "Selon le bilan, nous discutons avec vous des soins, de l'anesthésie et de la prévention à la maison.": "على حساب الفحص كنشرحو ليك العلاج والتخدير والوقاية فالدار.",
    "Nutrition vétérinaire": "التغذية البيطرية",
    "Des repères concrets pour nourrir votre animal selon son âge, son poids, son activité et sa santé.": "نصائح عملية لتغذية الحيوان على حساب العمر والوزن والنشاط والصحة.",
    "Chaque animal est unique": "كل حيوان مختلف",
    "Une ration adaptée se raisonne avec son poids idéal et son état de santé.": "الكمية المناسبة كتتحسب بالوزن المثالي والحالة الصحية.",
    "Certaines pathologies sont directement influencées par l'alimentation. Un conseil précis peut soutenir la prévention et le traitement.": "كاين أمراض كتتأثر مباشرة بالماكلة، والنصيحة الدقيقة كتعاون فالوقاية والعلاج.",
    "Les bases à retenir": "الأساسيات اللي خاص تتفكر",
    "À privilégier": "شنو نعطيو",
    "À éviter": "شنو نتفاداو",
    "Chat": "قط",
    "Aliment complet adapté à l'âge, eau fraîche": "ماكلة كاملة مناسبة للعمر وماء نقي",
    "Restes gras, oignon, ail, chocolat": "الماكلة الدسمة، البصلة، الثوم، الشكلاط",
    "Chien": "كلب",
    "Ration mesurée et aliment complet": "كمية محسوبة وماكلة كاملة",
    "Chocolat, raisins, xylitol, os cuits": "الشكلاط، العنب، الزيليتول، العظام طايبين",
    "Animal en surpoids": "حيوان عندو الوزن زايد",
    "Plan progressif et suivi du poids": "برنامج تدريجي ومتابعة الوزن",
    "Restriction brutale et friandises non comptées": "المنع المفاجئ والمكافآت بلا حساب",
    "Animal malade": "حيوان مريض",
    "Aliment conseillé après diagnostic": "ماكلة موصى بها من بعد التشخيص",
    "Changement improvisé ou complément non validé": "تغيير عشوائي ولا مكمل بلا موافقة",
    "Toute transition alimentaire se fait progressivement, sauf indication vétérinaire différente.": "أي تغيير فالماكلة خاصو يكون بالتدريج، إلا قال البيطري العكس.",

    /* NAC */
    "Médecine des NAC": "طب الحيوانات الأليفة غير المألوفة",
    "Des conseils et des soins adaptés aux besoins particuliers des petits mammifères, reptiles, oiseaux et autres NAC.": "نصائح وعلاج مناسبين لاحتياجات القوارض والزواحف والطيور وحيوانات أخرى.",
    "Une consultation spécifique": "فحص خاص",
    "Apportez si possible des photos de l'habitat, de l'alimentation et des installations.": "إلى قدرت، جيب تصاور للمكان والماكلة والتجهيزات ديال الحيوان.",
    "Quels animaux sont concernés ?": "شنو هما الحيوانات المعنية؟",
    "Petits mammifères": "الثدييات الصغيرة",
    "Lapins, rongeurs et autres petits compagnons.": "الأرانب والقوارض وحيوانات صغيرة أخرى.",
    "Reptiles & amphibiens": "الزواحف والبرمائيات",
    "Évaluation de l'environnement, de l'alimentation et de la santé.": "تقييم المكان والتغذية والصحة.",
    "Oiseaux": "الطيور",
    "Bilan clinique et conseils d'entretien adaptés.": "فحص ونصائح عناية مناسبة.",
    "Autres NAC": "حيوانات أخرى",
    "Contactez-nous avant la visite pour confirmer la prise en charge.": "تاصل بينا قبل الزيارة باش نأكدو ليك واش نقدرو نستقبلوه.",
    "Les signes qui nécessitent un avis": "العلامات اللي خاصها رأي بيطري",
    "Refus de manger ou modification des selles": "ما كياكلش ولا تبدلات الفضلات",
    "Respiration inhabituelle ou baisse d'activité": "تنفس غير عادي ولا نقص فالنشاط",
    "Blessure, masse ou gonflement": "جرح أو كتلة أو انتفاخ",
    "Changement soudain de comportement": "تغيير مفاجئ فالسلوك",
    "Chez de nombreux NAC, une baisse d'appétit est rapidement préoccupante. Appelez la clinique sans attendre.": "عند بزاف من هاد الحيوانات، نقص الشهية كيولي مقلق بسرعة. عيّط للمصحة بلا ما تسنى.",
    "Contact d'urgence": "تواصل مستعجل",

    /* Appointment */
    "Planifier une visite": "برمج الزيارة",
    "Dites-nous qui vous accompagne et choisissez le créneau qui vous convient. Votre demande reste modifiable jusqu'à la confirmation.": "عطينا معلومات عليك وعلى الحيوان واختار الوقت اللي مناسب ليك. تقدر تبدل الطلب حتى يتأكد.",
    "Urgence ?": "حالة مستعجلة؟",
    "N'attendez pas un créneau en ligne : appelez-nous directement.": "ما تسناش الموعد فالأنترنت: عيّط لينا مباشرة.",
    "Progression": "مراحل الطلب",
    "Vos informations": "المعلومات ديالك",
    "Date & heure": "النهار والوقت",
    "Confirmation": "التأكيد",
    "Parlez-nous de votre animal": "عرّفنا على الحيوان ديالك",
    "Les champs marqués d'un astérisque sont obligatoires.": "الخانات اللي فيها نجمة ضرورية.",
    "Titre": "اللقب",
    "Choisir": "اختار",
    "Mme": "السيدة",
    "M.": "السيد",
    "Dr": "د.",
    "Prénom": "الاسم الشخصي",
    "Nom": "النسب",
    "Téléphone": "التليفون",
    "E-mail": "الإيميل",
    "Nom de l'animal": "سمية الحيوان",
    "Espèce": "النوع",
    "Race": "السلالة",
    "Lapin": "أرنب",
    "Oiseau": "طائر",
    "Reptile": "زاحف",
    "Autre NAC": "حيوان آخر",
    "Motif de visite": "سبب الزيارة",
    "Choisir un service": "اختار الخدمة",
    "Que remarquez-vous ?": "شنو لاحظتي؟",
    "Décrivez brièvement les symptômes ou l'objet de la visite…": "شرح باختصار الأعراض ولا سبب الزيارة…",
    "N'indiquez pas d'informations confidentielles non nécessaires.": "ما تكتبش معلومات سرية ماشي ضرورية.",
    "Est-ce une urgence ?": "واش الحالة مستعجلة؟",
    "Choisir un créneau": "اختار الموعد",
    "Choisissez votre créneau": "اختار الوقت المناسب",
    "Les horaires affichés sont des préférences de demande. L'équipe vous confirme ensuite le rendez-vous.": "الأوقات المعروضة غير رغبة فالطلب، والفريق غادي يأكد ليك الموعد من بعد.",
    "Date souhaitée": "النهار اللي بغيتي",
    "Heure souhaitée": "الوقت اللي بغيتي",
    "Horaires disponibles": "الأوقات المتوفرة",
    "Confirmer ma demande": "أكد الطلب ديالي",
    "Votre demande est prête": "الطلب ديالك واجد",
    "Elle a été enregistrée sur cet appareil. Envoyez-la par e-mail ou appelez la clinique pour obtenir la confirmation du créneau.": "تسجل الطلب فهاد الجهاز. صيفطو بالإيميل ولا عيّط للمصحة باش يتأكد الموعد.",
    "Envoyer par e-mail": "صيفط بالإيميل",
    "Votre demande": "الطلب ديالك",
    "Récapitulatif": "الملخص",
    "Propriétaire": "مول الحيوان",
    "À renseigner": "خاص المعلومات",
    "Motif": "السبب",
    "À choisir": "خاصك تختار",
    "Créneau souhaité": "الموعد المطلوب",
    "Aucune réservation n'est définitive avant confirmation de la clinique. En cas d'urgence, appelez le +212 5 37 37 40 96.": "حتى حجز ما كيكون نهائي قبل تأكيد المصحة. فالحالة المستعجلة عيّط لـ +212 5 37 37 40 96.",
    "Veuillez choisir une heure souhaitée.": "عافاك اختار الوقت اللي بغيتي.",
    "Demande enregistrée sur cet appareil.": "تسجل الطلب فهاد الجهاز.",

    /* Surgical approach */
    "Un parcours transparent en quatre temps, avec des consignes simples avant et après l'intervention.": "مسار واضح فأربع مراحل، مع تعليمات بسيطة قبل العملية ومن بعدها.",
    "Votre rôle compte": "الدور ديالك مهم",
    "Une bonne préparation facilite l'anesthésie, le réveil et le retour à la maison.": "التحضير المزيان كيسهّل التخدير والفياق والرجوع للدار.",
    "Le parcours chirurgical": "مراحل العملية",
    "Consultation préopératoire": "الفحص قبل العملية",
    "Examen, indication, bénéfices, risques et réponses à vos questions.": "الفحص والسبب والفوائد والمخاطر والجواب على الأسئلة ديالك.",
    "Préparation personnalisée": "تحضير على حساب الحالة",
    "Consignes de jeûne, bilan éventuel et protocole anesthésique.": "تعليمات الصيام والتحاليل إلا لزم وطريقة التخدير.",
    "Intervention surveillée": "عملية مراقبة",
    "Surveillance des paramètres essentiels pendant toute l'opération.": "مراقبة العلامات الأساسية طول العملية.",
    "Réveil & retour": "الفياق والرجوع",
    "Contrôle de la douleur et consignes écrites avant la sortie.": "التحكم فالألم وتعليمات مكتوبة قبل الخروج.",
    "Avant l'opération": "قبل العملية",
    "Respectez exactement les consignes de jeûne. Signalez tout changement d'état ou traitement en cours.": "تبع تعليمات الصيام بالدقة وقل لينا على أي تبدل ولا دوا كياخدو.",
    "À ne pas faire": "شنو ما خاصش تدير",
    "Ne donnez ni aliment ni médicament non validé par la clinique le matin de l'intervention.": "ما تعطي لا ماكلة لا دوا ما وافقاتش عليه المصحة صباح العملية.",
    "Après l'opération": "من بعد العملية",
    "Gardez votre animal au calme, vérifiez la plaie et administrez les traitements prescrits.": "خلي الحيوان هاني، راقب الجرح وعطيه الدوا الموصوف.",
    "Quand nous rappeler": "فوقاش تعاود تعيط لينا",
    "Saignement, douleur non contrôlée, vomissements répétés, gonflement ou abattement marqué.": "نزيف، ألم ما تحكمناش فيه، قيء متكرر، انتفاخ ولا عياء قوي.",
    "Voir les opérations": "شوف العمليات",

    /* Information request */
    "Nous écrire": "كتب لينا",
    "Demande de renseignements": "طلب معلومات",
    "Une question sur un service, une préparation ou un suivi ? Laissez-nous les informations utiles pour vous répondre clairement.": "عندك سؤال على شي خدمة ولا التحضير ولا المتابعة؟ خلي لينا المعلومات المهمة باش نجاوبوك بوضوح.",
    "Pour aller plus vite": "باش نجاوبوك بسرعة",
    "Pour une demande urgente ou un animal qui va mal, téléphonez directement.": "إلا كانت الحالة مستعجلة ولا الحيوان ماشي مزيان، عيّط مباشرة.",
    "Votre question": "السؤال ديالك",
    "Ce formulaire prépare un e-mail dans votre messagerie. Aucun renseignement n'est envoyé automatiquement.": "هاد الاستمارة كتوجد إيميل فالبريد ديالك. حتى معلومة ما كتتصيفط بوحدها.",
    "Sujet": "الموضوع",
    "Informations sur un service": "معلومات على شي خدمة",
    "Préparer une visite": "تحضير الزيارة",
    "Suivi après une consultation": "المتابعة من بعد الفحص",
    "Horaires et accès": "الأوقات والطريق",
    "Autre question": "سؤال آخر",
    "Votre message": "الرسالة ديالك",
    "Préparer mon e-mail": "وجد ليا الإيميل",
    "Réponse rapide": "جواب سريع",
    "Vous pouvez aussi nous joindre directement": "تقدر حتى تتاصل بينا مباشرة",
    "Adresse": "العنوان",
    "464 avenue Mohammed V, Kénitra, Maroc": "464 شارع محمد الخامس، القنيطرة، المغرب",
    "N'envoyez pas de demande urgente par e-mail.": "ما تصيفطش حالة مستعجلة بالإيميل.",
    "Votre messagerie va s'ouvrir avec la demande préparée.": "غادي يتحل البريد ديالك والطلب واجد.",

    /* Contact and map */
    "Une question, un rendez-vous à confirmer ou une urgence ? Choisissez le moyen le plus direct pour joindre l'équipe.": "عندك سؤال ولا موعد خاصو يتأكد ولا حالة مستعجلة؟ اختار أسرع طريقة باش تتاصل بالفريق.",
    "Avant de vous déplacer": "قبل ما تجي",
    "En cas d'urgence, appelez afin que nous puissions préparer votre arrivée.": "فالحالة المستعجلة عيّط باش نوجدو لاستقبالك.",
    "Carte Google Maps": "خريطة Google Maps",
    "La carte est bloquée pour protéger votre vie privée. En l'affichant, vous autorisez le chargement de contenu depuis Google.": "الخريطة محبوسة باش نحافظو على الخصوصية ديالك. إلا وريتيها راك كتسمح بتحميل المحتوى من Google.",
    "Autoriser et afficher la carte": "سمح وورّي الخريطة",
    "Ouvrir l'itinéraire sans intégrer la carte": "حل الطريق بلا ما ندمجو الخريطة",
    "Clinique du Gharb": "مصحة الغرب",
    "À Kénitra, au cœur de la ville.": "فالقنيطرة، فقلب المدينة.",
    "Lun–ven : 08:30–19:00": "الاثنين–الجمعة: 08:30–19:00",
    "Sam : 09:00–17:00": "السبت: 09:00–17:00",
    "Dim : urgences sur appel": "الأحد: المستعجلات بالتليفون",
    "Ouvrir l'itinéraire dans Google Maps": "حل الطريق فـ Google Maps",
    "Une vétérinaire examine doucement un chien avec sa propriétaire": "بيطرية كاتفحص كلب بالرفق حدا مولاتو",

    /* Emergency hub */
    "Disponible par téléphone": "متوفرين بالتليفون",
    "Urgences vétérinaires": "المستعجلات البيطرية",
    "Si votre animal respire mal, saigne abondamment, convulse, perd connaissance ou a ingéré un produit toxique, appelez la clinique immédiatement.": "إلا كان الحيوان كيتنفس بصعوبة، كينزف بزاف، كيتشنج، فقد الوعي ولا بلع مادة سامة، عيّط للمصحة دابا.",
    "Itinéraire vers la clinique": "الطريق للمصحة",
    "Appelez avant de venir.": "عيّط قبل ما تجي.",
    "Cela nous permet d'évaluer la priorité, de vous donner les premiers conseils et de préparer votre arrivée.": "هادشي كيخلينا نعرفو درجة الاستعجال، نعطيوك النصائح الأولى ونوجدو لاستقبالك.",
    "Guide pratique": "دليل عملي",
    "Agir calmement, étape par étape.": "تصرف بهدوء، خطوة بخطوة.",
    "Opérations urgentes": "العمليات المستعجلة",
    "Les situations chirurgicales prises en charge après évaluation.": "الحالات الجراحية اللي كنتكلفو بها من بعد الفحص.",
    "Les premiers gestes": "الخطوات الأولى",
    "Sécuriser, observer et transporter sans aggraver la situation.": "أمّن المكان، راقب ونقل الحيوان بلا ما تزيد الحالة.",
    "Identifier une urgence": "كيفاش تعرف الحالة المستعجلة",
    "Les signes qui justifient un appel immédiat à la clinique.": "العلامات اللي خاصك بسببها تعيط للمصحة دابا.",
    "La prise en charge": "طريقة التكفل",
    "Ce qui se passe lorsque votre animal arrive à la clinique.": "شنو كيوقع ملي كيوصل الحيوان للمصحة.",
    "Questions fréquentes": "الأسئلة المتداولة",
    "Les réponses utiles avant de prendre la route.": "أجوبة مفيدة قبل ما تشد الطريق.",
    "Un doute vaut toujours un appel.": "إلا شكّيتي، حسن تعيّط.",
    "Décrivez les symptômes, leur durée et ce qui s'est passé. L'équipe vous indique la conduite à tenir.": "شرح الأعراض وشحال هادي بدات وشنو وقع، والفريق غادي يقول ليك شنو تدير.",
    "Guide d'urgence": "دليل المستعجلات",
    "Retour aux urgences": "رجوع للمستعجلات",

    /* Emergency details */
    "Certaines situations nécessitent une stabilisation puis une intervention sans délai. La priorité est déterminée après l'examen initial.": "شي حالات خاصها الاستقرار ومن بعد تدخل بلا تأخير. الأولوية كتتحدد من بعد الفحص الأول.",
    "Situations pouvant nécessiter une chirurgie": "حالات تقدر تحتاج عملية",
    "Traumatisme": "إصابة قوية",
    "Plaie profonde, accident, fracture suspectée ou saignement.": "جرح غارق، حادثة، شك فكسر ولا نزيف.",
    "Abdomen aigu": "ألم حاد فالبطن",
    "Ballonnement brutal, douleur forte ou suspicion de corps étranger.": "نفخة مفاجئة، ألم قوي ولا شك فشي حاجة مبلوعة.",
    "Obstruction": "انسداد",
    "Difficulté majeure ou impossibilité d'uriner, d'avaler ou de respirer.": "صعوبة كبيرة ولا ما قادرش يبول أو يبلع أو يتنفس.",
    "Mise bas difficile": "ولادة صعيبة",
    "Contractions sans naissance, épuisement ou intervalle inquiétant.": "تقلصات بلا ولادة، عياء قوي ولا مدة مقلقة.",
    "Cette liste n'est pas exhaustive. N'essayez pas de faire manger ou boire un animal susceptible d'être anesthésié avant d'avoir appelé.": "هاد اللائحة ما فيهاش كلشي. ما تحاولش توكل ولا تسقي حيوان يقدر يحتاج التخدير قبل ما تعيط.",
    "À l'arrivée": "ملي توصل",
    "L'équipe commence par stabiliser les fonctions vitales et soulager la douleur. Les examens nécessaires sont ensuite expliqués avant la décision chirurgicale, lorsque la situation le permet.": "الفريق كيبدا بتثبيت الوظائف الحيوية وتخفيف الألم، ومن بعد كيشرح الفحوصات اللازمة قبل القرار الجراحي إلا سمحات الحالة.",
    "Les premiers gestes en urgence": "الخطوات الأولى فالمستعجلات",
    "Votre sécurité compte autant que celle de votre animal. Approchez-le lentement : la douleur peut provoquer une réaction inhabituelle.": "السلامة ديالك مهمة بحال سلامة الحيوان. قرب ليه بشوية حيث الألم يقدر يخليه يرد بفعل ماشي عادي.",
    "Avant de prendre la route": "قبل ما تشد الطريق",
    "Sécurisez les lieux": "أمّن المكان",
    "Éloignez la circulation, le feu, l'électricité, les produits toxiques et les autres animaux.": "بعد الحيوان على الطريق والعافية والضو والمواد السامة والحيوانات الأخرى.",
    "Vérifiez sa réponse": "شوف واش كيجاوب",
    "Appelez-le par son nom et observez s'il réagit au son ou au toucher.": "عيّط ليه بسميتو وشوف واش كيرد للصوت ولا اللمس.",
    "Observez sa respiration": "راقب التنفس",
    "Regardez les mouvements du thorax et vérifiez que la bouche n'est pas obstruée, sans mettre vos doigts en danger.": "شوف حركة الصدر وتأكد الفم ما مسدودش بلا ما تعرّض صباعك للخطر.",
    "Limitez les mouvements": "نقص الحركة",
    "Utilisez une couverture ou une surface rigide si un traumatisme est possible.": "استعمل مانطة ولا سطح قاصح إلا كان ممكن تكون إصابة.",
    "Décrivez les signes et suivez les consignes données avant le transport.": "شرح العلامات وتبع التعليمات قبل النقل.",
    "Ne donnez ni médicament, ni nourriture, ni eau de force.": "ما تعطي لا دوا لا ماكلة لا ما بالقوة.",
    "N'appliquez pas de garrot sans consigne d'un professionnel.": "ما تديرش رباط ضاغط بلا تعليمات من مختص.",
    "Comment identifier une urgence": "كيفاش تعرف الحالة المستعجلة",
    "Certains signes peuvent engager le pronostic vital. S'ils sont présents, appelez sans attendre même si vous n'êtes pas certain de leur gravité.": "شي علامات تقدر تهدد حياة الحيوان. إلا بانو عيّط بلا ما تسنى حتى إلا ما كنتيش متأكد من الخطورة.",
    "Les signes d'alerte": "علامات الخطر",
    "Saignement abondant": "نزيف بزاف",
    "Difficulté à respirer": "صعوبة فالتنفس",
    "Perte de conscience": "فقدان الوعي",
    "Convulsions répétées": "تشنجات متكررة",
    "Vomissements ou diarrhée sévères": "قيء ولا إسهال قوي",
    "Abdomen gonflé et douloureux": "البطن منفوخة وكتوجع",
    "Ingestion d'un produit toxique": "بلع مادة سامة",
    "Impossibilité d'uriner": "ما قادرش يبول",
    "Traumatisme ou chute": "إصابة ولا طيحة",
    "Douleur intense ou paralysie soudaine": "ألم قوي ولا شلل مفاجئ",
    "Chez un très jeune animal, un sénior ou un NAC, une dégradation peut être rapide. Un comportement anormal associé à une baisse d'appétit justifie un avis.": "عند الحيوان الصغير بزاف ولا الكبير فالسن ولا الحيوانات غير المألوفة، الحالة تقدر تتدهور بسرعة. سلوك غير عادي مع نقص الشهية خاصو رأي بيطري.",
    "Comment votre animal va être pris en charge": "كيفاش غادي نتكلفو بالحيوان",
    "Notre priorité est de comprendre ce qui menace sa santé, de stabiliser son état et de soulager la douleur.": "الأولوية ديالنا نفهمو شنو كيهدد صحتو ونثبتو الحالة ونخففو الألم.",
    "À votre arrivée": "ملي توصلو",
    "Évaluation immédiate": "تقييم فالحين",
    "L'équipe vérifie la respiration, la circulation, la conscience et la douleur.": "الفريق كيفحص التنفس والدورة الدموية والوعي والألم.",
    "Stabilisation": "تثبيت الحالة",
    "Oxygène, accès veineux, contrôle du saignement ou autre geste prioritaire selon l'état.": "الأوكسجين، مدخل للعروق، وقف النزيف ولا خطوة مستعجلة أخرى على حساب الحالة.",
    "Examens ciblés": "فحوصات مركزة",
    "Analyses ou imagerie sont proposés pour préciser le diagnostic.": "كنقترحو التحاليل ولا التصوير باش نوضحو التشخيص.",
    "Plan de soins": "خطة العلاج",
    "Nous vous expliquons la situation, les options et les prochaines étapes aussi vite que possible.": "كنشرحو ليك الحالة والاختيارات والخطوات الجاية بأسرع ما يمكن.",
    "L'ordre de passage dépend de la gravité clinique, pas de l'ordre d'arrivée. Un animal instable est pris en charge en priorité.": "ترتيب الدخول كيكون على حساب الخطورة ماشي شكون جا الأول. الحيوان اللي حالتو ما مستقراش عندو الأولوية.",
    "Questions fréquentes sur les urgences": "الأسئلة المتداولة على المستعجلات",
    "Les réponses essentielles pour préparer l'appel, le transport et l'arrivée à la clinique.": "الأجوبة المهمة باش توجد الاتصال والنقل والوصول للمصحة.",
    "Dois-je appeler avant d'arriver ?": "واش خاصني نعيّط قبل ما نوصل؟",
    "Oui. L'appel permet à l'équipe d'évaluer la priorité, de préparer votre arrivée et de vous indiquer les gestes utiles pendant le trajet.": "إييه. الاتصال كيعاون الفريق يقيم الاستعجال ويوجد لاستقبالك ويقول ليك شنو تدير فالطريق.",
    "Quelles informations dois-je fournir ?": "شنو هي المعلومات اللي نعطي؟",
    "Le nom et l'espèce de l'animal, son poids approximatif, ses symptômes, l'heure de début, les traitements en cours et la cause possible — accident, ingestion ou maladie.": "سمية ونوع الحيوان، الوزن التقريبي، الأعراض، فوقاش بداو، الأدوية اللي كياخد والسبب الممكن — حادثة ولا حاجة بلعها ولا مرض.",
    "Que faire avant d'arriver ?": "شنو ندير قبل ما نوصل؟",
    "Gardez votre animal au calme, limitez ses mouvements et suivez les consignes données au téléphone. Ne donnez pas de médicament humain.": "خلي الحيوان هاني ونقص الحركة وتبع تعليمات التليفون. ما تعطيه حتى دوا ديال الإنسان.",
    "Que dois-je apporter ?": "شنو نجيب معايا؟",
    "Son carnet de santé, les ordonnances, les médicaments en cours et, en cas d'ingestion, l'emballage ou une photo du produit concerné.": "الدفتر الصحي والوصفات والأدوية، وإلا بلع شي حاجة جيب العلبة ولا تصويرة ديال المنتوج.",
    "Comment transporter un animal blessé ?": "كيفاش ننقل حيوان مجروح؟",
    "Utilisez une caisse pour un petit animal. Pour un animal plus grand, une couverture peut servir de brancard. Évitez de plier son dos et protégez-vous d'une morsure réflexe.": "استعمل القفص للحيوان الصغير. للحيوان الكبير تقدر تستعمل مانطة بحال النقّالة. ما تثنيش ظهرو وحمي راسك من العض بسبب الألم.",
    "Puis-je lui donner à manger ou à boire ?": "نقدر نعطيه ياكل ولا يشرب؟",
    "Pas sans avis. Une anesthésie peut être nécessaire et forcer un animal à boire peut être dangereux.": "ماشي بلا رأي. يقدر يحتاج التخدير وإجبار الحيوان يشرب يقدر يكون خطر.",

    /* Generic labels and messages */
    "Type": "النوع",
    "Description": "الشرح",
    "Durée": "المدة",
    "Service": "الخدمة",
    "Faire": "دير",
    "Ne pas faire": "ما تديرش",
    "20–30 min": "20–30 دقيقة",
    "30 min": "30 دقيقة",
    "15–20 min": "15–20 دقيقة",
    "30–40 min": "30–40 دقيقة"
  };

  const arabicTitles = {
    home: "مصحة الغرب البيطرية — القنيطرة",
    appointment: "حجز موعد — مصحة الغرب البيطرية",
    consultations: "الفحوصات البيطرية — مصحة الغرب البيطرية",
    sterilisation: "التعقيم — مصحة الغرب البيطرية",
    vaccins: "التلقيحات وعلاج الطفيليات — مصحة الغرب البيطرية",
    operations: "العمليات الجراحية — مصحة الغرب البيطرية",
    approach: "الطريقة ديالنا فالجراحة — مصحة الغرب البيطرية",
    analyses: "التحاليل البيطرية — مصحة الغرب البيطرية",
    vermifugation: "الديدان والطفيليات — مصحة الغرب البيطرية",
    hospitalisation: "الإقامة فالمصحة — مصحة الغرب البيطرية",
    medicaments: "الأدوية — مصحة الغرب البيطرية",
    dentisterie: "طب الأسنان — مصحة الغرب البيطرية",
    alimentation: "التغذية العلاجية — مصحة الغرب البيطرية",
    nac: "الحيوانات الأليفة غير المألوفة — مصحة الغرب البيطرية",
    information: "طلب معلومات — مصحة الغرب البيطرية",
    emergency: "المستعجلات البيطرية — مصحة الغرب البيطرية",
    "emergency-operations": "العمليات المستعجلة — مصحة الغرب البيطرية",
    "emergency-steps": "الخطوات الأولى فالمستعجلات — مصحة الغرب البيطرية",
    "emergency-identify": "كيفاش تعرف الحالة المستعجلة — مصحة الغرب البيطرية",
    "emergency-faq": "أسئلة المستعجلات — مصحة الغرب البيطرية",
    "emergency-treatment": "التكفل بالحالات المستعجلة — مصحة الغرب البيطرية",
    contact: "تواصل معنا — مصحة الغرب البيطرية"
  };

  function readLanguage() {
    const requested = new URLSearchParams(window.location.search).get("lang");
    if (requested === ARABIC || requested === FRENCH) {
      try { localStorage.setItem(STORAGE_KEY, requested); } catch (_) { /* Continue with requested locale. */ }
      return requested;
    }
    try { return localStorage.getItem(STORAGE_KEY) === ARABIC ? ARABIC : FRENCH; }
    catch (_) { return FRENCH; }
  }

  const language = readLanguage();

  window.VDGI18n = {
    language,
    translate(value) {
      return language === ARABIC && ar[value] ? ar[value] : value;
    }
  };

  function translateTextNode(node) {
    const value = node.nodeValue;
    const key = value && value.trim();
    if (!key || !ar[key]) return;
    const leading = value.match(/^\s*/)[0];
    const trailing = value.match(/\s*$/)[0];
    node.nodeValue = leading + ar[key] + trailing;
  }

  function translateAttributes(root) {
    const elements = root.nodeType === 1 ? [root, ...root.querySelectorAll("[placeholder], [aria-label], [title], [alt]")] : [];
    elements.forEach((element) => {
      ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
        const value = element.getAttribute && element.getAttribute(attribute);
        if (value && ar[value]) element.setAttribute(attribute, ar[value]);
      });
    });
  }

  function translateTree(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.matches && root.matches("script, style")) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement && !node.parentElement.closest("script, style") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
    translateAttributes(root);
  }

  function translateDateShortcuts() {
    document.querySelectorAll("[data-date]").forEach((button) => {
      const parts = button.dataset.date.split("-").map(Number);
      const date = new Date(parts[0], parts[1] - 1, parts[2]);
      const weekday = new Intl.DateTimeFormat("ar-MA", { weekday: "short" }).format(date);
      const detail = new Intl.DateTimeFormat("ar-MA", { day: "numeric", month: "short" }).format(date);
      button.innerHTML = `${weekday}<small>${detail}</small>`;
    });
  }

  function configureLanguageButtons() {
    document.querySelectorAll("[data-language-toggle]").forEach((button) => {
      if (button.classList.contains("language-toggle")) {
        const symbol = button.querySelector("span:first-child");
        const label = button.querySelector(".language-toggle-label");
        if (symbol) symbol.textContent = language === ARABIC ? "FR" : "ع";
        if (label) label.textContent = language === ARABIC ? "Français" : "العربية";
      } else {
        button.textContent = language === ARABIC ? "Français" : "العربية";
      }
      button.setAttribute("aria-label", language === ARABIC ? "Afficher le site en français" : "عرض الموقع بالدارجة المغربية");
      button.addEventListener("click", () => {
        const next = language === ARABIC ? FRENCH : ARABIC;
        if (window.VDGAnalytics) window.VDGAnalytics.track("language_change", { from: language, to: next });
        try { localStorage.setItem(STORAGE_KEY, next); } catch (_) { /* The query parameter still carries the choice. */ }
        const url = new URL(window.location.href);
        url.searchParams.delete("lang");
        window.location.href = url.href;
      });
    });
  }

  function init() {
    if (language === ARABIC) {
      document.documentElement.lang = ARABIC;
      document.documentElement.dir = "rtl";
      translateTree(document.getElementById("site"));
      translateDateShortcuts();
      const page = document.body.dataset.page || "home";
      if (arabicTitles[page]) document.title = arabicTitles[page];
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "characterData") translateTextNode(mutation.target);
          mutation.addedNodes.forEach(translateTree);
        });
      });
      observer.observe(document.getElementById("site"), { childList: true, subtree: true, characterData: true });
    } else {
      document.documentElement.lang = FRENCH;
      document.documentElement.dir = "ltr";
    }
    configureLanguageButtons();
    document.dispatchEvent(new CustomEvent("vdg:language-ready", { detail: { language } }));
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
