/* Production configuration. Fill the deployment URL and GA4 ID before publishing. */
window.VDG_CONFIG = Object.freeze({
  site: {
    url: "",
    name: "Clinique Vétérinaire du Gharb",
    defaultLocale: "fr",
    alternateLocale: "ary"
  },
  analytics: {
    provider: "ga4",
    measurementId: "",
    anonymizeIp: true
  },
  map: {
    provider: "Google Maps",
    query: "464 Avenue Mohammed V, 14 000, Kénitra, Maroc",
    externalUrl: "https://www.google.com/maps/search/?api=1&query=464+avenue+Mohammed+V+14000+Kenitra+Maroc"
  }
});
