"use client";

import { useMemo, useState } from "react";

type Post = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export default function BlogsClient({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0] ?? "All");

  const visiblePosts = useMemo(() => {
    if (!activeCategory || activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [activeCategory, posts]);

  const featured = useMemo(() => {
    if (visiblePosts.length === 0) return undefined;
    return visiblePosts.find((p) => p.featured) ?? visiblePosts[0];
  }, [visiblePosts]);

  const rest = useMemo(() => {
    if (!featured) return [];
    return visiblePosts.filter((p) => p !== featured);
  }, [featured, visiblePosts]);

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((c) => {
          const selected = c === activeCategory;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActiveCategory(c)}
              className={`font-sans text-[11px] font-semibold uppercase tracking-[0.14em] px-5 py-2.5 rounded-full border transition-colors ${
                selected
                  ? "bg-navy text-white border-navy"
                  : "bg-white text-body border-black/10 hover:border-navy/30 hover:text-navy"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      {visiblePosts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 border border-black/5 card-base text-center">
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-body mb-3">
            No posts found
          </div>
          <p className="font-serif text-headline text-xl">
            There are no articles in <span className="italic-accent">{activeCategory}</span> yet.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory("All")}
            className="btn-navy inline-flex mt-8"
          >
            View All Posts →
          </button>
        </div>
      ) : (
        <>
          {/* Featured post */}
          {featured && (
            <div className="bg-white rounded-3xl overflow-hidden card-base mb-10 grid grid-cols-1 lg:grid-cols-2">
              <div className="overflow-hidden h-64 lg:h-auto">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-10 lg:p-14 flex flex-col justify-center">
                <div className="inline-block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-navy-light bg-indigo-tint px-3 py-1.5 rounded-full mb-5 self-start">
                  Featured · {featured.category}
                </div>
                <h2 className="font-serif text-headline text-3xl leading-snug mb-4">{featured.title}</h2>
                <p className="font-sans text-body text-sm leading-relaxed mb-7">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-sans text-xs text-body">{featured.date}</span>
                    <span className="font-sans text-xs text-body mx-2">·</span>
                    <span className="font-sans text-xs text-body">{featured.readTime} read</span>
                  </div>
                  <a href="#" className="font-sans text-sm font-semibold text-navy-light hover:text-navy transition-colors">
                    Read →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <div key={post.title} className="bg-white rounded-2xl overflow-hidden card-base group">
                <div className="overflow-hidden h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <div className="inline-block font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-navy-light bg-indigo-tint px-3 py-1.5 rounded-full mb-4">
                    {post.category}
                  </div>
                  <h3 className="font-serif text-headline text-xl leading-snug mb-3 group-hover:text-navy transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-sans text-body text-sm leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] text-body">
                      {post.date} · {post.readTime}
                    </span>
                    <a href="#" className="font-sans text-xs font-semibold text-navy-light hover:text-navy transition-colors">
                      Read →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

