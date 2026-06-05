import { type CollectionEntry, getCollection } from "astro:content";

type Publishable = CollectionEntry<"blog"> | CollectionEntry<"projects">;

function byPubDateDesc(a: Publishable, b: Publishable) {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

function byDateStartDesc(a: CollectionEntry<"work">, b: CollectionEntry<"work">) {
  return b.data.dateStart.valueOf() - a.data.dateStart.valueOf();
}

export async function getPublishedBlogPosts() {
  const posts = await getCollection("blog");
  return posts.filter((post) => !post.data.draft).sort(byPubDateDesc);
}

export async function getPublishedProjects() {
  const projects = await getCollection("projects");
  return projects.filter((project) => !project.data.draft).sort(byPubDateDesc);
}

export async function getSortedWork() {
  const work = await getCollection("work");
  return work.sort(byDateStartDesc);
}
