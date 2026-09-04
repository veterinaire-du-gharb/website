(function () {
  "use strict";

  const config = window.VDG_CONFIG || {};
  const page = document.body.dataset.page || "home";
  const language = document.documentElement.lang === "ary" ? "ary" : "fr";
  const siteUrl = config.site && typeof config.site.url === "string" ? config.site.url.replace(/\/$/, "") : "";
  const fileName = window.location.pathname.split("/").pop() || "index.html";
  const pageUrl = siteUrl ? `${siteUrl}/${fileName === "index.html" ? "" : fileName}` : "";

  const descriptions = {
    fr: {
      home: "Clinique vétérinaire à Kénitra pour chiens, chats et NAC : prévention, consultations, chirurgie, hospitalisation et urgences.",
      appointment: "Demandez un rendez-vous à la Clinique Vétérinaire du Gharb à Kénitra.",
      emergency: "Urgences vétérinaires à Kénitra : signes d'alerte, premiers gestes et contact direct.",
      information: "Posez votre question à l'équipe de la Clinique Vétérinaire du Gharb.",
      contact: "Adresse, téléphone, horaires et carte de la Clinique Vétérinaire du Gharb à Kénitra."
    },
    ary: {
      home: "مصحة بيطرية فالقنيطرة للكلاب والقطط وحيوانات أخرى: الوقاية والفحوصات والجراحة والإقامة والمستعجلات.",
      appointment: "طلب موعد فمصحة الغرب البيطرية فالقنيطرة.",
      emergency: "المستعجلات البيطرية فالقنيطرة: علامات الخطر والخطوات الأولى والاتصال المباشر.",
      information: "طرح السؤال ديالك على فريق مصحة الغرب البيطرية.",
      contact: "العنوان والتليفون والأوقات وخريطة مصحة الغرب البيطرية فالقنيطرة."
    }
  };

  const labels = {
    fr: {
      home: "Accueil", appointment: "Rendez-vous", consultations: "Consultations vétérinaires", sterilisation: "Stérilisation", vaccins: "Vaccins et antiparasitaires", operations: "Opérations chirurgicales", approach: "Notre approche", analyses: "Analyses vétérinaires", vermifugation: "Vermifugation et parasites", hospitalisation: "Hospitalisation", medicaments: "Médicaments", dentisterie: "Dentisterie", alimentation: "Alimentation diététique", nac: "NAC", information: "Renseignements", emergency: "Urgences", "emergency-operations": "Opérations urgentes", "emergency-steps": "Premiers gestes", "emergency-identify": "Identifier une urgence", "emergency-faq": "Questions fréquentes", "emergency-treatment": "Prise en charge", contact: "Contact"
    },
    ary: {
      home: "الرئيسية", appointment: "المواعيد", consultations: "الفحوصات البيطرية", sterilisation: "التعقيم", vaccins: "التلقيحات والطفيليات", operations: "العمليات الجراحية", approach: "الطريقة ديالنا", analyses: "التحاليل البيطرية", vermifugation: "الديدان والطفيليات", hospitalisation: "الإقامة فالمصحة", medicaments: "الأدوية", dentisterie: "طب الأسنان", alimentation: "التغذية العلاجية", nac: "الحيوانات غير المألوفة", information: "استفسارات", emergency: "المستعجلات", "emergency-operations": "العمليات المستعجلة", "emergency-steps": "الخطوات الأولى", "emergency-identify": "علامات الاستعجال", "emergency-faq": "الأسئلة المتداولة", "emergency-treatment": "طريقة التكفل", contact: "تواصل معنا"
    }
  };

  const emergencyChildren = new Set(["emergency-operations", "emergency-steps", "emergency-identify", "emergency-faq", "emergency-treatment"]);
  const servicePages = new Set(["consultations", "sterilisation", "vaccins", "operations", "approach", "analyses", "vermifugation", "hospitalisation", "medicaments", "dentisterie", "alimentation", "nac"]);

  function upsertMeta(selector, attributes) {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement("meta");
      document.head.appendChild(element);
    }
    Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
    return element;
  }

  function upsertLink(rel, hreflang, href) {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]:not([hreflang])`;
    let link = document.head.querySelector(selector);
    if (!link) {
      link = document.createElement("link");
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      document.head.appendChild(link);
    }
    link.href = href;
  }

  function addJsonLd(id, value) {
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(value);
  }

  function pageDescription() {
    const localized = descriptions[language][page];
    if (localized) return localized;
    if (servicePages.has(page)) {
      return language === "ary"
        ? `${labels.ary[page]} فمصحة الغرب البيطرية فالقنيطرة، مع علاج ومتابعة على حساب حالة الحيوان.`
        : `${labels.fr[page]} à la Clinique Vétérinaire du Gharb à Kénitra, avec une prise en charge adaptée à votre animal.`;
    }
    return language === "ary" ? descriptions.ary.emergency : descriptions.fr.emergency;
  }

  function init() {
    const description = pageDescription();
    const title = document.title;
    const locale = language === "ary" ? "ar_MA" : "fr_MA";
    const alternateLocale = language === "ary" ? "fr_MA" : "ar_MA";

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Clinique Vétérinaire du Gharb" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: locale });
    upsertMeta('meta[property="og:locale:alternate"]', { property: "og:locale:alternate", content: alternateLocale });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    if (!document.head.querySelector('link[rel="icon"]')) {
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/png";
      favicon.href = "logo.png";
      document.head.appendChild(favicon);
    }

    if (siteUrl) {
      const imageUrl = `${siteUrl}/assets/images/hero-clinic.png`;
      upsertMeta('meta[property="og:url"]', { property: "og:url", content: pageUrl });
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: imageUrl });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: imageUrl });
      upsertLink("canonical", "", pageUrl);
      upsertLink("alternate", "fr", `${pageUrl}?lang=fr`);
      upsertLink("alternate", "ar-MA", `${pageUrl}?lang=ary`);
      upsertLink("alternate", "x-default", pageUrl);
    }

    const clinic = {
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      name: "Clinique Vétérinaire du Gharb",
      description: descriptions.fr.home,
      telephone: "+212537374096",
      email: "cliniqueveterinairedugharb@gmail.com",
      priceRange: "$$",
      foundingDate: "1980",
      hasMap: (config.map && config.map.externalUrl) || "https://www.google.com/maps/search/?api=1&query=464+avenue+Mohammed+V+Kenitra+Maroc",
      address: {
        "@type": "PostalAddress",
        streetAddress: "464 avenue Mohammed V",
        addressLocality: "Kénitra",
        addressCountry: "MA"
      },
      areaServed: { "@type": "City", name: "Kénitra" },
      knowsLanguage: ["fr", "ary"],
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:30", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "17:00" }
      ],
      contactPoint: { "@type": "ContactPoint", telephone: "+212537374096", contactType: "customer service", availableLanguage: ["French", "Moroccan Arabic"] }
    };
    if (siteUrl) {
      clinic.url = siteUrl;
      clinic.logo = `${siteUrl}/logo.png`;
      clinic.image = `${siteUrl}/assets/images/hero-clinic.png`;
      clinic["@id"] = `${siteUrl}/#clinic`;
    }
    addJsonLd("clinic-structured-data", clinic);

    const webPage = {
      "@context": "https://schema.org",
      "@type": page === "contact" ? "ContactPage" : (servicePages.has(page) || page === "emergency" ? "MedicalWebPage" : "WebPage"),
      name: title,
      description,
      inLanguage: language === "ary" ? "ary" : "fr"
    };
    if (pageUrl) webPage.url = pageUrl;
    if (siteUrl) webPage.isPartOf = { "@type": "WebSite", name: "Clinique Vétérinaire du Gharb", url: siteUrl, inLanguage: ["fr", "ary"] };
    addJsonLd("page-structured-data", webPage);

    const crumbs = [{ page: "home", file: "" }];
    if (emergencyChildren.has(page)) crumbs.push({ page: "emergency", file: "urgences.html" });
    if (page !== "home") crumbs.push({ page, file: fileName });
    addJsonLd("breadcrumb-structured-data", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((crumb, index) => {
        const item = { "@type": "ListItem", position: index + 1, name: labels[language][crumb.page] || labels[language].home };
        if (siteUrl) item.item = crumb.file ? `${siteUrl}/${crumb.file}` : `${siteUrl}/`;
        return item;
      })
    });

    if (page === "emergency-faq") {
      addJsonLd("faq-structured-data", {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [...document.querySelectorAll(".faq-item")].map((item) => ({
          "@type": "Question",
          name: item.querySelector(".faq-question span").textContent.trim(),
          acceptedAnswer: {
            "@type": "Answer",
            text: item.querySelector(".faq-answer").textContent.trim()
          }
        }))
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
