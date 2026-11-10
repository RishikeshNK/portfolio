import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { WRITING_ENABLED } from "../constants";

export function getStaticPaths() {
  return WRITING_ENABLED ? [{ params: { feed: "rss" } }] : [];
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const GET: APIRoute = async ({ site }) => {
  const posts = (await getCollection("writing", (p) => !p.data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
  const items = posts
    .map((post) => {
      const link = new URL(`/writing/${post.id}`, site).href;
      return `<item>
<title>${escape(post.data.title)}</title>
<link>${link}</link>
<guid>${link}</guid>
<pubDate>${post.data.date.toUTCString()}</pubDate>
<description>${escape(post.rendered?.html ?? post.data.description ?? "")}</description>
</item>`;
    })
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>Rishi Kanabar</title>
<link>${new URL("/writing", site).href}</link>
<description>Writing by Rishi Kanabar</description>
${items}
</channel>
</rss>
`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
};
