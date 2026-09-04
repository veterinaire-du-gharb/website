(function () {
  "use strict";

  const STORAGE_KEY = "vdg-consent-v1";
  const LANGUAGE_KEY = "vdg-language";
  const VERSION = 1;
  const config = window.VDG_CONFIG || {};
  const strings = {
    fr: {
      bannerTitle: "Votre vie privée, votre choix",
      bannerText: "Nous utilisons des mesures d’audience uniquement avec votre accord. La carte Google Maps reste bloquée tant que vous ne l’autorisez pas.",
      reject: "Tout refuser",
      customize: "Personnaliser",
      accept: "Tout accepter",
      dialogTitle: "Préférences de confidentialité",
      dialogText: "Vous pouvez modifier ces choix à tout moment depuis le pied de page.",
      necessary: "Fonctionnement essentiel",
      necessaryHelp: "Mémorise le thème, la langue et vos préférences. Toujours actif.",
      analytics: "Mesure d’audience",
      analyticsHelp: "Active Google Analytics 4 pour comprendre l’usage du site.",
      maps: "Contenu cartographique",
      mapsHelp: "Autorise le chargement de la carte intégrée depuis Google.",
      save: "Enregistrer mes choix",
      close: "Fermer",
      mapTitle: "Carte de la Clinique Vétérinaire du Gharb à Kénitra",
      changed: "Vos préférences ont été enregistrées."
    },
    ary: {
      bannerTitle: "الخصوصية ديالك، الاختيار ديالك",
      bannerText: "كنستعملو قياس الزيارات غير بالموافقة ديالك. خريطة Google Maps ما كتتحملش حتى كتسمح ليها.",
      reject: "نرفض الكل",
      customize: "نختار بالتفصيل",
      accept: "نقبل الكل",
      dialogTitle: "اختيارات الخصوصية",
      dialogText: "تقدر تبدّل هاد الاختيارات فأي وقت من لتحت ديال الموقع.",
      necessary: "الخدمات الضرورية",
      necessaryHelp: "كتحفظ المظهر واللغة واختياراتك. ديما خدامة.",
      analytics: "قياس الزيارات",
      analyticsHelp: "كتفعّل Google Analytics 4 باش نفهمو كيفاش كيستعمل الموقع.",
      maps: "الخريطة",
      mapsHelp: "كتسمح بتحميل الخريطة المدمجة من Google.",
      save: "نسجّل الاختيارات",
      close: "نسد",
      mapTitle: "خريطة مصحة الغرب البيطرية فالقنيطرة",
      changed: "تسجلات اختيارات الخصوصية ديالك."
    }
  };

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500
  });

  function locale() {
    try { return localStorage.getItem(LANGUAGE_KEY) === "ary" ? "ary" : "fr"; }
    catch (_) { return "fr"; }
  }

  function copy() {
    return strings[locale()];
  }

  function readConsent() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (!value || value.version !== VERSION) return null;
      return { version: VERSION, analytics: Boolean(value.analytics), maps: Boolean(value.maps) };
    } catch (_) {
      return null;
    }
  }

  function writeConsent(value) {
    const consent = { version: VERSION, analytics: Boolean(value.analytics), maps: Boolean(value.maps), updatedAt: new Date().toISOString() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(consent)); } catch (_) { /* The current-page choice still applies. */ }
    applyConsent(consent);
    document.dispatchEvent(new CustomEvent("vdg:consent-changed", { detail: consent }));
    return consent;
  }

  function validMeasurementId() {
    const id = config.analytics && config.analytics.measurementId;
    return typeof id === "string" && /^G-[A-Z0-9]+$/i.test(id) && !id.includes("XXXX");
  }

  function loadAnalytics() {
    if (!validMeasurementId() || document.getElementById("vdg-ga4")) return;
    const id = config.analytics.measurementId;
    const script = document.createElement("script");
    script.id = "vdg-ga4";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
    window.gtag("js", new Date());
    window.gtag("config", id, {
      anonymize_ip: config.analytics.anonymizeIp !== false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      page_title: document.title,
      page_location: window.location.href
    });
  }

  function updateAnalyticsConsent(granted) {
    window.gtag("consent", "update", {
      analytics_storage: granted ? "granted" : "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    if (granted) loadAnalytics();
  }

  function track(name, parameters) {
    const consent = readConsent();
    if (!consent || !consent.analytics || !validMeasurementId()) return;
    window.gtag("event", name, parameters || {});
  }

  window.VDGAnalytics = { track };

  function embedUrl() {
    const query = (config.map && config.map.query) || "464 avenue Mohammed V, Kénitra, Maroc";
    const language = locale() === "ary" ? "ar" : "fr";
    return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=${language}`;
  }

  function loadMap(container) {
    if (!container || container.querySelector("iframe")) return;
    const frame = document.createElement("iframe");
    frame.className = "map-frame";
    frame.title = copy().mapTitle;
    frame.src = embedUrl();
    frame.loading = "lazy";
    frame.referrerPolicy = "no-referrer-when-downgrade";
    frame.setAttribute("allowfullscreen", "");
    container.replaceChildren(frame);
    track("map_view", { provider: "google_maps", page: document.body.dataset.page || "unknown" });
  }

  function wireMapButton(container) {
    const button = container && container.querySelector("[data-map-consent]");
    if (!button) return;
    button.addEventListener("click", () => {
      const current = readConsent() || { version: VERSION, analytics: false, maps: false };
      writeConsent({ analytics: current.analytics, maps: true });
      loadMap(container);
    });
  }

  function applyMapConsent(consent) {
    const container = document.querySelector("[data-map-container]");
    if (!container) return;
    if (!container.dataset.placeholder) container.dataset.placeholder = container.innerHTML;
    if (consent && consent.maps) {
      loadMap(container);
      return;
    }
    if (container.querySelector("iframe")) container.innerHTML = container.dataset.placeholder;
    wireMapButton(container);
  }

  function applyConsent(consent) {
    updateAnalyticsConsent(Boolean(consent && consent.analytics));
    applyMapConsent(consent);
  }

  function consentMarkup() {
    const t = copy();
    return `
      <section class="consent-banner" data-consent-banner aria-label="${t.bannerTitle}" aria-live="polite">
        <div class="consent-banner-head"><span class="card-icon" aria-hidden="true">✓</span><div><h2>${t.bannerTitle}</h2><p>${t.bannerText}</p></div></div>
        <div class="consent-actions"><button class="btn btn-secondary" type="button" data-consent-reject>${t.reject}</button><button class="btn btn-secondary" type="button" data-consent-customize>${t.customize}</button><button class="btn btn-primary" type="button" data-consent-accept>${t.accept}</button></div>
      </section>
      <dialog class="consent-dialog" data-consent-dialog aria-labelledby="consent-dialog-title">
        <form class="consent-dialog-inner" method="dialog" data-consent-form>
          <div class="consent-dialog-header"><div><h2 id="consent-dialog-title">${t.dialogTitle}</h2><p class="consent-dialog-intro">${t.dialogText}</p></div><button class="icon-button" type="button" data-consent-close aria-label="${t.close}">×</button></div>
          <div class="consent-options">
            <div class="consent-option"><span><strong>${t.necessary}</strong><small>${t.necessaryHelp}</small></span><label class="switch"><input type="checkbox" checked disabled aria-label="${t.necessary}"><span class="switch-track"></span></label></div>
            <div class="consent-option"><span><strong>${t.analytics}</strong><small>${t.analyticsHelp}</small></span><label class="switch"><input type="checkbox" name="analytics" aria-label="${t.analytics}"><span class="switch-track"></span></label></div>
            <div class="consent-option"><span><strong>${t.maps}</strong><small>${t.mapsHelp}</small></span><label class="switch"><input type="checkbox" name="maps" aria-label="${t.maps}"><span class="switch-track"></span></label></div>
          </div>
          <div class="consent-actions"><button class="btn btn-secondary" type="button" data-consent-dialog-reject>${t.reject}</button><button class="btn btn-primary" type="submit">${t.save}</button></div>
        </form>
      </dialog>`;
  }

  function openDialog(dialog) {
    const current = readConsent() || { analytics: false, maps: false };
    dialog.querySelector('[name="analytics"]').checked = current.analytics;
    dialog.querySelector('[name="maps"]').checked = current.maps;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  function closeDialog(dialog) {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function initUi() {
    document.body.insertAdjacentHTML("beforeend", consentMarkup());
    const banner = document.querySelector("[data-consent-banner]");
    const dialog = document.querySelector("[data-consent-dialog]");
    const current = readConsent();
    applyConsent(current);
    if (!current) banner.classList.add("is-visible");

    document.querySelector("[data-consent-accept]").addEventListener("click", () => {
      writeConsent({ analytics: true, maps: true });
      banner.classList.remove("is-visible");
    });
    document.querySelector("[data-consent-reject]").addEventListener("click", () => {
      writeConsent({ analytics: false, maps: false });
      banner.classList.remove("is-visible");
    });
    document.querySelector("[data-consent-customize]").addEventListener("click", () => openDialog(dialog));
    document.querySelector("[data-consent-close]").addEventListener("click", () => closeDialog(dialog));
    document.querySelector("[data-consent-dialog-reject]").addEventListener("click", () => {
      writeConsent({ analytics: false, maps: false });
      banner.classList.remove("is-visible");
      closeDialog(dialog);
    });
    document.querySelector("[data-consent-form]").addEventListener("submit", (event) => {
      event.preventDefault();
      writeConsent({
        analytics: event.currentTarget.elements.analytics.checked,
        maps: event.currentTarget.elements.maps.checked
      });
      banner.classList.remove("is-visible");
      closeDialog(dialog);
      const toast = document.getElementById("toast");
      if (toast) {
        toast.querySelector("span").textContent = copy().changed;
        toast.classList.add("is-visible");
        window.setTimeout(() => toast.classList.remove("is-visible"), 3600);
      }
    });
    document.querySelectorAll("[data-consent-settings]").forEach((button) => button.addEventListener("click", () => openDialog(dialog)));

    document.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (!link) return;
      if (link.href.startsWith("tel:")) track("phone_click", { page: document.body.dataset.page || "unknown" });
      if (link.href.includes("rendez-vous.html")) track("appointment_click", { page: document.body.dataset.page || "unknown" });
      if (link.classList.contains("map-fallback-link")) track("map_external_click", { page: document.body.dataset.page || "unknown" });
    });
    document.addEventListener("submit", (event) => {
      if (event.target.id === "appointment-form") track("appointment_request", { form: "appointment" });
      if (event.target.id === "information-form") track("information_request", { form: "information" });
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initUi);
  else initUi();
})();
