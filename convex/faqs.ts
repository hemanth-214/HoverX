import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {
    category: v.optional(v.string()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const faqs = await ctx.db.query("faqs").collect();
    
    let filteredFaqs = faqs;
    
    if (args.category) {
      filteredFaqs = filteredFaqs.filter(faq => faq.category === args.category);
    }
    
    if (args.active !== undefined) {
      filteredFaqs = filteredFaqs.filter(faq => faq.active === args.active);
    } else {
      filteredFaqs = filteredFaqs.filter(faq => faq.active === true);
    }
    
    // Sort by order
    return filteredFaqs.sort((a, b) => a.order - b.order);
  },
});

export const create = mutation({
  args: {
    question: v.string(),
    answer: v.string(),
    category: v.string(),
    order: v.number(),
    active: v.boolean(),
  },
  handler: async (ctx, args) => {
    const faqId = await ctx.db.insert("faqs", args);
    return faqId;
  },
});

export const update = mutation({
  args: {
    id: v.id("faqs"),
    question: v.optional(v.string()),
    answer: v.optional(v.string()),
    category: v.optional(v.string()),
    order: v.optional(v.number()),
    active: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...updates } = args;
    await ctx.db.patch(id, updates);
  },
});

export const remove = mutation({
  args: { id: v.id("faqs") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
