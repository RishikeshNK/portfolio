import type { APIRoute } from "astro";
import { NAME, WRITING_ENABLED } from "../constants";
import { getPosts } from "../posts";

export function getStaticPaths() {
  return WRITING_ENABLED ? [{ params: { feed: "rss" } }] : [];
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const GET: APIRoute = async ({ site }) => {
  const items = (await getPosts())
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
<title>${NAME}</title>
<link>${new URL("/writing", site).href}</link>
<description>Writing by ${NAME}</description>
${items}
</channel>
</rss>
`,
    { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } },
  );
};
