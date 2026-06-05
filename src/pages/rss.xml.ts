import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedBlogPosts, getPublishedProjects } from "@lib/content";
import { HOME } from "@consts";

export async function GET(context: APIContext) {
  const [blog, projects] = await Promise.all([
    getPublishedBlogPosts(),
    getPublishedProjects(),
  ]);

  const items = [...blog, ...projects]
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site!,
    items: items.map((item) => ({
      ...item.data,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
