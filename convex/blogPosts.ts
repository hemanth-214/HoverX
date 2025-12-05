import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    published: v.optional(v.boolean()),
    category: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const posts = await ctx.db.query("blogPosts").collect();
    
    let filteredPosts = posts;
    
    if (args.published !== undefined) {
      filteredPosts = filteredPosts.filter(post => post.published === args.published);
    }
    
    if (args.category) {
      filteredPosts = filteredPosts.filter(post => post.category === args.category);
    }
    
    if (args.featured !== undefined) {
      filteredPosts = filteredPosts.filter(post => post.featured === args.featured);
    }
    
    // Sort by creation time (newest first)
    filteredPosts.sort((a, b) => b._creationTime - a._creationTime);
    
    // Apply limit
    if (args.limit) {
      filteredPosts = filteredPosts.slice(0, args.limit);
    }
    
    return filteredPosts;
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db
      .query("blogPosts")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .unique();

    return post;
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    content: v.string(),
    category: v.string(),
    tags: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    published: v.boolean(),
    readTime: v.string(),
    author: v.string(),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert("blogPosts", {
      ...args,
      publishedAt: args.published ? Date.now() : undefined,
    });

    return postId;
  },
});

export const update = mutation({
  args: {
    id: v.id("blogPosts"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    excerpt: v.optional(v.string()),
    content: v.optional(v.string()),
    category: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    imageUrl: v.optional(v.string()),
    published: v.optional(v.boolean()),
    readTime: v.optional(v.string()),
    author: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    
    // If publishing for the first time, set publishedAt
    if (updates.published) {
      const existingPost = await ctx.db.get(id);
      if (existingPost && !existingPost.publishedAt) {
        (updates as any).publishedAt = Date.now();
      }
    }

    await ctx.db.patch(id, updates);
  },
});

export const remove = mutation({
  args: { id: v.id("blogPosts") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query("blogPosts").collect();
    const categories = [...new Set(posts.map(post => post.category))];
    return categories;
  },
});
