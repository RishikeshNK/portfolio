import { getCollection } from "astro:content";
import { WRITING_ENABLED } from "./constants";

export const getPosts = async () =>
  WRITING_ENABLED
    ? (await getCollection("writing", (p) => !p.data.draft)).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
      )
    : [];
