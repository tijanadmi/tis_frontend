const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
const localOrigins = { portal: "http://localhost:5100", ddn: "http://localhost:5101", pogonski: "http://localhost:5102", zastita: "http://localhost:5103", sheme: "http://localhost:5104" };

export function portalUrl(path = "/") { return `${isLocal ? localOrigins.portal : ""}${path}`; }
export function applicationUrl(app) {
  if (isLocal) return `${localOrigins[app]}/`;
  return { ddn: "/dispecerski-dnevnik/", pogonski: "/pogonski-izvestaj/", zastita: "/rad-zastite/", sheme: "/sheme/" }[app];
}
