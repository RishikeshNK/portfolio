const WORDS_PER_MINUTE = 230;

export const formatDate = (date: Date, month: "short" | "long" = "short") =>
  date.toLocaleDateString("en-US", { year: "numeric", month, day: "numeric", timeZone: "UTC" });

export const readingTime = (markdown = "") =>
  `${Math.max(1, Math.round(markdown.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE))} min read`;
