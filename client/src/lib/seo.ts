const SITE_URL = "https://gasekeschool-2wxuuzbx.manus.space";

export const seoDefaults = {
  siteUrl: SITE_URL,
  home: {
    title: "GS Gaseke | Nursery, Primary, O-Level & A-Level School in Rwanda",
    description:
      "GS Gaseke is a learning community in Gicumbi–Mutete–Gaseke, Rwanda, offering Nursery, Primary, O-Level and A-Level education in Mathematics, Economy, Physics and Computer Science.",
    path: "/",
  },
  portal: {
    title: "School Portal | GS Gaseke",
    description:
      "Secure GS Gaseke school access for authorized school managers, teachers and students.",
    path: "/portal",
  },
  notFound: {
    title: "Page Not Found | GS Gaseke",
    description: "The requested GS Gaseke page could not be found.",
    path: "/404",
  },
} as const;

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function applyPageSeo({ title, description, path }: { title: string; description: string; path: string }) {
  if (typeof document === "undefined") return;
  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", `${SITE_URL}${path}`);
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);

  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.appendChild(canonical);
  }
  canonical.href = `${SITE_URL}${path}`;
}
