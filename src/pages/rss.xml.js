import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (await getCollection("posts")).sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return rss({
    title: "Rishav Dhar",
    description: "Notes on infrastructure as code, CI/CD and platform engineering.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
    })),
  });
}
