import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    projectType: v.string(),
    budget: v.string(),
    message: v.string(),
    status: v.optional(v.string()),
  }).index("by_email", ["email"]),

  projects: defineTable({
    title: v.string(),
    description: v.string(),
    category: v.string(),
    technologies: v.array(v.string()),
    imageUrl: v.optional(v.string()),
    liveUrl: v.optional(v.string()),
    githubUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
    completedAt: v.optional(v.number()),
  }).index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  testimonials: defineTable({
    name: v.string(),
    company: v.string(),
    role: v.string(),
    content: v.string(),
    rating: v.number(),
    imageUrl: v.optional(v.string()),
    featured: v.optional(v.boolean()),
  }).index("by_featured", ["featured"]),

  blogPosts: defineTable({
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
    publishedAt: v.optional(v.number()),
    featured: v.optional(v.boolean()),
  }).index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_category", ["category"])
    .index("by_featured", ["featured"]),

  services: defineTable({
    title: v.string(),
    description: v.string(),
    features: v.array(v.string()),
    price: v.string(),
    duration: v.string(),
    category: v.string(),
    popular: v.optional(v.boolean()),
    active: v.boolean(),
  }).index("by_category", ["category"])
    .index("by_popular", ["popular"]),

  faqs: defineTable({
    question: v.string(),
    answer: v.string(),
    category: v.string(),
    order: v.number(),
    active: v.boolean(),
  }).index("by_category", ["category"])
    .index("by_order", ["order"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
