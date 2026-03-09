import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  canonical?: string;
  schema?: object | object[];
}

export default function SEOHead({
  title,
  description,
  ogImage = "/assets/generated/hero-bond-cleaning-sydney.dim_1200x600.jpg",
  canonical,
  schema,
}: SEOHeadProps) {
  const baseUrl = "https://trubondcleaningsydney.com.au";
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${baseUrl}${ogImage}`;
  const fullCanonical = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${baseUrl}${canonical}`
    : baseUrl;

  useEffect(() => {
    // Title
    document.title = title;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:image", fullOgImage, true);
    setMeta("og:url", fullCanonical, true);
    setMeta("twitter:title", title, true);
    setMeta("twitter:description", description, true);
    setMeta("twitter:image", fullOgImage, true);
    setMeta("twitter:card", "summary_large_image", true);

    // Canonical
    let canonicalEl = document.querySelector('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", fullCanonical);

    // Schema
    if (schema) {
      const schemas = Array.isArray(schema) ? schema : [schema];
      // Remove old dynamic schemas
      for (const el of document.querySelectorAll(
        'script[data-seo-schema="true"]',
      )) {
        el.remove();
      }
      for (const s of schemas) {
        const scriptEl = document.createElement("script");
        scriptEl.type = "application/ld+json";
        scriptEl.setAttribute("data-seo-schema", "true");
        scriptEl.textContent = JSON.stringify(s);
        document.head.appendChild(scriptEl);
      }
    }
  }, [title, description, fullOgImage, fullCanonical, schema]);

  return null;
}
