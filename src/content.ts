import { getCollection } from "astro:content";

// Newest first
export const getPosts = async () =>
  (await getCollection("posts")).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

export const getWorks = async () =>
  (await getCollection("work")).sort((a, b) => b.data.start.getTime() - a.data.start.getTime());
