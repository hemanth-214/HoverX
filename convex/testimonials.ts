import { query } from "./_generated/server";

export const getFeatured = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("testimonials")
      .filter((q) => q.eq(q.field("featured"), true))
      .order("desc")
      .collect();
  },
});

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("testimonials").order("desc").collect();
  },
});
